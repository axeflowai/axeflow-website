'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { name: 'Features', href: '#features', external: false },
  { name: 'Results', href: '#results', external: false },
  { name: 'Pricing', href: 'https://cal.com/axeflow/axeflowmeeting', external: true },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-3 sm:top-4 md:top-6 z-50 left-3 right-3 sm:left-[5%] sm:right-auto sm:w-[90%] md:left-1/2 md:-translate-x-1/2 md:w-auto">
      <nav
        className={`glass rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 flex items-center justify-between md:justify-start gap-2 md:gap-3 transition-all duration-500 ${
          isScrolled ? 'shadow-lg' : ''
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        {/* Logo - Full Wordmark */}
        <a href="#" className="flex items-center flex-shrink-0" style={{ marginRight: '8px' }}>
          <img
            src="https://iili.io/f02hWdJ.png"
            alt="Axeflow"
            className="h-5 sm:h-6 md:h-[30px] w-auto object-contain"
          />
        </a>

        {/* Divider - Hidden on mobile */}
        <div className="hidden md:block h-6 w-px bg-white/10 flex-shrink-0" />

        {/* Nav Links - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 rounded-full hover:bg-white/5"
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Divider - Hidden on mobile */}
        <div className="hidden md:block h-6 w-px bg-white/10 flex-shrink-0" />

        {/* CTA Button */}
        <a
          href="https://cal.com/axeflow/axeflowmeeting"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap px-3 sm:px-4 md:px-6 py-2 text-[11px] sm:text-xs md:text-sm flex-shrink-0 inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full bg-accent text-void hover:bg-accent/90 btn-glow"
        >
          Start Hiring
        </a>
      </nav>
    </header>
  )
}
