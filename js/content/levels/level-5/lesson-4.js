export default {
  id: 'l5-faults-and-qc',
  title: 'Faults, Off-Notes and Quality Control',
  summary:
    'How to recognize the common whiskey faults, trace each to its cause in the distillery, warehouse or bottle, and the lab and panel methods producers use to catch them before a batch ships.',
  minutes: 12,
  blocks: [
    {
      type: 'text',
      md: `A fault is a note that should not be there, or should not be there at that level. The line is set by concentration and by the house style. A trace of meaty sulfur is part of some heavy new-make styles; the same compound at three times the level is a fault. A whiff of feints can add weight; a lot of it smells of sweat and cardboard.

Diagnosis runs backwards from the glass: **descriptor, then compound, then cause, then fix**. A blender who can say "cooked cabbage, so DMTS, so too little copper contact" can talk to the still house. One who can only say "it smells off" cannot. This lesson builds that chain for the faults you will meet most often, then covers the instruments and panels that catch them.`,
    },
    {
      type: 'text',
      md: `### Three kinds of sulfur

Sulfur faults all smell "sulfury", but they come from different places and need different fixes.

- **Struck match or rubber.** Associated with wine casks fumigated with burning sulfur candles. The residue passes to the spirit during maturation. One affected cask can taint a whole vatting, so blenders nose casks individually before they are combined.
- **Cooked cabbage, onion, meaty.** **Dimethyl trisulfide** (DMTS) and related compounds from the fermentation that the still failed to remove. The usual cause is **too little copper contact**: worm-tub condensers (which give less copper contact than shell-and-tube condensers), stills run hard, copper surfaces that are fouled or exhausted from running without rests, or copper parts replaced with stainless steel. Many distillers rest stills open to the air between runs so the copper surface regenerates.
- **Rotten egg.** **Hydrogen sulfide** (H2S), produced by stressed yeast, often short of nitrogen. It points back to the fermentation.`,
    },
    {
      type: 'text',
      md: `### Feints, microbes, must and metal

**Excess feints** smell sweaty, leathery, of tobacco or of wet cardboard. The fatty acids, long-chain esters and heavy compounds of the late run have reached the spirit, because the cut to feints came too late or because the feints recycled into the next charge have built up and overloaded it. Cutting earlier fixes a late cut. An overloaded recycle needs a smaller share of feints in each charge, with part of the surplus drawn off for separate redistillation; a climbing feints receiver level is the warning sign.

**Microbial faults** come from infected fermentations. **Acetic acid** bacteria give vinegar; **butyric** acid bacteria give rancid butter. Poor washback hygiene and slow turnaround are the usual causes.

**Musty or corky** notes (damp cellar, wet cardboard, a muted nose) come from **haloanisoles**: **TCA** (2,4,6-trichloroanisole) and **TBA** (2,4,6-tribromoanisole). Molds make them from chlorophenol and bromophenol wood treatments, so the sources are corks, treated pallets and warehouse timbers. They act at **nanograms per liter**, and besides adding must they flatten the rest of the aroma.

**Metallic or inky** notes with a dark, **black haze** mean **iron** has reacted with oak tannins, the same chemistry as iron-gall ink. Sources are iron-bearing water and rusty or unsuitable equipment.

**Soapy or waxy** notes come from excess fatty acids (caprylic, capric). **Flat**, tired whiskey is usually an open bottle that has spent months with a growing air space: aroma escapes and slow oxidation dulls what remains.`,
    },
    {
      type: 'compare',
      title: 'Three hazes and how to tell them apart',
      columns: [
        { heading: 'Chill haze', points: ['Long-chain ethyl esters and fatty acids', 'Appears when cold or below roughly 46% ABV (rule of thumb)', 'Usually clears when warmed', 'Managed by chill filtration or bottling at a higher strength'] },
        { heading: 'Mineral haze', points: ['Calcium and magnesium salts', 'Hard water used to reduce the spirit to bottling strength', 'Does not clear on warming', 'Prevented with demineralized or reverse-osmosis water'] },
        { heading: 'Iron haze', points: ['Iron reacting with oak tannins', 'Dark, black or inky; metallic taste', 'Does not clear on warming', 'Prevented by keeping iron out of water and equipment'] },
      ],
    },
    {
      type: 'callout',
      variant: 'myth',
      title: 'Myth: a cloudy whiskey has gone bad',
      md: `A non-chill-filtered whiskey that clouds in a cold room or with water is showing chill haze: harmless, reversible and a sign that the long-chain esters were left in. Haze that will not clear on warming deserves a closer look, because mineral and iron hazes point to a production problem.`,
    },
    {
      type: 'text',
      md: `### Ethyl carbamate: a contaminant you cannot smell

**Ethyl carbamate** (urethane) is a probable human carcinogen that can form in grain and fruit spirits. It has no useful aroma, so only a lab can find it. In malt whisky the chain runs from the barley:

1. Barley makes a cyanogenic glycoside, **epiheterodendrin** (EPH).
2. In fermentation, a yeast enzyme releases isobutyraldehyde cyanohydrin from it, which breaks down to cyanide.
3. Cyanide is volatile and distills over. Copper catalyzes its oxidation to **cyanate**.
4. Cyanate reacts with ethanol to form ethyl carbamate, much of it in the spirit after distillation.

The main control is barley: plant breeders have produced varieties that make little or no EPH, often called non-GN (non-glycosidic-nitrile) barleys. Distillers add process controls in the still house.`,
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'Ethyl carbamate limits',
      md: `- **Canada:** maximum level of **150 µg/L** for distilled spirits, with a higher level of 400 µg/L for fruit brandies (Health Canada, List of Contaminants and Other Adulterating Substances in Foods).
- **United States:** no regulatory limit. A **voluntary target of 125 µg/L** for whiskey was agreed between the distillers' trade body (DISCUS) and the FDA in the late 1980s.

A µg/L is a part per billion. Recheck current figures before relying on them for compliance.`,
    },
    {
      type: 'text',
      md: `### Quality control: instruments and panels

Lab methods separate and measure; panels decide whether it smells right. A quality system needs both.

Gas chromatography (GC) vaporizes a sample and separates its volatile compounds in a long column. What sits at the end of the column decides what you learn. A **flame ionization detector (FID)** quantifies the major congeners. A **mass spectrometer (MS)** identifies compounds and measures trace ones, such as haloanisoles. In **GC-olfactometry (GC-O)**, a trained person sniffs the column outlet and marks the moments an odor appears, which links a smell to a peak.

Sensory panels sign off at three points: **new make** against the spirit specification, often daily; **casks** at filling and again before vatting, to pull out sulfury or musty casks; and the **finished batch** against a standard before bottling.`,
    },
    {
      type: 'table',
      caption: 'Common QC methods in a distillery lab',
      headers: ['Method', 'What it measures', 'Typical use'],
      rows: [
        ['GC-FID', 'Major volatile congeners in g/100 L AA', 'Acetaldehyde, ethyl acetate, methanol and higher alcohols in new make'],
        ['GC-MS', 'Identity and level of trace volatiles', 'Haloanisoles at ng/L, sulfur compounds, ethyl carbamate'],
        ['GC-olfactometry', 'Which separated compounds have an odor', 'Finding the compound behind a new off-note'],
        ['HPLC', 'Less volatile compounds in solution', 'Peat phenols; wood aldehydes such as vanillin and syringaldehyde; furfural and 5-HMF'],
        ['Density meter', 'Density, converted to ABV', 'Strength at filling, reduction and bottling (aged samples are often distilled first so dissolved solids do not distort the reading)'],
        ['Spectrophotometer', 'Light absorbance', 'Color consistency between batches'],
        ['Sensory panel', 'Aroma, taste, faults and match to standard', 'Sign-off of new make, casks and batches'],
      ],
    },
    {
      type: 'table',
      caption: 'Eight diagnosis cards: descriptor to cause to fix',
      headers: ['Descriptor', 'Likely compound', 'Likely cause', 'Fix or prevention'],
      rows: [
        ['Struck match, rubber', 'Sulfur residues', 'Sulfur-fumigated wine casks', 'Nose casks before vatting; reject affected casks'],
        ['Cooked cabbage, onion, meaty', 'DMTS and other sulfides', 'Too little copper contact in the still', 'Restore copper; slower runs; rest stills to regenerate copper'],
        ['Rotten egg', 'Hydrogen sulfide', 'Stressed, nitrogen-short yeast', 'Healthy fermentation and yeast nutrition'],
        ['Sweaty, leathery, tobacco, cardboard', 'Fatty acids and heavy late-run compounds', 'Late feints cut; overloaded feints recycle', 'Earlier cut; less feints per charge and draw off the surplus'],
        ['Vinegar, rancid butter', 'Acetic and butyric acids', 'Bacterial infection of the fermentation', 'Washback hygiene; faster turnaround'],
        ['Musty, damp cellar, muted', 'TCA, TBA', 'Halophenol-treated wood, pallets or corks', 'Remove treated wood; screen closures'],
        ['Metallic, inky, black haze', 'Iron-tannin complexes', 'Iron in water or equipment', 'Low-iron water; suitable equipment'],
        ['White haze that stays when warmed', 'Calcium and magnesium salts', 'Hard reduction water', 'Demineralized or reverse-osmosis water'],
      ],
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Haloanisole', definition: 'A musty, corky compound such as TCA or TBA, made by molds from chlorinated or brominated phenols and detectable at nanograms per liter.' },
        { term: 'Ethyl carbamate', definition: 'A probable human carcinogen that forms in spirits when cyanate reacts with ethanol. It is odorless at the levels found, so it is controlled by lab testing.' },
        { term: 'Epiheterodendrin (EPH)', definition: 'A cyanogenic glycoside in barley. In fermentation it yields isobutyraldehyde cyanohydrin, which breaks down to cyanide that distills over; it is the main precursor of ethyl carbamate in malt whisky.' },
        { term: 'Mineral haze', definition: 'A cloudiness from calcium and magnesium salts introduced with hard reduction water. Unlike chill haze, it does not clear on warming.' },
        { term: 'Iron-tannin haze', definition: 'A dark, inky haze with a metallic taste, formed when iron from water or equipment reacts with oak tannins.' },
        { term: 'GC-FID', definition: 'Gas chromatography with a flame ionization detector, the standard lab method for quantifying the major volatile congeners in a spirit.' },
        { term: 'GC-olfactometry (GC-O)', definition: 'Gas chromatography in which a trained assessor sniffs the column outlet to find which separated compounds carry an odor.' },
      ],
    },
    {
      type: 'callout',
      variant: 'warning',
      title: 'Safety for the fault kit',
      md: `Spiked samples are for **nosing only**. Never drink them. Spirit vapor is flammable: strike the match well away from the glass, blow it out, and only then bring the smoking match near the rim. Work with the base whiskey reduced to about 20% ABV, which lowers the fire risk and makes faults easier to pick out.`,
    },
    {
      type: 'tasting',
      title: 'Household fault flight (nose only)',
      md: `Pour 10 mL of a light, inexpensive blended Scotch or Canadian whisky into each of four glasses and add 15 mL of water to each (20% ABV for a 50% base, 16% for a 40% base; use the Adding water tool for your strength). Keep one glass clean as the control. Prepare the others as below, have a helper code and shuffle them, then nose each against the control and name the fault, the compound family and a likely production cause. A tea-and-water base works for a fully alcohol-free version.`,
      flight: [
        { pour: 'Control: the reduced base, unspiked', lookFor: 'Your reference. Return to it between glasses to reset.' },
        { pour: 'Base plus one drop of malt vinegar', lookFor: 'Sharp, sour vinegar: acetic acid, the marker of an infected fermentation.' },
        { pour: 'Base plus one teaspoon of water that has steeped with wet cardboard overnight', lookFor: 'Damp cardboard and a muted nose: the effect of a musty, corky taint.' },
        { pour: 'Base glass held near a just-extinguished match', lookFor: 'Struck match: the sulfur note associated with fumigated wine casks.' },
      ],
    },
    {
      type: 'text',
      md: `### Recap

A fault is defined by level and by house style, and diagnosis runs from descriptor to compound to cause to fix. Struck match points to fumigated casks, cooked cabbage and meat to DMTS and too little copper, rotten egg to stressed yeast. Feints faults smell sweaty and leathery; vinegar and rancid butter mean infection; musty notes are haloanisoles at ng/L; metallic notes and black haze mean iron. Chill haze clears on warming; mineral and iron hazes do not. Ethyl carbamate forms from barley EPH via cyanide and cyanate, with a Canadian maximum of 150 µg/L for distilled spirits and a US voluntary target of 125 µg/L for whiskey. GC-FID, GC-MS, GC-O, HPLC, density meters and spectrophotometers measure; trained panels sign off new make, casks and batches.`,
    },
  ],
  quiz: [
    {
      id: 'l5-faults-and-qc-q1',
      type: 'single',
      context: `**Still-house log**
To save cost, the spirit still's copper shell-and-tube condenser was replaced with a stainless steel one. Since then, the panel describes the new make as "cooked cabbage, onion, meaty". Fermentation records are unchanged.`,
      prompt: 'What is the most likely cause of the new note?',
      options: [
        'More DMTS and related sulfides, because the spirit vapor now has less copper contact',
        'Haloanisoles leaching from the gaskets of the new condenser',
        'Hydrogen sulfide from a bacterial infection in the washbacks',
        'Iron from the stainless steel reacting with tannins in the new make',
      ],
      answer: 0,
      explanation: 'Copper removes sulfur compounds such as DMTS, which smell of cooked cabbage, onion and meat. Removing a copper condenser cuts that contact. Haloanisoles smell musty, fermentation is unchanged, and new make has not yet met oak tannins.',
    },
    {
      id: 'l5-faults-and-qc-q2',
      type: 'single',
      context: `**Customer complaints, three products, same bottling hall**
"Smells of a damp cellar." "Like wet cardboard." "The nose seems dull compared with the last bottle."
The hall recently moved into an old building with original timber racking, treated decades ago with a wood preservative.
All three bottles were bought within the past month and opened within days of purchase.`,
      prompt: 'Which diagnosis best fits?',
      options: [
        'Haloanisole contamination such as TCA or TBA, from treated wood or closures',
        'Excess feints from a cut made too late in the spirit run',
        'Oxidation in bottles left open for several months',
        'Mineral haze from hard water used for reduction',
      ],
      answer: 0,
      explanation: 'Damp cellar, wet cardboard and a muted nose across several products point to haloanisoles, which molds make from halophenol wood treatments. A late feints cut would affect one spirit and smell sweaty or leathery. Oxidation in a long-open bottle dulls the nose without adding a musty note, and these bottles were opened only recently; mineral haze is visual.',
    },
    {
      id: 'l5-faults-and-qc-q3',
      type: 'match',
      prompt: 'Match each fault to its most likely production cause.',
      pairs: [
        { left: 'Struck match, rubber', right: 'Wine casks fumigated with sulfur candles' },
        { left: 'Sweaty, leathery, tobacco', right: 'Cut to feints made too late' },
        { left: 'Vinegar', right: 'Acetic acid bacteria in the fermentation' },
        { left: 'Rotten egg', right: 'Nitrogen-stressed yeast making hydrogen sulfide' },
        { left: 'Black, inky haze', right: 'Iron reacting with oak tannins' },
        { left: 'White haze that stays when warmed', right: 'Hard water used for reduction' },
      ],
      explanation: 'Each descriptor points to a compound and a place in the process: fumigation residues from casks, feints compounds from the still, acetic acid from infection, H2S from stressed yeast, iron-tannin complexes, and calcium and magnesium salts from hard water.',
    },
    {
      id: 'l5-faults-and-qc-q4',
      type: 'numeric',
      context: `**Lab certificate**
Product: single malt for export to Canada
Ethyl carbamate: 180 µg/L`,
      prompt: 'By what percentage does this result exceed Canada’s maximum level for distilled spirits? Round to the nearest whole percent.',
      answer: 20,
      tolerance: 0.5,
      unit: '%',
      explanation: 'Canada’s maximum for distilled spirits is 150 µg/L. The excess is 180 − 150 = 30 µg/L, and 30 ÷ 150 = 0.20, so the result is 20% over the limit. It is also above the US voluntary target of 125 µg/L.',
    },
    {
      id: 'l5-faults-and-qc-q5',
      type: 'multi',
      prompt: 'Which pairings of QC method and use are correct? Select all that apply.',
      options: [
        'GC-FID to quantify acetaldehyde, ethyl acetate and higher alcohols in new make',
        'GC-olfactometry to find which separated compound carries a new off-note',
        'HPLC to measure vanillin, syringaldehyde and peat phenols',
        'A density meter to check color consistency between batches',
        'A spectrophotometer to measure the ABV of a finished whiskey',
      ],
      answer: [0, 1, 2],
      explanation: 'GC-FID quantifies major volatiles, GC-O links odors to peaks, and HPLC handles less volatile compounds such as wood aldehydes and phenols. A density meter measures density for ABV, and a spectrophotometer measures color, so the last two pairings are swapped.',
    },
    {
      id: 'l5-faults-and-qc-q6',
      type: 'single',
      context: `**Retailer report**
A non-chill-filtered whiskey bottled at 43% ABV turned cloudy after a week in a cold shop window. A bottle brought into the back room was clear again by the next day.`,
      prompt: 'What is the haze, and what does it indicate?',
      options: [
        'Chill haze from long-chain esters; harmless and reversible',
        'Mineral haze from hard reduction water; a production fault',
        'Iron haze from contaminated equipment; a production fault',
        'Microbial growth in the bottle; the whiskey has spoiled',
      ],
      answer: 0,
      explanation: 'Haze that forms in the cold below about 46% ABV and clears on warming is chill haze from long-chain esters. Mineral and iron hazes do not clear on warming, and microbes cannot grow at 43% ABV.',
    },
  ],
};
