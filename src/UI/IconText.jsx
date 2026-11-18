import { cn } from '../lib/cn.js'
import Icon from './Icon.jsx'

/** Inline icon followed by a label. */
function IconText({ icon, iconClassName, className, children }) {
  return (
    <span className={cn('flex items-center gap-1', className)}>
      <Icon name={icon} className={iconClassName} />
      {children}
    </span>
  )
}

export default IconText
