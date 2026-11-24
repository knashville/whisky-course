import { h, md, gauge } from '../ui/dom.js';
import { isLevelUnlocked, levelStats, lessonStatus, lessonQuizPass } from '../engine/progress.js';

export function renderLevel(ctx, number) {
  const { course, progress } = ctx;
  const level = ctx.index.levels.get(number);
  if (!level) return h('section', { class: 'page' }, h('h1', null, 'No such level'), h('a', { class: 'btn btn-primary', href: '#home' }, 'Back to the course map'));
  const unlocked = isLevelUnlocked(course, progress, number);
  const st = levelStats(level, progress);
  const pass = lessonQuizPass(level);

  const header = h(
    'header',
    { class: 'level-head' },
    h('a', { class: 'crumb', href: '#home' }, '← The warehouse'),
    h(
      'div',
      { class: 'level-title-row' },
      h('span', { class: 'level-floor' }, h('span', { class: 'floor-word' }, 'Floor'), h('span', { class: 'floor-num big' }, String(level.number).padStart(2, '0'))),
      h(
        'div',
        { class: 'level-title-text' },
        h('p', { class: 'eyebrow' }, `${level.proof} proof · rank on passing: ${level.rank}`),
        h('h1', null, level.title),
        h('p', { class: 'lede' }, level.tagline),
      ),
    ),
    gauge(st.percentComplete, 'Level progress'),
  );

  const about = h(
    'section',
    { class: 'level-about' },
    h('div', { class: 'prose' }, md(level.description)),
    h('div', { class: 'objectives' }, h('h2', { class: 'h-small' }, 'By the end you can'), h('ul', null, level.objectives.map((o) => h('li', null, o)))),
  );

  if (!unlocked) {
    const prev = ctx.index.levels.get(number - 1);
    return h(
      'div',
      { class: 'page level' },
      header,
      h(
        'section',
        { class: 'locked-panel' },
        h('h2', null, 'This floor is locked'),
        h('p', null, `Pass the Level ${number - 1} exam (${prev.title}) to unlock it. Experienced? You can turn on preview mode in your profile to open every level.`),
        h('div', { class: 'row' }, h('a', { class: 'btn btn-primary', href: `#level-${number - 1}` }, `Go to Level ${number - 1}`), h('a', { class: 'btn btn-ghost', href: '#profile' }, 'Profile and preview mode')),
      ),
      about,
      h('section', null, h('h2', null, 'Lessons on this floor'), h('ol', { class: 'lesson-list is-locked' }, level.lessons.map((l) => h('li', { class: 'lesson-row' }, h('div', { class: 'lesson-row-main' }, h('span', { class: 'lesson-row-title' }, l.title), h('span', { class: 'lesson-row-sum' }, l.summary)))))),
    );
  }

  const lessons = h(
    'section',
    { 'aria-labelledby': 'lessons-title' },
    h('h2', { id: 'lessons-title' }, 'Lessons'),
    h(
      'ol',
      { class: 'lesson-list' },
      level.lessons.map((l, i) => {
        const status = lessonStatus(progress, l.id);
        const rec = progress.lessons[l.id];
        const label = { new: 'Not started', read: 'Read · quiz to do', passed: `Quiz passed · ${rec?.quizBest ?? 0}%` }[status];
        return h(
          'li',
          { class: ['lesson-row', `is-${status}`] },
          h('span', { class: ['barrel', `is-${status}`], 'aria-hidden': 'true' }, h('span', null, String(i + 1))),
          h(
            'div',
            { class: 'lesson-row-main' },
            h('a', { class: 'lesson-row-title', href: `#lesson-${l.id}` }, l.title),
            h('span', { class: 'lesson-row-sum' }, l.summary),
            h('span', { class: 'lesson-row-meta' }, `${l.minutes} min read · ${l.quiz.length}-question quiz · `, h('span', { class: `status-${status}` }, label)),
          ),
          h(
            'div',
            { class: 'lesson-row-actions' },
            h('a', { class: 'btn btn-ghost btn-sm', href: `#lesson-${l.id}` }, status === 'new' ? 'Read' : 'Review'),
            h('a', { class: 'btn btn-secondary btn-sm', href: `#quiz-${l.id}` }, status === 'passed' ? 'Retake quiz' : 'Quiz'),
          ),
        );
      }),
    ),
    h('p', { class: 'hint' }, `Lesson quizzes need ${pass}% to pass. Retake them as often as you like; your best score counts.`),
  );

  const exam = level.exam;
  const examState = progress.exams[String(level.number)];
  const ready = st.lessonsDone;
  const examPanel = h(
    'section',
    { class: ['exam-panel', st.examPassed && 'is-passed'], 'aria-labelledby': 'exam-title' },
    h('div', { class: 'exam-stamp', 'aria-hidden': 'true' }, st.examPassed ? 'Bonded' : 'Level exam'),
    h('h2', { id: 'exam-title' }, `Level ${level.number} exam`),
    h(
      'dl',
      { class: 'exam-facts' },
      fact('Questions', `${exam.draw}, drawn from a pool of ${exam.questions.length}`),
      fact('Pass mark', `${exam.passPercent}%`),
      fact('Time limit', exam.timeLimitMinutes ? `${exam.timeLimitMinutes} minutes` : 'Untimed'),
      fact('Your best', examState ? `${examState.best}% after ${examState.attempts} attempt${examState.attempts === 1 ? '' : 's'}` : 'Not attempted'),
    ),
    st.examPassed
      ? h('p', null, `Passed. You hold the rank of `, h('strong', null, level.rank), '. Retake it any time to practice.')
      : ready
        ? h('p', null, 'All lesson quizzes passed. You are ready.')
        : h('p', null, `Recommended: pass all ${st.lessonsTotal} lesson quizzes first (${st.lessonsPassed} done). You may challenge the exam now if you already know this material.`),
    h('a', { class: ['btn', ready || st.examPassed ? 'btn-primary' : 'btn-secondary'], href: `#exam-${level.number}` }, st.examPassed ? 'Retake the exam' : ready ? 'Start the exam' : 'Challenge the exam'),
  );

  return h('div', { class: 'page level' }, header, about, lessons, examPanel, nav(ctx, level));
}

function fact(k, v) {
  return h('div', null, h('dt', null, k), h('dd', null, v));
}

function nav(ctx, level) {
  const prev = ctx.index.levels.get(level.number - 1);
  const next = ctx.index.levels.get(level.number + 1);
  return h(
    'nav',
    { class: 'pager', 'aria-label': 'Levels' },
    prev ? h('a', { class: 'pager-link', href: `#level-${prev.number}` }, h('span', null, '← Level ' + prev.number), h('strong', null, prev.title)) : h('span'),
    next ? h('a', { class: 'pager-link next', href: `#level-${next.number}` }, h('span', null, 'Level ' + next.number + ' →'), h('strong', null, next.title)) : h('span'),
  );
}
