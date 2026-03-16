import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Verex Fire Solutions | Fire Safety Testing & Maintenance | Sydney',
  description:
    'Verex Fire Solutions provides comprehensive fire safety testing, maintenance, AFSS, and compliance services across Sydney. Fully licensed, insured, and available 24/7. Based in Breakfast Point, NSW.',
  keywords:
    'fire safety, fire testing, fire maintenance, AFSS, annual fire safety statement, fire inspection, Sydney, Breakfast Point, NSW, fire compliance, emergency lighting, fire doors, hydrant testing',
  openGraph: {
    title: 'Verex Fire Solutions | Fire Safety Testing & Maintenance',
    description: 'Comprehensive fire safety services across Sydney. Testing, maintenance, AFSS, and 24/7 emergency support.',
    type: 'website',
    locale: 'en_AU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
