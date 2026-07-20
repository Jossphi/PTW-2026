import { useState } from 'react'
import './Faq.css'

const FAQS = [
  '¿Cómo me registro al Perú Tech Week 2025?',
  '¿Qué tipo de charlas y talleres habrá?',
  '¿El evento es gratuito o tiene algún costo?',
  '¿Cómo se elige a los speakers?',
  '¿Dónde se realizará el evento?',
  '¿Puedo proponer una charla o actividad?',
  '¿Habrá zonas de comida o debo llevar algo?',
  '¿Habrá inversionistas presentes?',
  '¿Hay estacionamiento disponible?',
  '¿Puedo asistir con mi equipo o empresa?',
  '¿Se puede asistir de manera virtual?',
  '¿En qué idioma se dictan las charlas?',
]

const ANSWER =
  'Pronto compartiremos todos los detalles. Mantente atento a nuestros canales oficiales para más información sobre el Perú Tech Week 2026.'

function FaqItem({ q }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq__item${open ? ' is-open' : ''}`}>
      <button className="faq__q" onClick={() => setOpen((o) => !o)}>
        <span>{q}</span>
        <span className="faq__icon" aria-hidden="true">{open ? '–' : '+'}</span>
      </button>
      {open && <p className="faq__a">{ANSWER}</p>}
    </div>
  )
}

export default function Faq() {
  const mid = Math.ceil(FAQS.length / 2)
  const cols = [FAQS.slice(0, mid), FAQS.slice(mid)]
  return (
    <section className="faq" id="faqs">
      <div className="faq__head">
        <span className="faq__badge"><span className="faq__badge-dot" /> FAQ</span>
        <h2 className="faq__title">¿Tienes dudas?</h2>
      </div>
      <div className="faq__cols">
        {cols.map((col, i) => (
          <div className="faq__col" key={i}>
            {col.map((q) => <FaqItem key={q} q={q} />)}
          </div>
        ))}
      </div>
    </section>
  )
}
