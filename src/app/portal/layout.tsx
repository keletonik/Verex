import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Client Compliance Portal',
  description:
    'The Verex Client Compliance Portal gives building owners and managers 24/7 access to real-time compliance data, inspection reports, and fire safety documentation.',
}

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
