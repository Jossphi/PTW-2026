import { ArrowRight } from './Icons'
import './Gallery.css'

// Collage de fotos (placeholders con gradiente). Sustituir por /public/img/gallery-N.jpg
const PHOTOS = [
  { span: 'tall' }, { span: 'wide' }, { span: 'normal' },
  { span: 'normal' }, { span: 'tall' }, { span: 'wide' },
]

export default function Gallery() {
  return (
    <section className="gallery" id="galeria">
      <div className="gallery__head">
        <div className="gallery__intro">
          <span className="gallery__badge"><span className="gallery__badge-dot" /> Galery</span>
          <h2 className="gallery__title">Lo mejor del Perú Tech Week del 2025</h2>
          <p className="gallery__subtitle">
            La semana más importante de innovación, tecnología, startups e
            inteligencia artificial del Perú&nbsp;🇵🇪.
          </p>
        </div>
        <a className="pill pill--primary" href="#fotos">
          Ver todas las fotos <ArrowRight size={24} />
        </a>
      </div>

      <div className="gallery__grid">
        {PHOTOS.map((p, i) => (
          <div key={i} className={`gallery__photo gallery__photo--${p.span}`} />
        ))}
      </div>
    </section>
  )
}
