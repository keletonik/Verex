import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fire Safety Resources — Guides, Articles & Downloads',
  description:
    'Expert fire safety guides, regulatory updates, compliance checklists, and practical resources for Sydney building owners and property managers. Stay informed on AFSS, AS 1851, and more.',
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children
}
