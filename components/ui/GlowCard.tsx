'use client'

import { useRef, useState } from 'react'

interface GlowCardProps {
  children: React.ReactNode
  className?: string
  glowOnHover?: boolean
}

export default function GlowCard({ children, className = '', glowOnHover = true }: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: '50%', y: '50%' })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glowOnHover) return

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
      className={`bento-card p-10 ${className}`}
      style={{
        '--mouse-x': mousePosition.x,
        '--mouse-y': mousePosition.y,
      } as React.CSSProperties}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  )
}
