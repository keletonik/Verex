import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us — Our Story & Values',
  description:
    'Learn about Verex Fire Solutions — over 15 years protecting Sydney properties with expert fire safety testing, maintenance, and compliance services. Based in Breakfast Point, NSW.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
