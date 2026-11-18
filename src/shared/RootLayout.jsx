import { Outlet, ScrollRestoration } from 'react-router'
import BottomNav from './BottomNav.jsx'

/** Wraps every route: page content, the persistent bottom dock, scroll handling. */
function RootLayout() {
  return (
    <>
      <Outlet />
      <BottomNav />
      <ScrollRestoration />
    </>
  )
}

export default RootLayout
