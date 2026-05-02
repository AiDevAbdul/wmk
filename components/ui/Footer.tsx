'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react'
import { motion } from 'framer-motion'
import { useParams, usePathname } from 'next/navigation'

const footerLinks = {
  services: [
    { label: 'ECM / ECU Repair', href: '/services/ecm-repair' },
    { label: 'Hybrid Battery', href: '/services/hybrid-battery' },
    { label: 'Car Programming', href: '/services/car-programming' },
    { label: 'ABS & Airbag', href: '/services/abs-airbag' },
    { label: 'AC Repair', href: '/services/ac-repair' },
    { label: 'All Services', href: '/services' },
  ],
  brands: [
    { label: 'Tesla', href: '/brands/tesla' },
    { label: 'BYD', href: '/brands/byd' },
    { label: 'BMW', href: '/brands/bmw' },
    { label: 'Mercedes-Benz', href: '/brands/mercedes' },
    { label: 'Toyota', href: '/brands/toyota' },
    { label: 'All Brands', href: '/brands' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  const params = useParams()
  const pathname = usePathname()
  const locale = (params?.locale as string) || 'en'

  const prefixed = (href: string) => `/${locale}${href}`

  const switchLocale = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    window.location.href = newPath
  }

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, delay },
  })

  return (
    <footer style={{ background: '#04060E', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      {/* Main footer */}
      <div className="container-max py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <motion.div {...fadeUp(0)} className="lg:col-span-2 space-y-6">
            <Link href={prefixed('/')} className="flex items-center gap-3 group w-fit">
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image src="/wmk-nobg.png" alt="WMK Auto Garage LLC" fill sizes="56px" className="object-contain" />
              </div>
              <div>
                <p className="font-extrabold text-white text-base tracking-tight group-hover:text-primary transition-colors duration-200">WMK Auto Garage LLC</p>
                <p className="text-[10px] text-steel-light/40 tracking-widest uppercase mt-0.5">Ras Al Khor · Dubai</p>
              </div>
            </Link>

            <p className="text-sm text-steel-light/55 leading-relaxed max-w-xs">
              Dubai's elite ECM repair and car programming specialists. 16+ brands, 10+ years of expertise, RTA licensed.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <a href="tel:+971554762284" className="flex items-center gap-3 group w-fit">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                  <Phone size={14} className="text-primary" strokeWidth={2} />
                </div>
                <span className="text-sm text-steel-light/70 group-hover:text-white transition-colors duration-200">+971 55 476 2284</span>
              </a>

              <a
                href="https://maps.google.com/?q=WMK+Auto+Repairing+Garage+Ras+Al+Khor+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group w-fit"
              >
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                  <MapPin size={14} className="text-primary" strokeWidth={2} />
                </div>
                <span className="text-sm text-steel-light/70 group-hover:text-white transition-colors duration-200">Ras Al Khor Industrial Area 2</span>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock size={14} className="text-primary" strokeWidth={2} />
                </div>
                <span className="text-sm text-steel-light/70">Sat–Thu: 8AM–10PM</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-2 pt-1">
              {[
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: Youtube, label: 'YouTube', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-steel-light/40 hover:text-white transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <Icon size={16} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div {...fadeUp(0.08)}>
            <p className="text-xs font-bold text-white/40 tracking-[0.12em] uppercase mb-5">Services</p>
            <ul className="space-y-2.5">
              {footerLinks.services.map((item) => (
                <li key={item.href}>
                  <Link href={prefixed(item.href)}
                    className="text-sm text-steel-light/55 hover:text-white transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Brands */}
          <motion.div {...fadeUp(0.16)}>
            <p className="text-xs font-bold text-white/40 tracking-[0.12em] uppercase mb-5">Brands</p>
            <ul className="space-y-2.5">
              {footerLinks.brands.map((item) => (
                <li key={item.href}>
                  <Link href={prefixed(item.href)}
                    className="text-sm text-steel-light/55 hover:text-white transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div {...fadeUp(0.24)}>
            <p className="text-xs font-bold text-white/40 tracking-[0.12em] uppercase mb-5">Company</p>
            <ul className="space-y-2.5">
              {footerLinks.company.map((item) => (
                <li key={item.href}>
                  <Link href={prefixed(item.href)}
                    className="text-sm text-steel-light/55 hover:text-white transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container-max py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-steel-light/35">
            © {new Date().getFullYear()} WMK Auto Repairing Garage LLC. All rights reserved.
          </p>
          <p className="text-xs text-steel-light/25">
            Ras Al Khor Industrial Area 2, Dubai, UAE · +971 55 476 2284
          </p>
        </div>
      </div>
    </footer>
  )
}
