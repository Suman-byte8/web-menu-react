/** Section title with subtitle and an optional right-hand slot. */
function SectionHeader({ title, subtitle, aside }) {
  return (
    <div className="flex items-center justify-between px-1">
      <div>
        <h2 className="heading-section">{title}</h2>
        {subtitle && <p className="font-body text-body-sm text-muted-olive">{subtitle}</p>}
      </div>
      {aside}
    </div>
  )
}

export default SectionHeader
