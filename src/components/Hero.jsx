import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const WORDS = [
  { text: 'FRAME', italic: false, outline: false },
  { text: 'EVERY', italic: true,  outline: false },
  { text: 'STORY.', italic: false, outline: true  },
]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0])

  return (
    <section ref={ref} style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden' }}>

      {/* bg */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0e0b08 0%, #080808 50%, #07060d 100%)' }} />

      {/* dot grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.035, backgroundImage: 'radial-gradient(circle, rgba(200,169,110,0.8) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />

      {/* ghost letters */}
      <div style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', fontFamily: 'Cormorant Garamond', fontWeight: 300, fontStyle: 'italic', fontSize: 'clamp(8rem,20vw,24rem)', color: 'rgba(255,255,255,0.015)', lineHeight: 1, userSelect: 'none', pointerEvents: 'none' }}>
        MS
      </div>

      {/* center top line */}
      <div style={{ position: 'absolute', left: 'calc(50% - 0.5px)', top: 0, width: 1, height: 96, background: 'linear-gradient(to bottom, rgba(200,169,110,0.3), transparent)' }} />

      {/* film grain */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.22, pointerEvents: 'none', zIndex: 1 }}>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {/* parallax content */}
      <motion.div style={{ y, opacity, position: 'relative', zIndex: 2, maxWidth: 1280, margin: '0 auto', padding: '144px 24px 112px', width: '100%' }}>

        {/* eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
          style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48 }}
        >
          <div style={{ width: 40, height: 1, background: '#C8A96E' }} />
          <span style={{ fontFamily: 'Syne', fontSize: 10, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#C8A96E' }}>
            Visual Artistry Studio
          </span>
          <div style={{ width: 40, height: 1, background: '#C8A96E' }} />
        </motion.div>

        {/* title words */}
        <div style={{ marginBottom: 40 }}>
          {WORDS.map(({ text, italic, outline }, i) => (
            <div key={text} style={{ overflow: 'hidden' }}>
              <motion.h1
                initial={{ y: '110%' }} animate={{ y: '0%' }}
                transition={{ duration: 1, delay: 0.5 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  fontFamily: 'Cormorant Garamond',
                  fontWeight: 300,
                  fontSize: 'clamp(4.5rem, 13vw, 13rem)',
                  lineHeight: 0.87,
                  letterSpacing: '-0.02em',
                  fontStyle: italic ? 'italic' : 'normal',
                  color: outline ? 'transparent' : '#F0EDE8',
                  WebkitTextStroke: outline ? '1px rgba(200,169,110,0.55)' : 'none',
                  margin: 0,
                }}
              >
                {text}
              </motion.h1>
            </div>
          ))}
        </div>

        {/* bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.05 }}
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32 }}
        >
          <p style={{ fontFamily: 'DM Sans', fontSize: 14, lineHeight: 1.7, color: '#6B6560', maxWidth: 280 }}>
            Professional photo editing & color grading — transforming raw captures into breathtaking visual narratives.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <a href="#work"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#C8A96E', color: '#080808', padding: '14px 28px', fontFamily: 'Syne', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.background = '#d4b87e'}
              onMouseLeave={e => e.currentTarget.style.background = '#C8A96E'}
            >
              View Work <i className="bi bi-arrow-right" />
            </a>
            <a href="#contact"
              style={{ fontFamily: 'Syne', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6560', textDecoration: 'none', borderBottom: '1px solid rgba(107,101,96,0.3)', paddingBottom: 2, transition: 'color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#F0EDE8'}
              onMouseLeave={e => e.currentTarget.style.color = '#6B6560'}
            >
              Let's Talk
            </a>
          </div>
        </motion.div>

        {/* mini stats */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.4 }}
          style={{ position: 'absolute', right: 24, bottom: 0, display: 'flex', flexDirection: 'column', gap: 28, alignItems: 'flex-end' }}
          className="hidden md:flex"
        >
          {[['500+', 'Projects'], ['200+', 'Clients'], ['5yr', 'Experience']].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: 'Cormorant Garamond', fontSize: 28, fontWeight: 300, color: '#C8A96E' }}>{n}</div>
              <div style={{ fontFamily: 'Syne', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#6B6560' }}>{l}</div>
            </div>
          ))}
        </motion.div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.7 }}
          style={{ position: 'absolute', bottom: 24, left: 24, display: 'flex', alignItems: 'flex-start', gap: 10 }}
        >
          <motion.div
            animate={{ scaleY: [1, 0.5, 1], opacity: [0.7, 0.3, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: 1, height: 56, background: 'linear-gradient(to bottom, rgba(200,169,110,0.7), transparent)' }}
          />
          <span style={{ fontFamily: 'Syne', fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: '#6B6560', writingMode: 'vertical-rl', marginTop: 4 }}>
            Scroll
          </span>
        </motion.div>
      </motion.div>

      {/* bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 112, background: 'linear-gradient(to top, #080808, transparent)', zIndex: 2 }} />
    </section>
  )
}
