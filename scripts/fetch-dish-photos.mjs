/**
 * Looks up a free-licensed photo for each dish on Wikipedia / Wikimedia
 * Commons and writes src/data/dishPhotos.js (URL + author + licence).
 *
 *   node scripts/fetch-dish-photos.mjs
 *
 * PHOTO_SOURCES maps a photo key (used in the menu data as photo('key'))
 * to Wikipedia article titles, tried in order until one has a lead image.
 * Only freely licensed images are returned by the API (pilicense=free).
 * Every result was checked by eye; REJECTED_ARTICLES lists articles whose
 * lead photo is not the dish (raw ingredients, signage, a different dish).
 */
import { writeFileSync } from 'node:fs'

const PHOTO_SOURCES = {
  // Breakfast
  'fried-egg': ['Fried egg'],
  omelette: ['Omelette'],
  toast: ['Toast (food)'],
  'veg-sandwich': ['Vegetable sandwich', 'Sandwich'],
  'cheese-sandwich': ['Cheese sandwich', 'Grilled cheese'],
  'chicken-sandwich': ['Chicken sandwich'],
  'club-sandwich': ['Club sandwich'],
  'aloo-paratha': ['Aloo paratha', 'Paratha'],
  'puri-bhaji': ['Puri bhaji', 'Puri (food)'],
  idli: ['Idli'],
  upma: ['Upma'],
  uttapam: ['Uttapam'],

  // Salads, sides & soups
  'green-salad': ['Garden salad', 'Salad'],
  kachumber: ['Kachumber'],
  curd: ['Dahi (curd)', 'Curd'],
  raita: ['Raita'],
  papadum: ['Papadam'],
  'chicken-salad': ['Chicken salad'],
  'hot-and-sour-soup': ['Hot and sour soup'],
  'manchow-soup': ['Manchow soup'],
  'corn-soup': ['Sweetcorn soup', 'Corn soup'],
  'mushroom-soup': ['Cream of mushroom soup'],
  'tomato-soup': ['Tomato soup'],

  // Continental
  taco: ['Taco'],
  gratin: ['Gratin'],
  'fried-cheese': ['Fried cheese'],
  shashlik: ['Shashlik'],
  'popcorn-chicken': ['Karaage'],
  arrabbiata: ["Penne all'arrabbiata", 'Arrabbiata sauce'],
  stroganoff: ['Beef Stroganoff'],
  tiramisu: ['Tiramisu'],

  // Tandoor
  'paneer-tikka': ['Paneer tikka'],
  'chicken-tikka': ['Chicken tikka'],
  'malai-kebab': ['Murgh malai', 'Malai tikka', 'Reshmi kebab'],
  'tandoori-chicken': ['Tandoori chicken'],
  'seekh-kebab': ['Seekh kebab'],

  // Indo-Chinese
  'french-fries': ['French fries'],
  momo: ['Momo (food)'],
  'fish-finger': ['Fish finger'],
  'chilli-chicken': ['Chilli chicken', 'Chili chicken'],
  'chicken-lollipop': ['Chicken lollipop'],
  'korean-fried-chicken': ['Korean fried chicken'],
  'kung-pao-chicken': ['Kung Pao chicken'],
  'chicken-65': ['Chicken 65'],
  'fried-shrimp': ['Fried shrimp'],
  'hakka-noodles': ['Chow mein'],
  'noodle-soup': ['Noodle soup'],
  'fried-rice': ['Fried rice'],
  manchurian: ['Manchurian (dish)', 'Gobi manchurian'],

  // Indian main course
  'paneer-butter-masala': ['Paneer makhani', 'Paneer butter masala'],
  'kadai-paneer': ['Kadai paneer', 'Karahi paneer'],
  'shahi-paneer': ['Shahi paneer'],
  'palak-paneer': ['Palak paneer'],
  jalfrezi: ['Jalfrezi'],
  'jeera-aloo': ['Jeera aloo', 'Aloo jeera'],
  'dum-aloo': ['Dum aloo'],
  'dal-makhani': ['Dal makhani'],
  'chicken-chettinad': ['Chicken Chettinad', 'Chettinad chicken'],
  'kadai-chicken': ['Kadai chicken', 'Karahi'],
  'do-piaza': ['Do-piaza', 'Dopiaza'],
  'butter-chicken': ['Butter chicken'],
  'chicken-tikka-masala': ['Chicken tikka masala'],
  'mutton-curry': ['Mutton curry'],
  'rogan-josh': ['Rogan josh'],
  keema: ['Keema matar', 'Kheema'],
  'prawn-curry': ['Prawn curry', 'Shrimp curry'],

  // Rice & breads
  'steamed-rice': ['Cooked rice', 'Steamed rice'],
  'jeera-rice': ['Jeera rice'],
  pilaf: ['Pilaf'],
  biryani: ['Biryani'],
  chapati: ['Chapati'],
  naan: ['Naan'],
  kulcha: ['Kulcha'],
  'lachha-paratha': ['Lachha paratha', 'Paratha'],

  // Bengali
  'shorshe-ilish': ['Shorshe ilish', 'Shorshe Ilish'],
  'machher-jhol': ['Machher jhol', 'Bengali fish curry'],
  'chingri-malai-curry': ['Chingri malai curry', 'Malai curry'],

  // Desserts
  'gulab-jamun': ['Gulab jamun'],
  brownie: ['Chocolate brownie'],
  'ice-cream': ['Ice cream'],
  phirni: ['Phirni'],
  'fried-ice-cream': ['Fried ice cream'],
}

const REJECTED_ARTICLES = new Set([
  'Flattened rice',
  'Consommé',
  'Roulade',
  'Indian Chinese cuisine',
  'Kofta',
  'Ground meat',
  'Mung bean',
  'Chhena',
  'List of egg dishes',
  'Penne',
  'Baby corn',
  'Dal',
  'Mousse',
])

const UA = { 'User-Agent': 'menu-photo-fetcher/1.0' }
const THUMB_WIDTH = 500

async function api(host, params) {
  const url = `https://${host}/w/api.php?${new URLSearchParams({ format: 'json', formatversion: '2', ...params })}`
  const res = await fetch(url, { headers: UA })
  if (!res.ok) throw new Error(`${res.status} for ${url}`)
  return res.json()
}

const chunk = (list, size) =>
  Array.from({ length: Math.ceil(list.length / size) }, (_, i) => list.slice(i * size, i * size + size))
const stripHtml = (html = '') => html.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim()

// 1. Lead image for every candidate article title
const titles = [...new Set(Object.values(PHOTO_SOURCES).flat())]
const imageByTitle = new Map()

for (const batch of chunk(titles, 50)) {
  const data = await api('en.wikipedia.org', {
    action: 'query',
    titles: batch.join('|'),
    prop: 'pageimages',
    piprop: 'thumbnail|name',
    pithumbsize: String(THUMB_WIDTH),
    redirects: '1',
  })
  const alias = new Map()
  for (const { from, to } of [...(data.query.normalized ?? []), ...(data.query.redirects ?? [])]) alias.set(from, to)
  const resolve = (t) => (alias.has(t) ? resolve(alias.get(t)) : t)
  const pages = new Map(data.query.pages.map((p) => [p.title, p]))

  for (const title of batch) {
    const page = pages.get(resolve(title))
    if (page?.thumbnail && page.pageimage && !REJECTED_ARTICLES.has(page.title)) {
      imageByTitle.set(title, { src: page.thumbnail.source.split('?')[0], file: page.pageimage, article: page.title })
    }
  }
}

// 2. Pick the first title that has an image for each key
const chosen = {}
const missing = []
for (const [key, candidates] of Object.entries(PHOTO_SOURCES)) {
  const hit = candidates.map((t) => imageByTitle.get(t)).find(Boolean)
  if (hit) chosen[key] = hit
  else missing.push(key)
}

// 3. Author + licence for each file from Commons
const files = [...new Set(Object.values(chosen).map((c) => c.file))]
const creditByFile = new Map()
for (const batch of chunk(files, 50)) {
  const data = await api('commons.wikimedia.org', {
    action: 'query',
    titles: batch.map((f) => `File:${f}`).join('|'),
    prop: 'imageinfo',
    iiprop: 'extmetadata|url',
  })
  const alias = new Map((data.query.normalized ?? []).map(({ from, to }) => [to, from]))
  for (const page of data.query.pages) {
    const meta = page.imageinfo?.[0]?.extmetadata ?? {}
    const file = (alias.get(page.title) ?? page.title).replace(/^File:/, '').replace(/ /g, '_')
    creditByFile.set(file, {
      author: stripHtml(meta.Artist?.value) || 'Unknown',
      license: meta.LicenseShortName?.value ?? 'See source',
      page: page.imageinfo?.[0]?.descriptionurl ?? `https://commons.wikimedia.org/wiki/File:${file}`,
    })
  }
}

// 4. Write the data module
const entries = Object.entries(chosen).map(([key, c]) => {
  const credit = creditByFile.get(c.file.replace(/ /g, '_')) ?? {}
  return [key, { src: c.src, article: c.article, ...credit }]
})

const out = `/**
 * Generated by scripts/fetch-dish-photos.mjs — edit PHOTO_SOURCES there and
 * re-run instead of editing this file. Photos are from Wikimedia Commons;
 * keep the author + licence credit wherever a photo is shown large.
 */
export const DISH_PHOTOS = ${JSON.stringify(Object.fromEntries(entries), null, 2)}
`
writeFileSync(new URL('../src/data/dishPhotos.js', import.meta.url), out)

console.log(`photos: ${entries.length}/${Object.keys(PHOTO_SOURCES).length}`)
if (missing.length) console.log('no image found for:', missing.join(', '))
