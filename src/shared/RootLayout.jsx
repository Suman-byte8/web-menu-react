import { useEffect } from 'react'
import { Outlet, ScrollRestoration } from 'react-router'
import { startSmoothScroll } from '../lib/smoothScroll.js'
import PageTransition from './PageTransition.jsx'

/** Wraps every route: page content, the logo transition screen, scroll handling. */
function RootLayout() {
  // Smooth wheel scrolling on desktop (see lib/smoothScroll.js).
  useEffect(() => startSmoothScroll(), [])

  return (
    <>
      <Outlet />
      <PageTransition />
      <ScrollRestoration />
    </>
  )
}

export default RootLayout
