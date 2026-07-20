import { Menu } from './Icons'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="#top">
        <span className="header__logo-light">PERÚ </span>
        <span className="header__logo-bold">TECH WEEK </span>
        <span className="header__logo-year">2026</span>
      </a>

      <div className="header__actions">
        <a className="header__tickets" href="#entradas">Entradas aquí</a>
        <button className="header__menu" aria-label="Menú">
          <Menu size={24} />
        </button>
      </div>
    </header>
  )
}
