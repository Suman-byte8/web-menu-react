import { cn } from '../lib/cn.js'

/** Material Symbols icon. `name` is the ligature, e.g. "restaurant". */
function Icon({ name, className }) {
  return (
    <span aria-hidden="true" className={cn('material-icon', className)}>
      {name}
    </span>
  )
}

export default Icon
