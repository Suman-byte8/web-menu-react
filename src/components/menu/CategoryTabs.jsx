import { cn } from '../../lib/cn.js'
import { categoryAnchor } from '../../lib/menu.js'

/**
 * Scroll to a section ourselves instead of relying on the #hash jump:
 * React Router's <ScrollRestoration> treats hash changes as navigations
 * and would reset the scroll position. The section's scroll-margin-top
 * keeps its heading clear of the sticky header.
 */
function scrollToSection(event, anchor) {
  const target = document.getElementById(anchor)
  if (!target) return

  event.preventDefault()
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
}

/** Horizontally scrolling jump links to each menu section. */
function CategoryTabs({ categories, hoverClassName = 'hover:border-vibrant-orange' }) {
  return (
    <nav aria-label="Menu categories" className="no-scrollbar -mx-4 mt-2 flex gap-2 overflow-x-auto px-4 py-1">
      {categories.map(({ id, label }) => {
        const anchor = categoryAnchor(id)

        return (
          <a
            key={id}
            href={`#${anchor}`}
            onClick={(event) => scrollToSection(event, anchor)}
            className={cn(
              'shrink-0 rounded-full border border-line bg-white px-3 py-1 font-body text-label-sm whitespace-nowrap text-deep-charcoal transition-colors duration-200 ease-swift',
              hoverClassName,
            )}
          >
            {label}
          </a>
        )
      })}
    </nav>
  )
}

export default CategoryTabs
