import { useEffect, useState } from 'react'
import { useLocation, useNavigation } from 'react-router'
import { cn } from '../lib/cn.js'
import { prefersReducedMotion, TRANSITION_MS } from '../lib/transition.js'
import Logo from './Logo.jsx'

/**
 * Full-screen logo shown between pages and on first load.
 *
 *   1. a link is followed → the route loader waits while this fades in
 *   2. the new page renders underneath; the logo keeps animating
 *   3. after a short hold the screen fades away
 *
 * Skipped entirely for visitors who prefer reduced motion.
 */
function PageTransition() {
  const navigation = useNavigation()
  const location = useLocation()
  const [reduced] = useState(prefersReducedMotion)

  // A navigation to a different page (not the page we're already on).
  const changingPage = navigation.state === 'loading' && navigation.location?.pathname !== location.pathname

  const [holding, setHolding] = useState(true) // true on first load: show the intro
  const [run, setRun] = useState(0) // bumped per navigation to restart the logo animation
  const [wasChanging, setWasChanging] = useState(false)

  // React to the start of a navigation during render (no extra effect pass).
  if (changingPage !== wasChanging) {
    setWasChanging(changingPage)
    if (changingPage) {
      setHolding(true)
      setRun((n) => n + 1)
    }
  }

  // Once the new page is in place, hold the logo briefly, then fade it out.
  useEffect(() => {
    if (reduced || changingPage || !holding) return undefined
    const timer = setTimeout(() => setHolding(false), run === 0 ? TRANSITION_MS.intro : TRANSITION_MS.hold)
    return () => clearTimeout(timer)
  }, [reduced, changingPage, holding, run])

  if (reduced) return null

  const visible = changingPage || holding

  return (
    <div
      aria-hidden="true"
      className={cn(
        'ambient fixed inset-0 z-[100] flex items-center justify-center bg-night transition-opacity ease-smooth',
        visible ? 'opacity-100 duration-[180ms]' : 'pointer-events-none opacity-0 duration-[300ms]',
      )}
    >
      <Logo key={run} animation="splash" className="h-36" />
    </div>
  )
}

export default PageTransition
