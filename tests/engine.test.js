import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mulberry32, shuffle } from '../js/engine/rng.js';
import { prepareQuestion, gradeQuestion, scoreAttempt, drawQuestions, isAnswered, parseNumber, describeAnswer, isPass } from '../js/engine/quiz.js';
import * as P from '../js/engine/progress.js';
import { reviewCard, studyQueue, buildDeck, deckStats, dayNumber } from '../js/engine/srs.js';
import { parseMarkdown, parseInline, plainText } from '../js/engine/markdown.js';
import * as calc from '../js/engine/calc.js';
import { classifyUS, DEFAULT_SPEC, PRESETS } from '../js/engine/usClassifier.js';
import { validateCourse } from '../js/engine/validate.js';
import sample from './fixtures/sample-course.js';

const rng = () => mulberry32(42);

test('shuffle is a deterministic permutation', () => {
  const a = shuffle([1, 2, 3, 4, 5, 6], rng());
  const b = shuffle([1, 2, 3, 4, 5, 6], rng());
  assert.deepEqual(a, b);
  assert.deepEqual([...a].sort(), [1, 2, 3, 4, 5, 6]);
});

test('single and multi grading use original indices regardless of shuffle', () => {
  const q = { id: 'a', type: 'single', options: ['x', 'y', 'z'], answer: 2 };
  const prep = prepareQuestion(q, rng());
  const correctOpt = prep.options.find((o) => o.text === 'z');
  assert.equal(gradeQuestion(q, correctOpt.index).correct, true);
  assert.equal(gradeQuestion(q, 0).correct, false);
  const m = { id: 'b', type: 'multi', options: ['a', 'b', 'c', 'd'], answer: [0, 3] };
  assert.equal(gradeQuestion(m, [3, 0]).correct, true);
  assert.equal(gradeQuestion(m, [0]).correct, false);
  assert.deepEqual(gradeQuestion(m, [0, 1]).detail, { missed: [3], wrong: [1] });
  assert.equal(gradeQuestion(m, []).answered, false);
});

test('order questions are never presented solved and grade by position', () => {
  const q = { id: 'o', type: 'order', items: ['a', 'b'] };
  for (let s = 0; s < 50; s++) {
    const prep = prepareQuestion(q, mulberry32(s));
    assert.notDeepEqual(prep.items.map((i) => i.index), [0, 1]);
  }
  const q4 = { id: 'o4', type: 'order', items: ['a', 'b', 'c', 'd'] };
  assert.equal(gradeQuestion(q4, [0, 1, 2, 3]).correct, true);
  const g = gradeQuestion(q4, [1, 0, 2, 3]);
  assert.equal(g.correct, false);
  assert.deepEqual(g.detail.positions, [false, false, true, true]);
});

test('match and numeric grading', () => {
  const q = { id: 'm', type: 'match', pairs: [{ left: 'A', right: '1' }, { left: 'B', right: '2' }, { left: 'C', right: '3' }] };
  assert.equal(gradeQuestion(q, [0, 1, 2]).correct, true);
  assert.equal(gradeQuestion(q, [1, 0, 2]).correct, false);
  assert.equal(isAnswered(q, [0, null, 2]), false);
  const n = { id: 'n', type: 'numeric', answer: 62.5, tolerance: 0.1, unit: '%' };
  assert.equal(gradeQuestion(n, '62,5').correct, true);
  assert.equal(gradeQuestion(n, '62.55 %').correct, true);
  assert.equal(gradeQuestion(n, 63).correct, false);
  assert.equal(gradeQuestion(n, 'abc').answered, false);
  assert.equal(parseNumber('1,000'), 1000);
  assert.equal(describeAnswer(n), '62.5 % (±0.1)');
});

test('true/false needs a boolean and scoring adds up', () => {
  const qs = [
    { id: 't1', type: 'truefalse', answer: true },
    { id: 't2', type: 'truefalse', answer: false },
    { id: 't3', type: 'truefalse', answer: true },
    { id: 't4', type: 'truefalse', answer: true },
  ];
  const s = scoreAttempt(qs, { t1: true, t2: false, t3: false });
  assert.equal(s.correct, 2);
  assert.equal(s.percent, 50);
  assert.equal(isPass(75, 75), true);
  assert.equal(isPass(74.99, 75), false);
});

test('exam draws spread across lessons and never duplicate', () => {
  const pool = [];
  for (let l = 0; l < 5; l++) for (let k = 0; k < 6; k++) pool.push({ id: `q${l}-${k}`, lesson: `L${l}` });
  for (let seed = 0; seed < 20; seed++) {
    const d = drawQuestions(pool, 10, mulberry32(seed));
    assert.equal(d.length, 10);
    assert.equal(new Set(d.map((q) => q.id)).size, 10);
    const per = {};
    for (const q of d) per[q.lesson] = (per[q.lesson] || 0) + 1;
    assert.equal(Object.keys(per).length, 5);
    for (const c of Object.values(per)) assert.equal(c, 2);
  }
  assert.equal(drawQuestions(pool, 100, rng()).length, pool.length);
});

test('progress: unlocking, stats and next step', () => {
  let p = P.emptyProgress();
  assert.equal(P.isLevelUnlocked(sample, p, 1), true);
  assert.equal(P.isLevelUnlocked(sample, p, 2), false);
  assert.equal(P.nextStep(sample, p).kind, 'lesson');
  p = P.recordLessonRead(p, 's1-lesson-1', 1000);
  assert.equal(P.nextStep(sample, p).kind, 'quiz');
  p = P.recordQuizAttempt(p, 's1-lesson-1', 50, 70, 1001);
  assert.equal(P.lessonStatus(p, 's1-lesson-1'), 'read');
  p = P.recordQuizAttempt(p, 's1-lesson-1', 83.3, 70, 1002);
  assert.equal(P.lessonStatus(p, 's1-lesson-1'), 'passed');
  assert.equal(p.lessons['s1-lesson-1'].quizBest, 83);
  assert.equal(p.lessons['s1-lesson-1'].attempts, 2);
  for (const id of ['s1-lesson-2', 's1-lesson-3']) p = P.recordQuizAttempt(p, id, 100, 70, 1003);
  assert.equal(P.nextStep(sample, p).kind, 'exam');
  assert.equal(P.levelStats(sample.levels[0], p).percentComplete, 50);
  p = P.recordExamAttempt(p, 1, 60, 75, 2000, 300);
  assert.equal(P.isLevelUnlocked(sample, p, 2), false);
  p = P.recordExamAttempt(p, 1, 80, 75, 3000, 280);
  assert.equal(P.isLevelUnlocked(sample, p, 2), true);
  assert.equal(p.exams['1'].passedAt, 3000);
  p = P.recordExamAttempt(p, 1, 40, 75, 4000, 280);
  assert.equal(p.exams['1'].passed, true, 'a later failure never revokes a pass');
  assert.equal(p.exams['1'].best, 80);
  assert.equal(P.courseStats(sample, p).currentRank, 'Rank 1');
  assert.equal(P.courseComplete(sample, p), false);
});

test('progress updates are immutable and normalize junk', () => {
  const p = P.emptyProgress();
  const q = P.recordLessonRead(p, 'x', 5);
  assert.deepEqual(p.lessons, {});
  assert.ok(q.lessons.x);
  const n = P.normalizeProgress({ lessons: { a: { quizBest: 400, quizPassed: 'yes' } }, exams: { 1: null }, journal: [{ id: 'j' }, 3], learnerName: 7 });
  assert.equal(n.lessons.a.quizBest, 100);
  assert.equal(n.lessons.a.quizPassed, false);
  assert.deepEqual(n.exams, {});
  assert.equal(n.journal.length, 1);
  assert.equal(n.learnerName, '');
  assert.deepEqual(P.normalizeProgress(null), P.emptyProgress());
});

test('mergeProgress keeps the best of both copies', () => {
  let a = P.emptyProgress();
  let b = P.emptyProgress();
  a = P.recordQuizAttempt(a, 'l1', 90, 70, 10);
  a = P.recordExamAttempt(a, 1, 50, 75, 11);
  b = P.recordQuizAttempt(b, 'l1', 40, 70, 20);
  b = P.recordExamAttempt(b, 1, 85, 75, 21);
  b = P.setLearnerName(b, 'Pat Taster', 22);
  a = P.setCardState(a, 'c-x', { box: 3, due: 5, last: 4, reviews: 3, lapses: 0 }, 12);
  b = P.setCardState(b, 'c-x', { box: 1, due: 9, last: 9, reviews: 4, lapses: 1 }, 23);
  a = P.addJournalEntry(a, { id: 'ja', name: 'A' }, 13);
  b = P.addJournalEntry(b, { id: 'jb', name: 'B' }, 24);
  const m = P.mergeProgress(a, b);
  assert.equal(m.lessons.l1.quizBest, 90);
  assert.equal(m.lessons.l1.quizPassed, true);
  assert.equal(m.exams['1'].passed, true);
  assert.equal(m.exams['1'].best, 85);
  assert.equal(m.exams['1'].history.length, 2);
  assert.equal(m.learnerName, 'Pat Taster');
  assert.equal(m.cards['c-x'].last, 9);
  assert.deepEqual(m.journal.map((j) => j.id).sort(), ['ja', 'jb']);
  assert.deepEqual(P.mergeProgress(m, m), m, 'merge is idempotent');
});

test('Leitner flashcards', () => {
  const today = 100;
  let s = reviewCard(undefined, true, today);
  assert.equal(s.box, 2);
  assert.equal(s.due, 101);
  s = reviewCard(s, true, 101);
  assert.equal(s.box, 3);
  assert.equal(s.due, 104);
  s = reviewCard(s, false, 104);
  assert.equal(s.box, 1);
  assert.equal(s.due, 104);
  assert.equal(s.lapses, 1);
  for (let i = 0; i < 10; i++) s = reviewCard(s, true, 200);
  assert.equal(s.box, 5);
  const deck = buildDeck(sample.levels);
  assert.equal(deck.length, 12);
  const states = { [deck[0].id]: { box: 2, due: 99, last: 98, reviews: 1, lapses: 0 }, [deck[1].id]: { box: 3, due: 150, last: 99, reviews: 2, lapses: 0 } };
  const queue = studyQueue(deck, states, today, { newLimit: 3 });
  assert.equal(queue[0].id, deck[0].id, 'due cards come first');
  assert.equal(queue.length, 4);
  assert.ok(!queue.find((c) => c.id === deck[1].id), 'cards not yet due are skipped');
  const st = deckStats(deck, states, today);
  assert.deepEqual([st.fresh, st.due, st.learning, st.mastered], [10, 1, 2, 0]);
  assert.equal(dayNumber(86400000 * 3 + 1000, 0), 3);
});

test('markdown subset parses safely', () => {
  const blocks = parseMarkdown('### Head\n\nA **bold** and *em* `code` [ok](https://ttb.gov) [bad](javascript:alert(1)).\n\n- one\n- two\n\n1. first\n2. second\n\n> quoted');
  assert.deepEqual(blocks.map((b) => b.t), ['h3', 'p', 'ul', 'ol', 'quote']);
  const p = blocks[1].c;
  assert.ok(p.find((n) => n.t === 'strong'));
  assert.ok(p.find((n) => n.t === 'em'));
  assert.ok(p.find((n) => n.t === 'code'));
  assert.equal(p.filter((n) => n.t === 'a').length, 1, 'only https links become links');
  assert.equal(parseInline('5 * 3 = 15').length, 1, 'a lone asterisk is text');
  assert.equal(parseInline('m^3^')[1].t, 'sup');
  assert.equal(plainText('**Bourbon**: 51% *corn*'), 'Bourbon: 51% corn');
  assert.equal(parseInline('<script>').find((n) => n.t === 'text').v, '<script>');
});

test('calculators', () => {
  assert.equal(calc.usProofFromAbv(45), 90);
  assert.equal(calc.abvFromUsProof(125), 62.5);
  assert.ok(Math.abs(calc.ukProofFromAbv(57.15) - 100) < 0.1);
  assert.ok(Math.abs(calc.waterToAdd(100, 60, 40) - 50) < 1e-9);
  assert.throws(() => calc.waterToAdd(100, 40, 60), RangeError);
  const b = calc.blendStrength([{ volume: 600, abv: 62 }, { volume: 400, abv: 55 }]);
  assert.ok(Math.abs(b.abv - 59.2) < 1e-9);
  const ps = calc.pearsonSquare(60, 40, 45, 1000);
  assert.ok(Math.abs(ps.volumeA - 250) < 1e-9 && Math.abs(ps.volumeB - 750) < 1e-9);
  const check = calc.blendStrength([{ volume: ps.volumeA, abv: 60 }, { volume: ps.volumeB, abv: 40 }]);
  assert.ok(Math.abs(check.abv - 45) < 1e-9);
  const a = calc.angelsShare(200, 2, 10);
  assert.ok(Math.abs(a.remaining - 200 * 0.98 ** 10) < 1e-9);
  assert.equal(a.series.length, 11);
  assert.equal(calc.proofGallons(53, 125), 66.25);
  const c = calc.bottlesFromCask(200, 60, 40, 750);
  assert.equal(c.bottles, 400);
  assert.ok(Math.abs(c.water - 100) < 1e-9);
  assert.ok(Math.abs(calc.usGallonsToLiters(53) - 200.6) < 0.1);
});

test('US classifier: default spec is a straight, bonded Kentucky bourbon', () => {
  const r = classifyUS(DEFAULT_SPEC);
  const ok = new Set(r.results.filter((x) => x.ok).map((x) => x.id));
  for (const id of ['bourbon', 'straight-bourbon', 'bib']) assert.ok(ok.has(id), id);
  for (const id of ['rye', 'corn', 'tennessee', 'asm', 'light']) assert.ok(!ok.has(id), id);
  assert.equal(r.ageStatementRequired, false);
});

test('US classifier: rule boundaries', () => {
  const at = (over) => new Set(classifyUS({ ...DEFAULT_SPEC, ...over }).results.filter((x) => x.ok).map((x) => x.id));
  assert.ok(!at({ distillationAbv: 80.5 }).has('bourbon'), 'over 160 proof off the still');
  assert.ok(at({ distillationAbv: 80 }).has('bourbon'), 'exactly 160 proof is allowed');
  assert.ok(!at({ entryAbv: 63 }).has('bourbon'), 'over 125 proof into the barrel');
  assert.ok(!at({ container: 'used' }).has('bourbon'), 'used barrels are not bourbon');
  assert.ok(!at({ madeInUS: false }).has('bourbon'));
  assert.ok(!at({ additives: true }).has('bourbon'));
  assert.ok(!at({ ageYears: 1.5 }).has('straight-bourbon'));
  assert.ok(!at({ bottlingAbv: 50.5 }).has('bib'), 'bonded must be exactly 100 proof');
  assert.ok(!at({ ageYears: 3.9 }).has('bib'));
  assert.ok(!at({ bottlingAbv: 39.5 }).has('bourbon'));
  const young = classifyUS({ ...DEFAULT_SPEC, ageYears: 3, bonded: false });
  assert.equal(young.ageStatementRequired, true);
  const mash = (m) => ({ mash: { corn: 0, rye: 0, wheat: 0, barley: 0, maltedBarley: 0, maltedRye: 0, other: 0, ...m } });
  assert.ok(at(mash({ corn: 50, rye: 40, maltedBarley: 10 })).has('bourbon') === false);
  assert.ok(at(mash({ corn: 51, rye: 39, maltedBarley: 10 })).has('bourbon'));
  assert.ok(at({ ...mash({ corn: 49, rye: 51 }) }).has('rye'));
  assert.ok(!at(mash({ corn: 60, rye: 30 })).has('bourbon'), 'mash bill must total 100%');
});

test('US classifier: presets land in their intended category', () => {
  const expect = {
    'Kentucky bonded bourbon': 'bib',
    'High-rye straight rye': 'straight-rye',
    'Wheated bourbon, 6 years': 'straight-bourbon',
    'Unaged corn whisky': 'corn',
    'Tennessee whiskey': 'tennessee',
    'American single malt': 'straight-asm',
    'Light whisky': 'light',
  };
  for (const p of PRESETS) {
    const ok = classifyUS(p.spec).results.filter((x) => x.ok).map((x) => x.id);
    assert.ok(ok.includes(expect[p.name]), `${p.name} → ${expect[p.name]} (got ${ok.join(', ')})`);
  }
  const corn = classifyUS(PRESETS.find((p) => p.name === 'Unaged corn whisky').spec);
  assert.ok(!corn.results.find((x) => x.id === 'bourbon').ok, 'unaged corn whisky is not bourbon');
  assert.equal(corn.ageStatementRequired, false, 'unaged spirit has no age to state');
});

test('validator accepts the sample course and catches broken content', () => {
  assert.deepEqual(validateCourse(sample).errors, []);
  const broken = structuredClone(sample);
  broken.levels[0].lessons[0].quiz[0].answer = 9;
  broken.levels[0].lessons[1].id = broken.levels[0].lessons[0].id;
  broken.levels[0].lessons[2].quiz[1].options.push('All of the above');
  broken.levels[1].exam.draw = 99;
  broken.levels[1].lessons[0].blocks.push({ type: 'diagram', name: 'nope' });
  const { errors } = validateCourse(broken);
  const text = errors.join('\n');
  assert.match(text, /valid option index/);
  assert.match(text, /duplicate id/);
  assert.match(text, /breaks when options are shuffled/);
  assert.match(text, /exceeds pool size/);
  assert.match(text, /diagram name/);
});

test('standard drinks, discrimination tests and trade maths', () => {
  const one = calc.standardDrinks(1.5 * calc.ML_PER_US_FL_OZ, 40);
  assert.ok(Math.abs(one.usDrinks - 1) < 0.01, 'a 1.5 fl oz pour at 40% is one US drink');
  assert.ok(Math.abs(calc.standardDrinks(25, 40).ukUnits - 1) < 1e-9, '25 ml at 40% is one UK unit');
  const sixty = calc.standardDrinks(60, 40);
  assert.ok(Math.abs(sixty.grams - 18.94) < 0.01 && Math.abs(sixty.ukUnits - 2.4) < 1e-9);
  // Published minimum-correct tables for the triangle test at alpha = 0.05.
  const table = { 12: 8, 18: 10, 24: 13, 30: 15, 36: 18 };
  for (const [n, k] of Object.entries(table)) assert.equal(calc.discriminationTest(Number(n), 0).critical, k, `n=${n}`);
  const r = calc.discriminationTest(30, 15);
  assert.ok(r.significant && Math.abs(r.pValue - 0.0435) < 0.0005);
  assert.equal(calc.discriminationTest(30, 14).significant, false);
  assert.ok(Math.abs(calc.binomialTail(10, 0, 0.5) - 1) < 1e-12);
  assert.ok(Math.abs(calc.binomialTail(10, 10, 0.5) - 1 / 1024) < 1e-12);
  const p = calc.pourCost({ bottleCost: 30, bottleMl: 750, pourMl: 1.5 * calc.ML_PER_US_FL_OZ, menuPrice: 9, targetPct: 20 });
  assert.ok(Math.abs(p.pours - 16.9) < 0.01);
  assert.ok(Math.abs(p.costPerPour - 1.7744) < 0.001);
  assert.ok(Math.abs(p.priceForTarget - 8.872) < 0.01);
  const mm = calc.markupAndMargin(24, calc.priceFromMargin(24, 30));
  assert.ok(Math.abs(calc.priceFromMargin(24, 30) - 34.2857) < 0.001);
  assert.ok(Math.abs(mm.markupPct - 42.857) < 0.01 && Math.abs(mm.marginPct - 30) < 1e-9);
});

test('markdown breaks mode keeps label lines apart', () => {
  const label = '**OLD HARBOR RESERVE**\nKentucky Straight Bourbon Whisky\nAged 3 Years';
  const [p] = parseMarkdown(label, { breaks: true });
  assert.equal(p.c.filter((n) => n.t === 'br').length, 2);
  assert.equal(p.c[0].t, 'strong');
  const [joined] = parseMarkdown(label);
  assert.equal(joined.c.filter((n) => n.t === 'br').length, 0, 'prose still reflows by default');
});
