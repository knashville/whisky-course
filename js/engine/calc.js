// Whiskey arithmetic used by the Tools page and by numeric exam questions.
// All functions are pure; they throw RangeError on impossible inputs so the UI
// can show a specific message instead of NaN.
//
// Simplification shared by every volume formula here: when ethanol and water
// mix, the result is slightly smaller than the sum of the two volumes
// ("volume contraction", up to about 3-4% near 50-60% ABV). These formulas
// ignore it, which is the standard approach for quick bar and cellar maths.

export const LITERS_PER_US_GALLON = 3.785411784;

const assertPct = (v, name) => {
  if (!Number.isFinite(v) || v <= 0 || v > 100) throw new RangeError(`${name} must be between 0 and 100% ABV`);
};
const assertPos = (v, name) => {
  if (!Number.isFinite(v) || v <= 0) throw new RangeError(`${name} must be greater than zero`);
};

/** US proof is exactly twice the alcohol by volume. */
export const usProofFromAbv = (abv) => abv * 2;
export const abvFromUsProof = (proof) => proof / 2;

/**
 * Historic British (Sikes) proof, used until 1980: 100° proof ≈ 57.15% ABV.
 * UK proof ≈ ABV × 1.75. Approximate by nature, shown for reading old labels.
 */
export const ukProofFromAbv = (abv) => abv * 1.75;
export const abvFromUkProof = (ukProof) => ukProof / 1.75;

/** Water to add to `volume` of spirit at `fromAbv` to bring it down to `toAbv` (same unit as volume). */
export function waterToAdd(volume, fromAbv, toAbv) {
  assertPos(volume, 'Volume');
  assertPct(fromAbv, 'Starting strength');
  assertPct(toAbv, 'Target strength');
  if (toAbv > fromAbv) throw new RangeError('Adding water can only lower the strength; choose a target below the starting strength');
  return volume * (fromAbv / toAbv - 1);
}

/** Strength of a mixture of parts [{volume, abv}] (abv 0 = water). */
export function blendStrength(parts) {
  const valid = parts.filter((p) => Number.isFinite(p.volume) && p.volume > 0);
  if (!valid.length) throw new RangeError('Add at least one component with a volume');
  for (const p of valid) {
    if (!Number.isFinite(p.abv) || p.abv < 0 || p.abv > 100) throw new RangeError('Each strength must be between 0 and 100% ABV');
  }
  const volume = valid.reduce((s, p) => s + p.volume, 0);
  const alcohol = valid.reduce((s, p) => s + (p.volume * p.abv) / 100, 0);
  return { volume, alcohol, abv: (alcohol / volume) * 100 };
}

/**
 * Pearson square: how much of A (stronger) and B (weaker) to combine to make
 * `total` volume at `target` strength.
 */
export function pearsonSquare(aAbv, bAbv, target, total) {
  const hi = Math.max(aAbv, bAbv);
  const lo = Math.min(aAbv, bAbv);
  if (!(target > lo && target < hi)) throw new RangeError('The target strength must lie between the two component strengths');
  assertPos(total, 'Total volume');
  const partsA = Math.abs(target - bAbv);
  const partsB = Math.abs(aAbv - target);
  const sum = partsA + partsB;
  return { partsA, partsB, volumeA: (total * partsA) / sum, volumeB: (total * partsB) / sum };
}

/**
 * Evaporation from the cask ("angel's share"), compounding yearly.
 * Returns the volume left after each year.
 */
export function angelsShare(volume, annualLossPct, years) {
  assertPos(volume, 'Starting volume');
  if (!Number.isFinite(annualLossPct) || annualLossPct < 0 || annualLossPct >= 100) throw new RangeError('Yearly loss must be from 0 up to 100%');
  if (!Number.isInteger(years) || years < 0 || years > 100) throw new RangeError('Years must be a whole number from 0 to 100');
  const series = [];
  let v = volume;
  for (let y = 0; y <= years; y++) {
    if (y > 0) v *= 1 - annualLossPct / 100;
    series.push({ year: y, volume: v });
  }
  return { remaining: v, lost: volume - v, lostPct: ((volume - v) / volume) * 100, series };
}

/** US proof gallons: one gallon of spirit at 100 proof (50% ABV). The unit of US federal excise tax. */
export function proofGallons(wineGallons, proof) {
  assertPos(wineGallons, 'Volume');
  if (!Number.isFinite(proof) || proof <= 0 || proof > 200) throw new RangeError('Proof must be between 0 and 200');
  return (wineGallons * proof) / 100;
}

/** Bottles yielded when a cask is reduced to bottling strength. */
export function bottlesFromCask(volumeLiters, caskAbv, bottleAbv, bottleMl = 750, lossPct = 0) {
  assertPos(volumeLiters, 'Cask volume');
  assertPct(caskAbv, 'Cask strength');
  assertPct(bottleAbv, 'Bottling strength');
  if (bottleAbv > caskAbv) throw new RangeError('Bottling strength cannot be above cask strength (water can only lower it)');
  assertPos(bottleMl, 'Bottle size');
  const reduced = volumeLiters * (caskAbv / bottleAbv) * (1 - lossPct / 100);
  return { liters: reduced, bottles: Math.floor((reduced * 1000) / bottleMl), water: volumeLiters * (caskAbv / bottleAbv - 1) };
}

/** Liters of pure alcohol (LPA / LAA), the unit Scotch production is measured in. */
export function litersOfPureAlcohol(volumeLiters, abv) {
  assertPos(volumeLiters, 'Volume');
  assertPct(abv, 'Strength');
  return (volumeLiters * abv) / 100;
}

export const litersToUsGallons = (l) => l / LITERS_PER_US_GALLON;
export const usGallonsToLiters = (g) => g * LITERS_PER_US_GALLON;

// ------------------------------------------------------------------ responsible drinking

export const ETHANOL_DENSITY_G_PER_ML = 0.789;
export const ML_PER_US_FL_OZ = 29.5735;

/**
 * Alcohol in a pour. A US standard drink is 14 g of ethanol (1.5 fl oz at 40% ABV);
 * a UK unit is 10 ml (about 8 g) of ethanol (25 ml at 40% ABV).
 */
export function standardDrinks(volumeMl, abv) {
  assertPos(volumeMl, 'Pour size');
  assertPct(abv, 'Strength');
  const ethanolMl = (volumeMl * abv) / 100;
  const grams = ethanolMl * ETHANOL_DENSITY_G_PER_ML;
  return { ethanolMl, grams, usDrinks: grams / 14, ukUnits: ethanolMl / 10 };
}

// ------------------------------------------------------------------ sensory statistics

/** P(X >= k) for X ~ Binomial(n, p), computed exactly by summing the upper tail. */
export function binomialTail(n, k, p) {
  if (k <= 0) return 1;
  if (k > n) return 0;
  // pmf(i) built iteratively from pmf(0) in log space to stay stable for large n.
  let logPmf = n * Math.log(1 - p);
  let tail = 0;
  for (let i = 0; i <= n; i++) {
    if (i > 0) logPmf += Math.log((n - i + 1) / i) + Math.log(p / (1 - p));
    if (i >= k) tail += Math.exp(logPmf);
  }
  return Math.min(1, tail);
}

export const DISCRIMINATION_TESTS = {
  triangle: { label: 'Triangle', chance: 1 / 3, note: 'Three samples, two alike: pick the odd one out.' },
  tetrad: { label: 'Tetrad', chance: 1 / 3, note: 'Four samples, two pairs: sort them into two groups.' },
  'duo-trio': { label: 'Duo-trio', chance: 1 / 2, note: 'A reference, then two samples: pick the one that matches the reference.' },
  paired: { label: 'Paired comparison (2-AFC)', chance: 1 / 2, note: 'Two samples: pick the one with more of a named attribute.' },
};

/**
 * One-tailed significance for a discrimination test: are there more correct
 * answers than guessing would explain?
 */
export function discriminationTest(assessors, correct, { chance = 1 / 3, alpha = 0.05 } = {}) {
  if (!Number.isInteger(assessors) || assessors < 1 || assessors > 1000) throw new RangeError('Assessors must be a whole number from 1 to 1000');
  if (!Number.isInteger(correct) || correct < 0 || correct > assessors) throw new RangeError('Correct answers must be a whole number from 0 to the number of assessors');
  const pValue = binomialTail(assessors, correct, chance);
  let critical = null;
  for (let k = 0; k <= assessors; k++) {
    if (binomialTail(assessors, k, chance) <= alpha) {
      critical = k;
      break;
    }
  }
  return { pValue, critical, significant: pValue <= alpha, expectedByChance: assessors * chance };
}

/** The six balanced serving orders for a triangle test (A = control, B = test). */
export const TRIANGLE_ORDERS = ['AAB', 'ABA', 'BAA', 'ABB', 'BAB', 'BBA'];

// ------------------------------------------------------------------ trade maths

/** Cost per pour and menu pricing for a bottle. */
export function pourCost({ bottleCost, bottleMl, pourMl, menuPrice, targetPct }) {
  assertPos(bottleCost, 'Bottle cost');
  assertPos(bottleMl, 'Bottle size');
  assertPos(pourMl, 'Pour size');
  if (pourMl > bottleMl) throw new RangeError('The pour cannot be larger than the bottle');
  const pours = bottleMl / pourMl;
  const costPerPour = bottleCost / pours;
  const out = { pours, costPerPour, pourCostPct: null, priceForTarget: null };
  if (Number.isFinite(menuPrice) && menuPrice > 0) out.pourCostPct = (costPerPour / menuPrice) * 100;
  if (Number.isFinite(targetPct) && targetPct > 0 && targetPct < 100) out.priceForTarget = costPerPour / (targetPct / 100);
  return out;
}

/** Markup is profit over cost; margin is profit over price. They are not the same number. */
export function markupAndMargin(cost, price) {
  assertPos(cost, 'Cost');
  assertPos(price, 'Price');
  return { profit: price - cost, markupPct: ((price - cost) / cost) * 100, marginPct: ((price - cost) / price) * 100 };
}

export function priceFromMargin(cost, marginPct) {
  assertPos(cost, 'Cost');
  if (!(marginPct >= 0 && marginPct < 100)) throw new RangeError('Margin must be from 0 up to (not including) 100%');
  return cost / (1 - marginPct / 100);
}
