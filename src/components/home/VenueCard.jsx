import { Link } from 'react-router'
import { cn } from '../../lib/cn.js'
import { Icon, ImageOverlay, Pill } from '../../UI/index.js'

/** Full class strings so Tailwind can detect them at build time. */
const ACCENTS = {
  ember: { icon: 'text-ember', glow: 'bg-[radial-gradient(80%_60%_at_85%_100%,rgb(255_138_0/0.3),transparent_70%)]' },
  gold: { icon: 'text-gold', glow: 'bg-[radial-gradient(80%_60%_at_15%_100%,rgb(229_166_75/0.3),transparent_70%)]' },
  honey: { icon: 'text-honey', glow: 'bg-[radial-gradient(80%_60%_at_85%_100%,rgb(255_179_71/0.26),transparent_70%)]' },
}

function Arrow({ className }) {
  return (
    <span
      className={cn(
        'flex shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-swift group-hover:-rotate-45',
        className,
      )}
    >
      <Icon name="arrow_forward" className="text-[18px]" />
    </span>
  )
}

/**
 * Photo card for one menu. `large` makes it the tall lead card; the others
 * are compact enough to sit two across on a phone.
 */
function VenueCard({ href, accent = 'ember', badge, title, description, detail, image, alt, large = false }) {
  const theme = ACCENTS[accent]

  return (
    <Link
      to={href}
      className="pressable group block h-full rounded-[28px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
    >
      <ImageOverlay
        src={image}
        alt={alt}
        large={large}
        scrim="none"
        className={cn(
          'rounded-[28px] border border-white/8 shadow-xl shadow-black/50',
          large ? 'h-72 md:h-full md:min-h-80' : 'h-64',
        )}
        imgClassName="transition-transform duration-700 ease-relaxed group-hover:scale-105"
      >
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-night via-night/45 to-night/5" />
        <div className={cn('pointer-events-none absolute inset-0', theme.glow)} />

        <Pill
          variant="glass"
          icon={badge.icon}
          iconClassName={theme.icon}
          className="absolute top-3 left-3 uppercase tracking-[0.12em]"
        >
          {badge.label}
        </Pill>

        {large && <Arrow className="glass absolute top-3 right-3 size-10 text-white group-hover:fill-ember" />}

        <div
          className={cn(
            'glass-panel absolute',
            large ? 'inset-x-2.5 bottom-2.5 rounded-[22px] p-4' : 'inset-x-2 bottom-2 rounded-[18px] p-3',
          )}
        >
          <div className="flex items-center justify-between gap-2">
            <h3 className={cn('font-headline text-white', large ? 'text-headline-lg-mobile' : 'text-title-md font-bold')}>
              {title}
            </h3>
            {!large && <Arrow className="fill-ember size-7" />}
          </div>
          <p className="mt-1 line-clamp-2 font-body text-body-sm text-pretty text-mist">{description}</p>
          {large && (
            <span className="mt-3 inline-flex items-center gap-1.5 font-body text-label-md text-honey">
              <Icon name="schedule" className="text-[15px]" />
              {detail}
            </span>
          )}
        </div>
      </ImageOverlay>
    </Link>
  )
}

export default VenueCard
