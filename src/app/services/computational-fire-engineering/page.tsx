'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const methodology = [
  {
    step: '01',
    title: 'Scenario Definition & Geometry Import',
    description:
      'Building geometry is imported from BIM models or CAD drawings, with fire scenarios defined based on occupancy type, fuel load density, ventilation conditions, and design fire curves per International Fire Engineering Guidelines.',
  },
  {
    step: '02',
    title: 'Zone Model Screening (CFAST)',
    description:
      'Rapid scenario screening using CFAST zone models to evaluate hundreds of fire scenario permutations and identify critical cases requiring detailed CFD analysis — dramatically reducing computational cost.',
  },
  {
    step: '03',
    title: 'FDS / PyroSim CFD Simulation',
    description:
      'Detailed Fire Dynamics Simulator (FDS) and PyroSim modelling of critical fire scenarios, resolving heat release rate, smoke layer development, visibility degradation, temperature fields, and toxic species concentrations.',
  },
  {
    step: '04',
    title: 'Egress Modelling & Tenability Analysis',
    description:
      'Agent-based egress simulations in Pathfinder coupled with tenability criteria — visibility (10m corridors, 5m small rooms), temperature (60 deg C), and fractional effective dose (FED) for toxic gas exposure.',
  },
  {
    step: '05',
    title: 'Structural Fire Analysis',
    description:
      'Thermal finite element analysis (FEA) coupled with mechanical stress models to evaluate structural member performance under fire exposure, informing fire resistance level (FRL) requirements and protection strategies.',
  },
]

const capabilities = [
  {
    title: 'FDS & PyroSim Modelling',
    description:
      'Large-eddy simulation CFD fire modelling with validated combustion, radiation, and smoke transport physics for complex building geometries.',
  },
  {
    title: 'Egress Simulation',
    description:
      'Agent-based evacuation modelling with behavioural algorithms accounting for pre-movement time distributions, wayfinding, and counter-flow effects.',
  },
  {
    title: 'Structural Fire Analysis',
    description:
      'Coupled thermal-mechanical FEA determining structural member temperatures, load redistribution, and critical failure times under design fire exposure.',
  },
  {
    title: 'Performance-Based Solutions',
    description:
      'Alternative fire engineering solutions that demonstrate compliance through analysis rather than deemed-to-satisfy prescriptive requirements, enabling architectural flexibility.',
  },
]

const standards = [
  'AS 1668.1 — The use of ventilation and airconditioning in buildings: fire and smoke control in buildings',
  'International Fire Engineering Guidelines (IFEG) — ABCB',
  'NCC / BCA — National Construction Code performance requirements',
  'NIST Special Publication 1019 — Fire Dynamics Simulator Technical Reference Guide',
  'BS 7974 — Application of fire safety engineering principles to the design of buildings',
  'ISO 13571 — Life-threatening components of fire',
  'EN 1991-1-2 — Eurocode 1: Actions on structures exposed to fire',
]

export default function ComputationalFireEngineeringPage() {
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
              Computational Fire Engineering &amp; Modelling
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto max-w-3xl text-lg text-navy-200 leading-relaxed">
              Fire Dynamics Simulator modelling, performance-based fire engineering,
              egress simulation, and structural fire analysis — quantifying fire safety
              through computational science.
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
                  The Computational Fire Engineering division applies the most rigorous
                  computational methods available to quantify fire behaviour, smoke propagation,
                  occupant egress, and structural response. Our primary simulation tools — Fire
                  Dynamics Simulator (FDS), PyroSim, CFAST, and Pathfinder — are complemented by
                  custom agent-based models and thermal finite element analysis codes.
                </p>
                <p>
                  Performance-based fire engineering solutions enable building designs that achieve
                  safety outcomes through quantified analysis rather than prescriptive
                  deemed-to-satisfy provisions. This approach is essential for architecturally
                  complex buildings, heritage structures, and high-rise developments where
                  prescriptive codes may be unnecessarily restrictive or technically inapplicable.
                </p>
                <p>
                  Tenability analysis forms a critical component of our work — modelling the
                  available safe egress time (ASET) versus required safe egress time (RSET) by
                  tracking visibility, temperature, and toxic gas concentrations against established
                  human tolerance thresholds. Structural fire analysis couples thermal FEA with
                  mechanical stress models to evaluate fire resistance level adequacy.
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
              Our computational fire engineering workflow from scenario definition through structural analysis.
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
              Core capabilities from our computational fire engineering programme.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.08} direction="up">
                <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm h-full hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3" />
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
              Codes, guidelines, and technical references underpinning our fire engineering analysis.
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
              Commission a Fire Model
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              Need FDS modelling, egress simulation, or a performance-based fire engineering
              solution? Our computational fire engineers are ready to assist.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 hover:shadow-orange-400/30"
            >
              Commission a Fire Model
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
