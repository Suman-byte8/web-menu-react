import { Link } from 'react-router'
import { cn } from '../../lib/cn.js'
import { dietLabels, formatPriceRange } from '../../lib/menu.js'
import { Icon, IconOrb } from '../../UI/index.js'
import DietDots from './DietDots.jsx'

/**
 * Upright glass dish card for swipeable rows (Chef's Picks, related dishes):
 * glowing section icon, name, section and price with an orange arrow.
 * The whole card links to `href`.
 *   price  { min, max }    diets  ['veg', ...]
 */
function DishTile({ href, name, icon, category, diets, price, className }) {
  return (
    <Link
      to={href}
      className={cn(
        'pressable group relative block rounded-[22px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember',
        className,
      )}
    >
      <article className="glass-card relative flex h-full min-h-48 flex-col overflow-hidden rounded-[22px] p-3.5">
        <div className="flex items-start justify-between">
          <IconOrb icon={icon} size="sm" />
          <DietDots diets={diets} size="sm" className="mt-1" />
        </div>

        <h3 className="mt-3 line-clamp-2 font-headline text-title-md font-semibold text-white">
          {name}
          <span className="sr-only"> ({dietLabels(diets)})</span>
        </h3>
        {category && <p className="mt-0.5 truncate font-body text-label-sm text-smoke">{category}</p>}

        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          <span className="font-headline text-title-md font-bold whitespace-nowrap text-white tabular-nums">
            {formatPriceRange(price)}
          </span>
          <span className="fill-ember flex size-8 shrink-0 items-center justify-center rounded-[10px] transition-transform duration-300 ease-swift group-hover:scale-110">
            <Icon name="arrow_forward" className="text-[17px]" />
          </span>
        </div>
      </article>
    </Link>
  )
}

export default DishTile
