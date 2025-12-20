'use client'

import { useState } from 'react'
import Image from 'next/image'

const integrations = [
  { name: 'Indeed', logo: '/images/logos/indeed.svg' },
  { name: 'CDL Life', logo: '/images/logos/cdllife.svg' },
  { name: 'Facebook', logo: '/images/logos/facebook.svg' },
  { name: 'ZipRecruiter', logo: '/images/logos/ziprecruiter.svg' },
  { name: 'LinkedIn', logo: '/images/logos/linkedin.svg' },
]

export default function IntegrationsCarousel() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section
      className="py-24 bg-[#050505] relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">Integrations</p>
          <h3 className="text-2xl md:text-3xl font-medium text-white">
            Post Anywhere. Manage Everything.
          </h3>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="group relative flex flex-col items-center gap-4"
            >
              {/* Connection line (visible on hover) */}
              {isHovered && (
                <svg
                  className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
                  width="2"
                  height="32"
                  viewBox="0 0 2 32"
                >
                  <line
                    x1="1"
                    y1="0"
                    x2="1"
                    y2="32"
                    stroke="#00bf63"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className="animate-stream"
                  />
                </svg>
              )}

              {/* Logo Container */}
              <div
                className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl border flex items-center justify-center p-4 transition-all duration-300 ${
                  isHovered
                    ? 'border-accent/50 bg-accent/5'
                    : 'border-white/10 bg-white/5'
                }`}
              >
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  width={64}
                  height={64}
                  className={`w-full h-full object-contain transition-all duration-300 ${
                    isHovered ? 'opacity-100 brightness-110' : 'opacity-70 grayscale'
                  }`}
                />
              </div>

              {/* Name */}
              <span className={`text-sm transition-colors duration-300 ${
                isHovered ? 'text-white' : 'text-gray-500'
              }`}>
                {integration.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Central convergence point indicator */}
      {isHovered && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-accent to-transparent" />
      )}

      <style jsx>{`
        @keyframes stream {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -16;
          }
        }
        .animate-stream {
          animation: stream 0.5s linear infinite;
        }
      `}</style>
    </section>
  )
}
