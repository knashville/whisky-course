import { h, md1, clear, button } from '../ui/dom.js';
import { isLevelUnlocked, setCardState } from '../engine/progress.js';
import { buildDeck, studyQueue, reviewCard, deckStats, dayNumber, BOX_INTERVALS } from '../engine/srs.js';

export function renderFlashcards(ctx) {
  const { course } = ctx;
  const today = dayNumber();
  const open = course.levels.filter((lv) => isLevelUnlocked(course, ctx.progress, lv.number));
  const fc = ctx.session.cards || (ctx.session.cards = { scope: 'open', queue: null, idx: 0, flipped: false, right: 0, wrong: 0 });
  const scopeLevels = fc.scope === 'open' ? open : open.filter((lv) => String(lv.number) === fc.scope);
  const deck = buildDeck(scopeLevels.length ? scopeLevels : open);
  const stats = deckStats(deck, ctx.progress.cards, today);
  const root = h('div', { class: 'page flashcards' });

  const head = h(
    'header',
    { class: 'page-head' },
    h('p', { class: 'eyebrow' }, 'Spaced repetition'),
    h('h1', null, 'Flashcards'),
    h('p', { class: 'lede' }, 'Key terms from the levels you have unlocked. Cards you know come back less often (1, 3, 7, then 21 days); cards you miss return today.'),
  );

  const scopeSel = h(
    'select',
    {
      id: 'deck-scope',
      onchange: (e) => {
        fc.scope = e.target.value;
        fc.queue = null;
        ctx.rerender();
      },
    },
    h('option', { value: 'open', selected: fc.scope === 'open' }, 'All unlocked levels'),
    open.map((lv) => h('option', { value: String(lv.number), selected: fc.scope === String(lv.number) }, `Level ${lv.number}: ${lv.title}`)),
  );

  const boxes = h(
    'dl',
    { class: 'stat-row compact' },
    statItem('New', stats.fresh),
    statItem('Due today', stats.due),
    statItem('Learning', stats.learning),
    statItem('Mastered', stats.mastered),
  );

  const stage = h('section', { class: 'card-stage', 'aria-live': 'polite' });

  const startSession = () => {
    fc.queue = studyQueue(deck, ctx.progress.cards, today, { newLimit: 12 }).map((c) => c.id);
    fc.idx = 0;
    fc.flipped = false;
    fc.right = 0;
    fc.wrong = 0;
    drawStage();
  };

  const grade = (card, correct) => {
    const next = reviewCard(ctx.progress.cards[card.id], correct, today);
    if (correct) fc.right += 1;
    else {
      fc.wrong += 1;
      // A missed card goes to the back of today's queue.
      fc.queue.push(card.id);
    }
    fc.idx += 1;
    fc.flipped = false;
    ctx.update((p, now) => setCardState(p, card.id, next, now));
  };

  function drawStage() {
    clear(stage);
    const byId = new Map(deck.map((c) => [c.id, c]));
    if (!fc.queue) {
      stage.append(
        h('div', { class: 'card-empty' },
          h('p', null, stats.due + Math.min(stats.fresh, 12) ? `Ready: ${stats.due} due and ${Math.min(stats.fresh, 12)} new card${Math.min(stats.fresh, 12) === 1 ? '' : 's'}.` : 'Nothing due today. Come back tomorrow, or read a new lesson to add cards.'),
          stats.due + stats.fresh ? button('Start studying', startSession, { class: 'btn btn-primary btn-lg' }) : null,
        ),
      );
      return;
    }
    const id = fc.queue[fc.idx];
    const card = byId.get(id);
    if (!card) {
      stage.append(
        h('div', { class: 'card-empty' },
          h('p', { class: 'result-verdict' }, `Session done: ${fc.right} recalled, ${fc.wrong} missed.`),
          h('div', { class: 'row' }, button('Study again', startSession, { kind: 'secondary' }), h('a', { class: 'btn btn-ghost', href: '#home' }, 'Back to the course')),
        ),
      );
      return;
    }
    const state = ctx.progress.cards[card.id];
    const flip = () => {
      fc.flipped = true;
      drawStage();
    };
    const face = h(
      'button',
      { type: 'button', class: ['flashcard', fc.flipped && 'is-flipped'], onclick: fc.flipped ? null : flip, 'aria-label': fc.flipped ? `${card.term}: definition shown` : `${card.term}. Show the definition` },
      h('span', { class: 'fc-meta' }, `Level ${card.level} · ${state ? `box ${state.box}` : 'new'} · ${fc.idx + 1} of ${fc.queue.length}`),
      h('span', { class: 'fc-term' }, card.term),
      fc.flipped ? h('span', { class: 'fc-def' }, md1(card.definition)) : h('span', { class: 'fc-hint' }, 'Say the definition to yourself, then tap to check'),
    );
    const actions = fc.flipped
      ? h(
          'div',
          { class: 'row center' },
          button('Missed it', () => grade(card, false), { kind: 'secondary', 'data-key': '1' }),
          button('Knew it', () => grade(card, true), { kind: 'primary', 'data-key': '2' }),
        )
      : h('div', { class: 'row center' }, button('Show definition', flip, { kind: 'primary' }));
    stage.append(face, actions, h('p', { class: 'hint center' }, 'Keys: Space flips the card, 1 = missed, 2 = knew it.'));
    queueMicrotask(() => actions.querySelector('.btn')?.focus({ preventScroll: true }));
  }

  const onKey = (e) => {
    if (!root.isConnected) return document.removeEventListener('keydown', onKey);
    if (!fc.queue || e.target.matches('input, select, textarea')) return;
    if (e.key === ' ' && !fc.flipped) {
      e.preventDefault();
      fc.flipped = true;
      drawStage();
    } else if (fc.flipped && (e.key === '1' || e.key === '2')) {
      stage.querySelector(`[data-key="${e.key}"]`)?.click();
    }
  };
  document.addEventListener('keydown', onKey);

  drawStage();
  root.append(
    head,
    h('div', { class: 'toolbar' }, h('label', { class: 'field', for: 'deck-scope' }, h('span', { class: 'field-label' }, 'Deck'), scopeSel), boxes),
    stage,
    h('p', { class: 'hint' }, `Intervals by box: ${Object.entries(BOX_INTERVALS).map(([b, d]) => `box ${b}: ${d === 0 ? 'same day' : `${d} day${d === 1 ? '' : 's'}`}`).join(' · ')}.`),
  );
  return root;
}

function statItem(label, value) {
  return h('div', { class: 'stat' }, h('dt', null, label), h('dd', null, String(value)));
}
