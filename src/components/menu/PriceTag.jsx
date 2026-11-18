import { cn } from '../../lib/cn.js'
import { formatPrice } from '../../lib/menu.js'

/** Price text. `pill` wraps it in a white floating chip for photo cards. */
function PriceTag({ amount, pill = false, className }) {
  if (!pill) return <span className={cn('text-price', className)}>{formatPrice(amount)}</span>

  return (
    <div className={cn('rounded-full border border-line bg-white px-3 py-1 shadow-xs', className)}>
      <span className="text-price">{formatPrice(amount)}</span>
    </div>
  )
}

export default PriceTag
