'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Code, Wrench } from 'lucide-react'
import { containerVariants, itemVariants } from '@/lib/animations'

export function WhyChooseSection() {
  const benefits = [
    { icon: Shield, title: 'Expert Technicians', desc: 'Certified professionals with 10+ years of experience in ECM repair, programming, and diagnostics' },
    { icon: Zap, title: 'Modern Diagnostics', desc: 'Latest equipment and software for accurate diagnosis and precision repairs' },
    { icon: Code, title: 'All Brands & EVs', desc: 'We service 16+ brands including Tesla, BYD, BMW, Mercedes, and more' },
    { icon: Wrench, title: 'Transparent Pricing', desc: 'No hidden fees, free diagnostics, honest quotes, and guaranteed workmanship' },
  ]

  return (
    <section className="py-24 bg-linear-to-b from-steel-mid to-steel-dark relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex justify-center mb-6">
            <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">✨ Why We're Different</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Why Choose <span className="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">WMK</span>
          </h2>
          <p className="text-white font-medium text-lg max-w-2xl mx-auto leading-relaxed">
            We're not just another repair shop. We're your trusted partner for elite automotive expertise.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {benefits.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Card Background with Gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/8 to-primary/4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Card Border Glow */}
                <div className="absolute inset-0 rounded-xl border border-primary/20 group-hover:border-primary/60 transition-colors duration-300"></div>

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                </div>

                {/* Content */}
                <div className="relative p-8 text-center h-full flex flex-col justify-center">
                  {/* Icon Container with Glow */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="relative mb-6 flex justify-center"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-primary/40 to-primary/20 rounded-full blur-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                    <div className="relative w-16 h-16 flex items-center justify-center bg-linear-to-br from-primary/20 to-primary/10 rounded-xl border border-primary/40 group-hover:border-primary/80 transition-all duration-300">
                      <Icon size={32} className="text-primary group-hover:text-primary transition-colors duration-300" />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold tracking-tight text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-steel-light/85 font-medium leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
