import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`
      return
    }
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent-blue flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
              H
            </div>
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-primary-light transition-colors">Habbt</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Pricing'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('download')}
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:scale-105 active:scale-95"
            >
              Download
            </button>
            <button
              onClick={() => scrollToSection('download')}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-accent-blue text-white text-sm font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105 active:scale-95"
            >
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-secondary hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/5 bg-surface/95 backdrop-blur-xl absolute left-0 right-0 p-4 shadow-2xl animate-in slide-in-from-top-5">
            <div className="space-y-2">
              {['Features', 'Pricing'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-3 rounded-xl text-text-secondary hover:text-white hover:bg-white/5 transition-all"
                >
                  {item}
                </button>
              ))}
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => scrollToSection('download')}
                  className="block w-full px-4 py-3 rounded-xl bg-white/5 text-white font-medium text-center hover:bg-white/10 transition-all"
                >
                  Download
                </button>
                <button
                  onClick={() => scrollToSection('download')}
                  className="block w-full px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-accent-blue text-white font-bold text-center shadow-lg shadow-primary/20"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

