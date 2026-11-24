// Learner progress: a plain JSON record plus pure functions that read and update it.
// Every update returns a NEW object, so the UI can diff and storage can persist safely.

export const PROGRESS_VERSION = 1;
export const DEFAULT_LESSON_PASS = 70;
export const JOURNAL_LIMIT = 300;
const HISTORY_LIMIT = 20;

export function emptyProgress() {
  return {
    version: PROGRESS_VERSION,
    learnerName: '',
    ageConfirmed: false,
    unlockAll: false,
    lessons: {},
    exams: {},
    cards: {},
    journal: [],
    updatedAt: 0,
  };
}

const isObj = (v) => v && typeof v === 'object' && !Array.isArray(v);
const num = (v, d = 0) => (typeof v === 'number' && Number.isFinite(v) ? v : d);

/** Coerce anything (old versions, hand-edited imports, null) into a valid progress record. */
export function normalizeProgress(raw) {
  const p = emptyProgress();
  if (!isObj(raw)) return p;
  p.learnerName = typeof raw.learnerName === 'string' ? raw.learnerName.slice(0, 80) : '';
  p.ageConfirmed = raw.ageConfirmed === true;
  p.unlockAll = raw.unlockAll === true;
  p.updatedAt = num(raw.updatedAt);
  if (isObj(raw.lessons)) {
    for (const [id, l] of Object.entries(raw.lessons)) {
      if (!isObj(l)) continue;
      p.lessons[id] = {
        readAt: num(l.readAt),
        quizBest: Math.min(100, Math.max(0, num(l.quizBest))),
        quizPassed: l.quizPassed === true,
        attempts: num(l.attempts),
      };
    }
  }
  if (isObj(raw.exams)) {
    for (const [n, e] of Object.entries(raw.exams)) {
      if (!isObj(e)) continue;
      p.exams[n] = {
        best: Math.min(100, Math.max(0, num(e.best))),
        passed: e.passed === true,
        passedAt: num(e.passedAt),
        attempts: num(e.attempts),
        history: Array.isArray(e.history)
          ? e.history.filter(isObj).slice(-HISTORY_LIMIT).map((h) => ({
              at: num(h.at),
              percent: num(h.percent),
              seconds: num(h.seconds),
              passed: h.passed === true,
            }))
          : [],
      };
    }
  }
  if (isObj(raw.cards)) {
    for (const [id, c] of Object.entries(raw.cards)) {
      if (!isObj(c)) continue;
      p.cards[id] = {
        box: Math.min(5, Math.max(1, Math.round(num(c.box, 1)))),
        due: num(c.due),
        last: num(c.last),
        reviews: num(c.reviews),
        lapses: num(c.lapses),
      };
    }
  }
  if (Array.isArray(raw.journal)) {
    p.journal = raw.journal
      .filter((j) => isObj(j) && typeof j.id === 'string')
      .slice(-JOURNAL_LIMIT)
      .map((j) => ({ ...j }));
  }
  return p;
}

const clone = (p) => (typeof structuredClone === 'function' ? structuredClone(p) : JSON.parse(JSON.stringify(p)));
const touch = (p, now) => {
  p.updatedAt = now;
  return p;
};

// ---------------------------------------------------------------- queries

export function lessonQuizPass(level) {
  return level?.lessonQuizPass ?? DEFAULT_LESSON_PASS;
}

export function isLevelUnlocked(course, progress, levelNumber) {
  if (levelNumber <= 1 || progress.unlockAll) return true;
  return progress.exams[String(levelNumber - 1)]?.passed === true;
}

/** 'new' | 'read' | 'passed' */
export function lessonStatus(progress, lessonId) {
  const l = progress.lessons[lessonId];
  if (!l) return 'new';
  if (l.quizPassed) return 'passed';
  if (l.readAt) return 'read';
  return 'new';
}

export function levelStats(level, progress) {
  const lessonsTotal = level.lessons.length;
  const lessonsPassed = level.lessons.filter((l) => lessonStatus(progress, l.id) === 'passed').length;
  const lessonsRead = level.lessons.filter((l) => lessonStatus(progress, l.id) !== 'new').length;
  const exam = progress.exams[String(level.number)];
  const examPassed = exam?.passed === true;
  // The exam is worth as much as all the lessons together.
  const percentComplete = examPassed ? 100 : Math.round((lessonsPassed / (lessonsTotal * 2)) * 100);
  return {
    lessonsTotal,
    lessonsPassed,
    lessonsRead,
    examPassed,
    examBest: exam?.best ?? 0,
    examAttempts: exam?.attempts ?? 0,
    lessonsDone: lessonsPassed === lessonsTotal,
    percentComplete,
  };
}

export function courseComplete(course, progress) {
  return course.levels.every((lv) => progress.exams[String(lv.number)]?.passed === true);
}

export function courseStats(course, progress) {
  const passedLevels = course.levels.filter((lv) => progress.exams[String(lv.number)]?.passed).length;
  const lessons = course.levels.flatMap((lv) => lv.lessons);
  const lessonsPassed = lessons.filter((l) => lessonStatus(progress, l.id) === 'passed').length;
  const bests = course.levels.map((lv) => progress.exams[String(lv.number)]?.best).filter((b) => typeof b === 'number');
  const passedBests = course.levels
    .filter((lv) => progress.exams[String(lv.number)]?.passed)
    .map((lv) => progress.exams[String(lv.number)].best);
  const average = passedBests.length ? passedBests.reduce((a, b) => a + b, 0) / passedBests.length : 0;
  const currentRank = [...course.levels].reverse().find((lv) => progress.exams[String(lv.number)]?.passed)?.rank || null;
  return {
    passedLevels,
    totalLevels: course.levels.length,
    lessonsPassed,
    totalLessons: lessons.length,
    averageExam: average,
    attemptedExams: bests.length,
    currentRank,
  };
}

/** The single most useful next action for the learner. */
export function nextStep(course, progress) {
  for (const level of course.levels) {
    if (progress.exams[String(level.number)]?.passed) continue;
    if (!isLevelUnlocked(course, progress, level.number)) return { kind: 'locked', level };
    const unread = level.lessons.find((l) => lessonStatus(progress, l.id) === 'new');
    const unpassed = level.lessons.find((l) => lessonStatus(progress, l.id) !== 'passed');
    if (unpassed && lessonStatus(progress, unpassed.id) === 'read') return { kind: 'quiz', level, lesson: unpassed };
    if (unread) return { kind: 'lesson', level, lesson: unread };
    if (unpassed) return { kind: 'quiz', level, lesson: unpassed };
    return { kind: 'exam', level };
  }
  return { kind: 'done' };
}

// ---------------------------------------------------------------- updates

export function setLearnerName(progress, name, now) {
  const p = clone(progress);
  p.learnerName = String(name || '').trim().slice(0, 80);
  return touch(p, now);
}

export function setFlag(progress, key, value, now) {
  if (!['ageConfirmed', 'unlockAll'].includes(key)) throw new Error(`Unknown flag ${key}`);
  const p = clone(progress);
  p[key] = value === true;
  return touch(p, now);
}

export function recordLessonRead(progress, lessonId, now) {
  const p = clone(progress);
  const l = p.lessons[lessonId] || { readAt: 0, quizBest: 0, quizPassed: false, attempts: 0 };
  if (!l.readAt) l.readAt = now;
  p.lessons[lessonId] = l;
  return touch(p, now);
}

export function recordQuizAttempt(progress, lessonId, percent, passPercent, now) {
  const p = clone(progress);
  const l = p.lessons[lessonId] || { readAt: 0, quizBest: 0, quizPassed: false, attempts: 0 };
  if (!l.readAt) l.readAt = now;
  l.attempts += 1;
  l.quizBest = Math.max(l.quizBest, Math.round(percent));
  if (percent + 1e-9 >= passPercent) l.quizPassed = true;
  p.lessons[lessonId] = l;
  return touch(p, now);
}

export function recordExamAttempt(progress, levelNumber, percent, passPercent, now, seconds = 0) {
  const p = clone(progress);
  const key = String(levelNumber);
  const e = p.exams[key] || { best: 0, passed: false, passedAt: 0, attempts: 0, history: [] };
  const passed = percent + 1e-9 >= passPercent;
  e.attempts += 1;
  e.best = Math.max(e.best, Math.round(percent));
  if (passed && !e.passed) {
    e.passed = true;
    e.passedAt = now;
  }
  e.history = [...e.history, { at: now, percent: Math.round(percent), seconds: Math.round(seconds), passed }].slice(-HISTORY_LIMIT);
  p.exams[key] = e;
  return touch(p, now);
}

export function addJournalEntry(progress, entry, now) {
  const p = clone(progress);
  const id = entry.id || `t${now.toString(36)}${Math.floor(Math.random() * 1e6).toString(36)}`;
  const clean = { ...entry, id, at: entry.at || now };
  p.journal = [...p.journal.filter((j) => j.id !== id), clean].slice(-JOURNAL_LIMIT);
  return touch(p, now);
}

export function removeJournalEntry(progress, id, now) {
  const p = clone(progress);
  p.journal = p.journal.filter((j) => j.id !== id);
  return touch(p, now);
}

export function setCardState(progress, cardId, state, now) {
  const p = clone(progress);
  p.cards[cardId] = { ...state };
  return touch(p, now);
}

/**
 * Merge two progress records (e.g. this browser's copy and the synced copy).
 * Never loses an achievement: best scores take the max, passes are sticky,
 * flashcards keep the most recently reviewed state, journals union by id.
 */
export function mergeProgress(a, b) {
  const A = normalizeProgress(a);
  const B = normalizeProgress(b);
  const out = emptyProgress();
  const newer = A.updatedAt >= B.updatedAt ? A : B;
  const older = newer === A ? B : A;
  out.learnerName = newer.learnerName || older.learnerName;
  out.ageConfirmed = A.ageConfirmed || B.ageConfirmed;
  out.unlockAll = newer.unlockAll;
  out.updatedAt = Math.max(A.updatedAt, B.updatedAt);

  for (const id of new Set([...Object.keys(A.lessons), ...Object.keys(B.lessons)])) {
    const x = A.lessons[id];
    const y = B.lessons[id];
    if (!x || !y) {
      out.lessons[id] = { ...(x || y) };
      continue;
    }
    const reads = [x.readAt, y.readAt].filter(Boolean);
    out.lessons[id] = {
      readAt: reads.length ? Math.min(...reads) : 0,
      quizBest: Math.max(x.quizBest, y.quizBest),
      quizPassed: x.quizPassed || y.quizPassed,
      attempts: Math.max(x.attempts, y.attempts),
    };
  }

  for (const n of new Set([...Object.keys(A.exams), ...Object.keys(B.exams)])) {
    const x = A.exams[n];
    const y = B.exams[n];
    if (!x || !y) {
      out.exams[n] = { ...(x || y), history: [...(x || y).history] };
      continue;
    }
    const passes = [x.passed && x.passedAt, y.passed && y.passedAt].filter(Boolean);
    const seen = new Set();
    const history = [...x.history, ...y.history]
      .filter((h) => {
        const k = `${h.at}:${h.percent}`;
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .sort((h1, h2) => h1.at - h2.at)
      .slice(-HISTORY_LIMIT);
    out.exams[n] = {
      best: Math.max(x.best, y.best),
      passed: x.passed || y.passed,
      passedAt: passes.length ? Math.min(...passes) : 0,
      attempts: Math.max(x.attempts, y.attempts),
      history,
    };
  }

  for (const id of new Set([...Object.keys(A.cards), ...Object.keys(B.cards)])) {
    const x = A.cards[id];
    const y = B.cards[id];
    out.cards[id] = { ...(!x ? y : !y ? x : x.last >= y.last ? x : y) };
  }

  const journal = new Map();
  for (const j of [...older.journal, ...newer.journal]) journal.set(j.id, j);
  out.journal = [...journal.values()].sort((j1, j2) => (j1.at || 0) - (j2.at || 0)).slice(-JOURNAL_LIMIT);
  return out;
}
