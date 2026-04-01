'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'
import { useState } from 'react'
import { CTABanner } from '@/components/ui/Cards'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    brand: '',
    service: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Hello, I'm interested in your services.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nCar Brand: ${formData.brand}\nService: ${formData.service}\nMessage: ${formData.message}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/971554762284?text=${encodedMessage}`, '_blank')
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
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-steel-light max-w-2xl mx-auto">
              Get in touch with our team for fast, reliable auto repair in Dubai
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-steel-dark">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {[
              {
                icon: Phone,
                title: 'Call Us',
                content: '+971 55 476 2284',
                link: 'tel:+971554762284',
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                content: '18 Street, Ras Al Khor Industrial Area 2, Dubai',
                link: 'https://maps.google.com/?q=WMK+Auto+Repairing+Garage+Ras+Al+Khor+Dubai',
              },
              {
                icon: Clock,
                title: 'Hours',
                content: 'Mon-Sun: 8:00 AM - 8:00 PM',
                link: null,
              },
              {
                icon: Mail,
                title: 'WhatsApp',
                content: 'Message us anytime',
                link: 'https://wa.me/971554762284',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-dark text-center"
                >
                  <Icon size={40} className="text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark text-sm">
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-steel-light text-sm">{item.content}</p>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-steel-mid">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-steel-dark text-white px-4 py-3 rounded-lg border border-steel-light focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-steel-dark text-white px-4 py-3 rounded-lg border border-steel-light focus:border-primary focus:outline-none transition-colors"
                    placeholder="+971 55 XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Car Brand</label>
                  <select
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    className="w-full bg-steel-dark text-white px-4 py-3 rounded-lg border border-steel-light focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select a brand</option>
                    <option value="Tesla">Tesla</option>
                    <option value="BMW">BMW</option>
                    <option value="Mercedes">Mercedes-Benz</option>
                    <option value="Audi">Audi</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Honda">Honda</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Ford">Ford</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-steel-dark text-white px-4 py-3 rounded-lg border border-steel-light focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="ECM Repair">ECM Repair</option>
                    <option value="Hybrid Battery">Hybrid Battery</option>
                    <option value="Car Programming">Car Programming</option>
                    <option value="ABS & Airbag">ABS & Airbag</option>
                    <option value="AC Repair">AC Repair</option>
                    <option value="General Repair">General Repair</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-steel-dark text-white px-4 py-3 rounded-lg border border-steel-light focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your vehicle issue..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message via WhatsApp
                </button>
              </form>
            </motion.div>

            {/* Map & Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="card-dark h-96 overflow-hidden">
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

              {/* Hours */}
              <div className="card-dark">
                <h3 className="text-2xl font-bold mb-6 text-primary">Business Hours</h3>
                <div className="space-y-3">
                  {[
                    { day: 'Monday - Thursday', hours: '8:00 AM - 8:00 PM' },
                    { day: 'Friday', hours: '8:00 AM - 8:00 PM' },
                    { day: 'Saturday', hours: '8:00 AM - 8:00 PM' },
                    { day: 'Sunday', hours: '8:00 AM - 8:00 PM' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center pb-3 border-b border-steel-light last:border-b-0">
                      <span className="font-semibold">{item.day}</span>
                      <span className="text-steel-light">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABanner title="We're Here to Help" subtitle="Contact us today for expert auto repair in Dubai" />
    </>
  )
}
