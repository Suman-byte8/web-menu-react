import { Pill } from '../../UI/index.js'

/** Glass "160 items" pill; updates as the filters change. */
function ItemCount({ count }) {
  return (
    <Pill variant="glass" className="h-11 px-4 text-label-md" aria-live="polite">
      <span className="font-bold text-ember tabular-nums">{count}</span>
      {count === 1 ? 'item' : 'items'}
    </Pill>
  )
}

export default ItemCount
