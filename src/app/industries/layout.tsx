import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'Verex Fire Solutions delivers industry-specific fire safety compliance for strata managers, commercial property owners, and facility managers across Greater Sydney.',
}

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
