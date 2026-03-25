import { useRef, useState, useCallback } from 'react'
import { motion, useInView } from 'motion/react'

export default function BeforeAfter({ beforeSrc, afterSrc, title = "The Difference", caption }) {
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
    <section ref={sectionRef} style={{ padding: '128px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48 }}
        >
          <h2 style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(2rem,6vw,4rem)', color: '#F0EDE8', margin: 0 }}>
            {title.split(' ')[0]}<br /><em style={{ color: '#C8A96E' }}>{title.split(' ').slice(1).join(' ')}</em>
          </h2>
          {caption && <p style={{ fontFamily: 'DM Sans', fontSize: 14, lineHeight: 1.7, color: '#6B6560', maxWidth: 400 }}>{caption}</p>}
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          ref={containerRef}
          onMouseDown={() => dragging.current = true}
          onMouseMove={e => dragging.current && move(e.clientX)}
          onMouseUp={() => dragging.current = false}
          onMouseLeave={() => dragging.current = false}
          onTouchStart={() => dragging.current = true}
          onTouchMove={e => dragging.current && move(e.touches[0].clientX)}
          onTouchEnd={() => dragging.current = false}
          style={{
            position: 'relative',
            overflow: 'hidden',
            aspectRatio: '16/7',
            border: '1px solid rgba(255,255,255,0.06)',
            cursor: 'col-resize',
            userSelect: 'none',
            touchAction: 'pan-y',
          }}
        >
          {/* AFTER */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <img src={afterSrc} alt="After" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
            <img src={beforeSrc} alt="Before" style={{
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

          {/* Divider + Handle */}
          <div style={{
            position: 'absolute', top: 0, bottom: 0, width: 2,
            background: '#C8A96E', left: `${pos}%`, pointerEvents: 'none'
          }}>
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)', width: 44, height: 44,
              borderRadius: '50%', background: '#C8A96E',
              boxShadow: '0 0 24px rgba(200,169,110,0.6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <i className="bi bi-arrows-expand" style={{ color: '#080808', fontSize: 14, transform: 'rotate(90deg)' }} />
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
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