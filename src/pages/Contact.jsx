import { Mail } from 'lucide-react'
import profileImage from '../assets/mypicture.jpeg'

const Contact = () => {
  return (
    <section id="contact" className="contact-page page-section">
      <div className="contact-shell">
        <div className="contact-main">
          <div className="contact-intro">
            <h1>ODAH VICTORY</h1>
            <p>
              Frontend-focused developer with full-stack experience and a
              lifelong learner&apos;s approach to building.
            </p>
          </div>
          <img className="contact-portrait" src={profileImage} alt="Odah Victory" />
        </div>

        <footer className="contact-footer">
          <p>© {new Date().getFullYear()} Odah Victory</p>
          <div className="contact-social-links" aria-label="Social links">
            <a
              href="https://mail.google.com/mail/?view=cm&to=mavictoryspace001@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email Odah Victory"
            >
              <Mail aria-hidden="true" />
            </a>
            <a href="https://x.com/cm_victoryy" target="_blank" rel="noreferrer" aria-label="X">
              <svg className="contact-x-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.5L5.5 22H2.35l7.25-8.3L1.8 2h6.4l4.42 6.95L18.9 2Zm-1.1 18h1.73L7.28 3.9H5.42L17.8 20Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/victoryodah"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg className="contact-brand-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.37H4.97V9.02h2.96v9.35ZM6.45 7.74a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12 10.63h-2.95v-4.55c0-1.09-.02-2.49-1.52-2.49-1.52 0-1.75 1.19-1.75 2.41v4.63H9.28V9.02h2.83v1.28h.04c.39-.74 1.36-1.52 2.79-1.52 2.99 0 3.54 1.97 3.54 4.53v5.06Z" />
              </svg>
            </a>
            <a
              href="https://github.com/NAZA-VO"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg className="contact-brand-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .5A12 12 0 0 0 8.21 23.4c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.6-4.04-1.6-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.54.12-3.2 0 0 1.01-.32 3.3 1.23a11.44 11.44 0 0 1 6.02 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.9.12 3.2.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.38.81 1.13.81 2.28v3.38c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default Contact
