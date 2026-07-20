import './Marquee.css'

export default function Marquee() {
  const items = ['conecta', 'construye', 'inspira']
  const row = Array.from({ length: 6 }).flatMap(() => items)
  return (
    <section className="marquee" aria-hidden="true">
      <div className="marquee__track marquee__track--a">
        {row.map((w, i) => (
          <span key={i} className="marquee__item">
            {w} <span className="marquee__dot">.</span>
          </span>
        ))}
      </div>
      <div className="marquee__track marquee__track--b">
        {row.map((w, i) => (
          <span key={i} className="marquee__item marquee__item--outline">
            {w} <span className="marquee__dot">.</span>
          </span>
        ))}
      </div>
    </section>
  )
}
