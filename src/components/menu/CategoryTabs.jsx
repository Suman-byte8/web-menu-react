import { useEffect, useRef, useState } from 'react'
import { cn } from '../../lib/cn.js'
import { categoryAnchor, categoryIcon } from '../../lib/menu.js'
import { scrollToElement } from '../../lib/smoothScroll.js'
import { Icon } from '../../UI/index.js'

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Space left under the sticky bar before a section counts as "current". */
const ACTIVE_OFFSET = 40

/**
 * Horizontally scrolling jump links to each menu section. The chip of the
 * section being read lights up and is kept in view as the page scrolls.
 *
 * Scrolling is done here instead of relying on the #hash jump: React
 * Router's <ScrollRestoration> treats hash changes as navigations and would
 * reset the scroll position. Each section's scroll-margin-top keeps its
 * heading clear of the sticky bar.
 */
function CategoryTabs({ categories }) {
  const navRef = useRef(null)
  const lockUntil = useRef(0)
  const [active, setActive] = useState(categories[0]?.id)

  // Follow the section under the sticky bar while scrolling.
  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      if (!navRef.current || performance.now() < lockUntil.current) return

      const line = navRef.current.getBoundingClientRect().bottom + ACTIVE_OFFSET
      let current = categories[0]?.id
      for (const { id } of categories) {
        const section = document.getElementById(categoryAnchor(id))
        if (!section) continue
        if (section.getBoundingClientRect().top > line) break
        current = id
      }
      setActive(current)
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    schedule()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [categories])

  // Keep the active chip centred in the row.
  useEffect(() => {
    const nav = navRef.current
    const chip = nav?.querySelector(`[data-id="${CSS.escape(active ?? '')}"]`)
    if (!nav || !chip) return
    nav.scrollTo({
      left: chip.offsetLeft - nav.clientWidth / 2 + chip.offsetWidth / 2,
      behavior: reduceMotion() ? 'auto' : 'smooth',
    })
  }, [active])

  const jumpTo = (event, id) => {
    const target = document.getElementById(categoryAnchor(id))
    if (!target) return

    event.preventDefault()
    setActive(id)
    lockUntil.current = performance.now() + 1200 // ignore the sections we fly past
    scrollToElement(target)
  }

  return (
    <nav
      ref={navRef}
      aria-label="Menu categories"
      className="no-scrollbar relative flex gap-1.5 overflow-x-auto px-1 py-0.5 [mask-image:linear-gradient(90deg,transparent,#000_8px,#000_calc(100%-8px),transparent)]"
    >
      {categories.map((category) => {
        const { id, label } = category
        const isActive = id === active

        return (
          <a
            key={id}
            data-id={id}
            href={`#${categoryAnchor(id)}`}
            aria-current={isActive ? 'true' : undefined}
            onClick={(event) => jumpTo(event, id)}
            className={cn(
              'flex h-9 shrink-0 items-center gap-1.5 rounded-xl border pr-3.5 pl-2.5 font-body text-label-md whitespace-nowrap transition-all duration-300 ease-swift active:scale-95',
              isActive
                ? 'glass-active font-bold'
                : 'border-white/8 bg-white/5 text-mist hover:bg-white/10 hover:text-white',
            )}
          >
            <Icon name={categoryIcon(category)} className={cn('text-[17px]', isActive ? 'text-honey' : 'text-smoke')} />
            {label}
          </a>
        )
      })}
    </nav>
  )
}

export default CategoryTabs
