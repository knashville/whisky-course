// Quiz engine: pure functions for preparing, grading and scoring questions.
//
// Question shapes (authored in content files):
//   single    { options: string[], answer: number }
//   multi     { options: string[], answer: number[] }          select all that apply
//   truefalse { answer: boolean }
//   order     { items: string[] }                             authored in the correct order
//   match     { pairs: {left, right}[] }                      authored as correct pairs
//   numeric   { answer: number, tolerance?: number, unit?: string }
// Every question also has { id, type, prompt, explanation } and may carry
// { context } (a scenario, mock label or tasting note shown above the prompt)
// and { lesson } (exam questions: the lesson the question draws on).
//
// Responses (what the UI hands back for grading) always refer to ORIGINAL
// authored indices, never display positions, so shuffling cannot corrupt grading:
//   single    number
//   multi     number[]
//   truefalse boolean
//   order     number[]   original item indices in the learner's chosen order
//   match     (number|null)[]  response[leftIndex] = chosen right's original index
//   numeric   number | string

import { shuffle } from './rng.js';

export const QUESTION_TYPES = ['single', 'multi', 'truefalse', 'order', 'match', 'numeric'];

export const TYPE_LABELS = {
  single: 'Choose one',
  multi: 'Select all that apply',
  truefalse: 'True or false',
  order: 'Put in order',
  match: 'Match the pairs',
  numeric: 'Enter a number',
};

const indices = (n) => Array.from({ length: n }, (_, i) => i);

/** Display model for one question: shuffled presentation, original indices kept. */
export function prepareQuestion(q, rng) {
  const base = {
    id: q.id,
    type: q.type,
    prompt: q.prompt,
    context: q.context || '',
    explanation: q.explanation || '',
  };
  switch (q.type) {
    case 'single':
    case 'multi': {
      const order = q.shuffle === false ? indices(q.options.length) : shuffle(indices(q.options.length), rng);
      return { ...base, options: order.map((i) => ({ index: i, text: q.options[i] })) };
    }
    case 'truefalse':
      return { ...base, options: [{ index: true, text: 'True' }, { index: false, text: 'False' }] };
    case 'order': {
      let order = shuffle(indices(q.items.length), rng);
      // Never present an ordering question already solved.
      if (order.length > 1 && order.every((v, i) => v === i)) order = [...order.slice(1), order[0]];
      return { ...base, items: order.map((i) => ({ index: i, text: q.items[i] })) };
    }
    case 'match': {
      const rights = shuffle(indices(q.pairs.length), rng);
      return {
        ...base,
        lefts: q.pairs.map((p, i) => ({ index: i, text: p.left })),
        rights: rights.map((i) => ({ index: i, text: q.pairs[i].right })),
      };
    }
    case 'numeric':
      return { ...base, unit: q.unit || '' };
    default:
      throw new Error(`Unknown question type: ${q.type}`);
  }
}

/** Parse a learner-typed number, accepting "1,5" and stray spaces or a trailing unit. */
export function parseNumber(value) {
  if (typeof value === 'number') return Number.isFinite(value) ? value : NaN;
  if (typeof value !== 'string') return NaN;
  const cleaned = value.trim().replace(/\s+/g, '').replace(/,(?=\d{1,2}$)/, '.').replace(/,/g, '');
  const m = /^[-+]?(\d+\.?\d*|\.\d+)/.exec(cleaned);
  return m ? parseFloat(m[0]) : NaN;
}

/** Is a response present enough to submit? */
export function isAnswered(q, r) {
  if (r === undefined || r === null) return false;
  switch (q.type) {
    case 'single':
      return Number.isInteger(r);
    case 'multi':
      return Array.isArray(r) && r.length > 0;
    case 'truefalse':
      return typeof r === 'boolean';
    case 'order':
      return Array.isArray(r) && r.length === q.items.length;
    case 'match':
      return Array.isArray(r) && q.pairs.every((_, i) => Number.isInteger(r[i]));
    case 'numeric':
      return Number.isFinite(parseNumber(r));
    default:
      return false;
  }
}

/**
 * Grade one response. All-or-nothing scoring: `correct` decides the mark.
 * `detail` explains partial results for feedback (which pairs/positions were right).
 */
export function gradeQuestion(q, r) {
  const answered = isAnswered(q, r);
  if (!answered) return { answered: false, correct: false, detail: null };
  switch (q.type) {
    case 'single':
      return { answered, correct: r === q.answer, detail: null };
    case 'multi': {
      const want = new Set(q.answer);
      const got = new Set(r);
      const correct = want.size === got.size && [...want].every((x) => got.has(x));
      return {
        answered,
        correct,
        detail: {
          missed: [...want].filter((x) => !got.has(x)),
          wrong: [...got].filter((x) => !want.has(x)),
        },
      };
    }
    case 'truefalse':
      return { answered, correct: r === q.answer, detail: null };
    case 'order': {
      const positions = r.map((v, i) => v === i);
      return { answered, correct: positions.every(Boolean), detail: { positions } };
    }
    case 'match': {
      const pairs = q.pairs.map((_, i) => r[i] === i);
      return { answered, correct: pairs.every(Boolean), detail: { pairs } };
    }
    case 'numeric': {
      const n = parseNumber(r);
      const tol = Math.abs(q.tolerance ?? 0);
      return { answered, correct: Math.abs(n - q.answer) <= tol + 1e-9, detail: { value: n } };
    }
    default:
      return { answered: false, correct: false, detail: null };
  }
}

/** Score a whole attempt. `responses` is keyed by question id. */
export function scoreAttempt(questions, responses) {
  const results = questions.map((q) => ({ id: q.id, ...gradeQuestion(q, responses[q.id]) }));
  const correct = results.filter((r) => r.correct).length;
  const total = questions.length;
  const percent = total ? (correct / total) * 100 : 0;
  return { results, correct, total, percent };
}

export function isPass(percent, passPercent) {
  return percent + 1e-9 >= passPercent;
}

/**
 * Draw `count` questions from a pool, spreading the draw across lessons
 * (round-robin over each question's `lesson` tag) so an exam samples the whole level.
 */
export function drawQuestions(pool, count, rng) {
  if (!Array.isArray(pool) || pool.length === 0) return [];
  if (!count || count >= pool.length) return shuffle(pool, rng);
  const groups = new Map();
  for (const q of shuffle(pool, rng)) {
    const key = q.lesson || '_';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(q);
  }
  const keys = shuffle([...groups.keys()], rng);
  const out = [];
  while (out.length < count) {
    for (const k of keys) {
      const g = groups.get(k);
      if (g.length && out.length < count) out.push(g.shift());
    }
  }
  return shuffle(out, rng);
}

/** The correct answer rendered as text, for review screens. */
export function describeAnswer(q) {
  switch (q.type) {
    case 'single':
      return q.options[q.answer];
    case 'multi':
      return q.answer.map((i) => q.options[i]).join('; ');
    case 'truefalse':
      return q.answer ? 'True' : 'False';
    case 'order':
      return q.items.map((t, i) => `${i + 1}. ${t}`).join('  ');
    case 'match':
      return q.pairs.map((p) => `${p.left} → ${p.right}`).join('; ');
    case 'numeric': {
      const tol = q.tolerance ? ` (±${q.tolerance})` : '';
      return `${q.answer}${q.unit ? ' ' + q.unit : ''}${tol}`;
    }
    default:
      return '';
  }
}

/** The learner's response rendered as text, for review screens. */
export function describeResponse(q, r) {
  if (!isAnswered(q, r)) return 'No answer';
  switch (q.type) {
    case 'single':
      return q.options[r];
    case 'multi':
      return r.map((i) => q.options[i]).join('; ');
    case 'truefalse':
      return r ? 'True' : 'False';
    case 'order':
      return r.map((idx, pos) => `${pos + 1}. ${q.items[idx]}`).join('  ');
    case 'match':
      return q.pairs.map((p, i) => `${p.left} → ${q.pairs[r[i]]?.right ?? '—'}`).join('; ');
    case 'numeric': {
      const n = parseNumber(r);
      return `${n}${q.unit ? ' ' + q.unit : ''}`;
    }
    default:
      return '';
  }
}
