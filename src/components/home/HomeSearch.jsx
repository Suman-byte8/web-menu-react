import { useDeferredValue, useMemo } from 'react'
import { Link } from 'react-router'
import { HERO } from '../../data/site.js'
import { searchAllMenus } from '../../lib/dishes.js'
import { dietLabels, formatPriceRange } from '../../lib/menu.js'
import { EmptyState, Icon } from '../../UI/index.js'
import DietDots from '../menu/DietDots.jsx'
import DishIcon from '../menu/DishIcon.jsx'
import MenuSearch from '../menu/MenuSearch.jsx'

function ResultRow({ result }) {
  return (
    <li>
      <Link
        to={result.href}
        className="group flex items-center gap-3 rounded-2xl p-2 transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-ember"
      >
        <DishIcon icon={result.icon} />
        <div className="min-w-0 flex-1">
          <p className="truncate font-headline text-title-md font-semibold text-white">
            {result.name}
            <span className="sr-only"> ({dietLabels(result.diets)})</span>
          </p>
          <p className="flex items-center gap-1.5 truncate font-body text-label-sm text-smoke">
            <DietDots diets={result.diets} size="sm" />
            <span className="text-honey">{result.menu}</span>· {result.category}
          </p>
        </div>
        <span className="shrink-0 font-headline text-title-md font-bold text-white tabular-nums">
          {formatPriceRange(result.price)}
        </span>
        <Icon name="chevron_right" className="shrink-0 text-[20px] text-smoke group-hover:text-ember" />
      </Link>
    </li>
  )
}

/** Search across the restaurant, bar and in-room menus from the home page. */
function HomeSearch({ query, onQueryChange }) {
  const deferred = useDeferredValue(query)
  const { results, total } = useMemo(() => searchAllMenus(deferred, 20), [deferred])
  const searching = deferred.trim() !== ''

  return (
    <div className="flex flex-col gap-4">
      <MenuSearch value={query} onChange={onQueryChange} placeholder={HERO.searchPlaceholder} />

      {searching &&
        (results.length ? (
          <section aria-label="Search results" className="glass-card animate-rise rounded-[24px] p-2">
            <p className="px-2 pt-1 pb-2 font-body text-label-sm text-smoke" aria-live="polite">
              {total} {total === 1 ? 'match' : 'matches'}
              {total > results.length && ` · showing the first ${results.length}`}
            </p>
            <ul className="flex flex-col">
              {results.map((result) => (
                <ResultRow key={result.id} result={result} />
              ))}
            </ul>
          </section>
        ) : (
          <EmptyState icon="search_off" title="No matches">
            Nothing on our menus matches “{deferred.trim()}”.
          </EmptyState>
        ))}
    </div>
  )
}

export default HomeSearch
