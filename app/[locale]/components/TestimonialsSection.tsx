'use client'

import { motion } from 'framer-motion'
import { ReviewCard } from '@/components/ui/Cards'
import { containerVariants, itemVariants } from '@/lib/animations'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ahmed Al Mansouri",
      rating: 5,
      text: "Excellent service! They fixed my Tesla's ECM issue quickly and professionally. Highly recommended for EV owners in Dubai."
    },
    {
      name: "Fatima Al Zahra",
      rating: 5,
      text: "Best auto repair shop in Ras Al Khor. Fair pricing, expert technicians, and they actually explain what's wrong with your car."
    },
    {
      name: "Mohammed Al Maktoum",
      rating: 5,
      text: "Trusted them with my BMW's programming. Fast turnaround, professional team, and the work is guaranteed. Will definitely return."
    }
  ]

  return (
    <section className="py-24 bg-linear-to-b from-steel-dark to-steel-mid relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex justify-center mb-6">
            <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary font-semibold text-sm tracking-wide uppercase">⭐ Customer Reviews</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            What Our <span className="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">Customers Say</span>
          </h2>
          <p className="text-white font-medium text-lg max-w-2xl mx-auto leading-relaxed">
            Real feedback from satisfied clients who trust WMK for their automotive needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <ReviewCard
                name={testimonial.name}
                rating={testimonial.rating}
                text={testimonial.text}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
