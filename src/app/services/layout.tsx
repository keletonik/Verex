import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research & Development Divisions',
  description:
    'Verex Fire Solutions R&D divisions: AI fire detection, fire panel engineering, BMS & IoT integration, suppression engineering, computational fire engineering, EWIS design, cyber-physical security, and digital twin technology.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
