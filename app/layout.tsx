import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Axeflow | AI-Powered Driver Recruitment',
  description: 'Recruit drivers at scale with AI. Axeflow qualifies, filters, and contacts applicants instantly. Turn your fleet growth into a predictable science.',
  keywords: ['driver recruitment', 'trucking', 'AI recruiting', 'CDL drivers', 'fleet management'],
  icons: {
    icon: 'https://iili.io/f024rPf.png',
    shortcut: 'https://iili.io/f024rPf.png',
    apple: 'https://iili.io/f024rPf.png',
  },
  openGraph: {
    title: 'Axeflow | AI-Powered Driver Recruitment',
    description: 'Recruit drivers at scale with AI. Turn your fleet growth into a predictable science.',
    type: 'website',
    images: ['https://iili.io/f02hWdJ.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-void text-white font-sans antialiased overflow-x-hidden">
        {/* The Infinity Grid Background */}
        <div className="infinity-grid" aria-hidden="true" />

        {/* Noise Texture Overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Main Content */}
        <main className="relative z-10 w-full overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}
