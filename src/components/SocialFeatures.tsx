import { Users, MessageCircle, Trophy, Heart } from 'lucide-react'

export default function SocialFeatures() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full">
              <Users size={16} className="text-accent-400" />
              <span className="text-sm">Social Features</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold">
              Better Together
              <br />
              <span className="text-gradient">Build Habits with Friends</span>
            </h2>

            <p className="text-xl text-gray-300">
              Join circles, share your progress, and stay accountable. When you're not alone, 
              you're more likely to succeed.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Create Circles</h3>
                  <p className="text-gray-300">
                    Invite friends to join your habit circles. Share the same goal and track progress together.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Nudge Friends</h3>
                  <p className="text-gray-300">
                    Send friendly reminders to circle members who haven't checked in. Keep each other motivated.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Trophy size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Compete & Celebrate</h3>
                  <p className="text-gray-300">
                    View leaderboards, celebrate milestones, and cheer each other on as you build better habits.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Group Streaks</h3>
                  <p className="text-gray-300">
                    Build collective streaks as a group. When everyone contributes, everyone wins together.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="glass rounded-3xl p-8 glow">
              {/* Mock Circle Card */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Users size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold">Morning Runners</h4>
                      <p className="text-sm text-gray-400">5 members • 23 day streak 🔥</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Member 1 */}
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <span className="font-bold">A</span>
                      </div>
                      <div>
                        <p className="font-semibold">Alex</p>
                        <p className="text-xs text-gray-400">Completed today</p>
                      </div>
                    </div>
                    <div className="text-green-500 font-bold">✓</div>
                  </div>

                  {/* Member 2 */}
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <span className="font-bold">S</span>
                      </div>
                      <div>
                        <p className="font-semibold">Sarah</p>
                        <p className="text-xs text-gray-400">30 day streak! 🎉</p>
                      </div>
                    </div>
                    <div className="text-green-500 font-bold">✓</div>
                  </div>

                  {/* Member 3 */}
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="font-bold">M</span>
                      </div>
                      <div>
                        <p className="font-semibold">Mike</p>
                        <p className="text-xs text-gray-400">Not yet today</p>
                      </div>
                    </div>
                    <button className="text-xs px-3 py-1 bg-accent-500/20 text-accent-300 rounded-full">
                      Nudge
                    </button>
                  </div>
                </div>

                {/* Group Progress */}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-400">Group Progress</span>
                    <span className="text-sm font-bold">67%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" style={{ width: '67%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

