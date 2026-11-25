import { useDeferredValue, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router'
import { ALL_DIETS } from '../../data/diets.js'
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js'
import { countDishes, filterMenuByDiet, searchMenu } from '../../lib/menu.js'
import { holdScrollOn } from '../../lib/smoothScroll.js'
import PageLayout from '../../shared/PageLayout.jsx'
import { EmptyState } from '../../UI/index.js'
import CategoryTabs from './CategoryTabs.jsx'
import DietFilter from './DietFilter.jsx'
import MenuHero from './MenuHero.jsx'
import MenuSearch from './MenuSearch.jsx'
import MenuSection from './MenuSection.jsx'
import { MENU_THEMES } from './themes.js'

/**
 * Template shared by every menu page (restaurant, bar, rooms).
 *
 *   config      { pageTitle, intro: { eyebrow, title, description, image, alt },
 *                 search?, empty: { icon, title, message } }
 *   categories  full, unfiltered category list
 *   theme       key of MENU_THEMES
 *   notice      optional element shown above the sections (e.g. GST note)
 */
function MenuPage({ config, categories, theme = 'warm', notice }) {
  useDocumentTitle(config.pageTitle)
  const { hash } = useLocation()

  // Opened on a #section link (e.g. from a home page tile): the router jumps
  // there, then keep the section in place while lazily rendered sections
  // around it settle to their real heights.
  useEffect(() => {
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)))
    if (target) holdScrollOn(target)
  }, [hash])

  const [diet, setDiet] = useState(ALL_DIETS)
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query)

  const visible = useMemo(
    () => searchMenu(filterMenuByDiet(categories, diet), deferredQuery),
    [categories, diet, deferredQuery],
  )
  const t = MENU_THEMES[theme]
  const searching = deferredQuery.trim() !== ''
  const { empty } = config

  return (
    <PageLayout
      mainClassName="gap-10 pt-5"
      header={
        <>
          <MenuHero {...config.intro} count={countDishes(visible)} theme={t} />

          <div className="app-container stagger mt-5 animate-enter" style={{ '--i': 2 }}>
            <MenuSearch value={query} onChange={setQuery} placeholder={config.search ?? 'Search dishes'} />
          </div>

          {/* Filters float at the top of the screen while the menu scrolls. */}
          <div className="sticky top-0 z-40 mt-3 pt-[max(env(safe-area-inset-top),0.5rem)] pb-1">
            <div className="app-container">
              <div className="glass-bar stagger flex animate-enter flex-col gap-1.5 rounded-[26px] p-1.5" style={{ '--i': 3 }}>
                <DietFilter value={diet} onChange={setDiet} />
                {visible.length > 0 && <CategoryTabs categories={visible} />}
              </div>
            </div>
          </div>
        </>
      }
    >
      {notice}
      {visible.length > 0 ? (
        <div key={diet} className="flex animate-rise flex-col gap-10 motion-reduce:animate-none">
          {visible.map((category) => (
            <MenuSection key={category.id} category={category} theme={t} />
          ))}
        </div>
      ) : (
        <EmptyState icon={searching ? 'search_off' : empty.icon} title={empty.title}>
          {searching ? `Nothing on this menu matches “${deferredQuery.trim()}”.` : empty.message}
        </EmptyState>
      )}
    </PageLayout>
  )
}

export default MenuPage
