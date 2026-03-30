import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Verex Fire Solutions — Sydney\'s trusted fire safety compliance partner. Meet our FPAA-accredited team of engineers and compliance specialists serving Greater Sydney from Breakfast Point, NSW.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
