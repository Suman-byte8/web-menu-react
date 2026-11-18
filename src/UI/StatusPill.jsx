import { cn } from '../lib/cn.js'
import Dot from './Dot.jsx'
import Pill from './Pill.jsx'

/** Cream pill with a small coloured status dot, e.g. "● 24/7 Available". */
function StatusPill({ dotClassName, className, children }) {
  return (
    <Pill variant="cream" className={cn('gap-1 px-2.5', className)}>
      <Dot size="sm" className={dotClassName} />
      <span>{children}</span>
    </Pill>
  )
}

export default StatusPill
