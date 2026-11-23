import { cn } from '../../lib/cn.js'
import { dietLabels, itemDiets, priceRange } from '../../lib/menu.js'
import { Icon, ImageOverlay } from '../../UI/index.js'
import DietBadge from './DietBadge.jsx'
import IngredientTags from './IngredientTags.jsx'
import LabelBadge from './LabelBadge.jsx'
import PriceOptions from './PriceOptions.jsx'
import PriceTag from './PriceTag.jsx'

const HEIGHTS = {
  lg: 'h-72 md:h-80',
  md: 'h-64 md:h-72',
  sm: 'h-56 md:h-64',
}

/**
 * Large photo card: diet and highlight badges on top, and a frosted glass
 * panel floating over the bottom of the photo with name, price and versions.
 */
function FeaturedDishCard({ dish }) {
  const { name, description, image, placeholder, badge, tags, options, size = 'lg' } = dish
  const diets = itemDiets(dish)
  const { min, max } = priceRange(dish)

  const fallback = (
    <div className="flex size-full items-center justify-center bg-[radial-gradient(circle_at_50%_35%,rgb(255_138_0/0.18),transparent_65%)]">
      <Icon name={placeholder?.icon ?? 'restaurant'} className="text-[56px] text-ember/70" />
    </div>
  )

  return (
    <article className="overflow-hidden rounded-[28px] border border-white/8 shadow-2xl shadow-black/50">
      <ImageOverlay
        src={image}
        alt={name}
        large
        scrim="none"
        fallback={fallback}
        className={HEIGHTS[size]}
        imgClassName="transition-transform duration-700 ease-relaxed group-hover:scale-105"
      >
        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-night/90 via-night/10 to-night/30" />

        <div className="absolute top-3 right-3 left-3 flex flex-wrap gap-1.5">
          {diets.map((diet) => (
            <DietBadge key={diet} diet={diet} />
          ))}
          {badge && <LabelBadge tone={badge.tone}>{badge.label}</LabelBadge>}
        </div>

        <div className="glass-panel absolute inset-x-2.5 bottom-2.5 flex flex-col gap-2 rounded-[22px] p-3.5">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className={cn('font-headline font-bold text-white', size === 'sm' ? 'text-title-md' : 'text-title-lg')}>
                {name}
                <span className="sr-only"> ({dietLabels(diets)})</span>
              </h3>
              {description && (
                <p className="mt-0.5 line-clamp-2 font-body text-body-sm text-pretty text-mist">{description}</p>
              )}
            </div>
            <span className="fill-ember flex size-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-swift group-hover:rotate-[-45deg]">
              <Icon name="arrow_forward" className="text-[19px]" />
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <PriceTag amount={min} max={max} large />
            <PriceOptions options={options} />
          </div>
          {tags && <IngredientTags tags={tags} />}
        </div>
      </ImageOverlay>
    </article>
  )
}

export default FeaturedDishCard
