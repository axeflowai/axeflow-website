'use client'

interface VoiceWaveProps {
  isPlaying?: boolean
  isButtonHovered?: boolean
}

export default function VoiceWave({ isPlaying = false, isButtonHovered = false }: VoiceWaveProps) {
  const bars = 40

  return (
    <div className="flex items-center justify-center gap-[2px] h-20 sm:h-24 md:h-28">
      {[...Array(bars)].map((_, i) => {
        const maxHeight = Math.sin((i / bars) * Math.PI) * 100

        return (
          <div
            key={i}
            className="w-[2px] sm:w-[3px] rounded-full bg-accent transition-all"
            style={{
              height: `${maxHeight}%`,
              minHeight: '4px',
              animation: isPlaying
                ? `wave-playing 0.4s ease-in-out ${(i / bars) * 0.2}s infinite alternate`
                : isButtonHovered
                ? `wave-active 0.6s ease-in-out ${(i / bars) * 0.3}s infinite alternate`
                : `wave-idle 3s ease-in-out ${(i / bars) * 0.8}s infinite alternate`,
              opacity: isPlaying ? 1 : 0.7,
            }}
          />
        )
      })}

      <style jsx>{`
        @keyframes wave-idle {
          0% {
            transform: scaleY(0.4);
          }
          100% {
            transform: scaleY(0.6);
          }
        }
        @keyframes wave-active {
          0% {
            transform: scaleY(0.3);
          }
          100% {
            transform: scaleY(1);
          }
        }
        @keyframes wave-playing {
          0% {
            transform: scaleY(0.2);
          }
          50% {
            transform: scaleY(1.2);
          }
          100% {
            transform: scaleY(0.4);
          }
        }
      `}</style>
    </div>
  )
}
