import { h, md1, clear } from '../ui/dom.js';
import { isLevelUnlocked } from '../engine/progress.js';
import { plainText } from '../engine/markdown.js';

export function collectTerms(course) {
  const terms = [];
  const seen = new Map();
  for (const level of course.levels) {
    for (const lesson of level.lessons) {
      for (const b of lesson.blocks) {
        if (b.type !== 'keyTerms') continue;
        for (const t of b.terms) {
          const key = t.term.trim().toLowerCase();
          if (seen.has(key)) continue;
          const entry = { term: t.term.trim(), definition: t.definition, level, lesson };
          seen.set(key, entry);
          terms.push(entry);
        }
      }
    }
  }
  return terms.sort((a, b) => a.term.localeCompare(b.term, undefined, { sensitivity: 'base' }));
}

export function renderGlossary(ctx) {
  const terms = collectTerms(ctx.course);
  const state = ctx.session.glossary || (ctx.session.glossary = { query: '', level: 'all' });
  const list = h('div', { class: 'glossary-list' });
  const count = h('p', { class: 'hint', 'aria-live': 'polite' });

  const draw = () => {
    const q = state.query.trim().toLowerCase();
    const filtered = terms.filter(
      (t) =>
        (state.level === 'all' || String(t.level.number) === state.level) &&
        (!q || t.term.toLowerCase().includes(q) || plainText(t.definition).toLowerCase().includes(q)),
    );
    count.textContent = `${filtered.length} of ${terms.length} terms`;
    clear(list);
    if (!filtered.length) {
      list.appendChild(h('p', { class: 'empty' }, 'No terms match. Try a shorter word or a different level.'));
      return;
    }
    const groups = new Map();
    for (const t of filtered) {
      const letter = /[a-z]/i.test(t.term[0]) ? t.term[0].toUpperCase() : '#';
      if (!groups.has(letter)) groups.set(letter, []);
      groups.get(letter).push(t);
    }
    for (const [letter, items] of groups) {
      list.appendChild(
        h(
          'section',
          { class: 'gl-group' },
          h('h2', { class: 'gl-letter' }, letter),
          h(
            'dl',
            null,
            items.map((t) => {
              const open = isLevelUnlocked(ctx.course, ctx.progress, t.level.number);
              return h(
                'div',
                { class: 'gl-term' },
                h('dt', null, t.term),
                h('dd', null, md1(t.definition)),
                h('dd', { class: 'gl-src' }, open ? h('a', { href: `#lesson-${t.lesson.id}` }, `Level ${t.level.number} · ${t.lesson.title}`) : `Level ${t.level.number} · ${t.lesson.title}`),
              );
            }),
          ),
        ),
      );
    }
  };

  const search = h('input', {
    id: 'glossary-search',
    type: 'search',
    placeholder: 'Search terms and definitions',
    value: state.query,
    autocomplete: 'off',
    oninput: (e) => {
      state.query = e.target.value;
      draw();
    },
  });
  const levelSel = h(
    'select',
    {
      id: 'glossary-level',
      onchange: (e) => {
        state.level = e.target.value;
        draw();
      },
    },
    h('option', { value: 'all', selected: state.level === 'all' }, 'All levels'),
    ctx.course.levels.map((lv) => h('option', { value: String(lv.number), selected: state.level === String(lv.number) }, `Level ${lv.number}: ${lv.title}`)),
  );
  draw();
  return h(
    'div',
    { class: 'page glossary' },
    h('header', { class: 'page-head' }, h('p', { class: 'eyebrow' }, 'Reference'), h('h1', null, 'Glossary'), h('p', { class: 'lede' }, 'Every key term from every lesson, A to Z. Terms from locked levels are listed so you can look ahead.')),
    h('div', { class: 'toolbar' }, h('label', { class: 'field grow', for: 'glossary-search' }, h('span', { class: 'field-label' }, 'Search'), search), h('label', { class: 'field', for: 'glossary-level' }, h('span', { class: 'field-label' }, 'Level'), levelSel)),
    count,
    list,
  );
}
