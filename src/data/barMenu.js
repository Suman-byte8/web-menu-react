/**
 * Bottoms Up bar menu — the bar's own items, prices and order, taken from
 * the hotel's bar menu list (rough/.txt; misspellings corrected, e.g.
 * "Glenmorange" → "Glenmorangie", "Budwiser" → "Budweiser").
 * Item and section shapes: see menuBuilders.js.
 *
 * Drinks use the compact price-list layout (`layout: 'list'`); `columns`
 * are matched to option labels, so a spirit is
 *   spirit('id', 'Name', 650, 360)  →  60 ml ₹650 · 30 ml ₹360
 */

import { prefixIds } from '../lib/menu.js'
import { photo } from '../lib/photos.js'
import { choice, dish, drink, fullHalf, pcs, vegNonVeg, versions, wok } from './menuBuilders.js'

const withOptions = (id, name, options, more = {}) => ({ id, variant: 'text', name, diet: 'veg', options, ...more })

const SHOT_COLUMNS = ['60 ml', '30 ml']
const spirit = (id, name, peg60, peg30) =>
  withOptions(id, name, [
    { label: '60 ml', price: peg60 },
    { label: '30 ml', price: peg30 },
  ])

const BOTTLE_COLUMNS = ['750 ml', '375 ml']
const wine = (id, name, size, price) => withOptions(id, name, [{ label: size, price }])

const BEER_COLUMNS = ['650 ml', '330 ml']
const beer = (id, name, size, price) => withOptions(id, name, [{ label: size, price }])

export const BAR = {
  pageTitle: 'SILK INN Malda — Bottoms Up Bar Menu',
  badge: 'Bar Lounge',
  tagline: 'Bottoms Up',
  intro: {
    eyebrow: 'Hard & Soft Beverages',
    title: 'Bottoms Up',
    description: 'Single malts, cocktails, chilled beer and the full Cocoon kitchen menu.',
    image: photo('old-fashioned'),
    alt: 'Whisky cocktail',
  },
  search: 'Search drinks & dishes',
  empty: {
    icon: 'wine_bar',
    title: 'No items found',
    message: 'No selections match this dietary filter in the bar menu.',
  },
}

const DRINKS = [
  {
    id: 'single-malt',
    label: 'Single Malt',
    title: 'Single Malt Whisky',
    layout: 'list',
    columns: SHOT_COLUMNS,
    items: [
      spirit('dalmore-port-wood', 'The Dalmore Port Wood', 2100, 1100),
      spirit('macallan-12', 'The Macallan 12YO', 1350, 720),
      spirit('rampur-double-cask', 'Rampur Double Cask', 990, 520),
      spirit('indri-black', 'Indri Black', 990, 520),
      spirit('caol-ila-12', 'Caol Ila 12YO', 730, 380),
      spirit('singleton-12', 'The Singleton 12YO', 690, 360),
      spirit('talisker-10', 'Talisker 10YO', 650, 360),
      spirit('glenlivet-12', 'The Glenlivet 12YO', 650, 360),
      spirit('glenfiddich-12', 'Glenfiddich 12YO', 650, 360),
      spirit('glenmorangie-10', 'Glenmorangie 10YO', 650, 360),
      spirit('paul-john-nirvana', 'Paul John Nirvana', 470, 270),
      spirit('amrut-amalgam', 'Amrut Amalgam Malt', 450, 250),
    ],
  },
  {
    id: 'scotch',
    label: 'Scotch',
    title: 'Scotch Whisky',
    layout: 'list',
    columns: SHOT_COLUMNS,
    items: [
      spirit('jw-blue', 'JW Blue Label', 2600, 1500),
      spirit('royal-salute-21', 'Royal Salute 21YO', 2500, 1400),
      spirit('jw-gold', 'JW Gold Label', 820, 440),
      spirit('jw-double-black', 'JW Double Black', 650, 360),
      spirit('chivas-12', 'Chivas Regal 12YO', 560, 310),
      spirit('gentleman-jack', "Jack Daniel's Gentleman Jack", 570, 300),
      spirit('jack-daniels-7', "Jack Daniel's No. 7", 520, 280),
      spirit('jw-black', 'JW Black Label', 520, 280),
      spirit('jw-blonde', 'JW Blonde', 410, 250),
      spirit('jw-red', 'JW Red Label', 340, 190),
      spirit('jameson-stout', 'Jameson Irish Stout', 410, 230),
      spirit('jameson', 'Jameson Irish', 370, 210),
      spirit('jim-beam', 'Jim Beam', 325, 175),
      spirit('ballantines', "Ballantine's Finest", 340, 190),
      spirit('teachers-50', "Teacher's 50", 390, 220),
      spirit('teachers-highland', "Teacher's Highland Cream", 320, 180),
      spirit('dewars-white', "Dewar's White Label", 340, 190),
      spirit('100-pipers', '100 Pipers Deluxe', 320, 180),
      spirit('black-and-white', 'Black & White', 320, 180),
      spirit('vat-69', 'VAT 69', 310, 170),
      spirit('black-dog-centenary', 'Black Dog Centenary Black', 310, 170),
      spirit('cutty-sark', 'Cutty Sark', 310, 170),
      spirit('oaksmith-gold', 'Oaksmith Gold', 210, 130),
      spirit('blenders-pride-reserve', 'Blenders Pride Reserve', 210, 130),
      spirit('blenders-pride-premium', 'Blenders Pride Premium', 190, 110),
    ],
  },
  {
    id: 'vodka',
    label: 'Vodka',
    title: 'Vodka',
    layout: 'list',
    columns: SHOT_COLUMNS,
    items: [
      spirit('grey-goose', 'Grey Goose', 620, 330),
      spirit('ciroc-snap', 'Ciroc Snap', 590, 310),
      spirit('absolut-raspberry', 'Absolut Raspberry', 330, 185),
      spirit('absolut', 'Absolut', 320, 180),
      spirit('skyy', 'Skyy', 310, 170),
      spirit('smirnoff', 'Smirnoff', 190, 110),
      spirit('smirnoff-minty-jamun', 'Smirnoff Minty Jamun', 210, 130),
    ],
  },
  {
    id: 'rum',
    label: 'Rum',
    title: 'Rum',
    layout: 'list',
    columns: SHOT_COLUMNS,
    items: [
      spirit('bacardi-limon', 'Bacardi Limon', 200, 120),
      spirit('bacardi-mango-chilli', 'Bacardi Mango Chilly', 200, 120),
      spirit('bacardi-white', 'Bacardi White', 190, 110),
      spirit('old-monk-coffee', 'Old Monk Coffee', 200, 120),
      spirit('old-monk-gold', 'Old Monk Gold Reserve', 150, 90),
    ],
  },
  {
    id: 'liqueur',
    label: 'Liqueur',
    title: 'Liqueur',
    layout: 'list',
    columns: SHOT_COLUMNS,
    items: [
      spirit('jagermeister', 'Jägermeister', 590, 330),
      spirit('campari', 'Campari Negroni', 490, 270),
      spirit('baileys', 'Baileys Irish Cream', 450, 270),
      spirit('kahlua', 'Kahlua Coffee', 390, 210),
    ],
  },
  {
    id: 'gin',
    label: 'Gin',
    title: 'Gin',
    layout: 'list',
    columns: SHOT_COLUMNS,
    items: [
      spirit('bombay-sapphire', 'Bombay Sapphire', 370, 210),
      spirit('pink-mystique', 'Pink Mystique', 200, 120),
    ],
  },
  {
    id: 'red-wine',
    label: 'Red Wine',
    title: 'Red Wine',
    layout: 'list',
    columns: BOTTLE_COLUMNS,
    items: [
      wine('jacobs-creek-shiraz', "Jacob's Creek Shiraz Cabernet", '750 ml', 1900),
      wine('antares-cabernet', 'Antares Cabernet Sauvignon', '375 ml', 1250),
      wine('sula-cabernet', 'Sula Cabernet Sauvignon', '375 ml', 1050),
    ],
  },
  {
    id: 'white-wine',
    label: 'White Wine',
    title: 'White Wine',
    layout: 'list',
    columns: BOTTLE_COLUMNS,
    items: [
      wine('jacobs-creek-chardonnay', "Jacob's Creek Chardonnay", '750 ml', 1900),
      wine('antares-sauvignon-blanc', 'Antares Sauvignon Blanc', '375 ml', 1250),
      wine('sula-sauvignon-blanc', 'Sula Sauvignon Blanc', '375 ml', 890),
    ],
  },
  {
    id: 'beer',
    label: 'Beer',
    title: 'Beer',
    layout: 'list',
    columns: BEER_COLUMNS,
    items: [
      beer('corona-extra', 'Corona Extra', '330 ml', 380),
      beer('hoegaarden', 'Hoegaarden', '330 ml', 380),
      beer('bira-91-gold', 'Bira 91 Gold', '650 ml', 450),
      beer('budweiser-magnum', 'Budweiser Magnum', '650 ml', 370),
      beer('budweiser-premium', 'Budweiser Premium', '650 ml', 310),
      beer('carlsberg-elephant', 'Carlsberg Elephant', '650 ml', 360),
      beer('kingfisher-ultra-max', 'Kingfisher Ultra Max', '650 ml', 360),
      beer('tuborg-classic', 'Tuborg 1880 Classic', '650 ml', 310),
    ],
  },
  {
    id: 'beer-tower',
    label: 'Beer Tower',
    title: 'Beer Tower',
    note: '1950 ml (3 bottles)',
    layout: 'list',
    items: [
      drink('tower-budweiser-magnum', 'Budweiser Magnum', 1000),
      drink('tower-budweiser-premium', 'Budweiser Premium', 800),
      drink('tower-carlsberg-elephant', 'Carlsberg Elephant', 1000),
      drink('tower-kingfisher-ultra-max', 'Kingfisher Ultra Max', 1000),
      drink('tower-tuborg-classic', 'Tuborg 1880 Classic', 800),
    ],
  },
  {
    id: 'breezer',
    label: 'Breezer',
    title: 'Breezer',
    note: '275 ml',
    layout: 'list',
    items: [
      drink('breezer-blackberry', 'Blackberry', 210),
      drink('breezer-cranberry', 'Cranberry', 210),
      drink('breezer-jamaican-passion', 'Jamaican Passion', 210),
    ],
  },
  {
    id: 'tequila',
    label: 'Tequila',
    title: 'Tequila',
    layout: 'list',
    columns: SHOT_COLUMNS,
    items: [
      spirit('la-chica-blanco', 'La Chica Tequila Blanco', 480, 250),
      spirit('la-chica-gold', 'La Chica Tequila Gold', 480, 250),
    ],
  },
  {
    id: 'shots',
    label: 'Shots',
    title: 'Shots',
    layout: 'list',
    items: [
      drink('blue-kamikaze', 'Blue Kamikaze', 200, { description: 'Vodka base' }),
      drink('lemon-drop', 'Lemon Drop', 250, { description: 'Gin base' }),
      drink('b52', 'B52', 510, { description: 'Kahlua coffee & Irish cream' }),
    ],
  },
  {
    id: 'cocktails',
    label: 'Cocktails',
    title: 'Cocktails',
    layout: 'list',
    items: [
      drink('whisky-sour', 'Whisky Sour', 310),
      drink('manhattan', 'Manhattan', 310),
      drink('mai-tai', 'Mai Tai', 350),
      drink('rum-toddy', 'Rum Toddy', 310),
      drink('daiquiri', 'Daiquiri', 310),
      drink('classic-mojito', 'The Classic Mojito', 310),
      drink('dry-martini', 'Dry Martini', 310),
      drink('gimlet', 'Gimlet', 310),
      drink('screwdriver', 'Screwdriver', 310),
      drink('cosmopolitan', 'Cosmopolitan', 310),
      drink('sex-on-the-beach', 'Sex on the Beach', 310),
      drink('chilli-melon-caipiroska', 'Chilly Melon Caipiroska', 310),
      drink('espresso-martini', 'Espresso Martini', 450),
      drink('classic-negroni', 'Classic Negroni', 550),
      drink('tequila-sunrise', 'Tequila Sunrise', 550),
      drink('liit', 'LIIT', 550),
    ],
  },
  {
    id: 'soft-drinks',
    label: 'Mocktails',
    title: 'Mocktails & Soft Drinks',
    layout: 'list',
    items: [
      drink('tonic-water', 'Tonic Water', 90),
      drink('ginger-ale', 'Ginger Ale', 90),
      drink('red-bull', 'Red Bull Energy Drink', 200),
      drink('coolants', 'Coolants / Aerated Water', 70),
    ],
  },
]

const FOOD = [
  // Page 4 — Cocoon's Favourites
  {
    id: 'salads',
    label: 'Salads',
    eyebrow: "Cocoon's Favourites",
    title: 'Salads & Condiments',
    note: '12:30 – 22:30 hrs',
    items: [
      dish('green-salad', 'Green Salad', 'veg', 75, {
        description: 'Garden-fresh green vegetable salad.',
      }),
      dish('kachumber-salad', 'Kachumber Salad', 'veg', 80, {
        description: 'Cubes of salad vegetables tossed with Indian herbs & spices.',
      }),
      dish('plain-curd', 'Plain Curd', 'veg', 70),
      choice('raita', 'Raita', 'veg', versions(['Plain', 80], ['Mixed', 90])),
      choice('roasted-papad', 'Roasted Papad', 'veg', versions(['Plain', 60], ['Masala', 90])),
    ],
  },
  {
    id: 'soups',
    label: 'Soups',
    eyebrow: "Cocoon's Favourites",
    title: 'Soups',
    items: [
      choice('hot-sour-soup', 'Hot & Sour Soup', null, vegNonVeg(160, 180)),
      choice('manchow-soup', 'Manchow Soup', null, vegNonVeg(160, 180)),
      choice('sweet-corn-soup', 'Sweet Corn Soup', null, vegNonVeg(160, 180)),
      choice('lemon-coriander-soup', 'Lemon Coriander Soup', null, vegNonVeg(160, 180)),
      choice('clear-soup', 'Clear Soup', null, vegNonVeg(160, 180)),
    ],
  },

  // Page 5 — Continental Menu
  {
    id: 'conti-soup',
    label: 'Conti Soup',
    eyebrow: 'Continental Menu',
    title: 'Soup',
    items: [
      choice('cream-of-mushroom', 'Cream of Mushroom / Chicken', null, vegNonVeg(160, 180, ['Mushroom', 'Chicken'])),
      dish('cream-of-tomato', 'Cream of Tomato Soup with Croutons', 'veg', 160),
    ],
  },
  {
    id: 'conti-salad',
    label: 'Conti Salad',
    eyebrow: 'Continental Menu',
    title: 'Salad',
    items: [dish('chicken-hawaiian-salad', 'Chicken Hawaiian Salad', 'nonveg', 250)],
  },
  {
    id: 'munching',
    label: 'Munching',
    eyebrow: 'Continental Menu',
    title: 'Munching',
    items: [
      choice('tacos', 'Tacos with Chef Special Sauce', null, vegNonVeg(270, 290)),
    ],
  },
  {
    id: 'starter',
    label: 'Starter',
    eyebrow: 'Continental Menu',
    title: 'Starter',
    items: [
      dish('baked-veg-au-gratin', 'Baked Veg Au-Gratin', 'veg', 290),
      dish('cheese-ball', 'Cheese Ball with Chef Special Dip', 'veg', 380),
      choice('sauteed-exotic', 'Sautéed Exotic Vegetable / Chicken', null, vegNonVeg(270, 310, ['Vegetable', 'Chicken'])),
      choice(
        'shashlik',
        'Cottage Cheese / Chicken Shashlik with Teriyaki Sauce',
        null,
        vegNonVeg(370, 370, ['Cottage Cheese', 'Chicken']),
        {
        },
      ),
      choice(
        'popcorn',
        'Cottage Cheese / Chicken Popcorn with Chef Special Sauce',
        null,
        vegNonVeg(370, 370, ['Cottage Cheese', 'Chicken']),
        {
        },
      ),
      dish('chicken-roulade', 'Cheese Chicken Roulade with Cheese White Sauce', 'nonveg', 410),
    ],
  },
  {
    id: 'pasta',
    label: 'Pasta',
    eyebrow: 'Continental Menu',
    title: 'Pasta on Choice',
    note: 'Veg / Non-Veg',
    items: [
      choice('spaghetti-carbonara', 'Spaghetti alla Carbonara', null, vegNonVeg(290, 290), {
        size: 'md',
      }),
      choice('penne-al-funghi', 'Penne al Funghi', null, vegNonVeg(350, 370), { size: 'md' }),
      choice('penne-arrabbiata', 'Penne Arrabbiata', null, vegNonVeg(350, 370), {
        size: 'md',
      }),
      choice('mixed-sauce-pasta', 'Choice of Mixed Sauce Pasta', null, vegNonVeg(350, 370), { size: 'md' }),
    ],
  },
  {
    id: 'continental-mains',
    label: 'Conti Mains',
    eyebrow: 'Continental Menu',
    title: 'Pre-Plated Conti Main-Course',
    style: 'Pre-Plated',
    items: [
      {
        id: 'grilled-chicken-steak',
        variant: 'featured',
        diet: 'nonveg',
        name: 'Grilled Chicken Steak with Espagnole Sauce',
        price: 450,
      },
      {
        id: 'chicken-stroganoff',
        variant: 'compact',
        diet: 'nonveg',
        name: 'Chicken Stroganoff with Pilaf Rice',
        price: 450,
      },
      {
        id: 'grilled-fish-steak',
        variant: 'featured',
        diet: 'nonveg',
        name: 'Grilled Fish Steak with Lemon Butter Sauce',
        price: 520,
      },
    ],
  },
  {
    id: 'conti-dessert',
    label: 'Conti Dessert',
    eyebrow: 'Continental Menu',
    title: 'Dessert',
    items: [
      dish('tiramisu', 'McVities & Honey Italian Tiramisu', 'veg', 200),
      dish('orange-mango-mousse', 'Orange / Mango Mousse', 'veg', 200),
    ],
  },

  // Page 6 — Appetizers from the clay oven: vegetable, then non-veg
  {
    id: 'appetizers',
    label: 'Appetizers',
    eyebrow: 'From Clay Oven',
    title: 'Appetizers',
    style: 'Clay Oven',
    items: [
      dish('paneer-achari-tikka', 'Paneer Achari Tikka', 'veg', 310, {
        description: 'Cottage cheese marinated in Indian spices, cooked in tandoor.',
      }),
      dish('lasooni-paneer-tikka', 'Lasooni Paneer Tikka', 'veg', 320),
      dish('cheese-chilli-paneer-tikka', 'Cheese Chilli Paneer Tikka', 'veg', 350, {
        description: 'Paneer marinated with chilli and cottage cheese, cooked in tandoor.',
      }),
      dish('hara-bhara-kebab', 'Hara Bhara Kebab', 'veg', 230, { description: 'Smashed green veggies with Indian spices.' }),
      dish('atishi-kebab', 'Atishi Kebab', 'veg', 210, {
        description: 'Baby potatoes seasoned and spiced tangy, cooked in tandoor, served hot with mint chutney & salad.',
      }),
      dish('irani-fish-kebab', 'Irani Fish Kebab', 'nonveg', 390, {
        description:
          'Fish chunks marinated in a mouthwatering combination of yogurt & cheese, cooked to perfection in tandoor.',
      }),
      dish('fish-tikka', 'Amritsari / Ajwaini / Banjara Fish Tikka', 'nonveg', 390, {
        description:
          "Boneless fish marinated with yogurt and chef's special spices, cooked in tandoor, served with mint chutney & salad.",
      }),
      dish('murgh-tikka', 'Murgh Tikka', 'nonveg', 310, {
        description:
          'Boneless chicken marinated overnight in hung curd with cashewnut paste and spices, cooked in tandoor.',
      }),
      dish('murgh-malai-kebab', 'Murgh Reshmi / Malai Kebab', 'nonveg', 330, {
        description:
          "Boneless chicken marinated overnight with yogurt, cheese (malai) or cream (reshmi), cashewnut paste and chef's special spices.",
      }),
      dish('tangri-kebab', 'Tangri Kebab', 'nonveg', 350, {
        description:
          'Chicken drumsticks marinated overnight in hung curd, ginger & garlic paste and tandoori spices, finished in clay oven.',
      }),
      dish('lasooni-murgh-tikka', 'Lasooni Murgh Tikka', 'nonveg', 330, {
        description: 'Chunks of chicken marinated in cashewnut paste and garlic with aromatic yogurt.',
      }),
      {
        id: 'tandoori-murgh',
        variant: 'featured',
        size: 'md',
        diet: 'nonveg',
        name: 'Tandoori Murgh',
        price: 550,
        description: 'The king of kebabs.',
        badge: { label: "Chef's Special", tone: 'accent' },
      },
      dish('mutton-seekh-kebab', 'Mutton Seekh Kebab', 'nonveg', 410, {
        description:
          "A Mughlai delicacy: mildly spiced minced mutton blended with chef's special spices & onion, skewered and cooked till succulent.",
      }),
      dish('mutton-boti-kebab', 'Mutton Boti Kebab', 'nonveg', 410, {
        description: 'Marinated in spiced yogurt and Indian spices, cooked in tandoor.',
      }),
      choice('kebab-platter', 'Silk Inn Special Kebab Platter', null, vegNonVeg(650, 799)),
      dish('tandoori-pomfret', 'Tandoori Pomfret', 'nonveg', 470),
      dish('tandoori-jhinga', 'Tandoori Jhinga', 'nonveg', 490),
    ],
  },

  // Page 7 — From the Wok (Chinese): vegetable, then non-veg
  {
    id: 'chinese',
    label: 'Chinese',
    eyebrow: 'From the Wok',
    title: 'Chinese',
    style: 'Wok Tossed',
    items: [
      dish('paneer-65', 'Paneer 65', 'veg', 310, {
        description: "Batter-fried cottage cheese tossed with curry leaves, red chilli and chef's special spices.",
      }),
      dish('chilli-paneer-dry', 'Chilli Paneer Dry', 'veg', 310, {
        description: 'Stir-fried cottage cheese and capsicum in chilli soya sauce and oriental spices.',
      }),
      dish('crispy-chilli-baby-corn', 'Crispy Chilli Baby Corn', 'veg', 270, {
        description: 'Crispy fried baby corn tossed in Schezwan chilli sauce, served hot.',
      }),
      dish('mushroom-corn-salt-pepper', 'Mushroom & Corn Salt & Pepper', 'veg', 310, {
        description: 'American corn & mushroom fried crispy, tossed with onion & chilli flakes.',
      }),
      dish('veg-dumplings', 'Veg Dumplings', 'veg', 210, {
        description: 'Stuffed with different veggies, wrapped in a thin layer of dough.',
      }),
      dish('french-fry', 'Basket of French Fry', 'veg', 190),
      dish('nonveg-dumplings', 'Non-Veg Dumplings', 'nonveg', 270, {
        description: 'Stuffed with chicken and different veggies, wrapped in a thin layer of dough.',
      }),
      dish('chilli-fish', 'Chilli Fish / Pan Fried Chilli Fish Dry', 'nonveg', 370, {
        description: 'Stir-fried fish with onion and capsicum tossed in chilli soya sauce.',
      }),
      dish('fish-finger', 'Fish Finger', 'nonveg', 350),
      dish('chilli-chicken-dry', 'Chilli Chicken Dry', 'nonveg', 295),
      dish('chicken-salt-pepper', 'Chicken Salt & Pepper', 'nonveg', 295, { description: 'An all-time favourite.' }),
      dish('crispy-honey-chicken', 'Crispy Fried Honey Chicken', 'nonveg', 310, {
        description: 'Juliennes of chicken, fried crispy, tossed in Chinese sauce and drizzled with honey.',
      }),
      dish('chicken-lollipop', 'Chicken Lollipop / Drums of Heaven', 'nonveg', 295),
      dish('korean-chicken-wings', 'Korean Chicken Wings', 'nonveg', 295),
      dish('kung-pao-chicken', 'Kung Pao Chicken', 'nonveg', 295, {
        description: 'A combination of savoury & sweet with a mild spicy kick of nuts.',
      }),
      dish('chicken-65', 'Chicken 65', 'nonveg', 295),
      dish('chilli-prawn-dry', 'Pan Fried Chilli Prawn Dry', 'nonveg', 470),
      dish('golden-fried-prawn', 'Golden Fried Prawn', 'nonveg', 470, {
        description: 'Prawns seasoned and coated in batter, fried crispy.',
      }),
      dish('double-cooked-lamb', 'Double Cooked Lamb', 'nonveg', 410),
    ],
  },

  // Page 8 — Indian Main-Course: Vegetable
  {
    id: 'indian-veg',
    label: 'Indian Veg',
    eyebrow: 'Indian Main-Course',
    title: 'Vegetable',
    items: [
      dish('paneer-butter-masala', 'Paneer Butter Masala', 'veg', 320, {
        description: 'Cubes of paneer cooked in rich, creamy cashewnut & tomato gravy.',
      }),
      dish('kadhai-paneer', 'Kadhai Paneer / Do-Payaza', 'veg', 320, {
        description:
          'Paneer fingers with julienned capsicum cooked in onion tomato masala, aromatic with crushed coriander & chilli flakes.',
      }),
      dish('shahi-paneer', 'Shahi Paneer', 'veg', 330, {
        description: 'Paneer cubes cooked in a buttery almond & cashewnut base.',
      }),
      dish('paneer-tikka-lababdar', 'Paneer Tikka Lababdar', 'veg', 320, {
        description: 'Chunks of paneer cooked in tandoor and simmered in creamy tomato and onion gravy.',
      }),
      dish('palak-paneer', 'Palak Paneer', 'veg', 320, {
        description: 'Cubes of paneer cooked in creamy spinach gravy.',
      }),
      dish('malai-kofta', 'Malai Kofta / Navaratan Korma', 'veg', 340, {
        description:
          "Paneer dumplings seasoned with chef's special spices, fried and simmered in rich, creamy almond & cashewnut gravy.",
        highlight: pcs(4),
      }),
      dish('mushroom-babycorn-masala', 'Mushroom Babycorn Masala', 'veg', 340, {
        description: 'Baby corn and mushroom cooked in tangy onion & tomato masala.',
      }),
      dish('veg-jhal-frezi', 'Veg Jhal Frezi / Jaipuri', 'veg', 220, {
        description:
          'Baton-shaped vegetables with capsicum & onion tossed in spicy onion tomato masala, with roasted cumin & vinegar.',
      }),
      dish('aloo-jeera', 'Aloo Jeera', 'veg', 200, {
        description: 'Roasted potatoes cooked with ground and roasted cumin.',
      }),
      dish('dum-aloo', 'Dum Aloo Kashmiri / Punjabi', 'veg', 240, {
        description: 'Golden fried potatoes simmered in a gravy of yogurt & brown onion.',
      }),
      dish('dal-tadkewali', 'Dal Tadkewali', 'veg', 210, {
        description: 'Yellow dal tempered with cumin, garlic & red chilli, finished with coriander leaf.',
      }),
      dish('yellow-dal-fry', 'Yellow Dal Fry', 'veg', 210),
      dish('dal-makhani', 'Dal Makhani', 'veg', 270, {
        description: 'Slow-cooked black lentils with cream, butter and spices.',
      }),
    ],
  },

  // Page 9 — Indian Non-Veg
  {
    id: 'indian-nonveg',
    label: 'Indian Non-Veg',
    eyebrow: 'Indian Main-Course',
    title: 'Non-Veg',
    items: [
      dish('fish-tikka-masala', 'Fish Tikka Masala', 'nonveg', 390, {
        description: 'Boneless fish fried & cooked in tomato & onion gravy.',
      }),
      dish('home-style-chicken-curry', 'Home Style Chicken Curry', 'nonveg', 300, {
        description: 'Chicken on the bone cooked in a thin onion tomato gravy with potato, Bengali style.',
      }),
      dish('chicken-chettinad', 'Chicken Chettinad', 'nonveg', 330),
      dish('hyderabadi-chicken-masala', 'Hyderabadi Chicken Masala', 'nonveg', 370, {
        description: "Marinated with yogurt and chef's special spices.",
      }),
      dish('kadhai-chicken', 'Kadhai Chicken', 'nonveg', 310, {
        description:
          'Chicken on the bone cooked in spicy onion tomato masala with capsicum, crushed coriander & red chilli.',
      }),
      dish('chicken-do-pyaza', 'Chicken Do Pyaza', 'nonveg', 310, {
        description:
          'Curry-cut chicken tempered with whole cumin, tossed with onion & peppers and cooked in tangy brown gravy.',
      }),
      dish('chicken-tikka-lababdar', 'Chicken Tikka Lababdar', 'nonveg', 330, {
        description: 'Chicken tikka cooked in creamy butter masala gravy.',
      }),
      dish('chicken-butter-masala', 'Chicken Butter Masala', 'nonveg', 340, {
        description: 'Chicken cooked in rich cashewnut, almond & tangy tomato gravy.',
      }),
      dish('chicken-bharta', 'Chicken Bharta', 'nonveg', 330),
      dish('murgh-tikka-masala', 'Murgh Tikka Masala', 'nonveg', 330, {
        description: 'Chicken tikka cooked in spicy onion tomato masala.',
      }),
      dish('home-style-mutton-curry', 'Home Style Mutton Curry', 'nonveg', 410, {
        description: 'Mutton pieces cooked in a thin onion tomato gravy with potato, Bengali style.',
      }),
      dish('mutton-roganjosh', 'Mutton Roganjosh', 'nonveg', 410, {
        description: 'A unique Kashmiri delicacy.',
      }),
      dish('mutton-keema-masala', 'Mutton Keema Masala', 'nonveg', 440),
      dish('mutton-kasha', 'Mutton Kasha / Mutton Bhuna', 'nonveg', 410),
      dish('rahra-mutton', 'Rahra Mutton', 'nonveg', 450),
      dish('kadai-prawn', 'Kadai Prawn', 'nonveg', 490),
      dish('egg-curry', 'Egg Curry / Masala', 'other', 180),
    ],
  },

  // Page 10 — Rice, Bread & Bengali Traditional Menu
  {
    id: 'rice',
    label: 'Rice',
    title: 'Rice',
    items: [
      dish('steamed-rice', 'Steamed Rice', 'veg', 140),
      dish('jeera-rice', 'Jeera Rice', 'veg', 170),
      dish('pulao', 'Pulao Aap ki Pasand', 'veg', 180, { description: 'Veg or green peas.' }),
      dish('kashmiri-pulao', 'Kashmiri Pulao', 'veg', 240),
      {
        id: 'biryani',
        variant: 'featured',
        size: 'md',
        diet: 'nonveg',
        name: 'Biryani Aap ki Pasand',
        options: versions(['Chicken', 270], ['Mutton', 350]),
        description: 'Chicken or mutton biryani, accompanied with raita & salad.',
      },
    ],
  },
  {
    id: 'bread',
    label: 'Bread',
    title: 'Bread',
    items: [
      choice('roti', 'Roti', 'veg', versions(['Plain', 35], ['Butter', 40])),
      choice('naan', 'Naan', 'veg', versions(['Plain', 60], ['Butter', 65], ['Garlic', 75])),
      dish('cheese-naan', 'Cheese Naan', 'veg', 190),
      dish('masala-kulcha', 'Masala Kulcha', 'veg', 85),
      choice('lachha-paratha', 'Lachha Paratha', 'veg', versions(['Butter', 60], ['Methi', 65], ['Pudina', 70])),
    ],
  },
  {
    id: 'bengali',
    label: 'Bengali',
    title: 'Bengali Traditional Menu',
    style: 'Bengali Traditional',
    items: [
      dish('basanti-pulao', 'Basanti Pulao', 'veg', 210),
      dish('sona-moong-dal', 'Sona Moong Dal', 'veg', 200),
      dish('aloo-bhaja', 'Jhur Jhure Aloo Bhaja', 'veg', 130),
      dish('chanar-dalna', 'Chanar Dalna', 'veg', 270),
      dish('elish', 'Bhapa / Sorse Elish', 'nonveg', 370),
      dish('pomfret-jhal', 'Pomfret Jhal / Sorse', 'nonveg', 450),
      dish('katla', 'Gondhoraj Fish / Doi Katla / Katla Kalia', 'nonveg', 270),
      choice('chicken-dak-bunglow', 'Chicken Dak Bunglow', 'nonveg', fullHalf(370, 220), {
        description: 'An old-style chicken curry served with egg and potato.',
      }),
      choice('mutton-dak-bunglow', 'Mutton Dak Bunglow', 'nonveg', fullHalf(470, 270), {
        description: 'An old-style mutton curry served with egg and potato.',
      }),
      dish('chingri-malai-curry', 'Chingri Malai Curry', 'nonveg', 490),
    ],
  },

  // Page 11 — From the Wok, Choices from Pan Asian, Dessert
  {
    id: 'noodles-rice',
    label: 'Noodles & Rice',
    eyebrow: 'From the Wok',
    title: 'Noodles & Fried Rice',
    note: 'Veg / Egg / Chicken / Mixed',
    style: 'Wok Tossed',
    items: [
      choice('hakka-noodles', 'Hakka Noodles', null, wok(200, 230, 270, 300)),
      choice('schezwan-noodles', 'Schezwan Style Noodles', null, wok(200, 230, 270, 300)),
      choice('chilli-garlic-noodles', 'Chilli Garlic Noodles', null, wok(200, 230, 270, 300)),
      choice('gravy-noodles', 'Gravy Noodles', null, wok(210, 240, 280, 310)),
      choice('fried-rice', 'Selection of Fried Rice', null, wok(210, 240, 280, 310)),
      choice('chilli-garlic-fried-rice', 'Chilli Garlic Fried Rice', null, wok(220, 240, 280, 330)),
    ],
  },
  {
    id: 'pan-asian',
    label: 'Pan Asian',
    title: 'Choices from Pan Asian',
    style: 'Wok Tossed',
    items: [
      dish('paneer-in-sauce', 'Paneer in Choice of Sauce', 'veg', 310, {
        description: 'Hot garlic, chilli, schezwan or manchurian.',
      }),
      dish('fish-in-sauce', 'Fish in Choice of Sauce', 'nonveg', 370, {
        description: 'Hot garlic, chilli, schezwan or manchurian.',
      }),
      dish('prawn-in-sauce', 'Prawn in Choice of Sauce', 'nonveg', 470, {
        description: 'Hot garlic, chilli, schezwan or manchurian.',
      }),
      dish('chicken-in-sauce', 'Chicken in Choice of Sauce', 'nonveg', 330, {
        description: 'Hot garlic, chilli, schezwan or manchurian.',
      }),
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    title: 'Dessert',
    items: [
      dish('gulab-jamun-ice-cream', 'Hot Gulab Jamun with Ice Cream & Chocolate Sauce', 'veg', 170),
      dish('gulab-jamun', 'Hot Gulab Jamun', 'veg', 80),
      dish('brownie-ice-cream', 'Chocolate Brownie with Ice Cream', 'veg', 160),
      dish('ice-cream', 'Choice of Ice Cream', 'veg', 150, {
        description: 'Vanilla, butterscotch, strawberry or chocolate.',
      }),
      dish('kesar-phirni', 'Kesar Phirni', 'veg', 130),
      dish('darshan-ice-cream', 'Darshan with Ice Cream', 'veg', 220),
      dish('fried-ice-cream', 'Fried Ice Cream', 'veg', 170),
    ],
  },
]

/** Bar dish ids start with "bar-" so dish page URLs never clash with other menus. */
export const BAR_MENU = prefixIds('bar', [...DRINKS, ...FOOD])
