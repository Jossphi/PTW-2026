import { ArrowRight } from './Icons'
import './Sponsors.css'

const TIERS = [
  {
    name: 'PLATINO', red: true, size: 'lg',
    logos: ['Dribbble', 'Webflow', 'Lottiefiles', 'Dribbble', 'Webflow', 'Lottiefiles'],
  },
  {
    name: 'ORO', size: 'md',
    logos: ['Dribbble', 'Webflow', 'Lottiefiles', 'Lottiefiles'],
  },
  {
    name: 'PLATA', size: 'sm',
    logos: ['Dribbble', 'Webflow', 'Lottiefiles', 'Lottiefiles', 'Lottiefiles',
            'Dribbble', 'Webflow', 'Lottiefiles', 'Lottiefiles', 'Lottiefiles'],
  },
]

export default function Sponsors() {
  return (
    <section className="sponsors" id="sponsors">
      <div className="sponsors__head">
        <div className="sponsors__intro">
          <span className="sponsors__badge"><span className="sponsors__badge-dot" /> Sponsors o partners</span>
          <h2 className="sponsors__title">Marcas que impulsan la semana.</h2>
          <p className="sponsors__desc">
            Exposición ante <strong>+20,000 profesionales</strong> del ecosistema
            tech, VC e innovación del Perú y acceso a la red de tech weeks de LATAM
          </p>
        </div>
        <a className="sponsors__link" href="#ser-sponsor">
          Ser Sponsor en PTW 26 <ArrowRight size={24} />
        </a>
      </div>

      <div className="sponsors__tiers">
        {TIERS.map((tier) => (
          <div className="sponsors__tier" key={tier.name}>
            <h3 className={`sponsors__tier-name${tier.red ? ' is-red' : ''}`}>{tier.name}</h3>
            <div className={`sponsors__logos sponsors__logos--${tier.size}`}>
              {tier.logos.map((logo, i) => (
                <div className={`sponsors__logo sponsors__logo--${tier.size}`} key={i}>
                  <span>{logo}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
