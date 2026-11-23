import { DIETS } from '../../data/diets.js'
import { cn } from '../../lib/cn.js'
import { DietMark } from './DietDots.jsx'

const SIZES = {
  sm: 'px-2 py-1',
  lg: 'gap-1.5 px-3 py-1.5',
}

/** Glass "▣ VEG" / "▣ NON-VEG" badge used on photos. */
function DietBadge({ diet, size = 'sm' }) {
  return (
    <span className={cn('badge glass font-bold text-white', SIZES[size])}>
      <DietMark diet={diet} size="sm" />
      {DIETS[diet].label}
    </span>
  )
}

export default DietBadge
