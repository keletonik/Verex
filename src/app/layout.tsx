import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Verex Fire Solutions | Advanced Fire Engineering, AI Research & R&D',
    template: '%s | Verex Fire Solutions',
  },
  description:
    'Pioneering the future of fire safety through AI-driven research, advanced fire engineering, computational fire dynamics, and next-generation detection systems. Sydney-based R&D leaders in fire science and technology.',
  keywords: [
    'fire engineering research',
    'AI fire detection',
    'fire dynamics simulation',
    'fire safety engineering',
    'computational fire modelling',
    'VESDA AI analytics',
    'fire panel software',
    'fire science R&D Sydney',
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
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
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
