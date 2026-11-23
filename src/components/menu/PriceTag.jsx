import { cn } from '../../lib/cn.js'
import { formatPriceRange } from '../../lib/menu.js'

/**
 * Orange price text: a single amount or a range ("₹160 – 180").
 *   large  bigger figures, for photo cards and the dish page
 *   pill   wrapped in a floating glass chip
 */
function PriceTag({ amount, max = amount, large = false, pill = false, className }) {
  const text = (
    <span
      className={cn(
        'whitespace-nowrap',
        large ? 'font-headline text-headline-md-mobile font-extrabold text-ember tabular-nums' : 'text-price',
        !pill && className,
      )}
    >
      {formatPriceRange({ min: amount, max })}
    </span>
  )

  if (!pill) return text

  return <div className={cn('glass rounded-full px-3 py-1', className)}>{text}</div>
}

export default PriceTag
