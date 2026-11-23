import { ALL_DIETS, DIETS } from '../../data/diets.js'
import { cn } from '../../lib/cn.js'
import { DietMark } from './DietDots.jsx'

const OPTIONS = [{ id: ALL_DIETS, label: 'All' }, ...Object.entries(DIETS).map(([id, diet]) => ({ id, ...diet }))]

/**
 * Segmented All / Veg / Non-Veg / Other control. The orange highlight
 * slides between the (equal-width) segments.
 */
function DietFilter({ value, onChange }) {
  const index = Math.max(
    0,
    OPTIONS.findIndex((option) => option.id === value),
  )

  return (
    <div
      role="group"
      aria-label="Filter by diet"
      className="relative flex items-center rounded-full border border-white/8 bg-white/5 p-1"
    >
      <span
        aria-hidden="true"
        className="fill-ember absolute inset-y-1 left-1 rounded-full transition-transform duration-300 ease-relaxed motion-reduce:transition-none"
        style={{ width: `calc((100% - 0.5rem) / ${OPTIONS.length})`, transform: `translateX(${index * 100}%)` }}
      />

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
              'relative z-10 flex h-9 flex-1 items-center justify-center gap-1.5 rounded-full font-body text-label-md whitespace-nowrap transition-colors duration-300 ease-swift active:scale-95',
              active ? 'font-bold text-white' : 'text-mist hover:text-white',
            )}
          >
            {isDiet && <DietMark diet={option.id} size="sm" className={cn(active && 'bg-white')} />}
            <span>{option.label}</span>
          </button>
        )
      })}
    </div>
  )
}

export default DietFilter
