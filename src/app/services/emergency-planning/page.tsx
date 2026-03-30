'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Building Survey',
    description:
      'We survey every floor and tenancy, documenting exits, assembly points, fire safety equipment locations, and building-specific hazards.',
  },
  {
    number: '02',
    title: 'Plan Development',
    description:
      'Evacuation diagrams and emergency procedure documents are drafted to AS 3745, tailored to your building\'s layout and occupancy profile.',
  },
  {
    number: '03',
    title: 'Review & Approval',
    description:
      'Draft plans are reviewed with the building owner or manager, refined as needed, and finalised for distribution and display.',
  },
  {
    number: '04',
    title: 'Installation & Training',
    description:
      'Diagrams are printed and installed at required locations throughout the building. Wardens and staff are briefed on emergency procedures.',
  },
]

const benefits = [
  {
    title: 'AS 3745 Compliant',
    description:
      'All evacuation plans and diagrams comply with AS 3745 (Planning for emergencies in facilities) and meet council and Fire & Rescue NSW expectations.',
  },
  {
    title: 'Clear & Legible Diagrams',
    description:
      'Professionally designed evacuation diagrams that occupants can understand at a glance — even under stress during an emergency.',
  },
  {
    title: 'Building-Specific Plans',
    description:
      'Every plan is tailored to your building, not a generic template. We account for your specific layout, exits, hazards, and occupancy.',
  },
  {
    title: 'Kept Up to Date',
    description:
      'When your building changes — new tenancies, renovations, or altered exits — we update diagrams and procedures to match.',
  },
]

const faqs = [
  {
    question: 'What is an evacuation diagram and where should it be displayed?',
    answer:
      'An evacuation diagram is a simplified floor plan showing escape routes, exits, fire safety equipment locations, and the assembly area. Under AS 3745, evacuation diagrams must be displayed in prominent locations visible to all occupants — typically near lifts, stairwells, entry points, and within each tenancy.',
  },
  {
    question: 'How often should emergency plans be reviewed?',
    answer:
      'Emergency plans should be reviewed at least annually, or whenever there is a significant change to the building such as a renovation, change of use, new tenancy, or altered exit pathways. Regular reviews ensure the plans remain accurate and effective.',
  },
  {
    question: 'Do you provide emergency procedure documents as well?',
    answer:
      'Yes. In addition to evacuation diagrams, we prepare comprehensive emergency procedure documents that cover fire, medical, bomb threat, gas leak, and other emergency scenarios. These documents define roles, responsibilities, and step-by-step procedures for wardens and occupants.',
  },
]

export default function EmergencyPlanningPage() {
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
              Emergency Planning &amp; Evacuation Diagrams
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="max-w-2xl text-lg text-navy-200 leading-relaxed">
              AS 3745-compliant evacuation plans, emergency procedure documents, and evacuation
              diagrams for every floor and tenancy.
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
                Prepared for Every Scenario
              </h2>
              <div className="space-y-4 text-navy-700 leading-relaxed">
                <p>
                  When an emergency strikes, the quality of your evacuation plan directly affects
                  how quickly and safely people can exit the building. A well-designed evacuation
                  diagram, displayed in the right location, can be the difference between an
                  orderly evacuation and confusion.
                </p>
                <p>
                  Verex Fire Solutions develops emergency plans and evacuation diagrams that comply
                  with AS 3745 (Planning for emergencies in facilities). Every plan is tailored to
                  your specific building — accounting for its layout, exit pathways, fire safety
                  equipment locations, and assembly areas.
                </p>
                <p>
                  Beyond the diagrams themselves, we prepare comprehensive emergency procedure
                  documents that define the roles and responsibilities of wardens, the actions
                  required for different emergency scenarios, and the communication protocols that
                  ensure a coordinated response.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15} direction="right">
              <div className="rounded-2xl bg-navy-50 border border-navy-100 p-8">
                <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">
                  What We Deliver
                </h3>
                <ul className="space-y-3 text-navy-700 text-sm">
                  {[
                    'Floor-by-floor evacuation diagrams',
                    'Tenancy-specific evacuation diagrams',
                    'Emergency procedure documents',
                    'Warden role and responsibility guides',
                    'Assembly area identification and signage',
                    'Diagram printing and installation',
                    'Annual review and update service',
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
                From Survey to Installation
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
              Ensure Your Building Is Evacuation-Ready
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              Compliant evacuation diagrams and emergency procedures protect your occupants
              and demonstrate your commitment to safety.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30"
            >
              Request Emergency Planning Services
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
