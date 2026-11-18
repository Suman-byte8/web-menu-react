import { Icon } from '../UI/index.js'

/** Round hotel-class emblem shown at the start of the home header. */
function BrandEmblem() {
  return (
    <div className="flex size-8 items-center justify-center rounded-full border border-line bg-cream shadow-xs">
      <Icon name="hotel_class" className="text-body-lg text-deep-charcoal" />
    </div>
  )
}

export default BrandEmblem
