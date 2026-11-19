import BrandTitle from './BrandTitle.jsx'

/**
 * Sticky page header.
 *   leading         element before the logo (back button)
 *   badge           small label beside the logo
 *   badgeClassName  text colour for the badge
 *   tagline         uppercase line under the badge
 *   logoClassName   logo height (default h-12)
 *   trailing        element on the right (item count)
 *   children        extra rows under the brand row (filters, tabs)
 */
function Header({ leading, badge, badgeClassName, tagline, logoClassName, trailing, children }) {
  return (
    <header className="frosted sticky top-0 z-40 border-b border-line bg-warm-ivory/95 py-3">
      <div className="app-container">
        <div className="flex items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-2.5">
            {leading}
            <BrandTitle badge={badge} badgeClassName={badgeClassName} tagline={tagline} logoClassName={logoClassName} />
          </div>
          {trailing && <div className="flex shrink-0 items-center gap-2">{trailing}</div>}
        </div>
        {children}
      </div>
    </header>
  )
}

export default Header
