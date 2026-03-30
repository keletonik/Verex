import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fire Compliance for Commercial Property',
  description:
    'Comprehensive fire safety compliance management for commercial property owners and managers across Sydney. Proactive maintenance, AFSS lodgement, and digital compliance portal.',
}

export default function CommercialPropertyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
