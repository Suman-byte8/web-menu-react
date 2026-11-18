import { MenuIntro, MenuPage } from '../components/menu/index.js'
import { BAR, BAR_MENU } from '../data/barMenu.js'
import { StatusPill } from '../UI/index.js'

function renderOpeningHours() {
  return (
    <StatusPill dotClassName="bg-muted-olive">
      <span className="sr-only">Open </span>
      {BAR.hours}
    </StatusPill>
  )
}

function BarPage() {
  return (
    <MenuPage
      config={BAR}
      categories={BAR_MENU}
      theme="lounge"
      mainClassName="gap-7"
      renderTrailing={renderOpeningHours}
      intro={<MenuIntro {...BAR.intro} />}
    />
  )
}

export default BarPage
