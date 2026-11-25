import { Link } from 'react-router'
import { HERO } from '../../data/site.js'
import { getDish } from '../../lib/dishes.js'
import { formatPrice } from '../../lib/menu.js'
import { Icon, IconOrb } from '../../UI/index.js'

/**
 * The chef's special as a glass promo card: label, two-tone title and an
 * orange button on the left; a large glowing icon orb on the right with a
 * glass price badge.
 */
function PromoCard() {
  const { label, title, titleAccent, dishId, href, cta } = HERO.feature
  const dish = getDish(dishId)

  return (
    <Link
      to={href}
      style={{ '--i': 8 }}
      className="glass-card pressable group stagger animate-enter relative flex min-h-48 overflow-hidden rounded-[26px] p-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
    >
      <div className="relative z-10 flex max-w-[60%] flex-col items-start">
        <span className="flex items-center gap-1 font-body text-label-sm text-mist">
          <Icon name="local_fire_department" filled className="text-[15px] text-ember" />
          {label}
        </span>
        <p className="mt-2 font-headline text-headline-lg-mobile text-white">
          {title}
          <span className="block text-gradient-ember">{titleAccent}</span>
        </p>
        <span className="fill-ember shine mt-auto inline-flex items-center gap-1.5 rounded-xl px-5 py-2.5 font-body text-label-md font-bold transition-transform duration-300 group-hover:translate-x-0.5">
          {cta}
          <Icon name="arrow_forward" className="text-[16px]" />
        </span>
      </div>

      <span className="absolute top-1/2 right-5 -translate-y-1/2 transition-transform duration-700 ease-relaxed group-hover:scale-105">
        <IconOrb icon={dish?.icon} size="lg" animated />
      </span>

      {dish && (
        <span className="glass absolute top-3 right-3 z-10 flex size-16 items-center justify-center rounded-full text-center">
          <span className="font-headline text-title-md font-extrabold text-white tabular-nums">
            {formatPrice(dish.price.min)}
          </span>
        </span>
      )}
    </Link>
  )
}

export default PromoCard
