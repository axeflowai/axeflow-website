'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const integrations = [
  { name: 'Indeed', logo: '/images/logos/indeed.svg' },
  { name: 'CDL Life', logo: '/images/logos/cdllife.svg' },
  { name: 'Facebook', logo: '/images/logos/facebook.svg' },
  { name: 'ZipRecruiter', logo: '/images/logos/ziprecruiter.svg' },
  { name: 'LinkedIn', logo: '/images/logos/linkedin.svg' },
]

export default function ConnectedIntegrations() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const nodeRef = useRef<HTMLDivElement>(null)
  const iconsContainerRef = useRef<HTMLDivElement>(null)
  const iconRefs = useRef<(HTMLDivElement | null)[]>([])
  const [lineData, setLineData] = useState<{ startX: number; startY: number; icons: { x: number; y: number }[] } | null>(null)

  useEffect(() => {
    const updateLineData = () => {
      if (!containerRef.current || !iconsContainerRef.current || !nodeRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const nodeRect = nodeRef.current.getBoundingClientRect()
      const icons: { x: number; y: number }[] = []

      iconRefs.current.forEach((iconEl) => {
        if (iconEl) {
          const rect = iconEl.getBoundingClientRect()
          icons.push({
            x: rect.left + rect.width / 2 - containerRect.left,
            y: rect.top - containerRect.top,
          })
        }
      })

      if (icons.length === 5) {
        setLineData({
          startX: nodeRect.left + nodeRect.width / 2 - containerRect.left,
          startY: nodeRect.top + nodeRect.height / 2 - containerRect.top,
          icons,
        })
      }
    }

    updateLineData()
    window.addEventListener('resize', updateLineData)
    const timeout = setTimeout(updateLineData, 200)

    return () => {
      window.removeEventListener('resize', updateLineData)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <section className="py-16 sm:py-20 md:py-32 relative overflow-hidden px-4 md:px-6">
      {/* Section-specific grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 80%)',
        }}
      />

      {/* Soft green radial glow */}
      <div
        className="absolute top-16 w-[300px] sm:w-[400px] md:w-[500px] h-[150px] sm:h-[180px] md:h-[200px] pointer-events-none"
        style={{ left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(ellipse at center, rgba(0, 191, 99, 0.12) 0%, rgba(0, 191, 99, 0.03) 50%, transparent 70%)' }}
      />

      <div ref={containerRef} className="max-w-6xl mx-auto relative">

        {/* ===== HEADER BLOCK - Proper flex column, centered ===== */}
        <div className="flex flex-col items-center text-center w-full relative z-20">

          {/* 1. Large White Heading - At the very top */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 sm:mb-5 md:mb-6 px-4">
            All Your Channels, One Pipeline
          </h2>

          {/* 2. Green Tag - Directly below the heading */}
          <span className="font-mono text-accent text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] mb-6 sm:mb-8 md:mb-10">
            [ INTEGRATIONS ]
          </span>

          {/* 3. Central Connection Node - Below the green tag, part of flow */}
          <div
            ref={nodeRef}
            className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-accent animate-pulse mb-8 sm:mb-12 md:mb-16"
            style={{ boxShadow: '0 0 20px rgba(0, 191, 99, 0.8)' }}
          />
        </div>

        {/* ===== SVG Connection Lines ===== */}
        {lineData && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            style={{ overflow: 'visible' }}
          >
            <defs>
              <filter id="glowLine" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="glowLineBright" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {lineData.icons.map((icon, index) => {
              const isHovered = hoveredIndex === index
              const { startX, startY } = lineData

              const midY = startY + (icon.y - startY) * 0.4
              const path = `M ${startX} ${startY} C ${startX} ${midY}, ${icon.x} ${midY}, ${icon.x} ${icon.y}`

              return (
                <g key={index}>
                  {/* Static base line */}
                  <path
                    d={path}
                    fill="none"
                    stroke="rgba(0, 191, 99, 0.15)"
                    strokeWidth="1.5"
                  />

                  {/* Animated flowing line */}
                  <path
                    d={path}
                    fill="none"
                    stroke="#00bf63"
                    strokeWidth={isHovered ? 2.5 : 1.5}
                    strokeDasharray="6 10"
                    opacity={isHovered ? 1 : 0.5}
                    filter={isHovered ? 'url(#glowLineBright)' : 'url(#glowLine)'}
                    style={{
                      animation: `flowDown ${isHovered ? '0.5s' : '1s'} linear infinite`,
                    }}
                  />

                  {/* Traveling particle */}
                  <circle
                    r={isHovered ? 5 : 3}
                    fill="#00bf63"
                    filter={isHovered ? 'url(#glowLineBright)' : 'url(#glowLine)'}
                  >
                    <animateMotion
                      dur={isHovered ? '0.6s' : '1.2s'}
                      repeatCount="indefinite"
                      path={path}
                    />
                  </circle>

                  {/* Glow point at icon connection */}
                  <circle
                    cx={icon.x}
                    cy={icon.y}
                    r={isHovered ? 6 : 4}
                    fill="#00bf63"
                    opacity={isHovered ? 1 : 0.7}
                    filter={isHovered ? 'url(#glowLineBright)' : 'url(#glowLine)'}
                    style={{ transition: 'all 0.3s ease' }}
                  />

                  {/* Pulsing ring on hover */}
                  {isHovered && (
                    <circle
                      cx={icon.x}
                      cy={icon.y}
                      r="8"
                      fill="none"
                      stroke="#00bf63"
                      strokeWidth="2"
                      opacity="0.6"
                      style={{ animation: 'pulseRing 0.8s ease-out infinite' }}
                    />
                  )}
                </g>
              )
            })}
          </svg>
        )}

        {/* ===== Integration Icons Row ===== */}
        <div
          ref={iconsContainerRef}
          className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-5 md:gap-6 relative z-20 px-2"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              ref={(el) => { iconRefs.current[index] = el }}
              className="flex flex-col items-center gap-2 sm:gap-3"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.05 }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 17,
              }}
            >
              {/* Logo Card */}
              <motion.div
                className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-xl md:rounded-2xl border flex items-center justify-center p-2.5 sm:p-3 md:p-4 bg-surface ${
                  hoveredIndex === index ? 'border-accent' : 'border-white/10'
                }`}
                animate={{
                  boxShadow:
                    hoveredIndex === index
                      ? '0 0 30px rgba(0, 191, 99, 0.6), 0 10px 40px -10px rgba(0, 191, 99, 0.4)'
                      : '0 0 0 rgba(0, 191, 99, 0)',
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={integration.logo}
                  alt={integration.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Name */}
              <span
                className={`text-xs sm:text-sm transition-colors duration-300 ${
                  hoveredIndex === index ? 'text-accent' : 'text-gray-500'
                }`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                {integration.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes flowDown {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 16;
          }
        }

        @keyframes pulseRing {
          0% {
            r: 6;
            opacity: 0.8;
          }
          100% {
            r: 20;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
