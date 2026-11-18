import { cn } from '../../lib/cn.js'

const TONES = {
  accent: 'bg-vibrant-orange text-white',
  cream: 'border border-line bg-cream text-deep-charcoal',
  olive: 'bg-muted-olive text-white',
}

/** Highlight badge on photo cards: "Popular", "Signature", "Malda Special". */
function LabelBadge({ tone = 'cream', children }) {
  return <span className={cn('badge font-semibold', TONES[tone])}>{children}</span>
}

export default LabelBadge
