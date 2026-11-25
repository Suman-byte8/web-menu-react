import { cn } from '../lib/cn.js'
import { ICON_NAMES } from '../lib/icons.js'

const FILLED = { fontVariationSettings: "'FILL' 1" }
const KNOWN = import.meta.env?.DEV ? new Set(ICON_NAMES) : null

/**
 * Material Symbols icon. `name` is the ligature, e.g. "restaurant".
 * Only icons listed in lib/icons.js are downloaded.
 */
function Icon({ name, filled = false, className }) {
  if (KNOWN && name && !KNOWN.has(name)) {
    console.warn(`Icon "${name}" is not in src/lib/icons.js, so it won't be downloaded.`)
  }

  return (
    <span aria-hidden="true" className={cn('material-icon', className)} style={filled ? FILLED : undefined}>
      {name}
    </span>
  )
}

export default Icon
