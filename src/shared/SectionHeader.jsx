/** Section title with eyebrow, subtitle and an optional right-hand slot. */
function SectionHeader({ eyebrow, title, subtitle, aside }) {
  return (
    <div className="flex items-end justify-between gap-3">
      <div>
        {eyebrow && <span className="text-eyebrow mb-1 block text-ember">{eyebrow}</span>}
        <h2 className="heading-section">{title}</h2>
        {subtitle && <p className="mt-0.5 font-body text-body-sm text-smoke">{subtitle}</p>}
      </div>
      {aside}
    </div>
  )
}

export default SectionHeader
