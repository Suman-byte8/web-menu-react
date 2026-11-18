function IngredientTags({ tags }) {
  return (
    <ul className="flex flex-wrap gap-1.5 border-t border-cream pt-2 font-body text-label-sm font-medium text-muted-olive">
      {tags.map((tag) => (
        <li key={tag} className="tag">
          {tag}
        </li>
      ))}
    </ul>
  )
}

export default IngredientTags
