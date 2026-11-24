// Build two distributables from the ES-module source:
//   dist/whiskey-course.html   one self-contained file (open it straight from disk)
//   dist/artifact/index.html   page body for publishing as a claude.ai Artifact,
//   dist/artifact/app.js       with its script beside it
// The build refuses to run if the content fails validation.

import { build } from 'esbuild';
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { validateCourse, courseCounts } from '../js/engine/validate.js';

// --fixture builds the small test course into dist-fixture/ (for testing the app
// independently of the real content).
const fixture = process.argv.includes('--fixture');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, fixture ? 'dist-fixture' : 'dist');
const coursePath = path.join(root, fixture ? 'tests/fixtures/sample-course.js' : 'js/content/course.js');
const { default: course } = await import(coursePath);

const { errors } = validateCourse(course);
if (errors.length) {
  for (const e of errors) console.error('ERROR:', e);
  console.error(`Content has ${errors.length} errors; fix them before building.`);
  process.exit(1);
}

const result = await build({
  entryPoints: [path.join(root, 'js/main.js')],
  bundle: true,
  format: 'iife',
  minify: true,
  target: ['es2020'],
  write: false,
  legalComments: 'none',
  plugins: fixture
    ? [
        {
          name: 'fixture-course',
          setup(b) {
            b.onResolve({ filter: /content\/course\.js$/ }, () => ({ path: coursePath }));
          },
        },
      ]
    : [],
});
const js = result.outputFiles[0].text;
const css = await readFile(path.join(root, 'css/app.css'), 'utf8');

const FONTS =
  'https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;800;900&family=Big+Shoulders+Stencil+Display:wght@800;900&family=IBM+Plex+Mono:wght@400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,400&display=swap';
const title = course.title;
const description = course.tagline;
const fontLinks = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="${FONTS}">`;
const noscript = '<noscript><p style="padding:2rem">This course needs JavaScript to run.</p></noscript>';
// Keep "</script" out of inline script bodies.
const safeJs = js.replace(/<\/script/gi, '<\\/script');

await rm(dist, { recursive: true, force: true });
await mkdir(path.join(dist, 'artifact'), { recursive: true });

const standalone = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="${escapeAttr(description)}">
<title>${escapeHtml(title)}</title>
${fontLinks}
<style>${css}</style>
</head>
<body>
<div id="app">${noscript}</div>
<script>${safeJs}</script>
</body>
</html>
`;
await writeFile(path.join(dist, 'whiskey-course.html'), standalone);

// Artifact pages are wrapped in their own document skeleton at publish time,
// so this file holds only the page content.
const artifact = `<title>${escapeHtml(title)}</title>
<meta name="claude:viewport-fit-sides" content="cover">
${fontLinks}
<style>${css}</style>
<div id="app">${noscript}</div>
<script src="app.js"></script>
`;
await writeFile(path.join(dist, 'artifact', 'index.html'), artifact);
await writeFile(path.join(dist, 'artifact', 'app.js'), js);

const c = courseCounts(course);
const kb = (s) => `${Math.round(Buffer.byteLength(s) / 1024)} KB`;
console.log(`Built ${title}: ${c.levels} levels, ${c.lessons} lessons, ${c.quizQuestions + c.examQuestions} questions`);
console.log(`  ${path.relative(root, dist)}/whiskey-course.html  ${kb(standalone)}`);
console.log(`  ${path.relative(root, dist)}/artifact/index.html  ${kb(artifact)} + app.js ${kb(js)}`);

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function escapeAttr(s) {
  return escapeHtml(s).replace(/"/g, '&quot;');
}
