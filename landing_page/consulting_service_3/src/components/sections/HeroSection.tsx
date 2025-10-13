import { ArrowRight, Award, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center scroll-snap-section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Trust Badge */}
            <div className="neuro-badge text-primary">
              <Award className="w-4 h-4" />
              <span>Trusted by 500+ Companies</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Strategic Consulting That
              <span className="text-primary block mt-2">Drives Real Results</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-muted leading-relaxed">
              Partner with expert consultants who understand your challenges. 
              We deliver actionable strategies and hands-on support to accelerate 
              your growth and maximize profitability.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#benefits" className="btn-secondary inline-flex items-center gap-2">
                Learn More
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">300%</div>
                <div className="text-sm text-muted mt-1">Avg Growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted mt-1">Client Success</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-float">
            {/* Main Neumorphic Card */}
            <div className="neuro-card p-8 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Performance Overview</h3>
                <div className="neuro-badge text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm">+156%</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Revenue Growth</span>
                    <span className="font-semibold">156%</span>
                  </div>
                  <div className="neuro-inset h-3 rounded-full overflow-hidden relative">
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      style={{ width: '78%' }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Operational Efficiency</span>
                    <span className="font-semibold">142%</span>
                  </div>
                  <div className="neuro-inset h-3 rounded-full overflow-hidden relative">
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      style={{ width: '71%' }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted">Market Position</span>
                    <span className="font-semibold">168%</span>
                  </div>
                  <div className="neuro-inset h-3 rounded-full overflow-hidden relative">
                    <div 
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                      style={{ width: '84%' }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Client Info */}
              <div className="neuro-card p-4">
                <div className="flex items-center gap-4">
                  <div className="neuro-icon w-12 h-12">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold">Success Story</div>
                    <div className="text-sm text-muted">Mid-Market Enterprise</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
