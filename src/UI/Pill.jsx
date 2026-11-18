import { cn } from '../lib/cn.js'
import Icon from './Icon.jsx'

const VARIANTS = {
  white: 'bg-white text-deep-charcoal',
  cream: 'bg-cream text-deep-charcoal',
  dark: 'bg-deep-charcoal text-white',
}

/** Rounded chip with an optional leading icon. */
function Pill({ variant = 'white', icon, iconClassName, className, children }) {
  return (
    <span className={cn('pill', VARIANTS[variant], className)}>
      {icon && <Icon name={icon} className={cn('text-body-sm', iconClassName)} />}
      {children}
    </span>
  )
}

export default Pill
