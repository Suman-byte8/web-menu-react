import { DIETS } from '../../data/diets.js'
import { cn } from '../../lib/cn.js'
import { Dot } from '../../UI/index.js'

/** One coloured dot per diet a dish comes in (veg + non-veg shows two). */
function DietDots({ diets, className }) {
  return (
    <span className={cn('flex shrink-0 items-center gap-0.5', className)}>
      {diets.map((diet) => (
        <Dot key={diet} className={DIETS[diet].dot} />
      ))}
    </span>
  )
}

export default DietDots
