import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'

export default function Hero() {
  const scrollToDownload = () => {
    const element = document.getElementById('download')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full">
            <Sparkles size={16} className="text-accent-400" />
            <span className="text-sm">Build Better Habits Together</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Transform Your Life
            <br />
            <span className="text-gradient">One Habit at a Time</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of people building better habits with Habbt. Track your progress, 
            stay accountable with friends, and celebrate your wins together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToDownload}
              className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold text-lg hover:scale-105 transition transform glow flex items-center space-x-2"
            >
              <span>Download Now</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </button>
            <button 
              onClick={scrollToDownload}
              className="px-8 py-4 glass rounded-full font-semibold text-lg hover:bg-white/20 transition"
            >
              View Demo
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8">
            <div className="flex items-center space-x-2">
              <CheckCircle2 size={20} className="text-green-400" />
              <span className="text-gray-300">10K+ Active Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 size={20} className="text-green-400" />
              <span className="text-gray-300">50K+ Habits Tracked</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 size={20} className="text-green-400" />
              <span className="text-gray-300">1M+ Check-ins</span>
            </div>
          </div>

          {/* Hero Image/Mockup */}
          <div className="pt-12">
            <div className="relative max-w-4xl mx-auto">
              <div className="glass rounded-3xl p-2 glow">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 aspect-video flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-accent-500 rounded-2xl mx-auto flex items-center justify-center">
                      <span className="text-4xl font-bold">H</span>
                    </div>
                    <p className="text-gray-400">App Screenshot/Demo Coming Soon</p>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 glass p-4 rounded-2xl hidden lg:block">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-sm font-semibold">Streak: 30 days! 🔥</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 glass p-4 rounded-2xl hidden lg:block">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                    <Sparkles size={16} />
                  </div>
                  <span className="text-sm font-semibold">Sarah completed a goal! 🎉</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

