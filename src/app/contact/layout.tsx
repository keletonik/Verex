import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us — Free Quote & 24/7 Emergency Support',
  description:
    'Contact Verex Fire Solutions for a free fire safety quote. Based in Breakfast Point, NSW, servicing all of greater Sydney. Email info@verexfire.com.au. Available 24/7 for emergencies.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
