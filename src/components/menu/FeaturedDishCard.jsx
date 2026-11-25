import { dietLabels, itemDiets, priceRange } from '../../lib/menu.js'
import { Icon, IconOrb } from '../../UI/index.js'
import DietBadge from './DietBadge.jsx'
import IngredientTags from './IngredientTags.jsx'
import LabelBadge from './LabelBadge.jsx'
import PriceOptions from './PriceOptions.jsx'
import PriceTag from './PriceTag.jsx'

/**
 * Highlighted glass card for a signature dish: badges, name, description,
 * versions and a large price on the left; a glowing icon orb on the right.
 *   icon  the section's icon (from MenuSection)
 */
function FeaturedDishCard({ dish, icon, linked = false }) {
  const { name, description, badge, tags, options } = dish
  const diets = itemDiets(dish)
  const { min, max } = priceRange(dish)

  return (
    <article className="glass-card relative overflow-hidden rounded-[26px] p-5">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-12 size-56 rounded-full bg-ember/25 blur-3xl"
      />

      <div className="relative flex items-start gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap gap-1.5">
            {diets.map((diet) => (
              <DietBadge key={diet} diet={diet} />
            ))}
            {badge && <LabelBadge tone={badge.tone}>{badge.label}</LabelBadge>}
          </div>
          <h3 className="mt-3 font-headline text-headline-md-mobile text-white">
            {name}
            <span className="sr-only"> ({dietLabels(diets)})</span>
          </h3>
          {description && (
            <p className="mt-1 font-body text-body-sm leading-relaxed text-pretty text-mist">{description}</p>
          )}
        </div>
        <IconOrb icon={icon} size="md" className="mt-1" />
      </div>

      <div className="relative mt-4 flex flex-col gap-3">
        <PriceOptions options={options} />
        {tags && <IngredientTags tags={tags} />}
        <div className="flex items-center justify-between gap-3">
          <PriceTag amount={min} max={max} large />
          {linked && (
            <span className="fill-ember flex size-10 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ease-swift group-hover:-rotate-45">
              <Icon name="arrow_forward" className="text-[19px]" />
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default FeaturedDishCard
