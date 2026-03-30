import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fire Compliance for Strata Managers',
  description:
    'Simplified fire safety compliance for strata managers across Sydney. AFSS management, AS 1851 testing, and a single point of contact for multi-unit residential buildings.',
}

export default function StrataManagersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
