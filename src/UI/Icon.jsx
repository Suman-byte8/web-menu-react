import { cn } from '../lib/cn.js'

const FILLED = { fontVariationSettings: "'FILL' 1" }

/** Material Symbols icon. `name` is the ligature, e.g. "restaurant". */
function Icon({ name, filled = false, className }) {
  return (
    <span aria-hidden="true" className={cn('material-icon', className)} style={filled ? FILLED : undefined}>
      {name}
    </span>
  )
}

export default Icon
