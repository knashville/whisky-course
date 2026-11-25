export default {
  id: 'l2-flavor-and-serves',
  title: 'Flavor Language and the Classic Serves',
  summary:
    'Write structured tasting notes with the eight-family flavor wheel, trace each family to grain, still or cask, and learn the specs, methods and glassware for the classic whiskey cocktails.',
  minutes: 10,
  blocks: [
    {
      type: 'text',
      md: `### From "nice" to a note someone else can use

Level 1 gave you a starter vocabulary and a five-step tasting routine. This lesson adds structure. Professionals describe whisky with a shared map of flavor families and a fixed order of observations, so two people can compare notes and a blender can act on them. Then we turn to the glass: which serve suits which whisky and which guest, and the specs for the classic cocktails.`,
    },
    {
      type: 'table',
      caption:
        'The eight families of the Scotch whisky industry\'s flavor wheel. The first industry wheel came from Pentlands Scotch Whisky Research (now the Scotch Whisky Research Institute) in the late 1970s; the eight-family layout is a later revision. The descriptors work for any whiskey.',
      headers: ['Family', 'Typical descriptors', 'Where it mostly comes from'],
      rows: [
        ['Cereal', 'Malt, biscuit, porridge, bran, cooked mash', 'Grain, mashing and short fermentations'],
        ['Fruity', 'Citrus, apple, pear, banana, dried fruit', 'Fermentation (esters), kept by the distillation cut'],
        ['Floral', 'Cut grass, hay, heather, perfume', 'Fermentation and a light, early spirit cut'],
        ['Peaty', 'Smoke, iodine, tar, medicinal, seaweed', 'Malt dried over peat smoke'],
        ['Feinty', 'Leather, tobacco, honey, sweat', 'The late part of the spirit run (the feints)'],
        ['Sulphury', 'Struck match, rubber, cooked vegetables', 'Fermentation and low copper contact in the still; some casks'],
        ['Woody', 'Vanilla, coconut, toast, baking spice', 'The cask'],
        ['Winey', 'Sherry, nuts, dark chocolate, rich fruit', 'Casks that held wine, especially sherry'],
      ],
    },
    {
      type: 'text',
      md: `### Tracing flavor to its source

The wheel is useful because each family points back to a production step. The first six families come mainly from the **grain, fermentation and still**. The last two, **woody** and **winey**, come mainly from the **cask**. So a note that reads "big vanilla and toasted oak, little cereal" tells you the cask is doing most of the talking. A note full of cut grass and pear points to a light spirit from a careful distiller. Level 5 explains the chemistry behind each family.

Use the outer words when you can. "Fruity" is a start; "ripe pear" is a note.`,
    },
    {
      type: 'steps',
      title: 'A structured tasting note',
      items: [
        { title: 'Appearance', md: 'Color, clarity and tears. Color hints at the cask and caramel, never proves age.' },
        { title: 'Nose', md: 'Name the families you find first, then the specific descriptors. Note intensity from faint to pronounced.' },
        { title: 'Palate', md: 'Four checks: **sweetness** (dry to sweet), **body** (light to full), **intensity** of flavor, and **texture** (thin, creamy, oily, drying).' },
        { title: 'Finish', md: 'Length (short, medium or long) and character: what lingers, and does it change?' },
        { title: 'Balance', md: 'Do spirit, grain, fruit and wood support each other, or does one dominate? This is your overall judgment.' },
      ],
    },
    {
      type: 'tasting',
      title: 'Optional exercise: the three-glass water test',
      md: `Pour the **same whisky** into three matching glasses, **10-15 mL** each. Leave glass 1 neat, add a few drops of water to glass 2, and add one ice cube to glass 3. Wait two minutes, then write a structured note for each and mark which flavor families grow or fade. Three 15 mL pours at 40% ABV come to about one US standard drink if you swallow them all, so spit if you prefer and drink water as you go. You can record the notes on the Journal page.

**Nose-only option:** nose all three glasses without tasting. The aroma changes are the point of the exercise.`,
      flight: [
        { pour: 'Glass 1: a whisky of about 40-46% ABV, neat', lookFor: 'Your baseline. Note the families on the nose and how hot the alcohol feels.' },
        { pour: 'Glass 2: the same whisky with a few drops of water', lookFor: 'Usually less burn and more fruit, floral or cereal notes on the nose. Which families got louder?' },
        { pour: 'Glass 3: the same whisky with one ice cube', lookFor: 'Usually a quieter nose and a smoother, simpler palate. Which families disappeared?' },
      ],
    },
    {
      type: 'text',
      md: `### Ice, water and the long drink

A **large cube** melts more slowly than the same weight of small cubes because it has **less surface area per unit of volume**. It dilutes the drink more slowly, and it also chills it more slowly, because most of the cooling comes from ice melting. That slow, gentle change suits a whisky you want to keep intact.

A **highball** of 1 part whisky to 3-4 parts chilled soda is best over **plenty** of ice. More ice keeps the glass colder, so each cube melts more slowly and the drink stays lively.

For cocktails, follow one rule: **shake** drinks that contain citrus, egg or cream; **stir** drinks made only of spirits, vermouth, bitters and sugar. Shaking chills, dilutes and aerates fast; stirring keeps an all-spirit drink clear and silky.`,
    },
    {
      type: 'callout',
      variant: 'myth',
      title: 'Myth: more ice waters a drink down',
      md: `A glass full of ice holds the drink near freezing, and ice sitting in very cold liquid melts slowly. Two or three cubes sitting in warmer liquid melt fast, and that is what dilutes a drink. For a highball or a whisky on the rocks, fill the glass with ice.`,
    },
    {
      type: 'table',
      caption:
        'Classic specs as many bars make them (1 oz is about 30 mL). Recipes vary between bars and books, so treat these as starting points.',
      headers: ['Drink', 'Spec', 'Method', 'Glass and garnish'],
      rows: [
        ['Old Fashioned', '2 oz bourbon or rye, about 1/4 oz sugar syrup, 2-3 dashes aromatic bitters', 'Stirred, served over ice', 'Rocks glass with a large cube; expressed orange peel'],
        ['Manhattan', '2 oz rye, 1 oz sweet vermouth, 2 dashes aromatic bitters', 'Stirred, served up', 'Coupe or cocktail glass; cherry'],
        ['Rob Roy', 'A Manhattan made with Scotch', 'Stirred, served up', 'Coupe or cocktail glass; cherry or lemon peel'],
        ['Whiskey Sour', '2 oz whiskey, 3/4 oz lemon juice, 3/4 oz sugar syrup, optional egg white', 'Shaken', 'Rocks glass over ice or a coupe; a few drops of bitters on the foam'],
        ['Mint Julep', '2 oz bourbon, about 1/4 oz sugar syrup, a handful of mint leaves', 'Built over crushed ice and stirred', 'Julep cup heaped with crushed ice; mint sprig'],
        ['Sazerac', '2 oz rye, a sugar cube or about 1/4 oz syrup, 3 dashes of bright red, anise-led bitters in the Peychaud\'s style', 'Stirred, then strained with no ice into a glass rinsed with absinthe', 'Chilled rocks glass with no ice; lemon peel expressed over the top'],
        ['Irish Coffee', '1 1/2 oz Irish whiskey, hot coffee, brown sugar', 'Built in a warmed glass, topped with lightly whipped cream', 'Stemmed glass; drink through the cream'],
        ['Penicillin', '2 oz blended Scotch, 3/4 oz lemon juice, 3/4 oz honey-ginger syrup, a float of about 1/4 oz peated Islay whisky', 'Shaken, then floated', 'Rocks glass over ice; candied ginger'],
      ],
    },
    {
      type: 'callout',
      variant: 'history',
      title: 'History: three classics with known origins',
      md: `- **Irish Coffee:** credited to chef **Joe Sheridan** at the flying-boat terminal at **Foynes**, County Limerick, in the early **1940s**, as a warming drink for transatlantic passengers. San Francisco's Buena Vista Cafe made it famous in America from 1952.
- **Sazerac:** a **New Orleans** drink of the 19th century. It is often said to have been made with cognac first, and rye became the standard base.
- **Penicillin:** created by **Sam Ross** at the bar Milk & Honey in **New York** in **2005**, a modern classic built on blended Scotch with a smoky Islay float.`,
    },
    {
      type: 'text',
      md: `### Matching the serve to the whisky and the guest

Ask two questions: what does this whisky do best, and what does this guest want?

- **To study a whisky**, serve it neat in a nosing glass with water on the side.
- **For a big, sweet bourbon** and a guest who likes rich drinks, an Old Fashioned keeps the whiskey in front and adds only sugar, bitters and orange.
- **For a spicy rye**, a Manhattan or a Sazerac lets the spice cut through vermouth or sugar.
- **For a guest new to whiskey**, a Whiskey Sour or a highball is fresh and approachable.
- **For a peated Islay malt**, try it neat with a few drops of water, or use a small amount as the float on a Penicillin.

Cocktails can hide their strength. A Manhattan holds about 2 oz of rye plus fortified wine, which is well over one US standard drink. Check any recipe with the Standard drinks tool, and offer a lower-strength choice such as a long highball.`,
    },
    {
      type: 'keyTerms',
      terms: [
        { term: 'Flavor wheel', definition: 'A circular map of flavor families and descriptors used to describe whisky consistently. The Scotch industry\'s current wheel has eight families.' },
        { term: 'Feinty', definition: 'A flavor family of leather, tobacco, honey and sweaty notes that comes from the late part of the spirit run, called the feints.' },
        { term: 'Sulphury', definition: 'A flavor family of struck-match, rubbery or cooked-vegetable notes, linked to fermentation, low copper contact in the still and some casks.' },
        { term: 'Winey', definition: 'A flavor family of sherry, nut, chocolate and rich fruit notes that comes mainly from casks that held wine.' },
        { term: 'Served up', definition: 'A cocktail stirred or shaken with ice, then strained into a glass with no ice, usually a stemmed glass.' },
        { term: 'Rinse', definition: 'A small amount of a strong-flavored spirit swirled around a glass and discarded, as with absinthe in a Sazerac, to leave its aroma.' },
        { term: 'Expressed peel', definition: 'A strip of citrus peel squeezed over a drink so its oils spray across the surface, adding aroma.' },
      ],
    },
    {
      type: 'text',
      md: `### Recap

The industry flavor wheel has eight families: cereal, fruity, floral, peaty, feinty and sulphury, which come mainly from grain, fermentation and still, and woody and winey, which come mainly from the cask. A structured note covers appearance, nose, palate (sweetness, body, intensity, texture), finish (length and character) and balance. Large cubes melt slowly because they have less surface per unit of volume, and a highball wants 1:3-1:4 over plenty of ice. Shake drinks with citrus, egg or cream; stir all-spirit drinks. Know the Old Fashioned, Manhattan (and the Scotch Rob Roy), Whiskey Sour, Mint Julep, Sazerac, Irish Coffee and Penicillin, and match the serve to both the whisky and the guest.`,
    },
  ],
  quiz: [
    {
      id: 'l2-flavor-and-serves-q1',
      type: 'multi',
      prompt: 'Which flavor-wheel families come mainly from the cask? Select all that apply.',
      options: ['Woody', 'Winey', 'Peaty', 'Feinty', 'Cereal'],
      answer: [0, 1],
      explanation:
        'Woody (vanilla, toast, spice) and winey (sherry, nuts, rich fruit) come mainly from the cask. Peat comes from malt dried over peat smoke, feinty notes from the late part of the spirit run, and cereal from the grain and mash.',
    },
    {
      id: 'l2-flavor-and-serves-q2',
      type: 'numeric',
      prompt:
        'You build a highball at 1 part whisky to 3 parts soda, using 50 mL of whisky. How much soda do you add, in mL?',
      answer: 150,
      tolerance: 0,
      unit: 'mL',
      explanation:
        'At 1:3, the soda is three times the whisky: 50 × 3 = 150 mL. At 1:4 it would be 200 mL. Serve it over plenty of ice so it stays cold and lively.',
    },
    {
      id: 'l2-flavor-and-serves-q3',
      type: 'match',
      prompt: 'Match each cocktail to its spec.',
      pairs: [
        { left: 'Manhattan', right: '2 oz rye, 1 oz sweet vermouth, 2 dashes aromatic bitters; stirred' },
        { left: 'Whiskey Sour', right: '2 oz whiskey, 3/4 oz lemon, 3/4 oz syrup, optional egg white; shaken' },
        { left: 'Old Fashioned', right: '2 oz whiskey, about 1/4 oz syrup, 2-3 dashes bitters; stirred over ice' },
        { left: 'Penicillin', right: 'Blended Scotch, lemon, honey-ginger syrup, peated Islay float' },
      ],
      explanation:
        'Vermouth marks the Manhattan, lemon and syrup the Sour, and sugar plus bitters alone the Old Fashioned. The Sour and the Penicillin both use lemon, so look for the honey-ginger syrup and smoky float, which belong only to the Penicillin.',
    },
    {
      id: 'l2-flavor-and-serves-q4',
      type: 'order',
      prompt: 'Put the parts of a structured tasting note in order, first to last.',
      items: ['Appearance', 'Nose', 'Palate', 'Finish', 'Balance'],
      explanation:
        'Look before you smell, smell before you taste, then judge how long the flavor lasts. Balance comes last because it sums up everything before it.',
    },
    {
      id: 'l2-flavor-and-serves-q5',
      type: 'truefalse',
      prompt: 'One large ice cube melts more slowly than the same weight of small cubes because it has less surface area per unit of volume.',
      answer: true,
      explanation:
        'Melting happens at the surface. A single large cube exposes less surface for its volume, so it melts and dilutes the drink more slowly while it chills.',
    },
    {
      id: 'l2-flavor-and-serves-q6',
      type: 'single',
      context: `**GUEST REQUEST**  \n"I love a Manhattan. Could you make me the same drink with blended Scotch in place of the rye?"`,
      prompt: 'What drink is the guest asking for, and how should you mix it?',
      options: [
        'A Rob Roy, stirred with ice and strained into a chilled coupe',
        'A Rob Roy, shaken with ice and strained into a chilled coupe',
        'A Penicillin, shaken with ice and strained over fresh ice',
        'A Rob Roy, built over crushed ice in the glass and stirred',
      ],
      answer: 0,
      explanation:
        'A Manhattan made with Scotch is a Rob Roy: whisky, sweet vermouth and bitters. With no citrus, egg or cream it is stirred, then served up like the Manhattan. Shaking would cloud and over-dilute it, the Penicillin is a different Scotch drink built on lemon and honey-ginger syrup, and building over crushed ice is the Mint Julep method.',
    },
  ],
};
