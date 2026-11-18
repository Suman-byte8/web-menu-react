import { DIETS } from '../../data/diets.js'
import { formatPrice } from '../../lib/menu.js'
import { Dot } from '../../UI/index.js'
import PriceTag from './PriceTag.jsx'

/**
 * Image-free card for drinks and wines: name + description with the price on
 * the right (optionally a second price such as per bottle), and an optional
 * footer with an italic serving note and a tag chip.
 */
function TextItemCard({ dish }) {
  const { name, description, diet, price, altPrice, note, tag } = dish
  const d = DIETS[diet]
  const hasFooter = Boolean(note || tag)

  return (
    <article className="surface-card p-4 shadow-xs">
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="mb-1 flex items-center gap-1.5">
            <Dot className={d.dot} />
            <h3 className="font-headline text-title-lg font-bold">
              {name}
              <span className="sr-only"> ({d.label})</span>
            </h3>
          </div>
          <p className="font-body text-body-sm leading-relaxed text-pretty">{description}</p>
        </div>

        <div className="shrink-0 text-right">
          <PriceTag amount={price} className="block whitespace-nowrap" />
          {altPrice && (
            <span className="font-body text-label-sm whitespace-nowrap">
              {formatPrice(altPrice.amount)} {altPrice.label}
            </span>
          )}
        </div>
      </div>

      {hasFooter && (
        <div className="mt-1.5 flex items-center justify-between gap-2 border-t border-cream pt-2 font-body text-body-sm">
          {note && <span className="font-headline italic">{note}</span>}
          {tag && <span className="tag ml-auto shrink-0 border border-line text-label-sm">{tag}</span>}
        </div>
      )}
    </article>
  )
}

export default TextItemCard
