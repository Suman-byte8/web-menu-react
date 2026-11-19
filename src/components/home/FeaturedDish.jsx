import { Link } from 'react-router'
import { Icon, ImageOverlay } from '../../UI/index.js'

/** Home page spotlight photo; links to the dish page when `href` is given. */
function FeaturedDish({ image, alt, label, title, href }) {
  const card = (
    <ImageOverlay src={image} alt={alt} scrim="strong" className="group h-44 rounded-2xl border border-line shadow-sm">
      <div className="absolute inset-0 flex items-end justify-between gap-3 p-3.5">
        <div>
          <span className="text-eyebrow mb-1 inline-block rounded bg-black/60 px-2 py-0.5 font-bold text-white">
            {label}
          </span>
          <p className="font-headline text-title-lg font-bold text-white">{title}</p>
        </div>
        {href && (
          <Icon
            name="arrow_forward"
            className="shrink-0 text-body-lg text-white transition-transform duration-200 ease-swift group-hover:translate-x-0.5"
          />
        )}
      </div>
    </ImageOverlay>
  )

  if (!href) return card

  return (
    <Link to={href} className="block rounded-2xl">
      {card}
    </Link>
  )
}

export default FeaturedDish
