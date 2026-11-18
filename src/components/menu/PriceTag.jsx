import { cn } from '../../lib/cn.js'
import { formatPriceRange } from '../../lib/menu.js'

/**
 * Price text: a single amount or a range ("₹160 – 180").
 * `pill` wraps it in a white floating chip for photo cards.
 */
function PriceTag({ amount, max = amount, pill = false, className }) {
  const text = formatPriceRange({ min: amount, max })

  if (!pill) return <span className={cn('text-price whitespace-nowrap', className)}>{text}</span>

  return (
    <div className={cn('rounded-full border border-line bg-white px-3 py-1 shadow-xs', className)}>
      <span className="text-price whitespace-nowrap">{text}</span>
    </div>
  )
}

export default PriceTag
