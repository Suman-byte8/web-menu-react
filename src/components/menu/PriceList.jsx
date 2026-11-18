import { formatPrice, formatPriceRange, priceRange } from '../../lib/menu.js'

/** Price for one column ("60 ml"), or a dash when the item isn't sold that way. */
function ColumnPrice({ item, column }) {
  const option = item.options?.find((o) => o.label === column)

  return (
    <span className="w-16 shrink-0 text-right font-headline text-title-md font-bold tabular-nums">
      {option ? (
        <>
          <span className="sr-only">{column}: </span>
          {formatPrice(option.price)}
        </>
      ) : (
        <span aria-hidden="true" className="text-line">
          —
        </span>
      )}
    </span>
  )
}

/**
 * Printed-menu style list for drinks: one card, one row per item, with
 * optional price columns (e.g. 60 ml / 30 ml) matched to option labels.
 */
function PriceList({ items, columns }) {
  return (
    <div className="surface-card px-4 py-1 shadow-xs">
      {columns && (
        <div aria-hidden="true" className="flex justify-end gap-2 border-b border-cream py-2">
          {columns.map((column) => (
            <span key={column} className="text-eyebrow w-16 text-right font-semibold text-muted-olive">
              {column}
            </span>
          ))}
        </div>
      )}

      <ul className="divide-y divide-cream">
        {items.map((item) => (
          <li key={item.id} className="flex items-center gap-2 py-2.5">
            <div className="min-w-0 flex-1">
              <p className="font-headline text-title-md font-bold">{item.name}</p>
              {item.description && <p className="font-body text-body-sm text-ink-soft">{item.description}</p>}
            </div>

            {columns ? (
              columns.map((column) => <ColumnPrice key={column} item={item} column={column} />)
            ) : (
              <span className="shrink-0 font-headline text-title-md font-bold whitespace-nowrap tabular-nums">
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
