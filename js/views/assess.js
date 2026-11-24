// Lesson quizzes (practice mode: instant feedback) and level exams
// (exam mode: random draw, optional timer, feedback only after submitting).

import { h, md1, clear, formatDuration, button } from '../ui/dom.js';
import { renderQuestion } from '../ui/questions.js';
import { mulberry32, randomSeed, shuffle } from '../engine/rng.js';
import { prepareQuestion, gradeQuestion, scoreAttempt, isAnswered, drawQuestions, isPass } from '../engine/quiz.js';
import { isLevelUnlocked, lessonQuizPass, recordQuizAttempt, recordExamAttempt, levelStats } from '../engine/progress.js';

// ------------------------------------------------------------------ lesson quiz

export function renderQuiz(ctx, lessonId) {
  const entry = ctx.index.lessons.get(lessonId);
  if (!entry) return h('section', { class: 'page' }, h('h1', null, 'Quiz not found'), h('a', { class: 'btn btn-primary', href: '#home' }, 'Back to the course map'));
  const { level, lesson, position } = entry;
  if (!isLevelUnlocked(ctx.course, ctx.progress, level.number)) {
    return h('section', { class: 'page' }, h('h1', null, 'This quiz is locked'), h('p', null, `Pass the Level ${level.number - 1} exam first.`), h('a', { class: 'btn btn-primary', href: `#level-${level.number - 1}` }, `Go to Level ${level.number - 1}`));
  }
  let s = ctx.session.quiz;
  if (!s || s.lessonId !== lessonId) s = ctx.session.quiz = newQuiz(lesson);

  const root = h('div', { class: 'page assess quiz' });
  const passPct = lessonQuizPass(level);

  const draw = () => {
    clear(root);
    root.append(
      h(
        'header',
        { class: 'assess-head' },
        h('a', { class: 'crumb', href: `#lesson-${lesson.id}` }, `← ${lesson.title}`),
        h('p', { class: 'eyebrow' }, `Level ${level.number} · Lesson ${position + 1} quiz · pass mark ${passPct}%`),
        h('h1', null, s.done ? 'Quiz results' : `Quiz: ${lesson.title}`),
      ),
    );
    if (s.done) return root.append(quizResults(ctx, s, level, lesson, passPct, () => { ctx.session.quiz = newQuiz(lesson); s = ctx.session.quiz; draw(); }));

    const q = s.questions[s.idx];
    const checked = s.checked[q.id];
    root.append(dots(s.questions.map((qq, i) => ({ state: s.checked[qq.id] ? (s.checked[qq.id].correct ? 'ok' : 'miss') : i === s.idx ? 'current' : '' }))));
    const checkBtn = button('Check answer', () => {
      s.checked[q.id] = gradeQuestion(q, s.responses[q.id]);
      draw();
    }, { disabled: !isAnswered(q, s.responses[q.id]) });
    const qEl = renderQuestion(s.prepared[s.idx], {
      response: s.responses[q.id],
      number: `Question ${s.idx + 1} of ${s.questions.length}`,
      locked: !!checked,
      reveal: !!checked,
      question: q,
      onChange: (r) => {
        s.responses[q.id] = r;
        checkBtn.disabled = !isAnswered(q, r);
      },
    });
    const isLast = s.idx === s.questions.length - 1;
    const nextBtn = button(isLast ? 'See results' : 'Next question', () => {
      if (isLast) finishQuiz(ctx, s, lesson, passPct);
      else {
        s.idx += 1;
        draw();
      }
    });
    root.append(qEl, h('div', { class: 'assess-actions' }, checked ? nextBtn : checkBtn));
    qEl.tabIndex = -1;
    if (s.idx > 0 || checked) queueMicrotask(() => (checked ? nextBtn : qEl).focus({ preventScroll: true }));
  };
  draw();
  return root;
}

function newQuiz(lesson) {
  const rng = mulberry32(randomSeed());
  const questions = shuffle(lesson.quiz, rng);
  return {
    lessonId: lesson.id,
    questions,
    prepared: questions.map((q) => prepareQuestion(q, rng)),
    idx: 0,
    responses: {},
    checked: {},
    done: false,
    running: true,
  };
}

function finishQuiz(ctx, s, lesson, passPct) {
  s.score = scoreAttempt(s.questions, s.responses);
  s.done = true;
  s.running = false;
  ctx.update((p, now) => recordQuizAttempt(p, lesson.id, s.score.percent, passPct, now));
}

function quizResults(ctx, s, level, lesson, passPct, retake) {
  const { correct, total, percent } = s.score;
  const passed = isPass(percent, passPct);
  const next = level.lessons[level.lessons.findIndex((l) => l.id === lesson.id) + 1];
  const st = levelStats(level, ctx.progress);
  return h(
    'section',
    { class: ['result-card', passed ? 'is-pass' : 'is-fail'] },
    h('p', { class: 'result-score' }, h('span', { class: 'result-pct' }, `${Math.round(percent)}%`), h('span', null, `${correct} of ${total} correct`)),
    h('p', { class: 'result-verdict' }, passed ? 'Passed. This barrel is full.' : `Not yet. You need ${passPct}% to pass; review the lesson and try again.`),
    h(
      'div',
      { class: 'row' },
      passed && next ? h('a', { class: 'btn btn-primary', href: `#lesson-${next.id}` }, `Next lesson: ${next.title}`) : null,
      passed && !next ? h('a', { class: 'btn btn-primary', href: `#exam-${level.number}` }, st.lessonsDone ? `Sit the Level ${level.number} exam` : `Level ${level.number} exam`) : null,
      !passed ? h('a', { class: 'btn btn-primary', href: `#lesson-${lesson.id}` }, 'Review the lesson') : null,
      button('Retake quiz', retake, { kind: passed ? 'ghost' : 'secondary' }),
      h('a', { class: 'btn btn-ghost', href: `#level-${level.number}` }, 'Level overview'),
    ),
  );
}

function dots(items) {
  return h(
    'ol',
    { class: 'dots', 'aria-hidden': 'true' },
    items.map((it) => h('li', { class: ['dot', it.state && `is-${it.state}`] })),
  );
}

// ------------------------------------------------------------------ level exam

export function renderExam(ctx, number) {
  const level = ctx.index.levels.get(number);
  if (!level) return h('section', { class: 'page' }, h('h1', null, 'Exam not found'), h('a', { class: 'btn btn-primary', href: '#home' }, 'Back to the course map'));
  if (!isLevelUnlocked(ctx.course, ctx.progress, number)) {
    return h('section', { class: 'page' }, h('h1', null, 'This exam is locked'), h('p', null, `Pass the Level ${number - 1} exam first.`), h('a', { class: 'btn btn-primary', href: `#level-${number - 1}` }, `Go to Level ${number - 1}`));
  }
  const root = h('div', { class: 'page assess exam' });
  const s = ctx.session.exam && ctx.session.exam.level === number ? ctx.session.exam : null;
  if (!s) examIntro(ctx, level, root);
  else if (s.submitted) examResults(ctx, level, s, root);
  else examRunner(ctx, level, s, root);
  return root;
}

function examHead(level, title) {
  return h(
    'header',
    { class: 'assess-head' },
    h('a', { class: 'crumb', href: `#level-${level.number}` }, `← Level ${level.number}: ${level.title}`),
    h('p', { class: 'eyebrow' }, `${level.proof} proof · rank on passing: ${level.rank}`),
    h('h1', null, title),
  );
}

function examIntro(ctx, level, root) {
  const exam = level.exam;
  const st = levelStats(level, ctx.progress);
  clear(root).append(
    examHead(level, `Level ${level.number} exam`),
    h(
      'section',
      { class: 'exam-intro' },
      h(
        'ul',
        { class: 'rules' },
        h('li', null, `${exam.draw} questions drawn at random from a pool of ${exam.questions.length}, spread across every lesson.`),
        h('li', null, `Pass mark: ${exam.passPercent}%. Each question is all or nothing; "select all" and ordering questions must be completely right.`),
        h('li', null, exam.timeLimitMinutes ? `Time limit: ${exam.timeLimitMinutes} minutes. The exam submits itself when time runs out.` : 'No time limit.'),
        h('li', null, 'No feedback until you submit. You can move between questions and flag any to revisit.'),
        h('li', null, 'Every attempt draws a fresh set of questions.'),
      ),
      !st.lessonsDone && !st.examPassed ? h('p', { class: 'warn-note' }, `You have passed ${st.lessonsPassed} of ${st.lessonsTotal} lesson quizzes. Challenging the exam early is allowed.`) : null,
      h(
        'div',
        { class: 'row' },
        button('Begin the exam', () => {
          ctx.session.exam = newExam(level);
          ctx.rerender();
        }, { kind: 'primary', class: 'btn btn-primary btn-lg' }),
        h('a', { class: 'btn btn-ghost', href: `#level-${level.number}` }, 'Not now'),
      ),
    ),
  );
}

function newExam(level) {
  const rng = mulberry32(randomSeed());
  const questions = drawQuestions(level.exam.questions, level.exam.draw, rng);
  const now = Date.now();
  return {
    level: level.number,
    questions,
    prepared: questions.map((q) => prepareQuestion(q, rng)),
    idx: 0,
    responses: {},
    flagged: new Set(),
    startedAt: now,
    deadline: level.exam.timeLimitMinutes ? now + level.exam.timeLimitMinutes * 60000 : null,
    running: true,
    submitted: false,
  };
}

function examRunner(ctx, level, s, root) {
  if (s.deadline && Date.now() >= s.deadline) {
    submitExam(ctx, level, s, true);
    return examResults(ctx, level, s, root);
  }
  const timer = h('span', { class: 'timer', role: 'timer', 'aria-live': 'off' });
  let interval = null;
  const tick = () => {
    if (!root.isConnected && interval) {
      // Left the page: stop updating, keep the exam (and its deadline) in the session.
      clearInterval(interval);
      return;
    }
    if (!s.deadline) return;
    const left = (s.deadline - Date.now()) / 1000;
    timer.textContent = `${formatDuration(left)} left`;
    timer.classList.toggle('is-low', left < 60);
    if (left <= 0) {
      clearInterval(interval);
      submitExam(ctx, level, s, true);
    }
  };
  if (s.deadline) {
    interval = setInterval(tick, 1000);
  }

  const draw = (confirming = false) => {
    clear(root);
    const q = s.questions[s.idx];
    const answeredCount = s.questions.filter((qq) => isAnswered(qq, s.responses[qq.id])).length;
    const navGrid = h(
      'ol',
      { class: 'qnav', 'aria-label': 'Questions' },
      s.questions.map((qq, i) =>
        h(
          'li',
          null,
          h(
            'button',
            {
              type: 'button',
              class: ['qnav-btn', i === s.idx && 'is-current', isAnswered(qq, s.responses[qq.id]) && 'is-answered', s.flagged.has(qq.id) && 'is-flagged'],
              'aria-label': `Question ${i + 1}${isAnswered(qq, s.responses[qq.id]) ? ', answered' : ''}${s.flagged.has(qq.id) ? ', flagged' : ''}`,
              'aria-current': i === s.idx ? 'step' : null,
              onclick: () => {
                s.idx = i;
                draw();
              },
            },
            String(i + 1),
          ),
        ),
      ),
    );
    const status = h('div', { class: 'exam-bar' }, h('span', null, `${answeredCount} of ${s.questions.length} answered`), s.deadline ? timer : h('span', { class: 'timer' }, 'Untimed'));
    tick();

    const qEl = renderQuestion(s.prepared[s.idx], {
      response: s.responses[q.id],
      number: `Question ${s.idx + 1} of ${s.questions.length}`,
      onChange: (r) => {
        s.responses[q.id] = r;
        const btn = navGrid.querySelectorAll('.qnav-btn')[s.idx];
        btn?.classList.toggle('is-answered', isAnswered(q, r));
        status.firstChild.textContent = `${s.questions.filter((qq) => isAnswered(qq, s.responses[qq.id])).length} of ${s.questions.length} answered`;
      },
    });
    const flagBtn = h(
      'button',
      {
        type: 'button',
        class: ['btn', 'btn-ghost', s.flagged.has(q.id) && 'is-on'],
        'aria-pressed': s.flagged.has(q.id) ? 'true' : 'false',
        onclick: () => {
          if (s.flagged.has(q.id)) s.flagged.delete(q.id);
          else s.flagged.add(q.id);
          draw();
        },
      },
      s.flagged.has(q.id) ? 'Flagged' : 'Flag for review',
    );
    const prevBtn = button('← Previous', () => {
      s.idx -= 1;
      draw();
    }, { kind: 'ghost', disabled: s.idx === 0 });
    const nextBtn = button('Next →', () => {
      s.idx += 1;
      draw();
    }, { kind: 'secondary', disabled: s.idx === s.questions.length - 1 });
    const submitArea = confirming
      ? h(
          'div',
          { class: 'confirm-submit', role: 'alertdialog', 'aria-label': 'Confirm submission' },
          h(
            'p',
            null,
            answeredCount < s.questions.length
              ? `${s.questions.length - answeredCount} question${s.questions.length - answeredCount === 1 ? ' is' : 's are'} unanswered and will be marked wrong.`
              : 'All questions answered.',
            s.flagged.size ? ` ${s.flagged.size} flagged for review.` : '',
            ' Submit now?',
          ),
          h(
            'div',
            { class: 'row' },
            button('Submit the exam', () => {
              clearInterval(interval);
              submitExam(ctx, level, s, false);
            }),
            button('Keep working', () => draw(false), { kind: 'ghost' }),
          ),
        )
      : button('Review and submit', () => draw(true), { kind: answeredCount === s.questions.length ? 'primary' : 'secondary' });

    root.append(
      examHead(level, `Level ${level.number} exam`),
      status,
      navGrid,
      qEl,
      h('div', { class: 'assess-actions' }, prevBtn, flagBtn, nextBtn),
      h('div', { class: 'submit-area' }, submitArea),
    );
    if (confirming) queueMicrotask(() => root.querySelector('.confirm-submit .btn')?.focus());
  };
  draw();
}

function submitExam(ctx, level, s, timedOut) {
  if (s.submitted) return;
  s.score = scoreAttempt(s.questions, s.responses);
  s.submitted = true;
  s.running = false;
  s.timedOut = timedOut;
  s.seconds = Math.min((Date.now() - s.startedAt) / 1000, s.deadline ? (s.deadline - s.startedAt) / 1000 : Infinity);
  const wasPassed = ctx.progress.exams[String(level.number)]?.passed === true;
  s.firstPass = !wasPassed && isPass(s.score.percent, level.exam.passPercent);
  ctx.update((p, now) => recordExamAttempt(p, level.number, s.score.percent, level.exam.passPercent, now, s.seconds));
}

function examResults(ctx, level, s, root) {
  const { correct, total, percent, results } = s.score;
  const passed = isPass(percent, level.exam.passPercent);
  const next = ctx.index.levels.get(level.number + 1);

  // Weak spots: results by lesson tag.
  const byLesson = new Map();
  s.questions.forEach((q, i) => {
    const key = q.lesson || '_';
    const row = byLesson.get(key) || { right: 0, total: 0 };
    row.total += 1;
    if (results[i].correct) row.right += 1;
    byLesson.set(key, row);
  });
  const breakdown = [...byLesson.entries()]
    .filter(([k]) => k !== '_')
    .map(([k, v]) => ({ lesson: ctx.index.lessons.get(k)?.lesson, ...v }))
    .filter((x) => x.lesson)
    .sort((a, b) => a.right / a.total - b.right / b.total);

  const review = h(
    'section',
    { class: 'review', 'aria-labelledby': 'review-title' },
    h('h2', { id: 'review-title' }, 'Review every answer'),
    s.questions.map((q, i) =>
      renderQuestion(s.prepared[i], { response: s.responses[q.id], locked: true, reveal: true, question: q, number: `Question ${i + 1}` }),
    ),
  );

  clear(root).append(
    examHead(level, `Level ${level.number} exam results`),
    h(
      'section',
      { class: ['result-card', passed ? 'is-pass' : 'is-fail'] },
      passed ? h('div', { class: 'exam-stamp big', 'aria-hidden': 'true' }, 'Bonded') : null,
      h('p', { class: 'result-score' }, h('span', { class: 'result-pct' }, `${Math.round(percent)}%`), h('span', null, `${correct} of ${total} correct · pass mark ${level.exam.passPercent}% · ${formatDuration(s.seconds)}`)),
      s.timedOut ? h('p', { class: 'warn-note' }, 'Time ran out, so the exam was submitted automatically.') : null,
      h(
        'p',
        { class: 'result-verdict' },
        passed
          ? s.firstPass
            ? `Passed. You have earned the rank of ${level.rank}.${next ? ` Level ${next.number}, ${next.title}, is now unlocked.` : ' That was the final floor.'}`
            : 'Passed.'
          : 'Not this time. Study your weakest lessons below, then try a fresh draw.',
      ),
      h(
        'div',
        { class: 'row' },
        passed && next ? h('a', { class: 'btn btn-primary', href: `#level-${next.number}` }, `Go to Level ${next.number}`) : null,
        passed && !next ? h('a', { class: 'btn btn-primary', href: '#certificate' }, 'View your certificate') : null,
        button(passed ? 'Retake for practice' : 'Try a fresh draw', () => {
          ctx.session.exam = newExam(level);
          ctx.rerender();
        }, { kind: passed ? 'ghost' : 'primary' }),
        h('a', { class: 'btn btn-ghost', href: `#level-${level.number}` }, 'Level overview'),
      ),
    ),
    breakdown.length
      ? h(
          'section',
          { class: 'breakdown' },
          h('h2', { class: 'h-small' }, 'By lesson'),
          h(
            'ul',
            null,
            breakdown.map((b) =>
              h(
                'li',
                { class: b.right === b.total ? 'is-strong' : b.right / b.total < 0.6 ? 'is-weak' : '' },
                h('a', { href: `#lesson-${b.lesson.id}` }, md1(b.lesson.title)),
                h('span', { class: 'tabular' }, `${b.right}/${b.total}`),
              ),
            ),
          ),
        )
      : null,
    review,
  );
}
