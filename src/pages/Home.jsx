import Navbar      from '../components/Navbar'
import Hero        from '../components/Hero'
import Ticker      from '../components/Ticker'
import Services    from '../components/Services'
import Portfolio   from '../components/Portfolio'
import BeforeAfter from '../components/BeforeAfter'
import Stats       from '../components/Stats'
import About       from '../components/About'
import Contact     from '../components/Contact'
import Footer      from '../components/Footer'

export default function Home() {
  return (
    <div style={{ background: '#080808', color: '#F0EDE8', overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Ticker />
      <Services />
      <Portfolio />
      <BeforeAfter />
      <Stats />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
