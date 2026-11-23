/**
 * Dietary categories. Class strings are written out in full so Tailwind
 * can detect them at build time.
 *   dot     fill colour of the marker
 *   border  outline colour of the square veg / non-veg mark
 *   text    label colour
 */
export const DIETS = {
  veg: {
    label: 'Veg',
    dot: 'bg-veg',
    border: 'border-veg',
    text: 'text-veg',
  },
  nonveg: {
    label: 'Non-Veg',
    dot: 'bg-nonveg',
    border: 'border-nonveg',
    text: 'text-nonveg',
  },
  other: {
    label: 'Other',
    dot: 'bg-other',
    border: 'border-other',
    text: 'text-other',
  },
}

export const ALL_DIETS = 'all'
