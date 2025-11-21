import {
  CheckCircle2,
  TrendingUp,
  Bell,
  Users,
  Target,
  Award,
  Calendar,
  Zap
} from 'lucide-react'

const features = [
  {
    icon: CheckCircle2,
    title: 'Easy habit tracking',
    description: 'Create and track daily, weekly, or monthly habits with a tap.'
  },
  {
    icon: TrendingUp,
    title: 'Visual progress',
    description: 'See streaks and completion rates to stay motivated.'
  },
  {
    icon: Users,
    title: 'Social circles',
    description: 'Share progress with friends and keep each other accountable.'
  },
  {
    icon: Award,
    title: 'Streaks & achievements',
    description: 'Build momentum and celebrate milestones as you grow.'
  },
  {
    icon: Bell,
    title: 'Smart reminders',
    description: 'Customizable reminders so you never miss a check-in.'
  },
  {
    icon: Target,
    title: 'Goal setting',
    description: 'Set targets and adjust as your routine evolves.'
  },
  {
    icon: Calendar,
    title: 'Flexible scheduling',
    description: 'Daily, weekly, or custom frequencies fit your lifestyle.'
  },
  {
    icon: Zap,
    title: 'Offline support',
    description: 'Track anywhere. Data syncs automatically when online.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-full h-full max-w-7xl -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-64 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Features that keep you <span className="text-primary">consistent</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Thoughtfully designed to help you build momentum and stay on track with your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-surface border border-white/5 hover:border-primary/30 hover:bg-surfaceLight transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-primary/5"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent-blue/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} className="text-primary group-hover:text-primary-light transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary-light transition-colors">{feature.title}</h3>
                <p className="text-text-secondary leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

