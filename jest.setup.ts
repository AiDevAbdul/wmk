import '@testing-library/jest-dom'

// Mock isomorphic-dompurify to avoid ESM issues
jest.mock('isomorphic-dompurify', () => ({
  sanitize: (input: string) => input.replace(/<[^>]*>/g, '').trim(),
}))

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    }
  },
  usePathname() {
    return '/en'
  },
  useSearchParams() {
    return new URLSearchParams()
  },
  useParams() {
    return { locale: 'en' }
  },
}))

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return props
  },
}))

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => children,
    button: ({ children, ...props }: any) => children,
    a: ({ children, ...props }: any) => children,
    span: ({ children, ...props }: any) => children,
    h1: ({ children, ...props }: any) => children,
    h2: ({ children, ...props }: any) => children,
    h3: ({ children, ...props }: any) => children,
    p: ({ children, ...props }: any) => children,
  },
  AnimatePresence: ({ children }: any) => children,
}))

// Suppress console errors in tests
const originalError = console.error
beforeAll(() => {
  console.error = (...args: any[]) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render')
    ) {
      return
    }
    originalError.call(console, ...args)
  }
})

afterAll(() => {
  console.error = originalError
})
