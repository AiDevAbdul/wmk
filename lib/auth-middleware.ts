import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware wrapper to protect routes that require authentication
 * Returns session if authenticated, otherwise redirects to login
 */
export async function withAuth(request: NextRequest) {
  try {
    const session = await auth(request);

    if (!session) {
      return NextResponse.redirect(new URL("/en/login", request.url));
    }

    return session;
  } catch (error) {
    console.error("Auth middleware error:", error);
    return NextResponse.redirect(new URL("/en/login", request.url));
  }
}

/**
 * Check if user has required role
 */
export function hasRole(session: any, requiredRole: string): boolean {
  return session?.user?.role === requiredRole || session?.user?.role === "admin";
}
