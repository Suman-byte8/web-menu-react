import { ALL_DIETS, DIETS } from '../../data/diets.js'
import { cn } from '../../lib/cn.js'
import { Dot } from '../../UI/index.js'

const OPTIONS = [
  { id: ALL_DIETS, label: 'All' },
  ...Object.entries(DIETS).map(([id, diet]) => ({ id, ...diet })),
]

/** Segmented All / Veg / Non-Veg / Other control. */
function DietFilter({ value, onChange }) {
  return (
    <div
      role="group"
      aria-label="Filter by diet"
      className="mt-2.5 flex items-center justify-between gap-1 border-t border-cream pt-2"
    >
      {OPTIONS.map((option) => {
        const active = option.id === value
        const isDiet = option.id !== ALL_DIETS

        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.id)}
            className={cn(
              'flex flex-1 items-center justify-center gap-1 rounded-full border px-2 py-1.5 font-body text-label-sm whitespace-nowrap transition-all duration-200 ease-swift',
              isDiet ? cn('uppercase', option.filterBorder) : 'border-transparent',
              active ? 'bg-deep-charcoal text-white' : 'bg-cream text-deep-charcoal',
            )}
          >
            {isDiet && <Dot className={option.dot} />}
            <span>{option.label}</span>
          </button>
        )
      })}
    </div>
  )
}

export default DietFilter
