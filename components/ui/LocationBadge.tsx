'use client'

import { MapPin } from 'lucide-react'

export function LocationBadge() {
  return (
    <a
      href="https://maps.google.com/?q=18+Street+Ras+Al+Khor+Industrial+Area+2+Dubai"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full max-w-2xl mx-auto mt-12"
    >
      {/* Multi-layer Glow Background */}
      <div className="absolute inset-0 bg-linear-to-r from-primary/50 via-primary/30 to-primary/20 rounded-3xl blur-3xl opacity-70 pointer-events-none"></div>
      <div className="absolute inset-0 bg-linear-to-b from-primary/20 to-transparent rounded-3xl blur-2xl opacity-50 pointer-events-none"></div>

      {/* Premium Card */}
      <div className="relative bg-linear-to-br from-primary/20 via-primary/10 to-steel-mid/20 backdrop-blur-2xl rounded-3xl px-8 py-6 sm:px-10 sm:py-7 border-2 border-primary/60 shadow-2xl shadow-primary/40 hover:shadow-primary/60 hover:border-primary/90 transition-all duration-500 overflow-hidden cursor-pointer">

        {/* Animated gradient overlay on hover */}
        <div className="absolute inset-0 bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>

        {/* Content */}
        <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
          {/* Icon Container */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-linear-to-br from-primary/40 to-primary/20 flex items-center justify-center shrink-0 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-primary/50 transition-all duration-500 border border-primary/30">
            <MapPin size={32} className="text-primary group-hover:animate-bounce" />
          </div>

          {/* Text Content */}
          <div className="text-center sm:text-left flex-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
              <span className="text-2xl">📍</span>
              <p className="font-bold text-white text-xl sm:text-2xl tracking-tight">Ras Al Khor Industrial Area 2</p>
            </div>
            <p className="text-sm sm:text-base text-steel-light/90 font-medium leading-relaxed">18 Street, Dubai, UAE</p>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 mt-3 text-xs sm:text-sm font-semibold text-primary/90">
              <span>🕐 8:00 AM - 10:00 PM</span>
              <span className="hidden sm:inline">•</span>
              <span>Sat - Thu (Fri OFF)</span>
            </div>
            <p className="text-xs sm:text-sm text-primary/80 mt-2 font-semibold tracking-wide uppercase">Elite Auto Repair Specialists</p>
          </div>

          {/* Action Indicator */}
          <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 group-hover:bg-primary/40 transition-colors duration-300">
            <span className="text-primary text-xl group-hover:scale-125 transition-transform duration-300">→</span>
          </div>
        </div>
      </div>
    </a>
  )
}
