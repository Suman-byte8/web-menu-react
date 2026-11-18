import { MenuIntro, MenuPage } from '../components/menu/index.js'
import { BAR, BAR_MENU } from '../data/barMenu.js'
import { Dot, Pill } from '../UI/index.js'

function OpeningHours() {
  return (
    <Pill variant="cream" className="gap-1 px-2.5">
      <Dot size="sm" className="bg-muted-olive" />
      <span>
        <span className="sr-only">Open </span>
        {BAR.hours}
      </span>
    </Pill>
  )
}

function BarPage() {
  return (
    <MenuPage
      config={BAR}
      categories={BAR_MENU}
      theme="lounge"
      mainClassName="gap-7"
      renderTrailing={() => <OpeningHours />}
      intro={<MenuIntro {...BAR.intro} />}
    />
  )
}

export default BarPage
