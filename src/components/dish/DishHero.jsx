import { Icon, ImageOverlay } from '../../UI/index.js'
import DietBadge from '../menu/DietBadge.jsx'
import LabelBadge from '../menu/LabelBadge.jsx'

/** Four-point star, shown faintly beside the photo on wide screens. */
function BotanicalAccent() {
  return (
    <div className="pointer-events-none absolute -bottom-6 -left-6 hidden size-20 text-soft-gold opacity-15 lg:block">
      <svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
        <path d="M50 0 C60 25 75 40 100 50 C75 60 60 75 50 100 C40 75 25 60 0 50 C25 40 40 25 50 0 Z" />
      </svg>
    </div>
  )
}

/** Large dish photo with diet + highlight badges and the category pill. */
function DishHero({ dish }) {
  const fallback = (
    <div className="flex size-full items-center justify-center">
      <Icon name={dish.placeholder?.icon ?? 'restaurant'} className="text-[64px] text-soft-gold/60" />
    </div>
  )

  return (
    <div className="relative lg:col-span-6">
      <ImageOverlay
        src={dish.image}
        alt={dish.name}
        scrim="none"
        fallback={fallback}
        className="group h-[340px] w-full rounded-3xl border border-line shadow-md sm:h-[400px] lg:h-[450px]"
        imgClassName="transition-transform duration-500 ease-relaxed group-hover:scale-105"
      >
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-deep-charcoal/40 via-transparent to-transparent" />

        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <DietBadge diet={dish.diet} size="lg" />
          {dish.badge && (
            <LabelBadge tone="accent" size="lg">
              {dish.badge}
            </LabelBadge>
          )}
        </div>

        <div className="absolute bottom-4 left-4 z-10">
          <span className="badge gap-1 border border-line bg-white/95 px-3 py-1 font-semibold text-deep-charcoal shadow-xs backdrop-blur-sm">
            <Icon name="restaurant" className="text-body-sm text-soft-gold" />
            {dish.category}
          </span>
        </div>
      </ImageOverlay>

      <BotanicalAccent />
    </div>
  )
}

export default DishHero
