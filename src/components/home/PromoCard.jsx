import { useState } from 'react'
import { Link } from 'react-router'
import { HERO } from '../../data/site.js'
import { getDish } from '../../lib/dishes.js'
import { formatPrice } from '../../lib/menu.js'
import { Icon } from '../../UI/index.js'

/**
 * The chef's special as a glass promo card: label, two-tone title and an
 * orange button on the left; the dish photo in a glowing circle on the right
 * with a glass price badge.
 */
function PromoCard() {
  const { label, title, titleAccent, dishId, image, alt, href, cta } = HERO.feature
  const dish = getDish(dishId)
  const [failed, setFailed] = useState(false)

  return (
    <Link
      to={href}
      className="glass-card pressable group relative flex min-h-48 overflow-hidden rounded-[26px] p-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-8 size-56 -translate-y-1/2 rounded-full bg-ember/30 blur-3xl"
      />

      <div className="relative z-10 flex max-w-[58%] flex-col items-start">
        <span className="flex items-center gap-1 font-body text-label-sm text-mist">
          <Icon name="local_fire_department" filled className="text-[15px] text-ember" />
          {label}
        </span>
        <p className="mt-2 font-headline text-headline-lg-mobile text-white">
          {title}
          <span className="block text-gradient-ember">{titleAccent}</span>
        </p>
        <span className="fill-ember mt-auto inline-flex items-center gap-1.5 rounded-xl px-5 py-2.5 font-body text-label-md font-bold transition-transform duration-300 group-hover:translate-x-0.5">
          {cta}
          <Icon name="arrow_forward" className="text-[16px]" />
        </span>
      </div>

      {image && !failed && (
        <img
          src={image}
          alt={alt}
          loading="eager"
          decoding="async"
          onError={() => setFailed(true)}
          className="photo-grade absolute top-1/2 -right-6 size-48 -translate-y-1/2 rounded-full border-4 border-white/10 object-cover shadow-2xl shadow-black/60 transition-transform duration-700 ease-relaxed group-hover:scale-105"
        />
      )}

      {dish && (
        <span className="glass absolute top-4 right-4 z-10 flex size-16 items-center justify-center rounded-full text-center">
          <span className="font-headline text-title-md font-extrabold text-white tabular-nums">
            {formatPrice(dish.price.min)}
          </span>
        </span>
      )}
    </Link>
  )
}

export default PromoCard
