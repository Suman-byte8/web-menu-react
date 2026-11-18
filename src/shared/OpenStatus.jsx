import { Dot, Pill } from '../UI/index.js'

function OpenStatus({ isOpen = true }) {
  return (
    <Pill variant="cream">
      <Dot className={isOpen ? 'bg-veg-green' : 'bg-nonveg-red'} />
      <span>{isOpen ? 'Open Now' : 'Closed'}</span>
    </Pill>
  )
}

export default OpenStatus
