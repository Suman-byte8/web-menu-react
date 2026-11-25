import { dietLabels, formatPrice, itemDiets, noteIcon, priceRange } from '../../lib/menu.js'
import { Icon, NoteChip } from '../../UI/index.js'
import DietDots from './DietDots.jsx'
import PriceOptions from './PriceOptions.jsx'
import PriceTag from './PriceTag.jsx'

/**
 * Glass row card for a dish or drink: diet mark, name, description and
 * version chips on the left; the price on the right. Optional footer with a
 * portion chip (`highlight`), serving note and tag.
 *   linked  the card sits inside a link to the dish page: show the arrow
 */
function TextItemCard({ dish, linked = false }) {
  const { name, description, altPrice, note, tag, options, highlight } = dish
  const diets = itemDiets(dish)
  const { min, max } = priceRange(dish)
  const hasFooter = Boolean(highlight || note || tag)

  return (
    <article className="glass-card flex h-full flex-col rounded-[22px] p-4">
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
          <PriceOptions options={options} className="mt-2.5" />
        </div>

        <div className="flex shrink-0 flex-col items-end gap-1">
          <div className="flex items-center gap-2.5">
            <PriceTag amount={min} max={max} />
            {linked && (
              <span className="fill-ember flex size-8 items-center justify-center rounded-[10px] transition-transform duration-300 ease-swift group-hover:scale-110">
                <Icon name="arrow_forward" className="text-[17px]" />
              </span>
            )}
          </div>
          {altPrice && (
            <span className="font-body text-label-sm whitespace-nowrap text-mist">
              {formatPrice(altPrice.amount)} {altPrice.label}
            </span>
          )}
        </div>
      </div>

      {hasFooter && (
        <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-white/6 pt-2.5">
          {highlight && (
            <NoteChip icon={noteIcon(highlight.label)} size="sm">
              {highlight.label}
            </NoteChip>
          )}
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
