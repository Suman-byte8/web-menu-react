import { VENUES } from '../../data/venues.js'
import SectionHeader from '../../shared/SectionHeader.jsx'
import { Pill } from '../../UI/index.js'
import VenueCard from './VenueCard.jsx'

function MenuCollections() {
  return (
    <section id="destinations" className="flex flex-col gap-4">
      <SectionHeader
        title="Menu Collections"
        subtitle="Select an experience to browse dishes"
        aside={<Pill className="px-2.5">{VENUES.length} Venues</Pill>}
      />

      {VENUES.map((venue) => (
        <VenueCard key={venue.id} {...venue} />
      ))}
    </section>
  )
}

export default MenuCollections
