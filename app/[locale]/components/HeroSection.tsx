'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-steel-dark">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F5C518" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-steel-dark via-steel-dark/90 to-steel-mid/50 z-1"></div>

      {/* Accent Glow Elements - Enhanced */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl z-0 animate-pulse"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container-max relative z-10 py-20 pb-40">
        <div className="flex justify-center">
          {/* Left Content - Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center space-y-8 max-w-3xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex justify-center"
            >
              <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                <span className="text-primary font-semibold text-sm tracking-wide uppercase letter-spacing">🏆 Dubai's Elite Auto Specialists</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white tracking-tight"
            >
              <span className="block">Advanced Auto</span>
              <span className="block bg-linear-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">Repair & Programming</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base md:text-lg text-steel-light/80 leading-relaxed tracking-wide font-medium"
            >
              <span className="text-primary font-semibold">Specialized Services:</span> ECM Repair · Hybrid Battery Services · ABS & Airbag · Gear Programming · AC Repair · Online Programming
            </motion.p>

            {/* Key Features - Single Row Minimalist */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 py-6"
            >
              <div className="flex items-center gap-2 text-center sm:text-left">
                <span className="text-2xl">★</span>
                <div>
                  <p className="font-semibold text-white text-sm tracking-tight">16+ Brands</p>
                  <p className="text-xs text-steel-light/80">Tesla, BMW, Mercedes & more</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-steel-light/20"></div>

              <div className="flex items-center gap-2 text-center sm:text-left">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="font-semibold text-white text-sm tracking-tight">Modern Tech</p>
                  <p className="text-xs text-steel-light/80">Latest Diagnostics</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-12 bg-steel-light/20"></div>

              <div className="flex items-center gap-2 text-center sm:text-left">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="font-semibold text-white text-sm tracking-tight">Transparent Pricing</p>
                  <p className="text-xs text-steel-light/80">No Hidden Fees</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons - Premium Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-6 justify-center"
            >
              {/* Call Now - Primary CTA */}
              <a
                href="tel:+971554762284"
                className="group relative flex items-center justify-center gap-3 text-lg font-bold px-12 py-5 rounded-xl bg-linear-to-r from-primary to-primary/90 text-steel-dark shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:scale-110 transition-all duration-300 overflow-hidden tracking-tight"
              >
                {/* Animated background shine */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                {/* Pulsing ring effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-primary/0 group-hover:border-white/30 transition-colors duration-300"></div>

                <div className="relative flex items-center gap-3">
                  <Phone size={26} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>Call Now</span>
                </div>
              </a>

              {/* WhatsApp - Secondary CTA */}
              <a
                href="https://wa.me/971554762284"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-2 text-base font-semibold px-10 py-5 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 overflow-hidden tracking-tight"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                <div className="relative flex items-center gap-2">
                  <Image src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" width={22} height={22} className="group-hover:scale-110 transition-transform duration-300" />
                  <span>WhatsApp</span>
                </div>
              </a>
            </motion.div>

          </motion.div>

        </div>

        {/* Premium Location Badge - Below Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 w-full"
        >
          <div className="relative max-w-2xl mx-auto">
            {/* Multi-layer Glow Background */}
            <div className="absolute inset-0 bg-linear-to-r from-primary/50 via-primary/30 to-primary/20 rounded-3xl blur-3xl opacity-70"></div>
            <div className="absolute inset-0 bg-linear-to-b from-primary/20 to-transparent rounded-3xl blur-2xl opacity-50"></div>

            {/* Premium Card */}
            <div className="relative bg-linear-to-br from-primary/20 via-primary/10 to-steel-mid/20 backdrop-blur-2xl rounded-3xl px-8 py-6 sm:px-10 sm:py-7 border-2 border-primary/60 shadow-2xl shadow-primary/40 hover:shadow-primary/60 hover:border-primary/90 transition-all duration-500 group overflow-hidden">

              {/* Animated gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              {/* Content */}
              <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
                {/* Icon Container */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-linear-to-br from-primary/40 to-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-500 border border-primary/30">
                  <MapPin size={32} className="text-primary group-hover:animate-bounce" />
                </div>

                {/* Text Content */}
                <div className="text-center sm:text-left flex-1">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                    <span className="text-2xl">📍</span>
                    <p className="font-bold text-white text-xl sm:text-2xl tracking-tight">Ras Al Khor Industrial Area 2</p>
                  </div>
                  <p className="text-sm sm:text-base text-steel-light/90 font-medium leading-relaxed">18 Street, Dubai, UAE</p>
                  <p className="text-xs sm:text-sm text-primary/80 mt-2 font-semibold tracking-wide uppercase">Elite Auto Repair Specialists</p>
                </div>

                {/* Action Indicator */}
                <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300">
                  <span className="text-primary text-xl group-hover:scale-125 transition-transform duration-300">→</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
