import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

const SERVICES = [
  { num: '01', icon: 'bi-palette2',    title: 'Color Grading',        desc: 'Transform mood and atmosphere with precision color work. From cinematic LUTs to bespoke grades — every hue intentional, every tone purposeful.', tags: ['LUT Creation','Tone Mapping','Color Science'] },
  { num: '02', icon: 'bi-stars',       title: 'Photo Retouching',     desc: 'Flawless skin, perfect light, impeccable detail. Retouching that enhances without erasing the soul of the image.',                                  tags: ['Skin Retouching','Frequency Sep','Dodge & Burn'] },
  { num: '03', icon: 'bi-layers-half', title: 'Creative Compositing', desc: "Seamless photo manipulations that push the boundary between what's real and imagined. Every composite tells a story.",                            tags: ['Photo Manipulation','Background Art','Light Effects'] },
]

function Card({ svc, index }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hov, setHov] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 70 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative', padding: 32, background: '#0C0A09', overflow: 'hidden', cursor: 'default',
        border: hov ? '1px solid rgba(200,169,110,0.2)' : '1px solid rgba(255,255,255,0.05)',
        transition: 'border-color 0.4s',
      }}
    >
      {/* ghost num */}
      <span style={{ position: 'absolute', top: 12, right: 20, fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(5rem,8vw,7rem)', lineHeight: 1, color: 'rgba(255,255,255,0.025)', userSelect: 'none', pointerEvents: 'none' }}>
        {svc.num}
      </span>

      {/* icon */}
      <div style={{ width: 48, height: 48, border: hov ? '1px solid rgba(200,169,110,0.5)' : '1px solid rgba(200,169,110,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 32, transition: 'border-color 0.4s' }}>
        <i className={`bi ${svc.icon}`} style={{ color: '#C8A96E', fontSize: 18 }} />
      </div>

      <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: 32, fontWeight: 300, color: '#F0EDE8', marginBottom: 16, lineHeight: 1.15 }}>{svc.title}</h3>
      <p style={{ fontFamily: 'DM Sans', fontSize: 14, lineHeight: 1.7, color: '#6B6560', marginBottom: 32 }}>{svc.desc}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {svc.tags.map(t => (
          <span key={t} style={{ fontFamily: 'Syne', fontSize: 9, letterSpacing: '0.16em', textTransform: 'uppercase', color: hov ? 'rgba(200,169,110,0.6)' : '#5A5550', border: hov ? '1px solid rgba(200,169,110,0.2)' : '1px solid rgba(255,255,255,0.06)', padding: '4px 12px', transition: 'all 0.4s' }}>
            {t}
          </span>
        ))}
      </div>

      <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 8, color: '#C8A96E', opacity: hov ? 1 : 0, transition: 'opacity 0.35s' }}>
        <span style={{ fontFamily: 'Syne', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Explore</span>
        <i className="bi bi-arrow-right" style={{ fontSize: 11 }} />
      </div>

      {/* bottom line */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: hov ? 'rgba(200,169,110,0.25)' : 'transparent', transition: 'background 0.4s' }} />
    </motion.div>
  )
}

export default function Services() {
  const titleRef = useRef(null)
  const inView   = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="services" style={{ padding: '128px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        <div ref={titleRef} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 40, marginBottom: 80 }}>
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}
              style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <div style={{ width: 28, height: 1, background: '#C8A96E' }} />
              <span style={{ fontFamily: 'Syne', fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#C8A96E' }}>What I Do</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(3rem,6vw,5.5rem)', lineHeight: 0.88, color: '#F0EDE8', margin: 0 }}>
              Services<br /><em style={{ color: '#C8A96E' }}>&amp; Craft</em>
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }}
            style={{ fontFamily: 'DM Sans', fontSize: 14, lineHeight: 1.7, color: '#6B6560', maxWidth: 280 }}>
            Every pixel refined. Every tone considered. Elevating imagery from captured to crafted.
          </motion.p>
        </div>

        {/* grid with 1px gap as separator */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, background: 'rgba(255,255,255,0.05)' }}>
          {SERVICES.map((svc, i) => <Card key={svc.num} svc={svc} index={i} />)}
        </div>
      </div>
    </section>
  )
}
