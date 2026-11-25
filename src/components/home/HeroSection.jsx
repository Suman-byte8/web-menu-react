import { HERO } from '../../data/site.js'

/** Greeting and the "Good Food, Good Moments." headline, arriving line by line. */
function HeroSection() {
  return (
    <section className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -left-20 -z-10 size-72 animate-breathe rounded-full bg-ember/20 blur-[90px]"
      />
      <p className="stagger animate-enter font-body text-body-md text-mist" style={{ '--i': 0 }}>
        {HERO.greeting} <span aria-hidden="true">👋</span>
      </p>
      <h1 className="mt-1.5 font-headline text-display-lg-mobile text-white md:text-display-lg">
        <span className="stagger block animate-enter" style={{ '--i': 1 }}>
          {HERO.title}
        </span>
        <span className="stagger block animate-enter" style={{ '--i': 2 }}>
          {HERO.titleLead} <span className="text-shimmer">{HERO.titleAccent}</span>
        </span>
      </h1>
    </section>
  )
}

export default HeroSection
