import { HERO } from '../../data/site.js'

/** Greeting and the "Good Food, Good Moments." headline. */
function HeroSection() {
  return (
    <section className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -left-20 -z-10 size-72 rounded-full bg-ember/20 blur-[90px]"
      />
      <p className="font-body text-body-md text-mist">
        {HERO.greeting} <span aria-hidden="true">👋</span>
      </p>
      <h1 className="mt-1.5 font-headline text-display-lg-mobile text-white md:text-display-lg">
        {HERO.title}
        <br />
        {HERO.titleLead} <span className="text-gradient-ember">{HERO.titleAccent}</span>
      </h1>
    </section>
  )
}

export default HeroSection
