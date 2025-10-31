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
    title: 'Easy Habit Tracking',
    description: 'Create and track your daily, weekly, or monthly habits with a simple tap. Mark completed, skipped, or missed with intuitive controls.',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: TrendingUp,
    title: 'Visual Progress',
    description: 'See your progress at a glance with beautiful charts, streak counters, and completion rates. Stay motivated with visual feedback.',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Users,
    title: 'Social Circles',
    description: 'Join habit circles with friends and family. Share progress, stay accountable, and celebrate wins together.',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: Award,
    title: 'Streaks & Achievements',
    description: 'Build momentum with streak tracking. Earn achievements and climb the leaderboard as you progress.',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    icon: Bell,
    title: 'Smart Reminders',
    description: 'Never miss a habit with customizable reminders. Get gentle nudges from friends when you need motivation.',
    color: 'from-red-400 to-rose-500'
  },
  {
    icon: Target,
    title: 'Goal Setting',
    description: 'Set specific goals for each habit. Track your completion rate and adjust your targets as you grow.',
    color: 'from-indigo-400 to-violet-500'
  },
  {
    icon: Calendar,
    title: 'Flexible Scheduling',
    description: 'Choose daily, weekly, or custom frequencies for each habit. Adapt to your unique lifestyle and routine.',
    color: 'from-teal-400 to-green-500'
  },
  {
    icon: Zap,
    title: 'Offline Support',
    description: 'Track habits anywhere, even without internet. Your data syncs automatically when you\'re back online.',
    color: 'from-amber-400 to-yellow-500'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Everything You Need to
            <span className="text-gradient"> Build Great Habits</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Powerful features designed to help you stay consistent and motivated on your journey to self-improvement.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="glass rounded-2xl p-6 hover:scale-105 transition transform cursor-pointer group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 glass rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">99%</div>
              <div className="text-gray-300">User Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">3.2M</div>
              <div className="text-gray-300">Habits Completed</div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">45 Days</div>
              <div className="text-gray-300">Average Streak</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

