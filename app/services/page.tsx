'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/services'
import { ServiceCard, SectionHeading, CTABanner } from '@/components/ui/Cards'
import { Code, Zap, Shield, Wrench, Wind, Palette, Circle, Droplet, Thermometer, Sparkles } from 'lucide-react'

const iconMap: Record<string, any> = {
  Cpu: Code,
  Zap,
  Code,
  Shield,
  Wind: Zap,
  Wrench,
  Palette: Shield,
  Circle: Wrench,
  Droplet: Zap,
  Thermometer: Shield,
  Sparkles: Code,
}

export default function ServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-steel-mid to-steel-dark py-20">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-steel-light max-w-2xl mx-auto">
              Comprehensive auto repair and programming services for all major brands in Dubai
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-steel-dark">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => {
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
        </div>
      </section>

      <CTABanner
        title="Need a Specific Service?"
        subtitle="Contact us today for a free diagnostic and quote"
      />
    </>
  )
}
