export default {
  id: 'l5-wood-chemistry',
  title: 'Wood Chemistry and Maturation Science',
  summary:
    'What oak is made of, how seasoning, toasting and charring turn its polymers into flavor, the three ways a cask changes spirit, and how entry strength and cask size shift the result.',
  minutes: 11,
  blocks: [
    {
      type: 'text',
      md: `In most matured whiskeys, the cask supplies a large share of the aroma and nearly all the color. Saying "oak gives vanilla" is true but too coarse to diagnose anything. To read a whiskey the way a blender does, you need to know which part of the wood each note comes from, what heat does to that part, and which reactions keep running inside a closed cask for years.

This lesson works through the wood from the cell wall out: its polymers and extractives, the species differences, seasoning and toasting chemistry, the char layer, the three maturation mechanisms, and the arithmetic of entry strength and cask size.`,
    },
    {
      type: 'table',
      caption: 'Approximate composition of oak heartwood. Published figures vary by species, tree and analytical method.',
      headers: ['Component', 'Approximate share', 'What it is', 'What it gives the spirit'],
      rows: [
        ['Cellulose', 'About 40-45%', 'Long glucose chains, the structural fiber', 'Little flavor directly; it stays largely intact'],
        ['Hemicellulose', 'About 20-25%', 'Shorter, branched sugar polymers', 'Wood sugars; on heating, furans and caramel-like compounds'],
        ['Lignin', 'About 25-30%', 'A phenolic polymer that binds the fibers', 'Vanillin, syringaldehyde and smoky or spicy phenols'],
        ['Extractives', 'Roughly 5-10%', 'Small molecules: ellagitannins, lactones, phenolic acids', 'Tannin, coconut and wood-spice notes, oxidation catalysts'],
      ],
    },
    {
      type: 'text',
      md: `### Species: lactones versus tannins

The extractives differ sharply by species.

- **American white oak (*Quercus alba*)** is rich in **whisky lactone** (β-methyl-γ-octalactone) and relatively low in ellagitannins. Coconut and fresh-sawn wood are its signature.
- **European pedunculate oak (*Q. robur*)** is high in **ellagitannins**, mainly **vescalagin** and **castalagin**. These hydrolysable tannins give grip and astringency, and they take part in oxidation. Lactones are low.
- **Sessile oak (*Q. petraea*)** is usually finer-grained and more aromatic than *Q. robur*, with more lactone and eugenol and less tannin.

Whisky lactone occurs in oak as two isomers, **cis** and **trans** (the molecule has four stereoisomers, but oak makes one form of each). The cis form is several times more potent than the trans form: its published odor thresholds are several times lower, and the exact ratio depends on the study and the liquid tested. American oak carries a high proportion of cis-lactone, which is why it smells so strongly of coconut.`,
    },
    {
      type: 'text',
      md: `### Seasoning and toasting

**Seasoning.** Staves are stacked outdoors to dry, at the top end for about **18-36 months**, though many staves get less. Rain leaches out some of the harsher, bitter tannins, and fungi and enzymes in the weathering wood change its extractives. Kiln drying removes water much faster but skips that biological stage, so a kiln-dried stave can give a more bitter, raw-wood result.

**Toasting** heats the inside of the cask, roughly **150-230 °C** at the wood surface depending on the cooperage. Each polymer breaks down differently:

- **Hemicellulose** sugars degrade to **furfural** (from five-carbon sugars), **5-methylfurfural**, **5-hydroxymethylfurfural** (5-HMF, from six-carbon sugars), and the caramel-smelling **maltol** and **cyclotene**.
- **Lignin** breaks into **coniferaldehyde**, which goes on to **vanillin**, and **sinapaldehyde**, which goes on to **syringaldehyde**. Heavy toast also releases the smoky and spicy phenols **guaiacol**, **4-methylguaiacol** and **eugenol** (clove).
- **Lactones** rise with light-to-medium toast, then fall as heavier toast destroys them.`,
    },
    {
      type: 'compare',
      title: 'What heat does to each part of the wood',
      columns: [
        { heading: 'Hemicellulose', points: ['Furfural, 5-methylfurfural, 5-HMF', 'Maltol and cyclotene', 'Toasted bread, almond, caramel'] },
        { heading: 'Lignin', points: ['Coniferaldehyde, then vanillin', 'Sinapaldehyde, then syringaldehyde', 'Heavy toast: guaiacol, 4-methylguaiacol, eugenol'] },
        { heading: 'Lactones', points: ['Peak at light to medium toast', 'Destroyed by heavy toast', 'Coconut, fresh wood'] },
      ],
    },
    {
      type: 'text',
      md: `### Char and the three mechanisms

Charring burns the inner surface into a layer of porous carbon. That carbon works like activated charcoal: it **adsorbs sulfur compounds** such as DMS and DMTS. Heat cracks the char, so the spirit also reaches the toasted wood beneath it, the "red layer" rich in the caramelized sugars and lignin aldehydes just described.

Each fill uses up part of the wood. A first-fill cask gives its richest extraction. With each later fill fewer extractives remain and the char adsorbs less, so a well-used refill cask leans on slow oxidation and interaction with the spirit, and the spirit's own character shows through. That is why the same new make tastes so different from a first-fill and a tired refill cask after the same number of years.

Maturation chemistry falls into three mechanisms:

1. **Additive**: extraction of wood compounds into the spirit (lactones, vanillin, sugars, tannins, color).
2. **Subtractive**: removal of compounds, by adsorption on the char and by evaporation of the most volatile sulfur compounds through the wood.
3. **Interactive**: reactions among spirit and wood compounds inside the cask, including oxidation, esterification, acetal formation and **ethanolysis** of lignin, in which ethanol slowly breaks lignin into aromatic aldehydes such as vanillin throughout maturation.`,
    },
    {
      type: 'diagram',
      name: 'char-layers',
    },
    {
      type: 'text',
      md: `### The oxidation chain

A cask breathes. Oxygen diffuses in through the staves and the bung, and it drives a slow chain of reactions:

1. Oxygen oxidizes phenolic compounds from the wood, and that oxidation releases **hydrogen peroxide**.
2. Catalyzed by trace **iron or copper**, the peroxide oxidizes ethanol to **acetaldehyde**. This linked pair of reactions is called coupled oxidation.
3. Acetaldehyde oxidizes further to **acetic acid**, and also reacts with ethanol to form the acetal.
4. Acetic acid slowly esterifies with ethanol to form **ethyl acetate**.

This is why acetic acid and ethyl acetate rise with age, and why the oxygen supply, set by cask size, stave thickness and warehouse conditions, shapes the result as much as the wood itself.

### Entry strength

The strength at filling decides which extractives dissolve best. A **lower** strength favors water-soluble compounds such as wood sugars and some tannins. A **higher** strength favors ethanol-soluble compounds such as the lignin aldehydes and lactones. Lower entry also means more liquid per unit of alcohol, which costs more casks and warehouse space.`,
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'Entry strength: law and custom',
      md: `For bourbon, rye, wheat, malt and rye malt whisky, and for corn whisky that is stored in oak, US law caps the strength at which spirit goes into the barrel at **125 proof (62.5% ABV)** (27 CFR 5.143). Other US types, such as light whisky, have no entry-proof limit. The Scotch Whisky Regulations 2009 set no filling strength; **63.5% ABV** is a common industry choice, and some distilleries fill higher or lower.`,
    },
    {
      type: 'text',
      md: `### Cask size and SA/V

For casks of the same shape, the internal surface area scales with V^2/3^ while the volume scales with V, so the **surface-area-to-volume ratio scales as V^-1/3^**. Halving the volume raises the wood contact per liter by the cube root of two, about 1.26 times.

Smaller casks extract faster because each liter touches more wood. Oxidation and esterification are slow, time-dependent reactions and do not keep pace with the faster extraction. A young spirit from a very small cask can therefore taste woody and tannic while still showing raw new-make notes. The model assumes geometric similarity; real casks differ in shape, stave thickness and char, so treat it as a guide.

**Wine casks.** Sherry and other wine casks bring wine soaked into the staves, which adds dried fruit, nutty and tannic notes, along with color. Wine casks have long been sterilized by burning **sulfur candles** inside them; residues from that fumigation are a likely source of the struck-match or rubbery notes some sherried whiskies show.`,
    },
    {
      type: 'table',
      caption: 'Worked example: SA/V relative to a 200 L barrel is the cube root of (200 ÷ V), assuming the same cask shape',
      headers: ['Cask volume', 'Calculation', 'SA/V relative to 200 L', 'Effect on extraction rate'],
      rows: [
        ['50 L', '(200 ÷ 50)^1/3^ = 4^1/3^', 'About 1.59x', 'Much faster'],
        ['125 L', '(200 ÷ 125)^1/3^ = 1.6^1/3^', 'About 1.17x', 'Somewhat faster'],
        ['200 L', '(200 ÷ 200)^1/3^ = 1', '1.00x (reference)', 'Reference'],
        ['500 L', '(200 ÷ 500)^1/3^ = 0.4^1/3^', 'About 0.74x', 'Slower'],
      ],
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Ellagitannins', definition: 'Hydrolysable oak tannins, chiefly vescalagin and castalagin, that give astringency and take part in oxidation. They are highest in European Quercus robur.' },
        { term: 'Whisky lactone', definition: 'β-Methyl-γ-octalactone, the oak compound that smells of coconut. Its cis isomer is several times more potent than the trans and is abundant in American white oak.' },
        { term: 'Lignin', definition: 'The phenolic polymer that binds wood fibers. Heat and ethanol break it into aldehydes such as vanillin and syringaldehyde and into smoky phenols.' },
        { term: 'Hemicellulose', definition: 'Branched sugar polymers in the wood cell wall. Toasting turns them into furfural, 5-HMF, maltol and other toasty, caramel-like compounds.' },
        { term: 'Ethanolysis', definition: 'The slow breakdown of lignin by ethanol during maturation, which releases aromatic aldehydes such as coniferaldehyde and vanillin.' },
        { term: 'Coupled oxidation', definition: 'The linked reactions in which oxidizing wood phenolics produce hydrogen peroxide, which, with iron or copper as catalyst, oxidizes ethanol to acetaldehyde.' },
        { term: 'Surface-area-to-volume ratio (SA/V)', definition: 'The wood contact per liter of spirit. For casks of the same shape it scales as volume to the power −1/3, so smaller casks have more contact per liter.' },
      ],
    },
    {
      type: 'tasting',
      title: 'Cask chemistry flight',
      md: `Pour 10 mL of each, at or near 43-46% ABV if you can, in identical glasses. For each glass, score five markers from 0 to 3: **lactone** (coconut, fresh wood), **vanillin** (vanilla, custard), **tannin** (drying grip), **dried fruit** (raisin, fig, walnut) and **sulfur** (struck match, rubber). Then attribute each glass's top two markers to a cause from this lesson.

Tasting is optional: four 10 mL pours hold about one US standard drink, so sip small and spit. For a **nose-only** version, score everything except tannin, which you can only feel.`,
      flight: [
        { pour: 'A straight bourbon (new charred American oak)', lookFor: 'High lactone and vanillin, toasty caramel from hemicellulose, firm tannin from fresh wood.' },
        { pour: 'A single malt matured in first-fill ex-bourbon casks', lookFor: 'Vanilla and honey, softer coconut than the bourbon, less tannin because the wood has given up its first extraction.' },
        { pour: 'A single malt matured mainly in refill casks', lookFor: 'Spirit-led: malt and fruit esters show through, with low lactone, vanillin and tannin.' },
        { pour: 'A single malt matured in sherry-seasoned European oak', lookFor: 'Dried fruit and walnut from absorbed wine, more ellagitannin grip, and possibly a struck-match note from sulfur.' },
      ],
    },
    {
      type: 'text',
      md: `### Recap

Oak is roughly 40-45% cellulose, 20-25% hemicellulose, 25-30% lignin and up to about 10% extractives. American white oak is lactone-rich (cis-lactone, coconut); *Q. robur* is ellagitannin-rich; *Q. petraea* is finer and more aromatic. Seasoning leaches tannin and lets fungi work; toasting turns hemicellulose into furans and caramel compounds and lignin into vanillin, syringaldehyde and smoky phenols, while lactones peak at light-to-medium toast. Char adsorbs sulfur. Maturation is additive, subtractive and interactive, and the oxidation chain runs from phenolics and peroxide to acetaldehyde, acetic acid and ethyl acetate. Lower entry strength favors water-soluble extractives and higher strength ethanol-soluble ones, within the 125-proof cap that US law sets for bourbon, rye and similar types. SA/V scales as V^-1/3^, so a 50 L cask has about 1.59 times the wood contact per liter of a 200 L barrel.`,
    },
  ],
  quiz: [
    {
      id: 'l5-wood-chemistry-q1',
      type: 'numeric',
      context: `**Cask spec sheet**
Proposed small cask: 25 L, same shape as the distillery’s standard 200 L barrel.`,
      prompt: 'How many times the SA/V of the 200 L barrel does the 25 L cask have? Give the answer to two decimal places.',
      answer: 2.0,
      tolerance: 0.02,
      unit: 'x',
      explanation: 'SA/V scales as V^-1/3^, so the ratio is (200 ÷ 25)^1/3^ = 8^1/3^ = 2.00. An eightfold drop in volume only doubles the wood contact per liter, because area grows more slowly than volume.',
    },
    {
      id: 'l5-wood-chemistry-q2',
      type: 'match',
      prompt: 'Match each compound to its origin in the oak.',
      pairs: [
        { left: 'cis-Whisky lactone', right: 'Extractive richest in Quercus alba' },
        { left: 'Vescalagin and castalagin', right: 'Ellagitannins richest in Quercus robur' },
        { left: 'Vanillin', right: 'Lignin, via coniferaldehyde' },
        { left: 'Syringaldehyde', right: 'Lignin, via sinapaldehyde' },
        { left: 'Furfural and 5-HMF', right: 'Hemicellulose sugars broken down by toasting' },
      ],
      explanation: 'American white oak is the lactone-rich species, and European Q. robur the ellagitannin-rich one. Lignin yields coniferaldehyde (then vanillin) and sinapaldehyde (then syringaldehyde), while the furans come from toasted hemicellulose sugars.',
    },
    {
      id: 'l5-wood-chemistry-q3',
      type: 'single',
      context: `**Blind tasting note, single malt, 46% ABV**
"Raisin, dried fig and walnut. Firm, drying tannin. Faint struck match at the back. Little coconut."`,
      prompt: 'Which cask history best explains this note?',
      options: [
        'Sherry-seasoned European oak, sterilized at some point with sulfur candles',
        'First-fill ex-bourbon American white oak, heavily charred',
        'Third-fill refill hogshead with little wood influence left',
        'New charred American white oak at 125 proof entry',
      ],
      answer: 0,
      explanation: 'Dried fruit and walnut come from wine absorbed in the staves, firm tannin points to ellagitannin-rich European oak, and struck match is a likely trace of sulfur-candle fumigation. American oak, first-fill or new, would show coconut and vanilla, and a tired refill cask would not give strong tannin or dried fruit.',
    },
    {
      id: 'l5-wood-chemistry-q4',
      type: 'single',
      context: `**Teaching data: entry-strength trial** (same new make, identical new charred barrels, 4 years, analyzed after reduction to the same strength)

- Barrel A, filled at 55% ABV: higher wood sugars and gallic acid
- Barrel B, filled at 62.5% ABV: higher vanillin and whisky lactone`,
      prompt: 'Which explanation fits these results?',
      options: [
        'Lower entry strength favors water-soluble extractives; higher strength favors ethanol-soluble ones such as lignin aldehydes and lactones.',
        'Barrel B lost more water by evaporation, which concentrated its vanillin and lactone relative to Barrel A.',
        'Higher entry strength speeds oxidation, which converts wood sugars into vanillin and lactone in Barrel B.',
        'Barrel A extracted less of every compound, because 55% ABV spirit cannot penetrate the char layer.',
      ],
      answer: 0,
      explanation: 'Sugars and some tannin-related acids dissolve better in more watery spirit, while lignin aldehydes and lactones dissolve better at higher ethanol strength. Vanillin comes from lignin and lactone is an extractive, so neither is made from wood sugars, and Barrel A extracted more of some compounds, not less of all.',
    },
    {
      id: 'l5-wood-chemistry-q5',
      type: 'multi',
      prompt: 'Which of these are interactive maturation processes? Select all that apply.',
      options: [
        'Oxidation of ethanol to acetaldehyde',
        'Esterification of acetic acid with ethanol to ethyl acetate',
        'Formation of the acetal from acetaldehyde and ethanol',
        'Ethanolysis of lignin to aromatic aldehydes',
        'Adsorption of DMTS on the char layer',
        'Extraction of whisky lactone from the staves',
      ],
      answer: [0, 1, 2, 3],
      explanation: 'Interactive processes are reactions among spirit and wood compounds inside the cask: oxidation, esterification, acetal formation and ethanolysis. Adsorption on char is subtractive, and simple extraction of lactone is additive.',
    },
    {
      id: 'l5-wood-chemistry-q6',
      type: 'order',
      context: `**Cask analysis, same cask at filling and at 12 years**
Acetaldehyde, acetic acid and ethyl acetate are all higher at 12 years. The spirit was filled with no detectable acetic acid.`,
      prompt: 'Put the oxidation chain that explains these changes in order, first to last.',
      items: [
        'Oxygen diffuses in through the staves and bung',
        'Wood phenolics oxidize and release hydrogen peroxide',
        'Peroxide, with iron or copper as catalyst, oxidizes ethanol to acetaldehyde',
        'Acetaldehyde oxidizes to acetic acid',
        'Acetic acid esterifies with ethanol to form ethyl acetate',
      ],
      explanation: 'Oxygen entry starts the chain, oxidizing phenolics produce peroxide, and metal-catalyzed peroxide oxidizes ethanol to acetaldehyde. Further oxidation gives acetic acid, which slowly esterifies to ethyl acetate, so both rise with age.',
    },
  ],
};
