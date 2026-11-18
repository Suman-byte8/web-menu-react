import { Link } from 'react-router'
import { Icon } from '../../UI/index.js'
import RelatedDishCard from './RelatedDishCard.jsx'

/** "You May Also Like" grid with a link back to the full menu. */
function RelatedDishes({ dishes, menu }) {
  if (!dishes.length) return null

  return (
    <section className="flex flex-col gap-4 border-t border-line pt-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-eyebrow block font-semibold text-muted-olive">Chef&apos;s Pairings</span>
          <h2 className="heading-section font-bold">You May Also Like</h2>
        </div>
        <Link
          to={menu.route}
          className="flex items-center gap-0.5 font-body text-label-sm transition-colors duration-200 hover:text-vibrant-orange"
        >
          <span>Full Menu</span>
          <Icon name="arrow_forward" className="text-body-sm" />
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish) => (
          <RelatedDishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </section>
  )
}

export default RelatedDishes
