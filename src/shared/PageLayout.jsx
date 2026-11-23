import { cn } from '../lib/cn.js'

/**
 * Page shell: ambient lit background, the page's header and a centred column.
 *   mainClassName  gap and top padding of the column (replaces the default)
 *   withDock       leaves room at the bottom for the floating navigation
 */
function PageLayout({ header, mainClassName = 'gap-6 pt-4', withDock = true, children }) {
  return (
    <div
      className={cn(
        'relative min-h-screen text-white antialiased',
        withDock ? 'pb-[calc(env(safe-area-inset-bottom)+7rem)]' : 'pb-16',
      )}
    >
      <div aria-hidden="true" className="ambient pointer-events-none fixed inset-0 -z-10" />
      {header}
      <main className={cn('app-container flex flex-col', mainClassName)}>{children}</main>
    </div>
  )
}

export default PageLayout
