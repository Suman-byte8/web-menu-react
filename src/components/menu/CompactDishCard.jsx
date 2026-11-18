import { DIETS } from '../../data/diets.js'
import { cn } from '../../lib/cn.js'
import { Dot } from '../../UI/index.js'
import DishThumb from './DishThumb.jsx'
import PriceTag from './PriceTag.jsx'

const HIGHLIGHT_TONES = {
  gold: 'text-soft-gold',
  orange: 'text-vibrant-orange',
  olive: 'text-muted-olive',
}

/** Row card: thumbnail on the left, name / description / price on the right. */
function CompactDishCard({ dish }) {
  const { name, description, diet, price, image, placeholder, highlight } = dish
  const d = DIETS[diet]

  return (
    <article className="surface-card flex gap-3 p-3.5 shadow-xs">
      <DishThumb image={image} alt={name} placeholder={placeholder} />

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="mb-1 flex items-center gap-1.5">
            <Dot className={d.dot} />
            <h3 className="font-headline text-title-lg font-bold leading-snug">
              {name}
              <span className="sr-only"> ({d.label})</span>
            </h3>
          </div>
          <p className="line-clamp-2 font-body text-body-sm leading-relaxed text-pretty">{description}</p>
        </div>

        <div className="mt-2 flex items-center justify-between border-t border-cream pt-1">
          <span
            className={cn(
              'font-body text-label-sm uppercase tracking-wider',
              highlight && HIGHLIGHT_TONES[highlight.tone],
            )}
          >
            {highlight?.label}
          </span>
          <PriceTag amount={price} />
        </div>
      </div>
    </article>
  )
}

export default CompactDishCard
