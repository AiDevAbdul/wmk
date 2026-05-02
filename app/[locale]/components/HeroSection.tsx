'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export function HeroSection() {
  const params = useParams()
  const locale = (params?.locale as string) || 'en'

  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-steel-dark">

      {/* ── Ambient background mesh ── */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {/* Deep blue radial from center-top */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] opacity-30 rounded-full"
          style={{ background: 'radial-gradient(ellipse at center, #1a3a8f 0%, transparent 70%)' }}
        />
        {/* Gold whisper bottom-right */}
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[400px] opacity-[0.12]"
          style={{ background: 'radial-gradient(ellipse at bottom right, #F5C518 0%, transparent 65%)' }}
        />
        {/* Subtle grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#F5C518" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-[12%] w-64 h-64 rounded-full opacity-[0.07] animate-float" style={{ background: 'radial-gradient(circle, #F5C518, transparent 70%)', animationDelay: '0s' }} />
        <div className="absolute bottom-1/3 right-[15%] w-48 h-48 rounded-full opacity-[0.06] animate-float" style={{ background: 'radial-gradient(circle, #3B6FD4, transparent 70%)', animationDelay: '3.5s' }} />
      </div>

      {/* ── Main content ── */}
      <div className="container-max w-full relative z-10 pt-28 pb-16 flex flex-col items-center text-center">

        {/* Label pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label mb-8 inline-flex">
            Dubai's Elite Auto Specialists
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl font-black tracking-tight text-white leading-[1.05] mb-6"
          style={{ fontSize: 'clamp(2.8rem, 6.5vw, 5.5rem)', letterSpacing: '-0.04em' }}
        >
          Advanced Auto Repair{' '}
          <span className="text-gold-gradient">&amp; Programming</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-base md:text-lg text-steel-light/80 leading-relaxed mb-10 font-normal"
        >
          ECM / ECU Repair · Hybrid Battery · ABS &amp; Airbag · Car Programming · AC Repair.
          Trusted by Tesla, BMW, Mercedes owners across Dubai.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-3 mb-14"
        >
          <a href="tel:+971554762284" className="btn-primary text-sm gap-2.5 px-8 py-4 rounded-2xl">
            <Phone size={16} strokeWidth={2.5} />
            <span>Call Now: +971 55 476 2284</span>
          </a>

          <a
            href="https://wa.me/971554762284?text=Hello%2C%20I%20need%20a%20car%20repair%20quote"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass gap-2.5 text-sm px-8 py-4 rounded-2xl"
          >
            <Image src="/whatsapp-svgrepo-com.svg" alt="" width={17} height={17} aria-hidden="true" />
            <span>WhatsApp Us</span>
          </a>

          <Link
            href={`/${locale}/services`}
            className="btn-glass gap-2 text-sm px-6 py-4 rounded-2xl"
          >
            <span>Our Services</span>
            <ArrowRight size={15} />
          </Link>
        </motion.div>

        {/* Trust signals row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-16"
        >
          {[
            '16+ Car Brands Supported',
            '10+ Years Expertise',
            'Transparent Pricing',
            'RTA Licensed',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-steel-light/70">
              <CheckCircle size={14} className="text-primary flex-shrink-0" strokeWidth={2.5} />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>

        {/* Logo hero card */}
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-lg"
        >
          <div
            className="glass-card-gold p-6 flex items-center gap-5"
            style={{ boxShadow: '0 0 40px rgba(245,197,24,0.08), 0 24px 48px rgba(0,0,0,0.4)' }}
          >
            {/* Logo */}
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 ring-1 ring-primary/30">
              <Image src="/wmk.jpg" alt="WMK Auto Garage" fill sizes="64px" className="object-cover" />
            </div>

            {/* Info */}
            <div className="flex-1 text-left min-w-0">
              <p className="font-bold text-white text-base leading-tight mb-1 truncate">WMK Auto Repairing Garage LLC</p>
              <div className="flex items-start gap-1.5 text-steel-light/70">
                <MapPin size={13} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed">Ras Al Khor Industrial Area 2, Dubai, UAE</p>
              </div>
            </div>

            {/* Map link */}
            <a
              href="https://maps.google.com/?q=WMK+Auto+Repairing+Garage+Ras+Al+Khor+Dubai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 p-2.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-200"
              aria-label="Open in Google Maps"
            >
              <MapPin size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-steel-dark to-transparent pointer-events-none z-10" />
    </section>
  )
}
