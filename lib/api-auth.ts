import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

/**
 * Require authentication for API routes
 * Returns session if authenticated, otherwise returns 401 error
 */
export async function requireAuth(request: NextRequest) {
  try {
    const session = await auth(request);

    if (!session) {
      return {
        authenticated: false,
        response: NextResponse.json(
          { error: "Unauthorized" },
          { status: 401 }
        ),
      };
    }

    return {
      authenticated: true,
      session,
      response: null,
    };
  } catch (error) {
    console.error("API auth error:", error);
    return {
      authenticated: false,
      response: NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      ),
    };
  }
}

/**
 * Check if user has required role
 */
export function checkRole(session: any, requiredRole: string): boolean {
  return session?.user?.role === requiredRole || session?.user?.role === "admin";
}

/**
 * Return 403 Forbidden response
 */
export function forbiddenResponse(message: string = "Forbidden") {
  return NextResponse.json(
    { error: message },
    { status: 403 }
  );
}
