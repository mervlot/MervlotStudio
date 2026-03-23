import { useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const PROJECTS = [
  { id: 1, img: '/2.jpg', title: 'Portrait Series',   category: 'Beauty Retouching' },
  { id: 2, img: '/5.jpg', title: 'Fashion Editorial', category: 'Color Grading'     },
  { id: 3, img: '/3.jpg', title: 'Urban Landscape',   category: 'Cinematic Grade'   },
  { id: 4, img: '/4.jpg', title: 'Product Campaign',  category: 'Commercial Edit'   },
]

function Slide({ project }) {
  const [hov, setHov] = useState(false)

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/5', cursor: 'pointer' }}
    >
      <img
        src={project.img}
        alt={project.title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hov ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.7s ease' }}
      />

      {/* overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.88) 0%, rgba(8,8,8,0.15) 50%, transparent 100%)', opacity: hov ? 1 : 0.4, transition: 'opacity 0.5s' }} />

      {/* info */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 28, transform: hov ? 'translateY(0)' : 'translateY(8px)', opacity: hov ? 1 : 0.6, transition: 'all 0.45s ease' }}>
        <span style={{ fontFamily: 'Syne', fontSize: 9, letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C8A96E', display: 'block', marginBottom: 6 }}>
          {project.category}
        </span>
        <h4 style={{ fontFamily: 'Cormorant Garamond', fontSize: 26, fontWeight: 300, color: '#F0EDE8', margin: 0 }}>
          {project.title}
        </h4>
      </div>

      {/* corner brackets */}
      <div style={{ position: 'absolute', top: 16, right: 16, width: 20, height: 20, borderTop: '1px solid rgba(200,169,110,0.6)', borderRight: '1px solid rgba(200,169,110,0.6)', opacity: hov ? 1 : 0, transition: 'opacity 0.4s' }} />
      <div style={{ position: 'absolute', bottom: 16, left: 16, width: 20, height: 20, borderBottom: '1px solid rgba(200,169,110,0.6)', borderLeft: '1px solid rgba(200,169,110,0.6)', opacity: hov ? 1 : 0, transition: 'opacity 0.4s' }} />

      {/* index */}
      <div style={{ position: 'absolute', top: 16, left: 16, fontFamily: 'Syne', fontSize: 10, letterSpacing: '0.2em', color: hov ? 'rgba(200,169,110,0.7)' : 'rgba(240,237,232,0.25)', transition: 'color 0.3s' }}>
        {String(project.id).padStart(2, '0')}
      </div>
    </div>
  )
}

export default function Portfolio() {
  const titleRef = useRef(null)
  const inView   = useInView(titleRef, { once: true, margin: '-80px' })

  return (
    <section id="work" style={{ padding: '128px 0', background: '#0C0A09' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* header */}
        <div ref={titleRef} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, marginBottom: 64 }}>
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }}
              style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <div style={{ width: 28, height: 1, background: '#C8A96E' }} />
              <span style={{ fontFamily: 'Syne', fontSize: 10, letterSpacing: '0.32em', textTransform: 'uppercase', color: '#C8A96E' }}>Selected Work</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontFamily: 'Cormorant Garamond', fontWeight: 300, fontSize: 'clamp(3rem,6vw,5.5rem)', lineHeight: 0.88, color: '#F0EDE8', margin: 0 }}>
              The<br /><em style={{ color: '#C8A96E' }}>Portfolio</em>
            </motion.h2>
          </div>
          <motion.a href="/gallery" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'Syne', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6560', textDecoration: 'none', transition: 'color 0.3s' }}
            onMouseEnter={e => e.currentTarget.style.color = '#C8A96E'}
            onMouseLeave={e => e.currentTarget.style.color = '#6B6560'}
          >
            All Projects <i className="bi bi-arrow-right" />
          </motion.a>
        </div>

        {/* Swiper slider */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <style>{`
            .portfolio-swiper .swiper-button-next,
            .portfolio-swiper .swiper-button-prev {
              color: #C8A96E;
              width: 44px;
              height: 44px;
              border: 1px solid rgba(200,169,110,0.3);
              background: rgba(8,8,8,0.7);
              backdrop-filter: blur(8px);
              transition: background 0.3s;
            }
            .portfolio-swiper .swiper-button-next:hover,
            .portfolio-swiper .swiper-button-prev:hover {
              background: rgba(200,169,110,0.12);
            }
            .portfolio-swiper .swiper-button-next::after,
            .portfolio-swiper .swiper-button-prev::after {
              font-size: 13px;
              font-weight: 700;
            }
            .portfolio-swiper .swiper-pagination-bullet {
              background: #6B6560;
              opacity: 1;
              width: 6px;
              height: 6px;
            }
            .portfolio-swiper .swiper-pagination-bullet-active {
              background: #C8A96E;
              width: 24px;
              border-radius: 3px;
            }
          `}</style>
          <Swiper
            className="portfolio-swiper"
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            spaceBetween={12}
            slidesPerView={1}
            breakpoints={{
              640:  { slidesPerView: 2, spaceBetween: 12 },
              1024: { slidesPerView: 3, spaceBetween: 12 },
            }}
            style={{ paddingBottom: 48 }}
          >
            {PROJECTS.map(p => (
              <SwiperSlide key={p.id}>
                <Slide project={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
