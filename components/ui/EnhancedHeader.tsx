'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function EnhancedHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Brands', href: '/brands' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-steel-dark/95 backdrop-blur-md border-b border-primary/10 shadow-2xl shadow-primary/5'
          : 'bg-steel-dark/80 backdrop-blur-sm border-b border-steel-mid/30'
      }`}
    >
      <nav className="container-max flex items-center justify-between h-20">
        {/* Logo with Glow */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-steel-dark font-bold text-sm tracking-tight overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">WMK</span>
          </motion.div>
          <span className="hidden sm:inline font-bold text-lg tracking-tight text-white group-hover:text-primary transition-colors duration-300">
            WMK Auto
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-white/90 hover:text-primary transition-colors duration-300 group"
            >
              {item.label}
              {/* Animated underline */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+971554762284"
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-primary/90 text-steel-dark font-bold rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 overflow-hidden text-sm tracking-tight"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <Phone size={18} className="relative group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative">Call Now</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-steel-mid/50 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-steel-mid/95 backdrop-blur-md border-t border-primary/10"
        >
          <div className="container-max py-4 flex flex-col gap-3">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-white hover:text-primary hover:bg-steel-dark/50 rounded-lg transition-all duration-300"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navItems.length * 0.05 }}
              href="tel:+971554762284"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/90 text-steel-dark font-bold rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 overflow-hidden text-sm tracking-tight mt-2"
            >
              <Phone size={18} />
              <span>Call Now: +971 55 476 2284</span>
            </motion.a>
          </div>
        </motion.div>
      )}
    </header>
  )
}
