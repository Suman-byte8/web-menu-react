# SILK INN Malda — Digital Menu

Guest-facing menu for SILK INN, Malda: the Cocoon restaurant, the Bottoms Up
bar and in-room dining, with a detail page for every dish.

Live: https://menu-silkinn.netlify.app (kept out of search engines on purpose).

Built with React 19, React Router 8, Vite 8 and Tailwind CSS 4.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # Oxlint
```

## Update the menu

All menu content lives in `src/data/` — no component changes needed.

| File | What it holds |
| --- | --- |
| `restaurantMenu.js` | The Cocoon restaurant menu: sections, dishes, prices. **The source for food on every menu.** |
| `barMenu.js` | Bar drinks. Bar food is copied from the restaurant sections. |
| `roomsMenu.js` | In-room dining: copies the restaurant sections and lists only what differs (Full / Half portions, items not served in rooms). |
| `dishDetails.js` | Extra dish-page content: ingredients, cooking style, "You May Also Like" pairings. |
| `site.js` | Hotel name, routes, home page text, bottom navigation. |

- **Change a food price:** edit it in `restaurantMenu.js`. Bar and Rooms pick it up
  automatically, unless Rooms overrides that dish in `ROOM_OVERRIDES`.
- **Several versions of a dish:** use `options`, e.g.
  `[{ label: 'Full', price: 320 }, { label: 'Half', price: 190 }]`.
  An option can carry its own `diet` (`veg`, `nonveg`, or `other` for egg).
- **Drinks** use `layout: 'list'` sections with price `columns` such as `['60 ml', '30 ml']`.

## Dish photos

Photos are free-licensed images from Wikimedia Commons, loaded by URL.

- `scripts/fetch-dish-photos.mjs` maps photo keys to Wikipedia articles.
  Run `node scripts/fetch-dish-photos.mjs` to regenerate `src/data/dishPhotos.js`.
- Use a photo in the menu data with `image: photo('key')`.
- The photographer and licence are credited under the photo on each dish page.
  Keep that credit: most of these licences require it.
- To use the hotel's own photos instead, put them in `public/images/` and use
  `image: publicImage('file.jpg')`.

## Deployment

Hosted on **Netlify**, configured by `netlify.toml`:

- build `npm run build`, publish `dist`, Node 22
- every path falls back to `index.html`, so links like `/dish/...` work when opened directly
- security headers, long caching for hashed files, and `X-Robots-Tag: noindex`

`public/.htaccess` holds the same rules for Apache / LiteSpeed hosting
(e.g. Hostinger) in case the site moves. Netlify ignores it.

The site address used in link previews is set in `.env` (`VITE_SITE_URL`).

## Project structure

```
src/
  pages/        one component per route (Home, Restaurant, Bar, Rooms, Dish)
  components/   home/, menu/ (cards, filters, sections), dish/ (detail page)
  shared/       layout pieces used on every page (headers, bottom nav)
  UI/           small reusable primitives (Icon, Pill, Dot, InfoNote, ...)
  data/         menu content (see above)
  lib/          helpers (menu filtering, dish lookup, photos)
public/         icons, robots.txt, manifest, share image, .htaccess
```
