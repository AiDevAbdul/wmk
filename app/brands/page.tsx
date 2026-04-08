'use client'

import { motion } from 'framer-motion'
import { brands } from '@/lib/brands'
import Link from 'next/link'
import { SectionHeading, CTABanner } from '@/components/ui/Cards'

export default function BrandsPage() {
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
    <>
      {/* Hero */}
      <section className="bg-linear-to-b from-steel-mid to-steel-dark py-20">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Cars We Service</h1>
            <p className="text-xl text-steel-light max-w-2xl mx-auto">
              We service 16+ major brands, including EVs and hybrids. From Tesla to BMW, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20 bg-steel-dark">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {brands.map((brand) => (
              <motion.div key={brand.id} variants={itemVariants}>
                <Link href={`/brands/${brand.slug}`}>
                  <div className="card-dark group cursor-pointer h-full flex flex-col">
                    <h3 className="text-2xl font-bold mb-4 text-primary group-hover:text-primary-dark transition-colors">
                      {brand.name}
                    </h3>
                    <div className="flex-1">
                      <p className="text-sm text-steel-light mb-4">Services available:</p>
                      <ul className="space-y-2">
                        {brand.services.map((service, i) => (
                          <li key={i} className="text-sm text-steel-light flex items-center gap-2">
                            <span className="text-primary">✓</span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 text-primary font-semibold group-hover:translate-x-2 transition-transform">
                      Learn More →
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Don't See Your Brand?"
        subtitle="Contact us - we likely service your vehicle"
      />
    </>
  )
}
