import { prefersReducedMotion } from './transition.js'

/**
 * Smooth scrolling with Locomotive Scroll (v5, built on Lenis).
 *
 * - Only on devices with a mouse or trackpad: phones and tablets already
 *   have smooth native momentum scrolling, and Lenis leaves touch alone
 *   anyway, so there it would only add a per-frame loop for nothing.
 * - Never for visitors who prefer reduced motion.
 * - The library is downloaded lazily, after the page has rendered.
 * - Lenis keeps the browser's native scroll, so sticky bars, scroll
 *   restoration and the CSS scroll animations keep working.
 */
let instance = null
let library = null

const wantsSmoothScroll = () =>
  typeof window !== 'undefined' &&
  !prefersReducedMotion() &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches

/** Starts smooth scrolling once the library has loaded. Returns a function that stops it. */
export function startSmoothScroll() {
  if (!wantsSmoothScroll()) return () => {}

  let stopped = false
  library ??= import('locomotive-scroll')
  library.then(({ default: LocomotiveScroll }) => {
    if (stopped || instance) return
    instance = new LocomotiveScroll({
      lenisOptions: {
        lerp: 0.1, // lower = floatier; 0.1 is Lenis's own default
        smoothWheel: true,
        allowNestedScroll: true, // let the horizontal rows (chips, Chef's Picks) scroll natively
      },
    })
  })

  return () => {
    stopped = true
    instance?.destroy()
    instance = null
  }
}

/**
 * Scrolls to an element, honouring its CSS scroll-margin-top (Lenis
 * ignores it), smoothly when allowed.
 *
 * Menu sections render lazily (content-visibility: auto), so sections passed
 * on the way can turn out taller or shorter than estimated and the scroll
 * can end a little off target. When it ends, any leftover distance is
 * corrected in one quick step.
 */
export function scrollToElement(element) {
  const margin = scrollMargin(element)
  const deadline = performance.now() + 2500
  const settle = () => performance.now() < deadline && holdScrollOn(element)

  if (instance) {
    instance.scrollTo(element, { offset: -margin, duration: 1.1, onComplete: settle })
    return
  }

  element.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
  if ('onscrollend' in window) window.addEventListener('scrollend', settle, { once: true })
  else setTimeout(settle, 1000)
}

/**
 * Keeps an element at its scroll position for a few frames while lazily
 * rendered sections around it settle to their real sizes (used after a jump
 * and when a page opens on a #section link). Stops once it stays put.
 */
export function holdScrollOn(element) {
  const margin = scrollMargin(element)
  let frames = 0
  let stable = 0

  const step = () => {
    const distance = element.getBoundingClientRect().top - margin
    if (Math.abs(distance) < 2) {
      stable += 1
    } else {
      stable = 0
      if (instance) instance.scrollTo(window.scrollY + distance, { immediate: true, force: true })
      else window.scrollBy({ top: distance, behavior: 'instant' })
    }
    frames += 1
    if (stable < 3 && frames < 40) requestAnimationFrame(step)
  }

  requestAnimationFrame(step)
}

function scrollMargin(element) {
  return parseFloat(getComputedStyle(element).scrollMarginTop) || 0
}
