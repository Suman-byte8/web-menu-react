/**
 * Colour themes for menu pages. Full class strings so Tailwind detects them.
 *   warm    restaurant: orange accents, olive eyebrows
 *   lounge  bar: olive accents, charcoal section labels
 *   suite   rooms: soft-gold accents, charcoal section labels
 * Section notes use the same orange NoteChip on every menu so they stand out.
 */
export const MENU_THEMES = {
  warm: {
    badge: 'text-deep-charcoal',
    tabHover: 'hover:border-vibrant-orange',
    eyebrow: 'text-muted-olive',
  },
  lounge: {
    badge: 'text-muted-olive',
    tabHover: 'hover:border-muted-olive',
    eyebrow: 'text-deep-charcoal',
  },
  suite: {
    badge: 'text-soft-gold',
    tabHover: 'hover:border-soft-gold',
    eyebrow: 'text-deep-charcoal',
  },
}
