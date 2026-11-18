import { DIETS } from '../../data/diets.js'
import { cn } from '../../lib/cn.js'
import { formatPrice } from '../../lib/menu.js'
import { Dot } from '../../UI/index.js'

const SIZES = {
  sm: 'tag gap-1 text-label-sm',
  md: 'gap-1.5 rounded-xl border border-line bg-cream px-3 py-1.5 text-label-md',
}

/**
 * Chips for a dish's versions: "● Veg ₹160", "Grilled ₹165".
 * Hidden when there is only one version to show.
 */
function PriceOptions({ options, size = 'sm', className }) {
  if (!options || options.length < 2) return null

  return (
    <ul className={cn('flex flex-wrap gap-1.5', className)}>
      {options.map((option) => {
        const diet = DIETS[option.diet]

        return (
          <li
            key={option.label}
            className={cn('inline-flex items-center font-body font-medium text-muted-olive', SIZES[size])}
          >
            {diet && <Dot size={size === 'md' ? 'md' : 'sm'} className={diet.dot} />}
            <span>{option.label}</span>
            <span className="font-semibold text-deep-charcoal tabular-nums">{formatPrice(option.price)}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default PriceOptions
