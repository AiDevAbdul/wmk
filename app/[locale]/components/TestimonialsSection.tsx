'use client'

import { motion } from 'framer-motion'
import { ReviewCard } from '@/components/ui/Cards'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Ahmed Al Mansouri',
    rating: 5,
    text: "Excellent service! They diagnosed and fixed my Tesla's ECM issue in under 3 hours. Honest pricing and professional team — the best in Ras Al Khor.",
  },
  {
    name: 'Fatima Al Zahra',
    rating: 5,
    text: "Best auto repair shop I've visited in Dubai. Fair pricing, expert technicians, and they actually explain what's wrong with your car before starting any work.",
  },
  {
    name: 'Mohammed Al Rashid',
    rating: 5,
    text: 'Trusted them with my BMW programming after two other shops failed. Fast turnaround, professional team, and the work is guaranteed. Highly recommended.',
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-28 bg-steel-mid overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/[0.07] to-transparent" />

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] opacity-[0.05]"
          style={{ background: 'radial-gradient(ellipse, #F5C518, transparent 70%)' }} />
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
          <span className="section-label mb-5 inline-flex">Customer Reviews</span>
          <h2 className="font-black text-white mb-4" style={{ letterSpacing: '-0.03em', lineHeight: 1.05 }}>
            What Our Customers{' '}
            <span className="text-gold-gradient">Say About Us</span>
          </h2>

          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-primary text-primary" />
              ))}
            </div>
            <span className="font-bold text-white text-sm">4.9</span>
            <span className="text-steel-light/50 text-sm">· Based on 150+ reviews</span>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <ReviewCard name={t.name} rating={t.rating} text={t.text} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
