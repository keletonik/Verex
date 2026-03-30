import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Insights & Resources',
  description:
    'Expert fire safety guidance, compliance tips, and industry updates from Verex Fire Solutions. Download free resources to help navigate fire safety regulations in Sydney.',
}

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
