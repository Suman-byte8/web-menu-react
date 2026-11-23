import { MenuPage } from '../components/menu/index.js'
import { ROOMS, ROOMS_MENU } from '../data/roomsMenu.js'
import { InfoNote } from '../UI/index.js'

function RoomsPage() {
  return (
    <MenuPage
      config={ROOMS}
      categories={ROOMS_MENU}
      theme="suite"
      notice={
        <InfoNote icon="receipt_long">
          <strong className="block font-semibold text-white">{ROOMS.gst}</strong>
          {ROOMS.notice}
        </InfoNote>
      }
    />
  )
}

export default RoomsPage
