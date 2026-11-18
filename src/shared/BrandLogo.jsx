import { BRAND } from '../data/site.js'
import { Icon } from '../UI/index.js'

function BrandLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex size-8 items-center justify-center rounded-full border border-line bg-cream shadow-xs">
        <Icon name="hotel_class" className="text-body-lg text-deep-charcoal" />
      </div>
      <div>
        <div className="flex items-center gap-1.5 font-headline text-headline-md-mobile font-bold leading-none tracking-wider text-deep-charcoal">
          {BRAND.name}
          <span className="rounded border border-line bg-cream px-1.5 py-0.5 font-body text-label-sm tracking-widest">
            {BRAND.city}
          </span>
        </div>
        <p className="text-eyebrow mt-0.5 font-medium text-muted-olive">{BRAND.tagline}</p>
      </div>
    </div>
  )
}

export default BrandLogo
