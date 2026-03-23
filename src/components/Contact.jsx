import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

const SOCIALS = [
  { icon: 'bi-instagram', label: 'Instagram', handle: '@mervlot_',        url: 'https://www.instagram.com/mervlot_?igsh=MTlycHZ1NGFveTduZA==' },
  { icon: 'bi-tiktok',    label: 'TikTok',    handle: '@mervlotstudio',   url: 'https://www.tiktok.com/@mervlotstudio?_r=1&_t=ZS-94u563YKbYb'  },
  { icon: 'bi-behance',   label: 'Behance',   handle: 'muhammaogunmuy',   url: 'https://www.behance.net/muhammaogunmuy'                         },
]

function SocialCard({ icon, label, handle, url }) {
  const [hov, setHov] = useState(false)
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        padding: '40px 36px', textDecoration: 'none', minHeight: 210,
        background: hov ? '#0e0c0a' : '#0C0A09',
        transition: 'background 0.4s ease',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* bottom accent line */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: hov ? 'rgba(200,169,110,0.3)' : 'transparent', transition: 'background 0.4s' }} />

      {/* top row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div style={{
          width: 52, height: 52,
          border: hov ? '1px solid rgba(200,169,110,0.5)' : '1px solid rgba(255,255,255,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'border-color 0.4s',
        }}>
          <i className={`bi ${icon}`} style={{ fontSize: 20, color: hov ? '#C8A96E' : '#6B6560', transition: 'color 0.4s' }} />
        </div>
        <i className="bi bi-arrow-up-right" style={{
          fontSize: 16,
          color: hov ? '#C8A96E' : '#3A3530',
          transform: hov ? 'translate(3px,-3px)' : 'translate(0,0)',
          transition: 'all 0.4s',
        }} />
      </div>

      {/* bottom */}
      <div>
        <div style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 34, color: hov ? '#F0EDE8' : '#6B6560', marginBottom: 6, transition: 'color 0.4s', lineHeight: 1 }}>
          {label}
        </div>
        <div style={{ fontFamily: 'Syne', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: hov ? '#C8A96E' : '#3A3530', transition: 'color 0.4s' }}>
          {handle}
        </div>
      </div>
    </a>
  )
}

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" style={{ padding: '128px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div ref={ref}>

          {/* eyebrow */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
            <div style={{ width: 28, height: 1, background: '#C8A96E' }} />
            <span style={{ fontFamily: 'Syne', fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#C8A96E' }}>Contact</span>
          </motion.div>

          {/* heading */}
          <motion.h2 initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(3rem,6vw,5.5rem)', lineHeight: 0.88, color: '#F0EDE8', marginBottom: 32 }}>
            Start a<br /><em style={{ color: '#C8A96E' }}>Project</em>
          </motion.h2>

          <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }}
            style={{ fontFamily: 'DM Sans', fontSize: 14, lineHeight: 1.75, color: '#6B6560', marginBottom: 72, maxWidth: 420 }}>
            Ready to elevate your visuals? Reach out on any platform and let's create something extraordinary together.
          </motion.p>

          {/* social cards grid */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 1, background: 'rgba(255,255,255,0.05)' }}
          >
            {SOCIALS.map(s => <SocialCard key={s.label} {...s} />)}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
