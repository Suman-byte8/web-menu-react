import { useFavourite } from '../../hooks/useFavourite.js'
import { cn } from '../../lib/cn.js'
import { Icon } from '../../UI/index.js'

/** Floating heart; turns red when saved. The choice is remembered on this device. */
function FavouriteButton({ dishId, dishName }) {
  const [isFavourite, toggle] = useFavourite(dishId)

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isFavourite}
      aria-label={isFavourite ? `Remove ${dishName} from favourites` : `Add ${dishName} to favourites`}
      className={cn(
        'flex size-11 shrink-0 items-center justify-center rounded-full transition-all duration-300 ease-relaxed active:scale-90',
        isFavourite ? 'bg-nonveg shadow-[0_6px_22px_-4px_rgb(240_72_62/0.8)]' : 'glass',
      )}
    >
      <Icon name="favorite" filled className={cn('text-[21px] transition-transform', isFavourite ? 'scale-110 text-white' : 'text-white/90')} />
    </button>
  )
}

export default FavouriteButton
