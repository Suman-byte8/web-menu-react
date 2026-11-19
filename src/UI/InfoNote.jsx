import Icon from './Icon.jsx'

/** White note with an info icon, for service and policy messages. */
function InfoNote({ icon = 'info', children }) {
  return (
    <div className="flex items-start gap-2.5 rounded-2xl border border-line bg-white p-3.5">
      <Icon name={icon} className="mt-0.5 shrink-0 text-body-lg text-soft-gold" />
      <p className="font-body text-body-sm leading-relaxed text-pretty">{children}</p>
    </div>
  )
}

export default InfoNote
