import { ArrowRight, Calendar, Location } from './Icons'
import './AnchorEvents.css'

const EVENTS = [
  { title: 'KickOff welcome partty', day: 'Lunes 12', time: '09:00 AM - 09:30 AM', place: 'Tech House Barranco', note: 'Acceso Libre + Wifi Gratis' },
  { title: 'Perú Bussines Fest 2026', day: 'Miércoles 14', time: '09:00 AM - 06:00 PM', place: 'Casona estilo Wynwood', note: '8:00 am a 8:00 pm todos los días' },
  { title: 'Techsuyo', day: 'Viernes 16', time: '10:00 AM - 08:00 PM', place: 'Tech House Barranco', note: 'Acceso Libre + Wifi Gratis' },
  { title: 'Meetup de IA aplicada', day: 'Domingo 18', time: '05:00 PM - 09:00 PM', place: 'Casona estilo Wynwood', note: 'Acceso Libre + Wifi Gratis' },
]

export default function AnchorEvents() {
  return (
    <section className="anchor" id="eventos-ancla">
      <div className="anchor__head">
        <span className="anchor__badge"><span className="anchor__badge-dot" /> Agenda destacada</span>
        <h2 className="anchor__title">Eventos ancla del 2026</h2>
        <p className="anchor__desc">
          Cuatro eventos ancla confirmados (vs uno del año pasado), más la
          bienvenida, el cierre y el Tech abierto toda la semana.
        </p>
        <p className="anchor__tagline">Vamos a transformar el ecosistema Tech en el Perú.</p>
      </div>

      <div className="anchor__grid">
        {EVENTS.map((e) => (
          <article className="anchor-card" key={e.title}>
            <div className="anchor-card__media">
              <span className="anchor-card__day">{e.day}</span>
            </div>
            <div className="anchor-card__body">
              <h3 className="anchor-card__title">{e.title}</h3>
              <div className="anchor-card__meta">
                <span><Calendar size={20} /> {e.time}</span>
                <span><Location size={20} /> {e.place}</span>
              </div>
              <span className="anchor-card__note">{e.note}</span>
              <div className="anchor-card__actions">
                <a className="pill pill--primary anchor-card__btn" href="#registro">
                  Regístrate <ArrowRight size={20} />
                </a>
                <a className="anchor-card__ghost" href="#agenda">
                  Ver agenda <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
