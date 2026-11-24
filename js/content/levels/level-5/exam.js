export default {
  passPercent: 80,
  draw: 25,
  timeLimitMinutes: 45,
  questions: [
    // ---------------------------------------------------------------- The Physiology of Flavor
    {
      id: 'x5-1',
      lesson: 'l5-physiology-of-flavor',
      type: 'single',
      context: `**Panel log**
An experienced taster with a heavy head cold scores a familiar fruity bourbon: "Hot and a little bitter, faintly sweet and sour. No vanilla, no cherry, no oak."
Two days later, recovered, the same taster scores the same bottle with all its usual notes.`,
      prompt: `Which explanation best fits the first note?`,
      options: [
        `The blocked nose cut off retronasal smell, leaving only taste and trigeminal sensations.`,
        `The cold dulled the taste buds that detect vanilla and cherry, while the nose kept working.`,
        `The infection shut down TRPV1, so the burn that usually carries the aroma was missing.`,
        `The taster developed a specific anosmia to vanillin that lasted as long as the cold.`,
      ],
      answer: 0,
      explanation: `Vanilla, cherry and oak are aromas, and from the mouth they reach the nose retronasally, up the back of the throat, so a blocked nose stops them. Taste still reports sweet, sour and bitter, and the reported heat shows TRPV1 still works. Taste buds cannot detect vanilla or cherry at all, and a specific anosmia is a stable trait affecting one compound, so it cannot explain a temporary loss of every aroma.`,
    },
    {
      id: 'x5-2',
      lesson: 'l5-physiology-of-flavor',
      type: 'multi',
      context: `**Lab and panel data: wheated bourbon at 45% ABV**
- Lab: sugar content close to zero, within the range expected from oak alone.
- Descriptive panel: sweetness 6 of 10; vanilla 7 of 10; coconut 5 of 10.`,
      prompt: `Which statements are consistent with this data? Select all that apply.`,
      options: [
        `Vanilla and coconut aromas reaching the nose retronasally raise the sweetness the panel perceives.`,
        `The sweetness score would likely fall if the panel tasted the whiskey with their noses pinched.`,
        `Oak adds traces of wood sugars, usually far too little to explain a sweetness score this high.`,
        `Vanillin is itself a sugar, so the lab test must have missed most of the sugar present.`,
        `The TRPV1 burn of ethanol is read by the brain as sweetness at this strength.`,
      ],
      answer: [0, 1, 2],
      explanation: `This is cross-modal enhancement: vanillin and whisky lactone smell like sweet foods, and arriving retronasally they raise perceived sweetness, so blocking the nose should lower the score. Oak sugars are real but tiny. Vanillin is a phenolic aldehyde from lignin, not a sugar, and TRPV1 reports heat and irritation, never sweetness.`,
    },
    {
      id: 'x5-3',
      lesson: 'l5-physiology-of-flavor',
      type: 'numeric',
      context: `**Nosing prep**
A blender pipettes 12 mL of a cask sample at 61% ABV into a glass and adds 24 mL of still water.`,
      prompt: `What is the strength of the reduced sample? Ignore volume contraction and round to one decimal place.`,
      answer: 20.3,
      tolerance: 0.05,
      unit: '% ABV',
      explanation: `Alcohol is conserved: 12 mL × 0.61 = 7.32 mL of ethanol in a total of 12 + 24 = 36 mL, and 7.32 ÷ 36 = 0.2033, so 20.3% ABV. Dividing by the water alone (7.32 ÷ 24) gives 30.5%, which forgets that the sample's own volume is part of the total. The result sits close to the roughly 20% ABV at which blenders nose. Check it with the Adding water tool.`,
    },
    {
      id: 'x5-4',
      lesson: 'l5-physiology-of-flavor',
      type: 'multi',
      context: `**Teaching data: dilution series of one heavily peated malt** (mean panel scores, 0-10)
- 58% ABV: burn 8.5, smoke 3.0
- 40% ABV: burn 6.0, smoke 5.0
- 30% ABV: burn 3.5, smoke 6.5
- 20% ABV: burn 1.5, smoke 5.0`,
      prompt: `Each dilution lowers the amount of smoky phenols in every mL, yet the smoke score rises to 30% ABV and then falls. Which statements help explain this curve? Select all that apply.`,
      options: [
        `With less ethanol in the liquid, more of the smoky phenols escape into the headspace.`,
        `As burn and ethanol vapor fall, aroma that they masked at full strength comes through.`,
        `By 20% ABV the phenols are so diluted that the loss in concentration outweighs the gain in release.`,
        `Water reacts with esters in the glass to form new guaiacol as the strength drops.`,
        `Smoke perception depends on TRPV1 burn, so smoke should rise and fall with the burn score.`,
      ],
      answer: [0, 1, 2],
      explanation: `Two effects pull against each other. Lowering the ethanol frees aroma into the headspace and removes the masking burn and ethanol vapor, which lifts smoke from 58% to 30% ABV. Each dilution also lowers the phenol concentration, and by 20% that loss wins. Water does not make guaiacol, and smoke rose while burn fell, so smoke cannot simply track TRPV1.`,
    },
    {
      id: 'x5-5',
      lesson: 'l5-physiology-of-flavor',
      type: 'match',
      prompt: `Match each observation to the perceptual effect it shows.`,
      pairs: [
        { left: `A taster knows glass 3 differs from plain water but cannot say how`, right: `A level above the detection threshold and below the recognition threshold` },
        { left: `One glass loses its aroma during a minute of continuous sniffing`, right: `Adaptation` },
        { left: `Fruit flavor arrives only when a pinched nose is released mid-chew`, right: `Retronasal smell` },
        { left: `A white wine dyed red is described in red-wine terms`, right: `Visual context bias` },
        { left: `A sharp prickle in the nose from a cask-strength glass, with no smell attached`, right: `Chemesthesis` },
      ],
      explanation: `Sensing a difference before naming it places the level between the detection and recognition thresholds. A single glass fading under continuous sniffing is adaptation; cross-adaptation would need a second, similar odor. The jellybean effect is retronasal smell, the dyed-wine study shows a color cue biasing the description, and a prickle with no smell is trigeminal irritation, which is chemesthesis.`,
    },
    {
      id: 'x5-6',
      lesson: 'l5-physiology-of-flavor',
      type: 'truefalse',
      context: `**TARNBECK 25**
Single Malt Scotch Whisky
Aged 25 Years · 60.2% Alc./Vol. · 700 mL
Panel note: "Intense burn, drying, aroma tight."

**SILVERHOWE**
Blended Scotch Whisky
40% Alc./Vol. · 700 mL
Panel note: "Gentle, almost no burn, easy."`,
      prompt: `True or false: the stronger burn shows that the 25-year-old is harsher, and so lower in quality, than the blend.`,
      answer: false,
      explanation: `Burn tracks ethanol concentration acting on TRPV1, so a whisky at 60.2% ABV will burn far more than one at 40% whatever its age or quality. To compare quality, reduce both to the same strength and taste again. The tight aroma at full strength is expected too, because ethanol holds aroma compounds in the liquid.`,
    },
    {
      id: 'x5-7',
      lesson: 'l5-physiology-of-flavor',
      type: 'single',
      context: `**Trigeminal check**
- Water at 40 °C held in the mouth: warm, no burn.
- A whiskey at 50% ABV and 20 °C held in the mouth: hot and burning.`,
      prompt: `Why does the cooler liquid burn while the warmer one does not?`,
      options: [
        `Ethanol lowers the heat threshold of TRPV1 below mouth temperature, so the receptor fires at body heat.`,
        `Ethanol activates the sweet and bitter taste receptors, and the brain reads their combined signal as heat.`,
        `Ethanol evaporating from the tongue releases heat that raises the mouth above 42 °C.`,
        `Ethanol vapor reaches olfactory receptors in the nose that are tuned to report heat.`,
      ],
      answer: 0,
      explanation: `TRPV1 normally fires above about 42 °C, so water at 40 °C does not trigger it. In laboratory studies of the receptor, ethanol lowered that threshold to about 34 °C, below the temperature inside the mouth, so the receptor fires and the brain reports burn. Evaporation cools the tongue rather than heating it, and burn is a trigeminal sensation carried by neither taste nor smell receptors.`,
    },
    {
      id: 'x5-8',
      lesson: 'l5-physiology-of-flavor',
      type: 'single',
      context: `**Panel log, clear glasses**
Glass A and glass B hold the same 10-year-old single malt Scotch whisky. Before service, plain caramel (E150a) was added to glass B to darken it.
- A: "Light. Honey, green apple, malt."
- B: "Older and richer. Raisin, sherry, polished wood."`,
      prompt: `What best explains the difference, and how should the panel prevent it?`,
      options: [
        `The darker color was read as a sign of age and sherry, a stimulus error; serve in dark or blue glasses.`,
        `Caramel coloring is banned in Scotch whisky, so glass B must have held another spirit; check the pour records.`,
        `Glass B was nosed second, so adaptation to glass A exaggerated its notes; rest 30-60 seconds between glasses.`,
        `The panel has a specific anosmia to the sherry compounds in glass A; replace the assessors.`,
      ],
      answer: 0,
      explanation: `This is a stimulus error: an irrelevant cue in the glass, here color, is read as information about age and cask, just as dyed white wine was described in red-wine terms in the study by Morrot and colleagues. Dark or blue glasses remove the cue. Plain caramel (E150a) is permitted in Scotch whisky under the Scotch Whisky Regulations 2009, so its use is no sign of a different spirit, and adaptation dulls later samples rather than adding notes such as raisin.`,
    },
    {
      id: 'x5-9',
      lesson: 'l5-physiology-of-flavor',
      type: 'order',
      prompt: `Put the steps of retronasal smell in order, from sip to perception.`,
      items: [
        `The whiskey is held and warmed in the mouth, mixing with saliva`,
        `Volatile compounds escape into the air inside the mouth`,
        `Swallowing or breathing out pushes that air up the back of the throat`,
        `The odorants reach the olfactory receptors in the nose`,
        `The brain reads the combined receptor pattern as a flavor such as cherry`,
      ],
      explanation: `Retronasal smell starts in the mouth, where warmth and saliva release volatiles. Swallowing or exhaling then carries them up the back of the throat to the same receptors used for sniffing, and the brain reads the pattern across about 400 receptor types. The receptors sit in the nose, so no step involves the taste buds, which is why most of what people call taste is smell.`,
    },

    // ---------------------------------------------------------------- Congeners
    {
      id: 'x5-10',
      lesson: 'l5-congeners',
      type: 'numeric',
      context: `**Spirit receiver sample**
New make at 70% ABV. GC-FID: isoamyl alcohol 0.84 g per liter of sample.`,
      prompt: `Express the isoamyl alcohol content in grams per 100 liters of absolute alcohol (g/100 L AA). Round to the nearest whole number.`,
      answer: 120,
      tolerance: 0.5,
      unit: 'g/100 L AA',
      explanation: `One liter of sample holds 0.70 L of absolute alcohol, so 0.84 g ÷ 0.70 L AA = 1.2 g per liter of AA, which is 120 g/100 L AA. Multiplying by 0.70 instead of dividing gives 58.8, a number with no physical meaning. The per-AA figure stays at 120 after the spirit is reduced with water, which is why distillers report congeners this way.`,
    },
    {
      id: 'x5-11',
      lesson: 'l5-congeners',
      type: 'numeric',
      context: `**GC report: new make reduced to 20% ABV** (illustrative thresholds, measured in the same matrix)
- Ethyl acetate: 120 mg/L; threshold 40 mg/L
- Isoamyl acetate: 1.8 mg/L; threshold 0.10 mg/L
- Ethyl octanoate: 0.6 mg/L; threshold 0.05 mg/L
- Isoamyl alcohol: 200 mg/L; threshold 125 mg/L`,
      prompt: `How many times greater is the odor activity value of isoamyl acetate than that of ethyl acetate? Give a whole number.`,
      answer: 6,
      tolerance: 0,
      unit: 'times',
      explanation: `OAV = concentration ÷ threshold. Isoamyl acetate: 1.8 ÷ 0.10 = 18. Ethyl acetate: 120 ÷ 40 = 3. So 18 ÷ 3 = 6, even though ethyl acetate is about 67 times more concentrated; comparing concentrations alone would rank the two the wrong way round.`,
    },
    {
      id: 'x5-12',
      lesson: 'l5-congeners',
      type: 'multi',
      context: `**GC report: new make reduced to 20% ABV** (illustrative thresholds, measured in the same matrix)
- Isoamyl alcohol: 110 mg/L; threshold 120 mg/L
- Isobutanol: 60 mg/L; threshold 200 mg/L
- Ethyl octanoate: 0.35 mg/L; threshold 0.025 mg/L
- 2-Phenylethanol: 6 mg/L; threshold 15 mg/L
- 4-Vinylguaiacol: 0.09 mg/L; threshold 0.04 mg/L
- Diacetyl: 0.12 mg/L; threshold 0.08 mg/L`,
      prompt: `Judged by odor activity value, which compounds are likely to contribute to this aroma? Select all that apply.`,
      options: [`Isoamyl alcohol`, `Isobutanol`, `Ethyl octanoate`, `2-Phenylethanol`, `4-Vinylguaiacol`, `Diacetyl`],
      answer: [2, 4, 5],
      explanation: `The OAVs are ethyl octanoate 14, 4-vinylguaiacol about 2.3 and diacetyl 1.5, all above 1. Isoamyl alcohol is the most concentrated compound in the table but sits at about 0.92, just below its threshold, and isobutanol (0.3) and 2-phenylethanol (0.4) are below too. Compounds under threshold can still add up or mask others, which is why labs confirm OAV rankings by sniffing.`,
    },
    {
      id: 'x5-13',
      lesson: 'l5-congeners',
      type: 'order',
      prompt: `Put these congeners in the order in which they concentrate during a pot-still spirit run, earliest first.`,
      items: [`Acetaldehyde`, `Ethyl acetate`, `Ethyl hexanoate`, `Octanoic (caprylic) acid`],
      explanation: `Acetaldehyde is more volatile than ethanol at every strength, so it leads, with ethyl acetate close behind in the heads. Fruity esters such as ethyl hexanoate concentrate in the heart, and fatty acids such as octanoic acid come late, in the feints. Boiling point alone is a poor guide; what decides the order is each compound's volatility relative to ethanol at the strength of the liquid in the still.`,
    },
    {
      id: 'x5-14',
      lesson: 'l5-congeners',
      type: 'match',
      prompt: `Match each precursor to the higher alcohol that yeast makes from it.`,
      pairs: [
        { left: `Leucine`, right: `3-Methylbutan-1-ol (isoamyl alcohol)` },
        { left: `Isoleucine`, right: `2-Methylbutan-1-ol (active amyl alcohol)` },
        { left: `Valine`, right: `2-Methylpropan-1-ol (isobutanol)` },
        { left: `Phenylalanine`, right: `2-Phenylethanol` },
        { left: `2-Oxobutanoate, from threonine metabolism`, right: `n-Propanol` },
      ],
      explanation: `In the Ehrlich pathway each amino acid is transaminated to a keto acid, decarboxylated to an aldehyde and reduced to an alcohol. Leucine and isoleucine both give amyl alcohols, so they are easy to swap: leucine gives the 3-methyl isomer (isoamyl) and isoleucine the 2-methyl isomer (active amyl). n-Propanol forms by a related route from 2-oxobutanoate.`,
    },
    {
      id: 'x5-15',
      lesson: 'l5-congeners',
      type: 'match',
      prompt: `Match each compound to the building blocks it forms from.`,
      pairs: [
        { left: `Ethyl acetate`, right: `Acetyl-CoA joined to ethanol` },
        { left: `Isoamyl acetate`, right: `Acetyl-CoA joined to isoamyl alcohol` },
        { left: `2-Phenylethyl acetate`, right: `Acetyl-CoA joined to 2-phenylethanol` },
        { left: `Ethyl octanoate`, right: `Octanoyl-CoA joined to ethanol` },
        { left: `1,1-Diethoxyethane`, right: `Acetaldehyde joined to two ethanol molecules` },
      ],
      explanation: `Acetate esters join acetyl-CoA to an alcohol, so the alcohol names the ester: ethanol gives ethyl acetate and isoamyl alcohol gives the banana ester. Ethyl esters reverse the pattern, joining a fatty acid (as its acyl-CoA) to ethanol. 1,1-Diethoxyethane is an acetal, formed when acetaldehyde reacts with two ethanol molecules, so it has no acid part at all.`,
    },
    {
      id: 'x5-16',
      lesson: 'l5-congeners',
      type: 'multi',
      context: `**Panel note: heavily peated new make, sampled at the spirit safe** (no wood contact)
"Iodine, hospital bandage and tar. Bonfire smoke. A faint note of clove."`,
      prompt: `Which compounds could account for the notes in this description? Select all that apply.`,
      options: [
        `Phenol and the cresols`,
        `Guaiacol and 4-methylguaiacol`,
        `4-Vinylguaiacol`,
        `cis-Whisky lactone`,
        `Dimethyl trisulfide (DMTS)`,
        `Isoamyl acetate`,
      ],
      answer: [0, 1, 2],
      explanation: `Medicinal, iodine and tarry notes come from phenol and the cresols, and bonfire smoke from guaiacol and 4-methylguaiacol, all carried from peat smoke into the malt. Clove in a spirit that has never touched wood points to 4-vinylguaiacol, made from grain ferulic acid. Whisky lactone needs oak, DMTS smells of cooked cabbage and isoamyl acetate of banana, so none of them fits this note.`,
    },
    {
      id: 'x5-17',
      lesson: 'l5-congeners',
      type: 'single',
      context: `**GC-FID comparison** (illustrative values, g/100 L AA)
- Apple brandy: methanol 350
- Malt whiskey new make: methanol 5`,
      prompt: `What best explains the difference in methanol?`,
      options: [
        `Methanol is split from pectin, which apples contain in quantity and malted barley has little of.`,
        `Copper in malt whiskey stills binds methanol and removes it from the vapor.`,
        `Yeast makes methanol as it ferments sugar, and apple juice holds more sugar than wort.`,
        `Kilning the malt drives off the methanol that the barley would otherwise release.`,
      ],
      answer: 0,
      explanation: `An enzyme splits methyl groups off pectin, a fruit cell-wall polymer, and those become methanol, so fruit spirits carry far more than grain spirits. Methanol is not a by-product of yeast fermenting sugar, so the sugar content of the juice is beside the point. Copper binds sulfur compounds, and methanol has no sulfur for it to bind.`,
    },
    {
      id: 'x5-18',
      lesson: 'l5-congeners',
      type: 'single',
      context: `**Trainee's prediction**
Approximate boiling points of the pure compounds: acetaldehyde 20 °C; ethyl acetate 77 °C; ethanol 78 °C; isoamyl alcohol 131 °C; ethyl hexanoate 168 °C.
"Isoamyl alcohol and ethyl hexanoate boil far above ethanol, so the wash still will leave them behind in the pot ale."`,
      prompt: `Why is the trainee's prediction wrong?`,
      options: [
        `In dilute liquid such as an 8% wash, both compounds are more volatile than ethanol, so they distill into the low wines.`,
        `Copper in the wash still binds both compounds and carries them over into the low wines with the vapor.`,
        `Both compounds form only during maturation, so the wash holds none of them to leave behind.`,
        `Mixed with ethanol, each compound boils at exactly 78 °C, so it leaves the still along with the ethanol.`,
      ],
      answer: 0,
      explanation: `Boiling point is a poor guide: what decides when a congener distills is its volatility relative to ethanol at the strength of the boiling liquid. In a dilute wash, isoamyl alcohol and the esters are more volatile than ethanol, so the wash still carries both compounds into the low wines; isoamyl alcohol hangs back only in strong liquid. Copper binds sulfur compounds, yeast makes both compounds during fermentation, and a mixture does not boil each of its components at ethanol's boiling point.`,
    },

    // ---------------------------------------------------------------- Wood Chemistry and Maturation Science
    {
      id: 'x5-19',
      lesson: 'l5-wood-chemistry',
      type: 'numeric',
      prompt: `A distillery wants a cask with 1.5 times the surface-area-to-volume ratio of its 200 L barrels, in the same shape. What volume should the cask be? Round to the nearest whole liter.`,
      answer: 59,
      tolerance: 0.5,
      unit: 'L',
      explanation: `SA/V scales as V^-1/3^, so (200 ÷ V)^1/3^ = 1.5. Cubing both sides gives 200 ÷ V = 3.375, so V = 200 ÷ 3.375 = 59.3 L, about 59 L. Dividing 200 by 1.5 gives 133 L, which forgets that surface area grows more slowly than volume.`,
    },
    {
      id: 'x5-20',
      lesson: 'l5-wood-chemistry',
      type: 'multi',
      context: `**Cask analysis after 12 years** (illustrative, g/100 L AA)
Two casks of the same size and char, filled from two batches of the same distillery's new make. At filling, both batches gave the same GC congener analysis.
- Cask A: acetaldehyde 14; acetic acid 55; ethyl acetate 75
- Cask B: acetaldehyde 6; acetic acid 20; ethyl acetate 40`,
      prompt: `Which differences could explain why cask A has run further along the oxidation chain? Select all that apply.`,
      options: [
        `More oxygen reached cask A, for example through thinner staves or a looser bung`,
        `Cask A's wood was richer in oxidizable phenolics such as ellagitannins`,
        `Cask A held more trace iron or copper to catalyze the peroxide step`,
        `Cask A's char adsorbed more of the spirit's acetic acid`,
        `Cask A's oak was richer in whisky lactone, which oxidizes to acetic acid`,
      ],
      answer: [0, 1, 2],
      explanation: `The chain needs oxygen entering through the wood, wood phenolics that oxidize and release hydrogen peroxide, and trace iron or copper so the peroxide can oxidize ethanol to acetaldehyde, which goes on to acetic acid and then ethyl acetate. More of any of the three moves a cask further along. Adsorption on char removes compounds, so it cannot explain higher levels in cask A, and whisky lactone is an extractive with no part in the chain.`,
    },
    {
      id: 'x5-21',
      lesson: 'l5-wood-chemistry',
      type: 'single',
      context: `**Release note: malt whiskey, 18 months in 20 L new charred casks**
Panel: "Deep amber. Heavy vanilla and coconut, drying tannin. Underneath: sharp pear-drop esters and raw cereal."`,
      prompt: `Which explanation best fits this profile?`,
      options: [
        `The small cask's high SA/V sped extraction, while slow, time-dependent reactions such as oxidation could not keep pace.`,
        `Small casks speed every maturation reaction in proportion, so the whiskey matches a much older one from a standard barrel.`,
        `The char layer added the cereal and pear-drop notes, as char does in every new cask.`,
        `The casks leaked, so excess oxygen replaced the wood flavors with new-make notes.`,
      ],
      answer: 0,
      explanation: `A 20 L cask has (200 ÷ 20)^1/3^, about 2.2 times, the wood contact per liter of a 200 L barrel, so color, vanillin, lactone and tannin arrive fast. Oxidation, esterification and the other interactive reactions depend on time and do not keep pace, so raw new-make notes survive. A small cask therefore does not make an older whiskey faster, and char removes compounds by adsorption rather than adding cereal or ester notes.`,
    },
    {
      id: 'x5-22',
      lesson: 'l5-wood-chemistry',
      type: 'match',
      prompt: `Match each oak-derived compound to its aroma.`,
      pairs: [
        { left: `cis-Whisky lactone`, right: `Coconut, fresh-sawn wood` },
        { left: `Vanillin`, right: `Vanilla, custard` },
        { left: `Eugenol`, right: `Clove` },
        { left: `Maltol and cyclotene`, right: `Caramel` },
        { left: `Furfural`, right: `Almond, toasted bread` },
        { left: `Guaiacol`, right: `Smoke` },
      ],
      explanation: `Whisky lactone is the coconut note of American oak, vanillin comes from lignin, and eugenol is the oak source of clove. Maltol, cyclotene and furfural all come from toasted hemicellulose sugars, so they are easy to confuse: maltol and cyclotene smell of caramel, furfural of almond and toast. Guaiacol is the smoky phenol that toasting releases from lignin, the same compound peat smoke supplies.`,
    },
    {
      id: 'x5-23',
      lesson: 'l5-wood-chemistry',
      type: 'match',
      context: `**Cask chemistry flight** (four single casks, each marker scored 0-3)
Markers: lactone (coconut), vanillin, tannin (drying grip), dried fruit (raisin, walnut), sulfur (struck match)`,
      prompt: `Match each glass to the cask that best explains its scores.`,
      pairs: [
        { left: `Lactone 3, vanillin 3, tannin 3, dried fruit 0, sulfur 0`, right: `New charred American oak (straight bourbon)` },
        { left: `Lactone 2, vanillin 2, tannin 1, dried fruit 0, sulfur 0`, right: `First-fill ex-bourbon American oak` },
        { left: `Lactone 0, vanillin 1, tannin 0, dried fruit 0, sulfur 0`, right: `Well-used refill cask` },
        { left: `Lactone 0, vanillin 1, tannin 3, dried fruit 3, sulfur 1`, right: `Sherry-seasoned European oak` },
      ],
      explanation: `New charred American oak gives the most lactone, vanillin and fresh-wood tannin. A first-fill ex-bourbon cask still gives lactone and vanilla, with less tannin because its first extraction went into the bourbon, while a tired refill cask gives little of anything. Dried fruit, strong ellagitannin grip and a struck-match note mark sherry-seasoned European oak; lactone-rich American oak would show coconut.`,
    },
    {
      id: 'x5-24',
      lesson: 'l5-wood-chemistry',
      type: 'order',
      prompt: `Put these stages in the life of a toasted and charred barrel in order, first to last.`,
      items: [
        `Staves are seasoned outdoors while rain leaches harsh tannins`,
        `The cooper raises the barrel, bending the staves over heat`,
        `Slow toasting breaks hemicellulose and lignin into furans and aldehydes`,
        `Charring turns the inner surface into porous carbon`,
        `New make moves through cracks in the char into the red layer`,
      ],
      explanation: `Seasoning happens on the stave stack before any barrel exists, and the cooper raises the barrel before the heat treatment that sets its flavor. Toasting comes before charring, because the red layer is toasted wood lying beneath the char. Only after filling can the spirit move through the cracks in the char and extract the sugars and aldehydes of that layer.`,
    },
    {
      id: 'x5-25',
      lesson: 'l5-wood-chemistry',
      type: 'multi',
      prompt: `Which effects does charring the inside of a barrel have on the spirit it holds? Select all that apply.`,
      options: [
        `A porous carbon layer adsorbs sulfur compounds such as DMTS`,
        `Cracks in the char let the spirit reach the toasted red layer beneath`,
        `The char creates coconut-scented whisky lactone from cellulose`,
        `The burned surface forms new ellagitannins such as vescalagin`,
        `The char seals the wood so that no oxygen can reach the spirit`,
      ],
      answer: [0, 1],
      explanation: `Char works like activated charcoal, adsorbing sulfur compounds, and its cracks expose the red layer of caramelized sugars and lignin aldehydes. Whisky lactone and ellagitannins are extractives that occur naturally in the wood; char makes neither. Oxygen still diffuses in through the staves and bung, which is what drives the oxidation chain.`,
    },
    {
      id: 'x5-26',
      lesson: 'l5-wood-chemistry',
      type: 'multi',
      context: `**Cask analysis**
A 25-year-old single malt from a third-fill refill hogshead still shows clear vanilla, and GC confirms vanillin.`,
      prompt: `Which routes could have supplied the vanillin? Select all that apply.`,
      options: [
        `Lignin broken down by heat when the cask was toasted or charred, via coniferaldehyde`,
        `Ethanolysis, in which ethanol slowly breaks down lignin throughout maturation`,
        `Hemicellulose sugars caramelizing at warehouse temperatures`,
        `Copper in the still converting ethanol into vanillin`,
        `Esterification of acetic acid with ethanol in the cask`,
      ],
      answer: [0, 1],
      explanation: `Vanillin comes from lignin, released by heat during toasting and charring and also slowly by ethanolysis, which keeps working for decades even in a tired cask. Hemicellulose gives furans and caramel compounds when heated in the cooperage, and a warehouse never reaches toasting temperatures. Esterification of acetic acid with ethanol makes ethyl acetate, and copper in the still has no route to vanillin.`,
    },

    // ---------------------------------------------------------------- Faults, Off-Notes and Quality Control
    {
      id: 'x5-27',
      lesson: 'l5-faults-and-qc',
      type: 'single',
      context: `**QC: new make batch 214 against spec** (g/100 L AA)
- Acetaldehyde: spec 10-15; batch 13
- Ethyl acetate: spec 30-45; batch 58
- Acetic acid: spec 8 or less; batch 25
- Butyric acid: spec 0.5 or less; batch 2.1
- Octanoic and decanoic acids: spec 4-8; batch 6
- Furfural: spec 2 or less; batch 1.4

Panel: "Sharp and vinegary, with a rancid-butter edge."`,
      prompt: `Where should the investigation start?`,
      options: [
        `In the washbacks, because acetic and butyric acids point to bacterial infection`,
        `At the feints cut, because late-run compounds have been drawn into the heart`,
        `At the foreshots cut, because too much of the heads has reached the spirit`,
        `At the condensers, because too little copper contact has left acids in the spirit`,
      ],
      answer: 0,
      explanation: `Vinegar and rancid butter with high acetic and butyric acid are the signature of bacteria in the fermentation, and the high ethyl acetate fits the same picture. The feints markers, fatty acids and furfural, are in spec, which rules out a late cut. A short foreshots cut would raise acetaldehyde as well, and it is in spec, while copper removes sulfur compounds and does nothing to acids.`,
    },
    {
      id: 'x5-28',
      lesson: 'l5-faults-and-qc',
      type: 'match',
      prompt: `Match each problem to the fix or prevention that addresses its cause.`,
      pairs: [
        { left: `Chill haze in a 43% ABV whiskey`, right: `Chill filtration, or bottling at about 46% ABV or above` },
        { left: `White haze that stays when the bottle is warmed`, right: `Demineralized or reverse-osmosis reduction water` },
        { left: `Dark, inky haze with a metallic taste`, right: `Keeping iron out of the water and equipment` },
        { left: `Musty, damp-cellar taint across several products`, right: `Removing halophenol-treated wood and screening closures` },
        { left: `Cooked-cabbage, meaty new make`, right: `Restoring copper contact in the still` },
        { left: `Struck match in one vatting that includes ex-wine casks`, right: `Nosing casks one by one and rejecting affected ones before vatting` },
      ],
      explanation: `Each fix removes a cause: chill filtration takes out long-chain esters, soft water carries no calcium or magnesium, and low-iron water and equipment stop iron-tannin complexes forming. Haloanisoles come from treated wood and corks, sulfides survive when copper contact is too low, and one fumigated cask can taint a whole vatting. Chill filtration is the tempting answer for every haze, but it targets esters, so it is the wrong tool for mineral or iron haze.`,
    },
    {
      id: 'x5-29',
      lesson: 'l5-faults-and-qc',
      type: 'numeric',
      context: `**Reduction order**
Vatting: 1,200 L at 61.5% ABV. Target: 46% ABV.
Reverse-osmosis water is specified to avoid mineral haze.`,
      prompt: `Using C1 × V1 = C2 × V2 and ignoring volume contraction, how many liters of water must be added? Round to the nearest liter.`,
      answer: 404,
      tolerance: 0.5,
      unit: 'L',
      explanation: `V2 = 1,200 × 61.5 ÷ 46 = 1,604.3 L, so add 1,604.3 − 1,200 = 404 L of water; 1,604 L is the final volume, a common wrong answer. Reverse-osmosis water keeps out the calcium and magnesium salts behind mineral haze. In practice slightly more water is needed, because ethanol and water contract when mixed. Check it with the Adding water tool.`,
    },
    {
      id: 'x5-30',
      lesson: 'l5-faults-and-qc',
      type: 'single',
      context: `**Lab request**
The cask-selection panel has flagged a musty, corked note in one vatting. Before the vatting is rejected, the lab must confirm whether TCA is present and measure it at a few nanograms per liter.`,
      prompt: `Which method should the lab use?`,
      options: [`GC-MS`, `GC-FID`, `HPLC`, `Spectrophotometry`],
      answer: 0,
      explanation: `A mass spectrometer identifies compounds and can measure trace volatiles such as haloanisoles at ng/L. GC-FID quantifies the major congeners, so it is the tempting choice, yet it does not identify compounds and is not the tool for traces at ng/L. HPLC handles less volatile compounds such as wood aldehydes, and spectrophotometry measures color.`,
    },
    {
      id: 'x5-31',
      lesson: 'l5-faults-and-qc',
      type: 'order',
      prompt: `Put the formation of ethyl carbamate in malt whisky in order, first to last.`,
      items: [
        `Barley makes the cyanogenic glycoside epiheterodendrin (EPH)`,
        `During fermentation, isobutyraldehyde cyanohydrin is released from EPH`,
        `The cyanohydrin breaks down to cyanide, which distills over`,
        `Copper catalyzes the oxidation of cyanide to cyanate`,
        `Cyanate reacts with ethanol to form ethyl carbamate`,
      ],
      explanation: `The chain starts in the barley, which is why barley varieties that make little or no EPH are the main control. Fermentation releases the cyanohydrin, which breaks down to volatile cyanide; copper then catalyzes its oxidation to cyanate. Placing copper earlier is the common slip: copper acts on cyanide, so the cyanide must exist first, and ethanol joins only at the last step.`,
    },
    {
      id: 'x5-32',
      lesson: 'l5-faults-and-qc',
      type: 'numeric',
      context: `**Lab certificate: QUILLAN FORD cask-strength vatting**
Strength: 62.5% ABV
Ethyl carbamate: 190 µg/L
Plan: reduce with water to 43% ABV before bottling`,
      prompt: `What will the ethyl carbamate concentration be in the bottled whiskey? Ignore volume contraction and round to the nearest whole µg/L.`,
      answer: 131,
      tolerance: 0.5,
      unit: 'µg/L',
      explanation: `Water adds no ethyl carbamate, so its concentration falls in proportion to the strength: 190 × 43 ÷ 62.5 = 130.7, about 131 µg/L. That is below Canada's maximum level of 150 µg/L for distilled spirits and above the US voluntary industry target of 125 µg/L for whiskey. Multiplying by 62.5 ÷ 43 instead gives 276 µg/L, a rise that adding water cannot cause.`,
    },
    {
      id: 'x5-33',
      lesson: 'l5-faults-and-qc',
      type: 'match',
      prompt: `Match each case to its most likely diagnosis.`,
      pairs: [
        { left: `Sealed bottle; muted nose with a damp-cardboard must`, right: `Haloanisole taint such as TCA` },
        { left: `Bottle opened a year ago, now a quarter full; dull and tired but clean`, right: `Aroma loss and slow oxidation in an open bottle` },
        { left: `Soapy, waxy note; GC shows caprylic and capric acids above spec`, right: `Excess fatty acids` },
        { left: `Meaty, cooked-cabbage new make after the stills were run harder to raise output`, right: `Sulfides left by too little copper contact` },
      ],
      explanation: `A musty, muted nose in a sealed bottle points to haloanisoles, while a dull but clean whiskey in a long-open, nearly empty bottle has lost aroma to the air space. Caprylic and capric acids are the soapy, waxy fatty acids. Running a still hard cuts the copper contact the vapor gets, so more DMTS and related sulfides survive into the new make.`,
    },
    {
      id: 'x5-34',
      lesson: 'l5-faults-and-qc',
      type: 'multi',
      context: `**Still-house review**
New make panel, last three weeks: "Sweaty, leathery, tobacco, wet cardboard."
The heart-to-feints cut point has not changed, but the feints receiver level has climbed every week.`,
      prompt: `Which actions address the likely cause? Select all that apply.`,
      options: [
        `Reduce the volume of feints recycled into each spirit-still charge`,
        `Draw off part of the built-up feints for separate redistillation or disposal`,
        `Make the heart-to-feints cut later so that more of the receiver is recovered as spirit`,
        `Increase copper contact by replacing the condensers`,
        `Switch to demineralized water for reduction`,
        `Lengthen fermentation to raise ester levels`,
      ],
      answer: [0, 1],
      explanation: `Sweaty, leathery and cardboard notes are feints compounds reaching the heart. The cut has not changed, so the climbing receiver level points to a recycle that has built up and overloaded each charge; recycling less and drawing off part of the surplus both tackle that. A later cut would slow the receiver's rise but let even more feints compounds into the spirit, while copper targets sulfur, reduction water targets haze, and a longer ferment leaves the feints problem untouched.`,
    },

    // ---------------------------------------------------------------- Sensory Methods and Deductive Tasting
    {
      id: 'x5-35',
      lesson: 'l5-sensory-methods',
      type: 'numeric',
      prompt: `A triangle test was planned for 40 assessors, but only 36 attended. Using the exact one-tailed binomial at α = 0.05 with chance 1/3, what is the minimum number of correct answers needed to conclude that the samples differ?`,
      answer: 18,
      tolerance: 0,
      unit: 'correct answers',
      explanation: `For 36 assessors the probability of 18 or more correct by guessing is about 0.028, below 0.05, while 17 or more has a probability of about 0.058, so 18 is the critical value. Guessing alone would give about 12 correct (36 ÷ 3), so beating chance by a few answers is not enough. Check it with the Triangle test tool.`,
    },
    {
      id: 'x5-36',
      lesson: 'l5-sensory-methods',
      type: 'single',
      context: `**Draft report**
Duo-trio test, spirit from the new still vs the old still. 30 assessors, 15 correct.
Conclusion as written: "Significant at α = 0.05, because the triangle table shows 15 of 30 is enough."`,
      prompt: `What is wrong with the conclusion?`,
      options: [
        `A duo-trio has a chance level of 1/2, so 15 of 30 is exactly what guessing predicts; the triangle table does not apply.`,
        `Nothing is wrong; 15 of 30 is significant at α = 0.05 in any discrimination test with 30 assessors.`,
        `A duo-trio has a chance level of 1/4, so 15 of 30 is highly significant and the triangle table understates it.`,
        `The conclusion is right, but it should cite the duo-trio table, which also gives 15 for 30 assessors.`,
      ],
      answer: 0,
      explanation: `The triangle table assumes a 1/3 chance of guessing right. In a duo-trio the chance is 1/2, so 30 guessing assessors would average 15 correct, and the probability of 15 or more is about 0.57; a duo-trio needs 20 of 30, so no table supports the written conclusion. No discrimination test in this lesson has a 1/4 chance level, and the honest conclusion is that this test did not detect a difference, which is not proof that the spirits are identical.`,
    },
    {
      id: 'x5-37',
      lesson: 'l5-sensory-methods',
      type: 'single',
      context: `**Email from the brand manager**
"We want to switch to a faster-fermenting yeast. I've asked our eight trained QC assessors which of the two new makes they prefer. If most prefer the new one, we switch."`,
      prompt: `Which plan answers the business question properly?`,
      options: [
        `Run a triangle or tetrad test first, then profile any difference with the panel and test liking with consumers.`,
        `Keep the preference vote, because trained assessors are the most reliable judges of what consumers will like.`,
        `Run a duo-trio with the eight assessors and treat a simple majority of correct answers as proof of a difference.`,
        `Skip sensory testing, because if the GC profiles differ at all, consumers will notice the change.`,
      ],
      answer: 0,
      explanation: `The first question is whether anyone can tell the new makes apart, which a discrimination test answers; a descriptive panel then measures the difference, and liking belongs to a consumer test with many untrained people. Asking a trained QC panel for preference invites the halo effect and wastes its training. Five of eight correct in a duo-trio is well within guessing (probability about 0.36), and a GC difference can sit below every odor threshold.`,
    },
    {
      id: 'x5-38',
      lesson: 'l5-sensory-methods',
      type: 'match',
      prompt: `Match each panel problem to the bias it shows.`,
      pairs: [
        { left: `Whichever sample is served first scores higher, whatever it is`, right: `Position effect` },
        { left: `A delicate malt scores "thin" when served right after a heavily sherried one`, right: `Contrast effect` },
        { left: `Assessors who like glass 2 also rate its length, balance and fruit higher`, right: `Halo effect` },
        { left: `The darker of two identical whiskies is described as older`, right: `Stimulus error` },
        { left: `Told a sample is 25 years old, the panel rates it richer`, right: `Expectation error` },
        { left: `Scores bunch between 4 and 6 on a 0-10 scale`, right: `Central tendency error` },
      ],
      explanation: `Position effect is tied to serving order, and contrast effect to the sample just before. The halo effect spreads one overall impression across other ratings, and central tendency squeezes scores toward the middle of the scale. Stimulus and expectation errors are easy to swap: stimulus error comes from an irrelevant cue the assessor sees in the glass, expectation error from information the assessor is told.`,
    },
    {
      id: 'x5-39',
      lesson: 'l5-sensory-methods',
      type: 'multi',
      context: `**Panel performance check** ("smoky" scores on a 0-10 line scale)
The same smoky reference was served blind three times to each assessor. A sample with half the guaiacol was served once.
- Assessor A: reference 7, 7, 6; half-guaiacol sample 3
- Assessor B: reference 2, 8, 5; half-guaiacol sample 5
- Assessor C: reference 6, 6, 6; half-guaiacol sample 6
- Assessor D: reference 7, 6, 7; half-guaiacol sample 4`,
      prompt: `Which conclusions does this data support? Select all that apply.`,
      options: [
        `Assessor B has poor repeatability.`,
        `Assessor C is repeatable but does not discriminate between the two samples.`,
        `Assessors A and D are repeatable and discriminate between the samples.`,
        `Assessor C is the strongest assessor, because their scores never vary.`,
        `The half-guaiacol sample is too close to the reference for any assessor to detect.`,
      ],
      answer: [0, 1, 2],
      explanation: `Repeatability means scoring the same sample alike each time, and B swings from 2 to 8. Discrimination means separating samples that really differ: C gives everything a 6, so that perfect consistency is a failure to discriminate. A and D are consistent on the reference and score the weaker sample clearly lower, which also disproves the claim that nobody can detect the difference.`,
    },
    {
      id: 'x5-40',
      lesson: 'l5-sensory-methods',
      type: 'multi',
      context: `**Blind glass 5** (nosed at about 20% ABV, then tasted at full strength)
"Clove, mint, black pepper and rye bread. Rich vanilla, caramel and coconut. Firm, drying tannin. Hot and oily at full strength. No smoke, no dried fruit, nothing meaty."`,
      prompt: `Which inferences does the deductive grid support? Select all that apply.`,
      options: [
        `A rye-rich grain base`,
        `Maturation in new charred American oak`,
        `A high bottling strength, possibly cask strength`,
        `Peated malt in the mash`,
        `An oloroso-seasoned European oak cask`,
        `Worm-tub condensing with little copper contact`,
      ],
      answer: [0, 1, 2],
      explanation: `Clove, mint, pepper and rye bread point to rye, whose ferulic acid can give 4-vinylguaiacol; strong vanilla, caramel, coconut and firm tannin point to new charred American oak; heavy burn and an oily texture suggest a high strength. No smoke rules out the guaiacol and cresols of peat, no dried fruit or walnut argues against an oloroso cask, and nothing meaty argues against worm tubs or low copper contact.`,
    },
    {
      id: 'x5-41',
      lesson: 'l5-sensory-methods',
      type: 'truefalse',
      context: `**Shelf talker on a single malt**
"94 points! Objectively better than the 90-point bottle beside it."
Both scores come from one critic, tasting with the labels visible, in sessions a year apart.`,
      prompt: `True or false: the 4-point gap is good evidence that the first whiskey is objectively the better of the two.`,
      answer: false,
      explanation: `A score is one judge's verdict under one set of conditions. Label knowledge invites expectation error, and flight order, the previous sample, fatigue and the critic's own thresholds and anosmias all move the number, so scores from sessions a year apart are not a controlled comparison. Published scores also crowd between about 80 and 100 and have drifted upward, and judges given the same wine twice in one flight often score it noticeably differently.`,
    },
    {
      id: 'x5-42',
      lesson: 'l5-sensory-methods',
      type: 'numeric',
      context: `**Paired comparison (2-AFC), 24 assessors:** "Which sample is smokier?"
Sample B has the higher guaiacol level, so a correct answer picks B.
Probability of at least k correct by guessing alone:
- k = 13: 0.028 if chance is 1/3; 0.419 if chance is 1/2
- k = 15: 0.003 if chance is 1/3; 0.154 if chance is 1/2
- k = 16: 0.001 if chance is 1/3; 0.076 if chance is 1/2
- k = 17: below 0.001 if chance is 1/3; 0.032 if chance is 1/2
- k = 18: below 0.001 if chance is 1/3; 0.011 if chance is 1/2`,
      prompt: `At α = 0.05 (one-tailed), what is the minimum number of correct answers needed to conclude that the panel can tell which sample is smokier?`,
      answer: 17,
      tolerance: 0,
      unit: 'correct answers',
      explanation: `A 2-AFC has two samples, so a guess is right half the time: use the 1/2 column. The smallest count for which that many or more has a probability of 0.05 or less is 17 (0.032), while 16 gives 0.076. Reading the 1/3 column gives 13, the triangle-test answer, which would call a difference on a result that guessing produces about 42% of the time. Check it with the Triangle test tool set to paired comparison.`,
    },
  ],
};
