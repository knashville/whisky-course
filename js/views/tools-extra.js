// Standard drinks, Triangle test and Pour cost tools.

import { h, clear, fmt, button } from '../ui/dom.js';
import * as calc from '../engine/calc.js';
import { numField, output, live, toolShell } from '../ui/fields.js';

export function drinksTool(ctx) {
  const st =
    ctx.session.drinks ||
    (ctx.session.drinks = {
      rows: [
        { name: 'Tasting pour', ml: 20, abv: 46 },
        { name: 'Neat pour (1.5 fl oz)', ml: 44, abv: 40 },
        { name: 'Cask-strength dram', ml: 30, abv: 60 },
      ],
    });
  const { out, update } = live(() => {
    let usd = 0;
    let units = 0;
    let grams = 0;
    const lines = st.rows
      .filter((r) => r.ml > 0)
      .map((r) => {
        const d = calc.standardDrinks(r.ml, r.abv);
        usd += d.usDrinks;
        units += d.ukUnits;
        grams += d.grams;
        return [r.name || 'Pour', `${fmt(d.usDrinks, 2)} US · ${fmt(d.ukUnits, 1)} UK`];
      });
    return output([['Total', `${fmt(usd, 2)} US drinks`, true], ['UK units', fmt(units, 1)], ['Pure alcohol', `${fmt(grams, 1)} g`], ...lines]);
  });
  const rows = st.rows.map((r, i) => {
    const hint = h('span', { class: 'field-hint' }, `${fmt(r.ml / calc.ML_PER_US_FL_OZ, 2)} fl oz`);
    const vol = numField(`sd-ml-${i}`, 'Volume', r.ml, (v) => {
      r.ml = v;
      hint.textContent = Number.isFinite(v) ? `${fmt(v / calc.ML_PER_US_FL_OZ, 2)} fl oz` : '';
      update();
    }, { unit: 'ml' });
    vol.appendChild(hint);
    return h(
      'div',
      { class: 'blend-row' },
      h('label', { class: 'field', for: `sd-name-${i}` }, h('span', { class: 'field-label' }, `Pour ${i + 1}`), h('input', { id: `sd-name-${i}`, type: 'text', value: r.name, oninput: (e) => ((r.name = e.target.value), update()) })),
      vol,
      numField(`sd-abv-${i}`, 'Strength', r.abv, (v) => ((r.abv = v), update()), { unit: '% ABV' }),
    );
  });
  update();
  return toolShell(
    'Standard drinks',
    'How much alcohol is really in a pour. A US standard drink is 14 g of pure alcohol, which is 1.5 fl oz (44 ml) at 40% ABV. A UK unit is 10 ml of pure alcohol, which is 25 ml at 40%.',
    rows,
    out,
    'Grams of alcohol = ml × ABV × 0.789 (the density of ethanol). Cask-strength whiskey packs much more alcohol into a small glass, so plan a tasting by total drinks, not by the number of glasses.',
  );
}

export function triangleTool(ctx) {
  const st = ctx.session.triangle || (ctx.session.triangle = { test: 'triangle', n: 24, k: 13, sheet: null });
  const { out, update } = live(() => {
    const t = calc.DISCRIMINATION_TESTS[st.test];
    const r = calc.discriminationTest(Math.round(st.n), Math.round(st.k), { chance: t.chance });
    return h(
      'div',
      null,
      output([
        ['Verdict', r.significant ? 'A real difference' : 'Not shown', true],
        ['p-value (one-tailed)', fmt(r.pValue, 4)],
        ['Correct needed for p ≤ 0.05', r.critical == null ? 'Not reachable with this panel' : `${r.critical} of ${Math.round(st.n)}`],
        ['Expected by guessing', fmt(r.expectedByChance, 1)],
      ]),
      h('p', { class: 'hint' }, t.note),
    );
  });

  const sheetBox = h('div', { class: 'sheet' });
  let sheetBtn = null;
  const drawSheet = () => {
    clear(sheetBox);
    if (!st.sheet) return;
    sheetBox.append(
      h(
        'div',
        { class: 'table-scroll', tabindex: '0', role: 'region', 'aria-label': 'Serving sheet' },
        h(
          'table',
          null,
          h('thead', null, h('tr', null, ['Assessor', 'Order', 'Cup 1', 'Cup 2', 'Cup 3', 'Odd cup'].map((x) => h('th', { scope: 'col' }, x)))),
          h(
            'tbody',
            null,
            st.sheet.map((row) => h('tr', null, h('th', { scope: 'row' }, String(row.n)), h('td', null, row.order), row.codes.map((c) => h('td', null, c)), h('td', null, row.odd))),
          ),
        ),
      ),
    );
  };
  const makeSheet = () => {
    const n = Math.max(1, Math.min(60, Math.round(st.n) || 1));
    const used = new Set();
    const code = () => {
      let c;
      do c = String(100 + Math.floor(Math.random() * 900));
      while (used.has(c));
      used.add(c);
      return c;
    };
    st.sheet = Array.from({ length: n }, (_, i) => {
      const order = calc.TRIANGLE_ORDERS[i % calc.TRIANGLE_ORDERS.length];
      const letters = order.split('');
      const odd = letters.find((x) => letters.filter((y) => y === x).length === 1);
      const codes = [code(), code(), code()];
      return { n: i + 1, order, codes, odd: codes[letters.indexOf(odd)] };
    });
    drawSheet();
  };

  const testSel = h(
    'select',
    { id: 'tt-test', onchange: (e) => ((st.test = e.target.value), update()) },
    Object.entries(calc.DISCRIMINATION_TESTS).map(([k, v]) => h('option', { value: k, selected: st.test === k }, `${v.label} (chance ${v.chance === 0.5 ? '1 in 2' : '1 in 3'})`)),
  );
  update();
  drawSheet();
  return h(
    'div',
    { class: 'tool' },
    h('h2', null, 'Triangle test'),
    h(
      'p',
      { class: 'tool-intro' },
      'Can tasters really tell two whiskies apart? Enter how many assessors took a discrimination test and how many answered correctly. An exact binomial test says whether that beats guessing.',
    ),
    h(
      'div',
      { class: 'tool-grid' },
      h(
        'div',
        { class: 'tool-fields' },
        h('label', { class: 'field', for: 'tt-test' }, h('span', { class: 'field-label' }, 'Test'), testSel),
        numField('tt-n', 'Assessors', st.n, (v) => ((st.n = v), update()), { step: '1', min: 1 }),
        numField('tt-k', 'Correct answers', st.k, (v) => ((st.k = v), update()), { step: '1', min: 0 }),
      ),
      out,
    ),
    h('h3', { class: 'h-small' }, 'Serving sheet for a triangle test'),
    h(
      'p',
      { class: 'hint' },
      'Random three-digit codes hide which cup is which, and the six serving orders (AAB, ABA, BAA, ABB, BAB, BBA) rotate so position cannot give the answer away. Give the sheet to whoever pours, not to the tasters.',
    ),
    h('div', { class: 'row' }, (sheetBtn = button(st.sheet ? 'Make a new sheet' : 'Make a serving sheet', () => { makeSheet(); sheetBtn.textContent = 'Make a new sheet'; }, { kind: 'secondary' }))),
    sheetBox,
  );
}

export function pourTool(ctx) {
  const st = ctx.session.pour || (ctx.session.pour = { cost: 30, bottle: 750, pour: 44, menu: 10, target: 20, mCost: 24, mPrice: 34.29, mMargin: 30 });
  const money = (n) => (Number.isFinite(n) ? `$${n.toFixed(2)}` : '—');
  const { out, update } = live(() => {
    const r = calc.pourCost({ bottleCost: st.cost, bottleMl: st.bottle, pourMl: st.pour, menuPrice: st.menu, targetPct: st.target });
    return output([
      ['Cost per pour', money(r.costPerPour), true],
      ['Pours per bottle', fmt(r.pours, 1)],
      ['Pour cost at your menu price', r.pourCostPct == null ? '—' : `${fmt(r.pourCostPct, 1)}%`],
      [`Menu price for a ${fmt(st.target, 0)}% pour cost`, money(r.priceForTarget)],
    ]);
  });
  const { out: mOut, update: mUpdate } = live(() => {
    const r = calc.markupAndMargin(st.mCost, st.mPrice);
    return output([
      ['Markup', `${fmt(r.markupPct, 1)}%`, true],
      ['Margin', `${fmt(r.marginPct, 1)}%`],
      ['Profit', money(r.profit)],
      [`Price for a ${fmt(st.mMargin, 0)}% margin`, money(calc.priceFromMargin(st.mCost, st.mMargin))],
    ]);
  });
  const set = (k, u) => (v) => {
    st[k] = v;
    u();
  };
  update();
  mUpdate();
  return h(
    'div',
    { class: 'tool' },
    h('h2', null, 'Pour cost'),
    h('p', { class: 'tool-intro' }, 'What a pour costs the bar, what to charge for it, and the difference between markup and margin.'),
    h(
      'div',
      { class: 'tool-grid' },
      h(
        'div',
        { class: 'tool-fields' },
        numField('pc-cost', 'Bottle cost', st.cost, set('cost', update), { unit: '$' }),
        numField('pc-bottle', 'Bottle size', st.bottle, set('bottle', update), { unit: 'ml' }),
        numField('pc-pour', 'Pour size', st.pour, set('pour', update), { unit: 'ml', hint: '1.5 fl oz is about 44 ml; 2 fl oz is about 59 ml.' }),
        numField('pc-menu', 'Menu price', st.menu, set('menu', update), { unit: '$' }),
        numField('pc-target', 'Target pour cost', st.target, set('target', update), { unit: '%', hint: 'Bars commonly aim for roughly 15–25% on spirits.' }),
      ),
      out,
    ),
    h('h3', { class: 'h-small' }, 'Markup vs margin'),
    h(
      'div',
      { class: 'tool-grid' },
      h(
        'div',
        { class: 'tool-fields' },
        numField('mm-cost', 'Cost', st.mCost, set('mCost', mUpdate), { unit: '$' }),
        numField('mm-price', 'Selling price', st.mPrice, set('mPrice', mUpdate), { unit: '$' }),
        numField('mm-margin', 'Margin wanted', st.mMargin, set('mMargin', mUpdate), { unit: '%' }),
      ),
      mOut,
    ),
    h('p', { class: 'hint' }, 'Markup = profit ÷ cost. Margin = profit ÷ price. A 30% margin on a $24 cost means a $34.29 price, which is a 42.9% markup.'),
  );
}
