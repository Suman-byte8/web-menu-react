/**
 * Timing for the logo screen shown between pages (shared/PageTransition.jsx).
 *   cover   logo screen fades in over the old page (the route loader waits this long)
 *   hold    logo stays up after the new page is ready
 *   intro   longer hold on the very first load, so the logo animation can finish
 *   reveal  logo screen fades away
 */
export const TRANSITION_MS = { cover: 260, hold: 420, intro: 950, reveal: 380 }

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

let firstLoad = true

/**
 * Route loader that keeps the current page on screen while the logo screen
 * fades in over it, so the page swap happens out of sight. The first load
 * and reduced-motion visitors skip the wait.
 */
export function transitionLoader() {
  if (firstLoad || prefersReducedMotion()) {
    firstLoad = false
    return null
  }
  return new Promise((resolve) => setTimeout(() => resolve(null), TRANSITION_MS.cover))
}
