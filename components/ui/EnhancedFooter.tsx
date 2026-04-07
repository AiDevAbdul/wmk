'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, MapPin, Mail, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export default function EnhancedFooter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

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
    <footer className="bg-gradient-to-b from-steel-dark to-steel-dark/95 border-t border-steel-mid/30">
      {/* Main Footer Content */}
      <div className="container-max py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16"
        >
          {/* Column 1: Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="space-y-6">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2 group">
                <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-steel-dark font-bold text-sm tracking-tight overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative">WMK</span>
                </div>
                <span className="font-bold text-lg tracking-tight text-white group-hover:text-primary transition-colors duration-300">
                  WMK Auto
                </span>
              </Link>

              {/* Tagline */}
              <p className="text-steel-light/80 font-medium text-sm leading-relaxed">
                Elite automotive repair and programming specialists in Dubai
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: '#', label: 'Facebook' },
                  { icon: Instagram, href: '#', label: 'Instagram' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                ].map((social, i) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={i}
                      href={social.href}
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary/20 hover:border-primary/60 transition-all duration-300"
                    >
                      <Icon size={18} />
                    </motion.a>
                  )
                })}
              </div>

              {/* Trust Badges */}
              <div className="space-y-2 pt-4 border-t border-steel-light/20">
                <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                  <span>✓</span>
                  <span>RTA Licensed</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                  <span>✓</span>
                  <span>10+ Years Experience</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-6 tracking-tight">Services</h3>
            <ul className="space-y-3">
              {[
                { label: 'ECM Repair', href: '/services/ecm-repair' },
                { label: 'Hybrid Battery', href: '/services/hybrid-battery' },
                { label: 'Car Programming', href: '/services/car-programming' },
                { label: 'ABS & Airbag', href: '/services/abs-airbag' },
                { label: 'AC Repair', href: '/services/ac-repair' },
                { label: 'View All', href: '/services' },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-steel-light/80 hover:text-primary font-medium text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Brands */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-6 tracking-tight">Brands</h3>
            <ul className="space-y-3">
              {[
                { label: 'Tesla', href: '/brands/tesla' },
                { label: 'BYD', href: '/brands/byd' },
                { label: 'BMW', href: '/brands/bmw' },
                { label: 'Mercedes', href: '/brands/mercedes' },
                { label: 'Toyota', href: '/brands/toyota' },
                { label: 'View All', href: '/brands' },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-steel-light/80 hover:text-primary font-medium text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Company */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-6 tracking-tight">Company</h3>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms & Conditions', href: '#' },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-steel-light/80 hover:text-primary font-medium text-sm transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 5: Contact & Newsletter */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold text-white mb-6 tracking-tight">Contact</h3>
            <div className="space-y-4 mb-8">
              {/* Phone */}
              <a
                href="tel:+971554762284"
                className="flex items-start gap-3 group"
              >
                <Phone size={18} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-steel-light/70 font-medium">Call Us</p>
                  <p className="text-white font-semibold hover:text-primary transition-colors duration-300">
                    +971 55 476 2284
                  </p>
                </div>
              </a>

              {/* Location */}
              <a
                href="https://maps.google.com/?q=WMK+Auto+Repairing+Garage+Ras+Al+Khor+Dubai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <MapPin size={18} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-steel-light/70 font-medium">Visit Us</p>
                  <p className="text-white font-semibold hover:text-primary transition-colors duration-300 text-sm">
                    Ras Al Khor, Dubai
                  </p>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-steel-light/70 font-medium">Hours</p>
                  <p className="text-white font-semibold text-sm">
                    8 AM - 8 PM, 7 days
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <p className="text-xs text-steel-light/70 font-medium uppercase tracking-widest">Newsletter</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 bg-steel-dark/50 text-white px-3 py-2 rounded-lg border border-steel-light/20 focus:border-primary focus:outline-none transition-all duration-300 text-sm"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  className="bg-primary text-steel-dark p-2 rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                >
                  <ArrowRight size={18} />
                </motion.button>
              </form>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-primary font-semibold"
                >
                  ✓ Thanks for subscribing!
                </motion.p>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-steel-light/20 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Copyright */}
          <p className="text-steel-light/70 font-medium text-sm text-center md:text-left">
            © 2024 WMK Auto Repairing Garage LLC. All rights reserved.
          </p>

          {/* Language Selector */}
          <div className="flex items-center gap-4">
            <span className="text-steel-light/70 font-medium text-sm">Language:</span>
            <div className="flex gap-2">
              {[
                { code: 'EN', label: 'English' },
                { code: 'AR', label: 'العربية' },
              ].map((lang) => (
                <button
                  key={lang.code}
                  className="px-3 py-1 rounded-lg text-xs font-semibold transition-all duration-300 bg-steel-mid/50 text-white hover:bg-primary hover:text-steel-dark"
                >
                  {lang.code}
                </button>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex items-center gap-3">
            <span className="text-steel-light/70 font-medium text-xs">Accepted:</span>
            <div className="flex gap-2">
              {['💳', '📱', '🏦'].map((icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-lg bg-steel-mid/50 flex items-center justify-center text-lg"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating CTA Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-primary/10 to-primary/5 border-t border-primary/20 py-6"
      >
        <div className="container-max flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold mb-1">Need immediate assistance?</p>
            <p className="text-steel-light/80 text-sm">Our team is available 24/7 for emergencies</p>
          </div>

          <div className="flex gap-4">
            <a
              href="tel:+971554762284"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-primary/90 text-steel-dark font-bold rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 overflow-hidden text-sm tracking-tight"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative">📞 Call Now</span>
            </a>

            <a
              href="https://wa.me/971554762284"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300 rounded-lg font-semibold text-sm"
            >
              <span className="relative">💬 WhatsApp</span>
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
