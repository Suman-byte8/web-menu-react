import { ALL_DIETS } from '../data/diets.js'

/** Keep only dishes matching `diet`, dropping categories that end up empty. */
export function filterMenuByDiet(categories, diet) {
  if (diet === ALL_DIETS) return categories

  return categories
    .map((category) => ({
      ...category,
      items: category.items.filter((item) => item.diet === diet),
    }))
    .filter((category) => category.items.length > 0)
}

export function countDishes(categories) {
  return categories.reduce((total, category) => total + category.items.length, 0)
}

export function formatPrice(amount) {
  return `₹${amount.toLocaleString('en-IN')}`
}

export function categoryAnchor(id) {
  return `cat-${id}`
}
