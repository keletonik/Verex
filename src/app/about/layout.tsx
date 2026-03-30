import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Verex Fire Solutions — an R&D and scientific research firm advancing fire safety through AI, computational modelling, and next-generation engineering. Meet our research team of PhD-level fire engineers and AI specialists.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
