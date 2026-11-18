/**
 * Dietary categories. Class strings are written out in full so Tailwind
 * can detect them at build time.
 */
export const DIETS = {
  veg: {
    label: 'Veg',
    dot: 'bg-veg-green',
    text: 'text-veg-green',
    badgeBorder: 'border-veg-green/30',
    filterBorder: 'border-veg-green/40',
  },
  nonveg: {
    label: 'Non-Veg',
    dot: 'bg-nonveg-red',
    text: 'text-nonveg-red',
    badgeBorder: 'border-nonveg-red/30',
    filterBorder: 'border-nonveg-red/40',
  },
  other: {
    label: 'Other',
    dot: 'bg-other-amber',
    text: 'text-other-amber',
    badgeBorder: 'border-other-amber/30',
    filterBorder: 'border-other-amber/40',
  },
}

export const ALL_DIETS = 'all'
