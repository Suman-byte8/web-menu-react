import { Link } from 'react-router'
import { ROUTES } from '../../data/site.js'
import { cn } from '../../lib/cn.js'
import BackButton from '../../shared/BackButton.jsx'
import Logo from '../../shared/Logo.jsx'
import { ImageOverlay, Pill } from '../../UI/index.js'
import ItemCount from './ItemCount.jsx'
import { MENU_THEMES } from './themes.js'

/**
 * Cinematic photo header at the top of a menu: floating glass back button,
 * logo and item count over the photo, then eyebrow, title and blurb.
 * Full-bleed on phones, a rounded panel on wider screens.
 */
function MenuHero({ eyebrow, title, description, image, alt, count, theme = MENU_THEMES.warm }) {
  return (
    <section className="relative isolate overflow-hidden rounded-b-[36px] md:mx-auto md:mt-4 md:max-w-3xl md:rounded-[36px] lg:max-w-5xl">
      <div className="absolute inset-0 -z-10">
        <ImageOverlay src={image} alt={alt} large eager scrim="none" className="size-full" imgClassName="scale-105">
          <div className={cn('absolute inset-0 bg-linear-to-t', theme.heroShade)} />
          <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-night/70 to-transparent" />
          <div className={cn('absolute inset-0', theme.heroGlow)} />
        </ImageOverlay>
      </div>

      <div className="app-container grid grid-cols-[1fr_auto_1fr] items-center pt-[max(env(safe-area-inset-top),0.875rem)]">
        <BackButton />
        <Link to={ROUTES.home} aria-label="Silk Inn — home">
          <Logo className="h-12" />
        </Link>
        <span className="justify-self-end">
          <ItemCount count={count} />
        </span>
      </div>

      <div className="app-container pt-32 pb-5 md:pt-40">
        <div className="glass-panel rounded-[28px] p-5 md:max-w-xl">
          {eyebrow && (
            <Pill variant="glass" icon={theme.icon} iconClassName="text-ember" className="uppercase tracking-[0.14em]">
              {eyebrow}
            </Pill>
          )}
          <h1 className="mt-3 font-headline text-display-md-mobile text-balance text-white md:text-display-md">
            {title}
          </h1>
          {description && (
            <p className="mt-2 font-body text-body-sm leading-relaxed text-pretty text-mist md:text-body-md">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default MenuHero
