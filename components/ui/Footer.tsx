'use client'

import Link from 'next/link'
import { Phone, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-steel-mid border-t border-steel-light">
      <div className="container-max py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-primary">WMK Auto</h3>
            <p className="text-white text-sm leading-relaxed">
              Advanced auto repair & programming specialists in Ras Al Khor, Dubai. ECM repair, hybrid battery, and car programming for all major brands.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white">
              <li><Link href="/services/ecm-repair" className="hover:text-primary">ECM Repair</Link></li>
              <li><Link href="/services/hybrid-battery" className="hover:text-primary">Hybrid Battery</Link></li>
              <li><Link href="/services/car-programming" className="hover:text-primary">Car Programming</Link></li>
              <li><Link href="/services/abs-airbag" className="hover:text-primary">ABS & Airbag</Link></li>
              <li><Link href="/services" className="hover:text-primary">View All</Link></li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="font-semibold mb-4">Brands</h4>
            <ul className="space-y-2 text-sm text-white">
              <li><Link href="/brands/tesla" className="hover:text-primary">Tesla</Link></li>
              <li><Link href="/brands/bmw" className="hover:text-primary">BMW</Link></li>
              <li><Link href="/brands/mercedes" className="hover:text-primary">Mercedes</Link></li>
              <li><Link href="/brands/audi" className="hover:text-primary">Audi</Link></li>
              <li><Link href="/brands" className="hover:text-primary">All Brands</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-white">
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-1 flex-shrink-0 text-primary" />
                <a href="tel:+971554762284" className="hover:text-primary">+971 55 476 2284</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-primary" />
                <span>18 Street, Ras Al Khor Industrial Area 2, Dubai</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={16} className="mt-1 flex-shrink-0 text-primary" />
                <span>Mon-Sun: 8:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-steel-light pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white">
          <p>&copy; 2026 WMK Auto Repairing Garage LLC. All rights reserved.</p>
          <p>RTA Licensed — Dubai, UAE</p>
        </div>
      </div>
    </footer>
  )
}
