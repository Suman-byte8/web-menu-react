import { cn } from '../lib/cn.js'
import Icon from './Icon.jsx'

const SIZES = {
  sm: { box: 'size-12', icon: 'text-[24px]', glow: 'blur-lg' },
  md: { box: 'size-24', icon: 'text-[44px]', glow: 'blur-2xl' },
  lg: { box: 'size-36', icon: 'text-[64px]', glow: 'blur-3xl' },
  xl: { box: 'size-44', icon: 'text-[80px]', glow: 'blur-3xl' },
}

/**
 * Glowing glass disc with an icon: stands in for a dish photo (the menu has
 * no item photos). Decorative, so hidden from screen readers.
 */
function IconOrb({ icon = 'restaurant', size = 'md', className }) {
  const s = SIZES[size]

  return (
    <span aria-hidden="true" className={cn('relative flex shrink-0 items-center justify-center', s.box, className)}>
      <span className={cn('absolute inset-0 rounded-full bg-ember/35', s.glow)} />
      <span className="glass absolute inset-0 rounded-full" />
      <span className="absolute inset-[16%] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgb(255_179_71/0.45),rgb(255_138_0/0.12)_60%,transparent_75%)]" />
      <Icon name={icon} filled className={cn('relative text-honey drop-shadow-[0_0_12px_rgb(255_138_0/0.7)]', s.icon)} />
    </span>
  )
}

export default IconOrb
