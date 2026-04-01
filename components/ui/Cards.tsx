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
    <Link href={href}>
      <div className="card-dark group cursor-pointer h-full">
        <div className="flex items-start justify-between mb-4">
          <Icon size={32} className="text-primary" />
          <ArrowRight size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <h3 className="text-xl font-semibold mb-2 tracking-tight text-white">{title}</h3>
        <p className="text-steel-light/80 text-sm leading-relaxed">{description}</p>
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
    <div className="card-dark">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-primary text-primary" />
        ))}
      </div>
      <p className="text-steel-light/90 mb-4 text-sm leading-relaxed">{text}</p>
      <p className="font-semibold text-sm text-white tracking-tight">{name}</p>
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
