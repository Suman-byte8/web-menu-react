import { useState } from 'react'
import { cn } from '../lib/cn.js'

/**
 * Image with a dark gradient scrim and optional overlaid content.
 * If the image fails to load, it is hidden and the cream backdrop + scrim
 * remain, so the card never shows a broken-image icon or stray alt text.
 * `scrim`: "soft" | "strong"
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
      <div className={cn('absolute inset-0', scrim === 'strong' ? 'image-scrim-strong' : 'image-scrim')} />
      {children}
    </div>
  )
}

export default ImageOverlay
