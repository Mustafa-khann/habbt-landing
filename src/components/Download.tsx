import { Smartphone, Download as ArrowRight } from 'lucide-react'

export default function Download() {
  return (
    <section id="download" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl -z-10">
        <div className="w-full h-full bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Download Habbt
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto text-lg">
            Available on your favorite platforms. Start your journey today.
          </p>
        </div>

        <div className="gap-8 max-w-xl mx-auto">
          {/* Mobile App */}
          <div className="rounded-3xl border border-white/5 bg-surface p-8 hover:border-primary/30 transition-all duration-300 shadow-2xl shadow-black/20">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent-blue flex items-center justify-center mb-6 mx-auto shadow-lg shadow-primary/20">
              <Smartphone size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-center text-white">Mobile app</h3>
            <p className="text-text-secondary mb-8 text-center">
              Track habits on the go for iOS and Android.
            </p>

            <div className="space-y-4">
              <button className="w-full rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-between group relative opacity-75 cursor-not-allowed">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7" viewBox="0 0 24 24">
                      <path fill="#000" d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-text-muted">Download on the</div>
                    <div className="font-bold text-white text-lg leading-tight">App Store</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">Coming Soon</span>
                </div>
              </button>

              <button className="w-full rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7" viewBox="0 0 24 24">
                      <path fill="#000" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-text-muted">Get it on</div>
                    <div className="font-bold text-white text-lg leading-tight">Google Play</div>
                  </div>
                </div>
                <ArrowRight className="text-white transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-text-muted text-sm">
            Free to download • No credit card required • iOS 14+, Android 8+, modern browsers
          </p>
        </div>
      </div>
    </section>
  )
}

