import { h, clear, formatDate, button, confirmButton } from '../ui/dom.js';
import { addJournalEntry, removeJournalEntry } from '../engine/progress.js';

const STYLES = [
  'Bourbon',
  'Rye (American)',
  'Tennessee whiskey',
  'Wheat whiskey',
  'Corn whiskey',
  'American single malt',
  'Other American whiskey',
  'Scotch single malt',
  'Blended Scotch',
  'Scotch grain or blended malt',
  'Irish single pot still',
  'Irish (other)',
  'Japanese',
  'Canadian',
  'Other world whisky',
];

const EXAMPLE = {
  id: 'example',
  example: true,
  name: 'Example: a 4-year bottled-in-bond bourbon',
  style: 'Bourbon',
  abv: 50,
  age: '4 years',
  nose: 'Caramel, orange peel, toasted oak; a little ethanol heat until it opens.',
  palate: 'Brown sugar, vanilla, baking spice from the rye; medium body.',
  finish: 'Medium length; drying oak and black pepper.',
  rating: 4,
  at: 0,
};

export function renderJournal(ctx) {
  const st = ctx.session.journal || (ctx.session.journal = { draft: blank(), sort: 'new' });
  const entries = ctx.progress.journal.slice();
  const root = h('div', { class: 'page journal' });

  const form = h('form', { class: 'journal-form', onsubmit: (e) => e.preventDefault() });
  const d = st.draft;
  const text = (k, label, opts = {}) =>
    h('label', { class: ['field', opts.wide && 'wide'], for: `jn-${k}` }, h('span', { class: 'field-label' }, label), (opts.area ? h('textarea', { id: `jn-${k}`, rows: '2', oninput: (e) => (d[k] = e.target.value) }, d[k] || '') : h('input', { id: `jn-${k}`, type: opts.type || 'text', value: d[k] ?? '', step: 'any', oninput: (e) => (d[k] = e.target.value), placeholder: opts.placeholder || '' })));
  const rating = h(
    'fieldset',
    { class: 'rating' },
    h('legend', null, 'Rating'),
    [1, 2, 3, 4, 5].map((n) =>
      h('label', { class: 'rating-opt', for: `jn-r${n}` }, h('input', { id: `jn-r${n}`, type: 'radio', name: 'jn-rating', value: String(n), checked: Number(d.rating) === n, onchange: () => (d.rating = n) }), h('span', null, '★'.repeat(n)), h('span', { class: 'sr-only' }, `${n} of 5`)),
    ),
  );
  const msg = h('p', { class: 'hint', 'aria-live': 'polite' });
  form.append(
    h('h2', { class: 'h-small' }, 'Log a tasting'),
    h(
      'div',
      { class: 'grid-2' },
      text('name', 'Whiskey', { placeholder: 'Distillery, expression, batch' }),
      h('label', { class: 'field', for: 'jn-style' }, h('span', { class: 'field-label' }, 'Style'), h('select', { id: 'jn-style', onchange: (e) => (d.style = e.target.value) }, STYLES.map((s) => h('option', { value: s, selected: d.style === s }, s)))),
      text('abv', 'Strength (% ABV)', { type: 'number' }),
      text('age', 'Age statement', { placeholder: 'e.g. 12 years, NAS' }),
    ),
    text('nose', 'Nose', { area: true, wide: true }),
    text('palate', 'Palate', { area: true, wide: true }),
    text('finish', 'Finish', { area: true, wide: true }),
    rating,
    h(
      'div',
      { class: 'row' },
      button('Save tasting', () => {
        if (!String(d.name || '').trim()) {
          msg.textContent = 'Give the whiskey a name before saving.';
          form.querySelector('#jn-name')?.focus();
          return;
        }
        const entry = { ...d, name: String(d.name).trim().slice(0, 140), abv: d.abv === '' || d.abv == null ? null : Number(d.abv) };
        st.draft = blank();
        ctx.update((p, now) => addJournalEntry(p, entry, now));
      }),
      button('Clear', () => {
        st.draft = blank();
        ctx.rerender();
      }, { kind: 'ghost' }),
    ),
    msg,
  );

  const sorted = entries.sort((a, b) => (st.sort === 'rating' ? (b.rating || 0) - (a.rating || 0) || b.at - a.at : b.at - a.at));
  const list = h('section', { class: 'journal-list', 'aria-labelledby': 'jl-title' });
  const sortSel = h(
    'select',
    { id: 'jn-sort', onchange: (e) => ((st.sort = e.target.value), ctx.rerender()) },
    h('option', { value: 'new', selected: st.sort === 'new' }, 'Newest first'),
    h('option', { value: 'rating', selected: st.sort === 'rating' }, 'Highest rated'),
  );
  list.append(h('div', { class: 'section-head row spread' }, h('h2', { id: 'jl-title', class: 'h-small' }, `Your tastings (${entries.length})`), entries.length > 1 ? h('label', { class: 'field inline', for: 'jn-sort' }, h('span', { class: 'field-label' }, 'Sort'), sortSel) : null));
  if (!entries.length) {
    list.append(h('p', { class: 'hint' }, 'No tastings yet. Here is what an entry looks like:'), entryCard(ctx, EXAMPLE));
  } else {
    list.append(h('div', { class: 'entries' }, sorted.map((e) => entryCard(ctx, e))));
  }

  root.append(
    h('header', { class: 'page-head' }, h('p', { class: 'eyebrow' }, 'Tasting notes'), h('h1', null, 'Journal'), h('p', { class: 'lede' }, 'Write down what you smell and taste. Comparing your notes over time is how a palate gets trained. Notes are saved with your progress.')),
    h('div', { class: 'journal-grid' }, form, list),
  );
  return root;
}

function blank() {
  return { name: '', style: 'Bourbon', abv: '', age: '', nose: '', palate: '', finish: '', rating: 0 };
}

function entryCard(ctx, e) {
  return h(
    'article',
    { class: ['entry', e.example && 'is-example'] },
    h('header', null, h('h3', null, e.name), h('p', { class: 'entry-meta' }, [e.style, e.abv ? `${e.abv}% ABV` : null, e.age || null, e.at ? formatDate(e.at) : null].filter(Boolean).join(' · '))),
    e.rating ? h('p', { class: 'stars', 'aria-label': `${e.rating} of 5` }, '★'.repeat(e.rating) + '☆'.repeat(5 - e.rating)) : null,
    h('dl', null, [['Nose', e.nose], ['Palate', e.palate], ['Finish', e.finish]].filter(([, v]) => v).map(([k, v]) => h('div', null, h('dt', null, k), h('dd', null, v)))),
    e.example ? null : h('div', { class: 'entry-actions' }, confirmButton('Delete', 'Delete this tasting', () => ctx.update((p, now) => removeJournalEntry(p, e.id, now)))),
  );
}
