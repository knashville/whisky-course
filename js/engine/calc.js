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
