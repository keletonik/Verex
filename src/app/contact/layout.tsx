import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Verex Fire Solutions. Request a consultation for AFSS management, AS 1851 testing, fire system installation, and comprehensive fire safety services across Greater Sydney. 24/7 emergency service available.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
