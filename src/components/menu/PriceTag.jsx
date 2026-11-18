import { cn } from '../../lib/cn.js'
import { formatPrice } from '../../lib/menu.js'

/** Price text. `pill` wraps it in a white floating chip for photo cards. */
function PriceTag({ amount, pill = false, className }) {
  const price = <span className="text-price">{formatPrice(amount)}</span>

  if (!pill) return price

  return (
    <div className={cn('rounded-full border border-line bg-white px-3 py-1 shadow-xs', className)}>
      {price}
    </div>
  )
}

export default PriceTag
