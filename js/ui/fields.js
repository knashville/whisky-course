// Shared form and readout helpers for the Tools page.

import { h, clear } from './dom.js';

export function numField(id, label, value, onInput, { unit = '', step = 'any', min, max, hint } = {}) {
  return h(
    'label',
    { class: 'field', for: id },
    h('span', { class: 'field-label' }, label),
    h(
      'span',
      { class: 'field-input' },
      h('input', { id, type: 'number', inputmode: 'decimal', step, min, max, value: String(value), oninput: (e) => onInput(parseFloat(e.target.value)) }),
      unit ? h('span', { class: 'unit' }, unit) : null,
    ),
    hint ? h('span', { class: 'field-hint' }, hint) : null,
  );
}

export function output(rows) {
  return h(
    'dl',
    { class: 'readout' },
    rows.map(([k, v, big]) => h('div', { class: big ? 'is-big' : '' }, h('dt', null, k), h('dd', { class: 'tabular' }, v))),
  );
}

export function errorBox(e) {
  return h('p', { class: 'tool-error', role: 'alert' }, e instanceof RangeError ? e.message : 'Check the numbers you entered.');
}

export function live(compute) {
  const out = h('div', { class: 'tool-out', 'aria-live': 'polite' });
  const update = () => {
    clear(out);
    try {
      out.append(compute());
    } catch (e) {
      out.append(errorBox(e));
    }
  };
  return { out, update };
}

export function toolShell(title, intro, fields, out, note) {
  return h('div', { class: 'tool' }, h('h2', null, title), h('p', { class: 'tool-intro' }, intro), h('div', { class: 'tool-grid' }, h('div', { class: 'tool-fields' }, fields), out), note ? h('p', { class: 'hint' }, note) : null);
}

