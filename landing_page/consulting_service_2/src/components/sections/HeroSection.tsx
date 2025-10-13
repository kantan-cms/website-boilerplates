import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center animated-bg scroll-snap-section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 glass-button px-4 py-2">
              <Award className="w-4 h-4 text-emerald-500" />
              <span className="text-sm font-semibold">Trusted by 750+ Companies</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Transform Your
              <span className="gradient-text block mt-2">Business Growth</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Strategic consulting that delivers measurable results. We help mid-market companies 
              accelerate growth, optimize operations, and achieve breakthrough performance.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#benefits" className="btn-secondary inline-flex items-center gap-2">
                Explore Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <div className="text-3xl font-bold gradient-text">5x</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Avg. ROI</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">92%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Client Retention</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">$5B+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">Value Created</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-float">
            {/* Main Glass Card */}
            <div className="glass-card p-8 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Growth Dashboard</h3>
                <div className="flex items-center gap-2 text-emerald-500">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-sm font-semibold">+247%</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Revenue Growth</span>
                    <span className="font-semibold">247%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full gradient-accent" style={{ width: '85%' }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Market Share</span>
                    <span className="font-semibold">165%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full gradient-accent" style={{ width: '68%' }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Operational Efficiency</span>
                    <span className="font-semibold">189%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full gradient-accent" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>

              {/* Team Insight */}
              <div className="glass-button p-4 flex items-center gap-4">
                <div className="w-12 h-12 gradient-accent rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold">Team Performance</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    15 strategic initiatives active
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 gradient-accent rounded-3xl opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500 rounded-3xl opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
