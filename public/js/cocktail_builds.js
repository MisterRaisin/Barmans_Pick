var alexander = { "name": "Alexander",
"overview": "A great after-dinner classic. Rich feeling of cream and subtle chocolaty.",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 30,
    "ingredient": "Cognac" },
  {
    "amount": 30,
    "ingredient": "Cacao Créme liqueur" },
  {
    "amount": 30,
    "ingredient": "Cream" }
],
"garnish" : "Sprinkle with fresh ground nutmeg.",
"img": "alexander_img.jpg",
"preparation": "Shake and strain into a chilled cocktail glass." }
exports.alexander = alexander

var aviation = { "name": "Aviation",
"overview": "AHHHHHHHHHHHHHH",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  { "unit": "ml",
    "amount": 45,
    "ingredient": "Gin" },
  { "unit": "ml",
    "amount": 15,
    "ingredient": "Cherry liqueur"},
  { "unit": "ml",
    "amount": 15,
    "ingredient": "Lemon juice" }
],
"garnish": "None",
"img": "aviation_img.jpg",
"preparation": "Shake and strain into a chilled cocktail glass." }
exports.aviation = aviation

var angel_face = { "name": "Angel Face",
"overview": "A good all-day cocktail mainly based on gin.",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 30,
    "ingredient": "Gin" },
  {
    "amount": 30,
    "ingredient": "Apricot brandy" },
  {
    "amount": 30,
    "ingredient": "Calvados" }
],
"img": "angel_face_img.jpg",
"preparation": "Shake with ice cubes. Strain into a cocktail glass." }
exports.angel_face = angel_face

var martini = { "name": "Martini",
"overview": "A dry and bitter cocktail. One of the Classics!",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 90,
    "ingredient": "Gin" },
  {
    "amount": 15,
    "ingredient": "Vermouth extra dry" }
],
"garnish": "olives/lemon peel",
"img": "martini_img.jpg",
"preparation": "Can be shaken or stirred. Strain into a cocktail glass." }
exports.martini = martini

var dirty_martini = { "name": "Dirty Martini",
"overview": "A dry bitter cocktail. But with a punch of sourness.",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 90,
    "ingredient": "Gin" },
  {
    "amount": 10,
    "ingredient": "Vermouth extra dry" },
    {
      "amount": 10,
      "ingredient": "Olive juice" }
],
"garnish": "olives",
"img": "dirty_martini_img.jpg",
"preparation": "Can be shaken or stirred. Strain into a cocktail glass." }
exports.dirty_martini = dirty_martini

var old_fashioned = { "name": "Old Fashioned",
"overview": "The oldest cocktail. Has a dry taste and great to have before a meal.",
"glass": {"name":"low-ball", "chilled":true},
"ingredients": [
  {
    "amount": 60,
    "ingredient": "Bourbon Whiskey" },
  {
    "amount": 15,
    "ingredient": "Sugar Water" },
    {
      "amount": -1,
      "ingredient": "Angostura Bitters",
      "diff_amount": "3-4 dashes" }
],
"garnish": "cherry/orange peel",
"img": "old_fashioned_img.jpg",
"preparation": "Stirred in a stirring glass, then strained to a low-ball and served with ice." }
exports.old_fashioned = old_fashioned;

var manhatten = { "name": "Manhattan",
"overview": "A great before-dinner cocktail. One of the Classics.",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 60,
    "ingredient": "Rye Whiskey",
    "label": "Rye " },
  {
    "amount": 30,
    "ingredient": "Vermouth Rosso" },
    {
      "amount": -1,
      "ingredient": "Angostura Bitters",
      "diff_amount": "2 dashes" }
],
"garnish": "orange peel",
"img": "manhatten_img.jpg",
"preparation": "Stirred in a stirring glass, then strained to a cocktail glass." }
exports.manhatten = manhatten;

var robroy = { "name": "Rob Roy",
"overview": "A great before-dinner cocktail. One of the Classics.",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 60,
    "ingredient": "Scotch Whiskey",
    "label": "Scotch " },
  {
    "amount": 30,
    "ingredient": "Vermouth Rosso" },
    {
        "amount": -1,
        "ingredient": "Angostura Bitters",
        "diff_amount": "2 dashes" }
],
"garnish": "orange peel",
"img": "robroy_img.jpg",
"preparation": "Stirred in a stirring glass, then strained to a cocktail glass." }
exports.robroy = robroy;

var negroni = { "name": "Negroni",
"overview": "Gin based cocktail. Has a bitter taste with a pinch of sweetness.",
"glass": {"name":"low-ball", "chilled":true},
"ingredients": [
  {
    "amount": 30,
    "ingredient": "Gin"},
  {
    "amount": 30,
    "ingredient": "Vermouth Rosso" },
    {
        "amount": 30,
        "ingredient": "Campari"}
],
"garnish": "orange peel",
"img": "negroni_img.jpg",
"preparation": "Stirred in a stirring glass, then strained to a cocktail glass." }
exports.negroni = negroni;

var boulevardier  = { "name": "Boulevardier",
"overview": "Whiskey based cocktail. Has a combination of sweet and bitter taste.",
"glass": {"name":"low-ball", "chilled":true},
"ingredients": [
  {
    "amount": 30,
    "ingredient": "Rye Whiskey",
  "label": " (or Bourbon)"},
  {
    "amount": 30,
    "ingredient": "Vermouth Rosso" },
    {
        "amount": 30,
        "ingredient": "Campari"}
],
"garnish": "orange peel",
"img": "boulevardier_img.jpg",
"preparation": "Stirred in a stirring glass, then strained to a cocktail glass." }
exports.boulevardier  = boulevardier ;

var martinez  = { "name": "Martinez",
"overview": "Gin based cocktail. Mostly bitter but with a punch of cherry sweetness.",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 45,
    "ingredient": "Gin"},
  {
    "amount": 45,
    "ingredient": "Vermouth Rosso" },
    {
        "amount": 10,
        "ingredient": "Cherry liqueur"},
      {"amount": -1,
      "ingredient": "Angostura Bitters",
      "diff_amount": "2 dashes" }
      
],
"garnish": "orange peel",
"img": "martinez_img.jpg",
"preparation": "Stirred in a stirring glass, then strained to a cocktail glass." }
exports.martinez = martinez;

var hanky_panky  = { "name": "Hanky Panky",
"overview": "Gin based cocktail. Mostly bitter with a little sweety taste at the end.",
"glass": {"name":"low-ball", "chilled":true},
"ingredients": [
  {
    "amount": 45,
    "ingredient": "Gin"},
  {
    "amount": 45,
    "ingredient": "Vermouth Rosso" },
    {
        "amount": 7.5,
        "ingredient": "Fernet-Branca"}
      
],
"garnish": "orange peel",
"img": "hanky_panky_img.jpg",
"preparation": "Stirred in a stirring glass, then strained to a cocktail glass." }
exports.hanky_panky = hanky_panky;

var rusty_nail  = { "name": "Rusty Nail",
"overview": "Scotch based cocktail. Has a sweety taste from the Drambuie and Whiskey",
"glass": {"name":"low-ball", "chilled":true},
"ingredients": [
  {
    "amount": 45,
    "ingredient": "Scotch Whiskey"},
  {
    "amount": 15,
    "ingredient": "Drambuie" }
      
],
"img": "rusty_nail_img.jpg",
"preparation": "Stirred in a stirring glass, then strained to a low-ball glass with ice." }
exports.rusty_nail = rusty_nail;

var godfather  = { "name": "Godfather",
"overview": "Scotch based cocktail. Has a sweety taste from the Drambuie and Whiskey",
"glass": {"name":"low-ball", "chilled":true},
"ingredients": [
  {
    "amount": 45,
    "ingredient": "Scotch Whiskey"},
  {
    "amount": 15,
    "ingredient": "Dissarono-Amaretto" }
      
],
"garnish": "Orange wedge or peeled almonds",
"img": "godfather_img.jpg",
"preparation": "Stirred in a stirring glass, then strained to a low-ball glass with ice." }
exports.godfather = godfather;


var cosmopolitan  = { "name": "Cosmopolitan",
"overview": "Vodka based cocktail. Has a perfect sweet and sour taste for every occasion.",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 45,
    "ingredient": "Lemon Vodka"},
  {
    "amount": 30,
    "ingredient": "Triple-Sec" },
    {
      "amount": 45,
      "ingredient": "Cranberry juice" },
      {
        "amount": 15,
        "ingredient": "Lime juice",
        "label": " (Or lemon juice)" }
      
],
"garnish": "Orange or Lemon peel",
"img": "cosmopolitan_img.jpg",
"preparation": "Shaken all together with ice, then strained to a cocktail glass." }
exports.cosmopolitan = cosmopolitan;


var mojito  = { "name": "Mojito",
"overview": "Scotch based cocktail. Has a sweety taste from the Drambuie and Whiskey",
"glass": {"name":"high-ball", "chilled":true},
"ingredients": [
  {
    "amount": 0,
    "label": "2-3 tea-spoons of sugar"},
  {
    "amount": 0,
    "label": "4-6 dices of lemon" },
    {
      "amount": 0,
      "label": "8-10 mint leaves" },
      {
        "amount": 0,
        "label": "Top with Sparkling water" },
      {
        "amount": 60,
        "ingredient": "Rum"}
        
      
],
"garnish": "Lemon wedge or Mint",
"img": "mojito_img.jpg",
"preparation": "Crush the lemon and sugar in a high-ball glass. Add the mint leaves and Rum to the glass. Add Crushed ice to the end of the glass and top with sparkling water." }
exports.mojito = mojito;


var margarita  = { "name": "Margarita",
"overview": "Tequila based cocktail. Has a soury taste which can be pumped up with salt.",
"glass": {"name":"margarita", "chilled":true},
"ingredients": [
  {
    "amount": 60,
    "ingredient": "Tequila"},
  {
    "amount": 30,
    "ingredient": "Triple-Sec" },
      {
        "amount": 30,
        "ingredient": "Lemon juice"}
      
],
"garnish": "Lemon peel and a crown of salt stuck to the glass",
"img": "margarita_img.jpg",
"preparation": "Shaken all together with ice, then strained to a margarita glass." }
exports.margarita = margarita;


var daiquiri  = { "name": "Daiquiri",
"overview": "Rum based cocktail. Has an alcaholic taste which transforms to a soury after-taste.",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 60,
    "ingredient": "Rum"},
  {
    "amount": 30,
    "ingredient": "Lemon juice" },
      {
        "amount": 15,
        "ingredient": "Sugar Water"}
      
],
"garnish": "Lemon slice/wedge",
"img": "daiquiri_img.jpg",
"preparation": "Shaken all together with ice, then strained to a margarita glass." }
exports.daiquiri = daiquiri;

var long_island_iced_tea  = { "name": "Long Island iced tea",
"overview": 'A "messy" cocktail with a light and sweet taste. An oldy since the times of prohibition.',
"glass": {"name":"high-ball", "chilled":true},
"ingredients": [
  {
    "amount": 15,
    "ingredient": "Vodka"},
  {
    "amount": 15,
    "ingredient": "Gin"},
  {
    "amount": 15,
    "ingredient": "Rum"},
  {
    "amount": 15,
    "ingredient": "Tequila"},
  {
    "amount": 15,
    "ingredient": "Triple-Sac"},
  {
    "amount": 15,
    "ingredient": "Lemon Juice"},
  {
    "amount": 15,
    "ingredient": "Sugar Water"},
  {
    "amount": 0,
    "label": "Top with Cola"}
],
"garnish": "Lemon slice or Mint",
"img": "long_island_iced_tea_img.jpg",
"preparation": "Add all ingredients into a high-ball glass. Add ice, top with Cola, and stir all togheter." }
exports.long_island_iced_tea = long_island_iced_tea;


var black_russian  = { "name": "Black/White Russian",
"overview": "Rum based cocktail. Has an alcaholic taste which transforms to a soury after-taste.",
"glass": {"name":"low-ball", "chilled":true},
"ingredients": [
  {
    "amount": 45,
    "ingredient": "Vodka"},
  {
    "amount": 15,
    "ingredient": "Kahlúa" },
  {
    "amount": 0,
    "label": "(For white russian): Heavy Cream - 30 ml"}
      
],
"img": "black_russian_img.jpg",
"preparation": "Built in a low-ball glass and served with ice.<br>For white russian: Shake the heavy cream in a shaker and pour over the Black Russian." }
exports.black_russian = black_russian;


var moscow_mule = { "name": "Moscow Mule",
"overview": "Vodka based cocktail. Has a soury taste filled with amazing minty smells.",
"glass": {"name":"copper mug", "chilled":true},
"ingredients": [
  {
    "amount": 60,
    "ingredient": "Vodka",
    "label": " (or Citron Vodka)"},
  {
    "amount": 30,
    "ingredient": "Lemon Juice" },
  {
    "amount": -1,
    "ingredient": "Ginger Ale",
    "diff_amount": "Fill until glass is topped"}
      
],
"garnish": "Mint leaves or Lemon peels",
"img": "moscow_mule_img.jpg",
"preparation": "Built inside a copper mug. Add the Vodka and Lemon juice. Fill with ice and then top with Ginger Ale." }
exports.moscow_mule = moscow_mule;


var melon_sour  = { "name": "Melon Sour",
"overview": "Melon liquer based cocktail. Has the great taste of the Midori melon liquer while combining in a soury punch.",
"glass": {"name":"high-ball", "chilled":true},
"ingredients": [
  {
    "amount": 60,
    "ingredient": "Midori"},
  {
    "amount": 30,
    "ingredient": "Lemon Juice" },
  {
    "amount": 30,
    "ingredient": "Sugar Water" }      
],
"garnish": "Lemon peel or Melon slice",
"img": "melon_sour_img.jpg",
"preparation": "Shaken all together with ice, then strained to a high-ball glass with ice." }
exports.melon_sour = melon_sour;


var b52 = { "name": "B52",
"overview": "3 layer cocktail containing coffee liquer, orange liquer, and Irish cream.",
"glass": {"name":"shot", "chilled":true},
"ingredients": [
  {
    "amount": 20,
    "ingredient": "Kahlúa"},
  {
    "amount": 20,
    "ingredient": "Irish Cream" },
  {
    "amount": 20,
    "ingredient": "Cointreau"},
  {
    "amount": 20,
    "ingredient": "Grand Marnier",
    "label": " (Instead of the Cointreau)"}
      
],
"img": "b52_img.jpg",
"preparation": "Built inside the show glass layer by layer. First the Kahlúa, then the Irish cream, then the orange liquer." }
exports.b52 = b52;


var caipirinha  = { "name": "Caipirinha",
"overview": "Traditional Brazilian cocktail made with Cachaca. Has a soury taste which will give you a energy boost.",
"glass": {"name":"low-ball", "chilled":true},
"ingredients": [
  {
    "amount": 0,
    "label": "3 tea-spoons of sugar"},
  {
    "amount": 0,
    "label": "6-8 dices of lime (or lemon)" },
      {
        "amount": 60,
        "ingredient": "Cachaca"}
        
      
],
"img": "caipirinha_img.jpg",
"preparation": "Crush the lemon and sugar in a low-ball glass. Add the Cachaca and ice. Take the large side of a shaker and shake it with the low-ball glass. Return all ingredients to the low-ball glass wihtout straining." }
exports.caipirinha = caipirinha;


var clover_club  = { "name": "Clover Club",
"overview": "Gin based cocktail. A dry cocktail with a pinch of sweety raspberry taste",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 60,
    "ingredient": "Gin"},
  {
    "amount": 30,
    "ingredient": "Lemon Juice" },
    {
      "amount": 30,
      "ingredient": "Raspberry syrup" },
      {
        "amount": 15,
        "ingredient": "Egg White"}
      
],
"garnish": "Raspberry",
"img": "clover_club_img.jpg",
"preparation": "Add all ingredients to a shaker and 'dry shake' (shake with no ice). Then, add ice and shake again, then strain to a cocktail glass." }
exports.clover_club = clover_club;


var cuba_libre  = { "name": "Cuba Libre",
"overview": 'A Rum based cocktail filled with Cola. Has the bitterness of the rum combined with the sweetness of the Cola.',
"glass": {"name":"high-ball", "chilled":true},
"ingredients": [
  {
    "amount": 60,
    "ingredient": "Rum"},
  {
    "amount": 0,
    "label": "Top with Cola"}
],
"garnish": "Lime or Lemon wedge",
"img": "cuba_libre_img.jpg",
"preparation": "Add the Rum to a high-ball glass. Fill with ice and then top with Cola. Remember to stir everything together" }
exports.cuba_libre = cuba_libre;


var el_diablo = { "name": "El Diablo",
"overview": "Tequila based cocktail. Has a berry-soury flavor which is semi-sweet.",
"glass": {"name":"high-ball", "chilled":true},
"ingredients": [
  {
    "amount": 45,
    "ingredient": "Tequila"},
  {
    "amount": 15,
    "ingredient": "Crème de cassis" },
  {
    "amount": 15,
    "ingredient": "Lime Juice",
    "label": " (or Lemon Juice)" },
  {
    "amount": -1,
    "ingredient": "Ginger Ale",
    "diff_amount": "Fill until glass is topped"}
      
],
"garnish": "Lime/Lemon Wedge or a Raspberry",
"img": "el_diablo_img.jpg",
"preparation": "Add Tequila, Crème de cassis, and the lime juice to a shaker and shake with ice. Pour into a high-ball, add ice, and top with Ginger Ale." }
exports.el_diablo = el_diablo;


var french75  = { "name": "French 75",
"overview": "Gin based occktail. Has a sweet and soury taste followed by the feeling abd taste of sparkling wine.",
"glass": {"name":"champagne", "chilled":true},
"ingredients": [
  {
    "amount": 30,
    "ingredient": "Gin"},
  {
    "amount": 10,
    "ingredient": "Lemon juice" },
      {
        "amount": 15,
        "ingredient": "Sugar Water"},
        {
          "amount": -1,
          "ingredient": "Sparkling Wine",
          "diff_amount": "Fill until glass is topped"}
      
],
"garnish": "Lemon peel",
"img": "french75_img.jpg",
"preparation": "Add Gin, sugar water, and the lemon juice to a shaker and shake with ice. Strain into a champagne glass and top with Sparkling Wine." }
exports.french75 = french75;


var golden_cadillac  = { "name": "Golden Cadillac",
"overview": "A rich and creamy cocktail with chocolate-vanilla taste.",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 30,
    "ingredient": "Galliano"},
  {
    "amount": 30,
    "ingredient": "Cacao Créme liqueur" },
  {
    "amount": 30,
    "ingredient": "Cream"}
     
],
"garnish": "Grounded Nutmeg",
"img": "golden_cadillac_img.jpg",
"preparation": "Add all ingredients to a shaker and shake with ice. Strain into a cockail glass." }
exports.golden_cadillac = golden_cadillac;


var harvey_wallbanger  = { "name": "Harvey Wallbanger",
"overview": "A Vodka based cocktail. With a sour-sweet taste from the combination of the vanilla-taste liquer and orange juice.",
"glass": {"name":"high-ball", "chilled":true},
"ingredients": [
  {
    "amount": 45,
    "ingredient": "Vodka"},
  {
    "amount": 30,
    "ingredient": "Galliano" },
    {
      "amount": -1,
      "ingredient": "Orange Juice",
      "diff_amount": "Fill until glass is topped"}
     
],
"garnish": "Orange wedge",
"img": "harvey_wallbanger_img.jpg",
"preparation": "Add all ingredients to a high-ball glass with ice and stir." }
exports.harvey_wallbanger = harvey_wallbanger;


var jasmine  = { "name": "Jasmine",
"overview": "A Gin based cocktail with a sweet-sour taste. Made for people who like sour drinks",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 45,
    "ingredient": "Gin"},
  {
    "amount": 30,
    "ingredient": "Triple-Sec" },
  {
    "amount": 22.5,
    "ingredient": "Campari"},
  {
    "amount": 15,
    "ingredient": "Lemon Juice"}
     
],
"garnish": "Lemon twist",
"img": "jasmine_img.jpg",
"preparation": "Add all ingredients to a shaker and shake with ice. Strain into a cockail glass." }
exports.jasmine = jasmine;


var kamikaze  = { "name": "Kamikaze",
"overview": "A Vodka based cocktail with a soury taste. Made for people who like sour drinks",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 60,
    "ingredient": "Vodka"},
  {
    "amount": 30,
    "ingredient": "Triple-Sec" },
  {
    "amount": 30,
    "ingredient": "Lemon Juice"}
     
],
"garnish": "Lemon twist",
"img": "kamikaze_img.jpg",
"preparation": "Add all ingredients to a shaker and shake with ice. Strain into a cockail glass." }
exports.kamikaze = kamikaze;


var mai_tai  = { "name": "Mai Tai",
"overview": "A Rum based cocktail with a fruity taste. Add the garnish to amplify to fruitiness of the cocktail.",
"glass": {"name":"low-ball", "chilled":true},
"ingredients": [
  {
    "amount": 60,
    "ingredient": "Rum",
    "label": " (30 ml white Rum, 30 ml smoked Rum)"},
  {
    "amount": 15,
    "ingredient": "Triple-Sec" },
  {
    "amount": 22.5,
    "ingredient": "Lime Juice",
    "label": " (or Lemon Juice)"},
  {
    "amount": 15,
    "ingredient": "Almond Syrup"}
     
],
"garnish": "Pineapple / Cherry / Mint",
"img": "mai_tai_img.jpg",
"preparation": "Add all ingredients to a shaker and shake with ice. Strain into a low-ball glass." }
exports.mai_tai = mai_tai;


var orgasm  = { "name": "Orgasm",
"overview": "A rich and creamy cocktail filled with creamy sweetness.",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 45,
    "ingredient": "Irish Cream"},
  {
    "amount": 45,
    "ingredient": "Coffee Liquer" },
  {
    "amount": 45,
    "ingredient": "Heavy Cream"},   
],
"garnish": "Grounded Nutmeg",
"img": "orgasm_img.jpg",
"preparation": "Add all ingredients to a shaker and shake with ice. Strain into a cocktail glass." }
exports.orgasm = orgasm;


var pina_colada  = { "name": "Pina Colada",
"overview": "The original tropical cocktail. Based on Rum this cocktail has a island-fruity taste with coconut and pineapple flavors.",
"glass": {"name":"hurricane", "chilled":true},
"ingredients": [
  {
    "amount": 45,
    "ingredient": "Rum"},
  {
    "amount": 15,
    "ingredient": "Coconut Cream" },
  {
    "amount": 30,
    "ingredient": "Pineapple Juice"},   
],
"garnish": "Pineapple or Cherry",
"img": "pina_colada_img.jpg",
"preparation": "Add all ingredients to a shaker and shake with ice. Strain into a hurricane glass." }
exports.pina_colada = pina_colada;

var pink_squirrel  = { "name": "Pink Squirrel",
"overview": "A rich, sweet, and creamy cocktail that tastes of almonds and chocolate.",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 30,
    "ingredient": "Dissarono-Amaretto"},
  {
    "amount": 30,
    "ingredient": "Cacao Créme liqueur" },
  {
    "amount": 30,
    "ingredient": "Heavy Cream"},   
],
"garnish": "Grounded Nutmeg",
"img": "pink_squirrel_img.jpg",
"preparation": "Add all ingredients to a shaker and shake with ice. Strain into a cocktail glass." }
exports.pink_squirrel = pink_squirrel;

var sazerac = { "name": "Sazerac",
"overview": "A Rye Whiskey based cocktail. Has the cool taste of whiskey with a pinch of sweetness added to it.",
"glass": {"name":"low-ball", "chilled":true},
"ingredients": [
  {
    "amount": 60,
    "ingredient": "Whiskey Rye",
    "label": " (or Cognac)" },
  {
    "amount": 10,
    "ingredient": "Sugar Water" },
    {
      "amount": -1,
      "ingredient": "Peychauds Bitters",
      "diff_amount": "4 dashes" }
],
"garnish": "Lemon twist",
"img": "sazerac_img.jpg",
"preparation": "Stirred in a stirring glass, then strained to a pre-chilled low-ball glass." }
exports.sazerac = sazerac;


var sex_on_the_beach = { "name": "Sex on the Beach",
"overview": "One of the classic Vodka based cocktail. Has a an amazing sweet and fruity taste.",
"glass": {"name":"highball or Hurricane", "chilled":true},
"ingredients": [
  {
    "amount": 30,
    "ingredient": "Vodka"},
  {
    "amount": 15,
    "ingredient": "Apple Liquer" },
  {
    "amount": 15,
    "ingredient": "Pear Liquer" },
  {
    "amount": -1,
    "ingredient": "Raspberry Juice",
    "diff_amount": "Fill until glass is topped"}
      
],
"garnish": "Lemon wedge",
"img": "sex_on_the_beach_img.jpg",
"preparation": "Built inside the glass itself. Add the Vodka and liquers, fill with ice and then top with raspberry juice." }
exports.sex_on_the_beach = sex_on_the_beach;


var aperol_spritz = { "name": "Aperol Spritz",
"overview": "A world-wide known cocktail known for its simplicity and sweety taste.",
"glass": {"name":"wine or Low-ball", "chilled":true},
"ingredients": [
  {
    "amount": 30,
    "ingredient": "Aperol"},
  {
    "amount": 95,
    "ingredient": "Sparkling Wine" },
  {
    "amount": 15,
    "ingredient": "Sparkling Water" }
],
"garnish": "Orange wedge",
"img": "aperol_spritz_img.jpg",
"preparation": "Built inside the glass itself. Add all the ingredients and stir." }
exports.aperol_spritz = aperol_spritz;


var tequila_sunrise  = { "name": "Tequila Sunrise",
"overview": "A classic Tequila based cocktail. Has a soury taste of orange juice which goes great with tequila.",
"glass": {"name":"high-ball", "chilled":true},
"ingredients": [
  {
    "amount": 60,
    "ingredient": "Tequila"},
  {
    "amount": -1,
    "ingredient": "Orange Juice",
    "diff_amount": "Fill until glass is topped"}
      
],
"garnish": "Orange wedge",
"img": "tequila_sunrise_img.jpg",
"preparation": "Add the tequila to the high-ball, fill with ice, top with orange juice and stir." }
exports.tequila_sunrise = tequila_sunrise;

var toronto  = { "name": "Toronto",
"overview": "Rye Whiskey based cocktail. Taste similar to the Manhatten but with a little more sweety punch.",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 60,
    "ingredient": "Rye Whiskey"},
  {
    "amount": 10,
    "ingredient": "Sugar Water" },
    {
        "amount": 5,
        "ingredient": "Fernet-Branca"}
      
],
"garnish": "Lemon twist",
"img": "toronto_img.jpg",
"preparation": "Stirred in a stirring glass, then strained to a cocktail glass." }
exports.toronto = toronto;

var sidecar = { "name": "Sidecar",
"overview": "A Cognac based cocktail. The cocktail has lighter fruity taste which is balanced with the sourness of lemon and orange.",
"glass": {"name":"martini", "chilled":true},
"ingredients": [
  {
    "amount": 60,
    "ingredient": "Cognac" },
  {
    "amount": 30,
    "ingredient": "Triple-Sec" },
  {
    "amount": 30,
    "ingredient": "Lemon Juice" }
],
"garnish" : "Crown of sugar",
"img": "sidecar_img.jpg",
"preparation": "Shake in a shaker with ice and strain into a chilled cocktail glass." }
exports.sidecar = sidecar

var woo_woo  = { "name": "Woo Woo (11-11)",
"overview": "A Vodka based cocktail. Has a sweet-fruity taste of raspberry juice and pears.",
"glass": {"name":"high-ball", "chilled":true},
"ingredients": [
  {
    "amount": 45,
    "ingredient": "Vodka"},
  {
    "amount": 15,
    "ingredient": "Pear Liquer"},
  {
    "amount": -1,
    "ingredient": "Raspberry Juice",
    "diff_amount": "Fill until glass is topped"}
      
],
"garnish": "Lemon wedge",
"img": "woo_woo_img.jpg",
"preparation": "Add the Vodka and pear liquer to the high-ball, fill with ice, top with raspberry juice and stir." }
exports.woo_woo = woo_woo;