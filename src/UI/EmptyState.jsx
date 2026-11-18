import Icon from './Icon.jsx'

function EmptyState({ icon, title, children }) {
  return (
    <div role="status" className="surface-cream px-4 py-10 text-center">
      {icon && <Icon name={icon} className="mb-2 text-display-md-mobile text-soft-gold" />}
      <h4 className="mb-1 font-headline text-title-lg font-bold">{title}</h4>
      {children && <p className="font-body text-body-sm">{children}</p>}
    </div>
  )
}

export default EmptyState
