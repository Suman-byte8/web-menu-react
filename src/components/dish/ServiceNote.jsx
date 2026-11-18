import { Icon } from '../../UI/index.js'

function ServiceNote({ children }) {
  return (
    <div className="flex items-start gap-2.5 rounded-2xl border border-line bg-white p-3.5">
      <Icon name="info" className="mt-0.5 shrink-0 text-body-lg text-soft-gold" />
      <p className="font-body text-body-sm leading-relaxed text-pretty">{children}</p>
    </div>
  )
}

export default ServiceNote
