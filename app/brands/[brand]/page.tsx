import { motion } from 'framer-motion'
import { Phone, MapPin } from 'lucide-react'
import { brands, brandDetails } from '@/lib/brands'
import { CTABanner } from '@/components/ui/Cards'

export default function BrandDetailPage({
  params,
}: {
  params: Promise<{ brand: string }>
}) {
  const resolvedParams = params as any
  const brandSlug = resolvedParams.brand
  const brand = brands.find((b) => b.slug === brandSlug)
  const details = brandDetails[brandSlug]

  if (!brand || !details) {
    return (
      <div className="container-max py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Brand Not Found</h1>
        <p className="text-steel-light">The brand you're looking for doesn't exist.</p>
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
            <div className="text-6xl font-bold text-primary mb-4">{details.name}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Specialist Repair & Service</h1>
            <p className="text-xl text-steel-light mb-8 max-w-2xl">{details.description}</p>
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

      {/* Services */}
      <section className="py-20 bg-steel-dark">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">Services for {details.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {details.services.map((service: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-dark"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-primary font-bold text-2xl flex-shrink-0">✓</span>
                    <div>
                      <h3 className="font-semibold mb-2">{service}</h3>
                      <p className="text-steel-light text-sm">
                        Expert {service.toLowerCase()} for {details.name} vehicles
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-steel-mid">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">Our Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {details.certifications.map((cert: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-steel-dark rounded-lg p-6 border-l-4 border-primary"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🏆</span>
                    <span className="font-semibold">{cert}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us for This Brand */}
      <section className="py-20 bg-steel-dark">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">Why Choose WMK for {details.name}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Specialized Knowledge',
                  desc: `Our technicians have extensive experience with ${details.name} vehicles and their specific requirements.`,
                },
                {
                  title: 'Advanced Diagnostics',
                  desc: `We use brand-specific diagnostic tools and software to accurately identify and fix ${details.name} issues.`,
                },
                {
                  title: 'Genuine Parts & Warranty',
                  desc: `We use quality parts and provide warranty on all repairs for your peace of mind.`,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-dark"
                >
                  <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                  <p className="text-steel-light">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-steel-mid">
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

      <CTABanner
        title={`Book Your ${details.name} Service Today`}
        subtitle="Expert technicians ready to help"
      />
    </>
  )
}
