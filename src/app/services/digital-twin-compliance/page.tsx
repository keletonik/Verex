'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const methodology = [
  {
    step: '01',
    title: 'BIM Integration & Data Ingestion',
    description:
      'Building Information Models (BIM) are ingested and enriched with fire system asset data — panel locations, detector types, sprinkler coverage, cable routes — creating a comprehensive digital foundation for twin construction.',
  },
  {
    step: '02',
    title: 'Digital Twin Construction & Sensor Binding',
    description:
      'Real-time digital twin representations are built by binding live sensor telemetry from fire panels, IoT environmental sensors, and BMS data points to their corresponding digital model elements.',
  },
  {
    step: '03',
    title: 'Predictive Maintenance Modelling',
    description:
      'Machine learning models trained on sensor telemetry and historical failure data predict component degradation, enabling condition-based maintenance that preempts failures before they impact system availability.',
  },
  {
    step: '04',
    title: 'AR-Assisted Field Inspection',
    description:
      'Augmented reality overlays project fire system schematics, maintenance history, and compliance status onto field technician headsets during inspections, reducing human error and accelerating assessment cycles.',
  },
  {
    step: '05',
    title: 'Automated Compliance & Reporting',
    description:
      'ML-optimised technician routing for AS 1851 compliance scheduling, automated report generation from inspection data, and regulatory submission workflows that eliminate manual documentation bottlenecks.',
  },
]

const capabilities = [
  {
    title: 'Real-Time Digital Twins',
    description:
      'Live digital representations of building fire systems reflecting current sensor states, alarm conditions, and system health with sub-second synchronisation latency.',
  },
  {
    title: 'AR Field Inspection',
    description:
      'Augmented reality interfaces overlaying fire system schematics, maintenance records, and compliance data onto the physical environment during technician inspections.',
  },
  {
    title: 'Predictive Maintenance',
    description:
      'ML-driven failure prediction models using sensor telemetry time-series analysis and component lifecycle data to schedule maintenance before degradation causes faults.',
  },
  {
    title: 'Compliance Automation',
    description:
      'Automated AS 1851 scheduling, ML-optimised technician routing, digital report generation, and regulatory submission workflows eliminating manual compliance overhead.',
  },
]

const standards = [
  'AS 1851 — Routine service of fire protection systems and equipment',
  'ISO 19650 — Organization and digitization of information about buildings and civil engineering works using BIM',
  'IFC (Industry Foundation Classes) — buildingSMART International',
  'ISO 23247 — Digital twin framework for manufacturing',
  'NCC / BCA — National Construction Code maintenance provisions',
  'ASHRAE 223P — Designation and Classification of Refrigerants (BACnet for digital twins)',
  'ISO 55000 — Asset management',
]

export default function DigitalTwinCompliancePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-orange-400 font-semibold tracking-wide uppercase text-sm mb-4">
              R&amp;D Division
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Digital Twin Technology &amp; Advanced Compliance
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto max-w-3xl text-lg text-navy-200 leading-relaxed">
              Real-time digital twin representations, AR-assisted inspection, predictive
              maintenance modelling, and automated compliance workflows transforming
              fire system lifecycle management.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Research Overview
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="space-y-4 text-navy-600 text-lg leading-relaxed">
                <p>
                  The Digital Twin Technology division develops real-time virtual representations
                  of building fire systems that mirror the state of physical assets with
                  sub-second fidelity. By integrating live sensor telemetry from fire panels,
                  IoT environmental monitors, and BMS data feeds, our digital twins provide
                  unprecedented situational awareness for facility managers and emergency
                  responders.
                </p>
                <p>
                  Augmented reality (AR) assisted field inspection overlays fire system schematics,
                  maintenance history, and compliance status directly onto the physical environment
                  through technician headsets — dramatically reducing inspection time and human
                  error rates. BIM (Building Information Modelling) integration ensures the digital
                  twin remains synchronised with the as-built architectural model throughout the
                  building lifecycle.
                </p>
                <p>
                  Our compliance automation research applies machine learning to AS 1851 scheduling
                  optimisation, routing technicians efficiently across large property portfolios
                  while generating automated inspection reports and regulatory submissions. Predictive
                  maintenance models trained on sensor telemetry and component failure history
                  enable condition-based maintenance strategies that preempt system failures.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Technical Methodology */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-4 text-center">
              Technical Methodology
            </h2>
            <p className="text-navy-600 text-lg text-center max-w-2xl mx-auto mb-16">
              From BIM integration through automated compliance reporting.
            </p>
          </ScrollReveal>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-orange-300 via-orange-400 to-orange-200 hidden md:block" />
            <div className="space-y-12">
              {methodology.map((item, i) => (
                <ScrollReveal key={item.step} delay={i * 0.1} direction="left">
                  <div className="relative flex gap-6">
                    <div className="flex-shrink-0 relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-navy-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-navy-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Research Outcomes */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-4 text-center">
              Key Research Outcomes
            </h2>
            <p className="text-navy-600 text-lg text-center max-w-2xl mx-auto mb-16">
              Core capabilities from our digital twin and compliance research programme.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.08} direction="up">
                <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm h-full hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25" />
                    </svg>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-navy-900 mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed">{cap.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Standards Referenced */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-4 text-center">
              Standards &amp; Publications Referenced
            </h2>
            <p className="text-navy-600 text-lg text-center max-w-2xl mx-auto mb-12">
              BIM, asset management, and compliance standards underpinning our digital twin research.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="max-w-2xl mx-auto">
              <ul className="space-y-3">
                {standards.map((standard) => (
                  <li key={standard} className="flex items-start gap-3 text-navy-700">
                    <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                    </svg>
                    {standard}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Explore Digital Twin R&amp;D
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              Ready to transform fire system management with digital twin technology,
              predictive maintenance, or compliance automation? Connect with our team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 hover:shadow-orange-400/30"
            >
              Explore Digital Twin R&amp;D
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
