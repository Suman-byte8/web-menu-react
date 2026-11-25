import { DIETS } from '../../data/diets.js'
import { cn } from '../../lib/cn.js'
import { formatPrice } from '../../lib/menu.js'
import { Icon } from '../../UI/index.js'
import { DietMark } from '../menu/DietDots.jsx'
import LabelBadge from '../menu/LabelBadge.jsx'

/** Diet tag in the panel: tinted pill like "▣ Non-Veg". */
const DIET_TAGS = {
  veg: 'border-veg/30 bg-veg/15',
  nonveg: 'border-nonveg/30 bg-nonveg/15',
  other: 'border-other/30 bg-other/15',
}

function Row({ label, children }) {
  return (
    <div className="flex items-center justify-between gap-4 py-2.5">
      <span className="font-body text-body-md text-mist">{label}</span>
      <span className="text-right font-body text-body-md font-semibold text-white">{children}</span>
    </div>
  )
}

/**
 * Glass details panel: tags, name, price, description, the versions a dish
 * comes in (tap one to see its price) and the serving details.
 *   choice / onChoose  index of the selected version (see DishPage)
 */
function DishSummary({ dish, choice, onChoose }) {
  const { options } = dish
  const hasVersions = options.length > 1
  const selected = hasVersions ? options[choice] : null
  const price = selected ? selected.price : dish.price.min

  return (
    <section className="glass-panel flex flex-col rounded-[30px] p-5 md:p-6">
      <div className="flex flex-wrap items-center gap-1.5">
        {dish.diets.map((diet) => (
          <span key={diet} className={cn('badge border px-2.5 py-1 font-bold text-white', DIET_TAGS[diet])}>
            <DietMark diet={diet} size="sm" />
            {DIETS[diet].label}
          </span>
        ))}
        {dish.badge && <LabelBadge tone="accent">{dish.badge}</LabelBadge>}
      </div>

      <h1 className="mt-3 font-headline text-display-md-mobile text-balance text-white md:text-display-md">
        {dish.name}
      </h1>

      <div className="mt-2 flex items-center justify-between gap-3">
        <span className="flex min-w-0 items-center gap-1.5 font-body text-body-sm text-mist">
          <Icon name={dish.icon} filled className="text-[16px] text-ember" />
          <span className="truncate">{dish.eyebrow ? `${dish.eyebrow} · ${dish.category}` : dish.category}</span>
        </span>
        <span className="shrink-0 font-headline text-headline-lg-mobile font-extrabold text-ember tabular-nums" aria-live="polite">
          {!hasVersions && dish.price.min !== dish.price.max && <span className="mr-1 text-label-md text-smoke">from</span>}
          {formatPrice(price)}
        </span>
      </div>

      {dish.description && (
        <p className="mt-3 font-body text-body-md leading-relaxed text-pretty text-mist">{dish.description}</p>
      )}

      {hasVersions && (
        <div className="mt-4 border-t border-white/10 pt-4">
          <h2 className="mb-3 font-headline text-title-md text-white">Available as</h2>
          <div role="radiogroup" aria-label="Versions" className="flex flex-wrap gap-2">
            {options.map((option, index) => {
              const active = index === choice
              return (
                <button
                  key={option.label}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => onChoose(index)}
                  className={cn(
                    'flex h-10 items-center gap-1.5 rounded-xl border px-4 font-body text-label-md transition-all duration-300 ease-swift active:scale-95',
                    active ? 'fill-ember border-transparent font-bold' : 'border-white/12 bg-white/5 text-mist hover:text-white',
                  )}
                >
                  {option.diet && <DietMark diet={option.diet} size="sm" className={cn(active && 'bg-white')} />}
                  {option.label}
                  <span className={cn('tabular-nums', active ? 'text-white/85' : 'text-smoke')}>
                    {formatPrice(option.price)}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      <div className="mt-4 divide-y divide-white/8 border-t border-white/10">
        <Row label="Style">{dish.style}</Row>
        <Row label="Served at">{dish.availability}</Row>
      </div>

      {dish.ingredients.length > 0 && (
        <div className="border-t border-white/10 pt-4">
          <h2 className="mb-2.5 font-headline text-title-md text-white">Ingredients</h2>
          <ul className="flex flex-wrap gap-1.5">
            {dish.ingredients.map((ingredient) => (
              <li key={ingredient} className="tag font-body text-label-md text-mist">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

export default DishSummary
