/**
 * Colour themes for menu pages. Full class strings so Tailwind detects them.
 * Controls (filters, active chips, prices) stay orange on every menu; the
 * theme only tints the hero lighting and section eyebrows.
 *   warm    restaurant: orange
 *   lounge  bar: golden, a darker, moodier hero
 *   suite   rooms: warm amber
 */
export const MENU_THEMES = {
  warm: {
    icon: 'restaurant',
    eyebrow: 'text-ember',
    heroGlow: 'bg-[radial-gradient(90%_55%_at_85%_100%,rgb(255_138_0/0.3),transparent_70%)]',
    heroShade: 'from-night via-night/55 to-night/5',
  },
  lounge: {
    icon: 'local_bar',
    eyebrow: 'text-gold',
    heroGlow: 'bg-[radial-gradient(90%_55%_at_15%_100%,rgb(229_166_75/0.3),transparent_70%)]',
    heroShade: 'from-night via-night/70 to-night/25',
  },
  suite: {
    icon: 'room_service',
    eyebrow: 'text-honey',
    heroGlow: 'bg-[radial-gradient(90%_55%_at_85%_100%,rgb(255_179_71/0.28),transparent_70%)]',
    heroShade: 'from-night via-night/60 to-night/10',
  },
}
