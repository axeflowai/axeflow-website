'use client'

import { useEffect, useState } from 'react'

export default function DataStream() {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(true)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Social Platform Icons - Responsive layout */}
      <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 w-full max-w-full px-2">
        {/* Facebook */}
        <div className="relative flex-shrink-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl border border-white/20 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="white" strokeWidth="1.5">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </div>
          {/* Data stream line - Hidden on very small screens */}
          <svg
            className="absolute left-full top-1/2 -translate-y-1/2 hidden sm:block"
            width="40"
            height="2"
            viewBox="0 0 40 2"
            style={{ maxWidth: '40px' }}
          >
            <line
              x1="0"
              y1="1"
              x2="40"
              y2="1"
              stroke="#00bf63"
              strokeWidth="2"
              strokeDasharray="4 4"
              className={isActive ? 'animate-stream' : ''}
            />
          </svg>
        </div>

        {/* Central Funnel Icon */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center flex-shrink-0">
          <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" stroke="#00bf63" strokeWidth="1.5">
            <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
          </svg>
        </div>

        {/* Instagram */}
        <div className="relative flex-shrink-0">
          {/* Data stream line - Hidden on very small screens */}
          <svg
            className="absolute right-full top-1/2 -translate-y-1/2 hidden sm:block"
            width="40"
            height="2"
            viewBox="0 0 40 2"
            style={{ maxWidth: '40px' }}
          >
            <line
              x1="0"
              y1="1"
              x2="40"
              y2="1"
              stroke="#00bf63"
              strokeWidth="2"
              strokeDasharray="4 4"
              className={isActive ? 'animate-stream-reverse' : ''}
            />
          </svg>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl border border-white/20 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="white" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes stream {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -16;
          }
        }
        @keyframes stream-reverse {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 16;
          }
        }
        .animate-stream {
          animation: stream 0.5s linear infinite;
        }
        .animate-stream-reverse {
          animation: stream-reverse 0.5s linear infinite;
        }
      `}</style>
    </div>
  )
}
