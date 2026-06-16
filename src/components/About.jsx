export default function About() {
  const stats = [
    { value: '950w+', label: '爆款视频播放', desc: '携心动投递员nana打造爆款视频' },
    { value: '60%', label: 'KOL爆款率', desc: '头部/腰部KOL合作爆款率远超行业均值' },
    { value: '5A人群', label: '品牌人群增长', desc: '有效带动「体绪」品牌5A人群显著增长' },
    { value: '33w+', label: '单月净增粉', desc: '3个月冷启动实现账号高速增长' },
  ]

  const brands = ['珀莱雅', '欧莱雅', '娇韵诗', '亿活布拉氏酵母菌']

  return (
    <section
      id="about"
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
          top: '-30%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,228,224,0.3) 0%, transparent 70%)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="reveal" style={{ marginBottom: '60px' }}>
          <div className="section-label">About Me</div>
          <h2 className="section-title">关于我</h2>
          <p className="section-desc">
            暨南大学护理学背景，兼具甲方转化思维与乙方内容创作能力<br />
            ENTJ · 摩羯座 · 结果导向 · 深耕女性私护与大健康类目
          </p>
        </div>

        {/* Main Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '380px 1fr',
            gap: '48px',
            alignItems: 'start',
          }}
        >
          {/* Left - Avatar Card */}
          <div className="reveal" style={{ position: 'sticky', top: '100px' }}>
            <div
              style={{
                background: 'var(--gradient-warm)',
                borderRadius: 'var(--card-radius)',
                padding: '40px 32px',
                textAlign: 'center',
                border: '1px solid rgba(0,0,0,0.04)',
              }}
            >
              {/* Avatar placeholder */}
              <div
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  margin: '0 auto 24px',
                  background: 'linear-gradient(135deg, var(--color-coral-soft), var(--color-lavender-soft))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3.5rem',
                  border: '4px solid white',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                🧸
              </div>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px', color: 'var(--color-gray-900)' }}>
                刘俐彤
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-coral)', fontWeight: 500, marginBottom: '16px' }}>
                女性私护 · 大健康 · KOL+KOC整合营销
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', lineHeight: 1.7, marginBottom: '24px' }}>
                暨南大学 · 护理学 · 全日制本科<br />
                籍贯吉林省 · 现居广东省广州市<br />
                23岁 · 汉族 · ENTJ · 摩羯座
              </p>

              {/* Contact Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a
                  href="mailto:liulitong1228@163.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '10px 16px',
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: 'var(--color-white)',
                    background: 'var(--gradient-primary)',
                    transition: 'all 0.3s',
                  }}
                >
                  <span>✉️</span> liulitong1228@163.com
                </a>
                <a
                  href="tel:18686331997"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '10px 16px',
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: 'var(--color-gray-600)',
                    background: 'var(--color-white)',
                    border: '1.5px solid var(--color-gray-200)',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => { e.target.style.borderColor = 'var(--color-coral)'; e.target.style.color = 'var(--color-coral)' }}
                  onMouseLeave={(e) => { e.target.style.borderColor = 'var(--color-gray-200)'; e.target.style.color = 'var(--color-gray-600)' }}
                >
                  <span>📱</span> 18686331997
                </a>
              </div>

              {/* Self-evaluation */}
              <div style={{ marginTop: '28px', textAlign: 'left' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-gray-400)', letterSpacing: '0.1em', marginBottom: '10px', textTransform: 'uppercase' }}>
                  自我评价
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    '具备甲方转化思维 & 乙方内容创作能力',
                    'ENTJ + 摩羯座，结果导向，抗压能力强',
                    '内容体系搭建 · 用户痛点探索 · 脚本撰写 · 策略优化',
                  ].map((item, i) => (
                    <li
                      key={i}
                      style={{
                        fontSize: '0.78rem',
                        color: 'var(--color-gray-600)',
                        lineHeight: 1.5,
                        paddingLeft: '16px',
                        position: 'relative',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: '8px',
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: 'var(--color-coral)',
                          opacity: 0.5,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brands */}
              <div style={{ marginTop: '28px' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--color-gray-400)', letterSpacing: '0.1em', marginBottom: '10px', textTransform: 'uppercase' }}>
                  合作品牌
                </p>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  {brands.map((b) => (
                    <span
                      key={b}
                      style={{
                        fontSize: '0.78rem',
                        padding: '4px 14px',
                        borderRadius: '50px',
                        background: 'var(--color-white)',
                        border: '1px solid var(--color-gray-200)',
                        color: 'var(--color-gray-600)',
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Timeline & Data */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Stats Cards */}
            <div
              className="reveal"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '16px',
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  style={{
                    background: 'var(--color-off-white)',
                    borderRadius: 'var(--card-radius-sm)',
                    padding: '24px 20px',
                    textAlign: 'center',
                    border: '1px solid rgba(0,0,0,0.04)',
                    transition: 'all 0.3s',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-4px)'
                    e.target.style.boxShadow = 'var(--shadow-card)'
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = 'none'
                  }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-coral)', marginBottom: '4px' }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-gray-800)', marginBottom: '4px' }}>
                    {s.label}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--color-gray-400)', lineHeight: 1.5 }}>
                    {s.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Experience Timeline */}
            {[
              {
                period: '2026.02 - 至今',
                company: '青木科技股份有限公司',
                role: '媒介执行 · 女性私护品类整合营销',
                highlights: [
                  '独立负责私护品类「体绪」KOL种草/短直种草，携手心动投递员nana打造950w+播放爆款视频，打开品牌公域流量入口',
                  '负责「体绪」竞价投流、Videolive、FeedsLive全链路投放执行，搭建内容种草→流量加热→直播收割闭环',
                  '有效带动「体绪」品牌5A人群显著增长，联动达播端、KOC端完成流量闭环收割，提升用户沉淀与生意转化效能',
                  '协助珂蔓朵完成美博会、双选会全流程筹备，协助李静×Olga×产品负责人直播专场策划与落地执行',
                ],
                color: '#FF6B6B',
                bg: 'var(--color-coral-soft)',
              },
              {
                period: '2025.09 - 2026.02',
                company: '深圳康哲药业有限公司',
                role: '达人投放 · OTC健康消费品KOL+KOC',
                highlights: [
                  '主导OTC健康消费品KOL+KOC双端口投放，搭建「内容种草→广告投流→搜索转化」全链路营销闭环',
                  '合作医路向前巍子(39.9w👍)、马超医生(32.6w👍)、天眼科学(7.1w👍)等头部/腰部KOL，爆款率60%，CPM<300',
                  '建立KOC规模化种草SOP，打造低粉爆文案例并复刻多条（全科雅丽医生2.6w👍），验证低成本高爆发内容模型',
                  '负责亿活布拉氏酵母菌项目，运用品牌星图、抖店罗盘、生意参谋等工具持续优化投放效能',
                ],
                color: '#C9B1FF',
                bg: 'var(--color-lavender-soft)',
              },
              {
                period: '2024.06 - 2025.08',
                company: '广州医视信息科技有限公司',
                role: '新媒体运营 · 女性变美赛道账号孵化',
                highlights: [
                  '独立操盘皮肤科叶医生账号，聚焦女性变美/护肤内调，打造多条千万级播放视频，单月涨粉5w+',
                  '3个月内实现皮肤科李茜主任33w+净增粉，单月承接商单20+条，商单转化率高',
                  '精通抖音/小红书算法逻辑，利用千瓜、飞瓜等工具拆解爆款元素并跨账号复制',
                  '具备策划-拍摄-剪辑全流程能力，深耕女性消费内容方法论',
                ],
                color: '#98E9D0',
                bg: 'var(--color-mint-soft)',
              },
              {
                period: '2025.06 - 2026.02',
                company: '杭州陆离文化传播有限公司',
                role: '兼职脚本写手（美妆商单）',
                highlights: [
                  '为珀莱雅、欧莱雅、娇韵诗等一线美妆品牌撰写商务脚本，熟悉品牌调性与产品卖点提炼，内容过审率高',
                  '服务七哥好忙、来杯冷尹、鹿不肉等淘宝逛逛达人，根据不同账号风格定制差异化脚本',
                ],
                color: '#FFA07A',
                bg: 'var(--color-peach-light)',
              },
            ].map((exp, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  display: 'flex',
                  gap: '20px',
                  padding: '28px 32px',
                  background: 'var(--color-off-white)',
                  borderRadius: 'var(--card-radius-sm)',
                  border: '1px solid rgba(0,0,0,0.04)',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.boxShadow = 'var(--shadow-card)'
                  e.target.style.transform = 'translateX(4px)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.boxShadow = 'none'
                  e.target.style.transform = 'translateX(0)'
                }}
              >
                {/* Timeline dot + line */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: exp.color,
                      boxShadow: `0 0 0 6px ${exp.bg}`,
                      marginTop: '6px',
                    }}
                  />
                  {i < 3 && (
                    <div
                      style={{
                        width: '2px',
                        flex: 1,
                        background: 'var(--color-gray-200)',
                        marginTop: '8px',
                      }}
                    />
                  )}
                </div>

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: 'inline-block',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: exp.color,
                      background: exp.bg,
                      padding: '3px 12px',
                      borderRadius: '50px',
                      marginBottom: '10px',
                    }}
                  >
                    {exp.period}
                  </div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-gray-900)', marginBottom: '2px' }}>
                    {exp.company}
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-gray-500)', marginBottom: '12px' }}>
                    {exp.role}
                  </p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        style={{
                          fontSize: '0.82rem',
                          color: 'var(--color-gray-600)',
                          lineHeight: 1.6,
                          paddingLeft: '16px',
                          position: 'relative',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: '10px',
                            width: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            background: exp.color,
                            opacity: 0.5,
                          }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Education + Awards */}
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div
                style={{
                  padding: '24px 28px',
                  background: 'var(--color-sky-soft)',
                  borderRadius: 'var(--card-radius-sm)',
                  border: '1px solid rgba(0,0,0,0.03)',
                }}
              >
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-sky)', marginBottom: '8px', letterSpacing: '0.08em' }}>
                  🎓 教育背景
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-gray-900)' }}>暨南大学</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-gray-500)', marginTop: '4px' }}>
                  护理学 · 全日制本科 · 2019.09-2023.06<br />
                  GPA：3.42/5.0（8/32）
                </div>
              </div>
              <div
                style={{
                  padding: '24px 28px',
                  background: 'var(--color-yellow-soft)',
                  borderRadius: 'var(--card-radius-sm)',
                  border: '1px solid rgba(0,0,0,0.03)',
                }}
              >
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-peach)', marginBottom: '8px', letterSpacing: '0.08em' }}>
                  🏆 获奖情况（8项）
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  {[
                    '优秀学生二等奖学金（2019-2020）',
                    '优秀干部奖学金（2020-2021）',
                    '护理学院夏令营科研设计竞赛三等奖',
                    '青年志愿者协会"进步干事"',
                    '护理学院学生会"优秀干事"',
                    '医学人文知识竞赛优秀奖',
                    '《人体健康与疾病》课程突出贡献奖',
                    '护理学院"护士节"知识竞赛二等奖',
                  ].map((award, i) => (
                    <li key={i} style={{ fontSize: '0.75rem', color: 'var(--color-gray-600)', lineHeight: 1.5, paddingLeft: '12px', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, top: '7px', width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-peach)', opacity: 0.5 }} />
                      {award}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
