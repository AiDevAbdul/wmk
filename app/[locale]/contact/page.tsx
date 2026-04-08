'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, MessageCircle, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { CTABanner } from '@/components/ui/Cards'

export default function EnhancedContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    brand: '',
    service: '',
    message: '',
  })

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required'
    if (!formData.service) newErrors.service = 'Please select a service'
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm()

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setFormState('submitting')

    const whatsappMessage = `Hello WMK Auto! I'm interested in your services.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Car Brand:* ${formData.brand || 'Not specified'}\n*Service:* ${formData.service}\n*Message:* ${formData.message || 'No additional message'}`
    const encodedMessage = encodeURIComponent(whatsappMessage)

    setTimeout(() => {
      window.open(`https://wa.me/971554762284?text=${encodedMessage}`, '_blank')
      setFormState('success')
      setFormData({ name: '', phone: '', brand: '', service: '', message: '' })

      setTimeout(() => {
        setFormState('idle')
      }, 3000)
    }, 500)
  }

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
              <pattern id="grid-contact" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F5C518" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-contact)" />
          </svg>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-steel-dark via-steel-dark/90 to-steel-mid/50 z-1"></div>

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
                <span className="text-primary font-semibold text-sm tracking-wide uppercase">📞 Get in Touch</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white tracking-tight"
            >
              <span className="block">Contact Our</span>
              <span className="block bg-linear-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent">Expert Team</span>
            </motion.h1>

            {/* Subheading with Trust Signal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-base md:text-lg text-steel-light/80 leading-relaxed tracking-wide font-medium">
                Fast response guaranteed. Average response time: 2 hours
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-primary font-semibold">
                <CheckCircle size={18} />
                <span>Available 8 AM - 8 PM, 7 days a week</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards - Enhanced */}
      <section className="py-20 bg-steel-dark">
        <div className="container-max">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Phone,
                title: 'Call Us',
                content: '+971 55 476 2284',
                link: 'tel:+971554762284',
                description: 'Immediate assistance',
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                content: 'Ras Al Khor Industrial Area 2',
                link: 'https://maps.google.com/?q=WMK+Auto+Repairing+Garage+Ras+Al+Khor+Dubai',
                description: '18 Street, Dubai',
              },
              {
                icon: Clock,
                title: 'Hours',
                content: 'Mon-Sun: 8 AM - 8 PM',
                link: null,
                description: 'Open 7 days a week',
              },
              {
                icon: MessageCircle,
                title: 'WhatsApp',
                content: 'Message us anytime',
                link: 'https://wa.me/971554762284',
                description: 'Fastest response',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative"
                >
                  {/* Card Background with Gradient */}
                  <div className="absolute inset-0 bg-linear-to-br from-primary/8 to-primary/4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Card Border Glow */}
                  <div className="absolute inset-0 rounded-xl border border-primary/20 group-hover:border-primary/60 transition-colors duration-300"></div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="relative p-8 text-center h-full flex flex-col justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="relative mb-4 flex justify-center"
                    >
                      <div className="absolute inset-0 bg-linear-to-br from-primary/40 to-primary/20 rounded-full blur-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                      <div className="relative w-16 h-16 flex items-center justify-center bg-linear-to-br from-primary/20 to-primary/10 rounded-xl border border-primary/40 group-hover:border-primary/80 transition-all duration-300">
                        <Icon size={32} className="text-primary" />
                      </div>
                    </motion.div>

                    <h3 className="text-lg font-bold tracking-tight text-white mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>

                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 font-semibold text-sm mb-2 transition-colors duration-300"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-primary font-semibold text-sm mb-2">{item.content}</p>
                    )}

                    <p className="text-steel-light/70 text-xs">{item.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-24 bg-linear-to-b from-steel-mid to-steel-dark">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form - Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-bold mb-2 tracking-tight text-white">Send us a Message</h2>
                <p className="text-steel-light/80 font-medium">We'll respond within 2 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-white tracking-tight">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-steel-dark/50 text-white px-5 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none ${
                      errors.name
                        ? 'border-accent-red focus:border-accent-red'
                        : 'border-steel-light/30 focus:border-primary'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-accent-red text-xs mt-2 font-medium">{errors.name}</p>}
                </div>

                {/* Phone Field */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-white tracking-tight">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full bg-steel-dark/50 text-white px-5 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none ${
                      errors.phone
                        ? 'border-accent-red focus:border-accent-red'
                        : 'border-steel-light/30 focus:border-primary'
                    }`}
                    placeholder="+971 55 XXX XXXX"
                  />
                  {errors.phone && <p className="text-accent-red text-xs mt-2 font-medium">{errors.phone}</p>}
                </div>

                {/* Brand Field */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-white tracking-tight">Car Brand</label>
                  <select
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    className="w-full bg-steel-dark/50 text-white px-5 py-3 rounded-lg border-2 border-steel-light/30 focus:border-primary focus:outline-none transition-all duration-300"
                  >
                    <option value="">Select a brand</option>
                    <option value="Tesla">Tesla</option>
                    <option value="BYD">BYD</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes">Mercedes-Benz</option>
                    <option value="Audi">Audi</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Honda">Honda</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Ford">Ford</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="Lexus">Lexus</option>
                    <option value="Mazda">Mazda</option>
                    <option value="Subaru">Subaru</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Kia">Kia</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Service Field */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-white tracking-tight">Service Needed *</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full bg-steel-dark/50 text-white px-5 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none ${
                      errors.service
                        ? 'border-accent-red focus:border-accent-red'
                        : 'border-steel-light/30 focus:border-primary'
                    }`}
                  >
                    <option value="">Select a service</option>
                    <option value="ECM Repair">ECM Repair</option>
                    <option value="Hybrid Battery">Hybrid Battery Services</option>
                    <option value="Car Programming">Car Programming</option>
                    <option value="ABS & Airbag">ABS & Airbag Repair</option>
                    <option value="AC Repair">AC Repair</option>
                    <option value="General Repair">General Repair</option>
                    <option value="Electrical">Electrical Services</option>
                    <option value="Body Work">Body Work</option>
                    <option value="Tyres">Tyres & Wheels</option>
                    <option value="Oil Change">Oil Change & Maintenance</option>
                    <option value="Radiator/Exhaust">Radiator & Exhaust</option>
                    <option value="Detailing">Detailing</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.service && <p className="text-accent-red text-xs mt-2 font-medium">{errors.service}</p>}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-sm font-semibold mb-3 text-white tracking-tight">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-steel-dark/50 text-white px-5 py-3 rounded-lg border-2 border-steel-light/30 focus:border-primary focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your vehicle issue..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formState === 'submitting'}
                  whileHover={{ scale: formState === 'submitting' ? 1 : 1.02 }}
                  className={`w-full py-4 rounded-lg font-bold text-lg tracking-tight transition-all duration-300 overflow-hidden relative group ${
                    formState === 'success'
                      ? 'bg-green-600 text-white'
                      : 'bg-linear-to-r from-primary to-primary/90 text-steel-dark hover:shadow-2xl hover:shadow-primary/50'
                  }`}
                >
                  {formState === 'submitting' && (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-steel-dark border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  )}
                  {formState === 'success' && (
                    <span className="flex items-center justify-center gap-2">
                      <CheckCircle size={20} />
                      Message sent! Opening WhatsApp...
                    </span>
                  )}
                  {formState === 'idle' && (
                    <span className="relative flex items-center justify-center gap-2">
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      Send Message via WhatsApp
                    </span>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Right Column - Map & Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-primary/20 group hover:border-primary/60 transition-all duration-300">
                <div className="absolute inset-0 bg-linear-to-br from-primary/8 to-primary/4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.8234567890123!2d55.3586!3d25.1972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2sRas%20Al%20Khor%20Industrial%20Area%202!5e0!3m2!1sen!2sae!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Business Hours Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative bg-linear-to-br from-steel-mid/60 to-steel-dark/80 rounded-2xl p-8 border border-primary/20 hover:border-primary/60 transition-all duration-300"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/8 to-primary/4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-6 text-primary tracking-tight">Business Hours</h3>
                  <div className="space-y-4">
                    {[
                      { day: 'Monday - Saturday', hours: '8:00 AM - 8:00 PM' },
                      { day: 'Sunday', hours: '8:00 AM - 8:00 PM' },
                      { day: 'Holidays', hours: 'Call for availability' },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex justify-between items-center pb-4 border-b border-steel-light/20 last:border-b-0"
                      >
                        <span className="font-semibold text-white">{item.day}</span>
                        <span className="text-steel-light/90 font-medium">{item.hours}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Trust Badges */}
                  <div className="mt-8 pt-6 border-t border-steel-light/20 space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-primary" />
                      <span className="text-steel-light/90">RTA Licensed - Dubai</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-primary" />
                      <span className="text-steel-light/90">10+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-primary" />
                      <span className="text-steel-light/90">Workmanship Guaranteed</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-steel-dark">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
                Frequently Asked <span className="bg-linear-to-r from-primary to-primary/80 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-steel-light/80 font-medium">Quick answers to common questions</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: 'How long does a typical ECM repair take?',
                  a: 'Most ECM repairs are completed within 24-48 hours. Simple diagnostics can be done same-day.',
                },
                {
                  q: 'Do you offer warranty on repairs?',
                  a: 'Yes, all our repairs come with a 12-month workmanship guarantee.',
                },
                {
                  q: 'What brands do you service?',
                  a: 'We service 16+ major brands including Tesla, BYD, BMW, Mercedes, Toyota, Honda, and more.',
                },
                {
                  q: 'Can I get a quote before bringing my car?',
                  a: 'Yes! Contact us with your vehicle details and we can provide an estimate.',
                },
              ].map((item, i) => (
                <FAQItem key={i} question={item.q} answer={item.a} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner
        title="Ready to Get Your Car Fixed?"
        subtitle="Contact us today for expert auto repair in Dubai"
      />
    </>
  )
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 bg-linear-to-br from-steel-mid/60 to-steel-dark/80 rounded-xl border border-primary/20 hover:border-primary/60 transition-all duration-300 flex items-center justify-between"
      >
        <span className="font-semibold text-white text-lg tracking-tight">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-primary flex-shrink-0"
        >
          ▼
        </motion.div>
      </button>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-6 bg-steel-dark/50 border-x border-b border-primary/10 text-steel-light/90 leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  )
}
