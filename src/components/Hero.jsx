import { useEffect, useState } from 'react'
import Header from './Header'
import { ArrowRight, Calendar, Location } from './Icons'
import './Hero.css'

// Cuenta regresiva al inicio del evento (12 Oct 2026)
const EVENT_DATE = new Date('2026-10-12T09:00:00-05:00')

function useCountdown(target) {
  const [diff, setDiff] = useState(() => target - new Date())
  useEffect(() => {
    const id = setInterval(() => setDiff(target - new Date()), 1000)
    return () => clearInterval(id)
  }, [target])

  const clamp = Math.max(diff, 0)
  const pad = (n) => String(n).padStart(2, '0')
  return {
    days: pad(Math.floor(clamp / 86400000)),
    hours: pad(Math.floor((clamp / 3600000) % 24)),
    minutes: pad(Math.floor((clamp / 60000) % 60)),
    seconds: pad(Math.floor((clamp / 1000) % 60)),
  }
}

export default function Hero() {
  const t = useCountdown(EVENT_DATE)

  return (
    <section className="hero" id="top">
      <div className="hero__bg" />
      <div className="hero__overlay" />

      <Header />

      {/* Fecha / Lugar */}
      <div className="hero__meta">
        <div className="hero__meta-item hero__meta-item--divider">
          <Calendar size={32} />
          <div className="hero__meta-text">
            <span className="hero__meta-label">FECHA</span>
            <span className="hero__meta-value">del 12 al 18 Oct.</span>
          </div>
        </div>
        <div className="hero__meta-item">
          <Location size={32} />
          <div className="hero__meta-text">
            <span className="hero__meta-label">LUGAR</span>
            <span className="hero__meta-value">Lima, Perú</span>
          </div>
        </div>
      </div>

      {/* Título */}
      <div className="hero__title">
        <span className="hero__title-1">La semana más importante de</span>
        <span className="hero__title-2">Innovación, Tecnología y Startups del Perú</span>
      </div>

      {/* Subtítulo */}
      <p className="hero__subtitle">
        La semana más importante de innovación, tecnología, startups e
        inteligencia artificial del Perú&nbsp;🇵🇪.
      </p>

      {/* Countdown */}
      <div className="hero__countdown">
        <div className="hero__count-numbers">
          {t.days} : {t.hours} : {t.minutes} : {t.seconds}
        </div>
        <div className="hero__count-labels">
          <span>DÍAS</span>
          <span>HORAS</span>
          <span className="is-red">MINUTOS</span>
          <span className="is-red">SEGUNDOS</span>
        </div>
      </div>

      {/* Botones */}
      <div className="hero__cta">
        <a className="pill pill--primary" href="#registro">
          Regístrate <ArrowRight size={24} />
        </a>
        <a className="pill pill--outline" href="#sponsor">
          Ser Sponsor <ArrowRight size={24} />
        </a>
        <a className="pill pill--ghost hero__cta-underline" href="#voluntario">
          Ser voluntario <ArrowRight size={24} />
        </a>
      </div>
    </section>
  )
}
