import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive fire safety services from Verex Fire Solutions. AFSS compliance, AS 1851 testing, fire system installation, emergency repairs, consulting, passive fire protection, emergency planning, and training across Greater Sydney.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
