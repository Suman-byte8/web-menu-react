import { ImageOverlay } from '../../UI/index.js'

function FeaturedDish({ image, alt, label, title }) {
  return (
    <ImageOverlay
      src={image}
      alt={alt}
      scrim="strong"
      className="h-44 rounded-2xl border border-line shadow-sm"
    >
      <div className="absolute inset-0 flex items-end p-3.5">
        <div>
          <span className="text-eyebrow mb-1 inline-block rounded bg-black/60 px-2 py-0.5 font-bold text-white">
            {label}
          </span>
          <p className="font-headline text-title-lg font-bold text-white">{title}</p>
        </div>
      </div>
    </ImageOverlay>
  )
}

export default FeaturedDish
