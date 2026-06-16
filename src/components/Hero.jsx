import { useEffect, useRef } from 'react'

export default function Hero() {
  const titleRef = useRef(null)

  useEffect(() => {
    const el = titleRef.current
    if (el) {
      setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)' }, 200)
    }
  }, [])

  const stats = [
    { value: '950w+', label: '爆款视频播放' },
    { value: '60%', label: 'KOL爆款率' },
    { value: '5A', label: '品牌人群增长' },
  ]

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--color-off-white)',
      }}
    >
      {/* Video Background Placeholder — replace src with your own video */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        {/* Animated gradient background as video placeholder */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(160deg, #FFF0F3 0%, #FFF8F0 30%, #EDE4FF 60%, #E3F4FC 100%)',
            animation: 'pulse 8s ease-in-out infinite',
          }}
        />
        {/* Decorative blobs */}
        <div
          style={{
            position: 'absolute',
            top: '-15%',
            right: '-8%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,107,107,0.15) 0%, transparent 70%)',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            left: '-5%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,177,255,0.18) 0%, transparent 70%)',
            animation: 'float 8s ease-in-out infinite',
            animationDelay: '-3s',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,217,61,0.12) 0%, transparent 70%)',
            animation: 'float 7s ease-in-out infinite',
            animationDelay: '-5s',
          }}
        />
      </div>

      {/* Decorative elements */}
      <div style={{ position: 'absolute', top: '10%', right: '5%', opacity: 0.15, animation: 'float 6s ease-in-out infinite', zIndex: 0 }}>
        <img src="/images/cover-graphic.png" alt="" style={{ width: '280px', height: 'auto' }} />
      </div>
      <div style={{ position: 'absolute', top: '18%', left: '8%', fontSize: '2.5rem', opacity: 0.5, animation: 'float 5s ease-in-out infinite' }}>✨</div>

      {/* Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          paddingTop: '80px',
        }}
      >
        {/* Badge */}
        <div
          ref={titleRef}
          style={{
            opacity: 0,
            transform: 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,107,107,0.2)',
            padding: '8px 20px',
            borderRadius: '50px',
            fontSize: '0.85rem',
            fontWeight: 500,
            color: 'var(--color-coral)',
            marginBottom: '32px',
          }}
        >
          <span style={{ fontSize: '1rem' }}>🪴</span>
          女性私护 · 大健康 · KOL+KOC整合营销
        </div>

        {/* Main Title */}
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 7vw, 6rem)',
            fontWeight: 700,
            color: 'var(--color-gray-900)',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '20px',
          }}
        >
          刘俐彤
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
            color: 'var(--color-gray-500)',
            maxWidth: '620px',
            margin: '0 auto 40px',
            lineHeight: 1.8,
          }}
        >
          专注<span style={{ color: 'var(--color-coral)', fontWeight: 500 }}>女性私护</span>与
          <span style={{ color: 'var(--color-coral)', fontWeight: 500 }}>大健康类目</span>
          ，深耕KOL+KOC整合营销<br />
          兼具甲方转化思维与乙方内容创作能力，打造品牌公域流量入口
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '56px',
          }}
        >
          <a
            href="#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 36px',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: 600,
              color: '#fff',
              background: 'var(--gradient-primary)',
              boxShadow: 'var(--shadow-btn)',
              transition: 'all 0.3s',
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
            查看作品
            <span>→</span>
          </a>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 36px',
              borderRadius: '50px',
              fontSize: '1rem',
              fontWeight: 600,
              color: 'var(--color-gray-700)',
              background: 'rgba(255,255,255,0.8)',
              backdropFilter: 'blur(12px)',
              border: '1.5px solid var(--color-gray-200)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'var(--color-coral)'
              e.target.style.color = 'var(--color-coral)'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'var(--color-gray-200)'
              e.target.style.color = 'var(--color-gray-700)'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            联系我
          </a>
        </div>

        {/* Three Pillars */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}
        >
          {[
            { emoji: '🌸', label: '女性私护KOL种草', desc: '品牌公域流量入口' },
            { emoji: '💊', label: '大健康类目种草', desc: 'KOL+KOC双端口投放' },
            { emoji: '🤝', label: '品牌整合营销', desc: '美博会 · 直播专场 · 全案执行' },
          ].map((pillar) => (
            <div
              key={pillar.label}
              style={{
                background: 'rgba(255,255,255,0.7)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(0,0,0,0.06)',
                borderRadius: 'var(--card-radius-sm)',
                padding: '20px 24px',
                textAlign: 'center',
                minWidth: '180px',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-card)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>{pillar.emoji}</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-gray-800)' }}>{pillar.label}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--color-gray-400)', marginTop: '4px' }}>{pillar.desc}</div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div
          style={{
            display: 'flex',
            gap: '48px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {stats.map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.2rem',
                  fontWeight: 700,
                  color: 'var(--color-gray-900)',
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-gray-400)', marginTop: '4px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '36px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          opacity: 0.5,
        }}
      >
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--color-gray-400)' }}>SCROLL</span>
        <div
          style={{
            width: '1px',
            height: '32px',
            background: 'var(--color-gray-300)',
            borderRadius: '1px',
            animation: 'fadeInUp 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  )
}
