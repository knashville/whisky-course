// Seeded pseudo-random numbers so quizzes can be shuffled reproducibly in tests
// and re-created from a stored seed in the browser.

/** mulberry32: small, fast, good-enough PRNG. Returns a function yielding [0, 1). */
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function next() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** A fresh 32-bit seed from the platform's CSPRNG when available. */
export function randomSeed() {
  try {
    const a = new Uint32Array(1);
    globalThis.crypto.getRandomValues(a);
    return a[0];
  } catch {
    return (Date.now() ^ Math.floor(Math.random() * 2 ** 32)) >>> 0;
  }
}

/** Fisher–Yates shuffle returning a new array. */
export function shuffle(arr, rng) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
