import { Outlet } from 'react-router'
import BottomNav from './BottomNav.jsx'

/** Pages that show the persistent bottom dock (home and the three menus). */
function DockLayout() {
  return (
    <>
      <Outlet />
      <BottomNav />
    </>
  )
}

export default DockLayout
