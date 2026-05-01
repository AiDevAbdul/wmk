'use client'

import Image from 'next/image'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/971554762284?text=Hello%2C%20I%20need%20a%20car%20repair%20quote"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 group"
    >
      {/* Tooltip */}
      <div
        className="hidden sm:flex items-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none"
        style={{ background: 'rgba(6,8,15,0.95)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)', borderRadius: 12, padding: '8px 14px' }}
      >
        <span className="text-xs font-semibold text-white whitespace-nowrap">Chat on WhatsApp</span>
      </div>

      {/* Button */}
      <div
        className="relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_8px_32px_rgba(37,211,102,0.4)]"
        style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', boxShadow: '0 4px 20px rgba(37,211,102,0.28)' }}
      >
        <span className="absolute inset-0 rounded-2xl animate-ping opacity-[0.18]" style={{ background: '#25D366' }} />
        <Image src="/whatsapp-svgrepo-com.svg" alt="" width={26} height={26} className="relative z-10" aria-hidden="true" />
      </div>
    </a>
  )
}
