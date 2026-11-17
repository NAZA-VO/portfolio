const projects = [
  {
    title: 'Meta Website Clone – Frontend Development Project',
    description:
      'I recreated the Meta website as a frontend development practice project to strengthen my skills in building responsive, modern, and visually appealing web interfaces. Focused on translating the original design into a functional website using HTML, CSS, JavaScript, and React, with attention to layout, navigation, responsiveness, and reusable components. This project helped improve my understanding of frontend architecture and real-world website development.',
    href: 'https://replicating-about-meta.vercel.app/',
    accent: 'book',
  },
  {
    title: 'PADIPAL',
    description:
      'Built Padipal, a responsive task management application designed to help users organize daily activities, prioritize tasks, track progress, and improve productivity. The application provides an intuitive interface for creating, managing, updating, and completing tasks, making it easier for users to stay organized and achieve their goals.',
    descriptionTitle: 'Padipal – Productivity & Task Management Application',
    descriptionContinuation:
      'Developed the frontend with React.js, JavaScript, and Tailwind CSS, focusing on reusable components, responsive layouts, and seamless user interactions. Integrated Firebase for backend services, including user authentication (sign-up, login, and logout) and secure user access. Implemented task management functionality, state management, and responsive design to ensure a smooth experience across desktop, tablet, and mobile screens.',
    href: 'https://padipal.vercel.app/',
    accent: 'task',
  },
  {
    title: 'Coolors Website Recreation – HTML & CSS',
    descriptionTitle: 'Coolors Website Recreation – HTML & CSS',
    description:
      "Recreated the Coolors website as a frontend practice project to strengthen my understanding of HTML and CSS. Focused on replicating the original website's visual layout, color schemes, typography, spacing, and responsive design. This project helped improve my ability to translate existing designs into clean, structured, and visually appealing web interfaces using HTML5 and CSS3.",
    href: 'https://github.com/NAZA-VO/third_project.git',
    accent: 'dash',
  },
]

const renderMockup = (accent) => {
  const isShop = accent === 'shop'
  const isDash = accent === 'dash'
  const isTask = accent === 'task'
  const isBook = accent === 'book'
  const desktopPreview = isTask ? '/sc-two.png' : isBook ? '/sc-one.png' : isDash ? '/sc-three.png' : null
  const mobilePreview = isTask ? '/mb-two.jpeg' : isBook ? '/mb-one.jpeg' : isDash ? '/mb-three.png' : null
  const previewName = isTask ? 'Padipal' : isBook ? 'Meta website' : 'Coolors website'

  return (
    <div className="project-visual" aria-label="Project mockup preview">
      <div className="device device-laptop">
        <div className={`laptop-screen ${desktopPreview ? 'laptop-screen--image' : ''}`}>
          {desktopPreview ? (
            <img
              className="project-device-preview"
              src={desktopPreview}
              alt={`${previewName} desktop view`}
            />
          ) : (
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
          )}
        </div>
        <div className="laptop-base" />
      </div>

      <div className="device device-phone">
        <div className={`phone-screen ${mobilePreview ? 'phone-screen--image' : ''}`}>
          {mobilePreview ? (
            <img
              className="project-device-preview"
              src={mobilePreview}
              alt={`${previewName} mobile view`}
            />
          ) : (
            <>
              <div className="phone-header" />
              <div className="phone-card phone-card--large">
                <div className={`phone-thumb ${isShop ? 'thumb-shop' : ''} ${isDash ? 'thumb-dash' : ''}`} />
              </div>
              <div className="phone-card phone-card--small" />
              <div className="phone-card phone-card--tiny" />
            </>
          )}
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
              {renderMockup(project.accent)}

              <div className="project-copy">
                <h3>{project.title}</h3>
                <p>
                  {project.descriptionTitle && (
                    <>
                      <strong>{project.descriptionTitle}</strong>
                      <br />
                      <br />
                    </>
                  )}
                  {project.description}
                  {project.descriptionContinuation && (
                    <>
                      <br />
                      <br />
                      {project.descriptionContinuation}
                    </>
                  )}
                </p>

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
