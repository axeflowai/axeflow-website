'use client'

import { useState, useRef, useEffect } from 'react'
import BentoCard from './BentoCard'
import VoiceWave from './animations/VoiceWave'
import SMSChat from './animations/SMSChat'
import DataStream from './animations/DataStream'
import Badge from './ui/Badge'

export default function BentoGrid() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isButtonHovered, setIsButtonHovered] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio('/voice-demo.mp3')
    audioRef.current.preload = 'auto'

    // Handle audio end
    const handleEnded = () => {
      setIsPlaying(false)
    }

    audioRef.current.addEventListener('ended', handleEnded)

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleEnded)
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const handlePlayPause = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().catch(console.error)
      setIsPlaying(true)
    }
  }

  return (
    <section id="features" className="section-padding px-4 md:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-16">
          <Badge variant="success" className="mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Core Features
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight text-white mb-3 md:mb-4">
            Autonomous Qualification
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            Deploy AI recruiting agents that work 24/7 to qualify, engage, and convert driver applicants.
          </p>
        </div>

        {/* Bento Grid - Single column on mobile, 2 columns on tablet+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
          {/* Card 1 - AI Voice (Large, spans 2 rows on desktop) - Increased height */}
          <BentoCard
            className="md:row-span-2 min-h-[520px] sm:min-h-[580px] md:min-h-[680px]"
            title="AI Voice Qualification"
            description="Our AI conducts intelligent phone screenings, qualifying candidates based on your exact requirements. Available 24/7, never misses a call."
          >
            <div className="relative h-full min-h-[380px] sm:min-h-[420px] md:min-h-[480px] flex flex-col items-center py-4 sm:py-6 md:py-8">
              {/* Candidate Qualified Badge - At the TOP */}
              <div className="glass-card rounded-full px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 md:mb-10">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[10px] sm:text-xs md:text-sm text-white whitespace-nowrap">Candidate Qualified</span>
              </div>

              {/* Waveform in the middle - with playing animation */}
              <div className="flex-1 flex items-center justify-center w-full overflow-hidden">
                <VoiceWave isPlaying={isPlaying} isButtonHovered={isButtonHovered} />
              </div>

              {/* Play/Pause Button - at the bottom with plenty of space */}
              <div className="mt-auto pt-6 sm:pt-8 md:pt-10">
                <button
                  onClick={handlePlayPause}
                  className={`relative z-10 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-500 pointer-events-auto touch-manipulation ${
                    isPlaying
                      ? 'bg-accent text-void'
                      : 'bg-accent/20 text-accent border border-accent/30'
                  }`}
                  style={{
                    boxShadow: isPlaying
                      ? '0 0 20px rgba(0, 191, 99, 0.5), 0 0 40px rgba(0, 191, 99, 0.3)'
                      : isButtonHovered
                      ? '0 0 15px rgba(0, 191, 99, 0.4), 0 0 30px rgba(0, 191, 99, 0.2)'
                      : '0 0 0 rgba(0, 191, 99, 0)',
                    animation: isPlaying ? 'pulse-button 2s ease-in-out infinite' : 'none',
                  }}
                  onMouseEnter={() => setIsButtonHovered(true)}
                  onMouseLeave={() => setIsButtonHovered(false)}
                >
                  {isPlaying ? 'Pause Recording' : 'Listen to AI Call'}
                </button>
              </div>
            </div>
          </BentoCard>

          {/* Card 2 - SMS Chat */}
          <BentoCard
            className="min-h-[220px] sm:min-h-[250px] md:min-h-[270px]"
            title="Instant SMS Engagement"
            description="Speed to lead matters. Engage applicants within seconds of application with personalized AI conversations."
          >
            <div className="h-full min-h-[120px] sm:min-h-[140px] md:min-h-[160px] flex items-center overflow-hidden">
              <div className="w-full max-w-sm mx-auto bg-surface/50 rounded-xl md:rounded-2xl p-2.5 sm:p-3 md:p-4 border border-white/5">
                <SMSChat />
              </div>
            </div>
          </BentoCard>

          {/* Card 3 - Meta Ads Integration */}
          <BentoCard
            className="min-h-[220px] sm:min-h-[250px] md:min-h-[270px]"
            title="Multi-Channel Sourcing"
            description="Connect Facebook, Instagram, and job boards. All leads flow into one unified pipeline."
          >
            <div className="h-full min-h-[120px] sm:min-h-[140px] md:min-h-[160px] flex items-center justify-center overflow-hidden">
              <DataStream />
            </div>
          </BentoCard>
        </div>
      </div>

      {/* Button pulse animation */}
      <style jsx global>{`
        @keyframes pulse-button {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 191, 99, 0.5), 0 0 40px rgba(0, 191, 99, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(0, 191, 99, 0.7), 0 0 60px rgba(0, 191, 99, 0.4);
          }
        }
      `}</style>
    </section>
  )
}
