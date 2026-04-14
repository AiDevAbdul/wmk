import createMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'

const intlMiddleware = createMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en',
  localePrefix: 'always',
})

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check for auth cookie
  const sessionCookie = request.cookies.get('next-auth.session-token')?.value ||
                        request.cookies.get('__Secure-next-auth.session-token')?.value

  // Protect admin routes - redirect to login if no session cookie
  if (pathname.startsWith('/admin')) {
    if (!sessionCookie) {
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

