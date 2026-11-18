import { BrandNote, HeroSection, MenuCollections } from '../components/home/index.js'
import { ROUTES } from '../data/site.js'
import PageLayout from '../shared/PageLayout.jsx'

function HomePage() {
  return (
    <PageLayout activePath={ROUTES.home}>
      <HeroSection />
      <MenuCollections />
      <BrandNote />
    </PageLayout>
  )
}

export default HomePage
