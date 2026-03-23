import { useState, useEffect } from 'react'
import { motion } from 'motion/react'

const LINKS = ['Work', 'Services', 'About', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400
        ${scrolled 
          ? 'bg-[rgba(8,8,8,0.92)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.05)]' 
          : 'bg-transparent backdrop-blur-0 border-none'
        }`}
    >
      <div className="max-w-[1280px] mx-auto px-[8px] md:px-[16px] py-[14px] flex items-center justify-between gap-[8px] min-w-0">

        {/* Logo */}
        <a href="#" className="flex items-center gap-[5px] no-underline flex-shrink-0">
          <img src="/mervlotstudio.png" alt="logo" className="h-[28px] w-[28px] flex-shrink-0" />
          <span className="font-['Syne'] uppercase text-[#C8A96E] text-[clamp(7px,2vw,11px)] tracking-[0.18em] whitespace-nowrap">
            MervlotStudio
          </span>
        </a>

        {/* Nav links */}
        <ul className="flex gap-[clamp(5px,3vw,40px)] list-none  flex-shrink-0">
          {LINKS.map(l => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="font-['Syne'] uppercase text-[#6B6560] no-underline whitespace-nowrap
                           text-[clamp(8px,1.8vw,11px)] tracking-[clamp(0.05em,0.4vw,0.2em)]
                           transition-colors duration-300 hover:text-[#F0EDE8]"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-[6px] flex-shrink-0
                     px-[clamp(10px,1.8vw,20px)] py-[clamp(6px,1vw,10px)]
                     border border-[rgba(200,169,110,0.35)]
                     font-['Syne'] uppercase text-[#C8A96E] no-underline
                     transition-colors duration-300 whitespace-nowrap
                     text-[clamp(8px,1.5vw,11px)] tracking-[0.12em]
                     hover:bg-[rgba(200,169,110,0.1)]"
        >
          Book Session
          <i className="bi bi-arrow-up-right text-[10px]" />
        </a>

      </div>
    </motion.nav>
  )
}
