import { h, md, md1 } from '../ui/dom.js';
import { renderDiagram } from '../ui/diagrams.js';
import { isLevelUnlocked, lessonStatus, recordLessonRead, lessonQuizPass } from '../engine/progress.js';

const CALLOUT_LABELS = {
  tip: 'Tip',
  fact: 'Good to know',
  warning: 'Watch out',
  myth: 'Myth check',
  law: 'The rule',
  history: 'History',
};

export function renderBlock(b) {
  switch (b.type) {
    case 'text':
      return h('div', { class: 'prose' }, md(b.md));
    case 'callout':
      return h(
        'aside',
        { class: ['callout', `callout-${b.variant}`] },
        h('p', { class: 'callout-label' }, CALLOUT_LABELS[b.variant] || 'Note'),
        b.title ? h('p', { class: 'callout-title' }, md1(b.title)) : null,
        h('div', { class: 'prose' }, md(b.md)),
      );
    case 'keyTerms':
      return h(
        'section',
        { class: 'terms' },
        h('h3', { class: 'h-small' }, b.title || 'Key terms'),
        h('dl', null, b.terms.map((t) => h('div', { class: 'term' }, h('dt', null, t.term), h('dd', null, md1(t.definition))))),
      );
    case 'table':
      return h(
        'figure',
        { class: 'table-fig' },
        b.caption ? h('figcaption', null, md1(b.caption)) : null,
        h(
          'div',
          { class: 'table-scroll', tabindex: '0', role: 'region', 'aria-label': b.caption ? stripMd(b.caption) : 'Table' },
          h(
            'table',
            null,
            h('thead', null, h('tr', null, b.headers.map((x) => h('th', { scope: 'col' }, md1(x))))),
            h('tbody', null, b.rows.map((row) => h('tr', null, row.map((cell, i) => (i === 0 ? h('th', { scope: 'row' }, md1(String(cell))) : h('td', null, md1(String(cell)))))))),
          ),
        ),
      );
    case 'steps':
      return h(
        'section',
        { class: 'steps' },
        b.title ? h('h3', { class: 'h-small' }, md1(b.title)) : null,
        h('ol', null, b.items.map((it) => h('li', null, h('p', { class: 'step-title' }, md1(it.title)), h('div', { class: 'prose' }, md(it.md))))),
      );
    case 'compare':
      return h(
        'section',
        { class: 'compare' },
        b.title ? h('h3', { class: 'h-small' }, md1(b.title)) : null,
        h(
          'div',
          { class: 'compare-grid', style: { '--cols': String(Math.min(b.columns.length, 3)) } },
          b.columns.map((c) => h('div', { class: 'compare-col' }, h('p', { class: 'compare-head' }, md1(c.heading)), h('ul', null, c.points.map((p) => h('li', null, md1(p)))))),
        ),
      );
    case 'tasting':
      return h(
        'section',
        { class: 'tasting' },
        h('p', { class: 'tasting-label' }, 'Optional tasting exercise'),
        h('h3', null, md1(b.title)),
        b.md ? h('div', { class: 'prose' }, md(b.md)) : null,
        h(
          'ol',
          { class: 'flight' },
          b.flight.map((f, i) => h('li', null, h('span', { class: 'glass', 'aria-hidden': 'true' }, String(i + 1)), h('div', null, h('p', { class: 'pour' }, md1(f.pour)), h('p', { class: 'look-for' }, md1(f.lookFor))))),
        ),
        h('p', { class: 'tasting-note' }, '15–20 ml pours are plenty. Taste in order, sip water between glasses, and spit if you are tasting more than a couple. Log your notes in the Journal.'),
      );
    case 'diagram':
      return renderDiagram(b.name);
    default:
      return null;
  }
}

function stripMd(s) {
  return String(s).replace(/\*\*|\*|`/g, '');
}

export function renderLesson(ctx, lessonId) {
  const entry = ctx.index.lessons.get(lessonId);
  if (!entry) return h('section', { class: 'page' }, h('h1', null, 'Lesson not found'), h('a', { class: 'btn btn-primary', href: '#home' }, 'Back to the course map'));
  const { level, lesson, position } = entry;
  const { course, progress } = ctx;
  if (!isLevelUnlocked(course, progress, level.number)) {
    return h(
      'section',
      { class: 'page' },
      h('a', { class: 'crumb', href: `#level-${level.number}` }, `← Level ${level.number}`),
      h('h1', null, lesson.title),
      h('p', null, `This lesson is on a locked floor. Pass the Level ${level.number - 1} exam to open it, or turn on preview mode in your profile.`),
      h('a', { class: 'btn btn-primary', href: `#level-${level.number - 1}` }, `Go to Level ${level.number - 1}`),
    );
  }
  const status = lessonStatus(progress, lesson.id);
  const prev = level.lessons[position - 1];
  const next = level.lessons[position + 1];

  const markRead = () => {
    if (lessonStatus(ctx.progress, lesson.id) === 'new') ctx.update((p, now) => recordLessonRead(p, lesson.id, now));
  };

  const head = h(
    'header',
    { class: 'lesson-head' },
    h('a', { class: 'crumb', href: `#level-${level.number}` }, `← Level ${level.number}: ${level.title}`),
    h('p', { class: 'eyebrow' }, `Lesson ${position + 1} of ${level.lessons.length} · ${lesson.minutes} min read`),
    h('h1', null, lesson.title),
    h('p', { class: 'lede' }, lesson.summary),
  );

  const body = h('article', { class: 'lesson-body' }, lesson.blocks.map(renderBlock));

  const end = h(
    'section',
    { class: 'lesson-end' },
    h('h2', { class: 'h-small' }, 'Check what stuck'),
    h('p', null, `${lesson.quiz.length} questions. Pass with ${lessonQuizPass(level)}% to fill this barrel.`),
    h(
      'div',
      { class: 'row' },
      h('a', { class: 'btn btn-primary', href: `#quiz-${lesson.id}`, onclick: markRead }, status === 'passed' ? 'Retake the quiz' : 'Take the quiz'),
      status === 'new' ? h('button', { type: 'button', class: 'btn btn-ghost', onclick: markRead }, 'Mark as read') : h('span', { class: 'hint' }, status === 'passed' ? 'Quiz passed.' : 'Marked as read.'),
    ),
  );

  const pager = h(
    'nav',
    { class: 'pager', 'aria-label': 'Lessons' },
    prev ? h('a', { class: 'pager-link', href: `#lesson-${prev.id}` }, h('span', null, '← Previous lesson'), h('strong', null, prev.title)) : h('a', { class: 'pager-link', href: `#level-${level.number}` }, h('span', null, '← Level overview'), h('strong', null, level.title)),
    next ? h('a', { class: 'pager-link next', href: `#lesson-${next.id}` }, h('span', null, 'Next lesson →'), h('strong', null, next.title)) : h('a', { class: 'pager-link next', href: `#exam-${level.number}` }, h('span', null, 'Level exam →'), h('strong', null, `Level ${level.number} exam`)),
  );

  return h('div', { class: 'page lesson' }, head, body, end, pager);
}
