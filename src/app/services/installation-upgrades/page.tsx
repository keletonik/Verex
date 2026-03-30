'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Site Survey & Design',
    description:
      'We assess your building, review the fire engineering report and BCA requirements, and design a system solution tailored to your occupancy and risk profile.',
  },
  {
    number: '02',
    title: 'Supply & Installation',
    description:
      'Our licensed technicians install fire detection, alarm, suppression, and ancillary systems using quality-assured products from trusted manufacturers.',
  },
  {
    number: '03',
    title: 'Commissioning & Certification',
    description:
      'Every system is commissioned, tested against its design specification, and certified. We coordinate with certifiers to ensure seamless sign-off.',
  },
  {
    number: '04',
    title: 'Handover & Ongoing Support',
    description:
      'Full system documentation is handed over, staff are briefed on operation, and we transition seamlessly into an ongoing maintenance program.',
  },
]

const benefits = [
  {
    title: 'End-to-End Delivery',
    description:
      'From design through to commissioning, one team manages your entire installation — reducing delays and miscommunication.',
  },
  {
    title: 'Code-Compliant Systems',
    description:
      'Every installation meets the Building Code of Australia, relevant Australian Standards, and local council requirements.',
  },
  {
    title: 'Future-Proof Upgrades',
    description:
      'We recommend and install modern, addressable systems that integrate with building management platforms and simplify future maintenance.',
  },
  {
    title: 'Minimal Disruption',
    description:
      'Installations and upgrades are planned around building operations to minimise downtime and impact on tenants and occupants.',
  },
]

const faqs = [
  {
    question: 'When should fire systems be upgraded?',
    answer:
      'Fire systems should be upgraded when they reach end-of-life, when replacement parts are no longer available, when the building undergoes a change of use or renovation, or when an audit or inspection identifies that the existing system no longer meets current standards or the building\'s risk profile.',
  },
  {
    question: 'What types of fire systems do you install?',
    answer:
      'We install fire detection and alarm systems (conventional and addressable), automatic sprinkler systems, hydrant and hose reel systems, gaseous and chemical suppression systems, emergency warning and intercom systems (EWIS), and emergency and exit lighting.',
  },
  {
    question: 'Can you upgrade without a full system replacement?',
    answer:
      'In many cases, yes. We assess whether a partial upgrade — such as replacing the fire indicator panel, upgrading detectors, or adding zones — can bring the system into compliance without a complete rip-and-replace. We always recommend the most cost-effective path to compliance.',
  },
]

export default function InstallationUpgradesPage() {
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
              System Installation &amp; Upgrades
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="max-w-2xl text-lg text-navy-200 leading-relaxed">
              Design, supply, and installation of fire detection, suppression, and alarm
              systems — plus upgrades to ageing infrastructure that no longer meets current standards.
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
                Modern Fire Systems, Expertly Installed
              </h2>
              <div className="space-y-4 text-navy-700 leading-relaxed">
                <p>
                  Whether you are fitting out a new development, upgrading an obsolete system, or
                  responding to a compliance order, Verex delivers fire system installations that
                  meet every applicable code and standard.
                </p>
                <p>
                  Our team handles the full project lifecycle — from initial site survey and system
                  design through procurement, installation, commissioning, and certification. We work
                  with architects, builders, and certifiers to ensure the installation integrates
                  seamlessly with the broader construction or refurbishment program.
                </p>
                <p>
                  For existing buildings, we specialise in upgrading legacy systems to modern
                  addressable technology. This improves detection accuracy, simplifies maintenance,
                  and ensures the building meets current regulatory expectations.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15} direction="right">
              <div className="rounded-2xl bg-navy-50 border border-navy-100 p-8">
                <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">
                  Systems We Install
                </h3>
                <ul className="space-y-3 text-navy-700 text-sm">
                  {[
                    'Addressable fire detection and alarm systems',
                    'Automatic sprinkler systems (AS 2118)',
                    'Hydrant and hose reel installations',
                    'Emergency warning and intercom systems (EWIS)',
                    'Gaseous suppression systems',
                    'Emergency and exit lighting',
                    'Smoke management and pressurisation systems',
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
                From Design to Commissioning
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
              Upgrade Your Fire Safety Infrastructure
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              Whether it is a new installation or an upgrade to an ageing system, Verex delivers
              code-compliant fire solutions from design to commissioning.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30"
            >
              Get a System Assessment
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
