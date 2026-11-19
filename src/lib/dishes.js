import { BAR_MENU } from '../data/barMenu.js'
import { RESTAURANT_MENU } from '../data/restaurantMenu.js'
import { ROOMS_MENU } from '../data/roomsMenu.js'
import { ROUTES } from '../data/site.js'
import { itemDiets, priceRange } from './menu.js'
import { photoCredit } from './photos.js'

/** Every menu, in the order used for "Availability" text ("Dine-In, Bar & Rooms"). */
const MENUS = [
  { id: 'restaurant', label: 'Dine-In', route: ROUTES.restaurant, categories: RESTAURANT_MENU },
  { id: 'bar', label: 'Bar', route: ROUTES.bar, categories: BAR_MENU },
  { id: 'rooms', label: 'Rooms', route: ROUTES.rooms, categories: ROOMS_MENU },
]

const ENTRIES = MENUS.flatMap((menu) =>
  menu.categories.flatMap((category) => category.items.map((item) => ({ item, category, menu }))),
)
const BY_ID = new Map(ENTRIES.map((entry) => [entry.item.id, entry]))

/** Rooms/Bar copies of a restaurant dish point at it with `ref`. */
const canonicalId = (item) => item.ref ?? item.id

/** Drinks and wines (text cards) have no detail page. */
export function hasDetailPage(item) {
  return item.variant !== 'text'
}

export function dishPath(id) {
  return `/dish/${encodeURIComponent(id)}`
}

/** "Restaurant", "Restaurant & Rooms", "Restaurant, Bar & Rooms" */
function joinNames(names) {
  if (names.length < 2) return names[0] ?? ''
  return `${names.slice(0, -1).join(', ')} & ${names.at(-1)}`
}

function availabilityOf(canonical) {
  const menus = MENUS.filter((menu) =>
    ENTRIES.some((entry) => entry.menu === menu && canonicalId(entry.item) === canonical),
  )
  return joinNames(menus.map((menu) => menu.label))
}

/**
 * Everything the detail page needs for one dish, taken from its menu entry.
 * Returns null for unknown ids and for drinks.
 */
export function getDish(id) {
  const entry = BY_ID.get(id)
  if (!entry || !hasDetailPage(entry.item)) return null

  const { item, category, menu } = entry
  const canonical = canonicalId(item)

  return {
    id: item.id,
    canonicalId: canonical,
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
    availability: availabilityOf(canonical),
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

  const used = new Set([dish.canonicalId])
  const related = []

  for (const id of candidates) {
    if (related.length === limit) break

    const candidate = getDish(id)
    if (!candidate || used.has(candidate.canonicalId)) continue

    used.add(candidate.canonicalId)
    related.push(candidate)
  }

  return related
}
