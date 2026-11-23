import { Link } from 'react-router'
import { dishPath } from '../../lib/dishes.js'
import SectionHeader from '../../shared/SectionHeader.jsx'
import DishTile from '../menu/DishTile.jsx'

/** "You May Also Like": a swipeable row of upright dish cards. */
function RelatedDishes({ dishes, menu }) {
  if (!dishes.length) return null

  return (
    <section className="flex flex-col gap-3">
      <SectionHeader
        title="You May Also Like"
        aside={
          <Link to={menu.route} className="mb-0.5 font-body text-label-md text-mist transition-colors hover:text-ember">
            View All
          </Link>
        }
      />
      <div className="no-scrollbar relative -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-1 md:mx-0 md:px-0">
        {dishes.map((dish) => (
          <DishTile
            key={dish.id}
            href={dishPath(dish.id)}
            name={dish.name}
            image={dish.image}
            placeholder={dish.placeholder}
            diets={dish.diets}
            price={dish.price}
            className="w-40 shrink-0 snap-start"
          />
        ))}
      </div>
    </section>
  )
}

export default RelatedDishes
