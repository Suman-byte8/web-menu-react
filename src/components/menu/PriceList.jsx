import { formatPrice, formatPriceRange, priceRange } from '../../lib/menu.js'
import { Icon } from '../../UI/index.js'

/** Price for one column ("60 ml"), or a dash when the item isn't sold that way. */
function ColumnPrice({ item, column }) {
  const option = item.options?.find((o) => o.label === column)

  return (
    <span className="w-16 shrink-0 text-right font-headline text-title-md font-bold text-honey tabular-nums">
      {option ? (
        <>
          <span className="sr-only">{column}: </span>
          {formatPrice(option.price)}
        </>
      ) : (
        <span aria-hidden="true" className="text-white/20">
          —
        </span>
      )}
    </span>
  )
}

/**
 * Printed-menu style list for drinks: one glass card, one row per item, with
 * optional price columns (e.g. 60 ml / 30 ml) matched to option labels.
 */
function PriceList({ items, columns }) {
  return (
    <div className="glass-card rounded-[24px] px-4 py-1">
      {columns && (
        <div aria-hidden="true" className="flex items-center justify-end gap-2 border-b border-white/8 py-3">
          <span className="mr-auto flex size-8 items-center justify-center rounded-full bg-ember/12 text-ember">
            <Icon name="local_bar" filled className="text-[17px]" />
          </span>
          {columns.map((column) => (
            <span
              key={column}
              className="w-16 rounded-full border border-ember/25 bg-ember/10 py-1 text-center font-body text-label-sm font-bold whitespace-nowrap text-honey"
            >
              {column}
            </span>
          ))}
        </div>
      )}

      <ul className="divide-y divide-white/6">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-2 py-3">
            <div className="min-w-0 flex-1">
              <p className="font-headline text-title-md font-semibold text-white">{item.name}</p>
              {item.description && <p className="font-body text-body-sm text-smoke">{item.description}</p>}
            </div>

            {columns ? (
              columns.map((column) => <ColumnPrice key={column} item={item} column={column} />)
            ) : (
              <span className="shrink-0 font-headline text-title-md font-bold whitespace-nowrap text-honey tabular-nums">
                {formatPriceRange(priceRange(item))}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PriceList
