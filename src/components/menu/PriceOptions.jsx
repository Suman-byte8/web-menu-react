import { cn } from '../../lib/cn.js'
import { formatPrice } from '../../lib/menu.js'
import { DietMark } from './DietDots.jsx'

const SIZES = {
  sm: 'gap-1 rounded-lg px-2 py-0.5 text-label-sm',
  md: 'gap-2 rounded-2xl px-3.5 py-2.5 text-label-md',
}

/**
 * Chips for a dish's versions: "▣ Veg ₹160", "Grilled ₹165".
 * Hidden when there is only one version to show.
 */
function PriceOptions({ options, size = 'sm', className }) {
  if (!options || options.length < 2) return null

  return (
    <ul className={cn('flex flex-wrap gap-1.5', size === 'md' && 'gap-2', className)}>
      {options.map((option) => (
        <li
          key={option.label}
          className={cn(
            'inline-flex items-center border border-white/8 bg-white/5 font-body font-medium text-mist',
            SIZES[size],
          )}
        >
          {option.diet && <DietMark diet={option.diet} size="sm" />}
          <span>{option.label}</span>
          <span className="font-bold text-white tabular-nums">{formatPrice(option.price)}</span>
        </li>
      ))}
    </ul>
  )
}

export default PriceOptions
