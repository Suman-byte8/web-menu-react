/**
 * Shorthand for writing menu items. Every menu file (restaurant, bar, rooms)
 * lists its own items with these; no items are shared between menus.
 *
 * Menu items have no photos: cards show the section icon instead.
 *
 * Item shape
 *   variant      'compact' (row card) | 'featured' (large highlighted card)
 *                | 'text' (row card with no detail page — used for drinks)
 *   diet         key of DIETS: 'veg' | 'nonveg' | 'other' (egg dishes)
 *   price        number, in rupees — or `options` for several versions:
 *   options      [{ label, price, diet? }]  e.g. Plain ₹130 / Grilled ₹165,
 *                or Veg ₹160 / Non-Veg ₹180 (option diet overrides the dish's)
 *   description  optional
 *   highlight    { label } — highlighted chip on the card (portion size)
 *   featured:    badge { label, tone }, tags []
 *   text:        note (italic footer), tag (footer chip), altPrice
 *
 * Section shape: { id, label (tab), eyebrow?, title, note?, style?, layout?,
 * columns?, items }. `style` is shown as "Style" on dish pages
 * (default "Chef Prepared"); `layout: 'list'` renders a drinks price list.
 */

/** Food on a row card. */
export const dish = (id, name, diet, price, more = {}) => ({
  id,
  variant: 'compact',
  size: 'sm',
  name,
  diet,
  price,
  ...more,
})

/** Same, but in several versions: options [{ label, price, diet? }]. */
export const choice = (id, name, diet, options, more = {}) => ({
  id,
  variant: 'compact',
  size: 'sm',
  name,
  diet,
  options,
  ...more,
})

/** Drinks: text-only card (no photo, no detail page). */
export const drink = (id, name, price, more = {}) => ({ id, variant: 'text', name, diet: 'veg', price, ...more })
export const drinkChoice = (id, name, options, more = {}) => ({
  id,
  variant: 'text',
  name,
  diet: 'veg',
  options,
  ...more,
})

/** Veg / non-veg pair of versions, e.g. vegNonVeg(160, 180). */
export const vegNonVeg = (veg, nonveg, [vegLabel, nonvegLabel] = ['Veg', 'Non-Veg']) => [
  { label: vegLabel, price: veg, diet: 'veg' },
  { label: nonvegLabel, price: nonveg, diet: 'nonveg' },
]

/** Wok dishes: Veg / Egg / Chicken / Mixed. */
export const wok = (veg, egg, chicken, mixed) => [
  { label: 'Veg', price: veg, diet: 'veg' },
  { label: 'Egg', price: egg, diet: 'other' },
  { label: 'Chicken', price: chicken, diet: 'nonveg' },
  { label: 'Mixed', price: mixed, diet: 'nonveg' },
]

/** Same-diet versions: versions(['Plain', 130], ['Grilled', 165]). */
export const versions = (...pairs) => pairs.map(([label, price]) => ({ label, price }))

/** Full / half portions: fullHalf(320, 190). */
export const fullHalf = (full, half) => versions(['Full', full], ['Half', half])

/** "2 pcs" portion chip. */
export const pcs = (count) => ({ label: `${count} pcs` })
