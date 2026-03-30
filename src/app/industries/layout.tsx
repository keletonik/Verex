import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industry Applications',
  description:
    'Verex Fire Solutions applies advanced fire engineering research, AI detection systems, and computational modelling to solve fire safety challenges across commercial, residential, and industrial sectors.',
}

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
