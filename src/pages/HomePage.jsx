import { BrandNote, HeroSection, MenuCollections } from '../components/home/index.js'
import { BRAND, HERO } from '../data/site.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import BrandEmblem from '../shared/BrandEmblem.jsx'
import Header from '../shared/Header.jsx'
import OpenStatus from '../shared/OpenStatus.jsx'
import PageLayout from '../shared/PageLayout.jsx'

function HomePage() {
  useDocumentTitle(HERO.pageTitle)

  return (
    <PageLayout
      header={
        <Header
          leading={<BrandEmblem />}
          badge={BRAND.city}
          tagline={BRAND.tagline}
          trailing={<OpenStatus />}
        />
      }
    >
      <HeroSection />
      <MenuCollections />
      <BrandNote />
    </PageLayout>
  )
}

export default HomePage
