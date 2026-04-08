import React from 'react'
import { render, screen } from '@testing-library/react'
import { ServiceCard } from '@/components/ui/Cards'

describe('ServiceCard Component', () => {
  const mockService = {
    id: '1',
    name: 'ECM Repair',
    slug: 'ecm-repair',
    description: 'Expert ECM repair and programming services',
    icon: 'Cpu',
    features: ['Diagnostics', 'Programming', 'Testing'],
  }

  it('should render service card with title', () => {
    render(
      <ServiceCard
        service={mockService}
        locale="en"
      />
    )
    expect(screen.getByText('ECM Repair')).toBeInTheDocument()
  })

  it('should render service description', () => {
    render(
      <ServiceCard
        service={mockService}
        locale="en"
      />
    )
    expect(screen.getByText('Expert ECM repair and programming services')).toBeInTheDocument()
  })

  it('should render all features', () => {
    render(
      <ServiceCard
        service={mockService}
        locale="en"
      />
    )
    expect(screen.getByText('Diagnostics')).toBeInTheDocument()
    expect(screen.getByText('Programming')).toBeInTheDocument()
    expect(screen.getByText('Testing')).toBeInTheDocument()
  })

  it('should have correct link href', () => {
    const { container } = render(
      <ServiceCard
        service={mockService}
        locale="en"
      />
    )
    const link = container.querySelector('a')
    expect(link).toHaveAttribute('href', '/en/services/ecm-repair')
  })

  it('should render with Arabic locale', () => {
    const arabicService = {
      ...mockService,
      nameAr: 'إصلاح ECM',
    }
    render(
      <ServiceCard
        service={arabicService}
        locale="ar"
      />
    )
    expect(screen.getByText('ECM Repair')).toBeInTheDocument()
  })
})
