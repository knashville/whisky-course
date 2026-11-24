# Whiskey course

A self-paced, multi-level whiskey education course that runs entirely in the
browser: no server, no accounts, no build step needed to use it.

Learners climb a six-floor "rickhouse". Each floor is a level that is harder
than the one below. A level has several reading lessons, a quiz after each
lesson, and a level exam drawn at random from a larger pool. Passing the exam
earns a rank and unlocks the next floor. Passing every floor earns a
certificate.

Beyond the lessons the app has:

- **Glossary** of every key term, searchable and filterable by level.
- **Flashcards** built from the key terms, scheduled with a Leitner spaced-repetition system.
- **Tools**: proof/ABV converter, dilution and blending calculators (with a Pearson
  square), an angel's-share projection, cask-yield maths, and an "Is it bourbon?"
  checker that walks through the US standards of identity rule by rule.
- **Tasting journal** for structured notes.
- **Profile** with certificate name, preview mode (unlock every level),
  progress backup and restore, and reset.

## Running it

Any static file server works, because the source uses ES modules:

```sh
cd whiskey-course
npm run serve          # python3 -m http.server 8080, then open http://localhost:8080
```

Or build a single self-contained HTML file that opens straight from disk:

```sh
npm install            # installs esbuild (the only dependency, used for the build)
npm run build          # writes dist/whiskey-course.html and dist/artifact/
```

## Checking it

```sh
npm test               # engine unit tests (quiz grading, progress, flashcards, calculators, classifier, validator)
npm run validate       # validates every lesson, quiz and exam against the content schema
npm run e2e            # plays the whole course in Chromium, answering every question through the UI
                       # (needs Playwright: npm i -D playwright && npx playwright install chromium)
```

## How it is organized

```
index.html             app shell for local serving
css/app.css            all styles; theme tokens at the top (light and dark)
js/main.js             entry point
js/app.js              routing (#home, #level-3, #lesson-<id>, #quiz-<id>, #exam-3, #glossary, ...) and shell
js/views/              one module per screen
js/ui/                 DOM helpers, question widgets, teaching diagrams
js/engine/             pure logic, no DOM: quiz grading, progress, spaced repetition,
                       Markdown parsing, calculators, US category classifier, content validator,
                       storage (localStorage, plus private account sync when run as a claude.ai artifact)
js/content/            the course itself: course.js plus one folder per level
CONTENT_GUIDE.md       the authoring contract for lessons, quizzes and exams
tests/                 unit tests, fixtures, and the end-to-end playthrough
scripts/               validate, validate-level and build
```

## Editing content

Lessons are plain data files. Read `CONTENT_GUIDE.md`, edit a file under
`js/content/levels/level-N/`, then run `node scripts/validate-level.js N` and
`npm run e2e`. The build refuses to run if validation fails.

## Progress and privacy

Progress is stored in the learner's browser (`localStorage`). When the page is
published as a claude.ai artifact and the viewer is signed in, progress also
syncs to a private per-learner record, so it follows them between devices. The
two copies merge without ever losing a pass or a best score. Learners can back
up and restore their progress as text from the Profile screen.

## Disclaimer

For adults of legal drinking age. Tasting exercises are optional. Regulatory
summaries are educational and are not legal or label-approval advice.
