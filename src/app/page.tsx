'use client'

import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import EmberParticles from '@/components/effects/EmberParticles'
import HeroSection from '@/components/sections/HeroSection'
import ServicesOverview from '@/components/sections/ServicesOverview'
import WhyChooseUs from '@/components/sections/WhyChooseUs'
import ProcessSection from '@/components/sections/ProcessSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <main className="relative">
      <EmberParticles />
      <Navbar />
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
