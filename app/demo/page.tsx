'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const messages = [
  'The demo video is coming soon...',
  'We are preparing something special...',
]

export default function DemoPage() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  useEffect(() => {
    const currentMessage = messages[currentMessageIndex]
    const typingSpeed = isDeleting ? 30 : 50
    const pauseTime = 2000

    if (!isDeleting && displayedText === currentMessage) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayedText === '') {
      // Move to next message
      setIsDeleting(false)
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length)
      return
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText(currentMessage.substring(0, displayedText.length - 1))
      } else {
        setDisplayedText(currentMessage.substring(0, displayedText.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentMessageIndex])

  return (
    <div className="min-h-screen bg-void relative overflow-hidden">
      {/* Grid Background */}
      <div className="infinity-grid" aria-hidden="true" />

      {/* Noise Overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Green Orb Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 191, 99, 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Back to Home Link */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* Main Content */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto w-full">

          {/* Typewriter Heading */}
          <div className="mb-8 sm:mb-10 md:mb-12 min-h-[80px] sm:min-h-[100px] flex items-center justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white">
              {displayedText}
              <span className="inline-block w-[3px] h-[1em] bg-accent ml-1 animate-blink" />
            </h1>
          </div>

          {/* CTA Button */}
          <a
            href="https://cal.com/axeflow/axeflowmeeting"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 sm:px-10 md:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg md:text-xl font-medium text-void transition-all duration-300 mb-4 sm:mb-6"
            style={{
              backgroundColor: '#00bf63',
              transform: isButtonHovered ? 'scale(1.05)' : 'scale(1)',
              boxShadow: isButtonHovered
                ? '0 0 40px rgba(0, 191, 99, 0.6), 0 0 80px rgba(0, 191, 99, 0.3)'
                : '0 0 30px rgba(0, 191, 99, 0.3)',
            }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Book your call
          </a>

          {/* Sub-text */}
          <p className="text-gray-500 text-sm sm:text-base">
            Skip the wait and see the AI in action live.
          </p>
        </div>
      </main>

      {/* Cursor Blink Animation */}
      <style jsx global>{`
        @keyframes blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  )
}
