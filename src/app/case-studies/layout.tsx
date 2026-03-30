import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Explore proven fire safety compliance results across Sydney. See how Verex Fire Solutions has helped residential strata, commercial high-rise, and industrial buildings achieve full compliance.',
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
