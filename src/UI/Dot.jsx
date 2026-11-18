import { cn } from '../lib/cn.js'

/** Small round colour marker. Pass a bg-* class for the colour. */
function Dot({ className }) {
  return <span aria-hidden="true" className={cn('size-2 shrink-0 rounded-full', className)} />
}

export default Dot
