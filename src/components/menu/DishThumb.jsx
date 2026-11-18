import { useState } from 'react'
import { cn } from '../../lib/cn.js'
import { Icon } from '../../UI/index.js'

const SIZES = {
  xs: 'size-16',
  sm: 'size-20',
  md: 'size-24',
}

const ICON_TONES = {
  gold: 'text-soft-gold',
  orange: 'text-vibrant-orange',
  red: 'text-nonveg-red',
}

/**
 * Square dish thumbnail: 96px (md), 80px (sm) or 64px (xs). Falls back to an
 * icon tile when the dish has no photo, or when the photo fails to load.
 */
function DishThumb({ image, alt, placeholder, size = 'md', className }) {
  const [failed, setFailed] = useState(false)

  if (image && !failed) {
    return (
      <img
        src={image}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={cn('shrink-0 rounded-xl bg-cream object-cover', SIZES[size], className)}
      />
    )
  }

  const { icon = 'restaurant', label, tone = 'gold' } = placeholder ?? {}
  const showLabel = label && size !== 'xs'

  return (
    <div
      className={cn(
        'flex shrink-0 flex-col items-center justify-center rounded-xl border border-line bg-cream p-2 text-center',
        SIZES[size],
        className,
      )}
    >
      <Icon name={icon} className={cn('text-headline-lg-mobile', ICON_TONES[tone], showLabel && 'mb-1')} />
      {showLabel && <span className="font-body text-label-sm uppercase text-muted-olive">{label}</span>}
    </div>
  )
}

export default DishThumb
