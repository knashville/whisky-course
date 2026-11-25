export default {
  id: 'l5-congeners',
  title: 'Congeners: The Chemistry of Ferment and Still',
  summary:
    'The compound families that give new make its character: how yeast and bacteria form them, where each one falls in a spirit run, and how odor activity values separate the compounds you smell from the ones that are merely abundant.',
  minutes: 13,
  blocks: [
    {
      type: 'text',
      md: `A new make spirit is almost entirely ethanol and water. Everything else, typically a few grams per liter, is the **congeners**: higher alcohols, esters, aldehydes, acids, sulfur compounds and phenols. That small fraction carries nearly all the character. Two distilleries using the same barley can make spirits as different as a light, grassy Lowland malt and a heavy, meaty Speyside one, because their fermentations and stills leave different congeners behind.

Distillers report congeners in **grams per 100 liters of absolute alcohol** (g/100 L AA, also written g/hL AA). Dividing by the alcohol rather than by the liquid makes results comparable across strengths. Add water to a 70% new make and the congener-to-ethanol ratio stays the same, so the figure in g/100 L AA does not change.

This lesson names the families, explains how each forms, follows them through the still, and shows how to judge which ones actually reach your nose.`,
    },
    {
      type: 'text',
      md: `### Higher alcohols and the Ehrlich pathway

Higher alcohols (also called fusel alcohols) are usually the largest congener group by mass. Yeast makes most of them from amino acids by the **Ehrlich pathway**, in three steps:

1. **Transamination.** The yeast removes the amino group. Leucine becomes the keto acid α-ketoisocaproate.
2. **Decarboxylation.** The keto acid loses carbon dioxide and becomes an aldehyde one carbon shorter: 3-methylbutanal.
3. **Reduction.** The aldehyde is reduced to the alcohol: **3-methylbutan-1-ol**, better known as isoamyl alcohol. (If the aldehyde is oxidized instead, the product is a fusel acid, here isovaleric acid.)

Each amino acid gives its own alcohol. Leucine gives isoamyl alcohol, isoleucine gives **2-methylbutan-1-ol** (active amyl alcohol), valine gives **isobutanol** (2-methylpropan-1-ol), and phenylalanine gives **2-phenylethanol**, which smells of roses. **n-Propanol** forms by a related route from 2-oxobutanoate, an intermediate of threonine metabolism. The keto acids also arise from the yeast's own amino acid synthesis, so higher alcohols form even when the wort is short of free amino acids.

At typical levels higher alcohols give body and a warm, "spirity" weight. In excess they smell solvent-like and harsh.`,
    },
    {
      type: 'table',
      caption: 'The main congener families. Descriptors are typical; perception depends on concentration and matrix.',
      headers: ['Compound', 'Family', 'Typical descriptor', 'Main origin'],
      rows: [
        ['Isoamyl alcohol (3-methylbutan-1-ol)', 'Higher alcohol', 'Fusel, solvent; body at low levels', 'Yeast, from leucine'],
        ['2-Phenylethanol', 'Higher alcohol', 'Rose, honey', 'Yeast, from phenylalanine'],
        ['Ethyl acetate', 'Acetate ester', 'Pear and fruit when low; nail-polish solvent when high', 'Yeast; most abundant ester'],
        ['Isoamyl acetate', 'Acetate ester', 'Banana, pear drops', 'Yeast'],
        ['2-Phenylethyl acetate', 'Acetate ester', 'Rose, honey', 'Yeast'],
        ['Ethyl hexanoate', 'Ethyl ester', 'Green apple, aniseed', 'Yeast'],
        ['Ethyl octanoate', 'Ethyl ester', 'Pear, apricot', 'Yeast'],
        ['Ethyl decanoate', 'Ethyl ester', 'Waxy, floral', 'Yeast'],
        ['Ethyl dodecanoate, ethyl hexadecanoate', 'Long-chain ethyl esters', 'Little aroma; cause chill haze', 'Yeast lipids'],
        ['Acetaldehyde', 'Aldehyde', 'Pungent, green apple, grassy', 'Yeast; oxidation of ethanol'],
        ['1,1-Diethoxyethane', 'Acetal', 'Fruity, green, ethereal', 'Acetaldehyde plus ethanol'],
        ['Furfural', 'Aldehyde', 'Almond, bready, toasty', 'Heated sugars (wash still, especially direct-fired; toasted oak)'],
        ['Acetic, butyric, isovaleric acids', 'Short acids', 'Vinegar; rancid butter; sweaty', 'Yeast and bacteria'],
        ['Octanoic (caprylic) and decanoic (capric) acids', 'Fatty acids', 'Soapy, waxy, goaty', 'Yeast'],
      ],
    },
    {
      type: 'text',
      md: `### Esters, aldehydes and acids

Esters are the fruit in new make. Yeast builds two kinds with different enzymes:

- **Acetate esters** join acetyl-CoA to an alcohol. Ethanol gives **ethyl acetate**, isoamyl alcohol gives **isoamyl acetate** (banana) and 2-phenylethanol gives **2-phenylethyl acetate** (rose, honey). Ethyl acetate is the most abundant ester in whiskey.
- **Ethyl esters** join a fatty acid (as its acyl-CoA) to ethanol: **ethyl hexanoate** (green apple), **ethyl octanoate** (pear, apricot), **ethyl decanoate** (waxy). The long-chain members, **ethyl dodecanoate** and **ethyl hexadecanoate**, have little aroma but drop out of solution as a haze when a whiskey is cold or diluted below roughly 46% ABV.

Yeast strain, fermentation temperature and wort composition all shift the ester profile, which is why the same distillery can make a fruitier or a plainer spirit by changing its fermentation.

**Aldehydes.** Yeast makes **acetaldehyde** as the step just before ethanol, and some escapes. It is pungent and green. It reacts with two molecules of ethanol to form the acetal **1,1-diethoxyethane**, which is softer and fruity. **Furfural** comes from heating sugars: in new make from sugars and wash solids heated in the wash still (more where stills are direct-fired), and later from toasted oak.

**Acids.** Acetic acid (vinegar), butyric acid (rancid butter), isovaleric acid (sweaty feet) and the fatty acids caprylic and capric (soapy, waxy) come from yeast metabolism, and the short ones rise sharply when bacteria infect a fermentation.`,
    },
    {
      type: 'text',
      md: `### Sulfur, diacetyl, methanol and phenols

**Sulfur compounds** include some of the lowest-threshold congeners in spirit. Yeast releases **hydrogen sulfide** (H2S, rotten egg). Malt contributes **dimethyl sulfide** (DMS, cooked corn). **Dimethyl disulfide** (DMDS) and **dimethyl trisulfide** (DMTS) smell of cooked cabbage, onion and meat. Copper in the still binds sulfur compounds and removes much of them; char and evaporation in the cask remove more. A little sulfur in new make is part of some "heavy" or "meaty" house styles, which then rely on maturation to clean it up.

**Diacetyl** (2,3-butanedione) smells of butter and butterscotch. Yeast leaks a precursor, α-acetolactate, which turns into diacetyl, fastest when heated. Lactic acid bacteria also make diacetyl directly.

**Methanol** comes from pectin, a fruit cell-wall polymer whose methyl groups an enzyme splits off. Grain contains little pectin, so grain spirits are low in methanol. Fruit brandies are higher.

**Phenols** bring smoke, medicine and spice:

- **Guaiacol** and **4-methylguaiacol**: smoky. **Phenol** and the **cresols**: medicinal, tarry, iodine-like. All are abundant in peat smoke, so they arrive with peated malt.
- **4-Ethylphenol** and **4-ethylguaiacol**: smoky-spicy, medicinal and barnyard notes; found in peat smoke and also made by microbes from vinyl phenols.
- **4-Vinylguaiacol**: clove. It forms when an enzyme decarboxylates **ferulic acid**, which is bound in grain cell walls. Some yeast strains carry that enzyme (the "phenolic off-flavor" or POF trait), as do some lactic bacteria. Rye mashes can release a lot of ferulic acid, one source of rye's spicy reputation.`,
    },
    {
      type: 'callout',
      variant: 'myth',
      title: 'Myth: whiskey is full of methanol',
      md: `Methanol is not a by-product of yeast turning sugar into alcohol. It is split from pectin, and grain has very little. Grain whiskeys therefore carry far less methanol than spirits made from pectin-rich fruit, such as fruit brandies.`,
    },
    {
      type: 'text',
      md: `### Volatility depends on strength

A compound's boiling point is a poor guide to when it leaves the still. What matters is its volatility **relative to ethanol, at the strength of the liquid it is boiling from**.

- **Acetaldehyde** (boiling point about 20 °C) is more volatile than ethanol at every strength, so it always comes first. Ethyl acetate and the acetal follow close behind.
- **Isoamyl alcohol and the heavier esters, such as ethyl decanoate,** are more volatile than ethanol in dilute liquid, such as an 8% wash, so the wash still carries them into the low wines. In strong liquid they become *less* volatile than ethanol and hang back, so in a pot still with reflux the fusel alcohols lag behind the ethanol peak and rise as the run weakens. Level 6 shows how column distillers use the same effect.
- **Fatty acids, long-chain esters, furfural, 2-phenylethanol and phenols** concentrate late, in the feints. Peated-malt distillers who want more smoke in the spirit run the middle cut further into the weak end.

The cut points themselves belong to the still house. The point here is chemical: moving a cut changes which families the spirit keeps.`,
    },
    {
      type: 'table',
      caption: 'Where congener families concentrate in a pot-still spirit run (simplified)',
      headers: ['Part of the run', 'Distillate strength', 'Families that concentrate', 'Sensory effect'],
      rows: [
        ['Foreshots and heads', 'Highest', 'Acetaldehyde, ethyl acetate, acetal', 'Pungent, solvent, green apple'],
        ['Middle cut (heart)', 'High, falling', 'Ethanol; fruity esters such as ethyl hexanoate and isoamyl acetate; moderate higher alcohols', 'Clean, fruity, floral'],
        ['Late heart', 'Falling', 'Higher alcohols rising, 2-phenylethanol, ethyl decanoate', 'Heavier, oily, honeyed'],
        ['Feints', 'Low', 'Fatty acids, long-chain esters, furfural, phenols', 'Sweaty, leathery, cardboard; more smoke with peated malt'],
      ],
    },
    {
      type: 'text',
      md: `### Odor activity values

The most abundant compound is rarely the one you smell most. To rank compounds by likely impact, divide each concentration by its odor threshold, measured in the same liquid and the same units:

**Odor activity value (OAV) = concentration ÷ odor threshold**

An OAV above 1 means the compound is present above its threshold and probably contributes. The higher the OAV, the larger the likely contribution. In the worked example below, isoamyl alcohol is 160 times more concentrated than isoamyl acetate, yet the acetate has five times the OAV.

OAVs are a screening tool with three limits. Thresholds depend on the matrix and the method, so a threshold measured in water cannot be divided into a concentration measured at 40% ABV. Compounds interact: one can mask another, and several below threshold can add up to something you notice. And OAV says nothing about *what* a compound smells like in the mix. Labs confirm OAV rankings by sniffing the separated compounds and by rebuilding the aroma from pure chemicals.`,
    },
    {
      type: 'table',
      caption: 'Worked example: a mock GC table for a new make reduced to 20% ABV. Thresholds are illustrative teaching values for that same matrix.',
      headers: ['Compound', 'Concentration (mg/L)', 'Threshold (mg/L)', 'OAV (concentration ÷ threshold)'],
      rows: [
        ['Isoamyl alcohol', '240', '120', '240 ÷ 120 = 2'],
        ['Ethyl acetate', '90', '30', '90 ÷ 30 = 3'],
        ['Isoamyl acetate', '1.5', '0.15', '1.5 ÷ 0.15 = 10'],
        ['Ethyl hexanoate', '0.9', '0.06', '0.9 ÷ 0.06 = 15'],
        ['Furfural', '4.0', '20', '4.0 ÷ 20 = 0.2'],
        ['Guaiacol', '0.004', '0.01', '0.004 ÷ 0.01 = 0.4'],
      ],
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Ehrlich pathway', definition: 'The yeast route from an amino acid to a higher alcohol: transamination to a keto acid, decarboxylation to an aldehyde, then reduction to the alcohol.' },
        { term: 'Acetate ester', definition: 'An ester formed by yeast joining acetyl-CoA to an alcohol, such as ethyl acetate or isoamyl acetate (banana).' },
        { term: 'Ethyl ester', definition: 'An ester formed by yeast joining a fatty acid to ethanol, such as ethyl hexanoate (green apple). Long-chain ethyl esters cause chill haze.' },
        { term: 'Acetal (1,1-diethoxyethane)', definition: 'The compound formed when acetaldehyde reacts with two molecules of ethanol. It is softer and fruitier than acetaldehyde.' },
        { term: 'Volatile phenols', definition: 'Aromatic compounds such as guaiacol, cresols and 4-vinylguaiacol that give smoky, medicinal or clove notes, mainly from peat smoke, grain ferulic acid and oak.' },
        { term: 'Relative volatility', definition: 'How readily a compound vaporizes compared with ethanol at a given liquid strength. It decides where a congener falls in a spirit run.' },
        { term: 'Odor activity value (OAV)', definition: 'A compound’s concentration divided by its odor threshold in the same matrix. Values above 1 suggest the compound contributes to aroma.' },
      ],
    },
    {
      type: 'tasting',
      title: 'Kitchen-proxy aroma kit (no alcohol needed)',
      md: `Put each item in a small lidded jar or covered glass, ten minutes before you start. Have a helper number the jars at random. Nose each one blind and write down the compound you think it stands for, then check against the list. Rest 30 seconds between jars. If you want a spirit comparison afterwards, nose an unpeated malt for the fruit and floral notes and a peated one for the phenols; tasting is optional.`,
      flight: [
        { pour: 'Ripe banana, mashed', lookFor: 'Isoamyl acetate: banana and pear drops, the classic estery-ferment note.' },
        { pour: 'Freshly cut green apple', lookFor: 'The descriptor for ethyl hexanoate, and in sharper form acetaldehyde.' },
        { pour: 'Rose petals or rose water', lookFor: '2-Phenylethanol and 2-phenylethyl acetate: rose and honey.' },
        { pour: 'Whole cloves, lightly crushed', lookFor: 'Clove, the note shared by 4-vinylguaiacol (from grain ferulic acid) and eugenol (from oak).' },
        { pour: 'Unsalted butter, softened', lookFor: 'Diacetyl: butter and butterscotch.' },
        { pour: 'Smoked black tea (lapsang souchong), dry leaves', lookFor: 'Guaiacol and 4-methylguaiacol: wood smoke, the phenols of peat.' },
      ],
    },
    {
      type: 'text',
      md: `### Recap

Congeners are a tiny fraction of new make and nearly all of its character. Higher alcohols come from amino acids by the Ehrlich pathway (leucine to isoamyl alcohol, isoleucine to 2-methylbutan-1-ol, valine to isobutanol). Acetate esters and ethyl esters bring fruit; long-chain esters bring haze. Acetaldehyde, its acetal and furfural are the key aldehydes; short and fatty acids add sour, sweaty and soapy notes. Sulfur compounds have tiny thresholds and copper removes them; methanol is low in grain spirits; phenols from peat and ferulic acid give smoke, medicine and clove. In the still, volatility depends on strength: acetaldehyde first, fusel alcohols and heavier esters lagging in strong liquid, acids, phenols and furfural late in the feints. Odor activity values rank what you smell, with care over matrix and interactions.`,
    },
  ],
  quiz: [
    {
      id: 'l5-congeners-q1',
      type: 'match',
      prompt: 'Match each congener to its typical aroma descriptor.',
      pairs: [
        { left: 'Isoamyl acetate', right: 'Banana, pear drops' },
        { left: 'Ethyl hexanoate', right: 'Green apple, aniseed' },
        { left: '2-Phenylethyl acetate', right: 'Rose, honey' },
        { left: 'Diacetyl', right: 'Butter, butterscotch' },
        { left: '4-Vinylguaiacol', right: 'Clove' },
        { left: 'Isovaleric acid', right: 'Sweaty feet' },
      ],
      explanation: 'These are the reference descriptors used in panel training: 2-phenylethyl acetate is the rose-honey ester, diacetyl the butter compound, 4-vinylguaiacol the clove phenol and isovaleric acid the sweaty acid. The two fruity esters are the easy pair to swap. Banana and pear drops belong to isoamyl acetate, an acetate ester, while green apple belongs to ethyl hexanoate, an ethyl ester.',
    },
    {
      id: 'l5-congeners-q2',
      type: 'numeric',
      context: `**GC report: new make, reduced to 20% ABV** (thresholds measured in the same matrix)

- Isoamyl alcohol: 300 mg/L; threshold 150 mg/L
- Isoamyl acetate: 2.4 mg/L; threshold 0.12 mg/L
- Ethyl hexanoate: 0.84 mg/L; threshold 0.07 mg/L
- Furfural: 5.0 mg/L; threshold 25 mg/L
- Ethyl decanoate: 2.0 mg/L; threshold 1.0 mg/L`,
      prompt: 'What is the odor activity value of ethyl hexanoate in this sample? Give the exact value.',
      answer: 12,
      tolerance: 0.05,
      explanation: 'OAV = concentration ÷ threshold = 0.84 ÷ 0.07 = 12. The compound is present at twelve times its threshold, so it very likely contributes green-apple fruit to the aroma. Dividing the other way (0.07 ÷ 0.84 = 0.083) is the usual slip, and it would wrongly put the compound below threshold.',
    },
    {
      id: 'l5-congeners-q3',
      type: 'single',
      context: `**GC report: new make, reduced to 20% ABV** (thresholds measured in the same matrix)

- Isoamyl alcohol: 300 mg/L; threshold 150 mg/L
- Isoamyl acetate: 2.4 mg/L; threshold 0.12 mg/L
- Furfural: 5.0 mg/L; threshold 25 mg/L
- Ethyl decanoate: 2.0 mg/L; threshold 1.0 mg/L`,
      prompt: 'Which conclusion does this data support?',
      options: [
        'Isoamyl acetate likely contributes more to the aroma than isoamyl alcohol, despite being under 1% of its concentration.',
        'Isoamyl alcohol dominates the aroma because it is by far the most concentrated compound in the sample.',
        'Furfural is a major aroma driver here because it is present at a higher concentration than either ester.',
        'Ethyl decanoate cannot be contributing because its concentration is below that of furfural.',
      ],
      answer: 0,
      explanation: 'Isoamyl acetate has an OAV of 2.4 ÷ 0.12 = 20, against 2 for isoamyl alcohol, though it is only 0.8% of the alcohol’s concentration. Concentration alone misleads: furfural’s OAV is 0.2, below threshold, while ethyl decanoate’s is 2.',
    },
    {
      id: 'l5-congeners-q4',
      type: 'order',
      prompt: 'Put the Ehrlich pathway from leucine to isoamyl alcohol in order, first to last.',
      items: [
        'Leucine, taken up by the yeast',
        'α-Ketoisocaproate, after transamination',
        '3-Methylbutanal, after decarboxylation',
        '3-Methylbutan-1-ol, after reduction',
      ],
      explanation: 'The yeast first removes the amino group (transamination) to make the keto acid, then removes carbon dioxide (decarboxylation) to make an aldehyde one carbon shorter, then reduces the aldehyde to the higher alcohol, isoamyl alcohol. Putting decarboxylation first is the usual slip: in this pathway it acts on the keto acid, which exists only once transamination has happened.',
    },
    {
      id: 'l5-congeners-q5',
      type: 'single',
      context: `**QC comparison: peated new make, batch B vs batch A** (same malt, same fermentation, g/100 L AA)

- Acetaldehyde: A 12, B 12
- Ethyl acetate: A 40, B 41
- Octanoic and decanoic acids: A 6, B 13
- Ethyl hexadecanoate: A 2, B 5
- Furfural: A 1.5, B 4.2
- Guaiacol and cresols: A 0.8, B 2.0`,
      prompt: 'What production change best explains batch B?',
      options: [
        'The cut from heart to feints was made later in the spirit run.',
        'The foreshots were cut shorter, so more heads entered the spirit.',
        'The fermentation was run cooler with a different yeast strain.',
        'The spirit still was given more copper contact.',
      ],
      answer: 0,
      explanation: 'Every compound that rose (fatty acids, long-chain esters, furfural, phenols) concentrates late, in the feints, while the head compounds acetaldehyde and ethyl acetate are unchanged. A shorter foreshots cut would raise those head compounds, a fermentation change would shift esters and alcohols, and copper mainly lowers sulfur.',
    },
    {
      id: 'l5-congeners-q6',
      type: 'multi',
      context: `**New make panel note, rye-heavy mash**
"Clove and baking spice. Butterscotch. A faint cooked-cabbage note on the nose."`,
      prompt: 'Which formation routes could explain the notes in this description? Select all that apply.',
      options: [
        'An enzyme in the yeast or bacteria decarboxylating ferulic acid to 4-vinylguaiacol',
        'Diacetyl formed from yeast α-acetolactate or by lactic acid bacteria',
        'Sulfur compounds such as DMTS that copper in the still did not fully remove',
        'Methanol released from pectin in the grain',
        'Ethyl hexadecanoate formed from yeast lipids',
      ],
      answer: [0, 1, 2],
      explanation: 'Clove is the 4-vinylguaiacol note from ferulic acid, which rye mashes release; butterscotch is diacetyl; cooked cabbage is a sulfide such as DMTS left by too little copper contact. Methanol has no clove or butter aroma and grain has little pectin, and ethyl hexadecanoate has little aroma at all.',
    },
  ],
};
