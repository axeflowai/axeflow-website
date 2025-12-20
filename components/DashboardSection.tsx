'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Badge from './ui/Badge'

const stages = [
  { name: 'Applied', count: 124 },
  { name: 'Qualified', count: 89 },
  { name: 'Interview', count: 34 },
  { name: 'Hired', count: 12 },
]

export default function DashboardSection() {
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null)

  return (
    <section id="results" className="section-padding px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <Badge variant="success" className="mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Deep Visibility
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4 md:mb-6">
              Stop chasing ghosts.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0">
              See exactly where every driver is in your pipeline in real-time.
              Track qualification status, interview progress, and conversion metrics
              from a single command center.
            </p>

            {/* Feature List */}
            <ul className="space-y-3 md:space-y-4 text-left max-w-lg mx-auto lg:mx-0">
              {[
                'Real-time pipeline visualization',
                'Automated status updates',
                'Conversion rate analytics',
                'Team performance tracking',
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dashboard Visual with Framer Motion */}
          <div className="relative">
            <motion.div
              className="rounded-xl md:rounded-2xl border border-white/10 bg-surface overflow-hidden cursor-pointer"
              whileHover={{
                y: -4,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 25,
              }}
            >
              {/* Pipeline Board */}
              <div className="p-3 sm:p-4 md:p-6">
                <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
                  <h4 className="text-xs sm:text-sm font-medium text-white">Live Pipeline</h4>
                  <span className="text-[10px] sm:text-xs text-accent flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Live
                  </span>
                </div>

                {/* Pipeline grid - always visible, responsive sizing */}
                <div className="grid grid-cols-4 gap-2 sm:gap-3">
                  {stages.map((stage, stageIndex) => {
                    const isHired = stage.name === 'Hired'
                    const isHovered = hoveredColumn === stageIndex

                    return (
                      <div
                        key={stage.name}
                        className={`p-2 sm:p-3 md:p-4 rounded-lg transition-all duration-300 ${
                          isHired ? 'bg-accent/10 border-l-2 border-accent' : 'bg-white/5'
                        }`}
                        style={{
                          backgroundColor: isHovered && !isHired ? 'rgba(255, 255, 255, 0.1)' : undefined,
                        }}
                        onMouseEnter={() => setHoveredColumn(stageIndex)}
                        onMouseLeave={() => setHoveredColumn(null)}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 md:mb-3 gap-0.5 sm:gap-0">
                          <span
                            className={`text-[9px] sm:text-[10px] md:text-xs transition-colors duration-300 ${
                              isHired ? 'text-accent' : isHovered ? 'text-white' : 'text-gray-400'
                            }`}
                          >
                            {stage.name}
                          </span>
                          <span
                            className={`text-[10px] sm:text-xs md:text-sm font-medium ${
                              isHired ? 'text-accent' : 'text-white'
                            }`}
                          >
                            {stage.count}
                          </span>
                        </div>

                        {/* Candidate Cards */}
                        <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                          {[...Array(isHired ? 2 : 3)].map((_, i) => (
                            <div
                              key={i}
                              className={`h-6 sm:h-8 md:h-10 rounded-md ${
                                isHired ? 'bg-accent/20' : 'bg-white/5'
                              } flex items-center px-1.5 sm:px-2 gap-1 sm:gap-1.5 md:gap-2`}
                            >
                              <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-white/10 flex-shrink-0" />
                              <div className="flex-1 h-1 sm:h-1.5 md:h-2 rounded bg-white/10" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>

            {/* Decorative glow */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}
