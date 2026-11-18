import { useState } from 'react'
import { cn } from '../lib/cn.js'

const SCRIMS = {
  soft: 'image-scrim',
  strong: 'image-scrim-strong',
  none: null,
}

/**
 * Image with an optional dark gradient scrim and overlaid content.
 * If the image fails to load, it is hidden and the cream backdrop + scrim
 * remain, so the card never shows a broken-image icon or stray alt text.
 * `scrim`: "soft" | "strong" | "none"
 */
function ImageOverlay({ src, alt, scrim = 'soft', className, imgClassName, children }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={cn('relative overflow-hidden bg-cream', className)}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={cn('size-full object-cover', imgClassName)}
        />
      )}
      {SCRIMS[scrim] && <div className={cn('absolute inset-0', SCRIMS[scrim])} />}
      {children}
    </div>
  )
}

export default ImageOverlay
