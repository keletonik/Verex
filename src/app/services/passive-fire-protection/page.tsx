'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Building Survey',
    description:
      'We conduct a comprehensive survey of all passive fire protection elements — fire doors, penetration seals, fire walls, and compartmentation boundaries.',
  },
  {
    number: '02',
    title: 'Condition Assessment',
    description:
      'Each element is assessed against its required fire resistance level (FRL) and the relevant Australian Standard, with defects and deficiencies documented.',
  },
  {
    number: '03',
    title: 'Rectification & Installation',
    description:
      'Non-compliant elements are repaired, replaced, or newly installed using tested and certified products that meet the required FRL.',
  },
  {
    number: '04',
    title: 'Certification & Documentation',
    description:
      'All works are certified with compliance documentation, product data sheets, and photographic records for your building files.',
  },
]

const benefits = [
  {
    title: 'Contain Fire Spread',
    description:
      'Properly maintained passive fire protection limits fire and smoke spread between compartments, buying time for evacuation and firefighting.',
  },
  {
    title: 'Protect Escape Routes',
    description:
      'Fire doors, fire-rated walls, and smoke seals keep escape corridors and stairwells tenable during an emergency.',
  },
  {
    title: 'Certified Products',
    description:
      'We use only tested and certified fire stopping products, fire door hardware, and intumescent materials from reputable manufacturers.',
  },
  {
    title: 'Compliance Assurance',
    description:
      'Our work is documented and certified, providing the evidence you need for AFSS compliance and regulatory inspections.',
  },
]

const faqs = [
  {
    question: 'What is passive fire protection?',
    answer:
      'Passive fire protection refers to the built-in features of a building that resist the spread of fire and smoke without requiring activation or human intervention. This includes fire-rated walls and floors, fire doors, fire stopping around service penetrations, fire collars, intumescent seals, and compartmentation barriers. These elements work by containing fire within its area of origin for a specified period.',
  },
  {
    question: 'How often should fire doors be inspected?',
    answer:
      'Fire doors should be inspected as part of the building\'s routine fire safety maintenance program under AS 1851. Monthly checks should confirm doors are closing and latching correctly and that seals are intact. A more thorough annual inspection should assess the door, frame, hardware, glazing, and seals against the door\'s fire resistance requirements.',
  },
  {
    question: 'What is fire stopping and why does it matter?',
    answer:
      'Fire stopping is the sealing of gaps and openings created when services (pipes, cables, ducts) pass through fire-rated walls and floors. Without proper fire stopping, these penetrations compromise the compartmentation of the building, allowing fire and smoke to spread to other areas far more quickly than the building was designed to permit.',
  },
]

export default function PassiveFireProtectionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium mb-8 hover:text-cyan-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              All Services
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl">
              Passive Fire Protection
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="max-w-2xl text-lg text-navy-200 leading-relaxed">
              Fire doors, fire stopping, penetration sealing, and compartmentation to contain
              fire spread and protect escape routes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                The Silent Line of Defence
              </h2>
              <div className="space-y-4 text-navy-700 leading-relaxed">
                <p>
                  While active fire systems like alarms and sprinklers respond to fire events,
                  passive fire protection is built into the very structure of your building. It
                  works silently, requiring no activation, to resist the spread of fire and smoke
                  between compartments.
                </p>
                <p>
                  Over time, passive fire protection elements degrade. Fire doors lose their seals,
                  service penetrations are made without proper fire stopping, and compartmentation
                  boundaries are compromised during renovations. These deficiencies are often
                  invisible until they are tested by a real fire — or flagged during an audit.
                </p>
                <p>
                  Verex Fire Solutions provides comprehensive passive fire protection services
                  including fire door surveys and remediation, penetration sealing, fire collar
                  installation, and compartmentation assessments. We ensure every passive element
                  in your building is performing to its required fire resistance level.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15} direction="right">
              <div className="rounded-2xl bg-navy-50 border border-navy-100 p-8">
                <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">
                  Passive Protection Scope
                </h3>
                <ul className="space-y-3 text-navy-700 text-sm">
                  {[
                    'Fire door inspection and remediation',
                    'Fire door installation and replacement',
                    'Penetration sealing (fire stopping)',
                    'Fire collar installation',
                    'Intumescent seal application',
                    'Compartmentation assessments',
                    'Fire-rated wall and ceiling repairs',
                    'Compliance certification for passive elements',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-cyan-600 font-semibold tracking-wide uppercase text-sm mb-3">
                Our Process
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900">
                Survey, Assess, Rectify, Certify
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1}>
                <div className="relative">
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-cyan-200 -translate-x-4" />
                  )}
                  <div className="relative bg-white rounded-2xl p-8 shadow-sm border border-navy-100 h-full">
                    <span className="text-4xl font-bold text-cyan-500/20 font-serif">
                      {step.number}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-navy-900 mt-2 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-navy-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-cyan-600 font-semibold tracking-wide uppercase text-sm mb-3">
                Why Verex
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900">
                Key Benefits
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 0.08}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-navy-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 text-center mb-12">
              Common Questions
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-navy-100">
                  <h3 className="font-serif text-lg font-semibold text-navy-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-navy-600 leading-relaxed">{faq.answer}</p>
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Strengthen Your Building&apos;s Passive Defences
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              Compromised passive fire protection puts lives and compliance at risk. Let Verex
              assess, rectify, and certify every passive element in your building.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30"
            >
              Request a Passive Fire Assessment
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
