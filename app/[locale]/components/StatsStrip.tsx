'use client'

import { motion } from 'framer-motion'
import { StatCounter } from '@/components/ui/Cards'
import { containerVariants, itemVariants } from '@/lib/animations'

export function StatsStrip() {
  return (
    <section className="bg-primary text-steel-dark py-12">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <motion.div variants={itemVariants}>
            <StatCounter number="16+" label="Supported Brands" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCounter number="12" label="Core Services" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCounter number="10+" label="Years Expertise" />
          </motion.div>
          <motion.div variants={itemVariants}>
            <StatCounter number="100%" label="Diagnostic Accuracy" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
