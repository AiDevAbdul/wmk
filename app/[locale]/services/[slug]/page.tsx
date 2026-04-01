'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, ChevronDown, ChevronUp } from 'lucide-react'
import { useState, use } from 'react'
import { services, serviceDetails } from '@/lib/services'
import { ProcessStep, CTABanner } from '@/components/ui/Cards'

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { slug } = use(params)
  const service = services.find((s) => s.slug === slug)
  const details = serviceDetails[slug]
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0)

  if (!service || !details) {
    return (
      <div className="container-max py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <p className="text-steel-light">The service you're looking for doesn't exist.</p>
      </div>
    )
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-steel-mid to-steel-dark py-20">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{details.title}</h1>
            <p className="text-xl text-steel-light mb-8">{details.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+971554762284" className="btn-primary flex items-center justify-center gap-2">
                <Phone size={20} />
                Call Now
              </a>
              <a
                href="https://wa.me/971554762284"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Is This Service */}
      <section className="py-20 bg-steel-dark">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">What Is This Service?</h2>
            <p className="text-lg text-steel-light leading-relaxed mb-8">{details.whatIs}</p>
          </motion.div>
        </div>
      </section>

      {/* Signs You Need This Service */}
      <section className="py-20 bg-steel-mid">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">Signs You Need This Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.signs.map((sign: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-steel-dark rounded-lg"
                >
                  <span className="text-primary font-bold text-xl flex-shrink-0">✓</span>
                  <span className="text-steel-light">{sign}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-steel-dark">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12">Our Process</h2>
            <div className="space-y-6">
              {details.process.map((step: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <ProcessStep number={i + 1} title={step.title} description={step.description} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-steel-mid">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-3xl">
              {details.faq.map((item: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-steel-dark rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 hover:bg-steel-light/10 transition-colors"
                  >
                    <h3 className="font-semibold text-left">{item.question}</h3>
                    {expandedFaq === i ? (
                      <ChevronUp size={20} className="text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown size={20} className="text-primary flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-6 text-steel-light border-t border-steel-mid"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-steel-dark">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="card-dark text-center">
              <Phone size={40} className="text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Call Us</h3>
              <a href="tel:+971554762284" className="text-primary hover:text-primary-dark">
                +971 55 476 2284
              </a>
            </div>
            <div className="card-dark text-center">
              <MapPin size={40} className="text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-steel-light text-sm">18 Street, Ras Al Khor Industrial Area 2, Dubai</p>
            </div>
            <div className="card-dark text-center">
              <div className="text-4xl text-primary mx-auto mb-4">💬</div>
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <a
                href="https://wa.me/971554762284"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-dark"
              >
                Message Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner title="Ready to Get Started?" subtitle="Contact us today for a free diagnostic" />
    </>
  )
}
