import { MenuIntro, MenuPage } from '../components/menu/index.js'
import { ROOMS, ROOMS_MENU } from '../data/roomsMenu.js'
import { IconText, InfoNote, StatusPill } from '../UI/index.js'

function renderAvailability() {
  return <StatusPill dotClassName="bg-veg-green">{ROOMS.availability}</StatusPill>
}

function RoomsPage() {
  return (
    <MenuPage
      config={ROOMS}
      categories={ROOMS_MENU}
      theme="suite"
      mainClassName="gap-7"
      renderTrailing={renderAvailability}
      intro={
        <>
          <MenuIntro {...ROOMS.intro}>
            <IconText icon="call" iconClassName="text-body-sm">
              {ROOMS.service.howToOrder}
            </IconText>
            <span className="text-label-sm font-bold">{ROOMS.service.delivery}</span>
          </MenuIntro>
          <InfoNote icon="receipt_long">{ROOMS.notice}</InfoNote>
        </>
      }
    />
  )
}

export default RoomsPage
