'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Schedule & Plan',
    description:
      'We establish a routine service schedule aligned with your building\'s fire safety measures and AS 1851 frequency tables.',
  },
  {
    number: '02',
    title: 'On-Site Inspection',
    description:
      'Our accredited technicians inspect and test every fire safety system — from detection and alarm panels to hydrants, sprinklers, and extinguishers.',
  },
  {
    number: '03',
    title: 'Report & Rectify',
    description:
      'Detailed digital reports are issued for each visit. Any defects are flagged, prioritised, and rectified promptly to maintain compliance.',
  },
  {
    number: '04',
    title: 'Ongoing Maintenance',
    description:
      'Monthly, quarterly, semi-annual, and annual service frequencies are managed proactively so nothing is missed between visits.',
  },
]

const benefits = [
  {
    title: 'AS 1851-2012 Compliant',
    description:
      'Every inspection follows the routine service tables prescribed by the Australian Standard for maintenance of fire protection systems.',
  },
  {
    title: 'Ready for 2026 Mandate',
    description:
      'With the 2026 mandatory adoption of AS 1851 across NSW, buildings serviced by Verex are already fully aligned.',
  },
  {
    title: 'Digital Records',
    description:
      'All test results, defect logs, and rectification records are stored digitally for instant retrieval during audits or inspections.',
  },
  {
    title: 'Proactive Scheduling',
    description:
      'Our systems track every service frequency so inspections happen on time — without you needing to chase them up.',
  },
]

const faqs = [
  {
    question: 'What does AS 1851 cover?',
    answer:
      'AS 1851-2012 (Routine service of fire protection systems and equipment) prescribes the inspection, testing, and maintenance frequencies for fire detection and alarm systems, sprinkler systems, hydrant systems, fire extinguishers, fire doors, emergency lighting, exit signs, and other essential fire safety measures.',
  },
  {
    question: 'What is the 2026 mandatory adoption?',
    answer:
      'NSW is moving toward mandatory adoption of AS 1851 as the benchmark standard for routine servicing of fire protection systems across all building classes. Buildings that are not already maintaining systems to this standard will need to transition before the compliance deadline.',
  },
  {
    question: 'How often are inspections required?',
    answer:
      'AS 1851 defines multiple service frequencies depending on the system: monthly checks for some components, quarterly testing for others, and six-monthly or annual inspections for certain systems. Verex manages all frequencies under a single maintenance contract.',
  },
]

export default function InspectionTestingPage() {
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
              Inspection, Testing &amp; Maintenance
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="max-w-2xl text-lg text-navy-200 leading-relaxed">
              AS 1851-2012 compliant inspections and routine servicing that ensure every fire
              safety system in your building performs when it matters most.
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
                Systematic Fire System Servicing Under AS 1851
              </h2>
              <div className="space-y-4 text-navy-700 leading-relaxed">
                <p>
                  AS 1851-2012 is the Australian Standard that defines the routine service
                  requirements for fire protection systems and equipment. It specifies what needs
                  to be inspected, how it must be tested, and how frequently — covering everything
                  from smoke detectors and alarm panels to sprinkler systems, hydrants, fire
                  extinguishers, and emergency exit lighting.
                </p>
                <p>
                  Verex Fire Solutions delivers comprehensive AS 1851 maintenance programs tailored
                  to your building&apos;s specific fire safety measures. Our accredited technicians
                  follow every prescribed service table, ensuring each system is tested to the
                  correct standard at the correct interval.
                </p>
                <p>
                  With the 2026 mandatory adoption of AS 1851 across NSW approaching, now is the
                  time to ensure your building&apos;s maintenance program is fully aligned. Buildings
                  already serviced under our program will transition seamlessly.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15} direction="right">
              <div className="rounded-2xl bg-navy-50 border border-navy-100 p-8">
                <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">
                  Systems We Service
                </h3>
                <ul className="space-y-3 text-navy-700 text-sm">
                  {[
                    'Fire detection and alarm systems',
                    'Sprinkler and suppression systems',
                    'Hydrant and hose reel systems',
                    'Portable fire extinguishers',
                    'Emergency and exit lighting',
                    'Fire doors and smoke doors',
                    'Mechanical smoke management',
                    'Fire pump sets and water storage',
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
                How We Maintain Your Fire Systems
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
              Ensure Every System Performs When It Matters
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              Get ahead of the 2026 mandatory adoption. Schedule an AS 1851 inspection with
              Verex and bring your building&apos;s fire systems up to standard.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30"
            >
              Schedule an AS 1851 Inspection
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
