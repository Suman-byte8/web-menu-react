import { VENUES } from '../../data/venues.js'
import SectionHeader from '../../shared/SectionHeader.jsx'
import { Pill } from '../../UI/index.js'
import VenueCard from './VenueCard.jsx'

/** The three menus: the restaurant large, bar and rooms side by side. */
function MenuCollections() {
  const [lead, ...rest] = VENUES

  return (
    <section id="destinations" className="flex flex-col gap-4">
      <SectionHeader
        eyebrow="Explore"
        title="Our Menus"
        subtitle="Choose where you're dining"
        aside={<Pill className="mb-0.5">{VENUES.length} menus</Pill>}
      />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        <div className="col-span-2 md:row-span-2">
          <VenueCard {...lead} large />
        </div>
        {rest.map((venue) => (
          <div key={venue.id} className="md:col-span-1">
            <VenueCard {...venue} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default MenuCollections
