import { BRAND } from '../data/site.js'
import { cn } from '../lib/cn.js'

/** "SILK INN [BADGE]" wordmark with a small tagline underneath. */
function BrandTitle({ badge, badgeClassName = 'text-deep-charcoal', tagline }) {
  return (
    <div>
      <div className="flex items-center gap-1.5 font-headline text-headline-md-mobile font-bold leading-none tracking-wider text-deep-charcoal">
        {BRAND.name}
        {badge && (
          <span
            className={cn(
              'rounded border border-line bg-cream px-1.5 py-0.5 font-body text-label-sm uppercase tracking-widest',
              badgeClassName,
            )}
          >
            {badge}
          </span>
        )}
      </div>
      {tagline && <p className="text-eyebrow mt-0.5 font-medium text-muted-olive">{tagline}</p>}
    </div>
  )
}

export default BrandTitle
