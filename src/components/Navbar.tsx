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
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-accent-500 rounded-xl flex items-center justify-center">
              <span className="text-2xl font-bold">H</span>
            </div>
            <span className="text-2xl font-bold text-gradient">Habbt</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="hover:text-primary-400 transition">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="hover:text-primary-400 transition">
              How It Works
            </button>
            <button onClick={() => scrollToSection('download')} className="hover:text-primary-400 transition">
              Download
            </button>
            <button 
              onClick={() => scrollToSection('download')}
              className="px-6 py-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold hover:scale-105 transition transform glow"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-3 py-2 hover:bg-white/10 rounded-lg transition"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-3 py-2 hover:bg-white/10 rounded-lg transition"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection('download')}
              className="block w-full text-left px-3 py-2 hover:bg-white/10 rounded-lg transition"
            >
              Download
            </button>
            <button 
              onClick={() => scrollToSection('download')}
              className="block w-full px-3 py-2 mt-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-semibold"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

