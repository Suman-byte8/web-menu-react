import { BRAND } from '../../data/site.js'
import { Icon } from '../../UI/index.js'

function BrandNote() {
  return (
    <div className="glass-card reveal relative overflow-hidden rounded-[28px] p-6 text-center">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-16 mx-auto size-48 animate-breathe rounded-full bg-ember/15 blur-3xl"
      />
      <Icon name="format_quote" filled className="text-[28px] text-ember" />
      <p className="mt-1 font-headline text-title-lg text-balance text-white">{BRAND.quote}</p>
      <p className="mt-1.5 font-body text-body-sm text-smoke">{BRAND.note}</p>
    </div>
  )
}

export default BrandNote
