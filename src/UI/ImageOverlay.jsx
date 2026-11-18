import { useState } from 'react'
import { cn } from '../lib/cn.js'

const SCRIMS = {
  soft: 'image-scrim',
  strong: 'image-scrim-strong',
  none: null,
}

/**
 * Image with an optional dark gradient scrim and overlaid content.
 * If there is no image, or it fails to load, the image is dropped and
 * `fallback` (if any) shows on the cream backdrop instead, so the card never
 * shows a broken-image icon or stray alt text.
 * `scrim`: "soft" | "strong" | "none"
 */
function ImageOverlay({ src, alt, scrim = 'soft', fallback, className, imgClassName, children }) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(src) && !failed

  return (
    <div className={cn('relative overflow-hidden bg-cream', className)}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={cn('size-full object-cover', imgClassName)}
        />
      ) : (
        fallback
      )}
      {SCRIMS[scrim] && <div className={cn('pointer-events-none absolute inset-0', SCRIMS[scrim])} />}
      {children}
    </div>
  )
}

export default ImageOverlay
