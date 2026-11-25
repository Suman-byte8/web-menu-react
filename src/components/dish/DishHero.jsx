import { IconOrb } from '../../UI/index.js'

/**
 * Top of a dish page: the section's icon as a large glowing glass orb inside
 * soft halo rings (the menu has no dish photos).
 */
function DishHero({ dish }) {
  return (
    <div className="relative flex h-60 items-center justify-center md:h-72">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/20 blur-[70px]"
      />
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 size-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ember/15"
      />
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 size-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8"
      />
      <IconOrb icon={dish.icon} size="xl" />
    </div>
  )
}

export default DishHero
