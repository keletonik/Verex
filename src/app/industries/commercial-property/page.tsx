'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const painPoints = [
  {
    title: 'Regulatory Complexity',
    description:
      'Navigating the EP&A Regulation, BCA requirements, and Australian Standards across multiple property types demands specialist knowledge.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'Liability Exposure',
    description:
      'Building owners and managers bear personal responsibility for fire safety compliance. Non-compliance can result in prosecution and significant penalties.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: 'Tenant Safety Obligations',
    description:
      'Duty of care to tenants, visitors, and staff requires fire systems to be maintained to the highest standard at all times.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: 'Multi-Tenancy Coordination',
    description:
      'Large commercial buildings with multiple tenants require careful coordination to minimise disruption while maintaining full compliance.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
]

const benefits = [
  {
    title: 'Full Regulatory Coverage',
    description: 'Every obligation under the EP&A Regulation, BCA, and Australian Standards managed under one comprehensive program.',
  },
  {
    title: 'Liability Protection',
    description: 'Thorough documentation and proactive compliance management that stands up to regulatory scrutiny.',
  },
  {
    title: 'Minimal Disruption',
    description: 'Inspection schedules coordinated around tenant operations to protect business continuity.',
  },
  {
    title: 'Asset Value Preservation',
    description: 'Well-maintained fire systems protect your investment and support higher building valuations.',
  },
]

const services = [
  'AFSS Management & Council Lodgement',
  'AS 1851 Scheduled Inspections',
  'Fire System Upgrades & Retrofits',
  'Passive Fire Protection Surveys',
  'Emergency Evacuation Plans',
  'Fire Safety Consulting & Risk Assessments',
]

export default function CommercialPropertyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-orange-400 font-semibold tracking-wide uppercase text-sm mb-4">
              For Commercial Property Owners &amp; Managers
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Protect Your Investment. Ensure Total Compliance.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto max-w-2xl text-lg text-navy-200 leading-relaxed mb-10">
              Comprehensive fire safety compliance management that safeguards your
              commercial assets, protects your tenants, and keeps you ahead of
              every regulatory requirement.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <a
              href="tel:0405605196"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 hover:shadow-orange-400/30"
            >
              Request a Commercial Property Audit
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-orange-600 font-semibold tracking-wide uppercase text-sm mb-3">
                The Challenge
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Commercial Compliance is Complex
              </h2>
              <p className="mx-auto max-w-2xl text-navy-600 text-lg leading-relaxed">
                Commercial properties face a unique set of fire safety obligations
                that grow more demanding with building size and occupancy.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((point, i) => (
              <ScrollReveal key={point.title} delay={i * 0.08} direction="up">
                <div className="rounded-2xl border border-navy-100 bg-navy-50/50 p-8 h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-orange-400">
                    {point.icon}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-navy-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-orange-600 font-semibold tracking-wide uppercase text-sm mb-3">
                  The Verex Approach
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                  Comprehensive Compliance Management for Commercial Assets
                </h2>
                <p className="text-navy-600 text-lg leading-relaxed mb-6">
                  Verex Fire Solutions delivers a fully managed compliance program
                  tailored to the specific requirements of your commercial property.
                  We handle every fire safety measure &mdash; from scheduled AS 1851
                  inspections to annual AFSS preparation and lodgement.
                </p>
                <p className="text-navy-600 text-lg leading-relaxed">
                  Our proactive maintenance approach identifies and resolves issues
                  before they become compliance gaps or safety risks. Combined with
                  detailed digital reporting, you always know exactly where your
                  building stands.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit, i) => (
                  <div
                    key={benefit.title}
                    className="rounded-xl bg-white border border-navy-100 p-6 shadow-sm"
                  >
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white text-sm font-bold">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-heading text-base font-semibold text-navy-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Relevant Services */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-orange-600 font-semibold tracking-wide uppercase text-sm mb-3">
                What We Deliver
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Commercial Fire Safety Services
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {services.map((service, i) => (
              <ScrollReveal key={service} delay={i * 0.06} direction="up">
                <div className="flex items-center gap-3 rounded-xl bg-navy-50 p-5">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-navy-900 font-medium text-sm">{service}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Partner With Us
            </h2>
            <p className="text-navy-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              We help commercial property owners and managers build robust fire safety
              compliance programs tailored to their assets. Let&apos;s start a conversation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 hover:shadow-orange-400/30"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Request a Commercial Property Audit
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              Discover exactly where your commercial property stands on fire safety
              compliance and receive a clear, actionable roadmap to full protection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0405605196"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 hover:shadow-orange-400/30"
              >
                Call 0405 605 196
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                Request a Quote Online
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
