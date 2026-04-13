import React from 'react'
import { render, screen } from '@testing-library/react'
import { ServiceCard } from '@/components/ui/Cards'
import { Cpu } from 'lucide-react'

describe('ServiceCard Component', () => {
  const mockProps = {
    icon: Cpu,
    title: 'ECM Repair',
    description: 'Expert ECM repair and programming services',
    href: '/en/services/ecm-repair',
  }

  it('should render service card with title', () => {
    render(<ServiceCard {...mockProps} />)
    expect(screen.getByText('ECM Repair')).toBeInTheDocument()
  })

  it('should render service description', () => {
    render(<ServiceCard {...mockProps} />)
    expect(screen.getByText('Expert ECM repair and programming services')).toBeInTheDocument()
  })

  it('should render learn more link', () => {
    render(<ServiceCard {...mockProps} />)
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('should have correct link href', () => {
    const { container } = render(<ServiceCard {...mockProps} />)
    const link = container.querySelector('a')
    expect(link).toHaveAttribute('href', '/en/services/ecm-repair')
  })

  it('should render with different href', () => {
    const customProps = {
      ...mockProps,
      href: '/en/services/hybrid-battery',
      title: 'Hybrid Battery',
    }
    const { container } = render(<ServiceCard {...customProps} />)
    const link = container.querySelector('a')
    expect(link).toHaveAttribute('href', '/en/services/hybrid-battery')
  })
})
