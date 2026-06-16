const strengths = [
  {
    icon: '🎯',
    title: '甲方转化思维 + 乙方内容力',
    desc: '兼具甲方品牌转化思维与乙方内容创作能力，从商业目标出发反推内容策略。ENTJ+摩羯座，结果导向，抗压能力强，能同时驾驭策略规划与执行落地。',
    skills: ['甲方思维', '内容创作', '策略规划', '结果导向'],
    gradient: 'linear-gradient(135deg, #FF6B6B, #FFA07A)',
    bg: 'var(--color-coral-soft)',
  },
  {
    icon: '🌸',
    title: '女性私护 & 大健康品类深耕',
    desc: '深度理解女性私护与大健康消费决策路径，擅长用户痛点挖掘与消费洞察。从选题方向、达人结构到搜索链路，构建品类专属内容策略体系。',
    skills: ['女性私护', '大健康类目', '消费洞察', '痛点挖掘'],
    gradient: 'linear-gradient(135deg, #FFB5C5, #FF6B6B)',
    bg: 'var(--color-pink-soft)',
  },
  {
    icon: '🤝',
    title: '品牌整合营销执行',
    desc: '具备美博会、双选会、直播专场等品牌活动的全流程策划与执行能力。从物料筹备、流程对接到现场落地，确保品牌营销活动的完整性与专业性。',
    skills: ['美博会', '直播策划', '全案执行', '流程管控'],
    gradient: 'linear-gradient(135deg, #C9B1FF, #FFB5C5)',
    bg: 'var(--color-lavender-soft)',
  },
  {
    icon: '📊',
    title: '数据驱动决策',
    desc: '熟练运用多平台数据分析工具，持续监测CPM、互动率、转化漏斗等核心指标。输出选题方向、达人结构、搜索链路等策略报告，用数据持续优化投放效能。',
    skills: ['CPM优化', 'ROI分析', '转化漏斗', '策略报告'],
    gradient: 'linear-gradient(135deg, #98E9D0, #87CEEB)',
    bg: 'var(--color-mint-soft)',
  },
  {
    icon: '🤝',
    title: '品牌商务对接',
    desc: '服务珀莱雅、欧莱雅、娇韵诗等一线美妆品牌，熟悉品牌调性与产品卖点提炼。为不同达人定制差异化脚本，实现内容风格与达人调性精准匹配，过审率高。',
    skills: ['品牌调性', '卖点提炼', '达人匹配', '商务沟通'],
    gradient: 'linear-gradient(135deg, #FFB5C5, #FF6B6B)',
    bg: 'var(--color-pink-soft)',
  },
  {
    icon: '🌟',
    title: '账号孵化运营',
    desc: '独立操盘0-1账号孵化与百万级账号冷启动。打造多条千万级播放视频，单月涨粉5w+。3个月实现33w+净增粉，单月稳定承接商单20+条，商单转化率高。',
    skills: ['0-1孵化', '冷启动', '涨粉策略', '商单转化'],
    gradient: 'linear-gradient(135deg, #FFD93D, #FFA07A)',
    bg: 'var(--color-yellow-soft)',
  },
]

export default function Strengths() {
  return (
    <section
      id="strengths"
      style={{
        padding: '120px 0',
        background: 'var(--color-white)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '-8%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,181,197,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Strengths</div>
          <h2 className="section-title">专业能力</h2>
          <p className="section-desc" style={{ margin: '0 auto' }}>
            甲方转化思维 × 乙方内容能力 × 临床医学背景<br />
            三大维度构建核心竞争力
          </p>
        </div>

        {/* Strengths Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
        >
          {strengths.map((s, i) => (
            <div
              key={i}
              className="reveal"
              style={{
                borderRadius: 'var(--card-radius)',
                padding: '36px 28px',
                background: 'var(--color-off-white)',
                border: '1px solid rgba(0,0,0,0.04)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '28px',
                  right: '28px',
                  height: '3px',
                  borderRadius: '0 0 3px 3px',
                  background: s.gradient,
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: s.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.6rem',
                  marginBottom: '20px',
                }}
              >
                {s.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--color-gray-900)',
                  marginBottom: '10px',
                }}
              >
                {s.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.84rem',
                  color: 'var(--color-gray-500)',
                  lineHeight: 1.7,
                  marginBottom: '20px',
                }}
              >
                {s.desc}
              </p>

              {/* Skills tags */}
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {s.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: '0.7rem',
                      padding: '4px 10px',
                      borderRadius: '50px',
                      background: s.bg,
                      color: 'var(--color-gray-600)',
                      fontWeight: 500,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
