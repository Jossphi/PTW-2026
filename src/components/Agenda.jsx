import { useState } from 'react'
import { ArrowRight } from './Icons'
import './Agenda.css'

const DAYS = ['Todas', 'Lunes 12', 'Martes 13', 'Miércoles 14', 'Jueves 15', 'Viernes 16', 'Sábado 17', 'Domingo 18']
const CATEGORIES = ['Todas', 'Inteligencia Aritificial', 'Fintech', 'Web3', 'Corporate', 'Social', 'VC']

const EVENTS = [
  { title: 'Meetup de IA aplicada', tag: 'AI', day: 'Lunes 12' },
  { title: 'Fintech Night', tag: 'Fintech', day: 'Martes 13' },
  { title: 'Desayuno con inversionistas', tag: 'VC', day: 'Miércoles 14' },
  { title: 'Builders de Web3', tag: 'Web3', day: 'Jueves 15' },
  { title: 'Tech por el impacto social', tag: 'Social', day: 'Viernes 16' },
  { title: 'Bienvenida al Perú Tech Week 26', tag: 'Corporate', day: 'Domingo 18' },
]

export default function Agenda() {
  const [day, setDay] = useState('Todas')
  const [cat, setCat] = useState('Todas')

  return (
    <section className="agenda" id="agenda">
      <div className="agenda__head">
        <div className="agenda__head-left">
          <div className="agenda__intro">
            <span className="agenda__badge"><span className="agenda__badge-dot" /> +80 Eventos</span>
            <h2 className="agenda__title">Agenda completa</h2>
          </div>
          <p className="agenda__desc">
            La agencia oficial más de 80 eventos se publica el{' '}
            <span className="is-red">27 de agosto de 2026</span>. Mientras tanto,
            guarda la semana en tu calendario.
          </p>
        </div>
        <div className="agenda__links">
          <a className="pill pill--primary" href="#luma">Revisa la agenda en Luma <ArrowRight size={24} /></a>
          <a className="agenda__link-ghost" href="#eventos">Todos los eventos <ArrowRight size={24} /></a>
        </div>
      </div>

      <div className="agenda__tabs">
        {DAYS.map((d) => (
          <button
            key={d}
            className={`agenda__tab${day === d ? ' is-active' : ''}`}
            onClick={() => setDay(d)}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="agenda__filters">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            className={`agenda__filter${cat === c ? ' is-active' : ''}`}
            onClick={() => setCat(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="agenda__grid">
        {EVENTS.map((e) => (
          <article className="event-card" key={e.title}>
            <div className="event-card__media">
              <span className="event-card__tag">{e.tag}</span>
            </div>
            <div className="event-card__body">
              <span className="event-card__day">{e.day}</span>
              <h3 className="event-card__title">{e.title}</h3>
              <a className="event-card__cta" href="#registro">
                Regístrate <ArrowRight size={20} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
