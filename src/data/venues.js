import { ROUTES } from './site.js'

/**
 * `accent` picks a colour theme defined in components/home/VenueCard.jsx.
 */
export const VENUES = [
  {
    id: 'restaurant',
    href: ROUTES.restaurant,
    accent: 'orange',
    badge: { icon: 'dining', label: 'Restaurant' },
    title: 'Fine Dining & Bistro',
    description: 'Explore our culinary selection — Salads, Starters, Pastas & Mains',
    mood: 'Warm Orange & Ivory',
    cta: 'View Menu',
    image: '/images/grilled-chicken-steak.webp',
    alt: 'Restaurant Culinary Selection',
  },
  {
    id: 'bar',
    href: ROUTES.bar,
    accent: 'olive',
    badge: { icon: 'local_bar', label: 'Bar Lounge' },
    title: 'Bar & Spirits',
    description: 'Explore our bar selection — Cocktails, Craft Beers & Mocktails',
    mood: 'Amber & Olive Lounge',
    cta: 'View Bar Menu',
    image: '/images/bar_cocktail_amber.jpg',
    alt: 'Bar Beverage Selection',
  },
  {
    id: 'rooms',
    href: ROUTES.rooms,
    accent: 'gold',
    badge: { icon: 'room_service', label: 'In-Room Dining' },
    title: 'Room Service',
    description: 'Enjoy dining in comfort — Curated suite service available 24/7',
    mood: 'Cream & Soft Gold',
    cta: 'View Room Menu',
    image: '/images/rooms_dining_comfort.jpg',
    alt: 'Room Service Dining in Comfort',
  },
]
