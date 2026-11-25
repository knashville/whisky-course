export default {
  id: 'l2-reading-a-label',
  title: 'Reading a Whiskey Label',
  summary:
    'What every US whiskey label must show, what it must add in certain cases, which words the law defines and which are pure marketing, and how to infer age and source from the small print.',
  minutes: 11,
  blocks: [
    {
      type: 'text',
      md: `### A label is a legal document

Most of a whiskey label is not design. In the United States, TTB sets label rules under the Federal Alcohol Administration Act, in **27 CFR Part 5**, and most labels need TTB approval before the bottle can be sold. Learn the required elements and you can read any bottle in three passes:

1. **Is everything required there?**
2. **Which words are defined by law, and which are marketing?**
3. **What do the clues say about age and who really made it?**

This lesson uses US rules as the model and points out where Scotch, Irish and Japanese labels differ.`,
    },
    {
      type: 'table',
      caption: 'Mandatory on every US whiskey label (27 CFR Part 5 and the Alcoholic Beverage Labeling Act of 1988).',
      headers: ['Element', 'What it tells you', 'Example'],
      rows: [
        ['Brand name', 'The name the product is sold under', 'Old Harbor Reserve'],
        ['Class and type', 'The legal category, from the standards of identity', 'Kentucky Straight Bourbon Whisky'],
        ['Alcohol content', 'Strength as % alcohol by volume; proof may be added but is optional', '45% Alc./Vol. (90 Proof)'],
        ['Net contents', 'Volume, in an authorized size such as 750 mL, 1 L or 1.75 L; 700 mL has been allowed since the end of 2020', '750 mL'],
        ['Name and address', 'Who bottled or imported it, with a phrase such as "Distilled and bottled by"', 'Bottled by Old Harbor Spirits Co., Louisville, KY'],
        ['Country of origin', 'Required on imports', 'Product of Scotland'],
        ['Government Warning', 'The health warning required since the 1988 Act', 'GOVERNMENT WARNING: (1) According to the Surgeon General...'],
      ],
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'Law: the Government Warning (Alcoholic Beverage Labeling Act, 1988)',
      md: `Every alcoholic drink sold in the US must carry this exact text, with the first two words in capital letters and bold type (27 CFR Part 16):

> GOVERNMENT WARNING: (1) According to the Surgeon General, women should not drink alcoholic beverages during pregnancy because of the risk of birth defects. (2) Consumption of alcoholic beverages impairs your ability to drive a car or operate machinery, and may cause health problems.`,
    },
    {
      type: 'table',
      caption: 'Required only in some cases.',
      headers: ['When', 'The label must add', 'Example'],
      rows: [
        ['The whisky is under 4 years old', 'An age statement (27 CFR 5.74)', 'Aged 2 Years'],
        ['A bourbon, rye or similar whisky was distilled in a state other than the one in the label address', 'The state of distillation', 'Distilled in Indiana'],
        ['A blend contains neutral spirits', 'A commodity statement giving the share of each', '30% straight whiskey, 70% grain neutral spirits'],
        ['It contains FD&C Yellow No. 5, or cochineal extract or carmine', 'A disclosure of that ingredient', 'Contains FD&C Yellow No. 5'],
        ['It contains 10 ppm or more of sulfites', 'A sulfite declaration', 'Contains sulfites'],
      ],
    },
    {
      type: 'text',
      md: `### Who really made it?

The name and address line uses a phrase that matters:

- **"Distilled by"** means the company named on the label distilled the whiskey.
- **"Bottled by"**, **"Produced by"**, **"Blended by"** or **"Made by"** often signals a **non-distiller producer (NDP)**: a brand that buys whiskey from a distillery and bottles it under its own name.

Sourcing is legal, common and often excellent. It only becomes a problem when a label or story implies the brand distilled what it bought. Two clues help: a "Distilled in [state]" statement that differs from the bottler's state, and an address in a city with no distillery of that brand. A label that reads "Distilled in Indiana" and "Bottled by ... Denver, Colorado" tells you the Denver company did not distill it in Denver.`,
    },
    {
      type: 'compare',
      title: 'Three kinds of label words',
      columns: [
        {
          heading: 'Defined or policed by law',
          points: [
            'Class names: bourbon, rye, corn, blended whiskey',
            'Straight (2 years; age stated if under 4)',
            'Bottled-in-bond (one season, one distillery, 4 years, exactly 100 proof)',
            'Age statements, which give the youngest whisky',
            'Scotch categories and protected places such as Islay',
            '"Single barrel", which has no formal definition but must be literally true',
          ],
        },
        {
          heading: 'No legal definition in the US',
          points: ['Small batch', 'Reserve', 'Select', 'Handcrafted', 'Artisanal', '"Family recipe"'],
        },
        {
          heading: 'Voluntary claims that must be truthful',
          points: [
            'Cask strength or barrel proof: bottled no more than 2 proof below its strength when dumped from the cask (27 CFR 5.87)',
            'Non-chill filtered: not chilled and filtered before bottling',
            'Natural color: no caramel added',
          ],
        },
      ],
    },
    {
      type: 'callout',
      variant: 'myth',
      title: 'Myth: "small batch" means a legally limited number of barrels',
      md: `No US rule defines **small batch**, **reserve** or **handcrafted**. One brand's small batch might be 20 barrels, another's 200. Treat these words as the producer's description of itself. The words that carry legal weight are the class and type, straight, bottled-in-bond and the age statement.`,
    },
    {
      type: 'text',
      md: `### Reading age from the label

You can often infer a minimum age even when no number is printed:

- **Straight whiskey with no age statement** is at least **4 years** old, because any whisky under 4 years must state its age.
- **Bottled-in-bond** whiskey is at least **4 years** old by definition, so it needs no age statement.
- Under their own countries' rules, **Scotch, Irish and Canadian whisky** is at least **3 years** old, age statement or not. On the US market, the 5.74 rule that whisky under 4 years must state its age also applies to imports, so an imported whisky with no age statement should be at least 4 years old.
- An age statement always gives the **youngest** whisky in the bottle.

Outside the US the class name changes, but the logic is the same. A Scotch label must use one of the five category names, an Irish label may name a category such as **Single Pot Still**, and a JSLMA member may label a whisky **Japanese whisky** only if it meets the JSLMA standard, which is voluntary and binds members only.`,
    },
    {
      type: 'text',
      md: `### The COLA

Before a US whiskey can be sold across state lines, or an imported one released from customs, TTB must issue a **COLA**, a Certificate of Label Approval. The approval number is not printed on the bottle, but anyone can look up approved labels in TTB's public COLA registry. A COLA shows that TTB accepted the label. It is not a quality award, and it does not prove every claim on the label is true.`,
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Class and type', definition: 'The legal category printed on a US label, taken from the standards of identity, such as "Straight Rye Whisky" or "Blended Whiskey".' },
        { term: 'Non-distiller producer (NDP)', definition: 'A company that sells whiskey under its own brand without distilling it, buying spirit from a distillery instead.' },
        { term: 'State of distillation', definition: 'A label statement such as "Distilled in Indiana", required for bourbon, rye and similar whiskies distilled in a state other than the one in the label address.' },
        { term: 'Commodity statement', definition: 'A label statement giving the share of whiskey and neutral spirits in a blend, such as "30% straight whiskey, 70% grain neutral spirits".' },
        { term: 'Standard of fill', definition: 'A container size that US rules authorize for spirits, such as 750 mL, 1 L, 1.75 L or, since the end of 2020, 700 mL.' },
        { term: 'Non-chill filtered', definition: 'A voluntary claim that the whiskey was not chilled and filtered before bottling, a step that removes compounds that can cloud it when cold.' },
        { term: 'COLA', definition: 'Certificate of Label Approval: TTB\'s approval of a US spirits label, required before the product can be sold across state lines or released from customs.' },
      ],
    },
    {
      type: 'steps',
      title: 'Worked example: decode a label',
      items: [
        {
          title: 'The label',
          md: '**COPPER FERRY**, Straight Bourbon Whiskey, Aged 2 Years, 46% Alc./Vol. (92 Proof), 750 mL, Distilled in Indiana, Bottled by Copper Ferry Spirits Co., Portland, OR, followed by the Government Warning.',
        },
        {
          title: 'Pass 1: mandatory elements',
          md: 'Brand, class and type, alcohol content, net contents, name and address and the Government Warning are all present. It is a US product, so no country of origin is needed.',
        },
        {
          title: 'Pass 2: case-by-case elements',
          md: 'It is under 4 years old, so "Aged 2 Years" is required and present. It was distilled in Indiana but bottled in Oregon, so "Distilled in Indiana" is required and present.',
        },
        {
          title: 'Pass 3: defined words',
          md: '"Straight bourbon" is defined: at least 51% corn, new charred oak, at least 2 years, nothing added. Nothing on the label claims small batch or reserve, but if it did, those words would carry no legal meaning.',
        },
        {
          title: 'Pass 4: inferences',
          md: '"Bottled by" plus a different state of distillation strongly suggests the brand owner is a non-distiller producer that sourced Indiana whiskey. What the label proves is narrower: the Portland company did not distill it in Portland. The youngest whiskey in the bottle is 2 years old.',
        },
      ],
    },
    {
      type: 'table',
      caption: 'Five invented labels, decoded. Practice: cover the last three columns and decode each label yourself.',
      headers: ['Mock label (invented)', 'Defined terms', 'Undefined or voluntary terms', 'What to check'],
      rows: [
        ['**OLD HARBOR RESERVE**: Kentucky Straight Bourbon Whisky, Aged 3 Years, 45% Alc./Vol., 750 mL, Distilled and bottled by Old Harbor Distilling Co., Bardstown, KY', 'Straight bourbon; "Aged 3 Years"', 'Reserve', 'The age statement is required (under 4 years) and present; the Government Warning must appear on the back'],
        ['**TRUE NORTH**: Blended Whiskey, Small Batch, 40% Alc./Vol., 1 L, Bottled by True North Spirits, Chicago, IL', 'Blended whiskey (at least 20% straight whiskey by proof gallons)', 'Small batch', 'A commodity statement is required if it contains neutral spirits, and an age statement if any whisky in it is under 4 years'],
        ['**CAIRN HILL**: Blended Malt Scotch Whisky, 12 Years Old, 43% Alc./Vol., 700 mL, Product of Scotland', 'Blended Malt Scotch Whisky; "12 Years Old"', 'None', 'Malts only, from two or more distilleries; the youngest is 12 years old; the importer\'s name and address must appear'],
        ['**LOUGH ARD**: Single Pot Still Irish Whiskey, Handcrafted, 43% Alc./Vol., 700 mL, Product of Ireland', 'Irish whiskey; Single Pot Still (one distillery, malted and unmalted barley, pot stills)', 'Handcrafted', 'The importer\'s name and address and the Government Warning must appear'],
        ['**CEDAR TERRACE**: Japanese Whisky, Single Malt, Non-Chill Filtered, 46% Alc./Vol., 700 mL, Product of Japan', '"Japanese whisky" under the JSLMA standard', 'Non-chill filtered (voluntary, must be true)', 'For a JSLMA member, the whisky must be made, aged at least 3 years and bottled in Japan'],
      ],
    },
    {
      type: 'text',
      md: `### Recap

Every US whiskey label needs a brand name, class and type, alcohol content (proof optional), net contents in an authorized size (700 mL since the end of 2020), the bottler or importer's name and address, country of origin for imports, and the 1988 Government Warning. Some labels must add an age statement (under 4 years), a state of distillation, a commodity statement for blends with neutral spirits, color-additive disclosures or a sulfite declaration. "Distilled by" names the distiller; "bottled by" often means an NDP. Straight, bottled-in-bond and age statements are defined; small batch, reserve and handcrafted are not. A straight or bonded whiskey without an age statement is at least 4 years old, and a label needs a COLA before the whiskey can be sold across state lines or released from customs.`,
    },
  ],
  quiz: [
    {
      id: 'l2-reading-a-label-q1',
      type: 'multi',
      context: `**SUMMIT PASS**  \nStraight Rye Whisky  \nAged 3 Years · 45% Alc./Vol. · 750 mL  \nDistilled in Indiana  \nBottled by Summit Pass Spirits Co., Denver, CO`,
      prompt: 'Select every statement this label supports.',
      options: [
        'The whiskey was distilled in Indiana',
        'The Denver company did not distill it in Denver',
        'The whiskey is 90 US proof',
        'The whiskey is at least 4 years old',
        'The whiskey qualifies as bottled-in-bond',
      ],
      answer: [0, 1, 2],
      explanation:
        'The state of distillation is Indiana, so the Colorado bottler did not distill it in Denver, and 45% ABV is 90 proof. "Aged 3 Years" gives the youngest whiskey, so it is not 4 years old, and bottled-in-bond would need at least 4 years and exactly 100 proof.',
    },
    {
      id: 'l2-reading-a-label-q2',
      type: 'multi',
      prompt: 'Which of these must appear on every US whiskey label? Select all that apply.',
      options: [
        'Alcohol content as a percentage by volume',
        'Net contents',
        'The Government Warning',
        'Proof',
        'An age statement on a 6-year-old bourbon',
        'The COLA approval number',
      ],
      answer: [0, 1, 2],
      explanation:
        'Alcohol content by volume, net contents and the Government Warning are mandatory on every label. Proof is optional, an age statement is required only for whisky under 4 years old, and the COLA number is kept in TTB\'s registry, not printed on the bottle.',
    },
    {
      id: 'l2-reading-a-label-q3',
      type: 'match',
      prompt: 'Match each label phrase to what it tells you.',
      pairs: [
        { left: '"Distilled by"', right: 'The company named distilled the whiskey itself' },
        { left: '"Bottled by"', right: 'Names the bottler, who may not have distilled it' },
        { left: '"Distilled in Indiana"', right: 'The state of distillation differs from the address state' },
        { left: '"Contains sulfites"', right: 'Sulfites are present at 10 ppm or more' },
        { left: '"Aged 2 Years"', right: 'A mandatory statement for whisky under 4 years old' },
      ],
      explanation:
        '"Distilled by" is the only phrase that names the distiller; "bottled by" often marks a non-distiller producer. A state-of-distillation line appears when that state differs from the address, sulfites must be declared at 10 ppm or more, and whisky under 4 years must state its age.',
    },
    {
      id: 'l2-reading-a-label-q4',
      type: 'truefalse',
      prompt: '"Small batch" on a US whiskey label means the batch stayed under a legally defined number of barrels.',
      answer: false,
      explanation:
        'No US rule defines small batch, so one brand\'s small batch may be ten times another\'s. Straight, bottled-in-bond and age statements are the terms with legal definitions.',
    },
    {
      id: 'l2-reading-a-label-q5',
      type: 'single',
      context: `**RIVER BEND**  \nBourbon Whiskey  \nAged 2 Years · 40% Alc./Vol. · 750 mL  \nDistilled and bottled by River Bend Distilling Co., Lexington, KY  \n(Back label: tasting notes and the distillery's story, nothing else)`,
      prompt: 'Which mandatory element is missing from this label?',
      options: ['The Government Warning', 'The proof', 'A state-of-distillation statement', 'The COLA approval number'],
      answer: 0,
      explanation:
        'Every US label must carry the Government Warning, and this one does not. Proof is optional, the whiskey was distilled in the same state as the address so no state of distillation is needed, and COLA numbers are not printed on bottles.',
    },
    {
      id: 'l2-reading-a-label-q6',
      type: 'numeric',
      context: `**HOLLOW OAK**  \nKentucky Straight Bourbon Whiskey  \n50% Alc./Vol. (100 Proof) · 750 mL  \nDistilled and bottled by Hollow Oak Distillery, Bardstown, KY  \n(No age statement anywhere on the label)`,
      prompt: 'What is the minimum age of this whiskey, in years?',
      answer: 4,
      tolerance: 0,
      unit: 'years',
      explanation:
        'Straight bourbon needs at least 2 years, but any whisky under 4 years must carry an age statement. With no age statement, a compliant straight bourbon must be at least 4 years old.',
    },
  ],
};
