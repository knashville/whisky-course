import { h, formatDate } from '../ui/dom.js';
import { courseComplete, courseStats } from '../engine/progress.js';

export function renderCertificate(ctx) {
  const { course, progress } = ctx;
  const done = courseComplete(course, progress);
  const stats = courseStats(course, progress);
  const finalLevel = course.levels[course.levels.length - 1];

  if (!done) {
    const remaining = course.levels.filter((lv) => !progress.exams[String(lv.number)]?.passed);
    return h(
      'div',
      { class: 'page certificate' },
      h('header', { class: 'page-head' }, h('p', { class: 'eyebrow' }, 'Certificate'), h('h1', null, 'Not bonded yet'), h('p', { class: 'lede' }, `Pass all ${course.levels.length} level exams to earn the certificate and the rank of ${finalLevel.rank}.`)),
      h(
        'ol',
        { class: 'cert-progress' },
        course.levels.map((lv) => {
          const e = progress.exams[String(lv.number)];
          return h('li', { class: e?.passed ? 'is-done' : '' }, h('a', { href: `#level-${lv.number}` }, `Level ${lv.number}: ${lv.title}`), h('span', null, e?.passed ? `Passed · ${e.best}%` : e ? `Best ${e.best}% · need ${lv.exam.passPercent}%` : 'Not attempted'));
        }),
      ),
      h('a', { class: 'btn btn-primary', href: `#level-${remaining[0].number}` }, `Continue with Level ${remaining[0].number}`),
    );
  }

  const finishedAt = Math.max(...course.levels.map((lv) => progress.exams[String(lv.number)].passedAt || 0));
  const name = progress.learnerName || 'Name not set';
  const framed = window.self !== window.top;
  return h(
    'div',
    { class: 'page certificate' },
    h(
      'article',
      { class: 'cert', 'aria-label': 'Certificate of completion' },
      h('div', { class: 'cert-strip', 'aria-hidden': 'true' }, 'Bottled in bond · ' + course.title),
      h('p', { class: 'cert-eyebrow' }, 'This certifies that'),
      h('p', { class: ['cert-name', !progress.learnerName && 'is-missing'] }, name),
      h('p', { class: 'cert-body' }, `has passed all ${course.levels.length} levels of ${course.title}, from ${course.levels[0].title} to ${finalLevel.title}, and holds the rank of`),
      h('p', { class: 'cert-rank' }, finalLevel.rank),
      h(
        'dl',
        { class: 'cert-facts' },
        h('div', null, h('dt', null, 'Completed'), h('dd', null, formatDate(finishedAt))),
        h('div', null, h('dt', null, 'Average exam score'), h('dd', null, `${Math.round(stats.averageExam)}%`)),
        h('div', null, h('dt', null, 'Lessons'), h('dd', null, String(stats.totalLessons))),
      ),
      h('ol', { class: 'cert-ranks' }, course.levels.map((lv) => h('li', null, h('span', null, lv.rank), h('span', { class: 'tabular' }, `${progress.exams[String(lv.number)].best}%`)))),
    ),
    !progress.learnerName ? h('p', { class: 'warn-note' }, 'Add your name in ', h('a', { href: '#profile' }, 'your profile'), ' to show it on the certificate.') : null,
    framed ? h('p', { class: 'hint' }, 'To print, open the course as a standalone page; printing is not available inside this viewer. A screenshot works too.') : h('button', { type: 'button', class: 'btn btn-secondary', onclick: () => window.print() }, 'Print certificate'),
  );
}
