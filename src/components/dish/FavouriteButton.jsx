import { useFavourite } from '../../hooks/useFavourite.js'
import { cn } from '../../lib/cn.js'
import { Icon } from '../../UI/index.js'

/** Heart toggle in the header; the choice is remembered on this device. */
function FavouriteButton({ dishId, dishName }) {
  const [isFavourite, toggle] = useFavourite(dishId)

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isFavourite}
      aria-label={isFavourite ? `Remove ${dishName} from favourites` : `Add ${dishName} to favourites`}
      className="icon-button"
    >
      <Icon
        name="favorite"
        filled={isFavourite}
        className={cn('text-body-lg', isFavourite ? 'text-nonveg-red' : 'text-deep-charcoal')}
      />
    </button>
  )
}

export default FavouriteButton
