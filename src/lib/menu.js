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

/** Lower-case, accent-free text for matching ("Crème" → "creme"). */
const normalise = (text) =>
  String(text ?? '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()

/**
 * Keep only items whose name, description or versions match every word of
 * `query`. A word that matches a section title ("soup", "biryani") keeps the
 * whole section. Empty sections are dropped.
 */
export function searchMenu(categories, query) {
  const words = normalise(query).split(/\s+/).filter(Boolean)
  if (!words.length) return categories

  return categories
    .map((category) => {
      const section = normalise(`${category.title} ${category.label} ${category.eyebrow ?? ''}`)
      return {
        ...category,
        items: category.items.filter((item) => {
          const text = `${section} ${normalise(
            [item.name, item.description, ...(item.options ?? []).map((option) => option.label)].join(' '),
          )}`
          return words.every((word) => text.includes(word))
        }),
      }
    })
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

/** Icon for a menu note: a clock for serving times, a glass for sizes. */
export function noteIcon(note) {
  if (/\d{1,2}:\d{2}/.test(note)) return 'schedule'
  if (/\d\s*ml\b|bottle|litre/i.test(note)) return 'local_drink'
  if (/\bpcs\b/i.test(note)) return 'restaurant'
  return 'info'
}

/** Material icon for a menu section, picked from its name. */
const CATEGORY_ICONS = [
  [/breakfast/, 'egg_alt'],
  [/salad/, 'eco'],
  [/soup/, 'soup_kitchen'],
  [/dessert|sweet/, 'icecream'],
  [/pasta/, 'dinner_dining'],
  [/biryani|rice/, 'rice_bowl'],
  [/bread|roti|naan/, 'bakery_dining'],
  [/noodle|chinese|asian|wok/, 'ramen_dining'],
  [/appetizer|starter|tandoor|kebab|munch/, 'outdoor_grill'],
  [/bengali|fish/, 'set_meal'],
  [/malt|scotch|whisk/, 'liquor'],
  [/wine/, 'wine_bar'],
  [/beer/, 'sports_bar'],
  [/vodka|rum|gin|liqueur|cocktail/, 'local_bar'],
  [/mocktail|soft|juice|water|soda|shake/, 'local_drink'],
  [/beverage|tea|coffee|thirst/, 'local_cafe'],
  [/main|curry|indian|veg/, 'skillet'],
]

export function categoryIcon(category) {
  const text = `${category.label} ${category.title}`.toLowerCase()
  return CATEGORY_ICONS.find(([pattern]) => pattern.test(text))?.[1] ?? 'restaurant'
}

export function categoryAnchor(id) {
  return `cat-${id}`
}

/**
 * Prefix every item id of a menu (`bar-green-salad`), so dish page URLs stay
 * unique when two menus list a dish with the same name.
 */
export function prefixIds(prefix, categories) {
  return categories.map((category) => ({
    ...category,
    items: category.items.map((item) => ({ ...item, id: `${prefix}-${item.id}` })),
  }))
}
