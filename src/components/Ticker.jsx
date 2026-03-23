import { motion } from 'motion/react'

const ITEMS = ['Color Grading','Photo Retouching','Creative Editing','Skin Perfecting','Cinematic Look','Beauty Shots','Background Removal','Photo Manipulation','Portrait Enhancement']
const DOUBLED = [...ITEMS, ...ITEMS]

export default function Ticker() {
  return (
    <div style={{ overflow: 'hidden', padding: '14px 0', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', background: '#0C0A09' }}>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}
      >
        {DOUBLED.map((item, i) => (
          <span key={i} style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0 }}>
            <span style={{ fontFamily: 'Syne', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#4A4540', padding: '0 28px' }}>
              {item}
            </span>
            <span style={{ color: '#C8A96E', fontSize: 8 }}>◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
