import { useMemo, useState } from 'react'
import { ALL_DIETS } from '../../data/diets.js'
import { useDocumentTitle } from '../../hooks/useDocumentTitle.js'
import { countDishes, filterMenuByDiet } from '../../lib/menu.js'
import BackButton from '../../shared/BackButton.jsx'
import Header from '../../shared/Header.jsx'
import PageLayout from '../../shared/PageLayout.jsx'
import { EmptyState } from '../../UI/index.js'
import CategoryTabs from './CategoryTabs.jsx'
import DietFilter from './DietFilter.jsx'
import MenuSection from './MenuSection.jsx'
import { MENU_THEMES } from './themes.js'

/**
 * Template shared by every menu page (restaurant, bar, ...).
 *
 *   config          { pageTitle, badge, tagline, empty: { icon, title, message } }
 *   categories      full, unfiltered category list
 *   theme           key of MENU_THEMES
 *   renderTrailing  (visibleCount) => element for the header's right side
 *   intro           optional element shown above the sections
 *   mainClassName   gap between sections
 */
function MenuPage({ config, categories, theme = 'warm', renderTrailing, intro, mainClassName = 'gap-8' }) {
  useDocumentTitle(config.pageTitle)

  const [diet, setDiet] = useState(ALL_DIETS)
  const visible = useMemo(() => filterMenuByDiet(categories, diet), [categories, diet])
  const t = MENU_THEMES[theme]
  const { empty } = config

  return (
    <PageLayout
      mainClassName={mainClassName}
      header={
        <Header
          leading={<BackButton />}
          badge={config.badge}
          badgeClassName={t.badge}
          tagline={config.tagline}
          trailing={renderTrailing?.(countDishes(visible))}
        >
          <DietFilter value={diet} onChange={setDiet} />
          <CategoryTabs categories={visible} hoverClassName={t.tabHover} />
        </Header>
      }
    >
      {intro}
      {visible.length > 0 ? (
        visible.map((category) => <MenuSection key={category.id} category={category} theme={t} />)
      ) : (
        <EmptyState icon={empty.icon} title={empty.title}>
          {empty.message}
        </EmptyState>
      )}
    </PageLayout>
  )
}

export default MenuPage
