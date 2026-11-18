import { Outlet, ScrollRestoration } from 'react-router'

/** Wraps every route: page content plus scroll position handling. */
function RootLayout() {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  )
}

export default RootLayout
