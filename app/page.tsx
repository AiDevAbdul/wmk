'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Zap, Shield, Code, Wrench, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { ServiceCard, StatCounter, ReviewCard, CTABanner, SectionHeading } from '@/components/ui/Cards'
import { services } from '@/lib/services'
import { brands } from '@/lib/brands'

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

export default function Home() {
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
      {/* Hero Section */}
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
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

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
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

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
            <a
              href="https://maps.google.com/?q=18+Street+Ras+Al+Khor+Industrial+Area+2+Dubai"
              target="_blank"
              rel="noopener noreferrer"
              className="relative max-w-2xl mx-auto block group"
              style={{ pointerEvents: 'auto' }}
            >
              {/* Multi-layer Glow Background */}
              <div className="absolute inset-0 bg-linear-to-r from-primary/50 via-primary/30 to-primary/20 rounded-3xl blur-3xl opacity-70 pointer-events-none"></div>
              <div className="absolute inset-0 bg-linear-to-b from-primary/20 to-transparent rounded-3xl blur-2xl opacity-50 pointer-events-none"></div>

              {/* Premium Card */}
              <div className="relative bg-linear-to-br from-primary/20 via-primary/10 to-steel-mid/20 backdrop-blur-2xl rounded-3xl px-8 py-6 sm:px-10 sm:py-7 border-2 border-primary/60 shadow-2xl shadow-primary/40 hover:shadow-primary/60 hover:border-primary/90 transition-all duration-500 overflow-hidden cursor-pointer pointer-events-none">

                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

                {/* Content */}
                <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 pointer-events-none">
                  {/* Icon Container */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-linear-to-br from-primary/40 to-primary/20 flex items-center justify-center shrink-0 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-500 border border-primary/30">
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
            </a>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-primary text-steel-dark py-12">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <motion.div variants={itemVariants}>
              <StatCounter number="16+" label="Supported Brands" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <StatCounter number="12" label="Core Services" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <StatCounter number="10+" label="Years Expertise" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <StatCounter number="100%" label="Diagnostic Accuracy" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - What We Fix */}
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
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative">View All Services</span>
              <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Specialization Highlight */}
      <section className="py-24 bg-linear-to-br from-steel-mid via-steel-mid to-steel-dark relative overflow-hidden">
        {/* Background Accent Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Section Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="inline-flex items-center gap-2"
              >
                <div className="w-8 h-1 bg-linear-to-r from-primary to-primary/60 rounded-full"></div>
                <span className="text-primary font-semibold text-xs tracking-widest uppercase">Our Specialty</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-5xl md:text-6xl font-bold leading-tight tracking-tight"
              >
                <span className="block text-white">Advanced ECM &</span>
                <span className="block bg-linear-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">Programming Specialists</span>
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-lg text-white/95 leading-relaxed font-semibold max-w-xl"
              >
                Precision ECM repair and advanced programming for all major automotive brands. We combine cutting-edge diagnostics with expert technician knowledge.
              </motion.p>

              {/* Feature List - Enhanced */}
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-5"
              >
                {[
                  { icon: '⚙️', title: 'Expert ECM Repair', desc: 'Reprogramming for all major brands with precision diagnostics' },
                  { icon: '🔧', title: 'Advanced Diagnostics', desc: 'Latest equipment and software for accurate fault detection' },
                  { icon: '🌐', title: 'Online Programming', desc: 'Remote ECM updates and programming capabilities' },
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                    className="flex items-start gap-4 group p-5 rounded-xl bg-primary/8 border border-primary/20 hover:bg-primary/12 hover:border-primary/40 transition-all duration-300"
                  >
                    {/* Icon Container */}
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center text-xl group-hover:bg-primary/30 group-hover:border-primary/70 transition-all duration-300 mt-1">
                      {item.icon}
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 pt-1">
                      <p className="font-semibold text-white text-base tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </p>
                      <p className="text-white/90 text-sm leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="pt-4"
              >
                <a
                  href="/services/ecm-repair"
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-linear-to-r from-primary to-primary/90 text-steel-dark font-bold rounded-xl hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 overflow-hidden tracking-tight"
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative">Learn More About ECM Repair</span>
                  <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Side - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative h-96 hidden md:flex items-center justify-center"
            >
              {/* Glow Background */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl blur-2xl"></div>

              {/* Premium Card Container */}
              <div className="relative w-full h-full rounded-3xl bg-linear-to-br from-primary/15 via-primary/5 to-steel-mid/10 border-2 border-primary/30 backdrop-blur-xl p-8 flex flex-col items-center justify-center space-y-6 overflow-hidden group hover:border-primary/60 transition-all duration-500">

                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                {/* Circuit SVG */}
                <svg
                  viewBox="0 0 300 300"
                  className="w-48 h-48 relative z-10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <style>{`
                      @keyframes dash {
                        to { stroke-dashoffset: 0; }
                      }
                      @keyframes pulse-glow {
                        0%, 100% { opacity: 0.5; }
                        50% { opacity: 1; }
                      }
                      .circuit-line {
                        stroke: #F5C518;
                        stroke-width: 2.5;
                        fill: none;
                        stroke-dasharray: 800;
                        stroke-dashoffset: 800;
                        animation: dash 3s ease-in-out forwards;
                      }
                      .circuit-dot {
                        fill: #F5C518;
                        animation: pulse-glow 2s ease-in-out infinite;
                      }
                    `}</style>
                  </defs>
                  <circle cx="150" cy="150" r="120" fill="none" stroke="#4E5566" strokeWidth="1.5" opacity="0.4" />
                  <circle cx="150" cy="150" r="90" fill="none" stroke="#4E5566" strokeWidth="1" opacity="0.2" />

                  <path className="circuit-line" d="M 150 30 L 150 80 M 150 80 L 100 80 M 100 80 L 100 130" />
                  <path className="circuit-line" d="M 150 80 L 200 80 M 200 80 L 200 130" style={{ animationDelay: '0.2s' }} />
                  <path className="circuit-line" d="M 150 270 L 150 220 M 150 220 L 100 220 M 100 220 L 100 170" style={{ animationDelay: '0.4s' }} />
                  <path className="circuit-line" d="M 150 220 L 200 220 M 200 220 L 200 170" style={{ animationDelay: '0.6s' }} />

                  <circle cx="150" cy="150" r="35" fill="none" stroke="#F5C518" strokeWidth="2.5" opacity="0.6" />
                  <circle cx="150" cy="150" r="25" fill="#F5C518" opacity="0.4" />

                  {/* Pulsing dots */}
                  <circle className="circuit-dot" cx="100" cy="80" r="4" style={{ animationDelay: '0s' }} />
                  <circle className="circuit-dot" cx="200" cy="80" r="4" style={{ animationDelay: '0.3s' }} />
                  <circle className="circuit-dot" cx="100" cy="220" r="4" style={{ animationDelay: '0.6s' }} />
                  <circle className="circuit-dot" cx="200" cy="220" r="4" style={{ animationDelay: '0.9s' }} />
                </svg>

                {/* Text Badge Below SVG */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="relative z-10 text-center"
                >
                  <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-1">ECM Expertise</p>
                  <p className="text-xs text-steel-light/70 font-medium">Precision Diagnostics & Programming</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
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
                  className="group shrink-0 w-32 flex flex-col items-center justify-center p-6 bg-linear-to-br from-primary/8 to-primary/4 border border-primary/20 rounded-xl hover:border-primary/60 hover:bg-primary/12 transition-all duration-300 cursor-pointer"
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
                  className="group shrink-0 w-32 flex flex-col items-center justify-center p-6 bg-linear-to-br from-primary/8 to-primary/4 border border-primary/20 rounded-xl hover:border-primary/60 hover:bg-primary/12 transition-all duration-300 cursor-pointer"
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

      {/* Why Choose WMK */}
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
            {[
              { icon: Shield, title: 'Expert Technicians', desc: 'Certified professionals with 10+ years of experience in ECM repair, programming, and diagnostics' },
              { icon: Zap, title: 'Modern Diagnostics', desc: 'Latest equipment and software for accurate diagnosis and precision repairs' },
              { icon: Code, title: 'All Brands & EVs', desc: 'We service 16+ brands including Tesla, BYD, BMW, Mercedes, and more' },
              { icon: Wrench, title: 'Transparent Pricing', desc: 'No hidden fees, free diagnostics, honest quotes, and guaranteed workmanship' },
            ].map((item, i) => {
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
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
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

      {/* Testimonials */}
      <section className="py-24 bg-linear-to-b from-steel-dark to-steel-mid relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
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
                <span className="text-primary font-semibold text-sm tracking-wide uppercase">⭐ Customer Reviews</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              What Our <span className="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">Customers Say</span>
            </h2>
            <p className="text-white font-medium text-lg max-w-2xl mx-auto leading-relaxed">
              Real feedback from satisfied clients who trust WMK for their automotive needs.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={itemVariants}>
              <ReviewCard
                name="Ahmed Al Mansouri"
                rating={5}
                text="Excellent service! They fixed my Tesla's ECM issue quickly and professionally. Highly recommended for EV owners in Dubai."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ReviewCard
                name="Fatima Al Zahra"
                rating={5}
                text="Best auto repair shop in Ras Al Khor. Fair pricing, expert technicians, and they actually explain what's wrong with your car."
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ReviewCard
                name="Mohammed Al Maktoum"
                rating={5}
                text="Trusted them with my BMW's programming. Fast turnaround, professional team, and the work is guaranteed. Will definitely return."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Book?"
        subtitle="Call or WhatsApp us now for fast, reliable auto repair in Dubai"
      />
    </>
  )
}
