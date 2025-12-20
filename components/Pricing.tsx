'use client'

import { useState } from 'react'
import Badge from './ui/Badge'

export default function Pricing() {
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  return (
    <section id="pricing" className="section-padding px-4 md:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-16">
          <Badge variant="success" className="mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Pricing
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3 sm:mb-4 px-2">
            Done-For-You Recruitment
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Let our AI and expert team handle your entire driver recruitment pipeline.
          </p>
        </div>

        {/* Single Enterprise Card - Centered */}
        <div className="flex justify-center">
          <div
            className="relative w-full max-w-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col bg-surface border-2 border-accent/50 transition-all duration-500"
            style={{
              boxShadow: '0 0 40px rgba(0, 191, 99, 0.15), 0 0 80px rgba(0, 191, 99, 0.05)',
            }}
          >
            {/* Recommended Badge */}
            <Badge variant="accent" className="absolute -top-3 left-1/2 -translate-x-1/2">
              Enterprise
            </Badge>

            {/* Plan Header */}
            <div className="text-center mb-6 sm:mb-8 pt-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-white mb-3 sm:mb-4">
                Custom Solution
              </h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
                Scalable, AI-driven driver recruitment managed entirely by our team.
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {[
                'Unlimited driver leads',
                'AI Voice + SMS qualification',
                'Dedicated account manager',
                'Custom AI training for your fleet',
                'Real-time analytics dashboard',
                'White-label options available',
                'Priority 24/7 support',
                'Full pipeline management',
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-2.5 sm:gap-3">
                  <svg
                    className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="https://cal.com/axeflow/axeflowmeeting"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium text-void text-center transition-all duration-300 block"
              style={{
                backgroundColor: '#00bf63',
                transform: isButtonHovered ? 'scale(1.02)' : 'scale(1)',
                boxShadow: isButtonHovered
                  ? '0 0 30px rgba(0, 191, 99, 0.5), 0 0 60px rgba(0, 191, 99, 0.3)'
                  : '0 0 20px rgba(0, 191, 99, 0.2)',
              }}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              Contact Sales
            </a>

            {/* Subtle note */}
            <p className="text-center text-gray-500 text-xs sm:text-sm mt-4">
              Book a free strategy call with our team
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
