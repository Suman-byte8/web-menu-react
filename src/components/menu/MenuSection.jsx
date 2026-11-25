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
 * Cards stack on phones and sit two across on wider screens, where featured
 * dishes take the full row.
 */
function MenuSection({ category, theme = MENU_THEMES.warm }) {
  const { id, eyebrow, title, note, items } = category
  const anchor = categoryAnchor(id)
  const icon = categoryIcon(category)

  return (
    <section
      id={anchor}
      aria-labelledby={`${anchor}-title`}
      // Off-screen sections are not rendered until they come near (lazy rendering).
      // The extra padding (cancelled by negative margins) keeps card shadows
      // inside the area the browser paints.
      className="-mx-4 -mb-6 flex scroll-mt-[8.75rem] flex-col gap-4 px-4 pb-6 [contain-intrinsic-size:auto_800px] [content-visibility:auto]"
    >
      <div className="reveal flex flex-col gap-2.5">
        <div className="flex items-center gap-3">
          <span className="glass-card flex size-11 shrink-0 items-center justify-center rounded-2xl text-ember">
            <Icon name={icon} className="text-[22px]" />
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
        <div className="grid gap-3 md:grid-cols-2">
          {items.map((dish) => (
            <div key={dish.id} className={cn(dish.variant === 'featured' && 'md:col-span-2')}>
              <DishCard dish={dish} icon={icon} />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default MenuSection
