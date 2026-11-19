import { BrandNote, HeroSection, MenuCollections } from '../components/home/index.js'
import { BRAND, HERO } from '../data/site.js'
import { useDocumentTitle } from '../hooks/useDocumentTitle.js'
import Header from '../shared/Header.jsx'
import PageLayout from '../shared/PageLayout.jsx'

function HomePage() {
  useDocumentTitle(HERO.pageTitle)

  return (
    <PageLayout header={<Header badge={BRAND.city} tagline={BRAND.tagline} logoClassName="h-14" />}>
      <HeroSection />
      <MenuCollections />
      <BrandNote />
    </PageLayout>
  )
}

export default HomePage
