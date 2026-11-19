import { BAR_MENU } from '../data/barMenu.js'
import { RESTAURANT_MENU } from '../data/restaurantMenu.js'
import { ROOMS_MENU } from '../data/roomsMenu.js'
import { ROUTES } from '../data/site.js'
import { itemDiets, priceRange } from './menu.js'
import { photoCredit } from './photos.js'

/** Every menu. Each lists its own items; a dish page belongs to exactly one menu. */
const MENUS = [
  { id: 'restaurant', label: 'Dine-In', route: ROUTES.restaurant, categories: RESTAURANT_MENU },
  { id: 'bar', label: 'Bar', route: ROUTES.bar, categories: BAR_MENU },
  { id: 'rooms', label: 'Rooms', route: ROUTES.rooms, categories: ROOMS_MENU },
]

const ENTRIES = MENUS.flatMap((menu) =>
  menu.categories.flatMap((category) => category.items.map((item) => ({ item, category, menu }))),
)
const BY_ID = new Map(ENTRIES.map((entry) => [entry.item.id, entry]))

if (import.meta.env?.DEV && BY_ID.size !== ENTRIES.length) {
  console.warn('dishes: two menu items share an id — dish page links will clash')
}

/** Drinks and wines (text cards) have no detail page. */
export function hasDetailPage(item) {
  return item.variant !== 'text'
}

export function dishPath(id) {
  return `/dish/${encodeURIComponent(id)}`
}

/**
 * Everything the detail page needs for one dish, taken from its menu entry.
 * Returns null for unknown ids and for drinks.
 */
export function getDish(id) {
  const entry = BY_ID.get(id)
  if (!entry || !hasDetailPage(entry.item)) return null

  const { item, category, menu } = entry

  return {
    id: item.id,
    name: item.name,
    diets: itemDiets(item),
    price: priceRange(item),
    options: item.options ?? [],
    image: item.image,
    imageCredit: item.image ? photoCredit(item.image) : null,
    placeholder: item.placeholder,
    description: item.description,
    badge: item.badge?.label,
    ingredients: item.tags ?? [],
    style: category.style ?? 'Chef Prepared',
    availability: menu.label,
    category: category.title,
    eyebrow: category.eyebrow,
    menu: { label: menu.label, route: menu.route },
  }
}

/**
 * Up to `limit` dishes for "You May Also Like": other dishes from the same
 * section first, then from the rest of the same menu.
 */
export function getRelatedDishes(dish, limit = 3) {
  const { category, menu } = BY_ID.get(dish.id)
  const candidates = [
    ...category.items.map((item) => item.id),
    ...menu.categories.flatMap((c) => c.items.map((item) => item.id)),
  ]

  const used = new Set([dish.id])
  const related = []

  for (const id of candidates) {
    if (related.length === limit) break

    const candidate = getDish(id)
    if (!candidate || used.has(candidate.id)) continue

    used.add(candidate.id)
    related.push(candidate)
  }

  return related
}
