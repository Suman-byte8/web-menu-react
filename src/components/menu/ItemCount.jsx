import { Pill } from '../../UI/index.js'

/** "160 Items" pill for a menu header; updates as the diet filter changes. */
function ItemCount({ count }) {
  return (
    <Pill variant="cream" className="px-2.5" aria-live="polite">
      {count} {count === 1 ? 'Item' : 'Items'}
    </Pill>
  )
}

export default ItemCount
