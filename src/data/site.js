export const ROUTES = {
  home: '/',
  restaurant: '/restaurant',
  bar: '/bar',
  rooms: '/rooms',
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
  eyebrow: 'Digital Menu Experience',
  title: 'Discover Our',
  titleAccent: 'Culinary World',
  intro:
    'Welcome to SILK INN, Malda. Explore artisanal Continental cuisine, Italian pastas, gourmet entrées, and curated spirits crafted for hotel guests.',
  feature: {
    label: "Chef's Feature",
    title: 'Continental Plated Delights & Italian Classics',
    image: '/images/hero_culinary_spread.jpg',
    alt: 'SILK INN Gastronomic Spread',
  },
}

/** `accent` colours the active tab's icon (see shared/BottomNav.jsx). */
export const NAV_ITEMS = [
  { label: 'Home', icon: 'home', href: ROUTES.home, accent: 'orange' },
  { label: 'Restaurant', icon: 'restaurant', href: ROUTES.restaurant, accent: 'orange' },
  { label: 'Bar', icon: 'local_bar', href: ROUTES.bar, accent: 'olive' },
  { label: 'Rooms', icon: 'room_service', href: ROUTES.rooms, accent: 'gold' },
]
