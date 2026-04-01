'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-steel-dark border-b border-steel-mid">
      <nav className="container-max flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-steel-dark font-bold">
            WMK
          </div>
          <span className="hidden sm:inline">WMK Auto</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/services" className="hover:text-primary transition-colors">
            Services
          </Link>
          <Link href="/brands" className="hover:text-primary transition-colors">
            Brands
          </Link>
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:+971554762284"
            className="btn-primary flex items-center gap-2"
          >
            <Phone size={18} />
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-steel-mid rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-steel-mid border-t border-steel-light">
          <div className="container-max py-4 flex flex-col gap-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-primary">
              Home
            </Link>
            <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-primary">
              Services
            </Link>
            <Link href="/brands" onClick={() => setIsOpen(false)} className="hover:text-primary">
              Brands
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-primary">
              Blog
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-primary">
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-primary">
              Contact
            </Link>
            <a
              href="tel:+971554762284"
              className="btn-primary flex items-center justify-center gap-2 mt-2"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
