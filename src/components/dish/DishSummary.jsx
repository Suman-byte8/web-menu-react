import { formatPrice } from '../../lib/menu.js'

/** Eyebrow, dish name, prominent price box and description. */
function DishSummary({ dish }) {
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
          <span className="block font-body text-label-sm font-medium text-muted-olive">Price</span>
          <span className="font-headline text-headline-lg-mobile font-bold tabular-nums lg:text-headline-lg">
            {formatPrice(dish.price)}
          </span>
        </div>
      </div>

      <p className="border-t border-cream pt-2 font-body text-body-md leading-relaxed text-pretty">{dish.description}</p>
    </section>
  )
}

export default DishSummary
