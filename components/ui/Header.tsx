'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { useParams, usePathname } from 'next/navigation'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Brands', href: '/brands' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const params = useParams()
  const pathname = usePathname()
  const locale = (params?.locale as string) || 'en'
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [pathname])

  const prefixedHref = (href: string) => `/${locale}${href}`

  const isActive = (href: string) => pathname === prefixedHref(href) || pathname.startsWith(prefixedHref(href) + '/')

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-0'
            : 'py-2'
        }`}
      >
        {/* Glass blur backdrop */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            scrolled
              ? 'bg-[rgba(6,8,15,0.88)] backdrop-blur-2xl border-b border-white/[0.07]'
              : 'bg-transparent'
          }`}
        />

        <nav className="container-max relative flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={prefixedHref('/')} className="flex items-center flex-shrink-0" aria-label="WMK Auto Garage Home">
            <div className="relative w-14 h-14 flex-shrink-0 drop-shadow-[0_0_12px_rgba(255,183,0,0.45)]">
              <Image src="/wmk-nobg.png" alt="WMK Auto Garage LLC" fill sizes="56px" className="object-contain" priority />
            </div>
          </Link>

          {/* Desktop nav — centered */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={prefixedHref(item.href)}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-white bg-white/10'
                    : 'text-white/60 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right: CTA */}
          <div className="hidden md:flex items-center gap-3">
            {/* Call CTA */}
            <a
              href="tel:+971554762284"
              className="btn-primary text-xs gap-2 px-5 py-2.5 rounded-xl"
            >
              <Phone size={14} strokeWidth={2.5} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/[0.08] transition-all duration-200 cursor-pointer"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden flex flex-col"
              style={{ background: 'rgba(10,14,26,0.97)', backdropFilter: 'blur(32px)', borderLeft: '1px solid rgba(255,255,255,0.07)' }}
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07]">
                <Link href={prefixedHref('/')} className="flex items-center" onClick={() => setIsOpen(false)}>
                  <div className="relative w-12 h-12 flex-shrink-0 drop-shadow-[0_0_10px_rgba(255,183,0,0.4)]">
                    <Image src="/wmk-nobg.png" alt="WMK Auto Garage LLC" fill sizes="48px" className="object-contain" />
                  </div>
                </Link>
                <button onClick={() => setIsOpen(false)} className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/[0.08] transition-all cursor-pointer" aria-label="Close menu">
                  <X size={20} />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto py-4 px-4 space-y-1">
                {navLinks.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                  >
                    <Link
                      href={prefixedHref(item.href)}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive(item.href)
                          ? 'bg-primary/15 text-primary border border-primary/25'
                          : 'text-white/70 hover:text-white hover:bg-white/[0.07]'
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={14} className="-rotate-90 opacity-40" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Drawer footer */}
              <div className="px-4 py-5 border-t border-white/[0.07] space-y-3">
                <a
                  href="tel:+971554762284"
                  className="btn-primary w-full justify-center text-sm gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={16} strokeWidth={2.5} />
                  <span>+971 55 476 2284</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
