'use client'

import Image from 'next/image'

export default function WhatsAppFloat() {
  const whatsappUrl = 'https://wa.me/971554762284?text=Hello%2C%20I%20need%20a%20car%20repair%20quote'

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/whatsapp-svgrepo-com.svg"
        alt="WhatsApp"
        width={24}
        height={24}
      />
    </a>
  )
}
