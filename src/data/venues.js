import { photo } from '../lib/photos.js'
import { ROUTES } from './site.js'

/**
 * Venue cards on the home page.
 * `accent` picks a colour theme defined in components/home/VenueCard.jsx.
 */
export const VENUES = [
  {
    id: 'restaurant',
    href: ROUTES.restaurant,
    accent: 'orange',
    badge: { icon: 'dining', label: 'Cocoon' },
    title: 'Cocoon Restaurant',
    description: 'Breakfast, Continental, Tandoor, Chinese, Indian & Bengali',
    detail: 'Breakfast, lunch & dinner',
    cta: 'View Menu',
    image: photo('butter-chicken'),
    alt: 'Chicken butter masala',
  },
  {
    id: 'bar',
    href: ROUTES.bar,
    accent: 'olive',
    badge: { icon: 'local_bar', label: 'Bottoms Up' },
    title: 'Bar & Spirits',
    description: 'Single malts, cocktails, wine & beer, plus the kitchen menu',
    detail: 'Hard & soft beverages',
    cta: 'View Bar Menu',
    image: photo('old-fashioned'),
    alt: 'Whisky cocktail',
  },
  {
    id: 'rooms',
    href: ROUTES.rooms,
    accent: 'gold',
    badge: { icon: 'room_service', label: 'In-Room Dining' },
    title: 'Room Service',
    description: 'The Cocoon menu served to your room, with Full & Half portions',
    detail: 'Breakfast, lunch & dinner',
    cta: 'View Room Menu',
    image: photo('room-service'),
    alt: 'Room service tray',
  },
]
