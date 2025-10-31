import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <picture>
              <source srcSet="/logo-dark.png" media="(prefers-color-scheme: dark)" />
              <img src="/logo-light.png" alt="Habbt logo" className="h-6 w-6" />
            </picture>
            <span className="font-semibold">Habbt</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="text-slate-600 hover:text-slate-900 transition">
              Features
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-slate-600 hover:text-slate-900 transition">
              Pricing
            </button>
            <button onClick={() => scrollToSection('download')} className="text-slate-600 hover:text-slate-900 transition">
              Download
            </button>
            <button 
              onClick={() => scrollToSection('download')}
              className="px-4 py-2 rounded-md bg-primary-600 text-white hover:bg-primary-700 transition"
            >
              Get the app
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left px-3 py-2 rounded hover:bg-slate-50 transition"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left px-3 py-2 rounded hover:bg-slate-50 transition"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('download')}
                className="block w-full text-left px-3 py-2 rounded hover:bg-slate-50 transition"
              >
                Download
              </button>
              <button 
                onClick={() => scrollToSection('download')}
                className="block w-full px-3 py-2 mt-2 rounded-md bg-primary-600 text-white hover:bg-primary-700"
              >
                Get the app
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

