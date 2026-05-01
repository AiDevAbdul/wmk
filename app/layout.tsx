import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Providers } from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'WMK Auto Repairing Garage | ECM Repair & Car Programming Dubai',
    template: '%s | WMK Auto Garage Dubai',
  },
  description: 'Expert ECM repair, hybrid battery services, and car programming in Ras Al Khor, Dubai. Specialists in Tesla, BYD, BMW & 16+ brands. Call +971 55 476 2284.',
  keywords: 'ECM repair Dubai, car programming Dubai, hybrid battery repair, ABS repair, airbag repair, auto garage Ras Al Khor, Tesla repair Dubai, ECU programming',
  openGraph: {
    title: 'WMK Auto Repairing Garage | Advanced Auto Repair Dubai',
    description: 'ECM repair, hybrid battery, and programming specialists in Dubai. 16+ brands, 10+ years expertise.',
    type: 'website',
    locale: 'en_AE',
    alternateLocale: ['ar_AE'],
    images: [{ url: '/wmk-nobg.png', width: 1668, height: 1668, alt: 'WMK Auto Garage LLC Dubai' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WMK Auto Repairing Garage Dubai',
    description: 'Expert ECM repair, hybrid battery & car programming in Dubai.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://wmkautorepairing.com',
    languages: { 'en-AE': '/en', 'ar-AE': '/ar' },
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#06080F" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Inter — Apple-like clean sans-serif */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* LocalBusiness + AutoRepair Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['AutoRepair', 'LocalBusiness'],
              name: 'WMK Auto Repairing Garage LLC',
              image: 'https://wmkautorepairing.com/wmk-nobg.png',
              logo: 'https://wmkautorepairing.com/logo-icon.svg',
              url: 'https://wmkautorepairing.com',
              telephone: '+971554762284',
              priceRange: '$$',
              currenciesAccepted: 'AED',
              paymentAccepted: 'Cash, Credit Card',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '18 Street, Ras Al Khor Industrial Area 2',
                addressLocality: 'Dubai',
                addressRegion: 'Dubai',
                postalCode: '00000',
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
                  dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
                  opens: '08:00',
                  closes: '20:00',
                },
              ],
              areaServed: ['Ras Al Khor','Dubai','Dubai International City','Dubai Silicon Oasis','Mirdif','Deira'],
              knowsAbout: ['ECM Repair','ECU Programming','Hybrid Battery Repair','ABS Repair','Airbag Repair','Gear Programming','Car AC Repair','Tesla Repair'],
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '150',
              },
            }),
          }}
        />
      </head>
      <body className="bg-steel-dark text-surface font-sans antialiased">
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
