import { DIETS } from '../../data/diets.js'
import { cn } from '../../lib/cn.js'
import { Dot } from '../../UI/index.js'

/** White "● VEG" / "● NON-VEG" badge used on photo cards. */
function DietBadge({ diet }) {
  const d = DIETS[diet]

  return (
    <span className={cn('badge border bg-white font-bold', d.text, d.badgeBorder)}>
      <Dot size="sm" className={d.dot} />
      {d.label}
    </span>
  )
}

export default DietBadge
