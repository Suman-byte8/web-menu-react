import { MenuPage } from '../components/menu/index.js'
import { RESTAURANT, RESTAURANT_MENU } from '../data/restaurantMenu.js'
import { Pill } from '../UI/index.js'

function renderDishCount(count) {
  return (
    <Pill variant="cream" className="px-2.5" aria-live="polite">
      {count} {count === 1 ? 'Dish' : 'Dishes'}
    </Pill>
  )
}

function RestaurantPage() {
  return (
    <MenuPage config={RESTAURANT} categories={RESTAURANT_MENU} theme="warm" renderTrailing={renderDishCount} />
  )
}

export default RestaurantPage
