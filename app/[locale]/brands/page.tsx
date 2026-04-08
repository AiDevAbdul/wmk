'use client'

import { motion } from 'framer-motion'
import { brands } from '@/lib/brands'
import Link from 'next/link'
import { CTABanner } from '@/components/ui/Cards'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function EnhancedBrandsPage() {
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

  // Featured brands for hero section
  const featuredBrands = brands.slice(0, 3)
  const regularBrands = brands.slice(3)

  return (
    <>
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-steel-dark pt-20">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 z-0 opacity-15">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-brands" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F5C518" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-brands)" />
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
                <span className="text-primary font-semibold text-sm tracking-wide uppercase">🚗 16+ Premium Brands</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white tracking-tight"
            >
              <span className="block">Cars We</span>
              <span className="block bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">Service & Support</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base md:text-lg text-steel-light/80 leading-relaxed tracking-wide font-medium max-w-2xl mx-auto"
            >
              From luxury European brands to cutting-edge EVs, we have the expertise to service every make and model with precision diagnostics and advanced programming.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 py-6"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="font-semibold text-white text-sm tracking-tight">EV Specialists</p>
                  <p className="text-xs text-steel-light/80">Tesla, BYD & more</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-steel-light/20"></div>

              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="font-semibold text-white text-sm tracking-tight">All Services</p>
                  <p className="text-xs text-steel-light/80">ECM, programming, repair</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-steel-light/20"></div>

              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="font-semibold text-white text-sm tracking-tight">Certified</p>
                  <p className="text-xs text-steel-light/80">Brand authorized</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Brands Section */}
      <section className="py-20 bg-gradient-to-b from-steel-dark to-steel-mid">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
              Featured <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Brands</span>
            </h2>
            <p className="text-steel-light/80 font-medium">Our most popular services</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            {featuredBrands.map((brand) => (
              <motion.div key={brand.id} variants={itemVariants}>
                <Link href={`/brands/${brand.slug}`}>
                  <div className="group cursor-pointer h-full relative overflow-hidden rounded-2xl">
                    {/* Multi-layer Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-steel-mid/60 via-steel-mid/40 to-steel-dark/80 rounded-2xl transition-all duration-500 group-hover:from-steel-mid/80 group-hover:via-steel-mid/60 group-hover:to-steel-dark/90"></div>

                    {/* Border Glow */}
                    <div className="absolute inset-0 rounded-2xl border border-primary/20 group-hover:border-primary/60 transition-all duration-500"></div>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-primary/0 group-hover:shadow-primary/40 transition-all duration-500"></div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-2xl"></div>

                    {/* Content */}
                    <div className="relative p-8 h-full flex flex-col z-10">
                      {/* Logo Container */}
                      <div className="mb-6 relative">
                        <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></div>

                        <div className="relative w-20 h-20 bg-gradient-to-br from-primary/40 to-primary/15 rounded-xl flex items-center justify-center border-2 border-primary/40 group-hover:border-primary/80 group-hover:scale-125 group-hover:shadow-2xl group-hover:shadow-primary/50 transition-all duration-300">
                          <Image
                            src={brand.logo}
                            alt={brand.logoAlt}
                            width={48}
                            height={48}
                            loading="lazy"
                            className="w-12 h-12 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                            }}
                          />
                        </div>
                      </div>

                      {/* Brand Name */}
                      <h3 className="text-2xl font-bold mb-3 tracking-tight text-white group-hover:text-primary transition-colors duration-300 leading-tight">
                        {brand.name}
                      </h3>

                      {/* Services List */}
                      <div className="flex-grow mb-6">
                        <p className="text-xs text-primary font-semibold uppercase tracking-widest mb-3">Services:</p>
                        <ul className="space-y-2">
                          {brand.services.slice(0, 3).map((service, i) => (
                            <li key={i} className="text-sm text-steel-light/75 flex items-center gap-2 group-hover:text-steel-light/95 transition-colors duration-300">
                              <span className="text-primary">✓</span>
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Learn More Link */}
                      <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
                        <span className="text-xs font-bold uppercase tracking-widest">Learn More</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* All Brands Grid */}
      <section className="py-24 bg-steel-dark">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
              All <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Supported Brands</span>
            </h2>
            <p className="text-steel-light/80 font-medium">Complete list of makes and models we service</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {regularBrands.map((brand) => (
              <motion.div key={brand.id} variants={itemVariants}>
                <Link href={`/brands/${brand.slug}`}>
                  <div className="group cursor-pointer relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-steel-mid/60 to-steel-dark/80 border border-primary/20 hover:border-primary/60 transition-all duration-300 h-full flex flex-col">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-xl shadow-2xl shadow-primary/0 group-hover:shadow-primary/30 transition-all duration-300"></div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-xl"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Logo */}
                      <div className="mb-4 flex justify-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center border border-primary/30 group-hover:border-primary/60 group-hover:scale-110 transition-all duration-300">
                          <Image
                            src={brand.logo}
                            alt={brand.logoAlt}
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none'
                            }}
                          />
                        </div>
                      </div>

                      {/* Brand Name */}
                      <h3 className="text-lg font-bold text-center text-white group-hover:text-primary transition-colors duration-300 tracking-tight mb-3">
                        {brand.name}
                      </h3>

                      {/* Services Count */}
                      <p className="text-xs text-center text-steel-light/70 mb-4">
                        {brand.services.length} services available
                      </p>

                      {/* Arrow */}
                      <div className="mt-auto flex justify-center">
                        <ArrowRight size={18} className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why We're Different */}
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
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Why Choose WMK for <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Your Brand</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: '🔧', title: 'Brand Expertise', desc: 'Specialized knowledge for each brand\'s unique systems' },
              { icon: '⚡', title: 'Latest Technology', desc: 'Advanced diagnostic tools and programming equipment' },
              { icon: '🛡️', title: 'Certified Technicians', desc: 'Factory-trained specialists for major brands' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-primary/4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 rounded-xl border border-primary/20 group-hover:border-primary/60 transition-colors duration-300"></div>

                <div className="relative p-8 text-center h-full flex flex-col justify-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold tracking-tight text-white mb-2 group-hover:text-primary transition-colors duration-300">
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

      <CTABanner
        title="Don't See Your Brand?"
        subtitle="Contact us - we likely service your vehicle or can help you find a solution"
      />
    </>
  )
}
