import { MenuPage } from '../components/menu/index.js'
import { RESTAURANT, RESTAURANT_MENU } from '../data/restaurantMenu.js'

function RestaurantPage() {
  return <MenuPage config={RESTAURANT} categories={RESTAURANT_MENU} theme="warm" />
}

export default RestaurantPage
