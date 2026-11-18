import { useState } from 'react'
import { cn } from '../../lib/cn.js'
import { Icon } from '../../UI/index.js'

const ICON_TONES = {
  gold: 'text-soft-gold',
  orange: 'text-vibrant-orange',
  red: 'text-nonveg-red',
}

/**
 * 96px square dish thumbnail. Falls back to an icon tile when the dish has
 * no photo, or when the photo fails to load.
 */
function DishThumb({ image, alt, placeholder }) {
  const [failed, setFailed] = useState(false)

  if (image && !failed) {
    return (
      <img
        src={image}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className="size-24 shrink-0 rounded-xl bg-cream object-cover"
      />
    )
  }

  const { icon = 'restaurant', label, tone = 'gold' } = placeholder ?? {}

  return (
    <div className="flex size-24 shrink-0 flex-col items-center justify-center rounded-xl border border-line bg-cream p-2 text-center">
      <Icon name={icon} className={cn('text-headline-lg-mobile', ICON_TONES[tone], label && 'mb-1')} />
      {label && <span className="font-body text-label-sm uppercase text-muted-olive">{label}</span>}
    </div>
  )
}

export default DishThumb
