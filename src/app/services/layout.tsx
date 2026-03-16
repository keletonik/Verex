import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fire Safety Services — Inspections, Maintenance & AFSS',
  description:
    'Comprehensive fire safety services including AS 1851 inspections, essential maintenance, AFSS management, emergency lighting, fire doors, hydrants, consulting, and passive fire protection across Sydney.',
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
