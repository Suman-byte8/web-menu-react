import { Link } from 'react-router'
import { formatPrice } from '../../lib/menu.js'
import { Icon } from '../../UI/index.js'

/**
 * Floating glass bar at the bottom of a dish page: the price of the chosen
 * version, and an orange button back to the full menu. (Orders are placed
 * with the staff, so there is no cart.)
 */
function DishActionBar({ dish, choice }) {
  const option = dish.options.length > 1 ? dish.options[choice] : null

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]">
      <div className="glass-bar pointer-events-auto stagger mx-auto flex max-w-md animate-enter items-center gap-3 rounded-[24px] p-2 pl-4" style={{ '--i': 3 }}>
        <div className="min-w-0 flex-1">
          <span className="block truncate font-body text-label-sm text-smoke">
            {option ? option.label : 'Ask our staff to order'}
          </span>
          <span className="font-headline text-headline-md-mobile font-extrabold text-white tabular-nums">
            {formatPrice(option ? option.price : dish.price.min)}
          </span>
        </div>
        <Link
          to={dish.menu.route}
          className="fill-ember shine pressable flex h-12 shrink-0 items-center gap-2 rounded-[18px] px-5 font-body text-label-md font-bold"
        >
          {dish.menu.label} Menu
          <Icon name="arrow_forward" className="text-[18px]" />
        </Link>
      </div>
    </div>
  )
}

export default DishActionBar
