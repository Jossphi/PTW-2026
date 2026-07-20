import { ArrowRight, Calendar, Location } from './Icons'
import './FinalCta.css'

export default function FinalCta() {
  return (
    <section className="final-cta">
      <div className="final-cta__inner">
        <h2 className="final-cta__title">
          Vamos a transformar el <span className="is-red">ecosistema Tech</span> en el Perú.
        </h2>

        <div className="final-cta__meta">
          <div className="final-cta__meta-item">
            <Calendar size={32} />
            <div className="final-cta__meta-text">
              <span className="final-cta__meta-label">FECHA</span>
              <span className="final-cta__meta-value">del 12 al 18 Oct.</span>
            </div>
          </div>
          <div className="final-cta__meta-item">
            <Location size={32} />
            <div className="final-cta__meta-text">
              <span className="final-cta__meta-label">LUGAR</span>
              <span className="final-cta__meta-value">Lima, Perú</span>
            </div>
          </div>
        </div>

        <a className="pill pill--primary final-cta__btn" href="#agenda">
          Ver agenda <ArrowRight size={24} />
        </a>
      </div>
    </section>
  )
}
