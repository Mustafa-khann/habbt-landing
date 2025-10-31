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
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Features that keep you consistent
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Thoughtfully designed to help you build momentum and stay on track.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="rounded-xl border border-slate-200 p-6 hover:bg-slate-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

