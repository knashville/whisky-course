export default {
  id: 'l2-irish-canadian-japanese-world',
  title: 'Irish, Canadian, Japanese and World Whisky',
  summary:
    'The four Irish categories, how Canadian blending works and why "rye" on a Canadian label says nothing about rye content, the Japanese industry standard in detail, and the rules and climates behind the newer whisky nations.',
  minutes: 11,
  blocks: [
    {
      type: 'text',
      md: `### Same goal, different rulebooks

Ireland, Canada and Japan all require at least 3 years in wood and at least 40% ABV, so the headline numbers look alike. The differences sit in the details: which grains, which stills, what may be added, where the whisky must be bottled, and whether the rule is law at all. Those details let you decide whether a described product can carry a country's name. Level 4 goes clause by clause; this lesson gives you the working rules.`,
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'Law: Irish whiskey (Irish Whiskey Technical File, 2014)',
      md: `Irish whiskey must be:

- distilled on the **island of Ireland**, the Republic and Northern Ireland alike, from a mash of malted cereals, with or without whole grains of other cereals;
- distilled at **less than 94.8% ABV**;
- matured on the island for **at least 3 years** in **wooden casks of 700 L or less** (oak is usual but not required);
- given nothing but **water** and **plain caramel (E150a)**;
- bottled at **40% ABV or more**.

The technical file is the official specification behind the protected geographical indication "Irish whiskey".`,
    },
    {
      type: 'table',
      caption:
        'The four Irish whiskey categories, as set in the 2014 Technical File. An Irish Whiskey Association proposal to raise the Pot Still limit on other cereals from 5% to 30% went to public consultation in mid-2026 and had not been adopted by late 2026, so check the current file.',
      headers: ['Category', 'Mash', 'Still', 'Notes'],
      rows: [
        ['Malt Irish whiskey', '100% malted barley', 'Pot stills', 'Often triple-distilled, but not always'],
        ['Pot Still Irish whiskey', 'At least 30% malted barley and at least 30% unmalted barley; up to 5% other cereals such as oats or rye', 'Pot stills', 'Ireland\'s signature style: creamy texture and spice from the raw barley'],
        ['Grain Irish whiskey', 'No more than 30% malted barley, with unmalted cereals such as maize or wheat', 'Column stills', 'Light; most of it goes into blends'],
        ['Blended Irish whiskey', 'A mix of two or more of malt, pot still and grain whiskey', 'Any of the above', 'The best-selling Irish style'],
      ],
    },
    {
      type: 'callout',
      variant: 'myth',
      title: 'Myth: Irish whiskey must be triple distilled',
      md: `Triple distillation is a strong **tradition**, and the rules do not require it. Bushmills in County Antrim triple-distills its malt, and Midleton in County Cork triple-distills its pot still whiskey. Cooley, in County Louth, double-distills and even makes a **peated** malt. All three make legal Irish whiskey. As in Scotland, "single" on an Irish label (Single Malt, Single Pot Still, Single Grain) means one distillery.`,
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'Law: Canadian whisky (Food and Drug Regulations)',
      md: `Canada defines its whisky in the Food and Drug Regulations. For decades the text sat in section B.02.020; in December 2024 it moved into the Canadian Food Compositional Standards, a document the regulations incorporate by reference. The core requirements are:

- **mashed, distilled and aged in Canada** from a mash of cereal grain;
- aged at least **3 years in small wood**, meaning casks of **700 L or less**;
- the aroma, taste and character generally attributed to Canadian whisky;
- bottled at **40% ABV or more**;
- **caramel and flavouring** may be added.

**"Canadian whisky", "Canadian rye whisky" and "rye whisky"** are legal names for the same product, whatever its rye content.`,
    },
    {
      type: 'text',
      md: `### How Canadian whisky is built

Most Canadian distillers make each grain into whisky **separately** and blend at the end:

- A **base whisky**, usually from corn (sometimes wheat), is distilled to a high strength in column stills. It is light and smooth, and it makes up most of the blend.
- A **flavouring whisky**, often from rye, is distilled to a lower strength so it keeps more character.

Each is aged on its own, mostly in used barrels, and the components are **blended after maturation**. This gives the blender fine control over the house style.

Why "rye"? In the 19th century, adding rye to wheat- or corn-based whisky gave Canadian whisky its distinct taste, and the nickname stuck. A Canadian rye may contain little rye, while some Canadian whiskies are made from 100% rye. Compare the US, where "rye whisky" means at least 51% rye.`,
    },
    {
      type: 'text',
      md: `### Japan: Scottish roots, house-made variety

Two men built the industry. **Shinjiro Torii** founded the **Yamazaki** distillery, between Kyoto and Osaka, in **1923**, and his company became Suntory. He hired **Masataka Taketsuru**, who had studied whisky-making in Scotland from **1918 to 1920**. Taketsuru later left to start his own company, now Nikka, and built **Yoichi** on Hokkaido in **1934**, in a cool, damp climate that reminded him of Scotland.

Japanese houses rarely trade whisky with rivals, unlike Scottish blenders, who swap malts routinely. So each company makes many styles itself, using different stills, yeasts, peat levels and casks to build the range of flavors a blender needs. At home, much Japanese whisky is drunk as a **highball** with food.`,
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'The JSLMA standard for "Japanese whisky" (2021)',
      md: `The **Japan Spirits & Liqueurs Makers Association (JSLMA)** published its standard in February 2021. It took effect on **1 April 2021**, and members had until **31 March 2024** to bring labels into line. To be called Japanese whisky, a product must:

- use **malted grain** (other cereals allowed) and **water extracted in Japan**;
- be mashed, fermented and distilled at a distillery **in Japan**, to **less than 95% ABV**;
- be aged **in Japan** for **at least 3 years** in **wooden casks of 700 L or less**;
- be **bottled in Japan** at **40% ABV or more**;
- contain nothing added except **plain caramel** for color.

It is a **voluntary** standard for association members, and no national law enforces it. In 2025 the JSLMA introduced a logo for qualifying bottles and said it would seek geographical indication status to make the definition legally binding.`,
    },
    {
      type: 'table',
      caption: 'The three systems side by side. Scotch, from Lesson 2, is the reference point.',
      headers: ['Rule', 'Irish whiskey', 'Canadian whisky', 'Japanese whisky (JSLMA)'],
      rows: [
        ['Where made', 'Distilled and matured on the island of Ireland', 'Mashed, distilled and aged in Canada', 'Mashed, fermented, distilled, aged and bottled in Japan'],
        ['Minimum age and cask', '3 years in wooden casks of 700 L or less', '3 years in small wood (700 L or less)', '3 years in wooden casks of 700 L or less'],
        ['What may be added', 'Water and plain caramel only', 'Caramel and flavouring', 'Plain caramel only'],
        ['Minimum strength', '40% ABV', '40% ABV', '40% ABV'],
        ['Legal force', 'Law: a protected geographical indication', 'Law: federal food regulations', 'Voluntary industry standard'],
      ],
    },
    {
      type: 'text',
      md: `### World whisky

- **India** is the largest whisky market in the world by volume. Much of what India sells as whisky is a neutral spirit distilled from **molasses**, blended with some grain or malt whisky and flavoring. Because UK, EU and US law require whisky to be distilled from cereal grain, those products would not count as whisky there. India also makes barley single malts that meet international rules.
- **Taiwan** has a hot, humid subtropical climate. Spirit pulls flavor and color from the wood fast, and casks lose far more to evaporation than in Scotland, so whiskies taste mature at a young age.
- **Australia** requires at least **2 years** in wood, a year less than most nations. Tasmania is its best-known whisky island.
- **England, Wales, France and the Nordic countries** follow European rules: Regulation (EU) 2019/787, and the similar rules the UK kept after Brexit. Whisky must be distilled from cereal below 94.8% ABV, matured at least **3 years** in wooden casks of 700 L or less, and bottled at 40% ABV or more.`,
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Technical file', definition: 'The official product specification behind a protected geographical indication. The Irish Whiskey Technical File (2014) sets the rules for Irish whiskey and its four categories.' },
        { term: 'Geographical indication (GI)', definition: 'A legally protected name for a product whose qualities come from its place of origin, such as Irish whiskey or Scotch whisky.' },
        { term: 'Small wood', definition: 'Canada\'s legal term for a wooden cask or barrel of 700 L or less, the container Canadian whisky must age in for at least 3 years.' },
        { term: 'Base whisky', definition: 'The light, high-strength whisky, usually from corn, that makes up most of a Canadian blend.' },
        { term: 'Flavouring whisky', definition: 'A Canadian whisky distilled to a lower strength, often from rye, to add character to a blend.' },
        { term: 'JSLMA', definition: 'The Japan Spirits & Liqueurs Makers Association, which issued the voluntary 2021 standard for labeling whisky as Japanese whisky.' },
        { term: 'Molasses-based whisky', definition: 'A spirit sold as whisky in some markets, mainly India, made largely from molasses-based neutral spirit. It does not meet the UK, EU or US definitions of whisky.' },
      ],
    },
    {
      type: 'steps',
      title: 'Worked examples: the passport check and a grain-bill sum',
      items: [
        {
          title: 'Distilled in Belfast, matured 3 years in County Cork',
          md: '**Irish whiskey.** The rules cover the whole island, so a spirit distilled in Northern Ireland and matured in the Republic qualifies.',
        },
        {
          title: 'Bottled in Japan by a JSLMA member, but made from imported Scotch malt',
          md: '**Not "Japanese whisky" under the standard.** Mashing, fermentation, distillation and aging must all happen in Japan; bottling there is not enough.',
        },
        {
          title: '90% corn, 10% rye, made and aged 3 years in small wood in Canada',
          md: '**May be labeled Canadian rye whisky.** In Canada the name "rye" says nothing about rye content.',
        },
        {
          title: 'Distilled in Dublin, then matured 3 years in a warehouse in Scotland',
          md: '**Not Irish whiskey.** The 3 years of maturation must happen on the island of Ireland. It cannot be Scotch either, because it was not distilled in Scotland.',
        },
        {
          title: 'Molasses neutral spirit blended with 10% malt whisky, offered as "whisky" in the UK',
          md: '**Not whisky in the UK.** UK and EU rules require whisky to be distilled from cereal grain.',
        },
        {
          title: 'Grain Irish whiskey: how much malt may go in?',
          md: 'The 30% cap applies to the whole mash. A distiller has **14,000 kg of maize** and adds only malted barley, so the maize must be at least 70% of the mash. The largest mash is 14,000 ÷ 0.70 = **20,000 kg**, and the malt can be at most 20,000 − 14,000 = **6,000 kg** (30% of 20,000). Taking 30% of the maize alone (4,200 kg) undershoots, because the malt is part of the whole too.',
        },
      ],
    },
    {
      type: 'text',
      md: `### Recap

Irish whiskey is distilled and matured on the island of Ireland, north or south, below 94.8% ABV, for at least 3 years in wooden casks of 700 L or less, with only water and E150a added. Its categories are Malt, Pot Still (at least 30% malted and 30% unmalted barley), Grain (column stills, no more than 30% malted barley) and Blended, and triple distillation is a tradition the rules do not require. Canadian whisky is mashed, distilled and aged in Canada for 3 years in small wood, may contain caramel and flavouring, is usually blended from base and flavouring whiskies after maturation, and may be called rye whatever its grain. Japanese whisky, under the voluntary JSLMA standard (2021, fully in force 2024), must be made, aged at least 3 years and bottled in Japan. India sells molasses-based whisky, Taiwan matures fast in the heat, Australia requires 2 years, and European producers follow the EU 3-year rule.`,
    },
  ],
  quiz: [
    {
      id: 'l2-irish-canadian-japanese-world-q1',
      type: 'match',
      prompt: 'Match each Irish whiskey category to its production rule.',
      pairs: [
        { left: 'Malt Irish whiskey', right: '100% malted barley, distilled in pot stills' },
        { left: 'Pot Still Irish whiskey', right: 'At least 30% malted and at least 30% unmalted barley, in pot stills' },
        { left: 'Grain Irish whiskey', right: 'No more than 30% malted barley, in column stills' },
        { left: 'Blended Irish whiskey', right: 'A mix of two or more of the other categories' },
      ],
      explanation:
        'Malt and Pot Still both use pot stills; the difference is the unmalted barley in Pot Still, which gives its creamy spice. Grain whiskey uses column stills and little malt, and Blended combines the other categories.',
    },
    {
      id: 'l2-irish-canadian-japanese-world-q2',
      type: 'multi',
      prompt: 'Passport check: select every product that may legally use the name shown. Assume every rule not mentioned is met.',
      options: [
        'Irish whiskey: distilled in County Antrim, matured 4 years in County Kerry',
        'Japanese whisky (JSLMA member): Japanese malt blended with imported grain whisky, bottled in Japan',
        'Canadian rye whisky: 95% corn and 5% rye, made and aged 3 years in small wood in Canada',
        'Irish whiskey: distilled in County Cork, matured 3 years in a warehouse in Wales',
        'Canadian whisky: made in Canada, aged 2 years in small wood',
      ],
      answer: [0, 2],
      explanation:
        'Irish whiskey covers the whole island, north and south, and "Canadian rye whisky" needs no particular rye content, so a 95% corn mash is fine. The others fail: under the JSLMA standard every drop must be made and aged in Japan, so imported grain whisky rules out the name; Irish maturation must happen on the island; and Canadian whisky needs 3 years.',
    },
    {
      id: 'l2-irish-canadian-japanese-world-q3',
      type: 'truefalse',
      prompt: 'To be sold as Irish whiskey, a spirit must be distilled three times.',
      answer: false,
      explanation:
        'Triple distillation is a tradition, kept by Bushmills and Midleton, but the rules do not require it. Cooley double-distills and makes perfectly legal Irish whiskey, including a peated malt.',
    },
    {
      id: 'l2-irish-canadian-japanese-world-q4',
      type: 'single',
      prompt: 'In the typical Canadian method, how are the base whisky and the flavouring whisky handled?',
      options: [
        'Each is distilled and aged separately, then they are blended after maturation',
        'The grains are mixed before mashing and distilled together once',
        'The base whisky is aged, while the flavouring whisky is added unaged at bottling',
        'Both are distilled to the same high strength so the blend stays consistent',
      ],
      answer: 0,
      explanation:
        'Most Canadian distillers make each grain separately: a light, high-strength base whisky and a lower-strength, characterful flavouring whisky, each aged on its own and blended after maturation. Distilling the flavouring whisky to a lower strength is the point, because that keeps its character.',
    },
    {
      id: 'l2-irish-canadian-japanese-world-q5',
      type: 'order',
      prompt: 'Put these milestones of Japanese whisky in order, first to last.',
      items: [
        'Masataka Taketsuru studies whisky-making in Scotland',
        'Shinjiro Torii founds the Yamazaki distillery',
        'Taketsuru builds the Yoichi distillery on Hokkaido',
        'The JSLMA Japanese whisky standard takes effect',
        'JSLMA members must have all labels in line with the standard',
      ],
      explanation:
        'Taketsuru studied in Scotland from 1918 to 1920, Torii founded Yamazaki in 1923 and hired him, and Taketsuru built Yoichi in 1934. The JSLMA standard took effect on 1 April 2021, and the transition for members ended on 31 March 2024.',
    },
    {
      id: 'l2-irish-canadian-japanese-world-q6',
      type: 'numeric',
      prompt:
        'A distiller plans a 1,000 kg grain bill for Pot Still Irish whiskey. What is the smallest amount of unmalted barley it may contain, in kilograms?',
      answer: 300,
      tolerance: 0,
      unit: 'kg',
      explanation:
        'Pot Still Irish whiskey needs at least 30% unmalted barley (and at least 30% malted barley): 1,000 × 0.30 = 300 kg. The raw barley is what gives the style its creamy spice and what separates it from Malt Irish whiskey, which is 100% malted barley, so the answer cannot be zero.',
    },
  ],
};
