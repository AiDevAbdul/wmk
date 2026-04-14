import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { validatePassword, checkRateLimit, getRateLimitRemaining } from "@/lib/security";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          const email = credentials.email as string;
          const password = credentials.password as string;

          // Get client IP for rate limiting
          let clientIp = "unknown";
          if (req?.headers?.get) {
            clientIp = (req.headers.get("x-forwarded-for") ||
                       req.headers.get("x-real-ip") ||
                       "unknown").split(",")[0].trim();
          }

          // Check rate limit (5 attempts per 15 minutes)
          if (!checkRateLimit(`login:${clientIp}`, 5, 15 * 60 * 1000)) {
            const remaining = getRateLimitRemaining(`login:${clientIp}`, 5);
            console.warn(`Rate limit exceeded for IP: ${clientIp}`);
            throw new Error("Too many login attempts. Please try again later.");
          }

          const user = await prisma.adminUser.findUnique({
            where: { email },
          });

          if (!user) {
            return null;
          }

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (!passwordMatch) {
            return null;
          }

          // Validate password meets current policy
          const passwordValidation = validatePassword(password);
          if (!passwordValidation.valid) {
            console.warn(`User ${email} password does not meet current policy`);
            throw new Error("Password does not meet security requirements. Please contact administrator.");
          }

          return {
            id: user.id,
            email: user.email,
            role: user.role,
          };
        } catch (error) {
          console.error("Auth error:", error);
          throw error;
        }
      },
    }),
  ],
  pages: {
    signIn: "/en/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});

export { handler as default };

export function auth(req: any, res?: any) {
  return handler(req, res);
}
