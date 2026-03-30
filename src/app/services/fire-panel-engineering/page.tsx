'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const methodology = [
  {
    step: '01',
    title: 'Requirements & Architecture Specification',
    description:
      'Detailed hardware and software requirements analysis for addressable fire indicator panels, including loop card density, network topology, and AS 7240 compliance mapping.',
  },
  {
    step: '02',
    title: 'Firmware & RTOS Development',
    description:
      'Real-time operating system kernel development with deterministic interrupt handling, ensuring fire panel responses meet the strict timing requirements of life-safety systems.',
  },
  {
    step: '03',
    title: 'SLC Signal Processing & Optimisation',
    description:
      'Signalling Line Circuit protocol development and optimisation to maximise addressable device counts while maintaining signal integrity and noise immunity across long cable runs.',
  },
  {
    step: '04',
    title: 'Cause-and-Effect Matrix Programming',
    description:
      'Complex multi-zone cause-and-effect matrix development for buildings with intricate fire compartmentation, staged evacuation, and HVAC interlock requirements.',
  },
  {
    step: '05',
    title: 'Integration Testing & Type Certification',
    description:
      'Exhaustive functional testing of panel firmware under simulated fault conditions, followed by third-party type certification to AS 7240 and AS 4428.',
  },
]

const capabilities = [
  {
    title: 'Custom Firmware Development',
    description:
      'Bespoke embedded firmware for addressable fire indicator panels with modular architecture supporting custom loop card configurations and protocol stacks.',
  },
  {
    title: 'Multi-Panel Networking',
    description:
      'Peer-to-peer, master/slave, and mesh topology networking solutions enabling campus-wide fire system coordination across hundreds of interconnected panels.',
  },
  {
    title: 'RTOS Fire Controllers',
    description:
      'Deterministic real-time operating systems designed for fire controllers with guaranteed worst-case execution times and failover redundancy.',
  },
  {
    title: 'Loop Card Architecture',
    description:
      'Signal processing hardware and firmware design for loop cards supporting multiple communication protocols and advanced device diagnostics.',
  },
]

const standards = [
  'AS 7240 — Fire detection and alarm systems',
  'AS 4428 — Fire detection, warning, control and intercom systems (control and indicating equipment)',
  'AS 1670.1 — Fire detection system design, installation and commissioning',
  'IEC 62368-1 — Audio/video, information and communication technology equipment safety',
  'EN 54-2 — Fire detection and fire alarm systems: control and indicating equipment',
  'NFPA 72 — National Fire Alarm and Signaling Code',
]

export default function FirePanelEngineeringPage() {
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
              Fire Panel Systems Engineering &amp; Firmware R&amp;D
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto max-w-3xl text-lg text-navy-200 leading-relaxed">
              Developing next-generation embedded systems, custom firmware, and real-time
              operating systems for addressable fire indicator panels and multi-panel
              network architectures.
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
                  The Fire Panel Systems Engineering division focuses on the fundamental hardware
                  and software architecture of fire indicator panels (FIPs) — the central nervous
                  system of any fire detection and alarm installation. Our research encompasses
                  custom firmware development for AS 7240-compliant addressable panels, loop card
                  architecture design with advanced signal processing, and cause-and-effect matrix
                  programming for complex multi-zone buildings.
                </p>
                <p>
                  We develop multi-panel networking solutions spanning peer-to-peer, master/slave,
                  and mesh topologies to enable seamless coordination across campus-wide fire system
                  deployments. Our SLC (Signalling Line Circuit) optimisation research pushes the
                  boundaries of addressable device density while maintaining robust noise immunity.
                </p>
                <p>
                  At the firmware level, we build real-time operating systems (RTOS) specifically
                  engineered for fire controllers, with deterministic scheduling guarantees that
                  ensure life-safety response times are never compromised — even under extreme
                  system load or partial hardware failure conditions.
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
              From architecture specification through type certification.
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
              Core capabilities developed through our fire panel engineering programme.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.08} direction="up">
                <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm h-full hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21" />
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
              Regulatory and technical standards underpinning our panel engineering research.
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
              Learn About Our Panel R&amp;D
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              Looking to develop custom fire panel firmware or need multi-panel networking
              solutions for complex installations? Connect with our embedded systems team.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 hover:shadow-orange-400/30"
            >
              Learn About Our Panel R&amp;D
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
