import Icon from './Icon.jsx'

function EmptyState({ icon, title, children }) {
  return (
    <div role="status" className="glass-card flex flex-col items-center rounded-3xl px-6 py-12 text-center">
      {icon && (
        <span className="mb-4 flex size-16 items-center justify-center rounded-full bg-ember/10 text-ember shadow-[0_0_40px_-8px_rgb(255_138_0/0.5)]">
          <Icon name={icon} className="text-[30px]" />
        </span>
      )}
      <h2 className="mb-1 font-headline text-title-lg text-white">{title}</h2>
      {children && <p className="max-w-xs font-body text-body-sm text-mist">{children}</p>}
    </div>
  )
}

export default EmptyState
