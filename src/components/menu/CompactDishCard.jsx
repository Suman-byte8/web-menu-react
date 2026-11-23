import { itemDiets, priceRange } from '../../lib/menu.js'
import DishTile from './DishTile.jsx'

/** A menu dish as an upright glass card (DishCard supplies the link). */
function CompactDishCard({ dish }) {
  const { name, description, image, placeholder, highlight, options } = dish

  return (
    <DishTile
      name={name}
      image={image}
      placeholder={placeholder}
      diets={itemDiets(dish)}
      price={priceRange(dish)}
      description={description}
      options={options}
      highlight={highlight}
    />
  )
}

export default CompactDishCard
