import { Link } from 'react-router'
import { dishPath, hasDetailPage } from '../../lib/dishes.js'
import FeaturedDishCard from './FeaturedDishCard.jsx'
import TextItemCard from './TextItemCard.jsx'

/**
 * Picks the card layout from `dish.variant`: signature dishes get the large
 * featured card, everything else a row card. Dishes link to their detail
 * page; drinks (`variant: 'text'`) don't have one. The link is the hover
 * `group` the cards use for their arrow animation.
 *   icon  the section's icon, shown on featured cards
 */
function DishCard({ dish, icon }) {
  const Card = dish.variant === 'featured' ? FeaturedDishCard : TextItemCard

  if (!hasDetailPage(dish)) return <Card dish={dish} icon={icon} />

  return (
    <Link
      to={dishPath(dish.id)}
      className="pressable group relative block h-full rounded-[22px] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
    >
      <Card dish={dish} icon={icon} linked />
    </Link>
  )
}

export default DishCard
