import { BRAND, HERO } from '../../data/site.js'
import { IconText, Pill } from '../../UI/index.js'
import FeaturedDish from './FeaturedDish.jsx'

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-line bg-cream p-5 shadow-sm">
      <div className="relative z-10 flex flex-col gap-3">
        <Pill icon="restaurant" iconClassName="text-vibrant-orange" className="uppercase tracking-wider">
          {HERO.eyebrow}
        </Pill>

        <h1 className="font-headline text-display-lg-mobile leading-tight tracking-tight text-balance">
          {HERO.title} <br />
          <span className="font-normal italic text-vibrant-orange">{HERO.titleAccent}</span>
        </h1>

        <p className="font-body text-body-sm leading-relaxed text-pretty">{HERO.intro}</p>

        <FeaturedDish {...HERO.feature} />

        <div className="flex items-center justify-between border-t border-line pt-2 font-body text-body-sm">
          <IconText icon="location_on" iconClassName="text-body-sm">
            {BRAND.location}
          </IconText>
          <IconText icon="qr_code_2" iconClassName="text-body-sm text-vibrant-orange">
            Table &amp; Room Menu
          </IconText>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
