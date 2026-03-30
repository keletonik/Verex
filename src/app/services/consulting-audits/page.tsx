'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Scope & Brief',
    description:
      'We define the audit scope — whether a single building, a portfolio, or a specific compliance concern — and establish the assessment criteria.',
  },
  {
    number: '02',
    title: 'On-Site Assessment',
    description:
      'Our consultants conduct a thorough on-site review of fire safety measures, documentation, management practices, and building conditions.',
  },
  {
    number: '03',
    title: 'Analysis & Report',
    description:
      'Findings are compiled into a clear, prioritised report with risk ratings, regulatory references, and actionable recommendations.',
  },
  {
    number: '04',
    title: 'Implementation Support',
    description:
      'We work with you to implement recommendations — from coordinating rectification works to advising on long-term compliance strategy.',
  },
  {
    number: '05',
    title: 'Ongoing Advisory',
    description:
      'For portfolio clients, we provide ongoing advisory support, regulatory updates, and periodic re-audits to maintain compliance posture.',
  },
]

const benefits = [
  {
    title: 'Identify Compliance Gaps',
    description:
      'Our audits uncover hidden non-compliance issues before they result in penalty notices, fire orders, or worse.',
  },
  {
    title: 'Risk-Based Prioritisation',
    description:
      'Findings are ranked by risk severity so you can allocate budget to the issues that matter most first.',
  },
  {
    title: 'Independent Expert Opinion',
    description:
      'An impartial assessment from experienced fire safety practitioners provides confidence to owners, managers, and committees.',
  },
  {
    title: 'Portfolio-Wide Insight',
    description:
      'For property portfolios, our consulting services provide a consolidated view of compliance status across all assets.',
  },
]

const faqs = [
  {
    question: 'What is the difference between an audit and an inspection?',
    answer:
      'An inspection tests whether individual fire safety systems are working correctly (e.g., under AS 1851). An audit takes a broader view — assessing overall compliance posture, documentation, management practices, and whether the building meets its regulatory obligations holistically. Audits often identify systemic issues that individual inspections would not uncover.',
  },
  {
    question: 'When should we commission a fire safety audit?',
    answer:
      'Common triggers include: acquiring a new property, receiving a fire safety order from council, preparing for an insurance renewal, responding to a change of use or renovation, or simply wanting independent assurance that your building is compliant. Regular audits (every 2-3 years) are recommended for complex or high-risk buildings.',
  },
  {
    question: 'Can you consult on proposed developments or renovations?',
    answer:
      'Yes. We provide fire safety consulting during the design and approval phase of new developments and major renovations. This includes reviewing fire engineering reports, advising on essential fire safety measures, and ensuring the proposed design will meet all applicable regulatory requirements.',
  },
]

export default function ConsultingAuditsPage() {
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
              Fire Safety Consulting &amp; Audits
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="max-w-2xl text-lg text-navy-200 leading-relaxed">
              Expert risk assessments, compliance gap analyses, and strategic fire safety
              consulting tailored to your property or portfolio.
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
                Independent Fire Safety Expertise
              </h2>
              <div className="space-y-4 text-navy-700 leading-relaxed">
                <p>
                  Fire safety compliance is more than maintaining systems and lodging paperwork. It
                  requires a clear understanding of the regulatory landscape, the specific obligations
                  attached to your building, and the risks that exist within your property.
                </p>
                <p>
                  Verex Fire Solutions provides independent consulting and audit services that give
                  building owners, strata committees, and facility managers a complete picture of
                  their fire safety compliance status. Our consultants bring deep regulatory knowledge
                  and practical field experience to every engagement.
                </p>
                <p>
                  Whether you need a one-off compliance audit, a risk assessment for an insurance
                  renewal, or ongoing advisory services for a property portfolio, we deliver clear,
                  actionable insights that help you manage risk and meet your obligations.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15} direction="right">
              <div className="rounded-2xl bg-navy-50 border border-navy-100 p-8">
                <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">
                  Consulting Services
                </h3>
                <ul className="space-y-3 text-navy-700 text-sm">
                  {[
                    'Fire safety compliance audits',
                    'Fire risk assessments',
                    'Fire Safety Schedule reviews',
                    'Due diligence reports for property transactions',
                    'Regulatory advisory and representation',
                    'Fire safety strategy for renovations',
                    'Portfolio compliance management',
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
                From Assessment to Action
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1}>
                <div className="relative">
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-cyan-200 -translate-x-4" />
                  )}
                  <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-navy-100 h-full">
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
              Know Where You Stand
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              An independent fire safety audit gives you the clarity to make informed decisions
              about your building&apos;s compliance and safety.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30"
            >
              Book a Fire Safety Audit
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
