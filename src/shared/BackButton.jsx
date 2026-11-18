import { Link } from 'react-router'
import { ROUTES } from '../data/site.js'
import { Icon } from '../UI/index.js'

function BackButton({ to = ROUTES.home, label = 'Back to home' }) {
  return (
    <Link
      to={to}
      aria-label={label}
      className="flex size-9 items-center justify-center rounded-full border border-line bg-cream text-deep-charcoal transition-transform duration-200 ease-swift hover:bg-cream/80 active:scale-90"
    >
      <Icon name="arrow_back" className="text-body-lg" />
    </Link>
  )
}

export default BackButton
