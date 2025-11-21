import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 group">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-accent-blue flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
                H
              </div>
              <span className="font-bold text-white group-hover:text-primary-light transition-colors">Habbt</span>
            </Link>
          </div>

          <p className="text-sm text-text-muted text-center sm:text-left">
            © {currentYear} Habbt. All rights reserved.
          </p>

          <div className="text-sm text-text-muted flex flex-wrap items-center justify-center gap-4">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <span aria-hidden className="text-white/10">•</span>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <span aria-hidden className="text-white/10">•</span>
            <a href="#download" className="hover:text-white transition-colors">Download</a>
            <span aria-hidden className="text-white/10">•</span>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span aria-hidden className="text-white/10">•</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

