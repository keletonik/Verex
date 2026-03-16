import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Annual Fire Safety Statements (AFSS) — Complete Management',
  description:
    'Expert AFSS management for NSW building owners. From inspection to council lodgement, we handle every step of your Annual Fire Safety Statement compliance. EP&A Regulation 2021 compliant.',
}

export default function AFSSLayout({ children }: { children: React.ReactNode }) {
  return children
}
