import { IconOrb } from '../../UI/index.js'

/**
 * Top of a dish page: the section's icon as a large glowing glass orb inside
 * halo rings (the menu has no dish photos). A spark travels round the outer
 * ring; the orb itself floats and glows.
 */
function DishHero({ dish }) {
  return (
    <div className="stagger relative flex h-60 animate-enter items-center justify-center md:h-72" style={{ '--i': 0 }}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 size-72 -translate-x-1/2 -translate-y-1/2 animate-breathe rounded-full bg-ember/20 blur-[70px]"
      />
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 size-60 -translate-x-1/2 -translate-y-1/2 animate-orbit rounded-full border border-dashed border-ember/25"
      >
        <span className="absolute -top-1 left-1/2 size-2 -translate-x-1/2 rounded-full bg-honey shadow-[0_0_12px_3px_rgb(255_138_0/0.8)]" />
      </span>
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 size-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8"
      />
      <IconOrb icon={dish.icon} size="xl" animated />
    </div>
  )
}

export default DishHero
