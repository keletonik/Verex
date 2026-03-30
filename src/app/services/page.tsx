'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const services = [
  {
    title: 'Compliance & Certification',
    slug: 'compliance-certification',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    description:
      'Annual Fire Safety Statement (AFSS) management and EP&A Regulation 2021 compliance to keep your building certified and lawful.',
    cta: 'Request a Compliance Assessment',
  },
  {
    title: 'Inspection, Testing & Maintenance',
    slug: 'inspection-testing',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.18.964-5.627L2.636 8.422l5.654-.822L11.42 2.5l2.53 5.1 5.654.822L15.24 12.723l.964 5.627z" />
      </svg>
    ),
    description:
      'Routine and scheduled inspections under AS 1851-2012 to ensure every fire safety measure in your building performs when it matters.',
    cta: 'Schedule an AS 1851 Inspection',
  },
  {
    title: 'System Installation & Upgrades',
    slug: 'installation-upgrades',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.18.964-5.627L2.636 8.422l5.654-.822L11.42 2.5l2.53 5.1 5.654.822L15.24 12.723l.964 5.627zM12 6v6l4 2" />
      </svg>
    ),
    description:
      'Design, supply, and installation of fire detection, suppression, and alarm systems — plus upgrades to ageing infrastructure.',
    cta: 'Get a System Assessment',
  },
  {
    title: 'Repairs & 24/7 Emergency Service',
    slug: 'emergency-service',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
      </svg>
    ),
    description:
      'Round-the-clock emergency response and fault rectification so your fire systems are never offline for long.',
    cta: 'Call for Emergency Service',
  },
  {
    title: 'Fire Safety Consulting & Audits',
    slug: 'consulting-audits',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    description:
      'Expert risk assessments, compliance gap analyses, and strategic fire safety consulting tailored to your property portfolio.',
    cta: 'Book a Fire Safety Audit',
  },
  {
    title: 'Passive Fire Protection',
    slug: 'passive-fire-protection',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    description:
      'Fire doors, fire stopping, penetration sealing, and compartmentation to contain fire spread and protect escape routes.',
    cta: 'Request a Passive Fire Assessment',
  },
  {
    title: 'Emergency Planning & Evacuation Diagrams',
    slug: 'emergency-planning',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    description:
      'AS 3745-compliant evacuation plans, emergency procedure documents, and evacuation diagrams for every floor and tenancy.',
    cta: 'Request Emergency Planning Services',
  },
  {
    title: 'Fire Safety Training',
    slug: 'fire-safety-training',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    description:
      'Warden training, general staff fire awareness sessions, and live evacuation drills that meet AS 3745 requirements.',
    cta: 'Book a Training Session',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-cyan-400 font-semibold tracking-wide uppercase text-sm mb-4">
              Our Services
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Comprehensive Fire Safety Services
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto max-w-2xl text-lg text-navy-200 leading-relaxed">
              From compliance certification through to emergency response, Verex
              Fire Solutions delivers every discipline of fire safety under one
              roof — so nothing falls through the cracks.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 0.05} direction="up">
                <div className="group relative flex flex-col h-full rounded-2xl border border-navy-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-cyan-300">
                  {/* Icon */}
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition-colors group-hover:bg-cyan-500 group-hover:text-white">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-xl font-semibold text-navy-900 mb-3">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-navy-600 text-sm leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>

                  {/* CTA Link */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors"
                  >
                    {service.cta}
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              Our compliance specialists will assess your building and recommend
              the right combination of services to keep you fully compliant and
              protected.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30"
            >
              Request a Free Consultation
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
