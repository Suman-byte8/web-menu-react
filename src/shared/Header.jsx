import { Link } from 'react-router'
import { ROUTES } from '../data/site.js'
import Logo from './Logo.jsx'

/**
 * Top row of a page: an action on each side, floating on the page.
 *   leading   element on the left (back button); the logo when omitted
 *   center    element in the middle (e.g. the logo when there is a back button)
 *   trailing  element on the right (location, favourite)
 */
function Header({ leading, center, trailing }) {
  return (
    <header className="app-container flex items-center justify-between gap-3 pt-[max(env(safe-area-inset-top),0.875rem)] pb-1">
      {leading ?? (
        <Link to={ROUTES.home} aria-label="Silk Inn — home">
          <Logo className="h-12" />
        </Link>
      )}
      {center}
      {trailing}
    </header>
  )
}

export default Header
