import { useState } from 'react'
import { cn } from '../lib/cn.js'
import { largePhoto } from '../lib/photos.js'

const SCRIMS = {
  soft: 'image-scrim',
  strong: 'image-scrim-strong',
  none: null,
}

/**
 * Colour-graded image with an optional dark scrim and overlaid content.
 *   large    try a sharper copy first (full-width photos), then the normal one
 *   scrim    "soft" | "strong" | "none"
 *   eager    load straight away (photos above the fold)
 * If there is no image, or it fails to load, the image is dropped and
 * `fallback` (if any) shows on the dark backdrop instead, so the card never
 * shows a broken-image icon or stray alt text.
 */
function ImageOverlay({ src, alt, scrim = 'soft', large = false, eager = false, fallback, className, imgClassName, children }) {
  const sources = [large && largePhoto(src), src].filter(Boolean)
  const [attempt, setAttempt] = useState(0)
  const current = sources[attempt]

  return (
    <div className={cn('relative overflow-hidden bg-graphite', className)}>
      {current ? (
        <img
          src={current}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : undefined}
          decoding="async"
          onError={() => setAttempt((n) => n + 1)}
          className={cn('photo-grade size-full object-cover', imgClassName)}
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
