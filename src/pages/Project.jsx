const projects = [
  {
    title: 'Meta Website Clone – Frontend Development Project',
    description:
      'I recreated the Meta website as a frontend development practice project to strengthen my skills in building responsive, modern, and visually appealing web interfaces. Focused on translating the original design into a functional website using HTML, CSS, JavaScript, and React, with attention to layout, navigation, responsiveness, and reusable components. This project helped improve my understanding of frontend architecture and real-world website development.',
    href: 'https://github.com/NAZA-VO/replicating-about-meta.git',
    accent: 'book',
  },
  {
    title: 'E-Commerce Landing Page',
    description:
      'Designed and developed a modern e-commerce landing page with product-focused sections, responsive layouts, and conversion-oriented UI components. The project emphasized clean visual hierarchy, polished spacing, and mobile-first design while improving my ability to build reusable frontend patterns for commercial websites.',
    href: '#',
    accent: 'shop',
  },
  {
    title: 'Portfolio Dashboard',
    description:
      'Built a sleek portfolio dashboard interface that combines analytics, project summaries, and interactive cards in a clean dashboard experience. This project sharpened my skills in React component structure, data presentation, and crafting interfaces that balance usability, clarity, and modern aesthetics.',
    href: '#',
    accent: 'dash',
  },
]

const renderMockup = (accent) => {
  const isShop = accent === 'shop'
  const isDash = accent === 'dash'

  return (
    <div className="project-visual" aria-label="Project mockup preview">
      <div className="device device-laptop">
        <div className="laptop-screen">
          <div className="screen-ui">
            <div className="screen-topbar">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>

            <div className="screen-content">
              <div className="book-preview">
                <div className={`book-cover ${isShop ? 'cover-shop' : ''} ${isDash ? 'cover-dash' : ''}`} />
              </div>

              <div className="input-card">
                <div className="input-card__title">
                  {isDash ? 'Dashboard' : isShop ? 'Storefront' : 'Book Matchmaker'}
                </div>
                <div className="input-card__body">
                  <div className="input-card__line short" />
                  <div className="input-card__line" />
                  <div className="input-card__line" />
                  <div className="input-card__line short" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="laptop-base" />
      </div>

      <div className="device device-phone">
        <div className="phone-screen">
          <div className="phone-header" />
          <div className="phone-card phone-card--large">
            <div className={`phone-thumb ${isShop ? 'thumb-shop' : ''} ${isDash ? 'thumb-dash' : ''}`} />
          </div>
          <div className="phone-card phone-card--small" />
          <div className="phone-card phone-card--tiny" />
        </div>
      </div>
    </div>
  )
}

const Project = () => {
  return (
    <section id="projects" className="project-page page-section">
      <div className="project-shell">
        <header className="project-header">
          <h2>PROJECTS</h2>
          <span className="project-rule" />
        </header>

        <div className="project-stack">
          {projects.map((project, index) => (
            <article key={project.title} className={`project-item ${index % 2 === 1 ? 'project-item--reverse' : ''}`}>
              {project.accent === 'book' ? (
                <div className="project-visual project-visual--image">
                  <picture>
                    <source media="(max-width: 768px)" srcSet="/mb-one.png" />
                    <img
                      className="project-preview-image"
                      src="/sc-one.png"
                      alt="Meta website shown in its desktop layout"
                    />
                  </picture>
                </div>
              ) : (
                renderMockup(project.accent)
              )}

              <div className="project-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <a href={project.href} className="project-button" target={project.href.startsWith('http') ? '_blank' : undefined} rel={project.href.startsWith('http') ? 'noreferrer' : undefined}>
                  VIEW PROJECT
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project
