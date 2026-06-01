import { useState, useEffect } from 'react'

const NAV_LINKS = ['About', 'Skills', 'Experience', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/30' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-mono font-semibold text-lg text-teal-400 hover:text-teal-300 transition-colors">
            SR<span className="text-white animate-pulse">_</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-slate-400 hover:text-teal-400 text-sm font-medium transition-colors"
              >
                <span className="text-teal-500 font-mono text-xs mr-1">0{i + 1}.</span>
                {link}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/shashwat-rai-51267a1b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 border border-teal-400 text-teal-400 text-sm font-medium rounded hover:bg-teal-400/10 transition-all"
            >
              LinkedIn
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-slate-300 hover:text-teal-400 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-800 py-4 space-y-1">
            {NAV_LINKS.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block px-4 py-2 text-slate-300 hover:text-teal-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="https://linkedin.com/in/shashwat-rai"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 text-teal-400 font-medium"
            >
              LinkedIn
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
