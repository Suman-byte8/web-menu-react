import { NAV_ITEMS } from '../data/site.js'
import { cn } from '../lib/cn.js'
import { Icon } from '../UI/index.js'

function NavItem({ href, icon, label, active }) {
  return (
    <a
      href={href}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'flex flex-col items-center gap-0.5 px-3 py-1 font-body text-deep-charcoal transition-colors duration-200 ease-swift',
        active ? 'font-semibold' : 'hover:text-vibrant-orange',
      )}
    >
      <Icon name={icon} className={cn('text-title-lg', active && 'text-vibrant-orange')} />
      <span className="text-label-sm">{label}</span>
    </a>
  )
}

function BottomNav({ activePath = '/' }) {
  return (
    <nav aria-label="Primary" className="fixed inset-x-4 bottom-3 z-50 mx-auto max-w-md">
      <div className="frosted flex items-center justify-around rounded-2xl border border-line bg-white/95 px-2 py-1.5 shadow-lg">
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.href} {...item} active={item.href === activePath} />
        ))}
      </div>
    </nav>
  )
}

export default BottomNav
