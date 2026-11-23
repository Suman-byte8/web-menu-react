import { cn } from '../../lib/cn.js'
import { Icon } from '../../UI/index.js'

const TONES = {
  accent: 'fill-ember',
  glass: 'glass text-white',
  gold: 'glass text-gold',
}

const SIZES = {
  sm: 'px-2 py-1',
  lg: 'px-3 py-1.5',
}

/** Highlight badge on photos: "Chef's Special", "Signature". */
function LabelBadge({ tone = 'glass', size = 'sm', children }) {
  return (
    <span className={cn('badge font-bold', TONES[tone], SIZES[size])}>
      {tone === 'accent' && <Icon name="local_fire_department" filled className="text-[13px]" />}
      {children}
    </span>
  )
}

export default LabelBadge
