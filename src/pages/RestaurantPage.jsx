import { useMemo, useState } from 'react'
import { CategoryTabs, DietFilter, MenuSection } from '../components/menu/index.js'
import { ALL_DIETS } from '../data/diets.js'
import { RESTAURANT, RESTAURANT_MENU } from '../data/restaurantMenu.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import { countDishes, filterMenuByDiet } from '../lib/menu.js'
import BackButton from '../shared/BackButton.jsx'
import Header from '../shared/Header.jsx'
import PageLayout from '../shared/PageLayout.jsx'
import { EmptyState, Pill } from '../UI/index.js'

function RestaurantPage() {
  useDocumentTitle(RESTAURANT.pageTitle)

  const [diet, setDiet] = useState(ALL_DIETS)
  const categories = useMemo(() => filterMenuByDiet(RESTAURANT_MENU, diet), [diet])
  const dishCount = countDishes(categories)

  return (
    <PageLayout
      mainClassName="gap-8"
      header={
        <Header
          leading={<BackButton />}
          badge={RESTAURANT.badge}
          tagline={RESTAURANT.tagline}
          trailing={
            <Pill variant="cream" className="px-2.5" aria-live="polite">
              {dishCount} {dishCount === 1 ? 'Dish' : 'Dishes'}
            </Pill>
          }
        >
          <DietFilter value={diet} onChange={setDiet} />
          <CategoryTabs categories={categories} />
        </Header>
      }
    >
      {categories.length > 0 ? (
        categories.map((category) => <MenuSection key={category.id} category={category} />)
      ) : (
        <EmptyState icon="restaurant_menu" title="No items found">
          No dishes match this dietary filter.
        </EmptyState>
      )}
    </PageLayout>
  )
}

export default RestaurantPage
