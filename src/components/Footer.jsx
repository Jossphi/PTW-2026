import { Calendar } from './Icons'
import './Footer.css'

const NAV = ['About', 'Agenda', 'Eventos ancla', 'Organiza tu evento', 'FAQ']
const INFO = [
  { label: 'Soporte' },
  { label: 'Privacidad' },
  { label: 'Términos y condiciones' },
  { label: 'Trabaja con nosotros', href: 'https://transtotalperu.com/unete-al-equipo/' },
  { label: 'Libro de reclamaciones' },
]

const SOCIALS = [
  { name: 'X', path: 'M4 4l16 16M20 4L4 20' },
  { name: 'Instagram', path: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM17.5 6.5h.01' },
  { name: 'LinkedIn', path: 'M6 9v9M6 6v.01M11 18v-5a2 2 0 0 1 4 0v5M11 9v9M18 18v-4a3 3 0 0 0-3-3' },
  { name: 'YouTube', path: 'M3 8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8zM10 9.5l5 2.5-5 2.5v-5z' },
  { name: 'TikTok', path: 'M14 4v9.5a3.5 3.5 0 1 1-3.5-3.5M14 7a4 4 0 0 0 4 4' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <div className="footer__brand-head">
            <p className="footer__logo">
              <span className="footer__logo-light">PERÚ </span>
              <span className="footer__logo-bold">TECH WEEK </span>
              <span className="footer__logo-year">2026</span>
            </p>
            <p className="footer__tagline">
              La semana que conecta el ecosistema tech en Perú 🇵🇪
            </p>
          </div>
          <div className="footer__date">
            <Calendar size={32} />
            <div className="footer__date-text">
              <span className="footer__date-label">FECHA</span>
              <span className="footer__date-value">del 12 al 18 Oct.</span>
            </div>
          </div>
        </div>

        <div className="footer__cols">
          <nav className="footer__col">
            <h4 className="footer__col-title">Navega</h4>
            <ul className="footer__links">
              {NAV.map((l) => (
                <li key={l}><a href="#top">{l}</a></li>
              ))}
            </ul>
          </nav>

          <nav className="footer__col">
            <h4 className="footer__col-title">Más información</h4>
            <ul className="footer__links">
              {INFO.map((l) => (
                <li key={l.label}>
                  {l.href
                    ? <a href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                    : <a href="#top">{l.label}</a>}
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__col footer__col--actions">
            <div className="footer__socials">
              {SOCIALS.map((s) => (
                <a key={s.name} className="footer__social" href="#top" aria-label={s.name}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
            <a className="footer__tickets" href="#entradas">Entradas aquí</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__divider" />
        <p className="footer__copy">© 2026 Perú Tech Week. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
