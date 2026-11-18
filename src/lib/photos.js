import { DISH_PHOTOS } from '../data/dishPhotos.js'

const BY_SRC = new Map(Object.values(DISH_PHOTOS).map((entry) => [entry.src, entry]))

/** URL of a Wikimedia Commons dish photo by key (see scripts/fetch-dish-photos.mjs). */
export function photo(key) {
  const entry = DISH_PHOTOS[key]
  if (!entry && import.meta.env?.DEV) console.warn(`Unknown dish photo "${key}"`)
  return entry?.src
}

/** { author, license, page } for a photo URL, or null for the hotel's own photos. */
export function photoCredit(src) {
  return BY_SRC.get(src) ?? null
}
