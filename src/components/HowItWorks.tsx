import { UserPlus, Target, CheckCircle2, TrendingUp } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: 'Sign Up',
    description: 'Create your free account in seconds with email or Google. Your journey starts here.',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    icon: Target,
    title: 'Set Your Goals',
    description: 'Add habits you want to build. Choose frequency, set reminders, and customize your routine.',
    color: 'from-purple-400 to-pink-500'
  },
  {
    icon: CheckCircle2,
    title: 'Track Daily',
    description: 'Check in each day with a simple tap. Mark completed, skipped, or add notes about your progress.',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: TrendingUp,
    title: 'See Progress',
    description: 'Watch your streaks grow, view beautiful charts, and celebrate your transformation over time.',
    color: 'from-yellow-400 to-orange-500'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-gradient">Simple</span> Yet Powerful
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Getting started is easy. Follow these four steps to transform your daily routine.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  <div className="glass rounded-2xl p-6 hover:scale-105 transition transform">
                    {/* Step number */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                      <Icon size={32} className="text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                    <p className="text-gray-300 text-center text-sm">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 glass rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of people who are building better habits and transforming their lives with Habbt.
          </p>
          <button 
            onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold text-lg hover:scale-105 transition transform glow inline-flex items-center space-x-2"
          >
            <span>Get Started Free</span>
            <CheckCircle2 size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

