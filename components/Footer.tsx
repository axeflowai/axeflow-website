'use client'

import { useState } from 'react'

const footerLinks = {
  Product: [
    { name: 'Features', href: '#features', external: false },
    { name: 'Pricing', href: 'https://cal.com/axeflow/axeflowmeeting', external: true },
    { name: 'Integrations', href: '#', external: false },
    { name: 'API', href: '#', external: false },
  ],
  Company: [
    { name: 'About', href: '#', external: false },
    { name: 'Careers', href: '#', external: false },
    { name: 'Blog', href: '#', external: false },
    { name: 'Press', href: '#', external: false },
  ],
  Resources: [
    { name: 'Documentation', href: '#', external: false },
    { name: 'Help Center', href: '#', external: false },
    { name: 'Webinars', href: '#', external: false },
    { name: 'Case Studies', href: '#', external: false },
  ],
  Legal: [
    { name: 'Privacy', href: '#', external: false },
    { name: 'Terms', href: '#', external: false },
    { name: 'Security', href: '#', external: false },
    { name: 'Compliance', href: '#', external: false },
  ],
}

const socialLinks = [
  {
    name: 'X',
    href: 'https://x.com/Axeflowai',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/domantas-darbutas/',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: '#',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  return (
    <footer className="border-t border-white/5 relative overflow-hidden">
      {/* CTA Section */}
      <div className="section-padding-sm px-4 md:px-6 border-b border-white/5 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-3 sm:mb-4 px-2">
            Ready to deploy your AI recruiting team?
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-5 sm:mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            The future of driver recruitment is here.
          </p>

          {/* Get Started Button */}
          <a
            href="https://cal.com/axeflow/axeflowmeeting"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto max-w-[280px] sm:max-w-[320px] px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-medium text-void transition-all duration-300 text-center block"
            style={{
              backgroundColor: '#00bf63',
              transform: isButtonHovered ? 'scale(1.05)' : 'scale(1)',
              boxShadow: isButtonHovered
                ? '0 0 30px rgba(0, 191, 99, 0.5), 0 0 60px rgba(0, 191, 99, 0.3)'
                : '0 0 20px rgba(0, 191, 99, 0.2)',
            }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Get Started for Free
          </a>
        </div>
      </div>

      {/* Links Section */}
      <div className="py-10 sm:py-12 md:py-16 px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8">
            {/* Brand Column */}
            <div className="col-span-2 sm:col-span-3 md:col-span-1 mb-4 md:mb-0">
              <a href="#" className="mb-4 block">
                <img
                  src="https://iili.io/f02hWdJ.png"
                  alt="Axeflow"
                  className="h-7 sm:h-8 md:h-[35px] w-auto object-contain"
                />
              </a>
              <p className="text-xs sm:text-sm text-gray-500 mb-4 max-w-xs">
                AI-powered driver recruitment for the trucking industry.
              </p>
              {/* Social Links */}
              <div className="flex gap-2 sm:gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent/20 hover:text-accent transition-all duration-300"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-xs sm:text-sm font-medium text-white mb-3 sm:mb-4">{category}</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="text-xs sm:text-sm text-gray-500 hover:text-accent transition-colors duration-300"
                        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-4 sm:py-6 px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Axeflow. All rights reserved.
          </p>
          <div className="flex gap-4 sm:gap-6">
            <a
              href="#"
              className="text-xs sm:text-sm text-gray-500 hover:text-accent transition-colors duration-300"
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs sm:text-sm text-gray-500 hover:text-accent transition-colors duration-300"
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
