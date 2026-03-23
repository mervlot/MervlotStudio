const SOCIALS = [
  { icon: 'bi-instagram', label: 'Instagram', url: 'https://www.instagram.com/mervlot_?igsh=MTlycHZ1NGFveTduZA==' },
  { icon: 'bi-tiktok',    label: 'TikTok',    url: 'https://www.tiktok.com/@mervlotstudio?_r=1&_t=ZS-94u563YKbYb'  },
  { icon: 'bi-behance',   label: 'Behance',   url: 'https://www.behance.net/muhammaogunmuy'                         },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '40px 0', background: '#0C0A09' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>

        {/* logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src="/mervlotstudio.png" alt="logo" style={{ height: 28, width: 28 }} />
          <span style={{ fontFamily: 'Syne', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C8A96E' }}>MervlotStudio</span>
        </div>

        {/* copyright */}
        <p style={{ fontFamily: 'Syne', fontSize: 9, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#3A3530', margin: 0 }}>
          © {new Date().getFullYear()} MervlotStudio. All rights reserved.
        </p>

        {/* socials */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {SOCIALS.map(({ icon, label, url }) => (
            <a key={label} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}
              style={{ color: '#3A3530', textDecoration: 'none', fontSize: 15, transition: 'color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#C8A96E'}
              onMouseLeave={e => e.currentTarget.style.color = '#3A3530'}
            >
              <i className={`bi ${icon}`} />
            </a>
          ))}
        </div>

      </div>
    </footer>
  )
}
