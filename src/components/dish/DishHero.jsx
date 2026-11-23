import { Icon, ImageOverlay } from '../../UI/index.js'

/** Attribution required by the photo's Creative Commons licence. */
export function PhotoCredit({ credit }) {
  return (
    <p className="truncate px-1 font-body text-label-sm font-normal tracking-normal text-smoke/80">
      Photo:{' '}
      <a
        href={credit.page}
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-2 transition-colors hover:text-mist"
      >
        {credit.author}
      </a>{' '}
      · {credit.license} · Wikimedia Commons
    </p>
  )
}

/**
 * The dish photo as the focal point: edge to edge on phones (the glass
 * details panel slides up over its lower edge), a rounded panel on wider
 * screens. A warm glow and dark fades frame it.
 */
function DishHero({ dish }) {
  const fallback = (
    <div className="flex size-full items-center justify-center bg-[radial-gradient(circle_at_50%_40%,rgb(255_138_0/0.2),transparent_60%)]">
      <Icon name={dish.placeholder?.icon ?? 'restaurant'} className="text-[80px] text-ember/60" />
    </div>
  )

  return (
    <div className="relative -mx-4 md:mx-0 lg:sticky lg:top-6">
      <ImageOverlay
        src={dish.image}
        alt={dish.name}
        large
        eager
        scrim="none"
        fallback={fallback}
        className="group h-[54vh] max-h-[520px] min-h-[320px] max-md:[mask-image:linear-gradient(to_bottom,#000_55%,transparent)] md:h-[440px] md:rounded-[32px] md:border md:border-white/8 md:shadow-2xl md:shadow-black/60 lg:h-[600px] lg:max-h-none"
        imgClassName="transition-transform duration-700 ease-relaxed group-hover:scale-105"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black/60 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/45 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_35%_at_75%_60%,rgb(255_138_0/0.18),transparent_70%)]" />
      </ImageOverlay>
    </div>
  )
}

export default DishHero
