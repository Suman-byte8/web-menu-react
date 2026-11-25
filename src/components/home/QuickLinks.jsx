import { Link } from 'react-router'
import { QUICK_LINKS } from '../../data/site.js'
import { Icon } from '../../UI/index.js'

/** Square glass tiles that jump to a section of the restaurant menu; they light up orange on hover / press. */
function QuickLinks() {
  return (
    <nav aria-label="Popular sections" className="no-scrollbar relative -mx-4 flex gap-2.5 overflow-x-auto px-4 py-1 md:mx-0 md:px-0">
      {QUICK_LINKS.map(({ label, icon, href }, index) => (
        <Link
          key={href}
          to={href}
          style={{ '--i': index + 4 }}
          className="glass-card pressable stagger animate-enter flex h-[76px] w-[66px] shrink-0 flex-col items-center justify-center gap-1.5 rounded-2xl font-body text-label-sm text-mist transition-all duration-300 hover:glass-active focus-visible:glass-active active:glass-active"
        >
          <Icon name={icon} filled className="text-[26px] text-honey" />
          {label}
        </Link>
      ))}
    </nav>
  )
}

export default QuickLinks
