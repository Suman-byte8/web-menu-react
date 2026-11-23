import { Link, useLocation, useNavigate } from 'react-router'
import { ROUTES } from '../data/site.js'
import { Icon } from '../UI/index.js'

/**
 * Round back button.
 *   default        links to `to`
 *   history=true   goes back one step, or to `to` when the page was opened
 *                  directly (e.g. from a shared link or QR code)
 */
function BackButton({ to = ROUTES.home, history = false, label = 'Back to home' }) {
  const navigate = useNavigate()
  const location = useLocation()

  if (!history) {
    return (
      <Link to={to} aria-label={label} className="icon-button">
        <Icon name="arrow_back" className="text-[20px]" />
      </Link>
    )
  }

  // React Router gives the first page of a session the key "default".
  const canGoBack = location.key !== 'default'

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => (canGoBack ? navigate(-1) : navigate(to))}
      className="icon-button"
    >
      <Icon name="arrow_back" className="text-[20px]" />
    </button>
  )
}

export default BackButton
