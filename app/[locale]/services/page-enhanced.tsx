'use client'

import { motion } from 'framer-motion'
import { services } from '@/lib/services'
import { ServiceCard, CTABanner } from '@/components/ui/Cards'
import { Code, Zap, Shield, Wrench, Wind, Palette, Circle, Droplet, Thermometer, Sparkles, ArrowRight } from 'lucide-react'
import { useState } from 'react'

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

export default function EnhancedServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

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

  const categories = [
    { id: 'all', label: 'All Services', count: services.length },
    { id: 'programming', label: 'Programming', count: services.filter(s => s.slug.includes('programming')).length },
    { id: 'repair', label: 'Repair', count: services.filter(s => s.slug.includes('repair')).length },
    { id: 'maintenance', label: 'Maintenance', count: services.filter(s => s.slug.includes('maintenance')).length },
  ]

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-steel-dark pt-20">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 z-0 opacity-15">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-services" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F5C518" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-services)" />
          </svg>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-steel-dark via-steel-dark/90 to-steel-mid/50 z-1"></div>

        {/* Accent Glow Elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl z-0 animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container-max relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-6 max-w-3xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex justify-center"
            >
              <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                <span className="text-primary font-semibold text-sm tracking-wide uppercase">🔧 12 Core Services</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white tracking-tight"
            >
              <span className="block">Comprehensive Auto</span>
              <span className="block bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">Repair Solutions</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base md:text-lg text-steel-light/80 leading-relaxed tracking-wide font-medium max-w-2xl mx-auto"
            >
              From ECM repair to hybrid battery services, we handle every aspect of automotive maintenance and programming with precision and expertise.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 py-6"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="font-semibold text-white text-sm tracking-tight">Expert Technicians</p>
                  <p className="text-xs text-steel-light/80">10+ years experience</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-steel-light/20"></div>

              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="font-semibold text-white text-sm tracking-tight">Latest Equipment</p>
                  <p className="text-xs text-steel-light/80">Advanced diagnostics</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-steel-light/20"></div>

              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="font-semibold text-white text-sm tracking-tight">Guaranteed Results</p>
                  <p className="text-xs text-steel-light/80">Workmanship guaranteed</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="py-12 bg-steel-dark border-b border-steel-mid/30">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category, idx) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
                className={`px-6 py-3 rounded-full font-semibold text-sm tracking-tight transition-all duration-300 ${
                  selectedCategory === category.id || (selectedCategory === null && category.id === 'all')
                    ? 'bg-gradient-to-r from-primary to-primary/90 text-steel-dark shadow-lg shadow-primary/50'
                    : 'bg-steel-mid/50 text-white hover:bg-steel-mid border border-steel-mid hover:border-primary/50'
                }`}
              >
                {category.label}
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-steel-dark">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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

      {/* Why Choose Our Services Section */}
      <section className="py-24 bg-gradient-to-b from-steel-mid to-steel-dark relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex justify-center mb-6">
              <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                <span className="text-primary font-semibold text-sm tracking-wide uppercase">✨ Why Choose Us</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Service Excellence <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Guaranteed</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: '⚡', title: 'Fast Turnaround', desc: 'Same-day service for most repairs' },
              { icon: '🎯', title: 'Precision Diagnostics', desc: 'Accurate fault detection first time' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden fees, honest quotes' },
              { icon: '🛡️', title: 'Guaranteed Work', desc: 'All repairs backed by warranty' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Card Background with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-primary/4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Card Border Glow */}
                <div className="absolute inset-0 rounded-xl border border-primary/20 group-hover:border-primary/60 transition-colors duration-300"></div>

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                </div>

                {/* Content */}
                <div className="relative p-8 text-center h-full flex flex-col justify-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold tracking-tight text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-steel-light/85 font-medium text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-steel-dark">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-steel-light/80 max-w-2xl mx-auto">
                Contact us today for a free diagnostic and transparent quote on any service
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+971554762284"
                className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 bg-gradient-to-r from-primary to-primary/90 text-steel-dark font-bold rounded-xl hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 overflow-hidden tracking-tight"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative flex items-center gap-2">
                  📞 Call Now
                </span>
              </a>

              <a
                href="https://wa.me/971554762284"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 overflow-hidden tracking-tight rounded-xl font-semibold"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative flex items-center gap-2">
                  💬 WhatsApp
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Need a Specific Service?"
        subtitle="Our expert team is ready to help with fast, reliable solutions"
      />
    </>
  )
}
