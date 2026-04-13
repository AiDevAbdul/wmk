'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function SpecializationSection() {
  return (
    <section className="py-24 bg-linear-to-br from-steel-mid via-steel-mid to-steel-dark relative overflow-hidden">
      {/* Background Accent Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2"
            >
              <div className="w-8 h-1 bg-linear-to-r from-primary to-primary/60 rounded-full"></div>
              <span className="text-primary font-semibold text-xs tracking-widest uppercase">Our Specialty</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-5xl md:text-6xl font-bold leading-tight tracking-tight"
            >
              <span className="block text-white">Advanced ECM &</span>
              <span className="block bg-linear-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">Programming Specialists</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-white/95 leading-relaxed font-semibold max-w-xl"
            >
              Precision ECM repair and advanced programming for all major automotive brands. We combine cutting-edge diagnostics with expert technician knowledge.
            </motion.p>

            {/* Feature List - Enhanced */}
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-5"
            >
              {[
                { icon: '⚙️', title: 'Expert ECM Repair', desc: 'Reprogramming for all major brands with precision diagnostics' },
                { icon: '🔧', title: 'Advanced Diagnostics', desc: 'Latest equipment and software for accurate fault detection' },
                { icon: '🌐', title: 'Online Programming', desc: 'Remote ECM updates and programming capabilities' },
              ].map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
                  className="flex items-start gap-4 group p-5 rounded-xl bg-primary/8 border border-primary/20 hover:bg-primary/12 hover:border-primary/40 transition-all duration-300"
                >
                  {/* Icon Container */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center text-xl group-hover:bg-primary/30 group-hover:border-primary/70 transition-all duration-300 mt-1">
                    {item.icon}
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 pt-1">
                    <p className="font-semibold text-white text-base tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </p>
                    <p className="text-white/90 text-sm leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="pt-4"
            >
              <a
                href="/services/ecm-repair"
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 bg-linear-to-r from-primary to-primary/90 text-steel-dark font-bold rounded-xl hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 overflow-hidden tracking-tight"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative">Learn More About ECM Repair</span>
                <ArrowRight size={20} className="relative group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-96 hidden md:flex items-center justify-center"
          >
            {/* Glow Background */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl blur-2xl"></div>

            {/* Premium Card Container */}
            <div className="relative w-full h-full rounded-3xl bg-linear-to-br from-primary/15 via-primary/5 to-steel-mid/10 border-2 border-primary/30 backdrop-blur-xl p-8 flex flex-col items-center justify-center space-y-6 overflow-hidden group hover:border-primary/60 transition-all duration-500">

              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              {/* Circuit SVG */}
              <svg
                viewBox="0 0 300 300"
                className="w-48 h-48 relative z-10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <style>{`
                    @keyframes dash {
                      to { stroke-dashoffset: 0; }
                    }
                    @keyframes pulse-glow {
                      0%, 100% { opacity: 0.5; }
                      50% { opacity: 1; }
                    }
                    .circuit-line {
                      stroke: #F5C518;
                      stroke-width: 2.5;
                      fill: none;
                      stroke-dasharray: 800;
                      stroke-dashoffset: 800;
                      animation: dash 3s ease-in-out forwards;
                    }
                    .circuit-dot {
                      fill: #F5C518;
                      animation: pulse-glow 2s ease-in-out infinite;
                    }
                  `}</style>
                </defs>
                <circle cx="150" cy="150" r="120" fill="none" stroke="#4E5566" strokeWidth="1.5" opacity="0.4" />
                <circle cx="150" cy="150" r="90" fill="none" stroke="#4E5566" strokeWidth="1" opacity="0.2" />

                <path className="circuit-line" d="M 150 30 L 150 80 M 150 80 L 100 80 M 100 80 L 100 130" />
                <path className="circuit-line" d="M 150 80 L 200 80 M 200 80 L 200 130" style={{ animationDelay: '0.2s' }} />
                <path className="circuit-line" d="M 150 270 L 150 220 M 150 220 L 100 220 M 100 220 L 100 170" style={{ animationDelay: '0.4s' }} />
                <path className="circuit-line" d="M 150 220 L 200 220 M 200 220 L 200 170" style={{ animationDelay: '0.6s' }} />

                <circle cx="150" cy="150" r="35" fill="none" stroke="#F5C518" strokeWidth="2.5" opacity="0.6" />
                <circle cx="150" cy="150" r="25" fill="#F5C518" opacity="0.4" />

                {/* Pulsing dots */}
                <circle className="circuit-dot" cx="100" cy="80" r="4" style={{ animationDelay: '0s' }} />
                <circle className="circuit-dot" cx="200" cy="80" r="4" style={{ animationDelay: '0.3s' }} />
                <circle className="circuit-dot" cx="100" cy="220" r="4" style={{ animationDelay: '0.6s' }} />
                <circle className="circuit-dot" cx="200" cy="220" r="4" style={{ animationDelay: '0.9s' }} />
              </svg>

              {/* Text Badge Below SVG */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="relative z-10 text-center"
              >
                <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-1">ECM Expertise</p>
                <p className="text-xs text-steel-light/70 font-medium">Precision Diagnostics & Programming</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
