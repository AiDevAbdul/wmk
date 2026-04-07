'use client'

import { motion } from 'framer-motion'
import { Award, Users, Zap, Shield, CheckCircle, TrendingUp } from 'lucide-react'
import { CTABanner } from '@/components/ui/Cards'

export default function EnhancedAboutPage() {
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
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-steel-dark pt-20">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 z-0 opacity-15">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-about" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F5C518" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-about)" />
          </svg>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-steel-dark via-steel-dark/90 to-steel-mid/50 z-1"></div>

        {/* Accent Glow Elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/8 rounded-full blur-3xl z-0 animate-pulse"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="container-max relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-6 max-w-3xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex justify-center"
            >
              <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                <span className="text-primary font-semibold text-sm tracking-wide uppercase">🏆 Our Story</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white tracking-tight"
            >
              <span className="block">About WMK Auto</span>
              <span className="block bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">Repairing Garage</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base md:text-lg text-steel-light/80 leading-relaxed tracking-wide font-medium max-w-2xl mx-auto"
            >
              Advanced auto repair and programming specialists serving Dubai since 2014 with precision, integrity, and innovation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-24 bg-steel-dark">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Story Text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="inline-flex items-center gap-2 mb-6"
                >
                  <div className="w-8 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
                  <span className="text-primary font-semibold text-xs tracking-widest uppercase">Our Journey</span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-8"
                >
                  <span className="block text-white">From Small Workshop</span>
                  <span className="block bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">To Elite Authority</span>
                </motion.h2>
              </div>

              {/* Story Paragraphs */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="space-y-6 text-lg text-steel-light/90 leading-relaxed font-medium"
              >
                <p>
                  WMK Auto Repairing Garage LLC was founded with a simple mission: to provide world-class automotive repair and programming services to the Dubai community. Located in the heart of Ras Al Khor Industrial Area 2, we've built our reputation on precision, reliability, and customer satisfaction.
                </p>
                <p>
                  What started as a small workshop has grown into a comprehensive auto repair facility equipped with the latest diagnostic tools and staffed by certified technicians. We've earned the trust of thousands of vehicle owners across Dubai by delivering honest, transparent service and exceptional results.
                </p>
                <p>
                  Today, we're proud to be the only garage in Ras Al Khor offering ECM/ECU repair, hybrid battery services, online programming, and gear programming all under one roof. We service 16+ major brands, including Tesla and BYD, making us the go-to choice for EV owners in Dubai.
                </p>
              </motion.div>

              {/* Key Achievements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="space-y-4 pt-8 border-t border-steel-light/20"
              >
                {[
                  { icon: '🏆', text: '10+ years of automotive expertise' },
                  { icon: '⚡', text: '1000+ vehicles serviced annually' },
                  { icon: '🌍', text: '16+ brands supported' },
                  { icon: '✓', text: '100% customer satisfaction guarantee' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-white font-semibold">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Visual Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative h-96 hidden lg:flex items-center justify-center"
            >
              {/* Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl blur-2xl"></div>

              {/* Timeline Card */}
              <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-primary/15 via-primary/5 to-steel-mid/10 border-2 border-primary/30 backdrop-blur-xl p-8 flex flex-col items-center justify-center space-y-6 overflow-hidden group hover:border-primary/60 transition-all duration-500">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                {/* Timeline SVG */}
                <svg
                  viewBox="0 0 300 300"
                  className="w-48 h-48 relative z-10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <style>{`
                      @keyframes timeline-dash {
                        to { stroke-dashoffset: 0; }
                      }
                      .timeline-line {
                        stroke: #F5C518;
                        stroke-width: 2;
                        fill: none;
                        stroke-dasharray: 200;
                        stroke-dashoffset: 200;
                        animation: timeline-dash 2s ease-in-out forwards;
                      }
                      .timeline-dot {
                        fill: #F5C518;
                        animation: pulse-glow 2s ease-in-out infinite;
                      }
                    `}</style>
                  </defs>

                  {/* Vertical timeline line */}
                  <line x1="150" y1="30" x2="150" y2="270" className="timeline-line" />

                  {/* Timeline dots and labels */}
                  <circle cx="150" cy="60" r="6" className="timeline-dot" style={{ animationDelay: '0s' }} />
                  <text x="170" y="65" fill="#F5C518" fontSize="12" fontWeight="bold">2014</text>
                  <text x="170" y="80" fill="#8A919E" fontSize="10">Founded</text>

                  <circle cx="150" cy="130" r="6" className="timeline-dot" style={{ animationDelay: '0.3s' }} />
                  <text x="170" y="135" fill="#F5C518" fontSize="12" fontWeight="bold">2018</text>
                  <text x="170" y="150" fill="#8A919E" fontSize="10">Expanded</text>

                  <circle cx="150" cy="200" r="6" className="timeline-dot" style={{ animationDelay: '0.6s' }} />
                  <text x="170" y="205" fill="#F5C518" fontSize="12" fontWeight="bold">2024</text>
                  <text x="170" y="220" fill="#8A919E" fontSize="10">Elite Status</text>

                  <circle cx="150" cy="270" r="6" className="timeline-dot" style={{ animationDelay: '0.9s' }} />
                </svg>

                {/* Text Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="relative z-10 text-center"
                >
                  <p className="text-sm font-semibold text-primary tracking-widest uppercase mb-1">10+ Years</p>
                  <p className="text-xs text-steel-light/70 font-medium">Of Excellence & Innovation</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-gradient-to-b from-steel-mid to-steel-dark relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Our <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-steel-light/80 font-medium max-w-2xl mx-auto">
              The principles that guide every decision and interaction
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Award, title: 'Excellence', desc: 'We deliver the highest quality repairs and service every single time' },
              { icon: Users, title: 'Integrity', desc: 'Honest pricing and transparent communication with every customer' },
              { icon: Zap, title: 'Innovation', desc: 'Latest technology and continuous improvement in our processes' },
              { icon: Shield, title: 'Trust', desc: 'Your vehicle is in expert, caring hands with guaranteed results' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-primary/4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Border Glow */}
                  <div className="absolute inset-0 rounded-xl border border-primary/20 group-hover:border-primary/60 transition-colors duration-300"></div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="relative p-8 text-center h-full flex flex-col justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="relative mb-6 flex justify-center"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/20 rounded-full blur-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                      <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl border border-primary/40 group-hover:border-primary/80 transition-all duration-300">
                        <Icon size={32} className="text-primary" />
                      </div>
                    </motion.div>

                    <h3 className="text-xl font-bold tracking-tight text-white mb-3 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-steel-light/85 font-medium text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Expert Team Section */}
      <section className="py-24 bg-steel-dark">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Our <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Expert Team</span>
            </h2>
            <p className="text-steel-light/80 font-medium">Certified professionals dedicated to your vehicle's care</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { name: 'Ahmed Al Mansouri', role: 'Lead Technician', specialty: 'ECM & Programming', icon: '👨‍🔧' },
              { name: 'Fatima Al Zahra', role: 'Service Manager', specialty: 'Customer Relations', icon: '👩‍💼' },
              { name: 'Mohammed Al Maktoum', role: 'Diagnostics Specialist', specialty: 'Advanced Diagnostics', icon: '👨‍🔬' },
            ].map((member, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-primary/4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-xl border border-primary/20 group-hover:border-primary/60 transition-colors duration-300"></div>

                {/* Shine Effect */}
                <div className="absolute inset-0 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                </div>

                {/* Content */}
                <div className="relative p-8 text-center h-full flex flex-col justify-center">
                  <div className="text-5xl mb-4">{member.icon}</div>

                  <h3 className="text-xl font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>

                  <p className="text-primary text-sm font-semibold mb-2 tracking-wide uppercase">
                    {member.role}
                  </p>

                  <p className="text-steel-light/80 text-sm font-medium">
                    {member.specialty}
                  </p>

                  {/* Expertise Badge */}
                  <div className="mt-6 pt-6 border-t border-steel-light/20">
                    <div className="flex items-center justify-center gap-2 text-xs text-primary font-semibold">
                      <CheckCircle size={14} />
                      <span>Certified Expert</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications & Licenses Section */}
      <section className="py-24 bg-gradient-to-b from-steel-mid to-steel-dark relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Certifications & <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Licenses</span>
            </h2>
            <p className="text-steel-light/80 font-medium">Trusted by industry standards and regulatory bodies</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: '🏛️', cert: 'RTA Licensed - Dubai, UAE', desc: 'Regulatory Authority Approved' },
              { icon: '🔧', cert: 'Advanced Diagnostic Certified', desc: 'Latest Equipment & Software' },
              { icon: '⚙️', cert: 'ECM Programming Specialist', desc: 'Factory-Trained Technician' },
              { icon: '🔋', cert: 'Hybrid Battery Certified', desc: 'EV & Hybrid Specialist' },
              { icon: '⚡', cert: 'Tesla Service Authorized', desc: 'Tesla Brand Partner' },
              { icon: '🚗', cert: 'BYD Service Partner', desc: 'BYD Brand Authorized' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-primary/4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Border Glow */}
                <div className="absolute inset-0 rounded-xl border border-primary/20 group-hover:border-primary/60 transition-colors duration-300"></div>

                {/* Content */}
                <div className="relative p-6 text-center h-full flex flex-col justify-center">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-semibold text-white mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
                    {item.cert}
                  </h3>
                  <p className="text-steel-light/70 text-xs font-medium">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-steel-dark">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: '10+', label: 'Years Experience', icon: '📅' },
              { number: '1000+', label: 'Vehicles Serviced', icon: '🚗' },
              { number: '16+', label: 'Brands Supported', icon: '🏆' },
              { number: '100%', label: 'Satisfaction Rate', icon: '⭐' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 tracking-tight">
                  {stat.number}
                </div>
                <p className="text-steel-light/80 font-medium text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Ready to Experience WMK?"
        subtitle="Visit us in Ras Al Khor or call for a consultation with our expert team"
      />
    </>
  )
}
