
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';

// Put your CV in public/ and update this path.
const CV_FILE_PATH = '/your-cv.pdf';

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-blue-100 bg-white/95 font-medium backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <nav aria-label="Main navigation" className="flex items-center gap-3 sm:gap-9">
          <Link className="text-sm text-slate-700 transition-colors hover:text-blue-800" to="/about">
            About
          </Link>
          <Link className="text-sm text-slate-700 transition-colors hover:text-blue-800" to="/projects">
            Projects
          </Link>
          <Link
            className="rounded-full border border-blue-800 px-2 py-2 text-[10px] font-semibold text-blue-800 transition-colors hover:border-blue-900 hover:bg-blue-50 hover:text-blue-900 sm:px-4 sm:text-xs"
            to="/contact"
          >
            Contact Me
          </Link>
        </nav>

        <a
          href={CV_FILE_PATH}
          download
          aria-label="Download CV"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-800 px-2 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-blue-900 sm:px-5"
        >
          <span className="hidden sm:inline">Download CV</span>
          <Download aria-hidden="true" size={14} />
        </a>
      </div>
    </header>
  )
}

export default Header
