import { cn } from '../../lib/cn.js'
import { dietLabels, itemDiets, priceRange } from '../../lib/menu.js'
import DietDots from './DietDots.jsx'
import DishThumb from './DishThumb.jsx'
import PriceOptions from './PriceOptions.jsx'
import PriceTag from './PriceTag.jsx'

const HIGHLIGHT_TONES = {
  gold: 'text-soft-gold',
  orange: 'text-vibrant-orange',
  olive: 'text-muted-olive',
  ink: 'text-deep-charcoal',
}

/**
 * Row card: thumbnail on the left, name / description / price on the right.
 * size "sm" uses an 80px thumbnail and a tighter footer.
 */
function CompactDishCard({ dish }) {
  const { name, description, image, placeholder, highlight, options, size = 'md' } = dish
  const diets = itemDiets(dish)
  const { min, max } = priceRange(dish)

  return (
    <article className="surface-card flex gap-3 p-3.5 shadow-xs">
      <DishThumb image={image} alt={name} placeholder={placeholder} size={size} />

      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div>
          <div className="mb-1 flex items-start gap-1.5">
            <DietDots diets={diets} className="mt-2" />
            <h3 className="font-headline text-title-lg font-bold leading-snug">
              {name}
              <span className="sr-only"> ({dietLabels(diets)})</span>
            </h3>
          </div>
          {description && (
            <p className="line-clamp-2 font-body text-body-sm leading-relaxed text-pretty">{description}</p>
          )}
          <PriceOptions options={options} className="mt-1.5" />
        </div>

        <div
          className={cn(
            'flex items-center justify-between gap-2 border-t border-cream pt-1',
            size === 'sm' ? 'mt-1.5' : 'mt-2',
          )}
        >
          <span
            className={cn(
              'font-body text-label-sm uppercase tracking-wider',
              highlight && HIGHLIGHT_TONES[highlight.tone],
            )}
          >
            {highlight?.label}
          </span>
          <PriceTag amount={min} max={max} />
        </div>
      </div>
    </article>
  )
}

export default CompactDishCard
