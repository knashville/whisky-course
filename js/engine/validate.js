// Content schema validator. Run by the test suite and by `npm run validate`,
// so a malformed lesson or a broken answer key fails the build, not the learner.

import { QUESTION_TYPES } from './quiz.js';

export const BLOCK_TYPES = ['text', 'callout', 'keyTerms', 'table', 'steps', 'compare', 'tasting', 'diagram'];
export const CALLOUT_VARIANTS = ['tip', 'fact', 'warning', 'myth', 'law', 'history'];
export const DIAGRAMS = ['grain-to-glass', 'pot-still', 'column-still', 'barrel-anatomy', 'char-layers', 'rickhouse'];
const ROUTE_SAFE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const FORBIDDEN_OPTION = /^(all|none|both|neither) of the (above|options)|^all of these|^none of these/i;

export function validateCourse(course, opts = {}) {
  const errors = [];
  const warnings = [];
  const err = (where, msg) => errors.push(`${where}: ${msg}`);
  const warn = (where, msg) => warnings.push(`${where}: ${msg}`);
  const ids = new Map();
  const claim = (id, where) => {
    if (typeof id !== 'string' || !id) return err(where, 'missing id');
    if (ids.has(id)) err(where, `duplicate id "${id}" (also at ${ids.get(id)})`);
    ids.set(id, where);
  };
  const str = (v, where, field, { min = 1 } = {}) => {
    if (typeof v !== 'string' || v.trim().length < min) err(where, `"${field}" must be a non-empty string`);
  };

  if (!course || !Array.isArray(course.levels) || !course.levels.length) {
    return { errors: ['course: must have a non-empty levels array'], warnings };
  }
  if (!opts.partial) str(course.title, 'course', 'title');

  course.levels.forEach((level, li) => {
    const lw = `level[${li}]`;
    if (!opts.partial && level.number !== li + 1) err(lw, `number must be ${li + 1} (levels are ordered and numbered from 1)`);
    str(level.title, lw, 'title');
    str(level.rank, lw, 'rank');
    str(level.tagline, lw, 'tagline');
    str(level.description, lw, 'description');
    if (!Array.isArray(level.objectives) || level.objectives.length < 3) err(lw, 'needs at least 3 objectives');
    if (!Number.isFinite(level.proof)) err(lw, 'needs a numeric "proof" (difficulty label)');
    if (!Array.isArray(level.lessons) || level.lessons.length < 3) err(lw, 'needs at least 3 lessons');

    (level.lessons || []).forEach((lesson, i) => {
      const w = `${lw}.lesson[${i}] (${lesson.id})`;
      claim(lesson.id, w);
      if (typeof lesson.id === 'string' && !ROUTE_SAFE.test(lesson.id)) err(w, 'id must be lowercase letters, digits and single hyphens');
      str(lesson.title, w, 'title');
      str(lesson.summary, w, 'summary');
      if (!Number.isFinite(lesson.minutes) || lesson.minutes < 3) err(w, '"minutes" must be a number >= 3');
      if (!Array.isArray(lesson.blocks) || lesson.blocks.length < 3) err(w, 'needs at least 3 content blocks');
      (lesson.blocks || []).forEach((b, bi) => validateBlock(b, `${w}.block[${bi}]`, err, warn));
      if (!(lesson.blocks || []).some((b) => b.type === 'keyTerms')) warn(w, 'has no keyTerms block (flashcards and glossary draw on these)');
      if (!Array.isArray(lesson.quiz) || lesson.quiz.length < 4) err(w, 'quiz needs at least 4 questions');
      (lesson.quiz || []).forEach((q, qi) => {
        claim(q.id, `${w}.quiz[${qi}]`);
        validateQuestion(q, `${w}.quiz[${qi}] (${q.id})`, err, warn);
      });
    });

    const ew = `${lw}.exam`;
    const exam = level.exam;
    if (!exam || !Array.isArray(exam.questions)) {
      err(ew, 'missing exam.questions');
      return;
    }
    if (!(exam.passPercent >= 50 && exam.passPercent <= 100)) err(ew, 'passPercent must be 50-100');
    if (!(Number.isInteger(exam.draw) && exam.draw >= 5)) err(ew, 'draw must be an integer >= 5');
    if (exam.draw > exam.questions.length) err(ew, `draw (${exam.draw}) exceeds pool size (${exam.questions.length})`);
    if (exam.timeLimitMinutes != null && !(exam.timeLimitMinutes >= 0)) err(ew, 'timeLimitMinutes must be >= 0');
    const lessonIds = new Set((level.lessons || []).map((l) => l.id));
    exam.questions.forEach((q, qi) => {
      const qw = `${ew}.q[${qi}] (${q.id})`;
      claim(q.id, qw);
      validateQuestion(q, qw, err, warn);
      if (q.lesson && !lessonIds.has(q.lesson)) err(qw, `lesson tag "${q.lesson}" is not a lesson in this level`);
    });
    for (const lid of lessonIds) {
      if (!exam.questions.some((q) => q.lesson === lid)) warn(ew, `no exam question tagged for lesson ${lid}`);
    }
  });

  return { errors, warnings };
}

function validateBlock(b, w, err, warn) {
  if (!b || !BLOCK_TYPES.includes(b.type)) return err(w, `unknown block type "${b && b.type}"`);
  const needStr = (v, f) => {
    if (typeof v !== 'string' || !v.trim()) err(w, `"${f}" must be a non-empty string`);
  };
  switch (b.type) {
    case 'text':
      needStr(b.md, 'md');
      break;
    case 'callout':
      if (!CALLOUT_VARIANTS.includes(b.variant)) err(w, `callout variant must be one of ${CALLOUT_VARIANTS.join(', ')}`);
      needStr(b.md, 'md');
      break;
    case 'keyTerms':
      if (!Array.isArray(b.terms) || !b.terms.length) err(w, 'keyTerms needs terms');
      (b.terms || []).forEach((t, i) => {
        if (!t || typeof t.term !== 'string' || typeof t.definition !== 'string' || !t.term.trim() || !t.definition.trim())
          err(w, `term[${i}] needs term and definition`);
      });
      break;
    case 'table':
      if (!Array.isArray(b.headers) || b.headers.length < 2) err(w, 'table needs at least 2 headers');
      if (!Array.isArray(b.rows) || !b.rows.length) err(w, 'table needs rows');
      (b.rows || []).forEach((row, i) => {
        if (!Array.isArray(row) || row.length !== (b.headers || []).length) err(w, `row[${i}] has ${row?.length} cells, expected ${b.headers?.length}`);
      });
      break;
    case 'steps':
      if (!Array.isArray(b.items) || b.items.length < 2) err(w, 'steps needs at least 2 items');
      (b.items || []).forEach((it, i) => {
        if (!it || typeof it.title !== 'string' || typeof it.md !== 'string') err(w, `item[${i}] needs title and md`);
      });
      break;
    case 'compare':
      if (!Array.isArray(b.columns) || b.columns.length < 2) err(w, 'compare needs at least 2 columns');
      (b.columns || []).forEach((c, i) => {
        if (!c || typeof c.heading !== 'string' || !Array.isArray(c.points) || !c.points.length) err(w, `column[${i}] needs heading and points`);
      });
      break;
    case 'tasting':
      needStr(b.title, 'title');
      if (!Array.isArray(b.flight) || !b.flight.length) err(w, 'tasting needs a flight');
      (b.flight || []).forEach((f, i) => {
        if (!f || typeof f.pour !== 'string' || typeof f.lookFor !== 'string') err(w, `flight[${i}] needs pour and lookFor`);
      });
      break;
    case 'diagram':
      if (!DIAGRAMS.includes(b.name)) err(w, `diagram name must be one of ${DIAGRAMS.join(', ')}`);
      break;
  }
}

function validateQuestion(q, w, err, warn) {
  if (!q || !QUESTION_TYPES.includes(q.type)) return err(w, `unknown question type "${q && q.type}"`);
  if (typeof q.prompt !== 'string' || q.prompt.trim().length < 8) err(w, 'prompt is missing or too short');
  if (typeof q.explanation !== 'string' || q.explanation.trim().length < 15) err(w, 'explanation is missing or too short');
  if (q.context != null && typeof q.context !== 'string') err(w, 'context must be a string');
  const optCheck = (opts) => {
    if (!Array.isArray(opts) || opts.length < 3 || opts.length > 6) return err(w, 'needs 3-6 options');
    if (new Set(opts.map((o) => String(o).trim().toLowerCase())).size !== opts.length) err(w, 'options must be distinct');
    opts.forEach((o) => {
      if (typeof o !== 'string' || !o.trim()) err(w, 'every option must be a non-empty string');
      else if (FORBIDDEN_OPTION.test(o.trim()) && q.shuffle !== false) err(w, `"${o}" breaks when options are shuffled; rewrite it or set shuffle: false`);
    });
  };
  switch (q.type) {
    case 'single':
      optCheck(q.options);
      if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer >= (q.options || []).length) err(w, 'answer must be a valid option index');
      break;
    case 'multi':
      optCheck(q.options);
      if (!Array.isArray(q.answer) || q.answer.length < 1) err(w, 'answer must be a non-empty array of option indexes');
      else {
        if (new Set(q.answer).size !== q.answer.length) err(w, 'answer has duplicates');
        if (q.answer.some((a) => !Number.isInteger(a) || a < 0 || a >= (q.options || []).length)) err(w, 'answer index out of range');
        if (q.answer.length === (q.options || []).length) warn(w, 'every option is correct; consider adding a distractor');
        if (q.answer.length === 1) warn(w, 'multi question with a single correct answer');
      }
      break;
    case 'truefalse':
      if (typeof q.answer !== 'boolean') err(w, 'answer must be true or false');
      break;
    case 'order':
      if (!Array.isArray(q.items) || q.items.length < 3 || q.items.length > 8) err(w, 'order needs 3-8 items');
      else if (new Set(q.items).size !== q.items.length) err(w, 'order items must be distinct');
      break;
    case 'match':
      if (!Array.isArray(q.pairs) || q.pairs.length < 3 || q.pairs.length > 7) err(w, 'match needs 3-7 pairs');
      else {
        if (q.pairs.some((p) => !p || typeof p.left !== 'string' || typeof p.right !== 'string' || !p.left.trim() || !p.right.trim()))
          err(w, 'each pair needs left and right');
        if (new Set(q.pairs.map((p) => p.right)).size !== q.pairs.length) err(w, 'right-hand items must be distinct');
        if (new Set(q.pairs.map((p) => p.left)).size !== q.pairs.length) err(w, 'left-hand items must be distinct');
      }
      break;
    case 'numeric':
      if (!Number.isFinite(q.answer)) err(w, 'answer must be a number');
      if (q.tolerance != null && !(q.tolerance >= 0)) err(w, 'tolerance must be >= 0');
      if (q.unit != null && typeof q.unit !== 'string') err(w, 'unit must be a string');
      break;
  }
}

/** Counts used in docs and tests. */
export function courseCounts(course) {
  const lessons = course.levels.flatMap((l) => l.lessons);
  const quizQ = lessons.reduce((s, l) => s + l.quiz.length, 0);
  const examQ = course.levels.reduce((s, l) => s + l.exam.questions.length, 0);
  const terms = lessons.reduce(
    (s, l) => s + l.blocks.filter((b) => b.type === 'keyTerms').reduce((t, b) => t + b.terms.length, 0),
    0,
  );
  const byType = {};
  for (const q of [...lessons.flatMap((l) => l.quiz), ...course.levels.flatMap((l) => l.exam.questions)]) {
    byType[q.type] = (byType[q.type] || 0) + 1;
  }
  return { levels: course.levels.length, lessons: lessons.length, quizQuestions: quizQ, examQuestions: examQ, keyTerms: terms, byType };
}
