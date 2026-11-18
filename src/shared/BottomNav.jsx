import { NavLink } from 'react-router'
import { NAV_ITEMS } from '../data/site.js'
import { cn } from '../lib/cn.js'
import { Icon } from '../UI/index.js'

const ACCENTS = {
  orange: 'text-vibrant-orange',
  olive: 'text-muted-olive',
}

function NavItem({ href, icon, label, accent = 'orange' }) {
  return (
    <NavLink
      to={href}
      end
      className={({ isActive }) =>
        cn(
          'flex flex-col items-center gap-0.5 px-3 py-1 font-body text-deep-charcoal transition-colors duration-200 ease-swift',
          isActive ? 'font-semibold' : 'hover:text-vibrant-orange',
        )
      }
    >
      {({ isActive }) => (
        <>
          <Icon name={icon} className={cn('text-title-lg', isActive && ACCENTS[accent])} />
          <span className="text-label-sm">{label}</span>
        </>
      )}
    </NavLink>
  )
}

function BottomNav() {
  return (
    <nav aria-label="Primary" className="fixed inset-x-4 bottom-3 z-50 mx-auto max-w-md">
      <div className="frosted flex items-center justify-around rounded-2xl border border-line bg-white/95 px-2 py-1.5 shadow-lg">
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </div>
    </nav>
  )
}

export default BottomNav
