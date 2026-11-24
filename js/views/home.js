import { h, gauge } from '../ui/dom.js';
import { isLevelUnlocked, levelStats, nextStep, courseStats, lessonStatus } from '../engine/progress.js';
import { buildDeck, studyQueue, dayNumber } from '../engine/srs.js';

export function renderHome(ctx) {
  const { course, progress } = ctx;
  const step = nextStep(course, progress);
  const stats = courseStats(course, progress);
  const unlockedLevels = course.levels.filter((lv) => isLevelUnlocked(course, progress, lv.number));
  const deck = buildDeck(unlockedLevels);
  const due = studyQueue(deck, progress.cards, dayNumber(), { newLimit: 0 }).length;

  const cta = continueAction(step);
  const hero = h(
    'section',
    { class: 'hero' },
    h(
      'div',
      { class: 'hero-inner' },
      h('p', { class: 'eyebrow' }, `${course.levels.length} levels · ${stats.totalLessons} lessons · one bonded certificate`),
      h('h1', { class: 'hero-title' }, course.title),
      h('p', { class: 'hero-tagline' }, course.tagline),
      h(
        'div',
        { class: 'hero-actions' },
        h('a', { class: 'btn btn-primary btn-lg', href: `#${cta.route}` }, cta.label),
        h('span', { class: 'hero-next' }, cta.note),
      ),
      h(
        'dl',
        { class: 'stat-row' },
        stat('Rank', stats.currentRank || 'Unranked'),
        stat('Levels passed', `${stats.passedLevels} of ${stats.totalLevels}`),
        stat('Lessons passed', `${stats.lessonsPassed} of ${stats.totalLessons}`),
        stat('Cards due', due ? String(due) : 'None', due ? 'flashcards' : null),
      ),
    ),
  );

  const floors = [...course.levels].reverse().map((level) => floor(ctx, level));
  const house = h(
    'section',
    { class: 'rickhouse-wrap', 'aria-labelledby': 'map-title' },
    h(
      'div',
      { class: 'section-head' },
      h('h2', { id: 'map-title' }, 'The warehouse'),
      h(
        'p',
        { class: 'section-lede' },
        'Every level is a floor of a rickhouse. You start on the ground floor; each floor up is hotter, stronger and harder. Pass a floor’s exam to have it bonded and unlock the stairs.',
      ),
    ),
    h('ol', { class: 'rickhouse', reversed: true }, floors),
    h('div', { class: 'rick-ground', 'aria-hidden': 'true' }),
  );

  return h('div', { class: 'home' }, hero, house, legend());
}

function stat(label, value, route) {
  return h('div', { class: 'stat' }, h('dt', null, label), h('dd', null, route ? h('a', { href: `#${route}` }, value) : value));
}

function continueAction(step) {
  switch (step.kind) {
    case 'lesson':
      return { route: `lesson-${step.lesson.id}`, label: 'Continue reading', note: `Next: ${step.lesson.title}` };
    case 'quiz':
      return { route: `quiz-${step.lesson.id}`, label: 'Take the lesson quiz', note: `Quiz: ${step.lesson.title}` };
    case 'exam':
      return { route: `exam-${step.level.number}`, label: `Sit the Level ${step.level.number} exam`, note: `Pass it to earn the rank of ${step.level.rank}` };
    case 'done':
      return { route: 'certificate', label: 'View your certificate', note: 'Every floor is bonded. Well done.' };
    default:
      return { route: `level-${step.level.number}`, label: 'Open the course', note: '' };
  }
}

function floor(ctx, level) {
  const { course, progress } = ctx;
  const unlocked = isLevelUnlocked(course, progress, level.number);
  const st = levelStats(level, progress);
  const state = st.examPassed ? 'bonded' : !unlocked ? 'locked' : st.lessonsRead || st.examAttempts ? 'active' : 'open';
  const chip = {
    bonded: `Bonded · best ${st.examBest}%`,
    locked: `Locked · pass Level ${level.number - 1}`,
    active: `${st.lessonsPassed} of ${st.lessonsTotal} lessons passed`,
    open: 'Open',
  }[state];

  return h(
    'li',
    { class: ['floor', `is-${state}`] },
    h(
      'a',
      { class: 'floor-link', href: `#level-${level.number}`, 'aria-label': `Level ${level.number}: ${level.title}. ${chip}` },
      h(
        'div',
        { class: 'floor-id' },
        h('span', { class: 'floor-num' }, String(level.number).padStart(2, '0')),
        h('span', { class: 'floor-proof' }, `${level.proof} proof`),
      ),
      h(
        'div',
        { class: 'floor-body' },
        h('h3', { class: 'floor-title' }, level.title),
        h('p', { class: 'floor-tagline' }, level.tagline),
        h('p', { class: 'floor-rank' }, 'Rank on passing: ', h('strong', null, level.rank)),
      ),
      h(
        'div',
        { class: 'floor-ricks' },
        h(
          'ul',
          { class: 'barrels', 'aria-hidden': 'true' },
          level.lessons.map((l, i) => h('li', { class: ['barrel', `is-${lessonStatus(progress, l.id)}`] }, h('span', null, String(i + 1)))),
        ),
        h('span', { class: ['bond-strip', st.examPassed && 'is-sealed'], 'aria-hidden': 'true' }, st.examPassed ? 'Bonded' : 'Exam'),
        h('span', { class: ['chip', `chip-${state}`] }, chip),
        gauge(st.percentComplete, `Level ${level.number} progress`),
      ),
    ),
  );
}

function legend() {
  return h(
    'aside',
    { class: 'legend', 'aria-label': 'How to read the warehouse' },
    h('span', { class: 'legend-item' }, h('span', { class: 'barrel is-new mini' }), 'Lesson not started'),
    h('span', { class: 'legend-item' }, h('span', { class: 'barrel is-read mini' }), 'Read, quiz to do'),
    h('span', { class: 'legend-item' }, h('span', { class: 'barrel is-passed mini' }), 'Quiz passed'),
    h('span', { class: 'legend-item' }, h('span', { class: 'bond-strip is-sealed mini' }, 'Bonded'), 'Level exam passed'),
  );
}
