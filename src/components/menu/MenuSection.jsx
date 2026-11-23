import { cn } from '../../lib/cn.js'
import { categoryAnchor, categoryIcon, noteIcon } from '../../lib/menu.js'
import { Icon, NoteChip } from '../../UI/index.js'
import DishCard from './DishCard.jsx'
import PriceList from './PriceList.jsx'
import { MENU_THEMES } from './themes.js'

/**
 * One menu category. `category.layout: 'list'` renders a compact price list
 * (drinks) with optional `category.columns` such as ['60 ml', '30 ml'].
 * `category.note` (serving times, sizes) shows as a chip under the title.
 * Dishes sit two across on phones (more on wider screens); large photo cards
 * and drinks take a full row.
 */
function MenuSection({ category, theme = MENU_THEMES.warm }) {
  const { id, eyebrow, title, note, items } = category
  const anchor = categoryAnchor(id)

  return (
    <section id={anchor} aria-labelledby={`${anchor}-title`} className="flex scroll-mt-[8.75rem] flex-col gap-4">
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-3">
          <span className="glass-card flex size-11 shrink-0 items-center justify-center rounded-2xl text-ember">
            <Icon name={categoryIcon(category)} className="text-[22px]" />
          </span>
          <div className="min-w-0 flex-1">
            {eyebrow && <span className={cn('text-eyebrow block', theme.eyebrow)}>{eyebrow}</span>}
            <h2 id={`${anchor}-title`} className="heading-section">
              {title}
            </h2>
          </div>
          <span className="shrink-0 font-body text-label-sm text-smoke tabular-nums">
            {items.length} {items.length === 1 ? 'item' : 'items'}
          </span>
        </div>
        {note && <NoteChip icon={noteIcon(note)}>{note}</NoteChip>}
      </div>

      {category.layout === 'list' ? (
        <PriceList items={items} columns={category.columns} />
      ) : (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {items.map((dish) => (
            <div key={dish.id} className={cn(dish.variant !== 'compact' && 'col-span-full')}>
              <DishCard dish={dish} />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default MenuSection
