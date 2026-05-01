'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Users, BadgeCheck } from 'lucide-react'

const benefits = [
  {
    icon: Shield,
    title: 'Certified Technicians',
    desc: 'RTA-licensed professionals with 10+ years of hands-on experience in ECM repair, programming, and diagnostics.',
    stat: '10+',
    statLabel: 'Years',
  },
  {
    icon: Zap,
    title: 'Modern Diagnostics',
    desc: 'Factory-grade OBD2 scanners and the latest programming software for accurate, fast diagnosis.',
    stat: '100%',
    statLabel: 'Accuracy',
  },
  {
    icon: Users,
    title: 'All Brands & EVs',
    desc: 'Tesla, BYD, BMW, Mercedes, Toyota, and 10+ more. We service every major make — including full electric vehicles.',
    stat: '16+',
    statLabel: 'Brands',
  },
  {
    icon: BadgeCheck,
    title: 'Transparent Pricing',
    desc: 'Free diagnostics, honest quotes, and no surprise fees. All work comes with a written workmanship guarantee.',
    stat: 'Free',
    statLabel: 'Diagnostics',
  },
]

export function WhyChooseSection() {
  return (
    <section className="relative py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #06080F 0%, #0C1423 100%)' }}>
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] opacity-[0.05] translate-x-1/3"
          style={{ background: 'radial-gradient(circle, #F5C518, transparent 60%)' }} />
        <div className="absolute top-0 left-0 w-[300px] h-[300px] opacity-[0.04] -translate-x-1/4"
          style={{ background: 'radial-gradient(circle, #3B6FD4, transparent 60%)' }} />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="section-label mb-5 inline-flex">Why WMK</span>
          <h2 className="font-black text-white mb-4" style={{ letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            Not Just a Garage.{' '}
            <span className="text-gold-gradient">A Trusted Partner.</span>
          </h2>
          <p className="text-steel-light/60 text-base max-w-xl mx-auto leading-relaxed">
            We bring elite automotive expertise and absolute transparency to every repair — so you drive away confident.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {benefits.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  className="glass-card h-full p-7 flex flex-col gap-5 group transition-all duration-300 hover:-translate-y-1 hover:border-primary/20"
                  style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }}
                >
                  {/* Stat + icon row */}
                  <div className="flex items-start justify-between">
                    <div className="w-11 h-11 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                      style={{ background: 'rgba(245,197,24,0.10)', border: '1px solid rgba(245,197,24,0.18)' }}>
                      <Icon size={20} className="text-primary" strokeWidth={1.7} />
                    </div>
                    <div className="text-right">
                      <p className="font-black text-2xl text-primary leading-none tracking-tight">{item.stat}</p>
                      <p className="text-[10px] font-medium text-steel-light/50 tracking-wide uppercase">{item.statLabel}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="font-bold text-white text-base mb-2 tracking-tight leading-snug group-hover:text-primary/90 transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-sm text-steel-light/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
