import CompactDishCard from './CompactDishCard.jsx'
import FeaturedDishCard from './FeaturedDishCard.jsx'
import TextItemCard from './TextItemCard.jsx'

const CARDS = {
  featured: FeaturedDishCard,
  compact: CompactDishCard,
  text: TextItemCard,
}

/** Picks the card layout from `dish.variant`. */
function DishCard({ dish }) {
  const Card = CARDS[dish.variant] ?? CompactDishCard
  return <Card dish={dish} />
}

export default DishCard
