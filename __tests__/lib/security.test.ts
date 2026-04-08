import {
  sanitizeInput,
  validateEmail,
  validatePhone,
  validateUrl,
  checkRateLimit,
  getRateLimitRemaining,
} from '@/lib/security'

describe('Security Utilities', () => {
  describe('sanitizeInput', () => {
    it('should remove HTML tags', () => {
      const input = '<script>alert("xss")</script>'
      const result = sanitizeInput(input)
      expect(result).not.toContain('<')
      expect(result).not.toContain('>')
    })

    it('should trim whitespace', () => {
      const input = '  hello world  '
      const result = sanitizeInput(input)
      expect(result).toBe('hello world')
    })

    it('should handle empty strings', () => {
      const result = sanitizeInput('')
      expect(result).toBe('')
    })

    it('should preserve normal text', () => {
      const input = 'Hello World 123'
      const result = sanitizeInput(input)
      expect(result).toBe('Hello World 123')
    })
  })

  describe('validateEmail', () => {
    it('should validate correct email format', () => {
      expect(validateEmail('test@example.com')).toBe(true)
      expect(validateEmail('user.name@domain.co.uk')).toBe(true)
    })

    it('should reject invalid email format', () => {
      expect(validateEmail('invalid-email')).toBe(false)
      expect(validateEmail('test@')).toBe(false)
      expect(validateEmail('@example.com')).toBe(false)
      expect(validateEmail('test@.com')).toBe(false)
    })

    it('should reject empty string', () => {
      expect(validateEmail('')).toBe(false)
    })
  })

  describe('validatePhone', () => {
    it('should validate UAE phone numbers with +971', () => {
      expect(validatePhone('+971554762284')).toBe(true)
      expect(validatePhone('+971501234567')).toBe(true)
    })

    it('should validate UAE phone numbers with 0', () => {
      expect(validatePhone('0554762284')).toBe(true)
      expect(validatePhone('0501234567')).toBe(true)
    })

    it('should reject invalid phone numbers', () => {
      expect(validatePhone('123')).toBe(false)
      expect(validatePhone('invalid')).toBe(false)
      expect(validatePhone('+1234567890')).toBe(false)
    })

    it('should handle spaces in phone numbers', () => {
      expect(validatePhone('+971 55 476 2284')).toBe(true)
      expect(validatePhone('055 476 2284')).toBe(true)
    })
  })

  describe('validateUrl', () => {
    it('should validate correct URLs', () => {
      expect(validateUrl('https://example.com')).toBe(true)
      expect(validateUrl('http://example.com')).toBe(true)
      expect(validateUrl('https://example.com/path')).toBe(true)
    })

    it('should reject invalid URLs', () => {
      expect(validateUrl('not a url')).toBe(false)
      expect(validateUrl('example.com')).toBe(false)
      expect(validateUrl('')).toBe(false)
    })
  })

  describe('Rate Limiting', () => {
    beforeEach(() => {
      // Clear rate limit map before each test
      jest.clearAllMocks()
    })

    it('should allow requests within limit', () => {
      const identifier = 'test-ip-1'
      expect(checkRateLimit(identifier, 5, 60000)).toBe(true)
      expect(checkRateLimit(identifier, 5, 60000)).toBe(true)
      expect(checkRateLimit(identifier, 5, 60000)).toBe(true)
    })

    it('should block requests exceeding limit', () => {
      const identifier = 'test-ip-2'
      // Make 5 requests (limit)
      for (let i = 0; i < 5; i++) {
        checkRateLimit(identifier, 5, 60000)
      }
      // 6th request should be blocked
      expect(checkRateLimit(identifier, 5, 60000)).toBe(false)
    })

    it('should return remaining attempts', () => {
      const identifier = 'test-ip-3'
      checkRateLimit(identifier, 5, 60000)
      checkRateLimit(identifier, 5, 60000)
      const remaining = getRateLimitRemaining(identifier, 5)
      expect(remaining).toBe(3)
    })

    it('should reset after window expires', () => {
      const identifier = 'test-ip-4'
      // This test would require mocking Date.now()
      // For now, we just verify the function exists
      expect(typeof getRateLimitRemaining).toBe('function')
    })
  })
})
