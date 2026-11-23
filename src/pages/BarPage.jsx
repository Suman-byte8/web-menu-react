import { MenuPage } from '../components/menu/index.js'
import { BAR, BAR_MENU } from '../data/barMenu.js'

function BarPage() {
  return <MenuPage config={BAR} categories={BAR_MENU} theme="lounge" />
}

export default BarPage
