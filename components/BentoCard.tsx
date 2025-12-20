'use client'

import { useRef, useState } from 'react'

interface BentoCardProps {
  children: React.ReactNode
  className?: string
  title?: string
  description?: string
}

export default function BentoCard({ children, className = '', title, description }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: '50%', y: '50%' })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({
      x: `${x}px`,
      y: `${y}px`,
    })
  }

  return (
    <div
      ref={cardRef}
      className={`bento-card flex flex-col w-full overflow-hidden ${className}`}
      style={{
        '--mouse-x': mousePosition.x,
        '--mouse-y': mousePosition.y,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
    >
      {/* Visual content area */}
      <div className="flex-1 p-4 sm:p-6 md:p-8 overflow-hidden">
        {children}
      </div>

      {/* Text content area */}
      {(title || description) && (
        <div className="p-4 sm:p-6 md:p-8 pt-0">
          {title && <h3 className="text-lg sm:text-xl font-medium text-white mb-2">{title}</h3>}
          {description && <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{description}</p>}
        </div>
      )}
    </div>
  )
}
