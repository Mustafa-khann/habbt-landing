import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-accent-500 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold">H</span>
              </div>
              <span className="text-2xl font-bold text-gradient">Habbt</span>
            </div>
            <p className="text-gray-400 text-sm">
              Build better habits together. Transform your life one habit at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/20 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/20 transition">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/20 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/20 transition">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
              <li><a href="#download" className="hover:text-white transition">Download</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Roadmap</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Press Kit</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition">GDPR</a></li>
              <li><a href="#" className="hover:text-white transition">Licenses</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">
            © {currentYear} Habbt. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 flex items-center space-x-1">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>for habit builders worldwide</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

