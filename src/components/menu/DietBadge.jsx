import { DIETS } from '../../data/diets.js'
import { cn } from '../../lib/cn.js'
import { Dot } from '../../UI/index.js'

const SIZES = {
  sm: { badge: 'bg-white', dot: 'sm' },
  lg: { badge: 'gap-1.5 bg-white/95 px-3 py-1 shadow-xs backdrop-blur-sm', dot: 'md' },
}

/** White "● VEG" / "● NON-VEG" badge used on photos. */
function DietBadge({ diet, size = 'sm' }) {
  const d = DIETS[diet]
  const s = SIZES[size]

  return (
    <span className={cn('badge border font-bold', s.badge, d.text, d.badgeBorder)}>
      <Dot size={s.dot} className={d.dot} />
      {d.label}
    </span>
  )
}

export default DietBadge
