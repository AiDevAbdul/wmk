'use client'

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { stiffness: 60, damping: 20, restDelta: 0.5 })
  const display = useTransform(spring, (v) => `${Math.round(v)}${suffix}`)

  useEffect(() => {
    if (isInView) motionVal.set(value)
  }, [isInView, value, motionVal])

  return <motion.span ref={ref}>{display}</motion.span>
}

const stats = [
  { value: 16, suffix: '+', label: 'Car Brands' },
  { value: 12, suffix: '', label: 'Core Services' },
  { value: 10, suffix: '+', label: 'Years Expertise' },
  { value: 100, suffix: '%', label: 'Diagnostic Accuracy' },
]

export function StatsStrip() {
  return (
    <section className="relative py-20 bg-steel-mid overflow-hidden">
      {/* Subtle top/bottom fade */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />

      {/* Faint gold glow center */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] opacity-[0.06] rounded-full"
          style={{ background: 'radial-gradient(ellipse, #F5C518, transparent 70%)' }} />
      </div>

      <div className="container-max relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-center relative"
            >
              {/* Vertical divider */}
              {i > 0 && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px bg-white/[0.08] hidden md:block" />
              )}

              <div
                className="text-5xl md:text-6xl font-black tracking-tight mb-2"
                style={{ color: '#F5C518', letterSpacing: '-0.04em', lineHeight: 1 }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm font-medium text-steel-light/70 tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
