/**
 * Bar menu content. Uses the same dish shape as restaurantMenu.js, plus the
 * text-only card for drinks:
 *
 *   variant 'text'
 *     altPrice   { amount, label }   second price, e.g. per bottle
 *     note       string              italic serving note in the footer
 *     tag        string              chip on the right of the footer
 *
 *   variant 'compact' also accepts size: 'sm' (80px thumbnail).
 */

import { publicImage as img } from '../lib/assets.js'

export const BAR = {
  pageTitle: 'SILK INN Malda — Bar & Spirits Menu',
  badge: 'Bar Lounge',
  tagline: 'Artisan Cocktails & Spirits',
  hours: '4 PM - 11 PM',
  intro: {
    eyebrow: 'Mixology',
    title: 'Artisan Libations',
    description: 'Infused with Bengal botanicals, citrus peel, and aged barrels.',
    image: img('bar_cocktail_amber.jpg'),
    alt: 'Amber Signature Cocktail',
  },
  empty: {
    icon: 'wine_bar',
    title: 'No drinks found',
    message: 'No selections match this dietary filter in the bar menu.',
  },
}

export const BAR_MENU = [
  {
    id: 'cocktails',
    label: 'Signature Cocktails',
    eyebrow: 'House Specialties',
    title: 'Cocktails',
    note: '60ml Pours',
    items: [
      {
        id: 'malda-mango-old-fashioned',
        variant: 'text',
        diet: 'veg',
        name: 'Malda Mango Old Fashioned',
        price: 420,
        description:
          'Bourbon whiskey, artisanal Fazli mango syrup, aromatic bitters, flame-expressed orange peel.',
        note: 'Served on carved crystal ice',
        tag: 'House Special',
      },
      {
        id: 'silk-route-botanical-gin',
        variant: 'text',
        diet: 'veg',
        name: 'Silk Route Botanical Gin',
        price: 390,
        description:
          'Artisanal Indian gin infused with Darjeeling green tea, cucumber ribbons, juniper berries, tonic.',
        note: 'Copa de Balón stemware',
        tag: 'Refreshing',
      },
      {
        id: 'smoked-gondhoraj-sour',
        variant: 'text',
        diet: 'other',
        name: 'Smoked Gondhoraj Sour',
        price: 450,
        description:
          'Blended Scotch, fragrant Gondhoraj lime juice, organic honey syrup, egg white foam, smoked cinnamon.',
        note: 'Contains Egg White (Other)',
        tag: 'Signature',
      },
    ],
  },
  {
    id: 'mocktails',
    label: 'Botanical Mocktails',
    eyebrow: 'Zero Proof',
    title: 'Mocktails',
    note: 'Non-Alcoholic',
    items: [
      {
        id: 'gondhoraj-mint-sparkle',
        variant: 'text',
        diet: 'veg',
        name: 'Gondhoraj Mint Sparkle',
        price: 180,
        description:
          'Hand-pressed Bengal Gondhoraj lemon, crushed garden mint, mineral sparkling water, pink Himalayan salt.',
        note: 'Crisp, citrusy & fresh',
        tag: 'Popular',
      },
      {
        id: 'wild-berry-cooler',
        variant: 'text',
        diet: 'veg',
        name: 'Wild Berry Cooler',
        price: 210,
        description: 'Brewed organic hibiscus flower tea, crushed raspberries, ginger essence, sparkling soda.',
        note: 'Floral ruby notes',
        tag: 'Antioxidant',
      },
    ],
  },
  {
    id: 'wine',
    label: 'Wine & Cellar',
    eyebrow: 'Cellar Selection',
    title: 'Wines & Cellar',
    note: 'Glass / Bottle',
    items: [
      {
        id: 'sula-dindori-shiraz',
        variant: 'text',
        diet: 'veg',
        name: 'Sula Dindori Reserve Shiraz',
        price: 450,
        altPrice: { amount: 2200, label: 'Bottle' },
        description: 'Lush dark berries, spice, subtle oak vanilla. Nashik Valley.',
      },
      {
        id: 'fratelli-sauvignon-blanc',
        variant: 'text',
        diet: 'veg',
        name: 'Fratelli Sauvignon Blanc',
        price: 420,
        altPrice: { amount: 2050, label: 'Bottle' },
        description: 'Crisp, green apple, zesty mineral finish. Perfect with fish & salad.',
      },
    ],
  },
  {
    id: 'bar-bites',
    label: 'Bar Pairings',
    eyebrow: 'Accompaniments',
    title: 'Bar Bites & Tapas',
    note: "Chef's Savory Tapas",
    items: [
      {
        id: 'bar-cottage-cheese-popcorn',
        variant: 'compact',
        size: 'sm',
        diet: 'veg',
        name: 'Cottage Cheese Popcorn',
        price: 350,
        description: 'Crispy bite-sized paneer glazed in sweet teriyaki sauce.',
        image: img('paneer-popcorn.webp'),
        highlight: { label: 'Tapas Veg', tone: 'ink' },
      },
      {
        id: 'bar-fried-calamari',
        variant: 'compact',
        size: 'sm',
        diet: 'nonveg',
        name: 'Fried Calamari & Aioli',
        price: 430,
        description: 'Crispy squid rings with spicy garlic aioli and lemon.',
        image: img('Fried Calamari with spicy garlic aioli.png'),
        highlight: { label: 'Tapas Non-Veg', tone: 'ink' },
      },
    ],
  },
]
