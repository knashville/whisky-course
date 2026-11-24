// "Could this be labeled bourbon?" — an interactive model of the main US
// whisky standards of identity (27 CFR 5.143), bottled-in-bond (27 CFR 5.88),
// mandatory age statements (27 CFR 5.74) and Tennessee whiskey (Tenn. Code
// Ann. § 57-2-106). It teaches the rules by showing, requirement by
// requirement, why a product does or does not qualify.
//
// Scope and simplifications (shown to learners in the tool):
// - Models single-distillate products, not blends (blended whisky, spirit whisky).
// - "additives" means added coloring, flavoring or blending materials.
// - Federal rules are summarized for education, not for label approval (COLA).

export const CONTAINERS = {
  'charred-new': 'New charred oak',
  'uncharred-new': 'New uncharred oak',
  used: 'Used oak',
  none: 'Never stored in wood',
};

export const DEFAULT_SPEC = {
  madeInUS: true,
  state: 'KY',
  mash: { corn: 70, rye: 20, wheat: 0, barley: 0, maltedBarley: 10, maltedRye: 0, other: 0 },
  distillationAbv: 68,
  entryAbv: 57.5,
  container: 'charred-new',
  containerLiters: 200,
  ageYears: 4,
  bottlingAbv: 50,
  additives: false,
  oneDistillery: true,
  oneSeason: true,
  bonded: true,
  charcoalFiltered: false,
};

const r = (ok, text) => ({ ok: !!ok, text });

export function mashTotal(mash) {
  return Object.values(mash).reduce((s, v) => s + (Number(v) || 0), 0);
}

/** Pure check of every modeled category. Returns per-category requirement lists. */
export function classifyUS(input) {
  const s = { ...DEFAULT_SPEC, ...input, mash: { ...DEFAULT_SPEC.mash, ...(input?.mash || {}) } };
  const m = s.mash;
  const total = mashTotal(m);
  const stored = s.container !== 'none' && s.ageYears > 0;
  const entryOk = (max) => s.container === 'none' || (Number.isFinite(s.entryAbv) && s.entryAbv <= max);

  // General whisky class (27 CFR 5.143): grain, < 95% ABV off the still,
  // stored in oak (corn whisky excepted), bottled at >= 40% ABV.
  const whiskyBase = [
    r(Math.abs(total - 100) < 0.01, `Mash bill adds up to 100% (now ${round(total)}%)`),
    r(s.distillationAbv < 95, 'Distilled to less than 95% ABV (190 proof)'),
    r(s.bottlingAbv >= 40, 'Bottled at 40% ABV (80 proof) or higher'),
  ];

  const straightAge = r(s.ageYears >= 2, 'Aged at least 2 years in the required container (for "straight")');
  const noAdditives = r(!s.additives, 'No added coloring, flavoring or blending materials');

  const results = [];

  // Bourbon / rye / wheat / malt / rye malt (5.143): >= 51% grain, <= 80% ABV
  // distillation, <= 62.5% ABV entry, new charred oak.
  const typed = [
    { id: 'bourbon', label: 'Bourbon whisky', grain: m.corn, grainName: 'corn', usOnly: true },
    { id: 'rye', label: 'Rye whisky', grain: m.rye, grainName: 'rye' },
    { id: 'wheat', label: 'Wheat whisky', grain: m.wheat, grainName: 'wheat' },
    { id: 'malt', label: 'Malt whisky', grain: m.maltedBarley, grainName: 'malted barley' },
    { id: 'rye-malt', label: 'Rye malt whisky', grain: m.maltedRye, grainName: 'malted rye' },
  ];
  for (const t of typed) {
    const reqs = [
      ...whiskyBase,
      r(t.grain >= 51, `At least 51% ${t.grainName} (now ${round(t.grain)}%)`),
      r(s.distillationAbv <= 80, 'Distilled to no more than 80% ABV (160 proof)'),
      r(s.container === 'charred-new', 'Stored in new charred oak containers'),
      r(s.container === 'none' || entryOk(62.5), 'Entered the barrel at no more than 62.5% ABV (125 proof)'),
      noAdditives,
    ];
    if (t.usOnly) reqs.unshift(r(s.madeInUS, 'Produced in the United States (bourbon is a distinctive product of the US)'));
    results.push(category(t.id, t.label, reqs));
    results.push(category(`straight-${t.id}`, `Straight ${t.label.charAt(0).toLowerCase()}${t.label.slice(1)}`, [...reqs, straightAge]));
  }

  // Corn whisky: >= 80% corn; if stored, <= 62.5% ABV in used or uncharred new oak.
  const cornReqs = [
    r(Math.abs(total - 100) < 0.01, `Mash bill adds up to 100% (now ${round(total)}%)`),
    r(m.corn >= 80, `At least 80% corn (now ${round(m.corn)}%)`),
    r(s.distillationAbv <= 80, 'Distilled to no more than 80% ABV (160 proof)'),
    r(s.container !== 'charred-new', 'If stored in wood, only used or new uncharred oak (never charred new oak)'),
    r(s.container === 'none' || entryOk(62.5), 'If stored in wood, entered at no more than 62.5% ABV (125 proof)'),
    r(s.bottlingAbv >= 40, 'Bottled at 40% ABV (80 proof) or higher'),
    noAdditives,
  ];
  results.push(category('corn', 'Corn whisky', cornReqs));
  results.push(
    category('straight-corn', 'Straight corn whisky', [
      ...cornReqs,
      r(s.container === 'used' || s.container === 'uncharred-new', 'Stored in used or new uncharred oak'),
      straightAge,
    ]),
  );

  // Light whisky: US, > 80% and < 95% ABV, used or uncharred new oak.
  results.push(
    category('light', 'Light whisky', [
      r(s.madeInUS, 'Produced in the United States'),
      ...whiskyBase,
      r(s.distillationAbv > 80, 'Distilled to more than 80% ABV (160 proof)'),
      r(s.container === 'used' || s.container === 'uncharred-new', 'Stored in used or new uncharred oak'),
    ]),
  );

  // American single malt (T.D. TTB-199, effective January 19, 2025).
  const asm = [
    r(s.madeInUS, 'Mashed, distilled and matured in the United States'),
    ...whiskyBase,
    r(m.maltedBarley >= 100 - 1e-9, `100% malted barley (now ${round(m.maltedBarley)}%)`),
    r(s.oneDistillery, 'Distilled entirely at one distillery'),
    r(s.distillationAbv <= 80, 'Distilled to no more than 80% ABV (160 proof)'),
    r(stored, 'Stored in oak'),
    r(stored && s.containerLiters <= 700, `Oak containers of 700 liters or less (now ${round(s.containerLiters)} L)`),
  ];
  results.push(category('asm', 'American single malt whisky', asm));
  results.push(category('straight-asm', 'Straight American single malt whisky', [...asm, r(s.ageYears >= 2, 'Aged at least 2 years')]));

  // Tennessee whiskey under state law: a bourbon-style product made and aged in
  // Tennessee and filtered through maple charcoal before aging.
  results.push(
    category('tennessee', 'Tennessee whiskey', [
      r(s.madeInUS && s.state === 'TN', 'Made and aged in Tennessee'),
      r(m.corn >= 51, 'At least 51% corn'),
      r(s.distillationAbv <= 80, 'Distilled to no more than 80% ABV (160 proof)'),
      r(s.container === 'charred-new', 'Aged in new charred oak barrels'),
      r(s.container === 'none' || entryOk(62.5), 'Barreled at no more than 62.5% ABV (125 proof)'),
      r(s.charcoalFiltered, 'Filtered through maple charcoal before aging (Lincoln County Process)'),
      r(s.bottlingAbv >= 40, 'Bottled at 40% ABV (80 proof) or higher'),
      r(!s.additives, 'No added coloring, flavoring or blending materials'),
    ]),
  );

  // Bottled in bond (5.88): one season, one distiller, one distillery, >= 4 years
  // in a bonded warehouse, exactly 100 proof, nothing added but water.
  results.push(
    category('bib', 'Bottled-in-bond', [
      r(s.oneSeason, 'Product of one distillation season (January–June or July–December) by one distiller'),
      r(s.oneDistillery, 'Made at one distillery'),
      r(stored && s.ageYears >= 4, 'Aged at least 4 years in wood'),
      r(s.bonded, 'Aged in a bonded warehouse under government supervision'),
      r(Math.abs(s.bottlingAbv - 50) < 1e-9, 'Bottled at exactly 100 proof (50% ABV)'),
      r(!s.additives, 'Nothing added except pure water to reduce proof'),
      r(whiskyBase.every((x) => x.ok), 'Meets the general whisky standard'),
    ]),
  );

  const anyWhisky = results.some((x) => x.ok);
  return {
    results,
    // 27 CFR 5.74: an age statement is required on whisky aged less than 4 years.
    ageStatementRequired: anyWhisky && stored && s.ageYears < 4,
    proof: {
      distillation: s.distillationAbv * 2,
      entry: Number.isFinite(s.entryAbv) ? s.entryAbv * 2 : null,
      bottling: s.bottlingAbv * 2,
    },
  };
}

function category(id, label, reasons) {
  return { id, label, ok: reasons.every((x) => x.ok), reasons };
}

function round(v) {
  return Math.round((Number(v) || 0) * 10) / 10;
}

/** Ready-made scenarios for the tool's "try an example" menu. */
export const PRESETS = [
  {
    name: 'Kentucky bonded bourbon',
    spec: { ...DEFAULT_SPEC },
  },
  {
    name: 'High-rye straight rye',
    spec: {
      ...DEFAULT_SPEC,
      mash: { corn: 0, rye: 95, wheat: 0, barley: 0, maltedBarley: 5, maltedRye: 0, other: 0 },
      distillationAbv: 70,
      entryAbv: 60,
      ageYears: 3,
      bottlingAbv: 45,
      bonded: false,
    },
  },
  {
    name: 'Wheated bourbon, 6 years',
    spec: {
      ...DEFAULT_SPEC,
      mash: { corn: 70, rye: 0, wheat: 16, barley: 0, maltedBarley: 14, maltedRye: 0, other: 0 },
      ageYears: 6,
      bottlingAbv: 45,
      bonded: false,
    },
  },
  {
    name: 'Unaged corn whisky',
    spec: {
      ...DEFAULT_SPEC,
      mash: { corn: 85, rye: 0, wheat: 0, barley: 0, maltedBarley: 15, maltedRye: 0, other: 0 },
      container: 'none',
      entryAbv: null,
      ageYears: 0,
      bottlingAbv: 50,
      bonded: false,
      oneSeason: false,
    },
  },
  {
    name: 'Tennessee whiskey',
    spec: {
      ...DEFAULT_SPEC,
      state: 'TN',
      mash: { corn: 80, rye: 8, wheat: 0, barley: 0, maltedBarley: 12, maltedRye: 0, other: 0 },
      charcoalFiltered: true,
      ageYears: 4,
      bottlingAbv: 40,
      bonded: false,
    },
  },
  {
    name: 'American single malt',
    spec: {
      ...DEFAULT_SPEC,
      state: 'WA',
      mash: { corn: 0, rye: 0, wheat: 0, barley: 0, maltedBarley: 100, maltedRye: 0, other: 0 },
      distillationAbv: 70,
      entryAbv: 62.5,
      container: 'used',
      containerLiters: 225,
      ageYears: 3,
      bottlingAbv: 46,
      bonded: false,
    },
  },
  {
    name: 'Light whisky',
    spec: {
      ...DEFAULT_SPEC,
      mash: { corn: 90, rye: 0, wheat: 0, barley: 0, maltedBarley: 10, maltedRye: 0, other: 0 },
      distillationAbv: 90,
      entryAbv: 60,
      container: 'used',
      ageYears: 4,
      bottlingAbv: 40,
      bonded: false,
    },
  },
];
