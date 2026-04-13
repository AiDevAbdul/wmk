'use client'

import { CTABanner } from '@/components/ui/Cards'
import { HeroSection } from './components/HeroSection'
import { StatsStrip } from './components/StatsStrip'
import { ServicesSection } from './components/ServicesSection'
import { SpecializationSection } from './components/SpecializationSection'
import { BrandsSection } from './components/BrandsSection'
import { WhyChooseSection } from './components/WhyChooseSection'
import { TestimonialsSection } from './components/TestimonialsSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsStrip />
      <ServicesSection />
      <SpecializationSection />
      <BrandsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTABanner
        title="Ready to Book?"
        subtitle="Call or WhatsApp us now for fast, reliable auto repair in Dubai"
      />
    </>
  )
}
