import { MenuIntro, MenuPage } from '../components/menu/index.js'
import { BAR, BAR_MENU } from '../data/barMenu.js'

function BarPage() {
  return (
    <MenuPage
      config={BAR}
      categories={BAR_MENU}
      theme="lounge"
      mainClassName="gap-7"
      intro={<MenuIntro {...BAR.intro} />}
    />
  )
}

export default BarPage
