'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const industries = [
  {
    title: 'Strata Managers',
    slug: 'strata-managers',
    description:
      'Simplified compliance coordination, AFSS management, and a single point of contact for multi-unit residential buildings.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    cta: 'Learn More',
  },
  {
    title: 'Commercial Property',
    slug: 'commercial-property',
    description:
      'Comprehensive compliance management and proactive maintenance for offices, retail centres, and mixed-use developments.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    cta: 'Learn More',
  },
  {
    title: 'Facility Managers',
    slug: 'facility-managers',
    description:
      'Intelligent fire safety for industrial sites and large facilities, with digital portal access and predictive maintenance.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.18.964-5.627L2.636 8.422l5.654-.822L11.42 2.5l2.53 5.1 5.654.822L15.24 12.723l.964 5.627zM12 6v6l4 2" />
      </svg>
    ),
    cta: 'Learn More',
  },
]

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-orange-400 font-semibold tracking-wide uppercase text-sm mb-4">
              Industries We Serve
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Solutions Tailored to Your Industry
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto max-w-2xl text-lg text-navy-200 leading-relaxed">
              Every building type brings unique fire safety challenges. Verex Fire
              Solutions delivers industry-specific expertise so you receive exactly
              the compliance support your portfolio demands.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            {industries.map((industry, i) => (
              <ScrollReveal key={industry.slug} delay={i * 0.1} direction="up">
                <Link href={`/industries/${industry.slug}`} className="block group">
                  <div className="relative flex flex-col h-full rounded-2xl border border-navy-100 bg-white p-10 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-orange-300 hover:-translate-y-1">
                    {/* Icon */}
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                      {industry.icon}
                    </div>

                    {/* Title */}
                    <h2 className="font-heading text-2xl font-semibold text-navy-900 mb-4">
                      {industry.title}
                    </h2>

                    {/* Description */}
                    <p className="text-navy-600 leading-relaxed mb-8 flex-1">
                      {industry.description}
                    </p>

                    {/* CTA */}
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 group-hover:text-orange-700 transition-colors">
                      {industry.cta}
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              Speak with one of our compliance specialists. We will assess your
              requirements and recommend a tailored fire safety program for your
              building or portfolio.
            </p>
            <a
              href="tel:0405605196"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 hover:shadow-orange-400/30"
            >
              Call 0405 605 196
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
