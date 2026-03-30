import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Verex Fire Solutions. Discuss research partnerships, computational fire engineering, AI detection systems, and advanced fire safety R&D. Our scientists and engineers are ready to collaborate.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
