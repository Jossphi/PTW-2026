import { ArrowRight } from './Icons'
import './HowItWorks.css'

function IconSpeaker() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 9v6h4l5 4V5L8 9H4z" /><path d="M17 8a5 5 0 0 1 0 8M19.5 6a8 8 0 0 1 0 12" />
    </svg>
  )
}
function IconUsers() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0M16 6a3 3 0 0 1 0 6M18 20a6 6 0 0 0-3-5.2" />
    </svg>
  )
}
function IconShield() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" /><path d="M9 12l2 2 4-4" />
    </svg>
  )
}

const STEPS = [
  { n: '01', icon: <IconSpeaker />, title: 'Postula tu evento', desc: 'Cuéntanos qué quieres organizar: charla, hackathon, meetup o networking.' },
  { n: '02', icon: <IconUsers />, title: 'El comité lo aprueba', desc: 'Tu evento se incluye en el calendario oficial de la semana.' },
  { n: '03', icon: <IconShield />, title: 'Recibes apoyo', desc: 'Difusión, logo y recursos de marca, Luma como co-host, directorio de proveedores y capacitaciones.' },
]

const HASHTAGS = [
  { t: '#hackathons', x: '55%', y: '8%', r: 0 },
  { t: '#meetups', x: '32%', y: '18%', r: -9 },
  { t: '#Webinars', x: '10%', y: '30%', r: -39 },
  { t: '#networking', x: '62%', y: '38%', r: 0 },
  { t: '#talleres', x: '38%', y: '46%', r: 0 },
  { t: '#Charlas', x: '6%', y: '52%', r: 0 },
  { t: '#conferencias', x: '58%', y: '62%', r: 0 },
]

export default function HowItWorks() {
  return (
    <section className="how" id="organiza">
      <div className="how__head">
        <span className="how__badge"><span className="how__badge-dot" /> Para organizadores</span>
        <h2 className="how__title">¿Cómo funciona la agenda oficial?</h2>
      </div>

      <div className="how__body">
        <div className="how__visual">
          {HASHTAGS.map((h) => (
            <span key={h.t} className="how__chip"
              style={{ left: h.x, top: h.y, transform: `rotate(${h.r}deg)` }}>
              {h.t}
            </span>
          ))}
        </div>

        <div className="how__steps">
          <a className="pill pill--primary how__cta" href="#postula">
            Organiza tu evento <ArrowRight size={24} />
          </a>
          {STEPS.map((s) => (
            <div className="how__step" key={s.n}>
              <div className="how__step-icon">{s.icon}</div>
              <div className="how__step-text">
                <span className="how__step-num">{s.n}</span>
                <h3 className="how__step-title">{s.title}</h3>
                <p className="how__step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
