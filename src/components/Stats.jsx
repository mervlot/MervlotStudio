import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'motion/react'

const STATS = [
  { value: 500, suffix: '+',  label: 'Projects Completed' },
  { value: 200, suffix: '+',  label: 'Happy Clients'      },
  { value: 5,   suffix: 'yr', label: 'Of Experience'      },
  { value: 100, suffix: '%',  label: 'Satisfaction Rate'  },
]

function CountUp({ target, suffix, active }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!active) return
    const STEPS = 55, DURATION = 2000, INC = target / STEPS
    let cur = 0
    const id = setInterval(() => {
      cur = Math.min(cur + INC, target)
      setN(Math.floor(cur))
      if (cur >= target) clearInterval(id)
    }, DURATION / STEPS)
    return () => clearInterval(id)
  }, [active, target])
  return <>{n}{suffix}</>
}

export default function Stats() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', background: '#0C0A09' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 1, background: 'rgba(255,255,255,0.05)' }}
          className="md:grid-cols-4">
          {STATS.map(({ value, suffix, label }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              style={{ background: '#0C0A09', padding: '56px 32px', textAlign: 'center' }}
            >
              <div style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(2.8rem,5vw,4rem)', color: '#C8A96E', marginBottom: 12 }}>
                <CountUp target={value} suffix={suffix} active={inView} />
              </div>
              <div style={{ fontFamily: 'Syne', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#6B6560' }}>
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
