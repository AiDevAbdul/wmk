'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Wrench } from 'lucide-react'
import Link from 'next/link'
import { ServiceCard } from '@/components/ui/Cards'
import { services } from '@/lib/services'
import { iconMap } from '@/lib/iconMap'
import { containerVariants, itemVariants } from '@/lib/animations'

export function ServicesSection() {
  return (
    <section className="relative py-24 bg-steel-dark overflow-hidden">
      {/* Background Accent Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-1 bg-linear-to-r from-primary/0 to-primary rounded-full"></div>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">Our Expertise</span>
            <div className="w-12 h-1 bg-linear-to-l from-primary/0 to-primary rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            What We <span className="bg-linear-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">Fix</span>
          </h2>
          <p className="text-steel-light/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive automotive solutions for all your repair and programming needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {services.slice(0, 6).map((service) => {
            const IconComponent = iconMap[service.icon] || Wrench
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <ServiceCard
                  icon={IconComponent}
                  title={service.name}
                  description={service.description}
                  href={`/services/${service.slug}`}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <Link href="/services" className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-linear-to-r from-primary to-primary/90 text-steel-dark font-bold rounded-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 overflow-hidden">
            {/* Shine effect */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="relative">View All Services</span>
            <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
