import { Link } from 'react-router'
import { cn } from '../../lib/cn.js'
import { dietLabels, formatPriceRange, noteIcon } from '../../lib/menu.js'
import { Icon } from '../../UI/index.js'
import DietDots from './DietDots.jsx'
import DishThumb from './DishThumb.jsx'
import PriceOptions from './PriceOptions.jsx'

/**
 * Upright glass dish card: photo on top, then name, description, versions,
 * price and an orange arrow button. With `href` the whole card is a link;
 * without it the caller wraps it (menu cards link through DishCard).
 *   price  { min, max }    diets  ['veg', ...]    highlight  { label }
 */
function DishTile({ href, name, image, placeholder, diets, price, description, options, highlight, className }) {
  const card = (
    <article className="glass-card relative flex h-full flex-col rounded-[22px] p-2">
      <div className="relative">
        <DishThumb image={image} alt={name} placeholder={placeholder} size="fill" />
        <span className="glass absolute top-2 left-2 flex rounded-lg p-1.5">
          <DietDots diets={diets} size="sm" />
        </span>
        {highlight && (
          <span className="glass absolute bottom-2 left-2 flex items-center gap-1 rounded-full px-2 py-0.5 font-body text-label-sm text-white">
            <Icon name={noteIcon(highlight.label)} filled className="text-[13px] text-ember" />
            {highlight.label}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-1.5 pt-2.5 pb-1">
        <h3 className="line-clamp-2 font-headline text-title-md font-semibold text-white">
          {name}
          <span className="sr-only"> ({dietLabels(diets)})</span>
        </h3>
        {description && <p className="mt-1 line-clamp-2 font-body text-body-sm text-pretty text-smoke">{description}</p>}
        <PriceOptions options={options} className="mt-2" />

        <div className="mt-auto flex items-center justify-between gap-2 pt-2.5">
          <span className="font-headline text-title-md font-bold whitespace-nowrap text-white tabular-nums">
            {formatPriceRange(price)}
          </span>
          <span className="fill-ember flex size-8 shrink-0 items-center justify-center rounded-[10px] transition-transform duration-300 ease-swift group-hover:scale-110">
            <Icon name="arrow_forward" className="text-[17px]" />
          </span>
        </div>
      </div>
    </article>
  )

  if (!href) return card

  return (
    <Link
      to={href}
      className={cn(
        'pressable group relative block rounded-[22px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember',
        className,
      )}
    >
      {card}
    </Link>
  )
}

export default DishTile
