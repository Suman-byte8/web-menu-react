import CompactDishCard from './CompactDishCard.jsx'
import FeaturedDishCard from './FeaturedDishCard.jsx'

/** Picks the card layout from `dish.variant`. */
function DishCard({ dish }) {
  return dish.variant === 'featured' ? <FeaturedDishCard dish={dish} /> : <CompactDishCard dish={dish} />
}

export default DishCard
