import { Link } from 'react-router'
import { BRAND, ROUTES } from '../data/site.js'
import { cn } from '../lib/cn.js'

/** Slim sticky header: action on each side, small centred wordmark. */
function MinimalHeader({ leading, trailing, containerClassName }) {
  return (
    <header className="frosted sticky top-0 z-40 border-b border-line bg-warm-ivory/95 py-2.5">
      <div className={cn('app-container flex items-center justify-between', containerClassName)}>
        {leading}
        <Link to={ROUTES.home} className="flex items-center gap-1.5">
          <span className="font-headline text-title-lg font-bold leading-none tracking-wider">{BRAND.name}</span>
          <span className="rounded border border-line bg-cream px-1.5 font-body text-label-sm uppercase tracking-widest">
            {BRAND.city}
          </span>
        </Link>
        {trailing}
      </div>
    </header>
  )
}

export default MinimalHeader
