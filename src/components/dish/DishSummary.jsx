import { formatPrice } from '../../lib/menu.js'
import PriceOptions from '../menu/PriceOptions.jsx'

/** Eyebrow, dish name, prominent price box, description and versions. */
function DishSummary({ dish }) {
  const { min, max } = dish.price

  return (
    <section className="flex flex-col gap-3 rounded-3xl border border-line bg-white p-5 shadow-xs">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-eyebrow mb-0.5 block font-semibold text-muted-olive">{dish.eyebrow}</span>
          <h1 className="font-headline text-display-md-mobile font-bold leading-tight text-balance lg:text-headline-lg">
            {dish.name}
          </h1>
        </div>

        <div className="shrink-0 rounded-2xl border border-line bg-cream px-3.5 py-1.5 text-right">
          <span className="block font-body text-label-sm font-medium text-muted-olive">
            {min === max ? 'Price' : 'From'}
          </span>
          <span className="font-headline text-headline-lg-mobile font-bold tabular-nums lg:text-headline-lg">
            {formatPrice(min)}
          </span>
        </div>
      </div>

      {dish.description && (
        <p className="border-t border-cream pt-2 font-body text-body-md leading-relaxed text-pretty">
          {dish.description}
        </p>
      )}

      {dish.options.length > 1 && (
        <div className="flex flex-col gap-2 border-t border-cream pt-3">
          <span className="text-eyebrow font-semibold text-muted-olive">Available as</span>
          <PriceOptions options={dish.options} size="md" />
        </div>
      )}
    </section>
  )
}

export default DishSummary
