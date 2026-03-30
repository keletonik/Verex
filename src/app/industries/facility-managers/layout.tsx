import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fire Compliance for Facility Managers',
  description:
    'Intelligent fire safety for industrial sites and large facilities. Digital compliance portal, predictive maintenance, and AS 1851 programs for facility managers across Sydney.',
}

export default function FacilityManagersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
