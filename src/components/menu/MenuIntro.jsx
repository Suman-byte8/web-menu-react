import { ImageOverlay } from '../../UI/index.js'

/**
 * Cream banner at the top of a menu: small photo, eyebrow, title, blurb.
 * `children` render as an optional footer row (contact details, timings).
 */
function MenuIntro({ eyebrow, title, description, image, alt, children }) {
  return (
    <section className="rounded-3xl border border-line bg-cream p-5">
      <div className="flex items-center gap-4">
        <ImageOverlay src={image} alt={alt} scrim="none" className="size-24 shrink-0 rounded-2xl shadow-xs" />
        <div>
          {eyebrow && <span className="text-eyebrow block font-semibold">{eyebrow}</span>}
          <h1 className="font-headline text-headline-md-mobile font-bold leading-tight">{title}</h1>
          {description && <p className="mt-1 font-body text-body-sm">{description}</p>}
        </div>
      </div>

      {children && (
        <div className="mt-4 flex items-center justify-between border-t border-line pt-3 font-body text-body-sm">
          {children}
        </div>
      )}
    </section>
  )
}

export default MenuIntro
