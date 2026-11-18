import { Icon } from '../../UI/index.js'

function DishIngredients({ ingredients }) {
  if (!ingredients.length) return null

  return (
    <section className="flex flex-col gap-3 rounded-3xl border border-line bg-white p-5 shadow-xs">
      <div className="flex items-center justify-between border-b border-cream pb-2">
        <h2 className="flex items-center gap-1.5 font-headline text-title-lg font-bold">
          <Icon name="eco" className="text-body-lg text-soft-gold" />
          <span>Authentic Ingredients</span>
        </h2>
        <span className="font-mono text-label-sm text-muted-olive">Kitchen Fresh</span>
      </div>

      <ul className="flex flex-wrap gap-2">
        {ingredients.map((ingredient) => (
          <li
            key={ingredient}
            className="inline-flex items-center gap-1 rounded-xl border border-line bg-cream px-3 py-1.5 font-body text-label-md font-medium"
          >
            <Icon name="check_circle" className="text-body-sm text-soft-gold" />
            {ingredient}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default DishIngredients
