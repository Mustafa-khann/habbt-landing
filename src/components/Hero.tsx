import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const scrollToDownload = () => {
    const element = document.getElementById('download')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative isolate pt-32 pb-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary-light backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Build better habits together
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Build better <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent-blue">habits, simply.</span>
            </h1>

            <p className="text-lg text-text-secondary max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              The modern habit tracker designed for personal growth and social accountability.
              Track your progress, join circles, and achieve your goals with friends.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button
                onClick={scrollToDownload}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent-blue text-white font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105 active:scale-95"
              >
                Get Started
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={scrollToDownload}
                className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-medium hover:bg-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
              >
                Learn more
              </button>
            </div>

            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-text-muted text-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-surface border-2 border-background flex items-center justify-center text-xs font-bold text-text-secondary">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span>Join 1,000+ users</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-text-muted" />
              <div>4.9/5 rating</div>
            </div>
          </div>

          {/* Visual Mockup */}
          <div className="flex-1 w-full max-w-[500px] lg:max-w-none relative perspective-1000">
            {/* Phone Frame */}
            <div className="relative mx-auto border-gray-800 bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl shadow-primary/20 rotate-y-12 rotate-z-2 hover:rotate-y-0 hover:rotate-z-0 transition-all duration-700 ease-out">
              <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

              {/* Screen Content */}
              <div className="rounded-[2rem] overflow-hidden w-full h-full bg-background flex flex-col relative">
                {/* Status Bar */}
                <div className="h-8 w-full bg-background flex justify-between items-center px-6 pt-2">
                  <div className="text-[10px] font-bold text-white">9:41</div>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                    <div className="w-3 h-3 rounded-full bg-white/20"></div>
                  </div>
                </div>

                {/* App Header */}
                <div className="px-6 pt-4 pb-2">
                  <div className="text-sm text-text-secondary font-medium">Good morning,</div>
                  <div className="text-2xl font-bold text-white">Alex</div>
                </div>

                {/* Habits List */}
                <div className="flex-1 px-4 pt-4 space-y-3">
                  {[
                    { name: 'Morning Run', icon: '🏃', color: 'bg-primary' },
                    { name: 'Read 30 mins', icon: '📚', color: 'bg-secondary' },
                    { name: 'Drink Water', icon: '💧', color: 'bg-accent-blue' },
                    { name: 'Meditation', icon: '🧘', color: 'bg-emerald-500' },
                  ].map((habit, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-surface border border-white/5 flex items-center justify-between group cursor-pointer hover:bg-surfaceLight transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl ${habit.color}/20 flex items-center justify-center text-lg`}>
                          {habit.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-white text-sm">{habit.name}</div>
                          <div className="text-xs text-text-muted">Daily • 2/3 done</div>
                        </div>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 border-${habit.color === 'bg-primary' ? 'primary' : 'white/20'} flex items-center justify-center`}>
                        {i === 0 && <div className="w-3 h-3 rounded-full bg-primary" />}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Nav */}
                <div className="h-16 bg-surface border-t border-white/5 flex justify-around items-center px-2">
                  <div className="p-2 text-primary"><div className="w-6 h-6 rounded-md bg-primary/20" /></div>
                  <div className="p-2 text-text-muted"><div className="w-6 h-6 rounded-md bg-white/10" /></div>
                  <div className="p-2 text-text-muted"><div className="w-12 h-12 rounded-full bg-primary -mt-8 border-4 border-background shadow-lg shadow-primary/30 flex items-center justify-center text-white text-xl">+</div></div>
                  <div className="p-2 text-text-muted"><div className="w-6 h-6 rounded-md bg-white/10" /></div>
                  <div className="p-2 text-text-muted"><div className="w-6 h-6 rounded-md bg-white/10" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

