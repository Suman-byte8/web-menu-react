import { cn } from '../lib/cn.js'

/** Page shell: textured background, the page's header and a centred column. */
function PageLayout({ header, mainClassName = 'gap-6', children }) {
  return (
    <div className="paper-texture min-h-screen bg-warm-ivory pb-28 text-deep-charcoal antialiased">
      {header}
      <main className={cn('app-container flex flex-col pt-4', mainClassName)}>{children}</main>
    </div>
  )
}

export default PageLayout
