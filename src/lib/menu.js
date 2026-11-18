import { ALL_DIETS, DIETS } from '../data/diets.js'

/**
 * Dishes can come in several versions: `options: [{ label, price, diet? }]`.
 * An option's `diet` overrides the dish's own, so one dish can be both veg
 * and non-veg (e.g. "Hot & Sour Soup — Veg ₹160 / Non-Veg ₹180").
 */
const hasDietOptions = (item) => Boolean(item.options?.some((option) => option.diet))

/** Every diet a dish is available in, in menu order. */
export function itemDiets(item) {
  const diets = hasDietOptions(item) ? item.options.map((option) => option.diet ?? item.diet) : [item.diet]
  return [...new Set(diets.filter(Boolean))]
}

export function dietLabels(diets) {
  return diets.map((diet) => DIETS[diet].label).join(' / ')
}

/** Lowest and highest price across a dish's options. */
export function priceRange(item) {
  const prices = item.options?.length ? item.options.map((option) => option.price) : [item.price]
  return { min: Math.min(...prices), max: Math.max(...prices) }
}

/**
 * Keep only dishes available in `diet`, dropping categories that end up
 * empty. Dishes with per-diet options keep just the matching options.
 */
export function filterMenuByDiet(categories, diet) {
  if (diet === ALL_DIETS) return categories

  return categories
    .map((category) => ({
      ...category,
      items: category.items.flatMap((item) => {
        if (!itemDiets(item).includes(diet)) return []
        if (!hasDietOptions(item)) return [item]
        return [{ ...item, options: item.options.filter((option) => (option.diet ?? item.diet) === diet) }]
      }),
    }))
    .filter((category) => category.items.length > 0)
}

export function countDishes(categories) {
  return categories.reduce((total, category) => total + category.items.length, 0)
}

export function formatPrice(amount) {
  return `₹${amount.toLocaleString('en-IN')}`
}

/** "₹160" or "₹160 – 180" */
export function formatPriceRange({ min, max }) {
  return min === max ? formatPrice(min) : `${formatPrice(min)} – ${max.toLocaleString('en-IN')}`
}

export function categoryAnchor(id) {
  return `cat-${id}`
}
