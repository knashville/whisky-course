// Interactive question widgets shared by lesson quizzes, level exams and reviews.

import { h, md, md1, clear } from './dom.js';
import { TYPE_LABELS, gradeQuestion, describeAnswer } from '../engine/quiz.js';

let uid = 0;

/**
 * @param prepared  display model from prepareQuestion()
 * @param opts.response   current response (original indices)
 * @param opts.onChange   (response) => void
 * @param opts.locked     disable inputs
 * @param opts.question   original question (needed when revealing)
 * @param opts.reveal     show correct/incorrect marks
 * @param opts.number     "Question 3 of 10" label
 */
export function renderQuestion(prepared, opts = {}) {
  const { response, onChange = () => {}, locked = false, question, reveal = false, number } = opts;
  const id = `q${++uid}`;
  const grade = reveal && question ? gradeQuestion(question, response) : null;

  const head = h(
    'div',
    { class: 'q-head' },
    h('span', { class: 'q-type' }, TYPE_LABELS[prepared.type]),
    number ? h('span', { class: 'q-number' }, number) : null,
  );
  const context = prepared.context ? h('div', { class: 'q-context' }, md(prepared.context, { breaks: true })) : null;
  const prompt = h('p', { class: 'q-prompt', id: `${id}-prompt` }, md1(prepared.prompt));

  let body;
  switch (prepared.type) {
    case 'single':
    case 'truefalse':
      body = choiceList(prepared, id, 'radio', response, onChange, locked, reveal ? question : null);
      break;
    case 'multi':
      body = choiceList(prepared, id, 'checkbox', response, onChange, locked, reveal ? question : null);
      break;
    case 'order':
      body = orderList(prepared, id, response, onChange, locked, grade);
      break;
    case 'match':
      body = matchList(prepared, id, response, onChange, locked, grade);
      break;
    case 'numeric':
      body = numericInput(prepared, id, response, onChange, locked, grade);
      break;
  }

  const feedback = reveal && question ? renderFeedback(question, grade) : null;
  return h(
    'section',
    { class: ['question', grade && (grade.correct ? 'is-right' : 'is-miss')], 'aria-labelledby': `${id}-prompt`, dataset: { qid: prepared.id } },
    head,
    context,
    prompt,
    body,
    feedback,
  );
}

export function renderFeedback(question, grade) {
  return h(
    'div',
    { class: ['q-feedback', grade.correct ? 'ok' : 'miss'], role: 'status' },
    h('p', { class: 'q-verdict' }, grade.correct ? 'Correct' : grade.answered ? 'Not quite' : 'Not answered'),
    !grade.correct ? h('p', { class: 'q-answer' }, h('span', { class: 'q-answer-label' }, 'Answer: '), md1(describeAnswer(question))) : null,
    h('div', { class: 'q-explain' }, md(question.explanation)),
  );
}

function choiceList(prepared, id, kind, response, onChange, locked, revealQ) {
  const selected = kind === 'checkbox' ? new Set(Array.isArray(response) ? response : []) : response;
  const key = revealQ ? (kind === 'checkbox' ? new Set(revealQ.answer) : revealQ.answer) : null;
  return h(
    'fieldset',
    { class: 'choices', disabled: locked },
    h('legend', { class: 'sr-only' }, 'Answer options'),
    prepared.options.map((opt, i) => {
      const inputId = `${id}-o${i}`;
      const isSel = kind === 'checkbox' ? selected.has(opt.index) : selected === opt.index;
      let mark = null;
      if (key !== null) {
        const isKey = kind === 'checkbox' ? key.has(opt.index) : key === opt.index;
        if (isKey) mark = 'is-key';
        else if (isSel) mark = 'is-wrong';
      }
      const input = h('input', {
        type: kind,
        id: inputId,
        name: id,
        checked: isSel,
        onchange: (e) => {
          if (kind === 'checkbox') {
            if (e.target.checked) selected.add(opt.index);
            else selected.delete(opt.index);
            onChange([...selected].sort((a, b) => a - b));
          } else onChange(opt.index);
        },
      });
      return h(
        'label',
        { class: ['choice', mark], for: inputId },
        input,
        h('span', { class: 'choice-mark', 'aria-hidden': 'true' }),
        h('span', { class: 'choice-text' }, md1(opt.text)),
        mark === 'is-key' ? h('span', { class: 'choice-tag' }, 'Correct') : mark === 'is-wrong' ? h('span', { class: 'choice-tag' }, 'Your pick') : null,
      );
    }),
  );
}

function orderList(prepared, id, response, onChange, locked, grade) {
  const byIndex = new Map(prepared.items.map((it) => [it.index, it]));
  let current = Array.isArray(response) && response.length === prepared.items.length ? response.slice() : prepared.items.map((it) => it.index);
  // An ordering always has an answer (the current arrangement); report it straight away.
  if (!Array.isArray(response) && !locked) onChange(current.slice());
  const list = h('ol', { class: 'order-list' });

  const render = (focus) => {
    clear(list);
    current.forEach((idx, pos) => {
      const item = byIndex.get(idx);
      const status = grade ? (grade.detail?.positions?.[pos] ? 'is-key' : 'is-wrong') : null;
      const up = h('button', { type: 'button', class: 'icon-btn', 'aria-label': `Move "${plain(item.text)}" up`, disabled: pos === 0, onclick: () => move(pos, -1) }, '↑');
      const down = h('button', { type: 'button', class: 'icon-btn', 'aria-label': `Move "${plain(item.text)}" down`, disabled: pos === current.length - 1, onclick: () => move(pos, 1) }, '↓');
      list.appendChild(
        h(
          'li',
          { class: ['order-item', status] },
          h('span', { class: 'order-pos', 'aria-hidden': 'true' }, String(pos + 1)),
          h('span', { class: 'order-text' }, md1(item.text)),
          locked ? null : h('span', { class: 'order-btns' }, up, down),
        ),
      );
      if (focus && focus.idx === idx) {
        const target = focus.dir < 0 ? (up.disabled ? down : up) : down.disabled ? up : down;
        queueMicrotask(() => target.focus());
      }
    });
  };
  const move = (from, dir) => {
    const to = from + dir;
    if (to < 0 || to >= current.length) return;
    const next = current.slice();
    const [x] = next.splice(from, 1);
    next.splice(to, 0, x);
    current = next;
    onChange(current.slice());
    render({ idx: x, dir });
  };
  render();
  return h('div', { class: 'order' }, locked ? null : h('p', { class: 'hint' }, 'Use the arrows to arrange the items from first to last.'), list);
}

function matchList(prepared, id, response, onChange, locked, grade) {
  const current = Array.isArray(response) ? response.slice() : prepared.lefts.map(() => null);
  return h(
    'div',
    { class: 'match' },
    prepared.lefts.map((left, i) => {
      const selId = `${id}-m${i}`;
      const status = grade ? (grade.detail?.pairs?.[i] ? 'is-key' : 'is-wrong') : null;
      const select = h(
        'select',
        {
          id: selId,
          disabled: locked,
          onchange: (e) => {
            current[i] = e.target.value === '' ? null : Number(e.target.value);
            onChange(current.slice());
          },
        },
        h('option', { value: '' }, 'Choose…'),
        prepared.rights.map((rt) => h('option', { value: String(rt.index), selected: current[i] === rt.index }, plain(rt.text))),
      );
      return h('div', { class: ['match-row', status] }, h('label', { for: selId, class: 'match-left' }, md1(left.text)), select);
    }),
  );
}

function numericInput(prepared, id, response, onChange, locked, grade) {
  const inputId = `${id}-n`;
  const input = h('input', {
    id: inputId,
    type: 'text',
    inputmode: 'decimal',
    autocomplete: 'off',
    class: 'num-input',
    value: response ?? '',
    disabled: locked,
    oninput: (e) => onChange(e.target.value),
  });
  return h(
    'div',
    { class: ['numeric', grade && (grade.correct ? 'is-key' : 'is-wrong')] },
    h('label', { for: inputId, class: 'sr-only' }, 'Your answer'),
    input,
    prepared.unit ? h('span', { class: 'num-unit' }, prepared.unit) : null,
  );
}

function plain(text) {
  return String(text).replace(/\*\*|`|\*/g, '');
}

export { clear };
