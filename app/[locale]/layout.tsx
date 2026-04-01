'use client'

import { ReactNode } from 'react'
import { use } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import WhatsAppFloat from '@/components/ui/WhatsAppFloat'

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = use(params)
  const isArabic = locale === 'ar'

  return (
    <NextIntlClientProvider locale={locale}>
      <div dir={isArabic ? 'rtl' : 'ltr'} className={isArabic ? 'rtl' : 'ltr'}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </NextIntlClientProvider>
  )
}
