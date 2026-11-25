import { NavLink } from 'react-router'
import { NAV_ITEMS } from '../data/site.js'
import { cn } from '../lib/cn.js'
import { Icon } from '../UI/index.js'

function NavItem({ href, icon, label }) {
  return (
    <NavLink
      to={href}
      end
      className={({ isActive }) =>
        cn(
          'relative flex flex-1 flex-col items-center gap-1 py-2 font-body transition-colors duration-300 ease-swift active:scale-95',
          isActive ? 'text-ember' : 'text-smoke hover:text-mist',
        )
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <span
              aria-hidden="true"
              className="absolute top-1 left-1/2 size-10 -translate-x-1/2 rounded-full bg-ember/25 blur-xl"
            />
          )}
          <Icon
            name={icon}
            filled={isActive}
            className={cn(
              'relative text-[22px] transition-all duration-300 ease-swift',
              isActive && 'animate-pop drop-shadow-[0_0_8px_rgb(255_138_0/0.8)]',
            )}
          />
          <span className="relative text-[10px] leading-3 font-semibold tracking-wide">{label}</span>
        </>
      )}
    </NavLink>
  )
}

/** Floating glass dock at the bottom of the screen; the active tab glows orange. */
function BottomNav() {
  return (
    <nav
      aria-label="Primary"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]"
    >
      <div
        className="glass-bar pointer-events-auto stagger mx-auto flex max-w-md animate-enter items-center rounded-[24px] px-2 py-1.5"
        style={{ '--i': 4 }}
      >
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </div>
    </nav>
  )
}

export default BottomNav
