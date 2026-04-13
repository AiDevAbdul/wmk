import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

const intlMiddleware = createMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'always',
})

export default function middleware(request: NextRequest) {
  // Allow admin routes to pass through without locale routing
  if (request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.next()
  }

  // Apply locale routing to all other routes
  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}

