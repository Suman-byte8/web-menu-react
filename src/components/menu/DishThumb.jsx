import { useState } from 'react'
import { cn } from '../../lib/cn.js'
import { Icon } from '../../UI/index.js'

const SIZES = {
  xs: 'size-16 rounded-xl',
  sm: 'size-[88px] rounded-2xl',
  md: 'size-24 rounded-2xl',
  fill: 'aspect-[5/4] w-full rounded-[16px]',
}

const ICON_TONES = {
  gold: 'text-gold',
  orange: 'text-ember',
  red: 'text-nonveg',
}

/**
 * Dish thumbnail: square 96px (md), 88px (sm) or 64px (xs), or `fill` to
 * span its card at 5:4. Falls back to a
 * dark icon tile when the dish has no photo, or when the photo fails to load.
 * Zooms gently when its card (a `group`) is hovered.
 */
function DishThumb({ image, alt, placeholder, size = 'md', className }) {
  const [failed, setFailed] = useState(false)

  if (image && !failed) {
    return (
      <div className={cn('shrink-0 overflow-hidden bg-graphite shadow-lg shadow-black/40', SIZES[size], className)}>
        <img
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="photo-grade size-full object-cover transition-transform duration-500 ease-relaxed group-hover:scale-110"
        />
      </div>
    )
  }

  const { icon = 'restaurant', label, tone = 'orange' } = placeholder ?? {}
  const showLabel = label && size !== 'xs'

  return (
    <div
      className={cn(
        'flex shrink-0 flex-col items-center justify-center border border-white/6 bg-[radial-gradient(circle_at_30%_20%,rgb(255_138_0/0.16),transparent_70%)] bg-graphite p-2 text-center',
        SIZES[size],
        className,
      )}
    >
      <Icon name={icon} className={cn('text-[28px]', ICON_TONES[tone], showLabel && 'mb-1')} />
      {showLabel && <span className="font-body text-label-sm uppercase text-smoke">{label}</span>}
    </div>
  )
}

export default DishThumb
