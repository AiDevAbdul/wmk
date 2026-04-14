import { generateCsrfToken, validateCsrfToken } from "@/lib/security";

/**
 * Generate a new CSRF token for a session
 */
export function generateToken(): string {
  return generateCsrfToken();
}

/**
 * Validate CSRF token from form submission
 */
export function validateToken(token: string, sessionToken: string): boolean {
  return validateCsrfToken(token, sessionToken);
}

/**
 * Store CSRF token in session (in real app, would use session storage)
 * For now, we'll use a simple in-memory store with token expiry
 */
const tokenStore = new Map<string, { token: string; expiresAt: number }>();

export function storeToken(sessionId: string, token: string): void {
  const expiresAt = Date.now() + 60 * 60 * 1000; // 1 hour expiry
  tokenStore.set(sessionId, { token, expiresAt });
}

export function getToken(sessionId: string): string | null {
  const stored = tokenStore.get(sessionId);

  if (!stored) {
    return null;
  }

  if (Date.now() > stored.expiresAt) {
    tokenStore.delete(sessionId);
    return null;
  }

  return stored.token;
}

export function verifyToken(sessionId: string, token: string): boolean {
  const stored = getToken(sessionId);
  return stored ? validateToken(token, stored) : false;
}

export function clearToken(sessionId: string): void {
  tokenStore.delete(sessionId);
}
