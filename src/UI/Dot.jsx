import { cn } from '../lib/cn.js'

const SIZES = {
  sm: 'size-1.5',
  md: 'size-2',
}

/** Small round colour marker. Pass a bg-* class for the colour. */
function Dot({ size = 'md', className }) {
  return <span aria-hidden="true" className={cn('shrink-0 rounded-full', SIZES[size], className)} />
}

export default Dot
