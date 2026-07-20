import { ArrowRight } from './Icons'
import './About.css'

const TAGS = ['#Charlas', '#hackathons', '#meetups', '#networking']

function PlayIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="1.4" />
      <path d="M10 9l5 3-5 3V9z" fill="#fff" />
    </svg>
  )
}

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__side">
        <span className="about__badge">
          <span className="about__badge-dot" /> About
        </span>
        <div className="about__tags">
          {TAGS.map((t) => (
            <span className="about__tag" key={t}>{t}</span>
          ))}
        </div>
      </div>

      <div className="about__main">
        <div className="about__head">
          <h2 className="about__title">
            ¿Qué es Peru <span className="is-red">Tech Week?</span>
          </h2>
          <div className="about__body">
            <p>
              Perú Tech Week reúne durante una semana a startups, comunidades y
              empresas para impulsar la innovación mediante charlas, hackathons,
              meetups y espacios de networking.
            </p>
            <p className="about__body-muted">
              Una semana de innovación, tecnología y networking que conecta a
              quienes construyen el futuro del ecosistema startup peruano.
            </p>
          </div>
          <a className="about__faqs" href="#faqs">
            Leer las FAQS <ArrowRight size={24} />
          </a>
        </div>

        <div className="about__media">
          <div className="about__media-img" />
          <button className="about__play" aria-label="Ver video">
            <PlayIcon />
          </button>
        </div>
      </div>
    </section>
  )
}
