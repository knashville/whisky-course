// App shell: routing, shared state and the top-level render.
//
// Routes are plain hash names (Artifact viewers only pass "#name"):
//   #home  #level-3  #lesson-<id>  #quiz-<id>  #exam-3  #glossary
//   #flashcards  #tools  #journal  #profile  #certificate

import { h, clear } from './ui/dom.js';
import { createStore } from './engine/storage.js';
import { setFlag } from './engine/progress.js';
import { renderHome } from './views/home.js';
import { renderLevel } from './views/level.js';
import { renderLesson } from './views/lesson.js';
import { renderQuiz, renderExam } from './views/assess.js';
import { renderGlossary } from './views/glossary.js';
import { renderFlashcards } from './views/flashcards.js';
import { renderTools } from './views/tools.js';
import { renderJournal } from './views/journal.js';
import { renderProfile } from './views/profile.js';
import { renderCertificate } from './views/certificate.js';

const NAV = [
  ['home', 'Course'],
  ['glossary', 'Glossary'],
  ['flashcards', 'Flashcards'],
  ['tools', 'Tools'],
  ['journal', 'Journal'],
  ['profile', 'Profile'],
];

export function startApp(course, root) {
  const store = createStore();
  const index = buildIndex(course);
  // Ephemeral per-session state (an exam in progress, flashcard session...).
  const session = { exam: null, quiz: null, cards: null, tool: null };

  const ctx = {
    course,
    index,
    store,
    session,
    get progress() {
      return store.get();
    },
    update(fn) {
      store.set(fn(store.get(), Date.now()));
    },
    go(route) {
      if (location.hash.slice(1) === route) render();
      else location.hash = route;
    },
    rerender: () => render(),
  };

  const header = h(
    'header',
    { class: 'topbar' },
    h(
      'div',
      { class: 'topbar-inner' },
      h('a', { class: 'brand', href: '#home' }, h('span', { class: 'brand-mark', 'aria-hidden': 'true' }, course.mark || 'WC'), h('span', { class: 'brand-name' }, course.title)),
      h(
        'nav',
        { class: 'nav', 'aria-label': 'Main' },
        NAV.map(([route, label]) => h('a', { href: `#${route}`, class: 'nav-link', dataset: { route } }, label)),
      ),
    ),
  );
  const banner = h('div', { class: 'age-banner-slot' });
  const main = h('main', { id: 'view', class: 'view', tabindex: '-1' });
  const footer = h(
    'footer',
    { class: 'footer' },
    h(
      'div',
      { class: 'footer-inner' },
      h('p', null, `${course.title} is an educational course for adults of legal drinking age. Tasting exercises are optional: you can finish every level without drinking. When you taste, pour small measures, use a spittoon, drink water, and never drive after drinking.`),
      h('p', { class: 'footer-small' }, 'Regulatory summaries are for learning, not legal or label-approval advice.'),
    ),
  );
  clear(root).append(header, banner, main, footer);

  function renderBanner() {
    clear(banner);
    if (store.get().ageConfirmed) return;
    banner.appendChild(
      h(
        'div',
        { class: 'age-banner', role: 'region', 'aria-label': 'Age notice' },
        h(
          'div',
          { class: 'age-banner-inner' },
          h('p', null, h('strong', null, 'For adults of legal drinking age. '), 'The course teaches about whiskey; tasting is optional and every quiz can be passed without it.'),
          h('button', { type: 'button', class: 'btn btn-secondary', onclick: () => ctx.update((p, now) => setFlag(p, 'ageConfirmed', true, now)) }, 'I am of legal drinking age'),
        ),
      ),
    );
  }

  let lastRoute = null;
  function render() {
    const route = location.hash.slice(1) || 'home';
    const changed = route !== lastRoute;
    lastRoute = route;
    for (const a of header.querySelectorAll('.nav-link')) {
      const r = a.dataset.route;
      const active = r === route || (r === 'home' && /^(home|level-|lesson-|quiz-|exam-|certificate)/.test(route));
      if (active) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    }
    renderBanner();
    let view;
    try {
      view = route_(route);
    } catch (e) {
      console.error(e);
      view = h('section', { class: 'page' }, h('h1', null, 'Something went wrong'), h('p', null, String(e.message || e)), h('a', { href: '#home', class: 'btn btn-primary' }, 'Back to the course'));
    }
    clear(main).appendChild(view);
    if (changed) {
      window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
      main.focus({ preventScroll: true });
      document.title = `${titleFor(route)} · ${course.title}`;
    }
  }

  function titleFor(route) {
    let m;
    if ((m = /^level-(\d+)$/.exec(route))) return index.levels.get(Number(m[1]))?.title || 'Level';
    if ((m = /^(lesson|quiz)-(.+)$/.exec(route))) return index.lessons.get(m[2])?.lesson.title || 'Lesson';
    if ((m = /^exam-(\d+)$/.exec(route))) return `Level ${m[1]} exam`;
    const nav = NAV.find(([r]) => r === route);
    return nav ? nav[1] : 'Course';
  }

  function route_(route) {
    let m;
    if (route === 'home') return renderHome(ctx);
    if ((m = /^level-(\d+)$/.exec(route))) return renderLevel(ctx, Number(m[1]));
    if ((m = /^lesson-(.+)$/.exec(route))) return renderLesson(ctx, m[1]);
    if ((m = /^quiz-(.+)$/.exec(route))) return renderQuiz(ctx, m[1]);
    if ((m = /^exam-(\d+)$/.exec(route))) return renderExam(ctx, Number(m[1]));
    if (route === 'glossary') return renderGlossary(ctx);
    if (route === 'flashcards') return renderFlashcards(ctx);
    if (route === 'tools') return renderTools(ctx);
    if (route === 'journal') return renderJournal(ctx);
    if (route === 'profile') return renderProfile(ctx);
    if (route === 'certificate') return renderCertificate(ctx);
    return notFound();
  }

  function notFound() {
    return h('section', { class: 'page' }, h('h1', null, 'Page not found'), h('p', null, 'That address does not match a page in this course.'), h('a', { href: '#home', class: 'btn btn-primary' }, 'Go to the course map'));
  }

  // Views that hold live widgets (timers, sessions) re-render themselves; progress
  // changes from sync re-render the current view unless an assessment is running.
  store.subscribe(() => {
    if (session.exam?.running || session.quiz?.running) {
      renderBanner();
      return;
    }
    render();
  });
  window.addEventListener('hashchange', render);
  render();
  store.connectCloud();

  // Keep an in-progress exam across live updates of the artifact.
  try {
    window.claude?.hot?.snapshot?.(() => ({ route: location.hash.slice(1) }));
  } catch {
    /* optional */
  }
  return ctx;
}

function buildIndex(course) {
  const levels = new Map();
  const lessons = new Map();
  for (const level of course.levels) {
    levels.set(level.number, level);
    level.lessons.forEach((lesson, i) => lessons.set(lesson.id, { level, lesson, position: i }));
  }
  return { levels, lessons };
}
