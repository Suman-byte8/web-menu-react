import { cn } from '../../lib/cn.js'
import { Icon } from '../../UI/index.js'

/** Cream tile: white icon square, small uppercase label, bold value. */
function InfoTile({ icon, iconClassName, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-line bg-cream p-3.5">
      <div
        className={cn(
          'flex size-9 shrink-0 items-center justify-center rounded-xl border border-line bg-white',
          iconClassName,
        )}
      >
        <Icon name={icon} className="text-body-lg" />
      </div>
      <div>
        <span className="block font-body text-label-sm uppercase text-muted-olive">{label}</span>
        <span className="font-body text-label-md font-bold">{value}</span>
      </div>
    </div>
  )
}

export default InfoTile
