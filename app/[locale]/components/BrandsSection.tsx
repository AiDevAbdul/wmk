'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { brands } from '@/lib/brands'
import { useParams } from 'next/navigation'

function BrandCard({ brand }: { brand: typeof brands[0] }) {
  return (
    <div
      className="flex-shrink-0 w-28 flex flex-col items-center gap-3 px-5 py-4 rounded-2xl transition-all duration-300 group cursor-pointer hover:-translate-y-1"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div className="w-10 h-10 relative flex items-center justify-center">
        <Image
          src={brand.logo}
          alt={brand.logoAlt}
          width={40}
          height={40}
          className="w-full h-full object-contain filter brightness-0 invert opacity-50 group-hover:opacity-100 group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
        />
      </div>
      <span className="text-[11px] font-semibold text-steel-light/50 group-hover:text-white transition-colors duration-300 text-center tracking-wide">
        {brand.name}
      </span>
    </div>
  )
}

export function BrandsSection() {
  const params = useParams()
  const locale = (params?.locale as string) || 'en'
  const doubled = [...brands, ...brands, ...brands]

  return (
    <section className="relative py-28 bg-steel-dark overflow-hidden">
      {/* Section header */}
      <div className="container-max relative z-10 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="section-label mb-5 inline-flex">Trusted With Every Make</span>
          <h2 className="font-black text-white mb-4" style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            16+ Premium Brands,{' '}
            <span className="text-gold-gradient">One Expert Team</span>
          </h2>
          <p className="text-steel-light/60 text-base max-w-xl mx-auto leading-relaxed">
            From Tesla EVs to German performance vehicles, we have the equipment and expertise to service every major brand.
          </p>
        </motion.div>
      </div>

      {/* Marquee row 1 — LTR */}
      <div className="relative mb-4 overflow-hidden">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #06080F, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #06080F, transparent)' }} />

        <div className="flex gap-4 animate-marquee-ltr w-max">
          {doubled.map((brand, idx) => (
            <BrandCard key={`ltr-${idx}`} brand={brand} />
          ))}
        </div>
      </div>

      {/* Marquee row 2 — RTL */}
      <div className="relative mb-14 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #06080F, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #06080F, transparent)' }} />

        <div className="flex gap-4 animate-marquee-rtl w-max">
          {doubled.map((brand, idx) => (
            <BrandCard key={`rtl-${idx}`} brand={brand} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center"
      >
        <Link href={`/${locale}/brands`} className="btn-primary inline-flex gap-2 text-sm">
          View All Brands &amp; Services
        </Link>
      </motion.div>
    </section>
  )
}
