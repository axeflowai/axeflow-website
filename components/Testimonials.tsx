'use client'

import { useState, useRef } from 'react'

const testimonials = [
  {
    quote: "We used to spend 4 hours a day calling leads. Axeflow does it instantly. Our trucks are full.",
    name: "Mike Johnson",
    title: "Fleet Manager",
    company: "TransCorp Logistics",
  },
  {
    quote: "The AI qualification is incredible. We only talk to drivers who actually meet our requirements now.",
    name: "Sarah Chen",
    title: "Director of Recruiting",
    company: "National Freight Inc",
  },
  {
    quote: "ROI was visible in the first month. We hired 23 drivers in 30 days. That's a company record.",
    name: "David Williams",
    title: "VP Operations",
    company: "Elite Carriers",
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Calculate tilt angles (max 10 degrees)
    const tiltX = ((y - centerY) / centerY) * -10
    const tiltY = ((x - centerX) / centerX) * 10

    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <section className="section-padding-sm px-4 sm:px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Quote Card with 3D Tilt Effect */}
        <div
          ref={cardRef}
          className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 text-center tilt-card"
          style={{
            transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {/* Quote Icon */}
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-4 sm:mb-6 md:mb-8 text-accent/30"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          {/* Quote Text */}
          <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed mb-5 sm:mb-6 md:mb-8 px-2">
            &ldquo;{testimonials[activeIndex].quote}&rdquo;
          </blockquote>

          {/* Attribution */}
          <div>
            <p className="text-white font-medium text-sm sm:text-base">{testimonials[activeIndex].name}</p>
            <p className="text-xs sm:text-sm">
              <span className="text-gray-400">{testimonials[activeIndex].title}</span>
              <span className="text-accent"> @ {testimonials[activeIndex].company}</span>
            </p>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${
                i === activeIndex
                  ? 'bg-accent w-6 sm:w-8'
                  : 'bg-white/20 w-2 hover:bg-white/40'
              }`}
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
