import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'motion/react'

const TOOLS = ['Adobe Lightroom','Capture One','Photoshop','DaVinci Resolve','Luminar Neo','Affinity Photo']

export default function About() {
  const ref        = useRef(null)
  const inView     = useInView(ref, { once: true, margin: '-80px' })
  const imgWrapRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: imgWrapRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <section id="about" style={{ padding: '128px 0', background: '#0C0A09' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 80, alignItems: 'center' }}>

          {/* text */}
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}
              style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
              <div style={{ width: 28, height: 1, background: '#C8A96E' }} />
              <span style={{ fontFamily: 'Syne', fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#C8A96E' }}>About</span>
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(2.8rem,5vw,5rem)', lineHeight: 0.88, color: '#F0EDE8', marginBottom: 32 }}>
              Crafting<br /><em style={{ color: '#C8A96E' }}>Visual</em><br />Excellence
            </motion.h2>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 }}
              style={{ fontFamily: 'DM Sans', fontSize: 14, lineHeight: 1.75, color: '#6B6560', marginBottom: 20 }}>
              With over 5 years of professional photo editing, MervlotStudio has built a reputation for transformative work. Every edit tells a story — shaping light, refining tone, and crafting the invisible into something unforgettable.
            </motion.p>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}
              style={{ fontFamily: 'DM Sans', fontSize: 14, lineHeight: 1.75, color: '#6B6560', marginBottom: 48 }}>
              From fashion editorials to commercial campaigns, the approach remains consistent: technical precision in service of artistic vision.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.4 }}>
              <p style={{ fontFamily: 'Syne', fontSize: 9, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#6B6560', marginBottom: 16 }}>
                Tools &amp; Software
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {TOOLS.map(t => (
                  <span key={t}
                    style={{ fontFamily: 'Syne', fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(200,169,110,0.65)', border: '1px solid rgba(200,169,110,0.2)', padding: '6px 12px', cursor: 'default', transition: 'all 0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#C8A96E'; e.currentTarget.style.borderColor = 'rgba(200,169,110,0.5)' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(200,169,110,0.65)'; e.currentTarget.style.borderColor = 'rgba(200,169,110,0.2)' }}
                  >{t}</span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* image */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}>
            {/* offset frame */}
            <div style={{ position: 'absolute', top: -16, right: -16, width: '100%', height: '100%', border: '1px solid rgba(200,169,110,0.12)', zIndex: 0 }} />

            <div ref={imgWrapRef} style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/5', zIndex: 1 }}>
              <motion.img src="/3.jpg" alt="About"
                style={{ width: '100%', objectFit: 'cover', height: '110%', marginTop: '-5%', y: imgY }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(200,169,110,0.03)' }} />
            </div>

            {/* floating badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'absolute', bottom: -28, left: -28, background: '#080808', border: '1px solid rgba(255,255,255,0.08)', padding: 20, zIndex: 10 }}
            >
              <div style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 36, color: '#C8A96E', marginBottom: 4 }}>5+</div>
              <div style={{ fontFamily: 'Syne', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#6B6560' }}>Years of Craft</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
