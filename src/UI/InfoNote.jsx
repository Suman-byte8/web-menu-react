import Icon from './Icon.jsx'

/** Glass note with an amber icon, for service and policy messages. */
function InfoNote({ icon = 'info', children }) {
  return (
    <div className="glass-card flex items-start gap-3 rounded-2xl p-4">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-ember/12 text-ember">
        <Icon name={icon} className="text-body-lg" />
      </span>
      <p className="font-body text-body-sm leading-relaxed text-pretty text-mist">{children}</p>
    </div>
  )
}

export default InfoNote
