import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@/lib/auth'

const intlMiddleware = createMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'always',
})

export default async function middleware(request: NextRequest) {
  // Protect admin routes with server-side auth check
  if (request.nextUrl.pathname.startsWith('/admin')) {
    try {
      const session = await auth(request)

      if (!session) {
        return NextResponse.redirect(new URL('/en/login', request.url))
      }
    } catch (error) {
      console.error('Auth middleware error:', error)
      return NextResponse.redirect(new URL('/en/login', request.url))
    }

    return NextResponse.next()
  }

  // Apply locale routing to all other routes
  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}

