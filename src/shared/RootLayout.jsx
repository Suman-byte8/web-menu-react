import { Outlet, ScrollRestoration } from 'react-router'
import PageTransition from './PageTransition.jsx'

/** Wraps every route: page content, the logo transition screen, scroll handling. */
function RootLayout() {
  return (
    <>
      <Outlet />
      <PageTransition />
      <ScrollRestoration />
    </>
  )
}

export default RootLayout
