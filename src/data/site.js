import { photo } from '../lib/photos.js'

export const ROUTES = {
  home: '/',
  restaurant: '/restaurant',
  bar: '/bar',
  rooms: '/rooms',
  dish: '/dish/:dishId',
}

export const BRAND = {
  name: 'SILK INN',
  city: 'MALDA',
  tagline: 'Boutique Hotel & Dining',
  location: 'English Bazar, Malda',
  quote: 'Crafted with Passion & Bengal Warmth',
  note: 'Please notify your captain of any dietary preferences.',
}

export const HERO = {
  pageTitle: 'SILK INN Malda — Discover Our Menu',
  eyebrow: 'Digital Menu',
  title: 'Discover Our',
  titleAccent: 'Culinary World',
  intro:
    'Welcome to SILK INN, Malda. Browse the Cocoon restaurant, the Bottoms Up bar and in-room dining — every dish and price in one place.',
  // "Chef's Special - The king of kebabs" is how the menu describes it.
  feature: {
    label: "Chef's Special",
    title: 'Tandoori Murgh — The King of Kebabs',
    image: photo('tandoori-chicken'),
    alt: 'Tandoori Murgh',
    href: '/dish/tandoori-murgh',
  },
}

/** `accent` colours the active tab's icon (see shared/BottomNav.jsx). */
export const NAV_ITEMS = [
  { label: 'Home', icon: 'home', href: ROUTES.home, accent: 'orange' },
  { label: 'Restaurant', icon: 'restaurant', href: ROUTES.restaurant, accent: 'orange' },
  { label: 'Bar', icon: 'local_bar', href: ROUTES.bar, accent: 'olive' },
  { label: 'Rooms', icon: 'room_service', href: ROUTES.rooms, accent: 'gold' },
]
