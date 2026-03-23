import { useRef, useState, useCallback } from 'react'
import { motion, useInView } from 'motion/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const SETS = [
  { id: 'A', label: 'Portrait Retouch',  before: '/A1.jpg', after: '/A2.jpg' },
  { id: 'B', label: 'Fashion Grade',     before: '/B1.jpg', after: '/B2.jpg' },
  { id: 'C', label: 'Skin Perfecting',   before: '/C1.jpg', after: '/C2.jpg' },
  { id: 'D', label: 'Cinematic Grade',   before: '/D1.jpg', after: '/D2.jpg' },
  { id: 'E', label: 'Beauty Editorial',  before: '/E1.jpg', after: '/E2.jpg' },
  { id: 'F', label: 'Commercial Edit',   before: '/F1.jpg', after: '/F2.jpg' },
]

function CompareSlider({ set, index }) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  const move = useCallback((clientX) => {
    if (!containerRef.current) return
    const { left, width } = containerRef.current.getBoundingClientRect()
    setPos(Math.max(2, Math.min(98, ((clientX - left) / width) * 100)))
  }, [])

  return (
    <section ref={sectionRef} style={{ padding: '64px 0' }}>
      <div style={{ maxWidth: 400, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          ref={containerRef}
          onMouseDown={() => { dragging.current = true }}
          onMouseMove={e => { if (dragging.current) move(e.clientX) }}
          onMouseUp={() => { dragging.current = false }}
          onMouseLeave={() => { dragging.current = false }}
          onTouchStart={() => { dragging.current = true }}
          onTouchMove={e => { if (dragging.current) move(e.touches[0].clientX) }}
          onTouchEnd={() => { dragging.current = false }}
          style={{
            position: 'relative',
            overflow: 'hidden',
            aspectRatio: '4/5',
            border: '1px solid rgba(255,255,255,0.06)',
            cursor: 'col-resize',
            userSelect: 'none',
            touchAction: 'pan-y',
          }}
        >
          {/* AFTER */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <img src={set.after} alt="After" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute', top: 16, right: 16,
              fontFamily: 'Syne', fontSize: 10, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: '#F0EDE8',
              background: 'rgba(8,8,8,0.75)', backdropFilter: 'blur(8px)',
              padding: '6px 12px'
            }}>After</div>
          </div>

          {/* BEFORE */}
          <div style={{
            position: 'absolute', inset: 0,
            clipPath: `inset(0 ${100 - pos}% 0 0)`
          }}>
            <img src={set.before} alt="Before" style={{
              width: '100%', height: '100%', objectFit: 'cover',
              filter: 'saturate(0.2) brightness(0.8) contrast(1.05)'
            }} />
            <div style={{
              position: 'absolute', top: 16, left: 16,
              fontFamily: 'Syne', fontSize: 10, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: '#F0EDE8',
              background: 'rgba(8,8,8,0.75)', backdropFilter: 'blur(8px)',
              padding: '6px 12px'
            }}>Before</div>
          </div>

          {/* divider */}
          <div style={{
            position: 'absolute', top: 0, bottom: 0, width: 2,
            background: '#C8A96E', left: `${pos}%`, pointerEvents: 'none'
          }}>
            {/* handle */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)', width: 44, height: 44,
              borderRadius: '50%', background: '#C8A96E',
              boxShadow: '0 0 24px rgba(200,169,110,0.6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <i className="bi bi-arrows-expand" style={{ color: '#080808', fontSize: 14, transform: 'rotate(90deg)', display: 'block' }} />
            </div>
          </div>
        </motion.div>

        {/* label */}
        <motion.p
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            marginTop: 16, textAlign: 'center',
            fontFamily: 'Syne', fontSize: 10, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: '#3A3530'
          }}
        >
          <i className="bi bi-hand-index" style={{ marginRight: 8 }} />Drag to compare
        </motion.p>
      </div>
    </section>
  )
}

export default function Gallery() {
  return (
    <div style={{ background: '#080808', color: '#F0EDE8', minHeight: '100vh' }}>
      <Navbar />

      <section style={{ maxWidth: 1280, margin: '0 auto', padding: '160px 24px 80px' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}
        >
          <div style={{ width: 28, height: 1, background: '#C8A96E' }} />
          <span style={{ fontFamily: 'Syne', fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#C8A96E' }}>
            Before / After Gallery
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(3rem,7vw,6rem)', lineHeight: 0.88, color: '#F0EDE8', margin: 0 }}
        >
          The<br /><em style={{ color: '#C8A96E' }}>Transformations</em>
        </motion.h1>
      </section>

      <div style={{ height: 1, background: 'rgba(255,255,255,0.05)' }} />

      <section>
        {SETS.map((set, i) => <CompareSlider key={set.id} set={set} index={i} />)}
      </section>

      <Footer />
    </div>
  )
}