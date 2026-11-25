# Changelog

## 2026-11-25: Recalibration and search-backed fact check

Prompted by a real result: an industry professional failed the Level 1 exam
cold with 67%. The causes were all-or-nothing composite questions, trivia and
oversized items.

**Scoring.** Select-all, matching and ordering questions now earn partial
credit; single choice, true/false and numeric stay all or nothing.

**Calibration.** Each level now has a written target learner (see
`CONTENT_GUIDE.md`), and the validator enforces per-level size limits.
Calibrators revised 92 questions and replaced 16:

| Level | Revised | Replaced |
|---|---|---|
| 1 | 15 | 4 |
| 2 | 29 | 4 |
| 3 | 11 | 2 |
| 4 | 14 | 4 |
| 5 | 12 | 2 |
| 6 | 11 | 0 |

Three further Level 1 standard-drink calculations were rewritten by hand as
concept questions, so Level 1 arithmetic is proof and ABV only.

**Fact check.** 140 web searches across the six levels. Of the claims
checked: 105 confirmed, 18 corrected, 9 hedged, 1 removed, 4 left unresolved
(already worded as approximate).

Note: the commit message of 3cc9257 overstated these figures (it said 177
searches, 123 confirmed, 21 corrected, 12 hedged and 115 revised). The
numbers in this file are the correct ones.

## 2026-11-24: First release

Six levels, 31 lessons, 413 questions. Each level was written by one agent,
given an exam pool by a second, reviewed independently for facts and for
assessment quality, and edited. That first review ran without web search.
