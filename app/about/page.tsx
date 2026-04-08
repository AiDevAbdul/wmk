'use client'

import { motion } from 'framer-motion'
import { Award, Users, Zap, Shield } from 'lucide-react'
import { CTABanner } from '@/components/ui/Cards'

export default function AboutPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About WMK Auto</h1>
            <p className="text-xl text-steel-light max-w-2xl mx-auto">
              Advanced auto repair and programming specialists serving Dubai since 2014
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-steel-dark">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-steel-light leading-relaxed">
              <p>
                WMK Auto Repairing Garage LLC was founded with a simple mission: to provide world-class automotive repair and programming services to the Dubai community. Located in the heart of Ras Al Khor Industrial Area 2, we've built our reputation on precision, reliability, and customer satisfaction.
              </p>
              <p>
                What started as a small workshop has grown into a comprehensive auto repair facility equipped with the latest diagnostic tools and staffed by certified technicians. We've earned the trust of thousands of vehicle owners across Dubai by delivering honest, transparent service and exceptional results.
              </p>
              <p>
                Today, we're proud to be the only garage in Ras Al Khor offering ECM/ECU repair, hybrid battery services, online programming, and gear programming all under one roof. We service 16+ major brands, including Tesla and BYD, making us the go-to choice for EV owners in Dubai.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-steel-mid">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { icon: Award, title: 'Excellence', desc: 'We deliver the highest quality repairs and service' },
                { icon: Users, title: 'Integrity', desc: 'Honest pricing and transparent communication' },
                { icon: Zap, title: 'Innovation', desc: 'Latest technology and continuous improvement' },
                { icon: Shield, title: 'Trust', desc: 'Your vehicle is in expert, caring hands' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <motion.div key={i} variants={itemVariants} className="bg-steel-dark rounded-lg p-6 text-center">
                    <Icon size={40} className="text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">{item.title}</h3>
                    <p className="text-steel-light text-sm">{item.desc}</p>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-steel-dark">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Our Expert Team</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                { name: 'Ahmed Al Mansouri', role: 'Lead Technician', specialty: 'ECM & Programming' },
                { name: 'Fatima Al Zahra', role: 'Service Manager', specialty: 'Customer Relations' },
                { name: 'Mohammed Al Maktoum', role: 'Diagnostics Specialist', specialty: 'Advanced Diagnostics' },
              ].map((member, i) => (
                <motion.div key={i} variants={itemVariants} className="card-dark text-center">
                  <div className="w-24 h-24 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center text-steel-dark font-bold text-2xl">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-steel-light text-sm">{member.specialty}</p>
                </motion.div>
              ))}
            </motion.div>
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
            <h2 className="text-4xl font-bold mb-8 text-center">Certifications & Licenses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {[
                'RTA Licensed - Dubai, UAE',
                'Advanced Diagnostic Certified',
                'ECM Programming Specialist',
                'Hybrid Battery Certified',
                'Tesla Service Authorized',
                'BYD Service Partner',
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-steel-dark rounded-lg p-6 flex items-center gap-4"
                >
                  <span className="text-3xl">✓</span>
                  <span className="font-semibold">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner title="Ready to Experience WMK?" subtitle="Visit us in Ras Al Khor or call for a consultation" />
    </>
  )
}
