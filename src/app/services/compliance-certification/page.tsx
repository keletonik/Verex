'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Building Assessment',
    description:
      'We audit your building to identify every essential fire safety measure listed on your Fire Safety Schedule.',
  },
  {
    number: '02',
    title: 'Inspection & Testing',
    description:
      'Each measure is inspected, tested, and assessed against its performance standard — documenting condition and any defects.',
  },
  {
    number: '03',
    title: 'Defect Rectification',
    description:
      'Any non-compliant items are repaired or replaced to bring every system back to full operational standard.',
  },
  {
    number: '04',
    title: 'AFSS Preparation & Lodgement',
    description:
      'We prepare the Annual Fire Safety Statement, coordinate owner sign-off, and lodge it with the relevant authority and Fire & Rescue NSW.',
  },
]

const benefits = [
  {
    title: 'Avoid Penalty Notices',
    description:
      'Late or missing AFSS lodgements attract significant fines. We keep you ahead of every deadline.',
  },
  {
    title: 'Single Point of Accountability',
    description:
      'One provider manages the entire process — inspections, rectifications, documentation, and lodgement.',
  },
  {
    title: 'Full Audit Trail',
    description:
      'Every inspection, test result, and rectification is documented with photos and digital records for your files.',
  },
  {
    title: 'EP&A Regulation 2021 Aligned',
    description:
      'Our processes reflect the latest NSW Environmental Planning & Assessment Regulation requirements.',
  },
]

const faqs = [
  {
    question: 'What is an Annual Fire Safety Statement (AFSS)?',
    answer:
      'An AFSS is a statutory declaration by the building owner confirming that each essential fire safety measure in the building has been assessed by a competent fire safety practitioner and was found to be capable of performing to at least the standard required by the Fire Safety Schedule.',
  },
  {
    question: 'When must the AFSS be lodged?',
    answer:
      'The AFSS must be lodged with the local council and a copy forwarded to Fire & Rescue NSW within 12 months of the previous statement, or within 12 months of the initial fire safety certificate — whichever applies. Missing this deadline can result in penalty infringement notices.',
  },
  {
    question: 'How does the EP&A Regulation 2021 affect compliance?',
    answer:
      'The Environmental Planning & Assessment Regulation 2021 updated the framework governing fire safety certificates and statements in NSW. It clarified the responsibilities of building owners and competent fire safety practitioners, and reinforced the requirement for measures to be assessed against their listed performance standards.',
  },
]

export default function ComplianceCertificationPage() {
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
              Compliance &amp; Certification
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="max-w-2xl text-lg text-navy-200 leading-relaxed">
              Annual Fire Safety Statement (AFSS) management and full EP&amp;A Regulation 2021
              compliance — so your building stays certified, lawful, and protected.
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
                AFSS Management You Can Rely On
              </h2>
              <div className="space-y-4 text-navy-700 leading-relaxed">
                <p>
                  Every building in NSW with essential fire safety measures is required to lodge an
                  Annual Fire Safety Statement. This statutory obligation confirms that each measure
                  listed on the building&apos;s Fire Safety Schedule has been inspected, tested, and
                  assessed by a competent fire safety practitioner.
                </p>
                <p>
                  Verex Fire Solutions manages the entire AFSS lifecycle — from the initial building
                  assessment through to lodgement with council and Fire &amp; Rescue NSW. We ensure
                  every measure is evaluated against its performance standard as required under the
                  Environmental Planning &amp; Assessment Regulation 2021.
                </p>
                <p>
                  Our approach eliminates the administrative burden and compliance risk that building
                  owners, strata managers, and facility managers face each year. With Verex, your AFSS
                  is never late and never incomplete.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15} direction="right">
              <div className="rounded-2xl bg-navy-50 border border-navy-100 p-8">
                <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">
                  Key Regulations
                </h3>
                <ul className="space-y-3 text-navy-700 text-sm">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500 flex-shrink-0" />
                    <span>EP&amp;A Regulation 2021 — governs fire safety certificates and statements in NSW</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500 flex-shrink-0" />
                    <span>Fire Safety Schedule — lists every essential measure and its performance standard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500 flex-shrink-0" />
                    <span>Annual lodgement with local council and Fire &amp; Rescue NSW</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500 flex-shrink-0" />
                    <span>Building owner statutory responsibility for compliance</span>
                  </li>
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
                AFSS Compliance in Four Steps
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
              Stay Compliant, Stay Protected
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              Let Verex manage your AFSS obligations from start to finish. We handle the
              inspections, documentation, and lodgement so you can focus on your building.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30"
            >
              Request a Compliance Assessment
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
