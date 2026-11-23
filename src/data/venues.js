import { photo } from '../lib/photos.js'
import { ROUTES } from './site.js'

/**
 * Venue cards on the home page. The first card is shown large.
 * `accent` picks a colour defined in components/home/VenueCard.jsx.
 */
export const VENUES = [
  {
    id: 'restaurant',
    href: ROUTES.restaurant,
    accent: 'ember',
    badge: { icon: 'dining', label: 'Cocoon' },
    title: 'Cocoon Restaurant',
    description: 'Breakfast, Continental, Tandoor, Chinese, Indian & Bengali',
    detail: 'Breakfast, lunch & dinner',
    image: photo('butter-chicken'),
    alt: 'Chicken butter masala',
  },
  {
    id: 'bar',
    href: ROUTES.bar,
    accent: 'gold',
    badge: { icon: 'local_bar', label: 'Bottoms Up' },
    title: 'Bar & Spirits',
    description: 'Single malts, cocktails, wine & beer, plus the kitchen menu',
    detail: 'Hard & soft beverages',
    image: photo('old-fashioned'),
    alt: 'Whisky cocktail',
  },
  {
    id: 'rooms',
    href: ROUTES.rooms,
    accent: 'honey',
    badge: { icon: 'room_service', label: 'In-Room' },
    title: 'Room Service',
    description: 'The Cocoon menu served to your room, with Full & Half portions',
    detail: 'Breakfast, lunch & dinner',
    image: photo('room-service'),
    alt: 'Room service tray',
  },
]
