import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WMK Auto Repairing Garage | ECM Repair & Car Programming Dubai',
  description: 'Expert ECM repair, hybrid battery, and car programming in Ras Al Khor, Dubai. Tesla, BYD, BMW specialists. Call +971 55 476 2284.',
  keywords: 'ECM repair Dubai, car programming Dubai, hybrid battery repair, ABS repair, auto garage Ras Al Khor',
  openGraph: {
    title: 'WMK Auto Repairing Garage | Advanced Auto Repair Dubai',
    description: 'ECM repair, hybrid battery, and programming specialists in Dubai',
    type: 'website',
    locale: 'en_AE',
    alternateLocale: ['ar_AE'],
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1E2128" />
        <link rel="icon" href="/favicon.ico" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=Exo+2:wght@600&family=IBM+Plex+Sans:wght@400;500&family=JetBrains+Mono:wght@400&display=swap"
          rel="stylesheet"
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoRepair',
              name: 'WMK Auto Repairing Garage LLC',
              image: 'https://wmkautorepairing.com/og-image.jpg',
              url: 'https://wmkautorepairing.com',
              telephone: '+971554762284',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '18 Street, Ras Al Khor Industrial Area 2',
                addressLocality: 'Dubai',
                addressRegion: 'Dubai',
                addressCountry: 'AE',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 25.1972,
                longitude: 55.3586,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'],
                  opens: '08:00',
                  closes: '20:00',
                },
              ],
              priceRange: '$$',
              areaServed: ['Ras Al Khor', 'Dubai', 'Dubai International City', 'Dubai Silicon Oasis', 'Mirdif'],
              knowsAbout: ['ECM Repair', 'ECU Programming', 'Hybrid Battery Repair', 'ABS Repair', 'Airbag Repair', 'Gear Programming', 'Car AC Repair'],
            }),
          }}
        />
      </head>
      <body className="bg-steel-dark text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
