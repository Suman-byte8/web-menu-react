import { Link } from 'react-router'
import { dishPath, hasDetailPage } from '../../lib/dishes.js'
import CompactDishCard from './CompactDishCard.jsx'
import FeaturedDishCard from './FeaturedDishCard.jsx'
import TextItemCard from './TextItemCard.jsx'

const CARDS = {
  featured: FeaturedDishCard,
  compact: CompactDishCard,
  text: TextItemCard,
}

/**
 * Picks the card layout from `dish.variant`. Dishes link to their detail
 * page; drinks (text cards) don't have one.
 */
function DishCard({ dish }) {
  const Card = CARDS[dish.variant] ?? CompactDishCard

  if (!hasDetailPage(dish)) return <Card dish={dish} />

  return (
    <Link
      to={dishPath(dish.id)}
      className="block rounded-2xl transition-shadow duration-200 ease-swift hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-vibrant-orange"
    >
      <Card dish={dish} />
    </Link>
  )
}

export default DishCard
