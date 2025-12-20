import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import BentoGrid from '@/components/BentoGrid'
import DashboardSection from '@/components/DashboardSection'
import ConnectedIntegrations from '@/components/ConnectedIntegrations'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <BentoGrid />
      <DashboardSection />
      <ConnectedIntegrations />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  )
}
