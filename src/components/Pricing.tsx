import { CheckCircle2 } from 'lucide-react'

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Go Pro
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Unlock premium features that help you stay consistent and grow faster.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="rounded-2xl border border-slate-200 p-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Pro</h3>
              <span className="inline-flex items-center rounded-full bg-primary-50 text-primary-700 text-xs font-medium px-2.5 py-1">
                Most popular
              </span>
            </div>

            <div className="mt-6 space-y-1">
              <div className="text-3xl font-semibold">$5<span className="text-base font-normal text-slate-600">/month</span></div>
              <div className="text-slate-600 text-sm">or $50/year <span className="text-primary-700 font-medium">(save $10)</span></div>
            </div>

            <ul className="mt-8 space-y-3">
              {[
                'Advanced analytics and insights',
                'Unlimited circles and habits',
                'Priority support',
                'Data export & backup',
                'Custom reminders & widgets',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary-600 mt-0.5" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-8 w-full rounded-lg bg-primary-600 text-white p-4 font-semibold hover:bg-primary-700 transition"
            >
              Get Pro
            </button>

            <p className="mt-3 text-center text-xs text-slate-500">Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  )
}


