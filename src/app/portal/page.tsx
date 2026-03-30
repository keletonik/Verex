'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const portalFeatures = [
  {
    title: 'Real-Time Compliance Dashboard',
    description:
      'Monitor the compliance status of every fire safety measure across your building or portfolio in real time.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    title: 'Digital Asset Register',
    description:
      'A complete inventory of every fire safety asset in your building, with maintenance history and lifecycle data.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
  {
    title: 'Reports & Certificates',
    description:
      'Download inspection reports, compliance certificates, and AFSS documentation at any time from a centralised archive.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Defect Tracking & Resolution',
    description:
      'Track every defect from identification through resolution with full audit trails and photographic evidence.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.18.964-5.627L2.636 8.422l5.654-.822L11.42 2.5l2.53 5.1 5.654.822L15.24 12.723l.964 5.627z" />
      </svg>
    ),
  },
  {
    title: 'Notifications & Alerts',
    description:
      'Automated reminders for upcoming inspections, AFSS deadlines, and defect resolution milestones.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
  },
  {
    title: 'Direct Messaging',
    description:
      'Communicate directly with your dedicated Verex compliance manager through the portal for fast issue resolution.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
  },
]

export default function PortalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-orange-400 font-semibold tracking-wide uppercase text-sm mb-4">
              Client Portal
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Your Compliance, Always Visible.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto max-w-2xl text-lg text-navy-200 leading-relaxed mb-10">
              The Verex Client Compliance Portal gives building owners and managers
              24/7 access to real-time compliance data, inspection reports, and
              fire safety documentation from any device.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 hover:shadow-orange-400/30"
              >
                Request Portal Access
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                Contact Our Team
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-orange-600 font-semibold tracking-wide uppercase text-sm mb-3">
                Portal Features
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Everything You Need, In One Place
              </h2>
              <p className="mx-auto max-w-2xl text-navy-600 text-lg leading-relaxed">
                No more chasing paperwork or waiting for phone calls. The Verex portal puts
                complete compliance visibility at your fingertips.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {portalFeatures.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.08} direction="up">
                <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm h-full hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-navy-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Get Started With the Client Portal
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              Portal access is included for all Verex compliance clients. Contact us
              to set up your account or learn more about our services.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 hover:shadow-orange-400/30"
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
