import { Link } from 'react-router'
import { ROUTES } from '../data/site.js'
import { cn } from '../lib/cn.js'
import Logo from './Logo.jsx'

/** Slim sticky header: action on each side, the logo in the middle. */
function MinimalHeader({ leading, trailing, containerClassName }) {
  return (
    <header className="frosted sticky top-0 z-40 border-b border-line bg-warm-ivory/95 py-2">
      <div className={cn('app-container flex items-center justify-between', containerClassName)}>
        {leading}
        <Link to={ROUTES.home} aria-label="Silk Inn — home">
          <Logo className="h-12" />
        </Link>
        {trailing}
      </div>
    </header>
  )
}

export default MinimalHeader
