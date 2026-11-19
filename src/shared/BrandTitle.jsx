import { Link } from 'react-router'
import { ROUTES } from '../data/site.js'
import { cn } from '../lib/cn.js'
import Logo from './Logo.jsx'

/** Animated Silk Inn logo (links home) with a badge and tagline beside it. */
function BrandTitle({ badge, badgeClassName = 'text-deep-charcoal', tagline, logoClassName = 'h-12' }) {
  return (
    <div className="flex min-w-0 items-center gap-2.5">
      <Link to={ROUTES.home} aria-label="Silk Inn — home" className="shrink-0">
        <Logo className={logoClassName} />
      </Link>
      {(badge || tagline) && (
        <div className="min-w-0">
          {badge && (
            <span
              className={cn(
                'inline-block rounded border border-line bg-cream px-1.5 py-0.5 font-body text-label-sm uppercase tracking-widest',
                badgeClassName,
              )}
            >
              {badge}
            </span>
          )}
          {tagline && <p className="text-eyebrow mt-1 truncate font-medium text-muted-olive">{tagline}</p>}
        </div>
      )}
    </div>
  )
}

export default BrandTitle
