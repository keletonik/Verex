import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Verex Fire Solutions | Fire Safety Testing & Maintenance | Sydney',
    template: '%s | Verex Fire Solutions',
  },
  description:
    'Verex Fire Solutions provides comprehensive fire safety testing, maintenance, AFSS, and compliance services across Sydney. Fully licensed, insured, and available 24/7. Based in Breakfast Point, NSW.',
  keywords:
    'fire safety, fire testing, fire maintenance, AFSS, annual fire safety statement, fire inspection, Sydney, Breakfast Point, NSW, fire compliance, emergency lighting, fire doors, hydrant testing',
  openGraph: {
    title: 'Verex Fire Solutions | Fire Safety Testing & Maintenance',
    description: 'Comprehensive fire safety services across Sydney. Testing, maintenance, AFSS, and 24/7 emergency support.',
    type: 'website',
    locale: 'en_AU',
    siteName: 'Verex Fire Solutions',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
