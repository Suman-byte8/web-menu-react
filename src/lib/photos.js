import { DISH_PHOTOS } from '../data/dishPhotos.js'

/** URL of a Wikimedia Commons photo by key, for venue and menu heroes (see scripts/fetch-dish-photos.mjs). */
export function photo(key) {
  const entry = DISH_PHOTOS[key]
  if (!entry && import.meta.env?.DEV) console.warn(`Unknown dish photo "${key}"`)
  return entry?.src
}

/**
 * A sharper copy of a Commons photo for large, full-width use (heroes and
 * venue cards). The stored URLs are 500px thumbnails; Commons also serves
 * a 960px step. Returns null when there is no larger copy to try.
 */
export function largePhoto(src) {
  return src && /\/500px-[^/]+$/.test(src) ? src.replace(/\/500px-([^/]+)$/, '/960px-$1') : null
}

