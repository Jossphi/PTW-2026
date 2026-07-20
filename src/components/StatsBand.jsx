import './StatsBand.css'

const STATS = [
  { value: '+5,000', label: 'Asistentes únicos' },
  { value: '+80', label: 'Eventos' },
  { value: '+200', label: 'Inversionistas' },
  { value: '+100', label: 'Speakers' },
]

export default function StatsBand() {
  return (
    <section className="stats-band">
      <div className="stats-band__row">
        {STATS.map((s) => (
          <div className="stats-band__item" key={s.label}>
            <span className="stats-band__value">{s.value}</span>
            <span className="stats-band__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
