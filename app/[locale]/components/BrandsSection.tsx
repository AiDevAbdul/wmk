'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { brands } from '@/lib/brands'

export function BrandsSection() {
  return (
    <section className="py-20 bg-steel-dark">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">Trusted Partners</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-white">Trusted With Every</span>
            <br />
            <span className="bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent">Make & Model</span>
          </h2>
          <p className="text-lg text-white/95 leading-relaxed font-semibold max-w-2xl mx-auto">
            We service 16+ premium automotive brands with expert diagnostics and programming capabilities.
          </p>
        </motion.div>

        {/* Brands Carousel - Left to Right */}
        <div className="mb-12 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ['0%', '-100%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...brands, ...brands].map((brand, idx) => (
              <motion.div
                key={`left-${idx}`}
                whileHover={{ scale: 1.08, y: -4 }}
                className="group flex-shrink-0 w-32 flex flex-col items-center justify-center p-6 bg-linear-to-br from-primary/8 to-primary/4 border border-primary/20 rounded-xl hover:border-primary/60 hover:bg-primary/12 transition-all duration-300 cursor-pointer"
              >
                {/* Logo Container */}
                <div className="w-12 h-12 mb-3 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={brand.logo}
                    alt={brand.logoAlt}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
                {/* Brand Name */}
                <span className="font-semibold text-sm text-center text-white/90 group-hover:text-primary transition-colors duration-300 tracking-tight">
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Brands Carousel - Right to Left */}
        <div className="mb-16 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ['-100%', '0%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            {[...brands, ...brands].map((brand, idx) => (
              <motion.div
                key={`right-${idx}`}
                whileHover={{ scale: 1.08, y: -4 }}
                className="group flex-shrink-0 w-32 flex flex-col items-center justify-center p-6 bg-linear-to-br from-primary/8 to-primary/4 border border-primary/20 rounded-xl hover:border-primary/60 hover:bg-primary/12 transition-all duration-300 cursor-pointer"
              >
                {/* Logo Container */}
                <div className="w-12 h-12 mb-3 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={brand.logo}
                    alt={brand.logoAlt}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                </div>
                {/* Brand Name */}
                <span className="font-semibold text-sm text-center text-white/90 group-hover:text-primary transition-colors duration-300 tracking-tight">
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <Link href="/brands" className="btn-primary inline-block">
            View All Brands & Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
