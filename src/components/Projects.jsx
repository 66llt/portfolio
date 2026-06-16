import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: '体绪 · 女性私护KOL种草投放',
    category: '🌸 核心业务 — 品牌公域流量入口',
    cover: '/images/nana-hero.png',
    gradient: 'linear-gradient(135deg, #FFE4E0 0%, #FFF0F3 50%, #FFD4BA 100%)',
    emoji: null,
    tags: ['心动投递员nana', '950w+播放', '挂车达人', '9.63w GMV'],
    highlights: [
      '携手心动投递员nana打造950w+播放爆款视频，成功打开品牌公域流量入口，强化品牌声量',
      '挂车达人合作成果显著，实现9.63w GMV转化，验证短直种草→挂车收割的高效链路',
      '负责「体绪」竞价投流、Videolive、FeedsLive全链路投放执行，搭建内容种草→流量加热→直播收割闭环',
      '有效带动「体绪」品牌5A人群显著增长，联动达播端、KOC端完成流量闭环收割',
    ],
    gmvImage: '/images/nana-gmv.png',
    detailImages: ['/images/nana-detail-1.png', '/images/nana-detail-2.png'],
  },
  {
    id: 2,
    title: '大健康类目 · KOL+KOC双端口投放',
    category: '🔬 核心业务 — 健康消费品种草转化',
    cover: '/images/project-大健康-1.png',
    gradient: 'linear-gradient(135deg, #EDE4FF 0%, #E3F4FC 50%, #DFF7EF 100%)',
    emoji: null,
    tags: ['医路向前巍子39.9w👍', '马超医生32.6w👍', '爆款率60%', 'CPM<300'],
    highlights: [
      '合作医路向前巍子(39.9w👍)、马超医生(32.6w👍)、天眼科学(7.1w👍)等头部/腰部KOL',
      '整体爆款率60%，视频播放CPM稳定控制在300以下',
      '建立KOC规模化种草SOP，打造低粉爆文案例并可复制多条',
      '负责亿活布拉氏酵母菌项目，熟练运用品牌星图、抖店罗盘、生意参谋等数据工具',
    ],
  },
  {
    id: 3,
    title: '品牌整合营销 · 美博会 & 直播专场',
    category: '🤝 核心业务 — 品牌全案策划执行',
    cover: '/images/project-整合营销-1.png',
    gradient: 'linear-gradient(135deg, #FFF8DC 0%, #FFF0F3 50%, #FFE4E0 100%)',
    emoji: null,
    tags: ['美博会', '双选会', '直播专场', '全案执行'],
    highlights: [
      '协助珂蔓朵完成美博会、双选会全流程筹备，包括物料筹备、流程对接、现场执行与落地保障',
      '协助李静×OLGA×产品负责人直播专场策划，参与主题文案撰写、流程协同与支持',
      '具备品牌活动策划与执行的全流程管控能力',
    ],
  },
  {
    id: 4,
    title: '账号孵化 · 0-1与冷启动运营',
    category: '📈 延伸能力 — 全栈内容生产与增长',
    cover: '/images/project-大健康-visual.png',
    gradient: 'linear-gradient(135deg, #DFF7EF 0%, #FFF8F0 50%, #EDE4FF 100%)',
    emoji: null,
    tags: ['0-1孵化', '千万级播放', '33w+净增粉', '商单20+条/月'],
    highlights: [
      '独立操盘皮肤科叶医生账号，打造多条千万级播放视频，单月涨粉5w+',
      '3个月内实现皮肤科李茜主任33w+净增粉，单月承接商单20+条，商单转化率高',
      '精通抖音/小红书算法逻辑，利用千瓜、飞瓜等工具拆解爆款元素并跨账号复制',
      '为珀莱雅、欧莱雅、娇韵诗等一线美妆品牌撰写商务脚本，内容过审率高',
    ],
  },
]

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section
      id="projects"
      style={{
        padding: '120px 0',
        background: 'var(--color-off-white)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decoration */}
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,177,255,0.2) 0%, transparent 70%)',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ marginBottom: '60px' }}>
          <div className="section-label">Projects</div>
          <h2 className="section-title">精选项目</h2>
          <p className="section-desc">
            女性私护 · 大健康类目 · 品牌整合营销<br />
            三大核心业务板块，以数据驱动内容策略
          </p>
        </div>

        {/* Project Big Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
          }}
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="reveal"
              style={{
                borderRadius: 'var(--card-radius)',
                background: project.gradient,
                border: '1px solid rgba(0,0,0,0.04)',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: active === project.id ? 'scale(1.02)' : 'scale(1)',
                boxShadow: active === project.id ? 'var(--shadow-card-hover)' : 'var(--shadow-sm)',
                gridColumn: i === 0 ? '1 / -1' : undefined,
              }}
              onClick={() => setActive(active === project.id ? null : project.id)}
              onMouseEnter={(e) => {
                if (active !== project.id) {
                  e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }
              }}
              onMouseLeave={(e) => {
                if (active !== project.id) {
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }
              }}
            >
              {/* Cover area */}
              <div
                style={{
                  height: i === 0 ? '400px' : '220px',
                  position: 'relative',
                  overflow: 'hidden',
                  background: project.cover ? 'transparent' : project.gradient,
                  display: project.cover ? 'block' : 'flex',
                  alignItems: project.cover ? 'stretch' : 'center',
                  justifyContent: 'center',
                  fontSize: i === 0 ? '6rem' : '4rem',
                }}
              >
                {project.cover ? (
                  <img
                    src={project.cover}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  project.emoji
                )}
                {/* Decorative shapes (only when no cover image) */}
                {!project.cover && (
                  <>
                    <div
                      style={{
                        position: 'absolute',
                        top: -20,
                        right: -20,
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.4)',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: -30,
                        left: -30,
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.3)',
                      }}
                    />
                  </>
                )}
              </div>

              {/* Info */}
              <div style={{ padding: '28px 32px' }}>
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--color-coral)',
                    letterSpacing: '0.06em',
                    marginBottom: '6px',
                  }}
                >
                  {project.category}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-gray-900)', marginBottom: '12px' }}>
                  {project.title}
                </h3>

                {/* Project detail images row */}
                {project.gmvImage && (
                  <div
                    style={{
                      display: 'flex',
                      gap: '12px',
                      marginBottom: '16px',
                    }}
                  >
                    {[project.gmvImage, ...(project.detailImages || [])].map((img, idx) => (
                      <div
                        key={idx}
                        style={{
                          flex: 1,
                          borderRadius: '10px',
                          overflow: 'hidden',
                          border: '1px solid rgba(0,0,0,0.06)',
                          background: '#fff',
                        }}
                      >
                        <img
                          src={img}
                          alt={`项目截图 ${idx + 1}`}
                          style={{ width: '100%', display: 'block' }}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: active === project.id ? '20px' : '0' }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.75rem',
                        padding: '4px 12px',
                        borderRadius: '50px',
                        background: 'rgba(255,255,255,0.7)',
                        color: 'var(--color-gray-600)',
                        border: '1px solid rgba(0,0,0,0.06)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Expandable highlights */}
                <div
                  style={{
                    maxHeight: active === project.id ? '300px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), margin-top 0.5s',
                    marginTop: active === project.id ? '16px' : '0',
                  }}
                >
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {project.highlights.map((h, j) => (
                      <li
                        key={j}
                        style={{
                          fontSize: '0.85rem',
                          color: 'var(--color-gray-600)',
                          lineHeight: 1.6,
                          paddingLeft: '20px',
                          position: 'relative',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: '10px',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: 'var(--color-coral)',
                          }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Click hint */}
                <div
                  style={{
                    marginTop: '16px',
                    fontSize: '0.78rem',
                    color: 'var(--color-gray-400)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  {active === project.id ? '点击收起 ↑' : '点击展开详情 ↓'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
