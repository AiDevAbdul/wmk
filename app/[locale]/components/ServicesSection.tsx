'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Wrench } from 'lucide-react'
import Link from 'next/link'
import { ServiceCard, ServiceCardFeatured } from '@/components/ui/Cards'
import { services } from '@/lib/services'
import { iconMap } from '@/lib/iconMap'
import { useParams } from 'next/navigation'

export function ServicesSection() {
  const params = useParams()
  const locale = (params?.locale as string) || 'en'
  const firstService = services[0]!
  const restServices = services.slice(1, 6)
  const FeaturedIcon = iconMap[firstService?.icon] || Wrench

  return (
    <section className="relative py-28 bg-steel-dark overflow-hidden">
      {/* Ambient glow top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[400px] opacity-[0.04] pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse at top right, #F5C518, transparent 65%)' }} />

      <div className="container-max relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="section-label mb-4 inline-flex">Our Expertise</span>
            <h2 className="font-black text-white" style={{ letterSpacing: '-0.03em', lineHeight: 1.05 }}>
              What We Fix &amp; Service
            </h2>
          </div>
          <Link
            href={`/${locale}/services`}
            className="group flex items-center gap-2 text-sm font-semibold text-steel-light/60 hover:text-primary transition-colors duration-200 flex-shrink-0"
          >
            View All Services
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(0,1fr)]">
          {/* Featured — tall left card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:row-span-2"
          >
            <ServiceCardFeatured
              icon={FeaturedIcon}
              title={firstService.name}
              description={firstService.description}
              href={`/${locale}/services/${firstService.slug}`}
            />
          </motion.div>

          {/* Remaining 5 services */}
          {restServices.map((service, i) => {
            const Icon = iconMap[service.icon] || Wrench
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <ServiceCard
                  icon={Icon}
                  title={service.name}
                  description={service.description}
                  href={`/${locale}/services/${service.slug}`}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
