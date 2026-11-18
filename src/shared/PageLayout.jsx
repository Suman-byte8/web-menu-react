import { cn } from '../lib/cn.js'

/**
 * Page shell: textured background, the page's header and a centred column.
 * `withDock` leaves room at the bottom for the fixed bottom navigation.
 */
function PageLayout({ header, mainClassName = 'gap-6', withDock = true, children }) {
  return (
    <div
      className={cn(
        'paper-texture min-h-screen bg-warm-ivory text-deep-charcoal antialiased',
        withDock ? 'pb-28' : 'pb-16',
      )}
    >
      {header}
      <main className={cn('app-container flex flex-col pt-4', mainClassName)}>{children}</main>
    </div>
  )
}

export default PageLayout
