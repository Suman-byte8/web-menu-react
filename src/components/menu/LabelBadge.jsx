import { cn } from '../../lib/cn.js'

const TONES = {
  accent: 'bg-vibrant-orange text-white',
  cream: 'border border-line bg-cream text-deep-charcoal',
  olive: 'bg-muted-olive text-white',
}

const SIZES = {
  sm: null,
  lg: 'px-2.5 py-1 shadow-xs',
}

/** Highlight badge on photos: "Popular", "Signature", "Malda Special". */
function LabelBadge({ tone = 'cream', size = 'sm', children }) {
  return <span className={cn('badge font-semibold', TONES[tone], SIZES[size])}>{children}</span>
}

export default LabelBadge
