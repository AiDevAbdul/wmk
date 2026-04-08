import '@testing-library/jest-dom'

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
  default: (props) => {
    // eslint-disable-next-line jsx-a11y/alt-text
    return props
  },
}))

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => children,
    button: ({ children, ...props }) => children,
    a: ({ children, ...props }) => children,
    span: ({ children, ...props }) => children,
    h1: ({ children, ...props }) => children,
    h2: ({ children, ...props }) => children,
    h3: ({ children, ...props }) => children,
    p: ({ children, ...props }) => children,
  },
  AnimatePresence: ({ children }) => children,
}))

// Suppress console errors in tests
const originalError = console.error
beforeAll(() => {
  console.error = (...args) => {
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
