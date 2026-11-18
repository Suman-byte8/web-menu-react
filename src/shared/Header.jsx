import BrandLogo from './BrandLogo.jsx'
import OpenStatus from './OpenStatus.jsx'

function Header() {
  return (
    <header className="frosted sticky top-0 z-40 border-b border-line bg-warm-ivory/95 py-3">
      <div className="app-container flex items-center justify-between">
        <BrandLogo />
        <OpenStatus />
      </div>
    </header>
  )
}

export default Header
