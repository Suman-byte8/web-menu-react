import { cn } from '../../lib/cn.js'
import { categoryAnchor, noteIcon } from '../../lib/menu.js'
import { NoteChip } from '../../UI/index.js'
import DishCard from './DishCard.jsx'
import PriceList from './PriceList.jsx'
import { MENU_THEMES } from './themes.js'

/** Large photo cards get a little more breathing room between them. */
function hasLargeCards(items) {
  return items.some((item) => item.variant === 'featured' && item.size !== 'sm')
}

/**
 * One menu category. `category.layout: 'list'` renders a compact price list
 * (drinks) with optional `category.columns` such as ['60 ml', '30 ml'].
 * `category.note` (serving times, sizes) shows as a chip under the title.
 */
function MenuSection({ category, theme = MENU_THEMES.warm }) {
  const { id, eyebrow, title, note, items } = category
  const anchor = categoryAnchor(id)

  return (
    <section id={anchor} aria-labelledby={`${anchor}-title`} className="flex scroll-mt-44 flex-col gap-4">
      <div className="border-b border-line pb-2.5">
        {eyebrow && <span className={cn('text-eyebrow font-semibold', theme.eyebrow)}>{eyebrow}</span>}
        <h2 id={`${anchor}-title`} className="heading-section font-bold">
          {title}
        </h2>
        {note && (
          <NoteChip icon={noteIcon(note)} className="mt-2">
            {note}
          </NoteChip>
        )}
      </div>

      {category.layout === 'list' ? (
        <PriceList items={items} columns={category.columns} />
      ) : (
        <div className={cn('flex flex-col', hasLargeCards(items) ? 'gap-4' : 'gap-3')}>
          {items.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      )}
    </section>
  )
}

export default MenuSection
