import { h, clear, fmt, button } from '../ui/dom.js';
import * as calc from '../engine/calc.js';
import { classifyUS, PRESETS, DEFAULT_SPEC, CONTAINERS, mashTotal } from '../engine/usClassifier.js';
import { drinksTool, triangleTool, pourTool } from './tools-extra.js';
import { numField, output, errorBox, live, toolShell } from '../ui/fields.js';

const TOOLS = [
  { id: 'strength', label: 'Proof and ABV', render: strengthTool },
  { id: 'drinks', label: 'Standard drinks', render: drinksTool },
  { id: 'dilution', label: 'Adding water', render: dilutionTool },
  { id: 'blend', label: 'Blending', render: blendTool },
  { id: 'angels', label: "Angel's share", render: angelsTool },
  { id: 'cask', label: 'Cask yield', render: caskTool },
  { id: 'classify', label: 'Is it bourbon?', render: classifyTool },
  { id: 'triangle', label: 'Triangle test', render: triangleTool },
  { id: 'pour', label: 'Pour cost', render: pourTool },
];

export function renderTools(ctx) {
  const active = ctx.session.tool || 'strength';
  const panel = h('section', { class: 'tool-panel', id: 'tool-panel', role: 'tabpanel' });
  const tabs = h(
    'div',
    { class: 'tabs', role: 'tablist', 'aria-label': 'Tools' },
    TOOLS.map((t) =>
      h(
        'button',
        {
          type: 'button',
          role: 'tab',
          id: `tab-${t.id}`,
          'aria-selected': t.id === active ? 'true' : 'false',
          'aria-controls': 'tool-panel',
          class: ['tab', t.id === active && 'is-active'],
          onclick: () => {
            ctx.session.tool = t.id;
            ctx.rerender();
          },
        },
        t.label,
      ),
    ),
  );
  const tool = TOOLS.find((t) => t.id === active) || TOOLS[0];
  panel.setAttribute('aria-labelledby', `tab-${tool.id}`);
  panel.append(tool.render(ctx));
  return h(
    'div',
    { class: 'page tools' },
    h('header', { class: 'page-head' }, h('p', { class: 'eyebrow' }, 'Cellar maths'), h('h1', null, 'Tools'), h('p', { class: 'lede' }, 'Calculators for the numbers whiskey people use every day. The later levels ask you to do these by hand; check your working here.')),
    tabs,
    panel,
  );
}


function strengthTool(ctx) {
  const st = ctx.session.strength || (ctx.session.strength = { abv: 50 });
  const { out, update } = live(() =>
    output([
      ['US proof', `${fmt(calc.usProofFromAbv(st.abv), 2)}°`, true],
      ['ABV', `${fmt(st.abv, 2)}%`],
      ['Old British (Sikes) proof', `${fmt(calc.ukProofFromAbv(st.abv), 1)}° (approx.)`],
      ['Alcohol in a 750 ml bottle', `${fmt((750 * st.abv) / 100, 0)} ml`],
    ]),
  );
  const abv = numField('st-abv', 'Alcohol by volume', st.abv, (v) => {
    st.abv = v;
    proof.querySelector('input').value = Number.isFinite(v) ? String(+(v * 2).toFixed(2)) : '';
    if (!(v > 0 && v <= 100)) return (clear(out), out.append(errorBox(new RangeError('ABV must be between 0 and 100%'))));
    update();
  }, { unit: '%', min: 0, max: 100 });
  const proof = numField('st-proof', 'US proof', st.abv * 2, (v) => {
    st.abv = v / 2;
    abv.querySelector('input').value = Number.isFinite(v) ? String(+(v / 2).toFixed(2)) : '';
    if (!(v > 0 && v <= 200)) return (clear(out), out.append(errorBox(new RangeError('US proof runs from 0 to 200'))));
    update();
  }, { unit: '°', min: 0, max: 200 });
  update();
  return toolShell('Proof and ABV', 'US proof is exactly twice the alcohol by volume. Britain used a different proof scale until 1980, which is why old Scotch labels can look confusing.', [abv, proof], out);
}

function dilutionTool(ctx) {
  const st = ctx.session.dilution || (ctx.session.dilution = { volume: 30, from: 60, to: 46 });
  const { out, update } = live(() => {
    const water = calc.waterToAdd(st.volume, st.from, st.to);
    return output([
      ['Water to add', `${fmt(water, 1)} ml`, true],
      ['Final volume', `${fmt(st.volume + water, 1)} ml`],
      ['Proof change', `${fmt(st.from * 2, 1)}° → ${fmt(st.to * 2, 1)}°`],
    ]);
  });
  const set = (k) => (v) => {
    st[k] = v;
    update();
  };
  update();
  return toolShell(
    'Adding water',
    'How much water brings a pour (or a whole vat) down to the strength you want. The same formula a distillery uses when proofing down for bottling.',
    [
      numField('dl-vol', 'Volume of whiskey', st.volume, set('volume'), { unit: 'ml' }),
      numField('dl-from', 'Current strength', st.from, set('from'), { unit: '% ABV' }),
      numField('dl-to', 'Target strength', st.to, set('to'), { unit: '% ABV' }),
    ],
    out,
    'Formula: water = volume × (current ÷ target − 1). Real mixtures shrink slightly (volume contraction), so distilleries proof by weight and confirm with a hydrometer.',
  );
}

function blendTool(ctx) {
  const st =
    ctx.session.blend ||
    (ctx.session.blend = {
      parts: [
        { name: 'Bourbon A', volume: 600, abv: 62 },
        { name: 'Bourbon B', volume: 400, abv: 55 },
        { name: 'Water', volume: 0, abv: 0 },
      ],
      target: 45,
      total: 700,
    });
  const { out, update } = live(() => {
    const b = calc.blendStrength(st.parts);
    const rows = [
      ['Blend strength', `${fmt(b.abv, 2)}% ABV (${fmt(b.abv * 2, 1)} proof)`, true],
      ['Blend volume', `${fmt(b.volume, 0)} ml`],
      ['Pure alcohol', `${fmt(b.alcohol, 0)} ml`],
    ];
    return output(rows);
  });
  const { out: pOut, update: pUpdate } = live(() => {
    const [a, b] = st.parts;
    const r = calc.pearsonSquare(a.abv, b.abv, st.target, st.total);
    return output([
      [`${a.name || 'Component A'}`, `${fmt(r.volumeA, 0)} ml (${fmt(r.partsA, 1)} parts)`],
      [`${b.name || 'Component B'}`, `${fmt(r.volumeB, 0)} ml (${fmt(r.partsB, 1)} parts)`],
    ]);
  });
  const rows = st.parts.map((p, i) =>
    h(
      'div',
      { class: 'blend-row' },
      h('label', { class: 'field', for: `bl-name-${i}` }, h('span', { class: 'field-label' }, `Component ${i + 1}`), h('input', { id: `bl-name-${i}`, type: 'text', value: p.name, oninput: (e) => ((p.name = e.target.value), pUpdate()) })),
      numField(`bl-vol-${i}`, 'Volume', p.volume, (v) => ((p.volume = v), update()), { unit: 'ml' }),
      numField(`bl-abv-${i}`, 'Strength', p.abv, (v) => ((p.abv = v), update(), pUpdate()), { unit: '% ABV' }),
    ),
  );
  update();
  pUpdate();
  return h(
    'div',
    { class: 'tool' },
    h('h2', null, 'Blending'),
    h('p', { class: 'tool-intro' }, 'Mix components and see the strength of the result, then use the Pearson square to hit an exact target with the first two components.'),
    h('div', { class: 'tool-grid' }, h('div', { class: 'tool-fields' }, rows), out),
    h('h3', { class: 'h-small' }, 'Pearson square: hit a target strength'),
    h('div', { class: 'tool-grid' }, h('div', { class: 'tool-fields' }, numField('bl-target', 'Target strength', st.target, (v) => ((st.target = v), pUpdate()), { unit: '% ABV' }), numField('bl-total', 'Total volume wanted', st.total, (v) => ((st.total = v), pUpdate()), { unit: 'ml' })), pOut),
    h('p', { class: 'hint' }, 'Parts of A = target − B; parts of B = A − target. Use water (0%) as component B to work out a reduction.'),
  );
}

function angelsTool(ctx) {
  const st = ctx.session.angels || (ctx.session.angels = { volume: 200, loss: 4, years: 12 });
  const { out, update } = live(() => {
    const r = calc.angelsShare(st.volume, st.loss, Math.round(st.years));
    return h(
      'div',
      null,
      output([
        ['Left in the cask', `${fmt(r.remaining, 1)} L`, true],
        ['Lost to evaporation', `${fmt(r.lost, 1)} L (${fmt(r.lostPct, 1)}%)`],
      ]),
      chart(r.series, st.volume),
    );
  });
  const set = (k) => (v) => {
    st[k] = v;
    update();
  };
  update();
  return toolShell(
    "Angel's share",
    'Casks breathe. Each year some liquid evaporates through the wood: roughly 2% a year in cool, damp Scotland and often 3–5% or more in hot, dry warehouses.',
    [
      numField('as-vol', 'Starting volume', st.volume, set('volume'), { unit: 'L', hint: 'A US barrel holds about 200 L; a hogshead about 250 L.' }),
      numField('as-loss', 'Yearly loss', st.loss, set('loss'), { unit: '%' }),
      numField('as-years', 'Years in the cask', st.years, set('years'), { unit: 'years', step: '1', min: 0, max: 60 }),
    ],
    out,
    'Compounding: remaining = start × (1 − loss)^years. Real losses vary with climate, warehouse position, cask size and age.',
  );
}

function chart(series, start) {
  // Bar chart, one bar per year, drawn to a single linear scale from 0 to the start volume.
  const W = 560;
  const H = 180;
  const pad = { l: 44, r: 10, t: 10, b: 26 };
  const n = series.length;
  const bw = (W - pad.l - pad.r) / n;
  const y = (v) => pad.t + (H - pad.t - pad.b) * (1 - v / start);
  const ticks = [0, 0.25, 0.5, 0.75, 1].map((f) => start * f);
  const svg = [
    `<svg viewBox="0 0 ${W} ${H}" class="mini-chart" role="img" aria-label="Volume left in the cask by year">`,
    ...ticks.map((t) => `<line x1="${pad.l}" x2="${W - pad.r}" y1="${y(t)}" y2="${y(t)}" class="ch-grid"/><text x="${pad.l - 6}" y="${y(t) + 4}" text-anchor="end" class="ch-label">${Math.round(t)}</text>`),
    ...series.map((s, i) => `<rect x="${pad.l + i * bw + 1}" y="${y(s.volume)}" width="${Math.max(1, bw - 2)}" height="${y(0) - y(s.volume)}" class="${i === n - 1 ? 'ch-bar-end' : 'ch-bar'}"/>`),
    `<text x="${pad.l}" y="${H - 6}" class="ch-label">Year 0</text>`,
    `<text x="${W - pad.r}" y="${H - 6}" text-anchor="end" class="ch-label">Year ${n - 1}</text>`,
    '</svg>',
  ].join('');
  const wrap = h('div', { class: 'chart-wrap' });
  wrap.innerHTML = svg; // numbers only, generated above
  return wrap;
}

function caskTool(ctx) {
  const st = ctx.session.cask || (ctx.session.cask = { volume: 180, caskAbv: 62, bottleAbv: 46, bottleMl: 700, loss: 1 });
  const { out, update } = live(() => {
    const r = calc.bottlesFromCask(st.volume, st.caskAbv, st.bottleAbv, st.bottleMl, st.loss);
    const lpa = calc.litersOfPureAlcohol(st.volume, st.caskAbv);
    const gal = calc.litersToUsGallons(st.volume);
    return output([
      ['Bottles', fmt(r.bottles, 0), true],
      ['Liquid at bottling strength', `${fmt(r.liters, 1)} L`],
      ['Water added', `${fmt(r.water, 1)} L`],
      ['Liters of pure alcohol (LPA)', fmt(lpa, 1)],
      ['US proof gallons', fmt(calc.proofGallons(gal, st.caskAbv * 2), 1)],
    ]);
  });
  const set = (k) => (v) => {
    st[k] = v;
    update();
  };
  update();
  return toolShell(
    'Cask yield',
    'How many bottles a cask gives once it is reduced to bottling strength, plus the units the trade uses to measure spirit: liters of pure alcohol (Scotland) and proof gallons (US tax).',
    [
      numField('ck-vol', 'Liquid in the cask', st.volume, set('volume'), { unit: 'L' }),
      numField('ck-abv', 'Cask strength', st.caskAbv, set('caskAbv'), { unit: '% ABV' }),
      numField('ck-babv', 'Bottling strength', st.bottleAbv, set('bottleAbv'), { unit: '% ABV' }),
      numField('ck-ml', 'Bottle size', st.bottleMl, set('bottleMl'), { unit: 'ml', hint: '750 ml in the US; 700 ml is standard in the UK and EU.' }),
      numField('ck-loss', 'Processing loss', st.loss, set('loss'), { unit: '%', hint: 'Filtration and handling losses.' }),
    ],
    out,
    'A proof gallon is one US gallon at 100 proof; US federal excise tax is charged per proof gallon.',
  );
}

function classifyTool(ctx) {
  const st = ctx.session.classify || (ctx.session.classify = structuredCloneSafe(DEFAULT_SPEC));
  const results = h('div', { class: 'class-results', 'aria-live': 'polite' });
  const totalNote = h('p', { class: 'hint' });

  const draw = () => {
    clear(results);
    const total = mashTotal(st.mash);
    totalNote.textContent = `Mash bill total: ${fmt(total, 1)}%${Math.abs(total - 100) > 0.01 ? ' — it must add up to 100%' : ''}`;
    totalNote.classList.toggle('is-bad', Math.abs(total - 100) > 0.01);
    const r = classifyUS(st);
    const pass = r.results.filter((x) => x.ok);
    results.append(
      h(
        'div',
        { class: 'class-summary' },
        h('p', { class: 'eyebrow' }, 'This whiskey could be labeled'),
        pass.length ? h('ul', { class: 'pill-list' }, pass.map((x) => h('li', { class: 'pill ok' }, x.label))) : h('p', null, 'None of the modeled US categories. Open a category below to see which rule fails.'),
        r.ageStatementRequired ? h('p', { class: 'warn-note' }, 'Aged less than 4 years: the label needs an age statement.') : null,
        h('p', { class: 'hint' }, `Proof off the still ${fmt(r.proof.distillation, 1)} · into the barrel ${r.proof.entry == null ? '—' : fmt(r.proof.entry, 1)} · in the bottle ${fmt(r.proof.bottling, 1)}`),
      ),
      h(
        'div',
        { class: 'class-list' },
        r.results.map((cat) =>
          h(
            'details',
            { class: ['class-cat', cat.ok ? 'is-ok' : 'is-no'] },
            h('summary', null, h('span', { class: 'class-mark', 'aria-hidden': 'true' }, cat.ok ? '✓' : '✕'), h('span', null, cat.label), h('span', { class: 'sr-only' }, cat.ok ? ' qualifies' : ' does not qualify')),
            h('ul', null, cat.reasons.map((x) => h('li', { class: x.ok ? 'ok' : 'no' }, h('span', { 'aria-hidden': 'true' }, x.ok ? '✓ ' : '✕ '), x.text))),
          ),
        ),
      ),
    );
  };

  const set = (k) => (v) => {
    st[k] = v;
    draw();
  };
  const grain = (k, label) => numField(`cl-${k}`, label, st.mash[k], (v) => ((st.mash[k] = Number.isFinite(v) ? v : 0), draw()), { unit: '%', min: 0, max: 100 });
  const check = (k, label) =>
    h('label', { class: 'check', for: `cl-${k}` }, h('input', { id: `cl-${k}`, type: 'checkbox', checked: !!st[k], onchange: (e) => ((st[k] = e.target.checked), draw()) }), h('span', null, label));

  const presetSel = h(
    'select',
    {
      id: 'cl-preset',
      onchange: (e) => {
        const p = PRESETS[Number(e.target.value)];
        if (p) {
          ctx.session.classify = structuredCloneSafe(p.spec);
          ctx.rerender();
        }
      },
    },
    h('option', { value: '' }, 'Load an example…'),
    PRESETS.map((p, i) => h('option', { value: String(i) }, p.name)),
  );

  const fields = h(
    'div',
    { class: 'tool-fields' },
    h('label', { class: 'field', for: 'cl-preset' }, h('span', { class: 'field-label' }, 'Examples'), presetSel),
    h('fieldset', { class: 'group' }, h('legend', null, 'Mash bill'), h('div', { class: 'grid-3' }, grain('corn', 'Corn'), grain('rye', 'Rye'), grain('wheat', 'Wheat'), grain('maltedBarley', 'Malted barley'), grain('maltedRye', 'Malted rye'), grain('barley', 'Unmalted barley'), grain('other', 'Other grain')), totalNote),
    h(
      'fieldset',
      { class: 'group' },
      h('legend', null, 'Distillation and aging'),
      h(
        'div',
        { class: 'grid-3' },
        numField('cl-dist', 'Distilled to', st.distillationAbv, set('distillationAbv'), { unit: '% ABV' }),
        numField('cl-entry', 'Barrel entry', st.entryAbv ?? '', (v) => ((st.entryAbv = Number.isFinite(v) ? v : null), draw()), { unit: '% ABV' }),
        numField('cl-bottle', 'Bottled at', st.bottlingAbv, set('bottlingAbv'), { unit: '% ABV' }),
        h(
          'label',
          { class: 'field', for: 'cl-container' },
          h('span', { class: 'field-label' }, 'Container'),
          h('select', { id: 'cl-container', onchange: (e) => ((st.container = e.target.value), draw()) }, Object.entries(CONTAINERS).map(([k, v]) => h('option', { value: k, selected: st.container === k }, v))),
        ),
        numField('cl-size', 'Container size', st.containerLiters, set('containerLiters'), { unit: 'L' }),
        numField('cl-age', 'Time in wood', st.ageYears, set('ageYears'), { unit: 'years', min: 0 }),
      ),
    ),
    h(
      'fieldset',
      { class: 'group' },
      h('legend', null, 'Where and how'),
      h(
        'div',
        { class: 'grid-2' },
        check('madeInUS', 'Made in the United States'),
        h('label', { class: 'field', for: 'cl-state' }, h('span', { class: 'field-label' }, 'State'), h('select', { id: 'cl-state', onchange: (e) => ((st.state = e.target.value), draw()) }, [['KY', 'Kentucky'], ['TN', 'Tennessee'], ['other', 'Another state']].map(([k, v]) => h('option', { value: k, selected: st.state === k || (k === 'other' && !['KY', 'TN'].includes(st.state)) }, v)))),
        check('charcoalFiltered', 'Filtered through maple charcoal before aging'),
        check('additives', 'Coloring, flavoring or blending materials added'),
        check('oneDistillery', 'Distilled at one distillery'),
        check('oneSeason', 'One distiller, one distillation season'),
        check('bonded', 'Aged in a bonded warehouse'),
      ),
    ),
  );

  draw();
  return h(
    'div',
    { class: 'tool' },
    h('h2', null, 'Is it bourbon? US category checker'),
    h('p', { class: 'tool-intro' }, 'Set the production details and see which US labels the whiskey qualifies for, rule by rule. Based on the federal standards of identity (27 CFR 5.143), bottled-in-bond (27 CFR 5.88), age statements (27 CFR 5.74) and Tennessee state law. Blends are not modeled.'),
    h('div', { class: 'tool-grid wide' }, fields, results),
    h('p', { class: 'hint' }, 'A learning aid, not label approval. Real labels go through TTB’s COLA review, and rules change; check the current regulations before relying on them.'),
  );
}

function structuredCloneSafe(o) {
  return JSON.parse(JSON.stringify(o));
}
