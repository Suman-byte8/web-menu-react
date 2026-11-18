import BottomNav from './BottomNav.jsx'
import Header from './Header.jsx'

/** Shell shared by every page: header, padded main column, bottom dock. */
function PageLayout({ activePath, children }) {
  return (
    <div className="paper-texture min-h-screen bg-warm-ivory pb-28 text-deep-charcoal antialiased">
      <Header />
      <main className="app-container flex flex-col gap-6 pt-4">{children}</main>
      <BottomNav activePath={activePath} />
    </div>
  )
}

export default PageLayout
