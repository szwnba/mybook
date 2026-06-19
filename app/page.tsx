import Nav from "../components/Nav";
import Reveal from "../components/Reveal";
import Quiz from "../components/Quiz";
import TypesSection from "../components/TypesSection";
import FaqSection from "../components/FaqSection";
import CtaSection from "../components/CtaSection";
import { frameworksList } from "../lib/data";

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-deco hero-deco-1" />
        <div className="hero-deco hero-deco-2" />
        <div className="hero-deco hero-deco-3" />

        <div className="hero-grid">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="hero-greeting-line" />
              专业人格心理测评平台
            </div>
            <h1 className="hero-title">
              认识你自己，<br />是一切<em>成长</em>的起点
            </h1>
            <p className="hero-desc">
              基于荣格心理类型理论、大五人格模型等经典框架，用科学的方法帮你理解思维偏好、情感模式与行为倾向。不是给你贴标签，而是为你打开一扇理解自己的窗。
            </p>
            <div className="hero-actions">
              <a href="#quiz" className="btn btn-primary btn-lg">
                开始免费测评 <span>→</span>
              </a>
              <a href="#frameworks" className="btn btn-ghost btn-lg">
                了解科学依据
              </a>
            </div>
            <div className="hero-trust">
              <div className="hero-trust-avatars">
                <div className="hero-trust-avatar">🌿</div>
                <div className="hero-trust-avatar">🧠</div>
                <div className="hero-trust-avatar">📖</div>
                <div className="hero-trust-avatar">💡</div>
                <div className="hero-trust-avatar">🎯</div>
              </div>
              <div className="hero-trust-text">
                <strong>50,000+</strong> 用户已完成测评
                <br />
                <span style={{ fontSize: "0.8rem" }}>
                  基于 4 大权威心理学框架
                </span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card-stack">
              <div className="hero-floating-card hfc-main">
                <div className="hfc-header">
                  <div
                    className="hfc-icon"
                    style={{ background: "var(--sage-bg)" }}
                  >
                    🌿
                  </div>
                  <div>
                    <div className="hfc-type-code">INFP · T</div>
                    <div className="hfc-type-name">调停者</div>
                  </div>
                </div>
                <div className="hfc-traits">
                  <span className="hfc-trait">理想主义</span>
                  <span className="hfc-trait">共情力强</span>
                  <span className="hfc-trait">富有创意</span>
                  <span className="hfc-trait">内省</span>
                </div>
                <div className="hfc-bar-group">
                  <div className="hfc-bar-item">
                    <span className="hfc-bar-label">E / I</span>
                    <div className="hfc-bar-track">
                      <div
                        className="hfc-bar-fill sage"
                        style={{ width: "78%" }}
                      />
                    </div>
                  </div>
                  <div className="hfc-bar-item">
                    <span className="hfc-bar-label">S / N</span>
                    <div className="hfc-bar-track">
                      <div
                        className="hfc-bar-fill terracotta"
                        style={{ width: "65%" }}
                      />
                    </div>
                  </div>
                  <div className="hfc-bar-item">
                    <span className="hfc-bar-label">T / F</span>
                    <div className="hfc-bar-track">
                      <div
                        className="hfc-bar-fill gold"
                        style={{ width: "82%" }}
                      />
                    </div>
                  </div>
                  <div className="hfc-bar-item">
                    <span className="hfc-bar-label">J / P</span>
                    <div className="hfc-bar-track">
                      <div
                        className="hfc-bar-fill sky"
                        style={{ width: "70%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-floating-card hfc-mini-1">
                <div className="hfc-mini-stat">
                  <div
                    className="hfc-mini-stat-value"
                    style={{ color: "var(--sage)" }}
                  >
                    4
                  </div>
                  <div className="hfc-mini-stat-label">核心维度</div>
                </div>
              </div>
              <div className="hero-floating-card hfc-mini-2">
                <div className="hfc-mini-stat">
                  <div
                    className="hfc-mini-stat-value"
                    style={{ color: "var(--terracotta)" }}
                  >
                    16
                  </div>
                  <div className="hfc-mini-stat-label">人格类型</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          <Reveal>
            <div className="trust-item">
              <div className="trust-icon">🏛️</div>
              <div className="trust-label">
                <strong>学术理论支撑</strong>基于荣格心理类型理论
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div className="trust-item">
              <div
                className="trust-icon"
                style={{ background: "var(--terracotta-bg)" }}
              >
                📊
              </div>
              <div className="trust-label">
                <strong>多维度评估</strong>整合 4 大专业测评体系
              </div>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <div className="trust-item">
              <div
                className="trust-icon"
                style={{ background: "var(--warm-gold-bg)" }}
              >
                📚
              </div>
              <div className="trust-label">
                <strong>持续更新</strong>每月收录最新研究文献
              </div>
            </div>
          </Reveal>
          <Reveal delay={3}>
            <div className="trust-item">
              <div
                className="trust-icon"
                style={{ background: "var(--sky-bg)" }}
              >
                🔒
              </div>
              <div className="trust-label">
                <strong>隐私保护</strong>测评数据仅用于个人分析
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Frameworks */}
      <section className="section" id="frameworks">
        <div className="section-inner">
          <div className="section-header reveal visible">
            <div className="section-eyebrow">
              <div className="section-eyebrow-dot" />
              <span className="tag">理论基础</span>
            </div>
            <h2 className="section-title">四大权威测评体系</h2>
            <p className="section-subtitle">
              我们整合了心理学领域最受认可的人格评估框架，从不同角度帮你构建完整的自我认知地图。
            </p>
          </div>

          <div className="methods-grid">
            {frameworksList.map((f, i) => (
              <Reveal key={f.name} delay={i}>
                <div
                  className="method-card"
                  style={
                    {
                      "--method-color": f.color,
                      "--method-bg": f.bg,
                    } as React.CSSProperties
                  }
                >
                  <div className="method-icon">{f.icon}</div>
                  <div className="method-name">{f.name}</div>
                  <div className="method-full-name">{f.fullName}</div>
                  <div className="method-desc">{f.desc}</div>
                  <ul className="method-features">
                    {f.features.map((ft) => (
                      <li key={ft}>{ft}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Types section */}
      <section className="section" id="types">
        <div className="section-inner">
          <div className="section-header center reveal visible">
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>
              <div className="section-eyebrow-dot" />
              <span className="tag">人格图谱</span>
            </div>
            <h2 className="section-title">探索 16 种人格类型</h2>
            <p
              className="section-subtitle"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              每种人格都有独特的认知方式和行为偏好。了解这些差异，不是为了分类，而是为了理解与欣赏人类心理的丰富性。
            </p>
          </div>

          <TypesSection />
        </div>
      </section>

      <div className="divider" />

      {/* Quiz */}
      <section className="section quiz-bg" id="quiz">
        <div className="section-inner">
          <div className="section-header center reveal visible">
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>
              <div className="section-eyebrow-dot" />
              <span className="tag">互动测评</span>
            </div>
            <h2 className="section-title">开始你的人格探索之旅</h2>
            <p
              className="section-subtitle"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              请根据你最自然的反应来选择，没有对错之分。真实地回答，才能获得最准确的结果。
            </p>
          </div>

          <div className="quiz-wrapper reveal visible">
            <Quiz />
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* How it works */}
      <section className="section" id="how">
        <div className="section-inner">
          <div className="section-header center reveal visible">
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>
              <div className="section-eyebrow-dot" />
              <span className="tag tag--warm">使用指南</span>
            </div>
            <h2 className="section-title">三步开启自我认知</h2>
            <p
              className="section-subtitle"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              简单、温和、有深度。不需要心理学背景，只需要你真诚地面对自己。
            </p>
          </div>

          <div className="steps-grid">
            {[
              {
                title: "回答问题",
                desc: "在安静的环境下，根据直觉选择最符合你真实倾向的选项。没有标准答案，真实最重要。",
              },
              {
                title: "获取报告",
                desc: "系统将从多个维度分析你的人格特征，生成包含类型描述、优势分析与成长建议的个人报告。",
              },
              {
                title: "深入探索",
                desc: "浏览资料库中你感兴趣的人格研究、发展建议和应用场景，将自我认知转化为实际行动。",
              },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i}>
                <div className="step-card">
                  <div className="step-number">{i + 1}</div>
                  <div className="step-title">{s.title}</div>
                  <div className="step-desc">{s.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Resources */}
      <section className="section" id="resources">
        <div className="section-inner">
          <div className="section-header reveal visible">
            <div className="section-eyebrow">
              <div className="section-eyebrow-dot" />
              <span className="tag">精选资料</span>
            </div>
            <h2 className="section-title">人格研究资料库</h2>
            <p className="section-subtitle">
              定期收录全球最新、最专业的人格心理学研究与实践应用，帮你持续深化对人格的理解。
            </p>
          </div>

          <div className="resources-layout">
            <Reveal>
              <div className="resource-featured">
                <span className="tag resource-featured-tag">
                  深度解读 · 2025 年 6 月
                </span>
                <div className="resource-featured-title">
                  认知功能理论深度指南：从主导到劣势，理解你的思维偏好层次
                </div>
                <div className="resource-featured-excerpt">
                  了解 MBTI 四字母只是起点。真正的深度理解来自认知功能（Cognitive
                  Functions）——主导功能如何塑造你的核心思维模式？辅助功能如何平衡你的决策？本文逐层拆解
                  8 种认知功能的运作机制，帮你超越表面类型，理解心智的内在结构。
                </div>
                <div className="resource-featured-meta">
                  <div className="resource-author-avatar">📖</div>
                  <div>
                    <div className="resource-author-name">
                      Persona Research Team
                    </div>
                    <div className="resource-author-date">2025 年 6 月 10 日</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={1}>
              <div className="resource-small-card">
                <div className="resource-small-cat">应用场景</div>
                <div className="resource-small-title">
                  不同人格类型的压力信号与自我调节策略
                </div>
                <div className="resource-small-excerpt">
                  当每种人格类型「失控」时会呈现什么特征？如何提前识别并温柔地拉回自己？
                </div>
                <div className="resource-tags-row">
                  <span className="resource-mini-tag">压力管理</span>
                  <span className="resource-mini-tag">自我调节</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <div className="resource-small-card">
                <div className="resource-small-cat">人际关系</div>
                <div className="resource-small-title">
                  人格兼容性迷思：MBTI 类型之间真的有「最佳配对」吗？
                </div>
                <div className="resource-small-excerpt">
                  跳出简单配对思维，从认知功能互补角度理解深度关系的可能。
                </div>
                <div className="resource-tags-row">
                  <span className="resource-mini-tag">关系</span>
                  <span className="resource-mini-tag">认知功能</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={3}>
              <div className="resource-small-card">
                <div className="resource-small-cat">学术前沿</div>
                <div className="resource-small-title">
                  人格的可塑性：你的性格真的不会变吗？
                </div>
                <div className="resource-small-excerpt">
                  最新纵向研究揭示，人格特质在一生中持续演化，关键转折点是什么？
                </div>
                <div className="resource-tags-row">
                  <span className="resource-mini-tag">人格发展</span>
                  <span className="resource-mini-tag">研究</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={4}>
              <div className="resource-small-card">
                <div className="resource-small-cat">职场应用</div>
                <div className="resource-small-title">
                  基于人格的领导力发展：不同类型的管理风格与成长建议
                </div>
                <div className="resource-small-excerpt">
                  每种人格都有独特的领导力潜能，关键是发展你天然擅长的方式而非模仿他人。
                </div>
                <div className="resource-tags-row">
                  <span className="resource-mini-tag">领导力</span>
                  <span className="resource-mini-tag">职场</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="section-inner">
          <div className="section-header center reveal visible">
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>
              <div className="section-eyebrow-dot" />
              <span className="tag">常见问题</span>
            </div>
            <h2 className="section-title">关于人格测评，你可能想了解</h2>
          </div>

          <FaqSection />
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section className="section">
        <div className="section-inner">
          <CtaSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <div className="nav-brand" style={{ marginBottom: 0 }}>
                <div className="nav-logo" />
                <div className="nav-title">
                  心栖 <small>MindNest</small>
                </div>
              </div>
              <p className="footer-brand-text">
                致力于用科学且温和的方式，帮助每个人更好地理解自己与他人。认识自己，是所有成长的起点。
              </p>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">测评工具</div>
              <ul>
                <li><a href="#">MBTI 人格测试</a></li>
                <li><a href="#">大五人格量表</a></li>
                <li><a href="#">九型人格测评</a></li>
                <li><a href="#">DISC 行为风格</a></li>
                <li><a href="#">霍兰德职业兴趣</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">学习资源</div>
              <ul>
                <li><a href="#">人格理论入门</a></li>
                <li><a href="#">认知功能指南</a></li>
                <li><a href="#">研究论文库</a></li>
                <li><a href="#">推荐书单</a></li>
                <li><a href="#faq">常见问题</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">关于</div>
              <ul>
                <li><a href="#">关于心栖</a></li>
                <li><a href="#">学术顾问</a></li>
                <li><a href="#">投稿合作</a></li>
                <li><a href="#">隐私政策</a></li>
                <li><a href="#">使用条款</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 心栖 MindNest · 人格探索实验室</span>
            <div className="footer-bottom-links">
              <a href="#">隐私政策</a>
              <a href="#">使用条款</a>
              <a href="#">联系我们</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
