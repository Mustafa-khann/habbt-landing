import { Smartphone, Monitor, Download as DownloadIcon, ArrowRight } from 'lucide-react'

export default function Download() {
  return (
    <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Download <span className="text-gradient">Habbt</span> Today
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Available on all your favorite platforms. Start building better habits wherever you are.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Mobile App */}
          <div className="glass rounded-3xl p-8 hover:scale-105 transition transform">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Smartphone size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Mobile App</h3>
            <p className="text-gray-300 mb-6 text-center">
              Track habits on the go with our beautiful mobile app for iOS and Android.
            </p>
            
            <div className="space-y-3">
              <button className="w-full bg-white/10 hover:bg-white/20 rounded-xl p-4 transition flex items-center justify-between group">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#000" d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="font-bold">App Store</div>
                  </div>
                </div>
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </button>

              <button className="w-full bg-white/10 hover:bg-white/20 rounded-xl p-4 transition flex items-center justify-between group">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path fill="#000" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">Get it on</div>
                    <div className="font-bold">Google Play</div>
                  </div>
                </div>
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </button>
            </div>
          </div>

          {/* Web App */}
          <div className="glass rounded-3xl p-8 hover:scale-105 transition transform">
            <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Monitor size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">Web App</h3>
            <p className="text-gray-300 mb-6 text-center">
              Access Habbt from any browser. No download required, sync across all devices.
            </p>
            
            <button className="w-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl p-4 font-bold hover:scale-105 transition transform glow flex items-center justify-center space-x-2">
              <span>Launch Web App</span>
              <ArrowRight />
            </button>

            <div className="mt-6 p-4 bg-white/5 rounded-xl">
              <div className="flex items-start space-x-3">
                <DownloadIcon size={20} className="text-accent-400 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-300">
                  <strong className="text-white">Coming Soon:</strong> Progressive Web App support. 
                  Install Habbt on your desktop for offline access and native-like experience.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Free to download • No credit card required • Available on iOS 14+, Android 8+, and modern browsers
          </p>
        </div>
      </div>
    </section>
  )
}

