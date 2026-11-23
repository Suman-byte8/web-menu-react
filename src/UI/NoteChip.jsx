import { cn } from '../lib/cn.js'
import Icon from './Icon.jsx'

/**
 * Amber-tinted chip for things guests must notice: serving times, bottle
 * and glass sizes, portion counts, "MRP + EC". `size="sm"` for inside cards.
 */
function NoteChip({ icon = 'info', size = 'md', className, children }) {
  return (
    <span
      className={cn(
        'inline-flex w-max max-w-full items-center rounded-full border border-ember/25 bg-ember/10 font-body font-semibold text-honey',
        size === 'sm' ? 'gap-1 px-2 py-0.5 text-label-sm' : 'gap-1.5 px-2.5 py-1 text-label-md',
        className,
      )}
    >
      <Icon
        name={icon}
        filled
        className={cn('shrink-0 text-ember', size === 'sm' ? 'text-[13px]' : 'text-body-lg')}
      />
      <span className="min-w-0">{children}</span>
    </span>
  )
}

export default NoteChip
