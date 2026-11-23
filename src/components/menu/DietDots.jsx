import { DIETS } from '../../data/diets.js'
import { cn } from '../../lib/cn.js'

const SIZES = {
  sm: { box: 'size-3 rounded-[3px] border', dot: 'size-1.5' },
  md: { box: 'size-3.5 rounded-[4px] border-[1.5px]', dot: 'size-1.5' },
}

/** The Indian food mark: a coloured square outline with a dot inside. */
export function DietMark({ diet, size = 'md', className }) {
  const d = DIETS[diet]
  const s = SIZES[size]

  return (
    <span aria-hidden="true" className={cn('inline-flex shrink-0 items-center justify-center', s.box, d.border, className)}>
      <span className={cn('rounded-full', s.dot, d.dot)} />
    </span>
  )
}

/** One mark per diet a dish comes in (veg + non-veg shows two). */
function DietDots({ diets, size, className }) {
  return (
    <span className={cn('flex shrink-0 items-center gap-1', className)}>
      {diets.map((diet) => (
        <DietMark key={diet} diet={diet} size={size} />
      ))}
    </span>
  )
}

export default DietDots
