export default {
  id: 'l4-us-federal-law',
  title: 'US Federal Law: Inside 27 CFR Part 5',
  summary:
    'Find, cite and apply the federal whisky rules: the lesser-known standards of identity, the proof-gallon basis, additives, age statements, state of distillation and bottled-in-bond, and the line between federal and state law.',
  minutes: 15,
  blocks: [
    {
      type: 'text',
      md: `### Why clause-level law matters

In Level 2 you learned the headline numbers for American whiskey. This lesson teaches you to work like a label reviewer: find the clause, read its exact conditions and apply them to a product. Small differences decide the outcome. A whiskey entered into the barrel at 126 proof is not bourbon. A blend that is 19.6% straight whiskey is not "blended whisky". A rye bottled at 101 proof cannot say "bottled-in-bond".

### The legal architecture

The **Federal Alcohol Administration Act of 1935** (the FAA Act, 27 U.S.C. 201 and following) requires distilled spirits labels to meet federal rules and to be approved before the product is sold. The **Alcohol and Tobacco Tax and Trade Bureau (TTB)**, part of the Treasury Department since 2003, administers it.

The labeling rules sit in **27 CFR Part 5**. TTB reorganized and renumbered Part 5 in **T.D. TTB-176**, published on 9 February 2022 and effective in March 2022. Books written before then cite the old numbers (for example 5.22 for the standards of identity and 5.40 for age statements). Federal regulations spell the word "whisky", so this lesson does too when it quotes them.`,
    },
    {
      type: 'table',
      caption: 'Where the whisky rules live in 27 CFR Part 5 after the 2022 recodification',
      headers: ['Section', 'What it governs', 'Question it answers'],
      rows: [
        ['5.143 (Subpart I)', 'Standards of identity for whisky. Table 1 lists every type with its mash, proof, container and additive rules.', 'Is this bourbon, light whisky or spirit whisky?'],
        ['5.155', 'Alteration of class and type, including the 2.5% cap on coloring, flavoring and blending materials', 'Does an addition change what the product may be called?'],
        ['5.66(f)', 'State of distillation', 'Must the label say "Distilled in Indiana"?'],
        ['5.71', 'Neutral spirits and name of commodity', 'How must a blend disclose its neutral spirits?'],
        ['5.74', 'Statements of age, storage and percentage', 'Is an age statement mandatory, and what must it say?'],
        ['5.88', 'Bottled in bond', 'May this label say "bottled-in-bond"?'],
        ['5.203', 'Standards of fill (authorized bottle sizes)', 'Is this bottle size legal in the US?'],
      ],
    },
    {
      type: 'text',
      md: `### The lesser-known types in section 5.143

Table 1 to section 5.143(c) lists more whisky types than most drinkers know. Each one turns on a single variable: the distillation proof, the container, or the share of straight whiskey in a blend.

The imported types work differently. **Scotch, Irish and Canadian whisky** are defined by origin: each must be made in Scotland, on the island of Ireland (the Republic or Northern Ireland) or in Canada, in compliance with the laws that govern whisky made there for home consumption. A whisky made "the Scotch way" in Oregon is never Scotch whisky, however faithful the method.

Two straights of the same type from the same state can be mixed and stay "straight", because straight whisky includes mixtures of straights of the same type produced in the same state. Mix a straight bourbon with a straight rye, or Kentucky straight bourbon with Indiana straight bourbon, and the result is a **blend of straight whiskies** instead.`,
    },
    {
      type: 'table',
      caption: 'Selected whisky types in Table 1 to 27 CFR 5.143(c). PG = proof gallon.',
      headers: ['Type', 'Defining rules', 'Near miss to watch'],
      rows: [
        ['Whisky distilled from bourbon (rye, wheat, malt or rye malt) mash', 'At least 51% of the named grain; distilled at 160 proof or less; stored in **used** oak. No minimum time.', 'Same mash as bourbon, but used barrels, so it can never be bourbon or straight.'],
        ['Corn whisky', 'At least 80% corn; distilled at 160 proof or less; if stored, at 125 proof or less in **used or uncharred new oak**, never treated with charred wood. No minimum time.', 'Put it in new charred oak and it is no longer corn whisky (a 51%+ corn spirit could then be bourbon).'],
        ['Light whisky', 'Made in the US; distilled at **more than 160** and **less than 190** proof; stored in used or uncharred new oak.', 'At 160 proof exactly a spirit can still be bourbon; at 190 it is neutral spirits. "Kentucky" and "Tennessee" may not appear on a light whisky label except in an address.'],
        ['Blended light whisky', 'Light whisky mixed with **less than 20%** straight whisky (PG basis).', 'At 20% straight or more, the blend becomes blended whisky.'],
        ['Blended whisky (whisky, a blend)', '**At least 20%** straight whisky (PG basis), alone or with whisky or neutral spirits. Blended bourbon needs at least 51% straight bourbon.', '19.9% straight does not qualify.'],
        ['Spirit whisky', 'Neutral spirits plus **at least 5%** whisky or straight whisky (PG basis), with the straight portion **under 20%**.', 'Below 5% whisky it is not whisky of any type.'],
        ['Blend of straight whiskies', 'A mix of straight whiskies that does not qualify as one straight type, such as straights of different types or from different states.', 'Two straight bourbons from one state stay "straight bourbon".'],
      ],
    },
    {
      type: 'steps',
      title: 'Worked example: measuring a blend on a proof-gallon basis',
      items: [
        { title: 'Know the unit', md: 'A **proof gallon (PG)** is one US gallon at 60 °F at 100 proof (50% ABV). PG = wine gallons × proof ÷ 100. Blend shares in 5.143 are measured in PG, so a stronger component counts for more than its volume.' },
        { title: 'Convert each component', md: 'A blender has 40 wine gallons of straight rye at 110 proof and 180 wine gallons of grain neutral spirits at 100 proof. Straight rye: 40 × 110 ÷ 100 = **44 PG**. Neutral spirits: 180 × 100 ÷ 100 = **180 PG**.' },
        { title: 'Total the blend', md: '44 + 180 = **224 PG**.' },
        { title: 'Find the straight share', md: '44 ÷ 224 = 0.196, or **19.6%** straight whisky on a PG basis. Measured by volume (40 ÷ 220 = 18.2%) you would get the wrong number.' },
        { title: 'Classify', md: 'Under 20%, so the product cannot be blended whisky. It has at least 5% whisky and its straight portion is under 20%, so it is **spirit whisky**. Raising the straight rye to 45 PG (about 40.9 wine gallons at 110 proof) gives 45 ÷ 225 = exactly 20%, and the blend qualifies as blended whisky.' },
        { title: 'Check the label', md: 'Any blend containing neutral spirits also needs a statement under **5.71** giving the percentage of neutral spirits and the commodity they were distilled from (for example "80% grain neutral spirits"). Check proof-gallon conversions with the **Cask yield** tool.' },
      ],
    },
    {
      type: 'text',
      md: `### American single malt: the newest type

TTB added **American single malt whisky** to section 5.143 in a final rule published in **December 2024** and effective on **19 January 2025**. The type requires:

- a mash of **100% malted barley**;
- distillation **entirely at one US distillery**, with mashing, distillation and aging all in the US;
- distillation to **160 proof or less**;
- storage in **oak barrels of 700 L or less**, which may be new or used, charred or uncharred;
- bottling at **80 proof or more**.

Neutral spirits, flavoring and blending materials are not allowed. **Caramel color is allowed, and its use must be disclosed on the label.** After at least 2 years in oak, the product may be called "straight American single malt whisky". There is no minimum age for the plain type, so the age-statement rule below applies to anything under 4 years.`,
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'Additives: who may add what (27 CFR 5.143 and 5.155)',
      md: `- **Nothing at all:** bourbon and every straight whisky. Table 1 to 5.143 allows them no coloring, flavoring or blending materials, so even caramel is out.
- **Up to 2.5% by volume:** other whiskies, such as blended whisky and spirit whisky, may contain "harmless coloring, flavoring and blending materials": caramel, sugar, fruit juice, wine, or straight malt or straight rye malt whisky. If these total more than 2.5% of the finished product, the addition alters the class or type (**5.155**).
- **American single malt:** caramel color only, disclosed on the label (the December 2024 final rule).
- A product made with flavoring or blending materials generally needs **formula approval** from TTB before its label can be approved. TTB lists some exceptions.`,
    },
    {
      type: 'text',
      md: `### Age statements (27 CFR 5.74)

- An age statement is **mandatory for any whisky aged less than 4 years**, domestic or imported, and for blends that contain such whisky.
- The age stated is the age of the **youngest** whisky. A 6-year-old bourbon with 5% of 3-year-old bourbon in it must say "3 years old" or "aged 3 years".
- From 4 years up, an age statement is optional. If one appears, the youngest-whisky rule still applies.
- Products labeled **bottled-in-bond** are exempt from the mandatory statement, because bonding already requires at least 4 years.
- A blend containing neutral spirits and whisky under 4 years old states the percentage and age of the whiskies.

### State of distillation (27 CFR 5.66(f))

For bourbon, rye, wheat, malt and rye malt whisky, corn whisky, the straight types and the "distilled from ___ mash" types, the label must show the **state where the whisky was originally distilled**. A bottler's address in the same state satisfies the rule. When the address is in another state, the label adds a statement such as "Distilled in Indiana". A state name may sit in front of the class, as in "Kentucky straight bourbon whisky", only if the whisky was distilled in that state. Light whisky and blended whisky fall outside this rule.`,
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'Bottled-in-bond (27 CFR 5.88)',
      md: `- The product of **one distilling season** (January to June, or July to December), by **one distiller**, at **one distillery**.
- Stored at least **4 years** in wooden containers in a bonded warehouse under government supervision.
- Bottled at **exactly 100 proof**, with nothing added except pure water to reduce proof (filtration is allowed).
- The label names the distillery (its real or trade name) and gives the **DSP number** where it was distilled, plus the bottler's details if it was bottled elsewhere.
- It is an **overlay** on the class: a bottled-in-bond straight rye must meet every rye rule and every straight rule as well. An imported spirit may use the term only if it meets the same production conditions and its home country's law, with the country named right after the bond statement.`,
    },
    {
      type: 'text',
      md: `### Distinctive products and state law

**Bourbon.** Senate Concurrent Resolution 19, agreed on **4 May 1964**, declared bourbon a distinctive product of the United States and asked federal agencies to bar imports labeled bourbon. A concurrent resolution has no force of statute; the production rules are in 5.143. Bourbon can be made in any US state.

**Tennessee whiskey.** The federal standards do not set a separate production rule for it. Trade agreements beginning with NAFTA (1994) recognize it as a distinctive product of the US. The **Lincoln County Process** requirement comes from **Tennessee law**, Tenn. Code Ann. § 57-2-106, effective 1 July 2013: made in Tennessee, at least 51% corn, distilled to 160 proof or less, new charred oak, **filtered through maple charcoal before aging**, entered at 125 proof or less and bottled at 80 proof or more. A grandfather clause exempts one producer (Prichard's) from the charcoal step.

### Edge cases reviewers meet every week

- **Finished bourbon.** Bourbon and straights take no additions, and TTB treats bourbon finished in a cask that held wine or another spirit as a **distilled spirits specialty**. The label uses a statement of composition such as "bourbon whisky finished in port wine barrels", and the product needs formula approval. Extra time in new charred oak keeps it bourbon.
- **COLA vs formula.** A COLA (Certificate of Label Approval) approves the label. A formula approval covers the recipe and process. When a formula is required, it must be approved first.
- **Standards of fill (5.203).** Only listed bottle sizes are legal. TTB added 700 mL (with 720 mL, 900 mL and 1.8 L) at the end of 2020, and a January 2025 rule authorized 15 more sizes for spirits, such as 1.5 L.`,
    },
    {
      type: 'callout',
      variant: 'myth',
      title: 'Two myths that cost marks',
      md: `**Myth: a straight bourbon with no age statement may be only 2 years old.** Straight needs 2 years, but 5.74 forces an age statement on any whisky under 4 years. A straight bourbon with no age statement is at least 4 years old.

**Myth: bottled-in-bond means better whiskey.** Bonding guarantees one season, one distiller, one distillery, 4 years and 100 proof. It certifies provenance and process. Quality is a separate judgment.`,
    },
    {
      type: 'table',
      caption: 'Compliance clinic: eight invented specs. Try each row before reading across. Test your own specs with the Is it bourbon? tool.',
      headers: ['Spec', 'Class/type', 'Age statement', 'State of distillation', '"Bottled-in-bond"'],
      rows: [
        ['75% corn; 135 proof off the still; new charred oak at 118; 3 years; distilled in Indiana; bottled in Ohio by an Ohio firm; 100 proof', 'Straight bourbon whisky', 'Required ("3 years old")', 'Required ("Distilled in Indiana")', 'Not allowed (under 4 years)'],
        ['95% rye, 5% malted barley; 140 proof off the still; new charred oak at 115; spring 2019 season; one Kentucky distillery; 6 years in its bonded warehouse; 100 proof; distiller bottles it', 'Straight rye whisky', 'Optional', 'Shown by the Kentucky address', 'Allowed, with the distillery name and DSP number'],
        ['51% corn; 158 proof off the still; 5 years in used bourbon barrels', 'Whisky distilled from bourbon mash', 'Optional (over 4 years)', 'Required if the address state differs', 'Only if every 5.88 condition is met'],
        ['82% corn; 150 proof off the still; entered used oak at 120; 2 years; nothing added', 'Straight corn whisky', 'Required ("2 years old")', 'Required if the address state differs', 'Not allowed'],
        ['Grain mash distilled at 175 proof; 3 years in used oak', 'Light whisky', 'Required ("3 years old")', 'Not required; "Kentucky" and "Tennessee" barred except in an address', 'Not allowed'],
        ['25% straight bourbon (PG basis, 3 years old) plus grain neutral spirits', 'Blended whisky', 'Required, with the percentage and age of the whiskey', 'Not required', 'Not allowed'],
        ['Bourbon mash; 140 proof off the still; new charred oak at 120; distilled and aged 5 years in Tennessee; no charcoal filtering; Tennessee bottler', 'Straight bourbon whisky (cannot be called Tennessee whiskey under state law)', 'Optional', 'Shown by the Tennessee address', 'Only if every 5.88 condition is met'],
        ['Straight bourbon, 4 years; spring and fall 2021 distillate married; one distillery; 100 proof', 'Straight bourbon whisky', 'Optional', 'Required if the address state differs', 'Not allowed (two seasons)'],
      ],
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Blend of straight whiskies', definition: 'A US mixture of straight whiskies that does not qualify as one straight type, such as straight bourbon mixed with straight rye, or straight bourbons from different states.' },
        { term: 'Distilled spirits specialty', definition: 'A TTB category for a spirit that fits no standard of identity, such as bourbon finished in a port cask. It is labeled with a statement of composition and generally needs formula approval.' },
        { term: 'Light whisky', definition: 'A US whisky distilled at more than 160 and less than 190 proof and stored in used or uncharred new oak. Its label may not use "Kentucky" or "Tennessee" except in an address.' },
        { term: 'Spirit whisky', definition: 'A mixture of neutral spirits with at least 5% whisky or straight whisky on a proof-gallon basis, in which the straight whisky portion is less than 20%.' },
        { term: 'Harmless coloring, flavoring and blending materials', definition: 'Additions such as caramel, sugar, fruit juice, wine or straight malt whisky that some US whiskies may contain up to 2.5% by volume. Bourbon and straight whiskies may contain none.' },
        { term: 'Formula approval', definition: 'TTB approval of a product\'s recipe and production method, generally required when flavoring or blending materials are used. It must be granted before the label (COLA) is approved.' },
        { term: 'Distilling season', definition: 'Either half of a calendar year, January to June or July to December. A bottled-in-bond spirit must come from a single distilling season.' },
        { term: 'Distinctive product', definition: 'A spirit that US law or trade agreements reserve to American production. Congress declared bourbon one in 1964, and trade agreements recognize Tennessee whiskey as one.' },
      ],
    },
    {
      type: 'text',
      md: `### Recap

US whisky law lives in 27 CFR Part 5, recodified in 2022: standards in 5.143, additives in 5.155, state of distillation in 5.66(f), age in 5.74 and bottled-in-bond in 5.88. Blend shares are measured in proof gallons, so 19.6% straight makes spirit whisky and 20% makes blended whisky. Bourbon and straights take no additives; some other whiskies take up to 2.5%. Any whisky under 4 years carries an age statement for its youngest component, and a distilling state that differs from the address must be named. Bonding is an overlay that certifies process. Tennessee's charcoal rule is state law.`,
    },
  ],
  quiz: [
    {
      id: 'l4-us-federal-law-q1',
      type: 'multi',
      context: `**Spec sheet: Product A**
Mash: 70% corn, 21% rye, 9% malted barley
Distilled at 128 proof in Kentucky; entered new charred oak at 112 proof
Aged 3 years; reduced with water to 90 proof
Bottled in Tennessee by a Tennessee company; nothing added`,
      prompt: 'Which statements about Product A\'s label are correct? Select all that apply.',
      options: [
        'It may be labeled "straight bourbon whisky".',
        'An age statement is mandatory.',
        'The label must name Kentucky as the state of distillation.',
        'Reduced to exactly 100 proof, it could say "bottled-in-bond".',
        'Up to 2.5% caramel could be added without changing its class.',
        '"Tennessee straight bourbon whisky" would be an accurate designation.',
      ],
      answer: [0, 1, 2],
      explanation:
        'It meets every bourbon rule plus 2 years in new charred oak, so it is straight bourbon. At 3 years it needs an age statement (5.74), and because the address is in Tennessee the label must name Kentucky as the state of distillation (5.66(f)). Bonding is the tempting near miss: it needs 4 years whatever the proof. Bourbon takes no caramel, and a state name in front of the class requires the whisky to have been distilled in that state, so "Tennessee" is out.',
    },
    {
      id: 'l4-us-federal-law-q2',
      type: 'numeric',
      context: `**Blend sheet**
- 30 wine gallons of straight bourbon at 120 proof
- 150 wine gallons of grain neutral spirits at 100 proof`,
      prompt: 'What share of this blend is straight bourbon on a proof-gallon basis? Give the percentage to one decimal place.',
      answer: 19.4,
      tolerance: 0.1,
      unit: '%',
      explanation:
        'Straight bourbon: 30 × 120 ÷ 100 = 36 PG. Neutral spirits: 150 PG. 36 ÷ 186 = 19.4%. That is below the 20% needed for blended whisky, so it is spirit whisky. Working by volume (30 ÷ 180 = 16.7%) is the tempting error, because the law counts proof gallons.',
    },
    {
      id: 'l4-us-federal-law-q3',
      type: 'match',
      prompt: 'Match each section 5.143 type to its defining rule.',
      pairs: [
        { left: 'Light whisky', right: 'Distilled above 160 and below 190 proof; used or uncharred new oak' },
        { left: 'Spirit whisky', right: 'Neutral spirits with at least 5% whisky; straight portion under 20%' },
        { left: 'Blended whisky', right: 'At least 20% straight whisky on a proof-gallon basis' },
        { left: 'Whisky distilled from bourbon mash', right: 'At least 51% corn, 160 proof or less, stored in used oak' },
        { left: 'American single malt whisky', right: '100% malted barley from one US distillery; oak of 700 L or less' },
      ],
      explanation:
        'Each type turns on one variable: distillation proof (light whisky), proof-gallon share (spirit and blended whisky), container (bourbon mash in used oak) or grain and site (American single malt). Spirit whisky and blended whisky are the pair to watch: the 20% straight line on a proof-gallon basis separates them, so 19.9% is spirit whisky and 20% is blended whisky.',
    },
    {
      id: 'l4-us-federal-law-q4',
      type: 'truefalse',
      prompt: 'The requirement that Tennessee whiskey be filtered through maple charcoal before aging is found in 27 CFR 5.143.',
      answer: false,
      explanation:
        'The Lincoln County Process requirement comes from Tennessee state law, Tenn. Code Ann. § 57-2-106, effective 1 July 2013. Federal law recognizes Tennessee whiskey through trade agreements but sets no charcoal rule, and one producer is grandfathered out of the state requirement.',
    },
    {
      id: 'l4-us-federal-law-q5',
      type: 'single',
      context: `**HOLLOW BIRCH RESERVE**
Straight Bourbon Whiskey
Finished 6 months in ruby port casks
47.5% Alc./Vol. · 750 mL
Distilled and bottled by Hollow Birch Distilling Co., Frankfort, KY`,
      prompt: 'How does TTB treat the class and type of this product?',
      options: [
        'It remains straight bourbon whisky, because the finish lasted under 2 years.',
        'It is a distilled spirits specialty, labeled as bourbon finished in port casks, and needs formula approval.',
        'It becomes "whisky distilled from bourbon mash", because the port cask is used oak.',
        'It becomes "blended whisky", because absorbed port counts as a blending material.',
      ],
      answer: 1,
      explanation:
        'Bourbon and straights take no additions, and TTB treats bourbon finished in a cask that held wine or another spirit as a distilled spirits specialty with a statement such as "bourbon whisky finished in port wine barrels". "Distilled from bourbon mash" describes spirit stored in used oak from the start, and blended whisky is defined by its straight-whisky share.',
    },
    {
      id: 'l4-us-federal-law-q6',
      type: 'multi',
      prompt: 'A distiller wants to put "bottled-in-bond" on a domestic straight bourbon. Which conditions must it meet under 27 CFR 5.88? Select all that apply.',
      options: [
        'Distilled in one distilling season by one distiller at one distillery',
        'Stored at least 4 years in a bonded warehouse',
        'Bottled at exactly 100 proof',
        'Bottled at 100 proof or higher',
        'Drawn from a single barrel',
        'Label names the distillery and gives its DSP number',
      ],
      answer: [0, 1, 2, 5],
      explanation:
        'Bonding requires one season, one distiller, one distillery, 4 years in a bonded warehouse, exactly 100 proof and the distillery identified on the label. "100 proof or higher" is the near miss: 101 proof fails. Bonded whiskey can be a batch of many barrels.',
    },
  ],
};
