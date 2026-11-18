import { cn } from '../../lib/cn.js'
import { categoryAnchor } from '../../lib/menu.js'
import DishCard from './DishCard.jsx'

/** Large photo cards get a little more breathing room between them. */
function hasLargeCards(items) {
  return items.some((item) => item.variant === 'featured' && item.size !== 'sm')
}

function MenuSection({ category }) {
  const { id, eyebrow, title, note, items } = category
  const anchor = categoryAnchor(id)

  return (
    <section id={anchor} aria-labelledby={`${anchor}-title`} className="flex scroll-mt-40 flex-col gap-4">
      <div className="flex items-end justify-between border-b border-line pb-2">
        <div>
          {eyebrow && <span className="text-eyebrow font-semibold text-muted-olive">{eyebrow}</span>}
          <h2 id={`${anchor}-title`} className="heading-section font-bold">
            {title}
          </h2>
        </div>
        {note && <span className="font-headline text-body-sm italic text-soft-gold">{note}</span>}
      </div>

      <div className={cn('flex flex-col', hasLargeCards(items) ? 'gap-4' : 'gap-3')}>
        {items.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </section>
  )
}

export default MenuSection
