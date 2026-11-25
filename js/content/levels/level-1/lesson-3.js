export default {
  id: 'l1-world-map',
  title: 'A World Map of Whiskey',
  summary:
    'The major whiskey-making nations, the signature styles of each and the single most important rule behind every name, plus what "single" and "blended" really mean on a label.',
  minutes: 8,
  blocks: [
    {
      type: 'text',
      md: `A whiskey's name is a promise about where and how it was made. "Scotch" and "bourbon" are legally protected words: a producer may use them only by following the rules of the place that owns them. You do not need the full rulebook yet. Level 2 adds the detailed numbers and Level 4 the legal clauses. For now, learn **one headline rule for each style**. That rule alone will settle most arguments at the bar.`,
    },
    {
      type: 'table',
      caption: 'One headline rule per style. Learn the middle column first.',
      headers: ['Style', 'The rule to remember', 'Known for'],
      rows: [
        ['Scotch whisky', 'Made in Scotland and aged at least 3 years in oak casks there', 'Blends by volume; single malts by reputation'],
        ['Irish whiskey', 'Distilled and aged at least 3 years anywhere on the island of Ireland', 'Smooth blends and single pot still whiskey'],
        ['Bourbon', 'Made in the US from at least 51% corn and aged in new charred oak; no minimum age', 'Sweet vanilla and caramel'],
        ['Rye whiskey (US)', 'At least 51% rye in the mash', 'Spice and pepper'],
        ['Tennessee whiskey', 'Bourbon-style whiskey made in Tennessee and filtered through maple charcoal before aging', 'A mellow, sweet style'],
        ['Canadian whisky', 'Aged at least 3 years in small wooden casks in Canada', 'Light blends of separately made whiskies'],
        ['Japanese whisky', 'Under the industry standard: made, aged at least 3 years and bottled in Japan', 'Precise blends and single malts'],
      ],
    },
    {
      type: 'text',
      md: `### Scotland

**Scotch whisky** must be made in Scotland and matured there in oak casks for at least three years. Two words on the label tell you most of what you need:

- **Single malt Scotch** is made only from malted barley, in pot stills, at one distillery.
- **Blended Scotch** combines malt whisky with lighter grain whisky (usually made in column stills from wheat or corn plus some malted barley), usually from many distilleries.

Single malts get the attention, but blends make up the large majority of all Scotch sold. And most Scotch is **not** smoky. Peat is a choice some distilleries make, as Lesson 2 showed.`,
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'The three-year rule',
      md: `Most whisky nations set a minimum of **3 years** in wood before a spirit can carry the name:

- **Scotland:** at least 3 years in oak casks in Scotland (Scotch Whisky Regulations 2009).
- **Ireland:** at least 3 years in wooden casks on the island of Ireland (Irish Whiskey Act 1980 and the Irish Whiskey Technical File).
- **Canada:** at least 3 years in small wood in Canada (Canadian Food Compositional Standards, Volume 2, incorporated into the Food and Drug Regulations; until December 2024 this rule sat in section B.02.020).
- **European Union:** at least 3 years in wooden casks for whisky made in the EU (Regulation (EU) 2019/787).

The United States is the big exception. **Bourbon has no minimum age** (27 CFR 5.143). Only **straight bourbon** must be aged at least 2 years.`,
    },
    {
      type: 'text',
      md: `### Ireland

**Irish whiskey** is distilled and aged for at least three years anywhere on the island of Ireland. That includes both the Republic of Ireland and Northern Ireland, which is part of the UK.

Blends are the best-selling Irish style. The style Ireland can call its own is **single pot still whiskey**, made at one distillery in pot stills from a mash of malted and unmalted barley. The raw barley gives it a creamy, spicy character. Many Irish distilleries distill three times, and the result is often described as smooth, but triple distillation is a tradition. The rules do not require it.`,
    },
    {
      type: 'text',
      md: `### The United States

- **Bourbon** must be made in the US from a mash of at least 51% corn and aged in **new charred oak** containers. Any time in the barrel is enough for the name; there is no minimum age. **Straight bourbon** must spend at least 2 years in those barrels.
- **Rye whiskey** follows the same pattern with at least 51% rye.
- **Tennessee whiskey** is made in Tennessee like a bourbon, then filtered through maple charcoal (traditionally sugar maple) before it goes into the barrel. This step, often called the Lincoln County Process, is required by Tennessee state law (one small distillery is exempt).

Most bourbon is made in Kentucky, which has the history, the climate and most of the big distilleries. The law does not require it.`,
    },
    {
      type: 'callout',
      variant: 'myth',
      title: 'Bourbon myths you will hear',
      md: `- **"Bourbon has to come from Kentucky."** Bourbon can be made in any US state. Kentucky simply makes most of it.
- **"Bourbon has to be aged 2 years."** That rule is for *straight* bourbon. Plain bourbon has no minimum age.
- **"Irish whiskey is always triple distilled."** Many Irish whiskeys are, but double-distilled Irish whiskey is just as legal.`,
    },
    {
      type: 'text',
      md: `### Canada and Japan

**Canadian whisky** must be made in Canada and aged at least 3 years in small wooden casks there. Most Canadian distillers make each grain into whisky separately and blend the parts at the end, which gives a light, smooth house style. Canadians often call their whisky **"rye"**, and the law allows that name whatever the rye content. A bottle of "Canadian rye" may contain very little rye grain.

**Japanese whisky** took its model from Scotland. The country's first malt whisky distillery, Yamazaki, was founded in 1923. Japanese producers are known for careful blending and for the whisky highball.`,
    },
    {
      type: 'callout',
      variant: 'law',
      title: 'What "Japanese whisky" means since 2021',
      md: `For decades Japan had no strict definition, and some bottles labeled Japanese whisky contained imported spirit. In 2021 the **Japan Spirits & Liqueurs Makers Association** issued a voluntary industry standard, in effect from April 2021, with members given until March 2024 to bring labels into line. To be called Japanese whisky, the whisky must:

- be made from malted grain (other grains allowed) using water from Japan;
- be mashed, fermented and distilled in Japan;
- be aged at least 3 years in wooden casks in Japan;
- be bottled in Japan at 40% ABV or more.

The standard binds only the association's members and has no force of national law. In October 2026 Japan's National Tax Agency published a draft to designate "Japanese whisky" as a geographical indication, which would give the name legal protection; as of November 2026 the draft was still open for public comment.`,
    },
    {
      type: 'text',
      md: `### The rest of the world

Whisky is now made on every inhabited continent. **India** is the world's largest whisky market by volume. **Taiwan, Australia, England, Wales, France** and the **Nordic countries** all make whiskies that win international awards. Hot climates such as Taiwan's and India's pull flavor and color from the wood much faster than Scotland's cool one, and they lose more to evaporation, so their whiskies often reach maturity in fewer years.`,
    },
    {
      type: 'table',
      caption: 'Tasting clues: try matching each note to a likely origin before reading across. These are tendencies, never proof; smoke, for example, can come from any country that uses peated malt.',
      headers: ['If you notice', 'A likely source', 'Why'],
      rows: [
        ['Strong smoke, iodine or bonfire', 'A peated Scotch, often from Islay', 'Peated malt'],
        ['Big vanilla, caramel and toasted oak', 'Bourbon', 'New charred oak gives a lot of flavor quickly'],
        ['Pepper, spice and herbs', 'American rye whiskey', 'Rye grain'],
        ['Malt, honey and orchard fruit, no smoke', 'An unpeated single malt, such as many from Speyside', 'Malted barley and gentler reused casks'],
        ['Light, smooth and gently fruity', 'A blended Irish or Canadian whisky', 'Light grain whisky makes up much of the blend'],
        ['Creamy texture with spice', 'Irish single pot still whiskey', 'Unmalted barley in the mash'],
        ['Rich dried fruit and nuts', 'Whisky aged in ex-sherry casks, from any country', 'The cask once held sherry'],
        ['Deep wood and color at a young age', 'Whisky from a hot climate such as Taiwan or India', 'Heat speeds up extraction from the wood'],
      ],
    },
    {
      type: 'table',
      caption: 'Label words that cause the most confusion.',
      headers: ['Label word', 'What it means', 'Example'],
      rows: [
        ['Single', 'All the whisky comes from **one distillery**. It can still be a mix of hundreds of casks.', 'Single malt Scotch'],
        ['Single cask', 'All the whisky comes from one individual cask', 'A bottling that names its cask number'],
        ['Blended', 'Whiskies of more than one type, or from more than one distillery, mixed together', 'Blended Scotch: malt plus grain whisky'],
        ['Blended malt', 'Malt whiskies from several distilleries, with no grain whisky', 'Blended malt Scotch'],
      ],
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Scotch whisky', definition: 'Whisky made in Scotland and matured there in oak casks for at least 3 years, under the Scotch Whisky Regulations 2009.' },
        { term: 'Bourbon', definition: 'American whiskey made in the US from a mash of at least 51% corn and aged in new charred oak containers. It has no minimum age.' },
        { term: 'Straight bourbon', definition: 'Bourbon that has been aged at least 2 years in new charred oak.' },
        { term: 'Tennessee whiskey', definition: 'Bourbon-style whiskey made in Tennessee and filtered through maple charcoal before aging, as Tennessee state law requires.' },
        { term: 'Single pot still whiskey', definition: 'An Irish style made at one distillery in pot stills from a mash of malted and unmalted barley.' },
        { term: 'Single malt', definition: 'Whisky made only from malted barley at a single distillery. It may combine many casks from that distillery.' },
        { term: 'Blended whisky', definition: 'Whisky made by mixing whiskies of different types or from different distilleries, such as malt and grain whisky in blended Scotch.' },
        { term: 'Blended malt', definition: 'A mix of malt whiskies from two or more distilleries, with no grain whisky added.' },
      ],
    },
    {
      type: 'text',
      md: `### Recap

Each style has a headline rule. Scotch: made and aged at least 3 years in oak in Scotland. Irish: made and aged at least 3 years anywhere on the island of Ireland, north or south. Bourbon: made in the US from at least 51% corn in new charred oak, with no minimum age (straight bourbon needs 2 years). Rye: at least 51% rye. Tennessee: charcoal-filtered bourbon-style whiskey. Canadian: at least 3 years in small wood, usually blended, often called rye. Japanese: since 2021 an industry standard requires making, aging and bottling in Japan. "Single" means one distillery; "blended" means more than one source or type.`,
    },
  ],
  quiz: [
    {
      id: 'l1-world-map-q1',
      type: 'match',
      prompt: 'Match each style to the statement that fits it.',
      pairs: [
        { left: 'Scotch whisky', right: 'Made in Scotland and aged at least 3 years in oak there' },
        { left: 'Bourbon', right: 'At least 51% corn and new charred oak, with no minimum age' },
        { left: 'Tennessee whiskey', right: 'Filtered through maple charcoal before aging' },
        { left: 'Canadian whisky', right: 'Often called "rye", whatever its rye content' },
      ],
      explanation: 'Scotch must be made and aged at least 3 years in oak in Scotland, and bourbon needs at least 51% corn and new charred oak with no minimum age. Tennessee whiskey is made like a bourbon and adds maple charcoal filtering before aging. The "rye" nickname belongs to Canadian whisky, which may carry it with very little rye grain; it is US rye whiskey that must really be at least 51% rye.',
    },
    {
      id: 'l1-world-map-q2',
      type: 'single',
      prompt: 'What does the word "single" in "single malt Scotch" tell you?',
      options: [
        'All the whisky comes from one distillery',
        'All the whisky comes from one cask',
        'All the whisky was distilled in one year',
        'The whisky was distilled only once',
      ],
      answer: 0,
      explanation: '"Single" means one distillery, and a single malt can mix hundreds of casks from it. A bottle from one cask is labeled "single cask", which is a different claim.',
    },
    {
      id: 'l1-world-map-q3',
      type: 'truefalse',
      prompt: 'Bourbon may legally be made in any US state.',
      answer: true,
      explanation: 'True. Bourbon must be made in the United States, and any state will do. Kentucky makes most of it because of its history, climate and big distilleries, which is why many people assume the name is tied to that state.',
    },
    {
      id: 'l1-world-map-q4',
      type: 'single',
      prompt: 'Which statement about Irish whiskey is correct?',
      options: [
        'It may be distilled and aged in Northern Ireland',
        'It must be distilled three times before casking',
        'It must be made from malted barley and nothing else',
        'It needs no minimum age, like plain bourbon',
      ],
      answer: 0,
      explanation: 'Irish whiskey can be made anywhere on the island of Ireland, so Northern Ireland counts as well as the Republic. Triple distillation is a tradition the rules do not require; Irish whiskey may use other grains, and single pot still whiskey adds unmalted barley to the malt; and the minimum age is 3 years.',
    },
    {
      id: 'l1-world-map-q5',
      type: 'multi',
      prompt: 'Which of these must be aged at least 3 years before they can use the name? Select all that apply.',
      options: ['Scotch whisky', 'Irish whiskey', 'Canadian whisky', 'Bourbon', 'Straight bourbon'],
      answer: [0, 1, 2],
      explanation: 'Scotch, Irish and Canadian whisky all need at least 3 years in wood. Bourbon has no minimum age, and straight bourbon needs at least 2 years, which is less than 3.',
    },
  ],
};
