'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const painPoints = [
  {
    title: 'Sprawling Asset Registers',
    description:
      'Large sites with hundreds of fire safety assets across multiple buildings make manual tracking impractical and error-prone.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>
    ),
  },
  {
    title: 'Operational Downtime Risk',
    description:
      'Fire system failures in industrial environments can halt production, trigger insurance issues, and compromise worker safety.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: 'Multi-Standard Compliance',
    description:
      'Industrial and large-format facilities often fall under overlapping regulatory frameworks, from BCA to WHS to industry-specific codes.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    title: 'Ageing Infrastructure',
    description:
      'Older fire systems require specialist assessment to determine whether repair, upgrade, or replacement delivers the best long-term value.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.18.964-5.627L2.636 8.422l5.654-.822L11.42 2.5l2.53 5.1 5.654.822L15.24 12.723l.964 5.627zM12 6v6l4 2" />
      </svg>
    ),
  },
]

const benefits = [
  {
    title: 'Digital Compliance Portal',
    description: 'Real-time dashboards showing asset status, upcoming inspections, compliance history, and downloadable certificates.',
  },
  {
    title: 'Predictive Maintenance',
    description: 'Data-driven insights identify components approaching end-of-life so you can plan replacements before failures occur.',
  },
  {
    title: 'Extended Asset Life',
    description: 'Expert maintenance programs maximise the operational lifespan of fire safety infrastructure, reducing capital expenditure.',
  },
  {
    title: 'Integrated Reporting',
    description: 'Consolidated compliance reports across all buildings and systems, formatted for board-level review and audit readiness.',
  },
]

const services = [
  'Full-Site Fire Safety Audits',
  'AS 1851 Scheduled Maintenance Programs',
  'Fire System Design & Upgrades',
  'Digital Asset Register Management',
  'Emergency Response Planning',
  'Specialist Suppression System Servicing',
]

export default function FacilityManagersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-orange-400 font-semibold tracking-wide uppercase text-sm mb-4">
              For Facility Managers (Industrial &amp; Large Sites)
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Operational Excellence Through Intelligent Fire Safety
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto max-w-2xl text-lg text-navy-200 leading-relaxed mb-10">
              Technical expertise, digital visibility, and predictive maintenance
              capabilities that keep large-scale facilities compliant, operational,
              and future-ready.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <a
              href="tel:0405605196"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 hover:shadow-orange-400/30"
            >
              Schedule a Facility Assessment
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
                Large Sites Demand a Smarter Approach
              </h2>
              <p className="mx-auto max-w-2xl text-navy-600 text-lg leading-relaxed">
                Industrial and large-format facilities present fire safety challenges
                that standard service providers are not equipped to handle.
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
                  Intelligent Fire Safety for Complex Facilities
                </h2>
                <p className="text-navy-600 text-lg leading-relaxed mb-6">
                  Verex combines deep technical expertise with a digital-first
                  approach to fire safety management. Our compliance portal gives
                  facility managers real-time visibility into every asset, every
                  inspection, and every upcoming obligation across your entire site.
                </p>
                <p className="text-navy-600 text-lg leading-relaxed mb-6">
                  Predictive maintenance analytics flag components trending toward
                  failure, enabling planned replacements that avoid unscheduled
                  downtime. The result is longer asset life, lower total cost of
                  ownership, and uninterrupted operations.
                </p>
                <p className="text-navy-600 text-lg leading-relaxed">
                  From warehouses and manufacturing plants to data centres and
                  logistics hubs, we engineer compliance programs that match the
                  scale and complexity of your operation.
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
                Facility Fire Safety Services
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
              We collaborate with facility managers to design fire safety programs that
              match the scale and complexity of their operations. Let&apos;s explore what
              we can do for your site.
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
              Schedule a Facility Assessment
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              Let our team conduct a comprehensive review of your facility&apos;s
              fire safety systems and deliver a clear roadmap for optimised
              compliance and operational efficiency.
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
