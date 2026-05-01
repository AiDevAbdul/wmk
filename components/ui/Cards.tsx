'use client'

import { ReactNode } from 'react'
import { ArrowRight, Star, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: any
  title: string
  description: string
  href: string
}) {
  return (
    <Link href={href} className="block h-full group" aria-label={`Learn more about ${title}`}>
      <div className="glass-card h-full p-7 flex flex-col transition-all duration-300 hover:border-primary/25 hover:-translate-y-1" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.25)' }}>
        {/* Icon */}
        <div className="mb-6 relative w-12 h-12 flex items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/15 group-hover:border-primary/35 transition-all duration-300">
          <Icon size={22} className="text-primary" strokeWidth={1.8} />
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg text-white mb-3 tracking-tight leading-snug group-hover:text-primary/90 transition-colors duration-200">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-steel-light/65 leading-relaxed grow">
          {description}
        </p>

        {/* Arrow link */}
        <div className="mt-6 flex items-center gap-1.5 text-primary/70 group-hover:text-primary transition-all duration-200">
          <span className="text-xs font-semibold tracking-wider uppercase">Learn More</span>
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </Link>
  )
}

export function ServiceCardFeatured({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: any
  title: string
  description: string
  href: string
}) {
  return (
    <Link href={href} className="block h-full group" aria-label={`Learn more about ${title}`}>
      <div
        className="relative h-full p-8 rounded-[20px] flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1"
        style={{
          background: 'linear-gradient(135deg, rgba(245,197,24,0.12) 0%, rgba(245,197,24,0.04) 100%)',
          border: '1px solid rgba(245,197,24,0.25)',
          boxShadow: '0 0 40px rgba(245,197,24,0.06), 0 12px 32px rgba(0,0,0,0.3)',
        }}
      >
        {/* Corner glow */}
        <div className="absolute top-0 right-0 w-40 h-40 opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, #F5C518, transparent 70%)' }} />

        <div className="mb-8 relative w-14 h-14 flex items-center justify-center rounded-2xl"
          style={{ background: 'rgba(245,197,24,0.18)', border: '1px solid rgba(245,197,24,0.35)' }}>
          <Icon size={26} className="text-primary" strokeWidth={1.6} />
        </div>

        <span className="section-label text-[10px] mb-4 self-start">Featured Service</span>

        <h3 className="font-black text-2xl text-white mb-4 tracking-tight leading-snug">
          {title}
        </h3>

        <p className="text-sm text-steel-light/70 leading-relaxed grow">
          {description}
        </p>

        <div className="mt-8 inline-flex items-center gap-2 btn-primary text-xs px-5 py-3 rounded-xl self-start">
          <span>Book Now</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  )
}

export function StatCounter({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-5xl font-black tracking-tight text-steel-dark mb-1" style={{ letterSpacing: '-0.04em' }}>{number}</div>
      <p className="text-steel-dark/70 font-medium text-sm">{label}</p>
    </div>
  )
}

export function ReviewCard({ name, rating, text }: { name: string; rating: number; text: string }) {
  return (
    <div className="glass-card p-7 h-full flex flex-col transition-all duration-300 hover:border-primary/20 hover:-translate-y-0.5" style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }}>
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-primary text-primary" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-steel-light/75 leading-relaxed grow italic mb-6">
        &ldquo;{text}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
        <div className="w-8 h-8 rounded-full bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-bold text-primary">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-semibold text-white text-sm leading-tight">{name}</p>
          <p className="text-[11px] text-steel-light/50 mt-0.5">Verified Customer</p>
        </div>
      </div>
    </div>
  )
}

export function ProcessStep({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center">
        <span className="text-primary font-bold text-sm">{number}</span>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-1 tracking-tight">{title}</h4>
        <p className="text-steel-light/65 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export function CTABanner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0C1423 0%, #06080F 100%)' }}>
      {/* Gold top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] opacity-[0.08] rounded-full" style={{ background: 'radial-gradient(ellipse, #F5C518, transparent 70%)' }} />
      </div>

      <div className="container-max relative z-10 text-center">
        <h2 className="font-black text-white mb-3 tracking-tight" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.03em' }}>
          {title}
        </h2>
        {subtitle && (
          <p className="text-steel-light/70 mb-10 text-base max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="tel:+971554762284" className="btn-primary gap-2 text-sm">
            <Phone size={15} strokeWidth={2.5} />
            <span>Call: +971 55 476 2284</span>
          </a>
          <a
            href="https://wa.me/971554762284"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass gap-2 text-sm"
          >
            <Image src="/whatsapp-svgrepo-com.svg" alt="" width={16} height={16} aria-hidden="true" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-black text-white tracking-tight ${className}`} style={{ letterSpacing: '-0.03em' }}>
      {children}
    </h2>
  )
}
