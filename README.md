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
| `restaurantMenu.js` | The Cocoon restaurant menu: sections, dishes, prices. |
| `barMenu.js` | The Bottoms Up bar menu: drinks and the bar's food. |
| `roomsMenu.js` | The in-room dining menu, including its Full / Half portions. |
| `menuBuilders.js` | Shorthand used to write items (`dish`, `choice`, `drink`, `fullHalf`, …). |
| `site.js`, `venues.js` | Hotel name, routes, home page text and venue cards, bottom navigation. |

- **Each menu is independent.** Restaurant, Bar and Rooms list their own items, in the
  order of their printed menus. Changing a price on one menu doesn't change the others,
  so update every menu that lists the dish.
- **Several versions of a dish:** use `options`, e.g.
  `[{ label: 'Full', price: 320 }, { label: 'Half', price: 190 }]`.
  An option can carry its own `diet` (`veg`, `nonveg`, or `other` for egg).
- **Drinks** use `layout: 'list'` sections with price `columns` such as `['60 ml', '30 ml']`.

## Logo & page transitions

- The logo comes from `public/silk-inn-logo.png`, split into two layers in
  `src/assets/brand/` (the orange butterfly and the "ilk Inn" lettering) so they
  can animate separately. `shared/Logo.jsx` draws it; animations live in `src/index.css`.
- `shared/PageTransition.jsx` shows the logo full-screen between pages. Timings are in
  `src/lib/transition.js`. Visitors with "reduce motion" turned on skip it.

## Photos

Menu items have no photos. Dish cards and dish pages show the section's icon
(picked from the section name by `categoryIcon` in `src/lib/menu.js`) on a
glowing glass orb instead.

Photos are used only for atmosphere: the Restaurant / Bar / Rooms page heroes
(`intro.image` in each menu file) and the venue cards on the home page
(`src/data/venues.js`). They are free-licensed images from Wikimedia Commons,
loaded by URL with `photo('key')`.

- `scripts/fetch-dish-photos.mjs` maps photo keys to Wikipedia articles.
  Run `node scripts/fetch-dish-photos.mjs` to regenerate `src/data/dishPhotos.js`.

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
  UI/           small reusable primitives (Icon, IconOrb, Pill, InfoNote, ...)
  data/         menu content (see above)
  lib/          helpers (menu filtering and search, dish lookup, photos)
public/         logo, icons, robots.txt, manifest, share image, .htaccess
```
