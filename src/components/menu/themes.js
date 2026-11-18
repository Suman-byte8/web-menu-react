/**
 * Colour themes for menu pages. Full class strings so Tailwind detects them.
 *   warm    restaurant: orange accents, olive eyebrows, gold notes
 *   lounge  bar: olive accents, charcoal section labels
 *   suite   rooms: soft-gold accents, charcoal section labels
 */
export const MENU_THEMES = {
  warm: {
    badge: 'text-deep-charcoal',
    tabHover: 'hover:border-vibrant-orange',
    eyebrow: 'text-muted-olive',
    note: 'text-soft-gold',
  },
  lounge: {
    badge: 'text-muted-olive',
    tabHover: 'hover:border-muted-olive',
    eyebrow: 'text-deep-charcoal',
    note: 'text-deep-charcoal',
  },
  suite: {
    badge: 'text-soft-gold',
    tabHover: 'hover:border-soft-gold',
    eyebrow: 'text-deep-charcoal',
    note: 'text-deep-charcoal',
  },
}
