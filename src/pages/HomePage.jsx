import { useState } from 'react'
import {
  BrandNote,
  ChefPicks,
  HeroSection,
  HomeSearch,
  MenuCollections,
  PromoCard,
  QuickLinks,
} from '../components/home/index.js'
import { BRAND, HERO } from '../data/site.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import Header from '../shared/Header.jsx'
import PageLayout from '../shared/PageLayout.jsx'
import { Icon } from '../UI/index.js'

/** Location pill on the right of the home header. */
function LocationTag() {
  return (
    <span className="glass flex h-11 items-center gap-1.5 rounded-full pr-4 pl-3 font-body text-label-md font-bold tracking-[0.14em] text-white">
      <Icon name="location_on" filled className="text-[18px] text-ember" />
      {BRAND.city}
    </span>
  )
}

function HomePage() {
  useDocumentTitle(HERO.pageTitle)
  const [query, setQuery] = useState('')

  return (
    <PageLayout mainClassName="gap-7 pt-3" header={<Header trailing={<LocationTag />} />}>
      <div className="flex flex-col gap-5">
        <HeroSection />
        <div className="stagger animate-enter" style={{ '--i': 3 }}>
          <HomeSearch query={query} onQueryChange={setQuery} />
        </div>
      </div>

      {/* While searching, the results replace the rest of the page. */}
      {!query.trim() && (
        <>
          <QuickLinks />
          <PromoCard />
          <ChefPicks />
          <MenuCollections />
          <BrandNote />
        </>
      )}
    </PageLayout>
  )
}

export default HomePage
