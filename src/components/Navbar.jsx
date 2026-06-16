import { useState, useEffect } from 'react'

const navLinks = [
  { label: '关于我', href: '#about' },
  { label: '精选项目', href: '#projects' },
  { label: '专业能力', href: '#strengths' },
  { label: '联系方式', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.25rem',
            fontWeight: 700,
            color: scrolled ? 'var(--color-gray-900)' : 'var(--color-gray-900)',
            letterSpacing: '-0.02em',
            transition: 'color 0.3s',
          }}
        >
          Litong<span style={{ color: 'var(--color-coral)' }}>.</span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--color-gray-700)',
                position: 'relative',
                padding: '4px 0',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--color-coral)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--color-gray-700)')}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--color-white)',
              background: 'var(--gradient-primary)',
              padding: '10px 24px',
              borderRadius: '50px',
              transition: 'all 0.3s',
              boxShadow: 'var(--shadow-btn)',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)'
              e.target.style.boxShadow = '0 8px 28px rgba(255,107,107,0.40)'
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)'
              e.target.style.boxShadow = 'var(--shadow-btn)'
            }}
          >
            联系我
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            fontSize: '1.6rem',
            color: 'var(--color-gray-800)',
            padding: '4px',
          }}
          className="mobile-toggle"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(20px)',
            padding: '24px 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            borderBottom: '1px solid var(--color-gray-100)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--color-gray-700)', padding: '8px 0' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
