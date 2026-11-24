// Flashcards with a Leitner box schedule (spaced repetition).
// A card climbs one box per correct recall and drops to box 1 on a miss.
// Each box has a review interval in days; box 5 is "mastered".

export const BOX_INTERVALS = { 1: 0, 2: 1, 3: 3, 4: 7, 5: 21 };
export const MAX_BOX = 5;

/** Local calendar day number, so "due today" follows the learner's clock. */
export function dayNumber(ms = Date.now(), tzOffsetMinutes = new Date(ms).getTimezoneOffset()) {
  return Math.floor((ms - tzOffsetMinutes * 60000) / 86400000);
}

/** Build the deck from every keyTerms block in the given levels. */
export function buildDeck(levels) {
  const cards = [];
  const seen = new Set();
  for (const level of levels) {
    for (const lesson of level.lessons) {
      for (const block of lesson.blocks || []) {
        if (block.type !== 'keyTerms') continue;
        for (const t of block.terms) {
          const id = cardId(t.term);
          if (seen.has(id)) continue;
          seen.add(id);
          cards.push({ id, term: t.term, definition: t.definition, level: level.number, lessonId: lesson.id });
        }
      }
    }
  }
  return cards;
}

export function cardId(term) {
  return 'c-' + String(term).toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

/** Cards to study now: overdue reviews first (lowest box first), then up to `newLimit` unseen cards. */
export function studyQueue(cards, cardStates, today, { newLimit = 10, reviewLimit = 50 } = {}) {
  const due = [];
  const fresh = [];
  for (const c of cards) {
    const s = cardStates[c.id];
    if (!s) fresh.push(c);
    else if (s.due <= today) due.push({ c, s });
  }
  due.sort((a, b) => a.s.due - b.s.due || a.s.box - b.s.box);
  return [...due.slice(0, reviewLimit).map((x) => x.c), ...fresh.slice(0, newLimit)];
}

/** New state for a card after one review. */
export function reviewCard(state, correct, today) {
  // Unseen cards start in box 1, so a first correct answer moves them to box 2 (due tomorrow).
  const prev = state || { box: 1, due: today, last: 0, reviews: 0, lapses: 0 };
  const box = correct ? Math.min(MAX_BOX, prev.box + 1) : 1;
  return {
    box,
    due: today + BOX_INTERVALS[box],
    last: today,
    reviews: prev.reviews + 1,
    // A lapse is forgetting a card you had already learned (box 2 or higher).
    lapses: prev.lapses + (!correct && prev.box >= 2 ? 1 : 0),
  };
}

export function deckStats(cards, cardStates, today) {
  let fresh = 0;
  let due = 0;
  let learning = 0;
  let mastered = 0;
  for (const c of cards) {
    const s = cardStates[c.id];
    if (!s) {
      fresh++;
      continue;
    }
    if (s.due <= today) due++;
    if (s.box >= MAX_BOX) mastered++;
    else learning++;
  }
  return { total: cards.length, fresh, due, learning, mastered };
}
