function IngredientTags({ tags }) {
  return (
    <ul className="flex flex-wrap gap-1.5 font-body text-label-sm font-medium text-mist">
      {tags.map((tag) => (
        <li key={tag} className="tag">
          {tag}
        </li>
      ))}
    </ul>
  )
}

export default IngredientTags
