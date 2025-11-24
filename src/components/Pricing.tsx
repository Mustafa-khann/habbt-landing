import { CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

export default function Pricing() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('yearly')
  const price = billing === 'monthly' ? '$5' : '$50'
  const suffix = billing === 'monthly' ? '/month' : '/year'
  const savings = billing === 'yearly'
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Go Pro
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto text-lg">
            Commit to your habits. Support the developer. Build a better you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="rounded-3xl border border-white/5 bg-surface p-8 hover:border-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Free</h3>
                <span className="inline-flex items-center rounded-full bg-white/10 text-white text-xs font-medium px-3 py-1">
                  Included
                </span>
              </div>

              <div className="mt-6 space-y-1 text-center">
                <div className="text-4xl font-bold text-white">$0<span className="text-lg font-normal text-text-muted">/forever</span></div>
              </div>

              <ul className="mt-8 space-y-4">
                {[
                  'Core habit tracking',
                  'Basic reminders',
                  'Join circles',
                  'Sync across devices',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-text-muted mt-0.5" />
                    <span className="text-text-secondary text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-8 w-full rounded-xl border border-white/10 bg-white/5 text-white p-4 font-semibold hover:bg-white/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Get started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="rounded-3xl border border-primary/30 bg-surfaceLight p-8 relative overflow-hidden shadow-2xl shadow-primary/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="flex items-center justify-between relative">
                <h3 className="text-xl font-bold text-white">Pro</h3>
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-primary to-accent-blue text-white text-xs font-bold px-3 py-1 shadow-lg shadow-primary/20">
                  Most popular
                </span>
              </div>

              <div className="mt-6 flex items-center justify-center relative">
                <div className="inline-flex rounded-lg border border-white/10 p-1 bg-background/50 backdrop-blur-sm">
                  <button
                    className={`px-4 py-1.5 text-sm rounded-md font-medium transition-all ${billing === 'monthly' ? 'bg-white/10 text-white shadow-sm' : 'text-text-muted hover:text-white'}`}
                    onClick={() => setBilling('monthly')}
                  >
                    Monthly
                  </button>
                  <button
                    className={`px-4 py-1.5 text-sm rounded-md font-medium transition-all ${billing === 'yearly' ? 'bg-white/10 text-white shadow-sm' : 'text-text-muted hover:text-white'}`}
                    onClick={() => setBilling('yearly')}
                  >
                    Yearly
                  </button>
                </div>
              </div>

              <div className="mt-6 space-y-1 text-center relative">
                <div className="text-4xl font-bold text-white">{price}<span className="text-lg font-normal text-text-muted">{suffix}</span></div>
                {savings && (
                  <div className="text-primary-light text-sm font-medium">Save $10 compared to monthly</div>
                )}
              </div>

              <ul className="mt-8 space-y-4 relative">
                {[
                  'Advanced analytics and insights',
                  'Unlimited circles and habits',
                  'Priority support',
                  'Custom reminders & widgets',
                  'Support an indie developer',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-primary mt-0.5" />
                    <span className="text-white text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-8 w-full rounded-xl bg-gradient-to-r from-primary to-accent-blue text-white p-4 font-bold hover:shadow-lg hover:shadow-primary/25 transition-all hover:scale-[1.02] active:scale-[0.98] relative"
              >
                Get Pro
              </button>

              <p className="mt-4 text-center text-xs text-text-muted relative">Cancel anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


