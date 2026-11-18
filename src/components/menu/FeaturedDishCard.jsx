import { cn } from '../../lib/cn.js'
import { itemDiets, priceRange } from '../../lib/menu.js'
import { ImageOverlay } from '../../UI/index.js'
import DietBadge from './DietBadge.jsx'
import IngredientTags from './IngredientTags.jsx'
import LabelBadge from './LabelBadge.jsx'
import PriceOptions from './PriceOptions.jsx'
import PriceTag from './PriceTag.jsx'

const SIZES = {
  lg: { image: 'h-44', badges: 'top-3 left-3 gap-2', body: 'p-4', title: 'text-headline-md-mobile' },
  md: { image: 'h-40', badges: 'top-3 left-3 gap-2', body: 'p-4', title: 'text-headline-md-mobile' },
  sm: { image: 'h-36', badges: 'top-2.5 left-2.5 gap-1.5', body: 'p-3.5', title: 'text-title-lg' },
}

/** Large photo card with diet + highlight badges and a floating price. */
function FeaturedDishCard({ dish }) {
  const { name, description, image, badge, tags, options, size = 'lg' } = dish
  const s = SIZES[size]
  const { min, max } = priceRange(dish)

  return (
    <article className="surface-card overflow-hidden shadow-xs">
      <ImageOverlay src={image} alt={name} scrim="none" className={s.image}>
        <div className={cn('absolute flex flex-wrap', s.badges)}>
          {itemDiets(dish).map((diet) => (
            <DietBadge key={diet} diet={diet} />
          ))}
          {badge && <LabelBadge tone={badge.tone}>{badge.label}</LabelBadge>}
        </div>
        <PriceTag amount={min} max={max} pill className="absolute right-3 bottom-2.5" />
      </ImageOverlay>

      <div className={cn('flex flex-col', s.body, tags || options ? 'gap-2' : 'gap-1')}>
        <h3 className={cn('font-headline font-bold', s.title)}>{name}</h3>
        {description && <p className="font-body text-body-sm leading-relaxed text-pretty">{description}</p>}
        <PriceOptions options={options} />
        {tags && <IngredientTags tags={tags} />}
      </div>
    </article>
  )
}

export default FeaturedDishCard
