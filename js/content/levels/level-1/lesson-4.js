export default {
  id: 'l1-how-to-taste',
  title: 'How to Taste',
  summary:
    'A repeatable five-step tasting method, the right glass, a starter flavor vocabulary, and how to use water, ice and flight order on purpose. Every exercise has a nose-only option.',
  minutes: 8,
  blocks: [
    {
      type: 'text',
      md: `Most people taste whiskey the way they gulp coffee: quickly, and without noticing much. Tasting on purpose is a skill, and like any skill it improves with a method you repeat every time. The method below is the same one blenders and judges use, simplified for a first pass.

Tasting is always optional in this course. Every exercise can be done by smell alone, and spitting is normal professional practice.`,
    },
    {
      type: 'compare',
      title: 'Choose the glass for the job',
      columns: [
        {
          heading: 'Nosing glass (tulip or copita)',
          points: [
            'A rounded bowl that narrows toward the rim',
            'Concentrates the aroma and directs it to your nose',
            'Lets you swirl without spilling',
            'The right choice for studying a whiskey',
          ],
        },
        {
          heading: 'Rocks glass (tumbler)',
          points: [
            'Short and wide with a heavy base',
            'Lets aroma spread out and escape',
            'Has room for a big ice cube or a cocktail',
            'The right choice for relaxed drinking and mixed serves',
          ],
        },
      ],
    },
    {
      type: 'steps',
      title: 'The five steps',
      items: [
        {
          title: '1. Look',
          md: 'Hold the glass against something white. Note the **color** (pale straw to deep amber) and the **clarity**. Swirl and watch the **tears** run down the glass. They form because alcohol evaporates faster than water from the thin film at the top, which changes the surface tension and pulls liquid upward until drops fall back (the Marangoni effect). Tears tell you more about strength than quality.',
        },
        {
          title: '2. Nose',
          md: 'Keep your lips slightly parted and take short, gentle sniffs. Start at the rim and move lower into the glass. Never plunge your nose in and inhale hard: high-strength alcohol numbs the nose quickly. Try to name two or three aromas.',
        },
        {
          title: '3. Sip',
          md: 'Take a small sip and let it coat your whole mouth for a few seconds. Notice sweetness, spice and texture. Is it thin and light or thick and oily? That weight is called **body**.',
        },
        {
          title: '4. Finish',
          md: 'Swallow or spit, then breathe out gently through your nose. Note which flavors stay and for how long: a **short**, **medium** or **long** finish.',
        },
        {
          title: '5. Reflect',
          md: 'Put it together. Was it balanced? How did it change from nose to finish? Would you choose it again? Write one line before moving on; memory fades fast.',
        },
      ],
    },
    {
      type: 'callout',
      variant: 'fact',
      title: 'Most "flavor" is really smell',
      md: `Your tongue detects only five basic tastes: **sweet, sour, salty, bitter and umami**. Everything else you call flavor, from vanilla to smoke to apple, is **smell**. When you hold whiskey in your mouth and breathe out, aromas travel up the back of your throat to your nose. This is **retronasal smell**, and it is why food tastes of little when you have a cold.

Two sensations are neither taste nor smell. The **burn** of alcohol and the **drying grip** of oak tannin (astringency) are felt rather than tasted: nerves in the mouth that sense heat, pain and touch pick them up.`,
    },
    {
      type: 'table',
      caption: 'A starter vocabulary of twelve words, with kitchen references to train your nose.',
      headers: ['Family', 'Starter words', 'Kitchen reference'],
      rows: [
        ['Sweet', 'Vanilla, caramel, honey', 'Vanilla pod, caramel sauce, a spoon of honey'],
        ['Fruit', 'Orchard fruit, citrus, dried fruit', 'Sliced apple or pear, orange peel, raisins'],
        ['Spice', 'Baking spice, pepper', 'Cinnamon and clove, cracked black pepper'],
        ['Grain and flowers', 'Cereal, floral', 'Plain biscuits or porridge oats, a fresh flower'],
        ['Smoke', 'Smoke/medicinal', 'Smoked tea leaves, a sticking plaster'],
        ['Wood', 'Oak', 'Pencil shavings, toasted wood'],
      ],
    },
    {
      type: 'text',
      md: `### Water and ice, used on purpose

**A few drops of water** often open up a whiskey. Water softens the alcohol burn and can release aromas that were hidden. Add it a few drops at a time with a dropper or a straw, and nose again after each addition. Cask strength whiskies usually benefit most.

**Ice** chills the whisky, and cold dulls aroma. That is pleasant on a hot evening, but it hides detail. When you want to study a whiskey, taste it at room temperature first, then add water. Save ice for relaxed drinking.`,
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Putting a flight in order',
      md: `A **flight** is a set of whiskeys tasted side by side. Three rules keep each one from overpowering the next:

- **Lighter before heavier** in style.
- **Lower ABV before higher.**
- **Unpeated before peated.** Smoke lingers and swamps anything delicate after it.

Keep a flight to **4-5 samples at most**. Between glasses, sip water and eat a plain cracker to reset your palate.`,
    },
    {
      type: 'tasting',
      title: 'A four-style flight',
      md: `Pour **15 mL** (about half a fluid ounce) of each style into four matching glasses, ordered by the rules above. For each one, score **sweetness, smoke, body and finish length from 1 to 5** on a card, and write a few words for nose, palate and finish. You can keep the notes in the Journal page. Then add a few drops of water to glass 2 and record what changes.

**Nose-only option:** skip the whiskey and nose four small jars instead: vanilla extract, a slice of apple with a drizzle of honey, a few cloves, and a pinch of smoked tea. Score the same four headings for aroma.`,
      flight: [
        { pour: 'A blended Irish whiskey around 40% ABV', lookFor: 'Light body, orchard fruit and honey, gentle sweetness, a short to medium finish. Smoke should score 1.' },
        { pour: 'An unpeated single malt from ex-bourbon casks, around 40-43% ABV', lookFor: 'Malt, pear and vanilla. After a few drops of water, note any new fruit or floral aromas and less burn.' },
        { pour: 'A bourbon around 45% ABV', lookFor: 'Bigger sweetness: vanilla, caramel and baking spice from new charred oak, with a fuller body.' },
        { pour: 'A peated Islay single malt around 46% ABV', lookFor: 'Smoke, iodine and sea air over a sweet malt core. Notice how long the smoke lasts; that is why it comes last.' },
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Taste safely',
      md: `Tasting pours are small: **15-25 mL** (about 0.5-0.85 fl oz). Four 15 mL pours at around 43% ABV add up to about one and a half US standard drinks if you swallow them all; Lesson 5 shows how to work that out. Spitting into a cup is what professionals do, and it lets you taste more clearly. Drink water throughout, eat beforehand, and never drive after a tasting.`,
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Nosing glass', definition: 'A tulip-shaped glass, such as the copita, whose narrowing rim concentrates aroma for tasting.' },
        { term: 'Tears', definition: 'Droplets that form and run down the inside of a glass after swirling, caused by alcohol evaporating faster than water (the Marangoni effect). Also called legs.' },
        { term: 'Retronasal smell', definition: 'Smelling aromas that travel from the back of the mouth up to the nose while you taste. It supplies most of what we call flavor.' },
        { term: 'Palate', definition: 'The flavor and texture of a whiskey while it is in your mouth; also used for a taster\'s skill, as in "a trained palate".' },
        { term: 'Finish', definition: 'The flavors and sensations that linger after you swallow or spit, described as short, medium or long.' },
        { term: 'Astringency', definition: 'A drying, gripping feeling in the mouth, often from oak tannin. It is a touch sensation, felt by nerves in the mouth.' },
        { term: 'Flight', definition: 'A set of whiskeys tasted side by side in a planned order, usually lighter and lower in strength first.' },
      ],
    },
    {
      type: 'text',
      md: `### Recap

Use a nosing glass for study and a rocks glass for ice and cocktails. Follow the same five steps every time: look, nose, sip, finish, reflect. Most flavor is retronasal smell; the tongue senses only sweet, sour, salty, bitter and umami, and burn and astringency are felt by nerves in the mouth, not tasted. Build a vocabulary from simple words like vanilla, orchard fruit, baking spice and smoke. A few drops of water open a whiskey; ice mutes it. Order a flight lighter to heavier, lower to higher ABV and unpeated to peated, keep it to 4-5 small pours, and spit whenever you like.`,
    },
  ],
  quiz: [
    {
      id: 'l1-how-to-taste-q1',
      type: 'order',
      prompt: 'Put the five tasting steps in order, first to last.',
      items: ['Look', 'Nose', 'Sip', 'Finish', 'Reflect'],
      explanation: 'You look before anything else, nose before sipping (so the alcohol has not yet tired your senses), sip, notice the finish after swallowing or spitting, and reflect at the end. Nosing after sipping is the common slip: the alcohol in your mouth then dulls the aromas.',
    },
    {
      id: 'l1-how-to-taste-q2',
      type: 'single',
      prompt: 'Where does most of what we call the "flavor" of a whiskey come from?',
      options: [
        'Smell, from aromas rising from the back of the mouth to the nose',
        'Taste buds on the tongue, which pick up hundreds of flavors',
        'Nerves in the mouth that sense the burn and grip of the spirit',
        'The color of the whiskey, which shows its cask and its age',
      ],
      answer: 0,
      explanation: 'Most flavor is retronasal smell: notes such as vanilla, apple or smoke are aromas reaching the nose from the back of the mouth. The tongue senses only five basic tastes, burn and tannin grip are felt by nerves in the mouth rather than tasted, and color is an unreliable guide to cask or age.',
    },
    {
      id: 'l1-how-to-taste-q3',
      type: 'match',
      prompt: 'Match each tasting word to its meaning.',
      pairs: [
        { left: 'Nose', right: 'The aroma, smelled before sipping' },
        { left: 'Palate', right: 'Flavor and texture while the whiskey is in your mouth' },
        { left: 'Finish', right: 'What lingers after you swallow or spit' },
        { left: 'Astringency', right: 'A drying, gripping feel, often from oak tannin' },
      ],
      explanation: 'Nose, palate and finish follow the whiskey from glass to mouth to aftertaste. Astringency is easy to file under palate because you notice it while the whiskey is in your mouth, but it is a touch sensation from tannin, felt by nerves rather than tasted.',
    },
    {
      id: 'l1-how-to-taste-q4',
      type: 'truefalse',
      prompt: 'Adding ice to a whisky makes its aromas easier to smell.',
      answer: false,
      explanation: 'Cold dulls aroma, so ice hides detail. A few drops of water are the way to open up aromas; ice is for relaxed, refreshing drinking.',
    },
    {
      id: 'l1-how-to-taste-q5',
      type: 'single',
      context: `Tonight's flight:
- A blended Irish whiskey, 40% ABV
- An unpeated single malt, 43% ABV
- A bourbon, 45% ABV
- A peated Islay single malt, 46% ABV`,
      prompt: 'Which whiskey should be tasted last?',
      options: ['The peated Islay single malt', 'The bourbon', 'The unpeated single malt', 'The blended Irish whiskey'],
      answer: 0,
      explanation: 'Unpeated goes before peated, because smoke lingers and would swamp the delicate whiskies after it. The peated malt is also the strongest here, so it goes last under the lower-ABV-first rule too.',
    },
  ],
};
