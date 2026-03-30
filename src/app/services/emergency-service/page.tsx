'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Call Our Emergency Line',
    description:
      'Contact our 24/7 emergency line any time — day or night, weekends and public holidays included. A qualified technician responds immediately.',
  },
  {
    number: '02',
    title: 'Rapid Diagnosis',
    description:
      'Our technician diagnoses the fault, assesses the safety implications, and determines the fastest path to restoring protection.',
  },
  {
    number: '03',
    title: 'On-Site Rectification',
    description:
      'We carry common replacement parts and components, allowing most faults to be rectified during the first visit without lengthy procurement delays.',
  },
  {
    number: '04',
    title: 'Report & Follow-Up',
    description:
      'A detailed fault report is issued. If further work is required, it is scheduled and tracked through to completion.',
  },
]

const benefits = [
  {
    title: '24/7 Availability',
    description:
      'Fire systems do not fail on a schedule. Our emergency team is available around the clock, every day of the year.',
  },
  {
    title: 'Rapid Response Times',
    description:
      'We prioritise emergency call-outs to minimise the period your building is unprotected or non-compliant.',
  },
  {
    title: 'First-Visit Fix Rate',
    description:
      'Our technicians carry a comprehensive range of parts and components, resolving the majority of faults in a single visit.',
  },
  {
    title: 'Full Documentation',
    description:
      'Every emergency call-out is documented with fault details, rectification actions, and compliance status for your records.',
  },
]

const faqs = [
  {
    question: 'What constitutes a fire system emergency?',
    answer:
      'Any situation where a fire safety system is offline, in fault, or unable to perform its intended function. This includes fire alarm panel faults, sprinkler system leaks or impairments, failed emergency lighting, damaged fire doors preventing compartmentation, and any condition that leaves occupants or the building unprotected.',
  },
  {
    question: 'How quickly can you attend an emergency?',
    answer:
      'Response times depend on location and severity. For critical faults affecting life safety systems in the Greater Sydney area, we aim to have a technician on site within hours of the call. We triage every call to ensure the most urgent situations receive the fastest response.',
  },
  {
    question: 'Do you handle insurance-related repairs?',
    answer:
      'Yes. Following fire events, water damage, or other incidents, we work with building owners and their insurers to assess damage to fire safety systems, provide detailed scope and costing reports, and carry out the necessary repairs or replacements to restore full compliance.',
  },
]

export default function EmergencyServicePage() {
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
              Repairs &amp; 24/7 Emergency Service
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="max-w-2xl text-lg text-navy-200 leading-relaxed">
              Round-the-clock emergency response and fault rectification so your fire
              systems are never offline for long.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="mt-8 inline-flex items-center gap-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 px-6 py-4">
              <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="text-cyan-300 font-semibold">24/7 Emergency Line Available</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                When Fire Systems Fail, Every Minute Counts
              </h2>
              <div className="space-y-4 text-navy-700 leading-relaxed">
                <p>
                  A fire alarm panel in fault, a sprinkler head leaking, a fire door that will not
                  latch — these are not problems that can wait until Monday morning. Every hour a
                  fire safety system is offline represents a period of increased risk for occupants
                  and potential non-compliance for the building owner.
                </p>
                <p>
                  Verex Fire Solutions provides a dedicated 24/7 emergency repair service for
                  building owners, strata managers, and facility managers across Greater Sydney.
                  Our technicians are equipped to diagnose and rectify the most common fire system
                  faults in a single visit, restoring protection as quickly as possible.
                </p>
                <p>
                  For non-urgent repairs, we schedule work at a time that minimises disruption to
                  building operations. Either way, every repair is documented and reported so your
                  compliance records remain up to date.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15} direction="right">
              <div className="rounded-2xl bg-navy-50 border border-navy-100 p-8">
                <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">
                  Common Emergency Repairs
                </h3>
                <ul className="space-y-3 text-navy-700 text-sm">
                  {[
                    'Fire alarm panel fault and reset',
                    'Sprinkler head replacement and leak repair',
                    'Fire pump failure diagnosis and repair',
                    'Emergency and exit lighting restoration',
                    'Fire door hardware replacement',
                    'Smoke detector replacement',
                    'EWIS system fault rectification',
                    'Post-incident system restoration',
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
                Emergency Response in Four Steps
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
              Fire System Down? We Are Here to Help.
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              Do not leave your building unprotected. Our emergency technicians are standing
              by 24 hours a day, 7 days a week to restore your fire safety systems.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30"
            >
              Call for Emergency Service
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
