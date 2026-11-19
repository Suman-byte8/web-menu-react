/**
 * In-room dining menu (source: Room_compressed.pdf).
 *
 * The in-room menu is the Cocoon restaurant menu with a few differences, so
 * the sections are taken from restaurantMenu.js (one price change updates
 * both menus) and only the differences are listed here:
 *   - many curries and Tandoori Murgh come in Full / Half portions
 *   - Paneer Tikka Lababdar isn't served in rooms
 *   - coffee is a flat ₹70, Blossom has no mango, Lachha Paratha is
 *     Methi / Pudina only
 */

import { copySections } from '../lib/menu.js'
import { photo } from '../lib/photos.js'
import { RESTAURANT_MENU } from './restaurantMenu.js'

export const ROOMS = {
  pageTitle: 'SILK INN Malda — In-Room Dining',
  badge: 'In-Room',
  tagline: 'Suite Service • Dial 9',
  availability: '24/7 Available',
  intro: {
    eyebrow: 'In-Room Dining',
    title: 'Dine in Your Room',
    description:
      'Whichever meal you choose, our executive chef has created unique culinary offerings for every guest of the Silk Inn.',
    image: photo('room-service'),
    alt: 'Room service tray',
  },
  service: {
    howToOrder: 'Press 9 on phone',
    delivery: 'Delivery: ~25 mins',
  },
  notice: '5% GST applicable · Leftover food parcels are charged extra · Ordered items cannot be cancelled.',
  empty: {
    icon: 'room_service',
    title: 'No items found',
    message: 'No in-room dining dishes match this filter.',
  },
}

const fullHalf = (full, half) => ({
  options: [
    { label: 'Full', price: full },
    { label: 'Half', price: half },
  ],
})

/** Prices and details that differ from the restaurant menu. */
const ROOM_OVERRIDES = {
  // Breakfast & beverages
  'breakfast-coffee': { price: 70, options: undefined },
  coffee: { price: 70, options: undefined, description: 'Regular or black.' },
  blossom: { description: 'Orange or pineapple.' },
  'lachha-paratha': {
    options: [
      { label: 'Methi', price: 65 },
      { label: 'Pudina', price: 70 },
    ],
  },

  // Tandoor
  'tandoori-murgh': fullHalf(550, 300),

  // Pan Asian
  'paneer-in-sauce': fullHalf(310, 180),
  'fish-in-sauce': fullHalf(370, 230),
  'prawn-in-sauce': fullHalf(470, 270),
  'chicken-in-sauce': fullHalf(330, 200),

  // Indian vegetarian
  'paneer-butter-masala': fullHalf(320, 190),
  'kadhai-paneer': fullHalf(320, 190),
  'shahi-paneer': fullHalf(330, 200),
  'palak-paneer': fullHalf(320, 190),
  'mushroom-babycorn-masala': fullHalf(340, 190),
  'veg-jhal-frezi': fullHalf(220, 140),
  'dum-aloo': fullHalf(240, 150),
  'dal-tadkewali': fullHalf(210, 130),
  'yellow-dal-fry': fullHalf(210, 130),
  'dal-makhani': fullHalf(270, 160),

  // Indian non-vegetarian
  'fish-tikka-masala': fullHalf(390, 230),
  'home-style-chicken-curry': fullHalf(300, 180),
  'kadhai-chicken': fullHalf(310, 180),
  'chicken-do-pyaza': fullHalf(310, 180),
  'chicken-butter-masala': fullHalf(340, 190),
  'home-style-mutton-curry': fullHalf(410, 240),
  'mutton-keema-masala': fullHalf(440, 270),
  'mutton-kasha': fullHalf(410, 240),
}

export const ROOMS_MENU = copySections(RESTAURANT_MENU, {
  prefix: 'room',
  sections: [
    'breakfast',
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
    'beverages',
  ],
  exclude: ['paneer-tikka-lababdar'],
  overrides: ROOM_OVERRIDES,
})
