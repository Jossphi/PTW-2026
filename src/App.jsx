import Hero from './components/Hero'
import StatsBand from './components/StatsBand'
import Marquee from './components/Marquee'
import Gallery from './components/Gallery'
import Impact from './components/Impact'
import About from './components/About'
import AnchorEvents from './components/AnchorEvents'
import Agenda from './components/Agenda'
import HowItWorks from './components/HowItWorks'
import Sponsors from './components/Sponsors'
import FinalCta from './components/FinalCta'
import Faq from './components/Faq'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="page">
      <Hero />
      <StatsBand />
      <Marquee />
      <Gallery />
      <Impact />
      <About />
      <AnchorEvents />
      <Agenda />
      <HowItWorks />
      <Sponsors />
      <FinalCta />
      <Faq />
      <Footer />
    </div>
  )
}
