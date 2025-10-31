export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <picture>
              <source srcSet="/logo-dark.png" media="(prefers-color-scheme: dark)" />
              <img src="/logo-light.png" alt="Habbt logo" className="h-6 w-6" />
            </picture>
            <span className="font-semibold">Habbt</span>
          </div>
          <p className="text-sm text-slate-500 text-center sm:text-left">
            © {currentYear} Habbt. All rights reserved.
          </p>
          <div className="text-sm text-slate-500">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <span className="mx-3" aria-hidden>•</span>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <span className="mx-3" aria-hidden>•</span>
            <a href="#download" className="hover:text-slate-900">Download</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

