import { Link } from 'react-router'
import { DIETS } from '../../data/diets.js'
import { dishPath } from '../../lib/dishes.js'
import { Dot, Icon } from '../../UI/index.js'
import DishThumb from '../menu/DishThumb.jsx'
import PriceTag from '../menu/PriceTag.jsx'

function RelatedDishCard({ dish }) {
  const d = DIETS[dish.diet]

  return (
    <Link
      to={dishPath(dish.id)}
      className="group flex items-center gap-3.5 rounded-2xl border border-line bg-white p-3 shadow-xs transition-all duration-200 ease-swift hover:border-vibrant-orange hover:shadow-md"
    >
      <DishThumb
        image={dish.image}
        alt={dish.name}
        placeholder={dish.placeholder}
        size="xs"
        className="transition-transform duration-200 ease-swift group-hover:scale-105"
      />

      <div className="min-w-0 flex-1">
        <div className="mb-0.5 flex items-center gap-1.5">
          <Dot className={d.dot} />
          <span className="truncate font-body text-label-sm font-medium text-muted-olive">
            <span className="sr-only">{d.label} · </span>
            {dish.category}
          </span>
        </div>
        <h3 className="truncate font-headline text-title-lg font-bold transition-colors group-hover:text-vibrant-orange">
          {dish.name}
        </h3>
        <PriceTag amount={dish.price} className="mt-0.5 block" />
      </div>

      <Icon
        name="chevron_right"
        className="shrink-0 text-body-lg transition-transform duration-200 group-hover:translate-x-1 group-hover:text-vibrant-orange"
      />
    </Link>
  )
}

export default RelatedDishCard
