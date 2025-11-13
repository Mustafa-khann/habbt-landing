import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToDownload = () => {
    const element = document.getElementById('download')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative isolate pt-28 sm:pt-32 pb-16">
      {/* Subtle radial gradient backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 -top-40 h-[420px] bg-[radial-gradient(50%_50%_at_50%_0%,rgba(249,115,22,0.12)_0%,rgba(249,115,22,0)_70%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          <div className="inline-flex items-center rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
            Build better habits together
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Build better habits, simply.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Stay consistent with a straightforward habit tracker and gentle accountability.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <button 
              onClick={scrollToDownload}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-primary-600 text-white hover:bg-primary-700 shadow-sm transition"
            >
              Get started
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <button 
              onClick={scrollToDownload}
              className="px-6 py-3 rounded-md border border-slate-300 text-slate-900 hover:bg-slate-50 shadow-sm transition"
            >
              Learn more
            </button>
          </div>
          <div className="pt-8">
            <div className="relative max-w-4xl mx-auto">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 aspect-video flex items-center justify-center">
                <div className="flex flex-col items-center gap-4 text-slate-500">
                  <picture>
                    <source srcSet="/logo-dark.png" media="(prefers-color-scheme: dark)" />
                    <img src="/logo-light.png" alt="Habbt logo" className="h-12 w-12" />
                  </picture>
                  <div>Product preview coming soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

