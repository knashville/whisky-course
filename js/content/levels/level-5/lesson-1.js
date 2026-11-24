export default {
  id: 'l5-physiology-of-flavor',
  title: 'The Physiology of Flavor',
  summary:
    'How smell, taste and the burn receptor TRPV1 build what you call flavor, why ethanol strength and temperature change it, and how thresholds, adaptation and context bias every judgment you make.',
  minutes: 13,
  blocks: [
    {
      type: 'text',
      md: `Every tasting note is a report from your nervous system. Two people can nose the same whiskey and describe it differently because their receptors, thresholds and expectations differ. A whiskey can seem sweet with almost no sugar in it, and it can burn at a temperature that would never burn your skin.

This level works at the molecular and perceptual scale. Before the chemistry of congeners and oak, you need a working model of the instrument doing the measuring. This lesson covers the three sensory channels, the limits of each, and the controls a professional uses to keep them honest.`,
    },
    {
      type: 'text',
      md: `### Smell: a combinatorial code

Humans carry about **400 functional olfactory receptor types**. No receptor is dedicated to "vanilla" or "smoke". Each receptor responds to several odorants, and each odorant activates several receptors. The brain reads the *pattern* across the whole set, so 400 receptor types can tell apart many thousands of odorants.

Odorants reach those receptors by two routes:

- **Orthonasal**: sniffed in through the nostrils, as when you nose a glass.
- **Retronasal**: released in the warm mouth and carried up the back of the throat to the nose as you swallow or breathe out.

Most of what people call the "taste" of a whiskey is retronasal smell. The tongue reports only a handful of qualities; the nose supplies vanilla, cherry, smoke and the rest. Retronasal and orthonasal smell can also differ for the same compound, because the mouth warms the liquid, mixes it with saliva and releases it with each breath.`,
    },
    {
      type: 'text',
      md: `### Taste, and the sweetness that is not there

Taste receptors on the tongue and palate code five qualities: sweet, sour, salty, bitter and umami. A straight whiskey or a single malt is essentially dry. Oak adds traces of wood sugars, usually too little to explain how sweet the spirit seems.

The sweetness comes largely from aroma. Vanillin and the oak lactones smell like foods that are sweet, and the brain has learned that pairing. When those aromas arrive retronasally, the brain adds sweetness to the taste signal. This is **cross-modal enhancement**: one sense raising the perceived intensity of another. It explains why a heavily oaked bourbon reads as "sweet" on the palate even though a sugar test would find almost nothing.`,
    },
    {
      type: 'text',
      md: `### Chemesthesis: burn and astringency

The third channel, **chemesthesis**, runs through the trigeminal nerve, which senses irritation, temperature and touch in the mouth and nose. Two whiskey sensations live here.

**Burn.** The heat receptor **TRPV1** (the same receptor capsaicin in chili activates) normally fires above about **42 °C**. Trevisani and colleagues (*Nature Neuroscience*, 2002) showed in laboratory studies of the receptor that ethanol lowers that heat threshold to about **34 °C**. The inside of your mouth is warmer than 34 °C, so in the presence of ethanol the receptor fires at body temperature and the brain reports heat. The stronger the spirit, the stronger the effect.

**Astringency.** Oak tannins bind and precipitate the proline-rich proteins in saliva. Saliva then lubricates less, and the mouth feels dry, rough and puckered. Astringency is a touch sensation carried by the trigeminal nerve. It builds over repeated sips and lingers, because the mouth takes time to replace the lubricating proteins the tannins have stripped out.`,
    },
    {
      type: 'table',
      caption: 'The three channels that build whiskey flavor',
      headers: ['Channel', 'Sensor', 'What it reports', 'Whiskey example'],
      rows: [
        ['Smell (orthonasal and retronasal)', 'About 400 olfactory receptor types in the nose', 'Volatile aroma compounds, read as a combined pattern', 'Banana, vanilla, smoke, dried fruit'],
        ['Taste', 'Taste receptor cells on tongue and palate', 'Sweet, sour, salty, bitter, umami', 'Bitterness from some oak phenolics; little real sweetness'],
        ['Chemesthesis (trigeminal)', 'TRPV1 and touch receptors', 'Heat, irritation, drying, tingling', 'Ethanol burn; tannic astringency'],
      ],
    },
    {
      type: 'callout',
      variant: 'myth',
      title: 'Myth: burn means a young or poor whiskey',
      md: `Burn tracks ethanol concentration acting on TRPV1 far more than age or quality. A 25-year-old bottled at 60% ABV will burn more than a 3-year-old at 40%. Sensitivity also varies from person to person. To judge quality, compare whiskeys at the same strength.`,
    },
    {
      type: 'text',
      md: `### Thresholds and specific anosmia

A **detection threshold** is the lowest concentration at which a person can tell that *something* differs from a blank. A **recognition threshold** is the higher concentration at which they can name what it is. Between the two lies a zone where you know a glass is different but cannot say why. Panel training is largely about narrowing that zone.

Thresholds vary by orders of magnitude between compounds. In wine, a musty contaminant such as TCA can be noticed at a few nanograms per liter, while ethyl acetate needs roughly ten milligrams per liter or more: a gap of more than a million-fold. Thresholds also vary between people, and a measured threshold depends on the liquid it is measured in, so a value found in water will not hold at 40% ABV.

A **specific anosmia** is a reduced or absent sensitivity to one compound in someone whose sense of smell is otherwise normal. These are common and often genetic. Variants of the receptor gene OR5A1 make some people roughly 100 times less sensitive to beta-ionone (a violet-like note), and variants of OR7D4 change how people perceive androstenone. Every taster has blind spots, which is one reason professional decisions rest on panels rather than one nose.`,
    },
    {
      type: 'callout',
      variant: 'tip',
      title: 'Adaptation and how to reset',
      md: `Keep sniffing the same glass and its aroma fades within a minute. This is **adaptation**. **Cross-adaptation** is the related effect where exposure to one odor dulls your response to similar ones: after four peated whiskies, the smoke in a fifth seems lighter than it is.

- Take short sniffs, then rest **30-60 seconds** between glasses.
- Reset on a neutral smell, such as the skin of your own forearm, or with a sip of water.
- Serve smoky or intense samples last.`,
    },
    {
      type: 'text',
      md: `### Ethanol, water and temperature

Ethanol dissolves most aroma compounds better than water does, so at higher strength more of the aroma stays in the liquid and less reaches the **headspace** (the air above the liquid that you actually smell). Conner and colleagues (1998) found that above about **17% ABV**, ethanol molecules start to cluster and esters partition into those clusters, which lowers their concentration in the headspace. Ethanol vapor also irritates the nose and adds its own smell, which masks subtler notes.

Water can also change *where* a compound sits. Karlsson and Friedman (*Scientific Reports*, 2017) ran molecular-dynamics computer simulations of guaiacol, a smoky phenol, in water-ethanol mixtures. At **59% ABV and above**, guaiacol was increasingly surrounded by ethanol and drawn into the bulk liquid. At about **45% ABV and below**, it was more likely to sit at the liquid surface, where it can escape into the headspace. This is one reason a splash of water can lift smoke. It was a simulation with no tasters involved, and it gives no rule for how much water to add.

Temperature works through volatility. Warming a glass raises the vapor pressure of every volatile, aroma and ethanol alike. Ice does the opposite: cold liquid releases less aroma, and melting ice dilutes it further. For assessment, serve near room temperature, around 20 °C.

Blenders handle hundreds of samples a day, so they reduce samples to about **20-23% ABV** (some work up to 25-30%) and nose far more than they taste. At that strength the burn is low, aroma release is high, and the nose does not tire as fast.`,
    },
    {
      type: 'callout',
      variant: 'fact',
      title: 'Context bias: the color of odors',
      md: `Morrot, Brochet and Dubourdieu (2001) asked 54 wine students to describe a white wine and a red wine. Later the students described the same white wine colored red with an odorless dye. They described it in red-wine terms. The color alone changed what they reported smelling.

Sensory scientists call a bias from an irrelevant cue in the sample itself, such as its color, a **stimulus error**. Lesson 5 sets it beside expectation error, which comes from what the assessor is told.

Whiskey color carries the same cues: darker reads as older or sherried, even though caramel coloring is permitted in some categories. Professional panels remove the cue with **dark or blue glasses** or colored lighting.`,
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'TRPV1', definition: 'A heat and irritant receptor on trigeminal nerve endings that normally fires above about 42 °C. Ethanol lowers its threshold to about 34 °C, which produces the burn of spirits.' },
        { term: 'Cross-modal enhancement', definition: 'One sense raising the perceived intensity of another, such as vanilla or lactone aromas making a dry whiskey seem sweet.' },
        { term: 'Detection threshold', definition: 'The lowest concentration of a compound at which a person can tell a sample differs from a blank, without necessarily naming the difference.' },
        { term: 'Recognition threshold', definition: 'The concentration at which a person can identify a compound by name. It is higher than the detection threshold.' },
        { term: 'Specific anosmia', definition: 'Reduced or absent sensitivity to one particular odorant in a person whose sense of smell is otherwise normal, often linked to variants of a single receptor gene.' },
        { term: 'Cross-adaptation', definition: 'Reduced sensitivity to one odor after exposure to a similar one, such as smoke seeming weaker after several peated samples.' },
        { term: 'Chemesthesis', definition: 'Chemical sensations carried by the trigeminal nerve rather than by smell or taste, such as the burn of ethanol, the tingle of carbonation and the drying of astringency.' },
      ],
    },
    {
      type: 'table',
      caption: 'Worked dilution for a 10 mL portion: water = volume × (starting ABV ÷ target ABV − 1). Check it with the Adding water tool. (This ignores the small volume contraction when ethanol and water mix.)',
      headers: ['Target strength', 'Starting at 46% ABV', 'Starting at 50% ABV', 'Starting at 58% ABV'],
      rows: [
        ['Full strength', '0 mL', '0 mL', '0 mL'],
        ['40% ABV', '1.5 mL', '2.5 mL', '4.5 mL'],
        ['30% ABV', '5.3 mL', '6.7 mL', '9.3 mL'],
        ['20% ABV', '13 mL', '15 mL', '19 mL'],
      ],
    },
    {
      type: 'tasting',
      title: 'Dilution series and the pinched-nose test',
      md: `Use one whiskey bottled at **46% ABV or more**, in four 10 mL portions, diluted with the volumes of still water in the table above. Label the glasses on the base so you do not see the strength while you score. Score five descriptors from 0 to 10 for every glass: **ethanol burn, sweetness, fruit, oak, smoke or spice**. Then draw each descriptor as a line across the four strengths on paper. Expect burn to fall steadily; look for the strength where fruit or smoke peaks.

Tasting is optional. Four 10 mL portions at 46-50% ABV hold a little over one US standard drink in total, so take small sips and spit. For a **nose-only** version, score aroma only. Rest 30-60 seconds between glasses.

**Pinched-nose test (no alcohol):** pinch your nose and chew a fruit-flavored jellybean. You will get sweet and sour, little else. Release your nose while still chewing: the fruit flavor arrives at once, retronasally.`,
      flight: [
        { pour: 'Full strength (46% ABV or more)', lookFor: 'Burn and drying in the mouth; aroma held back; note which descriptors you can name at all.' },
        { pour: 'Reduced to about 40% ABV', lookFor: 'Burn eases; fruit and sweetness usually open up.' },
        { pour: 'Reduced to about 30% ABV', lookFor: 'Smoke or oak spice may rise; texture thins.' },
        { pour: 'Reduced to about 20% ABV (blender strength)', lookFor: 'Lowest burn and the easiest nosing; check whether any note has faded or turned soapy or flat.' },
      ],
    },
    {
      type: 'text',
      md: `### Recap

Flavor is built from three channels: about 400 olfactory receptor types reading aroma by pattern, mostly retronasally; five taste qualities; and trigeminal sensations, including the TRPV1 burn that ethanol triggers at about 34 °C and the astringency of tannins binding saliva proteins. Sweetness in a dry whiskey is largely aroma-driven. Detection comes before recognition, thresholds differ by orders of magnitude and between people, and specific anosmias are common. Ethanol holds aroma in the liquid, water and warmth release it, and ice suppresses it, which is why blenders nose at about 20-23% ABV. Adaptation, cross-adaptation and color cues all bias judgment, so rest between glasses and remove what you can see.`,
    },
  ],
  quiz: [
    {
      id: 'l5-physiology-of-flavor-q1',
      type: 'single',
      context: `**Tasting notes, one whiskey at two strengths**
- At 58% ABV: "Hot, prickly, drying. Aroma closed; faint vanilla."
- Same whiskey reduced to 30% ABV: "Gentle. Vanilla and peat smoke much clearer; seems sweeter."`,
      prompt: 'Which explanation best accounts for the change between the two notes?',
      options: [
        'At high strength ethanol holds aroma in the liquid and drives TRPV1 burn; dilution frees aroma into the headspace and reduces the burn.',
        'Water reacts with the esters within seconds to form new vanilla and smoke compounds that were absent at full strength.',
        'Dilution raises the sugar content of the whiskey, which explains why the second note reads as sweeter.',
        'Taste buds on the tongue can detect vanilla and smoke only once the strength falls below 40% ABV.',
      ],
      answer: 0,
      explanation: 'Ethanol keeps aroma compounds in solution and lowers the TRPV1 heat threshold, so strong spirit burns and smells closed. Dilution releases aroma and reduces burn. Dilution lowers sugar per mL if anything, and vanilla and smoke are smells, read by the nose, not by taste buds.',
    },
    {
      id: 'l5-physiology-of-flavor-q2',
      type: 'numeric',
      context: `**Dilution worksheet**
Sample: 10 mL of a cask-strength whiskey at 58% ABV.
Target: blender's nosing strength of 20% ABV.`,
      prompt: 'How many mL of water must you add? Ignore volume contraction and round to the nearest mL.',
      answer: 19,
      tolerance: 0.5,
      unit: 'mL',
      explanation: 'Alcohol is conserved: 10 mL × 58% = 5.8 mL of ethanol. At 20% ABV that needs a total volume of 5.8 ÷ 0.20 = 29 mL, so add 29 − 10 = 19 mL of water. Check it with the Adding water tool.',
    },
    {
      id: 'l5-physiology-of-flavor-q3',
      type: 'match',
      prompt: 'Match each sensation to the mechanism that produces it.',
      pairs: [
        { left: 'Heat in the mouth from a cask-strength pour', right: 'Ethanol lowering the TRPV1 threshold to about 34 °C' },
        { left: 'Dry, puckering feel after a tannic whiskey', right: 'Tannins binding proline-rich saliva proteins' },
        { left: 'Sweetness in a whiskey with almost no sugar', right: 'Vanilla and lactone aromas enhancing taste' },
        { left: 'Smoke rising after water is added', right: 'Guaiacol moving to the liquid surface at lower ABV' },
        { left: 'One taster cannot smell a note the rest of the panel finds', right: 'A receptor gene variant causing specific anosmia' },
      ],
      explanation: 'Burn is trigeminal (TRPV1), astringency is tactile (tannin-protein binding), perceived sweetness is cross-modal enhancement from aroma, smoke lift after dilution matches the Karlsson and Friedman guaiacol simulations, and blind spots for single compounds are specific anosmias.',
    },
    {
      id: 'l5-physiology-of-flavor-q4',
      type: 'multi',
      prompt: 'Which statements about odor thresholds are correct? Select all that apply.',
      options: [
        'A detection threshold is lower than the recognition threshold for the same compound.',
        'Thresholds for different aroma compounds can differ by a million-fold or more.',
        'Once measured, a person’s threshold for a compound holds in any liquid, from water to cask strength.',
        'A specific anosmia means a person cannot smell any odors at all.',
        'Two healthy tasters can have very different thresholds for the same compound.',
      ],
      answer: [0, 1, 4],
      explanation: 'You detect a difference before you can name it, thresholds span orders of magnitude (ng/L for TCA, mg/L for ethyl acetate), and they vary between people. A threshold depends on the matrix, so a value measured in water does not hold at 40% ABV, and a specific anosmia affects one compound, not smell as a whole.',
    },
    {
      id: 'l5-physiology-of-flavor-q5',
      type: 'single',
      context: `**Panel log**
A trainee nosed twelve glasses of peated malt in a row with no breaks; each glass was poured just before it was nosed. Glasses 10-12 were scored "light smoke", though glass 12 was the same whiskey as glass 1, which was scored "heavy smoke".`,
      prompt: 'What is the most likely cause, and the best fix?',
      options: [
        'Adaptation and cross-adaptation to smoky phenols; rest 30-60 seconds and reset on neutral skin or water.',
        'The smoky phenols evaporated from the glass; pour fresh samples every two minutes.',
        'Retronasal smell switched off after the tenth glass; taste rather than nose the later samples.',
        'A specific anosmia to guaiacol developed during the session; replace the trainee.',
      ],
      answer: 0,
      explanation: 'Continued exposure to similar odors lowers the response to them, so later smoky glasses read lighter. Rests and a neutral reset restore sensitivity. Glass 12 was poured fresh, so evaporation is not the cause, and a specific anosmia is a stable trait, not something that develops within one session.',
    },
    {
      id: 'l5-physiology-of-flavor-q6',
      type: 'truefalse',
      context: `**Bar menu, house pour**
"Served over a large ice cube to open up the aroma."`,
      prompt: 'True or false: serving a whiskey over ice will usually make its aroma more intense than the same whiskey served at about 20 °C.',
      answer: false,
      explanation: 'Cold lowers the vapor pressure of volatile compounds, so less aroma reaches the headspace, and melting ice dilutes the spirit further. Ice can make a strong whiskey easier to drink, but it suppresses aroma, so the menu claim is wrong.',
    },
  ],
};
