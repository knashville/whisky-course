import { h, button, confirmButton, formatDate } from '../ui/dom.js';
import { setLearnerName, setFlag, emptyProgress, normalizeProgress, mergeProgress, courseStats } from '../engine/progress.js';

export function renderProfile(ctx) {
  const p = ctx.progress;
  const stats = courseStats(ctx.course, p);
  const status = ctx.store.status();

  const nameInput = h('input', { id: 'pf-name', type: 'text', value: p.learnerName, maxlength: '80', autocomplete: 'name', placeholder: 'As it should appear on your certificate' });
  const nameMsg = h('span', { class: 'hint', 'aria-live': 'polite' });

  const exportBox = h('textarea', { id: 'pf-export', rows: '5', readonly: true, class: 'mono' }, JSON.stringify(p));
  const copyMsg = h('span', { class: 'hint', 'aria-live': 'polite' });
  const importBox = h('textarea', { id: 'pf-import', rows: '5', class: 'mono', placeholder: 'Paste a progress backup here' });
  const importMsg = h('p', { class: 'hint', 'aria-live': 'polite' });

  const doImport = (mode) => {
    let data;
    try {
      data = JSON.parse(importBox.value);
    } catch {
      importMsg.textContent = 'That is not a valid backup. Paste the full text you copied from "Back up your progress".';
      return;
    }
    const incoming = normalizeProgress(data);
    ctx.update((cur, now) => ({ ...(mode === 'merge' ? mergeProgress(cur, incoming) : incoming), updatedAt: now }));
  };

  return h(
    'div',
    { class: 'page profile' },
    h('header', { class: 'page-head' }, h('p', { class: 'eyebrow' }, 'Your record'), h('h1', null, 'Profile'), h('p', { class: 'lede' }, `${stats.currentRank ? `Rank: ${stats.currentRank}. ` : ''}${stats.passedLevels} of ${stats.totalLevels} levels passed, ${stats.lessonsPassed} of ${stats.totalLessons} lessons.`)),
    h(
      'section',
      { class: 'panel' },
      h('h2', { class: 'h-small' }, 'Name on your certificate'),
      h(
        'div',
        { class: 'row' },
        h('label', { class: 'field grow', for: 'pf-name' }, h('span', { class: 'field-label' }, 'Full name'), nameInput),
        button('Save name', () => {
          ctx.update((cur, now) => setLearnerName(cur, nameInput.value, now));
        }),
      ),
      nameMsg,
    ),
    h(
      'section',
      { class: 'panel' },
      h('h2', { class: 'h-small' }, 'Where your progress is saved'),
      h('p', null, h('span', { class: ['sync-dot', `is-${status.mode}`], 'aria-hidden': 'true' }), status.detail, '.'),
      h('p', { class: 'hint' }, 'In a browser on its own, progress stays in this browser. Opened as a claude.ai artifact while signed in, it also syncs privately to your account. Make a backup before clearing browser data.'),
    ),
    h(
      'section',
      { class: 'panel' },
      h('h2', { class: 'h-small' }, 'Preview mode'),
      h(
        'label',
        { class: 'check', for: 'pf-unlock' },
        h('input', { id: 'pf-unlock', type: 'checkbox', checked: p.unlockAll, onchange: (e) => ctx.update((cur, now) => setFlag(cur, 'unlockAll', e.target.checked, now)) }),
        h('span', null, 'Unlock every level without passing the exams'),
      ),
      h('p', { class: 'hint' }, 'For instructors and experienced tasters who want to browse ahead. Ranks and the certificate still require passing each level exam.'),
    ),
    h(
      'section',
      { class: 'panel' },
      h('h2', { class: 'h-small' }, 'Back up your progress'),
      h('label', { class: 'field wide', for: 'pf-export' }, h('span', { class: 'field-label' }, 'Backup text'), exportBox),
      h(
        'div',
        { class: 'row' },
        button('Copy backup', async () => {
          try {
            await navigator.clipboard.writeText(exportBox.value);
            copyMsg.textContent = 'Copied. Paste it somewhere safe.';
          } catch {
            exportBox.focus();
            exportBox.select();
            copyMsg.textContent = 'Copy was blocked here, so the text is selected: press Ctrl+C or Cmd+C.';
          }
        }, { kind: 'secondary' }),
        copyMsg,
      ),
      h('label', { class: 'field wide', for: 'pf-import' }, h('span', { class: 'field-label' }, 'Restore from a backup'), importBox),
      h('div', { class: 'row' }, button('Merge with current progress', () => doImport('merge'), { kind: 'secondary' }), confirmButton('Replace current progress', 'Replace everything with the backup', () => doImport('replace'))),
      importMsg,
    ),
    h(
      'section',
      { class: 'panel danger-zone' },
      h('h2', { class: 'h-small' }, 'Start over'),
      h('p', null, 'Erase every score, flashcard and journal entry and start the course from the ground floor.'),
      confirmButton('Reset all progress', 'Yes, erase everything', () => ctx.update((cur, now) => ({ ...emptyProgress(), ageConfirmed: cur.ageConfirmed, updatedAt: now }))),
    ),
    p.updatedAt ? h('p', { class: 'hint' }, `Last saved ${formatDate(p.updatedAt)}.`) : null,
  );
}
