import { cn } from '../lib/cn.js'
import Icon from './Icon.jsx'

const VARIANTS = {
  glass: 'glass text-white',
  soft: 'border border-white/10 bg-white/6 text-mist',
  accent: 'border border-ember/30 bg-ember/12 text-honey',
}

/** Rounded chip with an optional leading icon. Extra props go to the <span>. */
function Pill({ variant = 'soft', icon, iconClassName, className, children, ...props }) {
  return (
    <span className={cn('pill', VARIANTS[variant], className)} {...props}>
      {icon && <Icon name={icon} className={cn('text-body-sm', iconClassName)} />}
      {children}
    </span>
  )
}

export default Pill
