'use client'

import { ReactNode } from 'react'
import { ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

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
    <Link href={href} className="block h-full">
      <div className="group cursor-pointer h-full relative overflow-hidden rounded-2xl">
        {/* Multi-layer Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-steel-mid/60 via-steel-mid/40 to-steel-dark/80 rounded-2xl transition-all duration-500 group-hover:from-steel-mid/80 group-hover:via-steel-mid/60 group-hover:to-steel-dark/90"></div>

        {/* Animated Border Gradient */}
        <div className="absolute inset-0 rounded-2xl border border-primary/20 group-hover:border-primary/60 transition-all duration-500"></div>

        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-primary/0 group-hover:shadow-primary/40 transition-all duration-500"></div>

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-2xl"></div>

        {/* Content */}
        <div className="relative p-8 h-full flex flex-col z-10">
          {/* Icon Container with Enhanced Styling */}
          <div className="mb-6 relative">
            {/* Icon Glow Background */}
            <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-primary/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"></div>

            {/* Icon Box */}
            <div className="relative w-16 h-16 bg-gradient-to-br from-primary/40 to-primary/15 rounded-xl flex items-center justify-center border-2 border-primary/40 group-hover:border-primary/80 group-hover:scale-125 group-hover:shadow-2xl group-hover:shadow-primary/50 transition-all duration-300">
              <Icon size={32} className="text-primary group-hover:text-primary transition-all duration-300 group-hover:scale-110" />
            </div>
          </div>

          {/* Title with Enhanced Typography */}
          <h3 className="text-xl font-bold mb-3 tracking-tight text-white group-hover:text-primary transition-colors duration-300 leading-tight">
            {title}
          </h3>

          {/* Description */}
          <p className="text-steel-light/75 text-sm leading-relaxed flex-grow group-hover:text-steel-light/95 transition-colors duration-300">
            {description}
          </p>

          {/* Learn More Link with Arrow */}
          <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
            <span className="text-xs font-bold uppercase tracking-widest">Learn More</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export function StatCounter({
  number,
  label,
}: {
  number: string
  label: string
}) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-steel-dark mb-2 tracking-tight">{number}</div>
      <p className="text-steel-dark font-medium text-sm">{label}</p>
    </div>
  )
}

export function ReviewCard({
  name,
  rating,
  text,
}: {
  name: string
  rating: number
  text: string
}) {
  return (
    <div className="group relative h-full">
      {/* Card Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-primary/4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Card Border Glow */}
      <div className="absolute inset-0 rounded-xl border border-primary/20 group-hover:border-primary/60 transition-colors duration-300"></div>

      {/* Shine Effect */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
      </div>

      {/* Content */}
      <div className="relative p-8 h-full flex flex-col justify-between">
        {/* Star Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} size={18} className="fill-primary text-primary group-hover:scale-110 transition-transform duration-300" style={{ transitionDelay: `${i * 50}ms` }} />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-white font-medium leading-relaxed text-base mb-6 flex-grow group-hover:text-white/95 transition-colors duration-300">
          "{text}"
        </p>

        {/* Divider */}
        <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mb-4 group-hover:w-16 transition-all duration-300"></div>

        {/* Customer Name */}
        <p className="font-bold text-sm text-primary tracking-tight uppercase group-hover:text-primary transition-colors duration-300">
          {name}
        </p>
      </div>
    </div>
  )
}

export function ProcessStep({
  number,
  title,
  description,
}: {
  number: number
  title: string
  description: string
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-steel-dark font-bold text-lg tracking-tight">
          {number}
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-2 text-white tracking-tight">{title}</h4>
        <p className="text-steel-light/80 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export function CTABanner({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <section className="bg-primary text-steel-dark py-12 md:py-16">
      <div className="container-max text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">{title}</h2>
        {subtitle && <p className="text-lg mb-6 leading-relaxed font-medium">{subtitle}</p>}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+971554762284" className="btn-primary bg-steel-dark text-primary hover:bg-steel-mid font-semibold">
            Call Now: +971 55 476 2284
          </a>
          <a
            href="https://wa.me/971554762284"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary border-steel-dark text-steel-dark hover:bg-steel-dark hover:text-primary font-semibold"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h2 className={`section-heading tracking-tight ${className}`}>
      {children}
    </h2>
  )
}
