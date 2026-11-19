import { dietLabels, formatPrice, itemDiets, noteIcon, priceRange } from '../../lib/menu.js'
import { NoteChip } from '../../UI/index.js'
import DietDots from './DietDots.jsx'
import PriceOptions from './PriceOptions.jsx'
import PriceTag from './PriceTag.jsx'

/**
 * Image-free card for drinks and wines: name + description with the price on
 * the right (optionally a second price such as per bottle, or version chips),
 * and an optional footer with a highlighted serving note and a tag chip.
 */
function TextItemCard({ dish }) {
  const { name, description, altPrice, note, tag, options } = dish
  const diets = itemDiets(dish)
  const { min, max } = priceRange(dish)
  const hasFooter = Boolean(note || tag)

  return (
    <article className="surface-card p-4 shadow-xs">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <div className="mb-1 flex items-start gap-1.5">
            <DietDots diets={diets} className="mt-2" />
            <h3 className="font-headline text-title-lg font-bold">
              {name}
              <span className="sr-only"> ({dietLabels(diets)})</span>
            </h3>
          </div>
          {description && <p className="font-body text-body-sm leading-relaxed text-pretty">{description}</p>}
          <PriceOptions options={options} className="mt-1.5" />
        </div>

        <div className="shrink-0 text-right">
          <PriceTag amount={min} max={max} className="block" />
          {altPrice && (
            <span className="font-body text-label-sm whitespace-nowrap">
              {formatPrice(altPrice.amount)} {altPrice.label}
            </span>
          )}
        </div>
      </div>

      {hasFooter && (
        <div className="mt-1.5 flex items-center justify-between gap-2 border-t border-cream pt-2 font-body text-body-sm">
          {note && (
            <NoteChip icon={noteIcon(note)} size="sm">
              {note}
            </NoteChip>
          )}
          {tag && <span className="tag ml-auto shrink-0 border border-line text-label-sm">{tag}</span>}
        </div>
      )}
    </article>
  )
}

export default TextItemCard
