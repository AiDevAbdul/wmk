import { services } from '@/lib/services'
import { ReactNode } from 'react'

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}

