import BrandTitle from './BrandTitle.jsx'

/**
 * Sticky page header.
 *   leading         element before the wordmark (emblem, back button)
 *   badge           small label next to "SILK INN"
 *   badgeClassName  text colour for the badge
 *   tagline         uppercase line under the wordmark
 *   trailing        element on the right (status, counts, hours)
 *   children        extra rows under the brand row (filters, tabs)
 */
function Header({ leading, badge, badgeClassName, tagline, trailing, children }) {
  return (
    <header className="frosted sticky top-0 z-40 border-b border-line bg-warm-ivory/95 py-3">
      <div className="app-container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {leading}
            <BrandTitle badge={badge} badgeClassName={badgeClassName} tagline={tagline} />
          </div>
          {trailing && <div className="flex items-center gap-2">{trailing}</div>}
        </div>
        {children}
      </div>
    </header>
  )
}

export default Header
