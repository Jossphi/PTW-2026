import { ArrowRight } from './Icons'
import './Impact.css'

const CIRCLES = [
  { value: '+5K', label: 'Asistentes', offset: 185, indent: 215, bordered: true },
  { value: '180+', label: 'Organizaciones', offset: 185, indent: 0 },
  { value: '40', label: 'Sponsors', offset: 0, indent: 327 },
  { value: '88', label: 'Eventos', offset: 185, indent: 428 },
]

export default function Impact() {
  return (
    <section className="impact">
      <div className="impact__intro">
        <div>
          <span className="impact__badge">
            <span className="impact__badge-dot" /> Números
          </span>
          <h2 className="impact__title">Nuestro impacto en números</h2>
        </div>
        <p className="impact__desc">
          Más que estadísticas, son conexiones, oportunidades y crecimiento
          para el ecosistema tecnológico del Perú.
        </p>
        <a className="impact__link" href="#about">
          <span>Conoce más de <strong>PTW26</strong></span>
          <ArrowRight size={24} />
        </a>
      </div>

      <div className="impact__circles">
        {CIRCLES.map((c) => (
          <div
            key={c.label}
            className={`impact__circle${c.bordered ? ' impact__circle--bordered' : ''}`}
            style={{ marginLeft: c.indent, marginTop: c.offset }}
          >
            <span className="impact__circle-value">{c.value}</span>
            <span className="impact__circle-label">{c.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
