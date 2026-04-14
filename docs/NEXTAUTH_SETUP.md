# NextAuth v4 Setup & API Routes

## Configuration

**File:** `lib/auth.ts`

```typescript
export async function auth(req?: any, res?: any) {
  return await handler.auth(req, res);
}

export const { handlers, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Verify against database
      }
    })
  ],
  session: { strategy: "jwt" },
  callbacks: {
    jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    session({ session, token }) {
      session.user.role = token.role;
      return session;
    }
  }
});

export const { GET, POST } = handlers;
```

## API Route Pattern

**All admin API routes must pass request object to auth():**

```typescript
// app/api/admin/blog/route.ts
import { auth } from "@/lib/auth";

export async function GET(request: Request) {
  const session = await auth(request);
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  // Handle request
}

export async function POST(request: Request) {
  const session = await auth(request);
  if (!session) return Response.json({ error: "Unauthorized" }, { status: 401 });

  // Handle request
}
```

## Login Page

**File:** `app/[locale]/login/page.tsx` (NOT under `/admin` to bypass layout protection)

- Credentials form with email/password
- Error handling for invalid credentials
- Redirect to `/admin` on success
- Bilingual support via next-intl

## Admin Credentials (Seeded)

- Email: `admin@wmk.ae`
- Password: `WMK@Admin2024!`

## Session Access in Components

```typescript
import { auth } from "@/lib/auth";

export default async function AdminLayout() {
  const session = await auth();
  if (!session) redirect("/login");

  return <>{/* Protected content */}</>;
}
```

## Key Points

- NextAuth v4 uses default export pattern: `export { handler as default }`
- Route file requires named exports: `export const GET = handler; export const POST = handler;`
- JWT session strategy with role-based access control
- **API routes must pass request object**: `const session = await auth(request);`
- Credentials provider with bcryptjs password hashing
