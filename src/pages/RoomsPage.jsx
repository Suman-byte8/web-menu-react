import { MenuIntro, MenuPage } from '../components/menu/index.js'
import { ROOMS, ROOMS_MENU } from '../data/roomsMenu.js'
import { InfoNote } from '../UI/index.js'

function RoomsPage() {
  return (
    <MenuPage
      config={ROOMS}
      categories={ROOMS_MENU}
      theme="suite"
      mainClassName="gap-7"
      intro={
        <>
          <MenuIntro {...ROOMS.intro} />
          <InfoNote icon="receipt_long">{ROOMS.notice}</InfoNote>
        </>
      }
    />
  )
}

export default RoomsPage
