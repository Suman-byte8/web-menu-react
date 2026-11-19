/**
 * Bottoms Up bar menu (source: Bar_compressed.pdf).
 *
 * Drinks use the compact price-list layout (`layout: 'list'`); `columns`
 * are matched to option labels, so a spirit is
 *   spirit('id', 'Name', 650, 360)  →  60 ml ₹650 · 30 ml ₹360
 * Brand misspellings in the PDF are corrected (e.g. "Glenmorange" →
 * "Glenmorangie", "Budwiser" → "Budweiser").
 *
 * Food: the bar serves the Cocoon kitchen menu (PDF pages 4–11 match the
 * restaurant menu exactly), so those sections are taken from
 * restaurantMenu.js rather than copied — one price change updates both.
 */

import { copySections } from '../lib/menu.js'
import { photo } from '../lib/photos.js'
import { RESTAURANT_MENU } from './restaurantMenu.js'

const drink = (id, name, price, more = {}) => ({ id, variant: 'text', name, diet: 'veg', price, ...more })
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
    eyebrow: 'Whisky',
    title: 'Single Malt Whisky',
    note: 'Per peg',
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
    eyebrow: 'Whisky',
    title: 'Scotch Whisky',
    note: 'Per peg',
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
    eyebrow: 'Spirits',
    title: 'Vodka',
    note: 'Per peg',
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
    eyebrow: 'Spirits',
    title: 'Rum',
    note: 'Per peg',
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
    id: 'gin',
    label: 'Gin',
    eyebrow: 'Spirits',
    title: 'Gin',
    note: 'Per peg',
    layout: 'list',
    columns: SHOT_COLUMNS,
    items: [
      spirit('bombay-sapphire', 'Bombay Sapphire', 370, 210),
      spirit('pink-mystique', 'Pink Mystique', 200, 120),
    ],
  },
  {
    id: 'tequila',
    label: 'Tequila',
    eyebrow: 'Spirits',
    title: 'Tequila',
    note: 'Per peg',
    layout: 'list',
    columns: SHOT_COLUMNS,
    items: [
      spirit('la-chica-blanco', 'La Chica Tequila Blanco', 480, 250),
      spirit('la-chica-gold', 'La Chica Tequila Gold', 480, 250),
    ],
  },
  {
    id: 'liqueur',
    label: 'Liqueur',
    eyebrow: 'Spirits',
    title: 'Liqueur',
    note: 'Per peg',
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
    id: 'cocktails',
    label: 'Cocktails',
    eyebrow: 'Mixology',
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
      drink('liit', 'LIIT', 550, { description: 'Long Island Iced Tea' }),
    ],
  },
  {
    id: 'shots',
    label: 'Shots',
    eyebrow: 'Mixology',
    title: 'Shots',
    layout: 'list',
    items: [
      drink('blue-kamikaze', 'Blue Kamikaze', 200, { description: 'Vodka base' }),
      drink('lemon-drop', 'Lemon Drop', 250, { description: 'Gin base' }),
      drink('b52', 'B52', 510, { description: 'Kahlua coffee & Irish cream' }),
    ],
  },
  {
    id: 'red-wine',
    label: 'Red Wine',
    eyebrow: 'Cellar Selection',
    title: 'Red Wine',
    note: 'Per bottle',
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
    eyebrow: 'Cellar Selection',
    title: 'White Wine',
    note: 'Per bottle',
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
    eyebrow: 'Chilled',
    title: 'Beer',
    note: 'Per bottle',
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
    eyebrow: 'Chilled',
    title: 'Beer Tower',
    note: '1950 ml · 3 bottles',
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
    eyebrow: 'Chilled',
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
    id: 'soft-drinks',
    label: 'Mocktails & Mixers',
    eyebrow: 'Zero Proof',
    title: 'Mocktails & Mixers',
    note: 'Non-Alcoholic',
    layout: 'list',
    items: [
      drink('all-mocktails', 'All Mocktails', 150),
      drink('tonic-water', 'Tonic Water', 90),
      drink('ginger-ale', 'Ginger Ale', 90),
      drink('red-bull', 'Red Bull Energy Drink', 200),
      drink('bar-coolants', 'Coolants / Aerated Water', 70),
    ],
  },
]

/**
 * Food served at the bar: every restaurant section except breakfast and the
 * restaurant's own beverages. Items get bar ids and point back at the
 * restaurant dish with `ref` (shared details, "Dine-In & Bar" availability).
 */
const BAR_FOOD_SECTIONS = [
  'soups',
  'salads',
  'continental',
  'pasta',
  'continental-mains',
  'tandoor',
  'chinese',
  'noodles-rice',
  'pan-asian',
  'indian-veg',
  'indian-nonveg',
  'rice',
  'breads',
  'bengali',
  'desserts',
]

const FOOD = copySections(RESTAURANT_MENU, { prefix: 'bar', sections: BAR_FOOD_SECTIONS })

export const BAR_MENU = [...DRINKS, ...FOOD]
