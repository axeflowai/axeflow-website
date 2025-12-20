'use client'

import Badge from './ui/Badge'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-6 pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden">
      {/* Green Orb Backlight */}
      <div className="green-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto w-full flex flex-col items-center px-2">
        {/* Tech Label */}
        <Badge variant="success" className="mb-4 md:mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          AI Automation
        </Badge>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight leading-[1.1] mb-4 md:mb-6">
          <span className="gradient-text">Recruit Drivers at Scale.</span>
          <br />
          <span className="text-white">Powered by AI.</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2">
          Axeflow qualifies, filters, and contacts applicants instantly.
          Turn your fleet growth into a predictable science.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full max-w-md sm:max-w-none">
          <a
            href="https://cal.com/axeflow/axeflowmeeting"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-green-lg w-full sm:w-auto sm:min-w-[160px] px-8 py-4 text-lg inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full bg-accent text-void hover:bg-accent/90 btn-glow"
          >
            Start Hiring
          </a>
          <a
            href="/demo"
            className="w-full sm:w-auto sm:min-w-[160px] px-8 py-4 text-lg inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full bg-surface text-white border border-white/10 hover:border-accent hover:text-accent"
          >
            Watch Demo
          </a>
        </div>
      </div>

      {/* Dashboard Mockup */}
      <div className="relative mt-10 sm:mt-12 md:mt-20 w-full max-w-5xl mx-auto px-2 sm:px-4 md:px-0 overflow-hidden">
        {/* Dashboard Container with Float Animation */}
        <div className="animate-float">
          <div
            className="relative rounded-xl md:rounded-2xl overflow-hidden border border-white/10 bg-surface/80 backdrop-blur-sm"
            style={{
              transform: 'perspective(1000px) rotateX(2deg)',
            }}
          >
            {/* Dashboard Header */}
            <div className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 border-b border-white/10">
              <div className="flex gap-1 md:gap-1.5">
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-500/80" />
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
                <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-[10px] md:text-xs text-gray-500 ml-2">Axeflow Dashboard</span>
            </div>

            {/* Dashboard Content */}
            <div className="p-3 sm:p-4 md:p-8">
              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-3 sm:mb-4 md:mb-6">
                <StatCard label="Active Leads" value="1,247" trend="+12%" />
                <StatCard label="Qualified" value="834" trend="+8%" />
                <StatCard label="Interviews" value="156" trend="+23%" />
                <StatCard label="Hired" value="47" trend="+15%" highlight />
              </div>

              {/* Pipeline Preview - Fits on mobile */}
              <div className="w-full overflow-hidden">
                <div className="grid grid-cols-4 gap-1 sm:gap-1.5 md:gap-3">
                  {['Applied', 'Screening', 'Interview', 'Hired'].map((stage, i) => (
                    <div
                      key={stage}
                      className={`p-1.5 sm:p-2 md:p-3 rounded-lg ${
                        stage === 'Hired' ? 'bg-accent/10 border border-accent/20' : 'bg-white/5'
                      }`}
                    >
                      <span className={`text-[8px] sm:text-[10px] md:text-xs ${stage === 'Hired' ? 'text-accent' : 'text-gray-400'}`}>
                        {stage}
                      </span>
                      <div className="mt-1 md:mt-2 space-y-0.5 sm:space-y-1 md:space-y-2">
                        {[...Array(3 - i)].map((_, j) => (
                          <div key={j} className="h-4 sm:h-5 md:h-8 rounded bg-white/5" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Fade at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-void to-transparent pointer-events-none" />
      </div>
    </section>
  )
}

function StatCard({
  label,
  value,
  trend,
  highlight = false,
}: {
  label: string
  value: string
  trend: string
  highlight?: boolean
}) {
  return (
    <div className={`p-1.5 sm:p-2 md:p-4 rounded-lg md:rounded-xl ${highlight ? 'bg-accent/10 border border-accent/20' : 'bg-white/5'}`}>
      <span className="text-[8px] sm:text-[10px] md:text-xs text-gray-400 block truncate">{label}</span>
      <div className="flex items-end gap-0.5 sm:gap-1 md:gap-2 mt-0.5 md:mt-1">
        <span className={`text-sm sm:text-base md:text-2xl font-medium ${highlight ? 'text-accent' : 'text-white'}`}>
          {value}
        </span>
        <span className="text-[8px] sm:text-[10px] md:text-xs text-accent mb-0.5 md:mb-1">{trend}</span>
      </div>
    </div>
  )
}
