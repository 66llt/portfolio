export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-gray-900)',
        overflow: 'hidden',
      }}
    >
      {/* Animated background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 30% 20%, rgba(255,107,107,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(201,177,255,0.12) 0%, transparent 60%), radial-gradient(ellipse at 50% 50%, rgba(135,206,235,0.08) 0%, transparent 50%)',
        }}
      />

      {/* Decorative circles */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '8%',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.05)',
        }}
      />

      {/* Decorative emojis */}
      <div style={{ position: 'absolute', top: '15%', right: '20%', fontSize: '2rem', opacity: 0.3, animation: 'float 6s ease-in-out infinite' }}>💌</div>
      <div style={{ position: 'absolute', bottom: '20%', left: '15%', fontSize: '2rem', opacity: 0.25, animation: 'float 7s ease-in-out infinite', animationDelay: '-3s' }}>🌟</div>

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '80px 40px',
        }}
      >
        {/* Label */}
        <div className="reveal">
          <div
            className="section-label"
            style={{
              justifyContent: 'center',
              color: 'var(--color-coral-light)',
            }}
          >
            <span style={{ background: 'var(--color-coral-light)' }} />
            Contact
          </div>
        </div>

        {/* Big title */}
        <h2
          className="reveal"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 700,
            color: 'var(--color-white)',
            lineHeight: 1.2,
            marginBottom: '16px',
          }}
        >
          期待与你相遇 <span style={{ color: 'var(--color-coral-light)' }}>✨</span>
        </h2>

        <p
          className="reveal"
          style={{
            fontSize: '1.1rem',
            color: 'rgba(255,255,255,0.5)',
            maxWidth: '500px',
            margin: '0 auto 56px',
            lineHeight: 1.8,
          }}
        >
          如果你正在寻找一个懂内容、懂数据、懂品牌的媒介伙伴<br />
          欢迎随时联系我
        </p>

        {/* Contact Cards */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '64px',
          }}
        >
          {[
            {
              icon: '✉️',
              label: '电子邮箱',
              value: 'liulitong1228@163.com',
              href: 'mailto:liulitong1228@163.com',
              gradient: 'linear-gradient(135deg, #FF6B6B, #FFA07A)',
            },
            {
              icon: '📱',
              label: '手机号码',
              value: '18686331997',
              href: 'tel:18686331997',
              gradient: 'linear-gradient(135deg, #C9B1FF, #87CEEB)',
            },
            {
              icon: '📍',
              label: '所在城市',
              value: '广东省广州市',
              href: null,
              gradient: 'linear-gradient(135deg, #98E9D0, #FFD93D)',
            },
          ].map((item) => {
            const CardWrapper = item.href ? 'a' : 'div'
            const cardProps = item.href
              ? { href: item.href, target: item.href.startsWith('mailto') ? undefined : '_blank', rel: 'noopener noreferrer' }
              : {}

            return (
              <CardWrapper
                key={item.label}
                {...cardProps}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '32px 36px',
                  borderRadius: 'var(--card-radius)',
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  minWidth: '220px',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: item.href ? 'pointer' : 'default',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                  e.currentTarget.style.transform = 'translateY(-6px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    background: item.gradient,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.3rem',
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.05em' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>
                  {item.value}
                </div>
              </CardWrapper>
            )
          })}
        </div>

        {/* Footer */}
        <div
          className="reveal"
          style={{
            paddingTop: '48px',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <a
            href="#hero"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.8)',
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => { e.target.style.color = 'var(--color-coral-light)' }}
            onMouseLeave={(e) => { e.target.style.color = 'rgba(255,255,255,0.8)' }}
          >
            Litong<span style={{ color: 'var(--color-coral-light)' }}>.</span>
          </a>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', marginTop: '12px' }}>
            © 2026 刘俐彤 · 个人作品集
          </p>
        </div>
      </div>
    </section>
  )
}
