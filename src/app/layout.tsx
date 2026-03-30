import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Verex Fire Solutions | Unwavering Fire Compliance for Sydney\'s Buildings',
    template: '%s | Verex Fire Solutions',
  },
  description:
    'Sydney\'s premier fire safety compliance partner. AFSS Management, AS 1851 Testing, Digital Compliance Portal, and comprehensive fire protection services for building owners, strata managers, and facility managers.',
  keywords: [
    'fire safety Sydney',
    'AFSS management',
    'AS 1851 compliance',
    'fire safety inspection',
    'strata fire compliance',
    'fire protection services',
    'building compliance NSW',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
