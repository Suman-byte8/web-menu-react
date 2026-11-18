import { Link } from 'react-router'
import { cn } from '../../lib/cn.js'
import { Dot, Icon, ImageOverlay, Pill } from '../../UI/index.js'

/** Full class strings so Tailwind can detect them at build time. */
const ACCENTS = {
  orange: {
    border: 'hover:border-vibrant-orange',
    dot: 'bg-vibrant-orange',
    icon: 'text-vibrant-orange',
    cta: 'group-hover:text-vibrant-orange',
  },
  olive: {
    border: 'hover:border-muted-olive',
    dot: 'bg-muted-olive',
    icon: 'text-soft-gold',
    cta: 'group-hover:text-muted-olive',
  },
  gold: {
    border: 'hover:border-soft-gold',
    dot: 'bg-soft-gold',
    icon: 'text-cream',
    cta: 'group-hover:text-vibrant-orange',
  },
}

function VenueCard({ href, accent = 'orange', badge, title, description, mood, cta, image, alt }) {
  const theme = ACCENTS[accent]

  return (
    <Link
      to={href}
      className={cn(
        'surface-card group relative block overflow-hidden shadow-xs transition-all duration-300 ease-smooth',
        theme.border,
      )}
    >
      <ImageOverlay src={image} alt={alt} className="h-44">
        <Pill
          variant="dark"
          icon={badge.icon}
          iconClassName={theme.icon}
          className="absolute top-3 left-3 gap-1 px-2.5 uppercase tracking-wider"
        >
          {badge.label}
        </Pill>

        <div className="absolute right-4 bottom-3 left-4 text-white">
          <h3 className="heading-card">{title}</h3>
          <p className="line-clamp-1 font-body text-body-sm text-cream">{description}</p>
        </div>
      </ImageOverlay>

      <div className="flex items-center justify-between border-t border-cream bg-white p-4">
        <div className="flex items-center gap-2">
          <Dot className={theme.dot} />
          <span className="font-body text-body-sm font-medium">{mood}</span>
        </div>
        <span
          className={cn(
            'inline-flex items-center gap-1 font-body text-label-md transition-colors',
            theme.cta,
          )}
        >
          <span>{cta}</span>
          <Icon
            name="arrow_forward"
            className="text-body-lg transition-transform duration-200 ease-swift group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  )
}

export default VenueCard
