'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Zap, Shield, Code, Wrench } from 'lucide-react'
import Link from 'next/link'
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
        <div className="absolute inset-0 bg-gradient-to-br from-steel-dark via-steel-dark/90 to-steel-mid/50 z-1"></div>

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
                <span className="block bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">Repair & Programming</span>
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
                  className="group relative flex items-center justify-center gap-3 text-lg font-bold px-12 py-5 rounded-xl bg-gradient-to-r from-primary to-primary/90 text-steel-dark shadow-2xl shadow-primary/50 hover:shadow-primary/70 hover:scale-110 transition-all duration-300 overflow-hidden tracking-tight"
                >
                  {/* Animated background shine */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

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
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

                  <div className="relative flex items-center gap-2">
                    <img src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" width={22} height={22} className="group-hover:scale-110 transition-transform duration-300" />
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
              <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary/30 to-primary/20 rounded-3xl blur-3xl opacity-70"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-3xl blur-2xl opacity-50"></div>

              {/* Premium Card */}
              <div className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-steel-mid/20 backdrop-blur-2xl rounded-3xl px-8 py-6 sm:px-10 sm:py-7 border-2 border-primary/60 shadow-2xl shadow-primary/40 hover:shadow-primary/60 hover:border-primary/90 transition-all duration-500 group overflow-hidden">

                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                {/* Content */}
                <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
                  {/* Icon Container */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-500 border border-primary/30">
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

      {/* Services Section */}
      <section className="py-20 bg-steel-dark">
        <div className="container-max">
          <SectionHeading>What We Fix</SectionHeading>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
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

          <div className="text-center">
            <Link href="/services" className="btn-primary inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Specialization Highlight */}
      <section className="py-20 bg-steel-mid">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary tracking-tight">
                Advanced ECM & Programming Specialists
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span className="text-steel-light/90 leading-relaxed">Expert ECM repair and reprogramming for all major brands</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span className="text-steel-light/90 leading-relaxed">Advanced diagnostics with latest equipment and software</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold flex-shrink-0">•</span>
                  <span className="text-steel-light/90 leading-relaxed">Online programming capabilities for remote updates</span>
                </li>
              </ul>
              <a href="/services/ecm-repair" className="btn-primary inline-block">
                Learn More About ECM Repair
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-96 hidden md:block"
            >
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <style>{`
                    @keyframes dash {
                      to { stroke-dashoffset: 0; }
                    }
                    .circuit-line {
                      stroke: #F5C518;
                      stroke-width: 2;
                      fill: none;
                      stroke-dasharray: 1000;
                      stroke-dashoffset: 1000;
                      animation: dash 3s ease-in-out forwards;
                    }
                  `}</style>
                </defs>
                <circle cx="200" cy="200" r="150" fill="none" stroke="#4E5566" strokeWidth="1" opacity="0.3" />
                <path className="circuit-line" d="M 200 50 L 200 100 M 200 100 L 150 100 M 150 100 L 150 150" />
                <path className="circuit-line" d="M 200 100 L 250 100 M 250 100 L 250 150" style={{ animationDelay: '0.2s' }} />
                <path className="circuit-line" d="M 200 300 L 200 250 M 200 250 L 150 250 M 150 250 L 150 200" style={{ animationDelay: '0.4s' }} />
                <path className="circuit-line" d="M 200 250 L 250 250 M 250 250 L 250 200" style={{ animationDelay: '0.6s' }} />
                <circle cx="200" cy="200" r="30" fill="none" stroke="#F5C518" strokeWidth="2" opacity="0.5" />
                <circle cx="200" cy="200" r="20" fill="#F5C518" opacity="0.3" />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-steel-dark">
        <div className="container-max">
          <SectionHeading className="text-center">Trusted With Every Make</SectionHeading>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12"
          >
            {brands.map((brand) => (
              <motion.div
                key={brand.id}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center p-4 bg-steel-mid rounded-lg hover:bg-primary hover:text-steel-dark transition-all duration-300 cursor-pointer"
              >
                <span className="font-semibold text-sm text-center">{brand.name}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link href="/brands" className="btn-primary inline-block">
              View All Brands
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose WMK */}
      <section className="py-20 bg-steel-mid">
        <div className="container-max">
          <SectionHeading className="text-center">Why Choose WMK</SectionHeading>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Shield, title: 'Expert Technicians', desc: 'Certified professionals with 10+ years of experience' },
              { icon: Zap, title: 'Modern Diagnostics', desc: 'Latest equipment and software for accurate diagnosis' },
              { icon: Code, title: 'All Brands & EVs', desc: 'We service 16+ brands including Tesla and BYD' },
              { icon: Wrench, title: 'Transparent Pricing', desc: 'No hidden fees, free diagnostics, honest quotes' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div key={i} variants={itemVariants} className="card-dark text-center">
                  <Icon size={40} className="text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2 tracking-tight text-white">{item.title}</h3>
                  <p className="text-steel-light/80 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-steel-dark">
        <div className="container-max">
          <SectionHeading className="text-center">What Our Customers Say</SectionHeading>

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
