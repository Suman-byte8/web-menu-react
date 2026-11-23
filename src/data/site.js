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
  greeting: 'Welcome to SILK INN',
  // Shown as two lines: "Good Food," / "Good Moments." with the last word in orange.
  title: 'Good Food,',
  titleLead: 'Good',
  titleAccent: 'Moments.',
  searchPlaceholder: 'Search dishes & drinks',
  // "Chef's Special - The king of kebabs" is how the menu describes it.
  feature: {
    label: "Chef's Special",
    title: 'Tandoori Murgh',
    titleAccent: 'King of Kebabs',
    dishId: 'tandoori-murgh',
    image: photo('tandoori-chicken'),
    alt: 'Tandoori Murgh',
    href: '/dish/tandoori-murgh',
    cta: 'View Dish',
  },
}

/**
 * Category tiles on the home page: jump straight to a section of the
 * restaurant menu (`#cat-<section id>`, see restaurantMenu.js).
 */
export const QUICK_LINKS = [
  { label: 'Breakfast', icon: 'egg_alt', href: `${ROUTES.restaurant}#cat-breakfast` },
  { label: 'Tandoor', icon: 'outdoor_grill', href: `${ROUTES.restaurant}#cat-appetizers` },
  { label: 'Chinese', icon: 'ramen_dining', href: `${ROUTES.restaurant}#cat-chinese` },
  { label: 'Biryani', icon: 'rice_bowl', href: `${ROUTES.restaurant}#cat-rice` },
  { label: 'Bengali', icon: 'set_meal', href: `${ROUTES.restaurant}#cat-bengali` },
  { label: 'Desserts', icon: 'icecream', href: `${ROUTES.restaurant}#cat-desserts` },
]

/** "Chef's Picks" row on the home page: restaurant dish ids, in order. */
export const CHEF_PICKS = [
  'tandoori-murgh',
  'biryani',
  'chicken-butter-masala',
  'grilled-chicken-steak',
  'grilled-fish-steak',
  'spaghetti-carbonara',
  'paneer-achari-tikka',
  'elish',
]

/** Bottom navigation dock (see shared/BottomNav.jsx). */
export const NAV_ITEMS = [
  { label: 'Home', icon: 'home', href: ROUTES.home },
  { label: 'Restaurant', icon: 'restaurant', href: ROUTES.restaurant },
  { label: 'Bar', icon: 'local_bar', href: ROUTES.bar },
  { label: 'Rooms', icon: 'room_service', href: ROUTES.rooms },
]
