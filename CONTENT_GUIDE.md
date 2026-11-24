# Content authoring guide

This is the contract every level of the course follows. The app renders whatever
the level files contain, and `npm run validate` (or `node scripts/validate-level.js N`)
rejects anything that breaks the schema below.

## Files

Each level lives in its own folder:

```
js/content/levels/level-N/
  index.js      level metadata; imports the lessons and the exam
  lesson-1.js   one lesson per file (export default { ... })
  lesson-2.js
  ...
  exam.js       the level exam (export default { ... })
```

`index.js` looks like this:

```js
import lesson1 from './lesson-1.js';
import lesson2 from './lesson-2.js';
import exam from './exam.js';

export default {
  number: 3,                       // matches the folder
  title: 'Short level title',
  rank: 'Rank earned on passing',
  proof: 100,                      // difficulty shown as proof: 80, 90, 100, 110, 120, 130+
  tagline: 'One sentence that sells the level.',
  description: 'Markdown. Two or three short paragraphs: what this level covers and why it is harder than the last.',
  objectives: ['Learner can ...', 'Learner can ...', 'Learner can ...'],  // 4-7 measurable outcomes
  lessonQuizPass: 70,              // % needed on each lesson quiz
  lessons: [lesson1, lesson2],
  exam,
};
```

Files are plain JavaScript data (ES modules). Use single quotes or backticks for
strings; backticks are easiest for multi-line Markdown. Do not import anything
except sibling lesson/exam files.

## Lessons

```js
export default {
  id: 'l3-scotch-regions',         // l<level>-<slug>; lowercase letters, digits, hyphens; unique in the course
  title: 'The Regions of Scotland',
  summary: 'One or two sentences shown in lists and at the top of the lesson.',
  minutes: 12,                     // honest reading time
  blocks: [ /* 8-14 content blocks, see below */ ],
  quiz: [ /* 5-8 questions, see below */ ],
};
```

### Content blocks

| type | fields | use |
|---|---|---|
| `text` | `md` | Main teaching prose. Keep paragraphs short. |
| `callout` | `variant`, `title?`, `md` | `law` (a legal rule, with its citation), `myth` (a misconception corrected), `tip`, `fact`, `warning`, `history`. |
| `keyTerms` | `terms: [{term, definition}]`, `title?` | 4-8 terms per lesson. Feeds the glossary and flashcards, so a definition must stand alone in one or two sentences. Do not repeat a term another lesson already defines. |
| `table` | `headers: []`, `rows: [[]]`, `caption?` | Comparisons and numbers. Every row has exactly as many cells as `headers`; the first cell of each row is its label. |
| `steps` | `items: [{title, md}]`, `title?` | A real sequence (a process, a timeline). |
| `compare` | `columns: [{heading, points: []}]`, `title?` | 2-3 things side by side. |
| `tasting` | `title`, `md?`, `flight: [{pour, lookFor}]` | Optional hands-on exercise. Describe pours by style (e.g. "A wheated bourbon around 90 proof"), never by required brand. |
| `diagram` | `name` | One of: `grain-to-glass`, `pot-still`, `column-still`, `barrel-anatomy`, `char-layers`, `rickhouse`. Only use one where it fits the text. |

Markdown supported in `md`, `definition`, table cells, prompts, options and
explanations: paragraphs, `### heading`, `- bullets`, `1. numbered`, `> quote`,
`**bold**`, `*italic*`, `` `code` ``, `[text](https://...)`, `m^3^` superscript.
No HTML. Escape a literal asterisk as `\*`.

A good lesson: opens with why the topic matters, teaches in short sections with
one idea each, puts every number a learner must remember into a table or a
callout, defines its key terms, corrects at least one common misconception, and
ends with a short recap paragraph.

### Questions

Every question has `id`, `type`, `prompt`, `explanation`, and optionally
`context` (Markdown shown above the prompt: a mock label, a scenario, a tasting
note, a spec sheet).

```js
{ id: 'l3-scotch-regions-q1', type: 'single', prompt: '...', options: ['a', 'b', 'c', 'd'], answer: 2, explanation: '...' }
{ id: '...', type: 'multi', prompt: 'Which ... ? Select all that apply.', options: ['a', 'b', 'c', 'd', 'e'], answer: [0, 3], explanation: '...' }
{ id: '...', type: 'truefalse', prompt: '...', answer: false, explanation: '...' }
{ id: '...', type: 'order', prompt: 'Put ... in order, first to last.', items: ['first', 'second', 'third', 'fourth'], explanation: '...' }
{ id: '...', type: 'match', prompt: 'Match each ... to its ...', pairs: [{ left: 'Islay', right: 'Heavily peated malts' }, ...], explanation: '...' }
{ id: '...', type: 'numeric', prompt: '...', answer: 62.5, tolerance: 0, unit: '% ABV', explanation: '...' }
```

Rules:

- `answer` indexes refer to the options **as written**; the app shuffles them.
  So never write "All of the above", "None of the above", "Both A and B" or
  options that refer to other options' positions.
- `order` items are written in the correct order (3-8 items). `match` pairs are
  written correctly (3-7 pairs); every right-hand value must be unique.
- `numeric`: give a `tolerance` whenever rounding is involved, and say in the
  prompt how to round ("to the nearest liter").
- 3-6 options for `single`/`multi`. Distractors must be plausible, mutually
  exclusive, similar in length and grammar to the answer, and wrong for a reason
  the explanation can name.
- The `explanation` teaches: say why the answer is right and, briefly, why the
  tempting wrong answer is wrong. Two to four sentences.
- Exactly one defensible answer. If an expert could argue for a second option,
  rewrite the question.
- Lesson quiz questions test that lesson only. Exam questions must be new items,
  not copies of quiz questions, and each carries `lesson: '<lesson id>'`.

## Exams

```js
export default {
  passPercent: 80,
  draw: 20,                 // questions per attempt
  timeLimitMinutes: 0,      // 0 = untimed
  questions: [ /* the pool: at least 1.6 × draw, with every lesson represented */ ],
};
```

Exam question ids: `x<level>-<number>` (e.g. `x3-17`).

## Voice

Write the way a knowledgeable, friendly educator talks: plain, direct,
specific. Active voice, short sentences. No filler ("it's worth noting"), no
asides set off by dashes, no "not X, but Y" framing, no emoji. Use real numbers
and real terms of art, and explain each term the first time it appears.

Spelling: "whiskey" for American and Irish whiskey and for the course in
general; "whisky" for Scotch, Canadian and Japanese whisky and when quoting
regulations that spell it that way (US federal regulations use "whisky").

## Accuracy

- State legal rules precisely and cite them (e.g. "27 CFR 5.143", "Scotch
  Whisky Regulations 2009", "Irish Whiskey Technical File"). If a rule changed
  recently, give the current rule and the year it changed.
- Distinguish law from custom and from marketing ("small batch" has no legal
  definition in the US).
- When a figure varies (angel's share, peat levels, barrel entry proofs used by
  a given distillery), give a range and say that it varies.
- Name brands only for widely known, stable facts, and never as the only way to
  do an exercise.
- Responsible drinking: tasting is always optional; recommend small pours,
  water, and spitting.

## Exercises and tools

The app has no drag-and-drop maps, simulators or hotspot labels. Turn an
exercise idea into what the app does support:

- a `tasting` block (a style-based flight with what to look for);
- a worked example in a `steps` or `table` block (show every step of the arithmetic);
- quiz questions (`order` for sequences and timelines, `match` for sorting,
  `numeric` for calculations, `context` blocks for mock labels and scenarios).

Point learners to the app's Tools page where it helps. The tools are:
**Proof and ABV**, **Adding water** (dilution), **Blending** (blend strength and
Pearson square), **Angel's share** (compounding cask loss), **Cask yield**
(bottles, LPA, proof gallons), **Is it bourbon?** (US category checker),
**Standard drinks** (US drinks and UK units), **Triangle test** (binomial
significance and critical values) and **Pour cost** (cost per pour, menu price,
markup vs margin). Refer to them by these names, e.g. "Check your answer with
the Adding water tool."

Mock labels in `context` blocks must be invented brands (no real brand names),
laid out as short Markdown lines, for example:

```
**OLD HARBOR RESERVE**
Kentucky Straight Bourbon Whisky
Aged 3 Years · 45% Alc./Vol. (90 Proof) · 750 mL
Distilled and bottled by Old Harbor Distilling Co., Bardstown, KY
```
