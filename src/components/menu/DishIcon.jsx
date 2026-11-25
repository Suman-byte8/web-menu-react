import { cn } from '../../lib/cn.js'
import { Icon } from '../../UI/index.js'

const SIZES = {
  sm: 'size-10 rounded-xl text-[20px]',
  md: 'size-12 rounded-2xl text-[24px]',
}

/** Small amber-tinted glass tile with a section icon, used where a dish thumbnail would go. */
function DishIcon({ icon = 'restaurant', size = 'md', className }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'flex shrink-0 items-center justify-center border border-ember/25 bg-ember/12 text-honey shadow-[inset_0_0_14px_rgb(255_138_0/0.18)]',
        SIZES[size],
        className,
      )}
    >
      <Icon name={icon} filled />
    </span>
  )
}

export default DishIcon
