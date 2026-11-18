import { BAR_MENU } from '../data/barMenu.js'
import { DISH_DETAILS } from '../data/dishDetails.js'
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
 * Everything the detail page needs for one dish: the menu entry merged with
 * its DISH_DETAILS extras. Returns null for unknown ids and for drinks.
 */
export function getDish(id) {
  const entry = BY_ID.get(id)
  if (!entry || !hasDetailPage(entry.item)) return null

  const { item, category, menu } = entry
  const canonical = canonicalId(item)
  const details = DISH_DETAILS[canonical] ?? {}

  return {
    id: item.id,
    canonicalId: canonical,
    name: details.fullName ?? item.name,
    diets: itemDiets(item),
    price: priceRange(item),
    options: item.options ?? [],
    image: item.image,
    imageCredit: item.image ? photoCredit(item.image) : null,
    placeholder: item.placeholder,
    description: details.description ?? item.description,
    badge: details.badge ?? item.badge?.label ?? item.highlight?.label,
    ingredients: details.ingredients ?? item.tags ?? [],
    style: details.style ?? category.style ?? 'Chef Prepared',
    availability: availabilityOf(canonical),
    category: category.title,
    eyebrow: category.eyebrow,
    menu: { label: menu.label, route: menu.route },
    relatedIds: details.related ?? [],
  }
}

/** Prefer the copy of a dish on `menu` (e.g. the Rooms version) when it exists. */
function onMenu(id, menu) {
  const local = ENTRIES.find((entry) => entry.menu === menu && canonicalId(entry.item) === id)
  return local ? local.item.id : id
}

/**
 * Up to `limit` dishes for "You May Also Like": the curated pairings first,
 * then other dishes from the same category, then from the same menu.
 * Pairings stay on the guest's current menu where possible.
 */
export function getRelatedDishes(dish, limit = 3) {
  const { category, menu } = BY_ID.get(dish.id)
  const candidates = [
    ...dish.relatedIds.map((id) => onMenu(id, menu)),
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
