import { Link } from 'react-router'
import { CHEF_PICKS, ROUTES } from '../../data/site.js'
import { dishPath, getDish } from '../../lib/dishes.js'
import SectionHeader from '../../shared/SectionHeader.jsx'
import DishTile from '../menu/DishTile.jsx'

const PICKS = CHEF_PICKS.map(getDish).filter(Boolean)

/** "Chef's Picks": a swipeable row of upright dish cards. */
function ChefPicks() {
  if (!PICKS.length) return null

  return (
    <section className="flex flex-col gap-3">
      <SectionHeader
        title="Chef's Picks"
        aside={
          <Link to={ROUTES.restaurant} className="mb-0.5 font-body text-label-md text-mist transition-colors hover:text-ember">
            View All
          </Link>
        }
      />
      <div className="no-scrollbar relative -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-1 md:mx-0 md:px-0">
        {PICKS.map((dish) => (
          <DishTile
            key={dish.id}
            href={dishPath(dish.id)}
            name={dish.name}
            icon={dish.icon}
            category={dish.category}
            diets={dish.diets}
            price={dish.price}
            className="w-40 shrink-0 snap-start"
          />
        ))}
      </div>
    </section>
  )
}

export default ChefPicks
