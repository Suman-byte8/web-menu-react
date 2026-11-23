import { dietLabels, formatPrice, itemDiets, noteIcon, priceRange } from '../../lib/menu.js'
import { NoteChip } from '../../UI/index.js'
import DietDots from './DietDots.jsx'
import PriceOptions from './PriceOptions.jsx'
import PriceTag from './PriceTag.jsx'

/**
 * Image-free card for drinks: name + description with the price on the
 * right (optionally a second price such as per bottle, or version chips),
 * and an optional footer with a highlighted serving note and a tag chip.
 */
function TextItemCard({ dish }) {
  const { name, description, altPrice, note, tag, options } = dish
  const diets = itemDiets(dish)
  const { min, max } = priceRange(dish)
  const hasFooter = Boolean(note || tag)

  return (
    <article className="glass-card h-full rounded-[22px] p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-start gap-2">
            <DietDots diets={diets} className="mt-1" />
            <h3 className="font-headline text-title-md font-bold text-white">
              {name}
              <span className="sr-only"> ({dietLabels(diets)})</span>
            </h3>
          </div>
          {description && (
            <p className="mt-1 font-body text-body-sm leading-relaxed text-pretty text-smoke">{description}</p>
          )}
          <PriceOptions options={options} className="mt-2" />
        </div>

        <div className="shrink-0 text-right">
          <PriceTag amount={min} max={max} className="block" />
          {altPrice && (
            <span className="font-body text-label-sm whitespace-nowrap text-mist">
              {formatPrice(altPrice.amount)} {altPrice.label}
            </span>
          )}
        </div>
      </div>

      {hasFooter && (
        <div className="mt-3 flex items-center justify-between gap-2 border-t border-white/6 pt-2.5">
          {note && (
            <NoteChip icon={noteIcon(note)} size="sm">
              {note}
            </NoteChip>
          )}
          {tag && <span className="tag ml-auto shrink-0 text-label-sm text-mist">{tag}</span>}
        </div>
      )}
    </article>
  )
}

export default TextItemCard
