import { BRAND } from '../../data/site.js'

function BrandNote() {
  return (
    <div className="surface-cream p-5 text-center">
      <p className="font-headline text-title-lg italic">&ldquo;{BRAND.quote}&rdquo;</p>
      <p className="mt-1 font-body text-body-sm">{BRAND.note}</p>
    </div>
  )
}

export default BrandNote
