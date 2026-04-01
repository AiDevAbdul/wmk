import { brands } from '@/lib/brands'
import { ReactNode } from 'react'

export async function generateStaticParams() {
  return brands.map((brand) => ({
    brand: brand.slug,
  }))
}

export default function Layout({ children }: { children: ReactNode }) {
  return children
}

