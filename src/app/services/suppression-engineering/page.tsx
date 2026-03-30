'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const methodology = [
  {
    step: '01',
    title: 'Hazard Characterisation & Agent Selection',
    description:
      'Detailed analysis of fire hazard profiles — fuel type, heat release rate, compartment geometry — to determine optimal suppression agent: FM-200 (HFC-227ea), Novec 1230, IG-541, or high-pressure water mist.',
  },
  {
    step: '02',
    title: 'CFD Modelling & Agent Dispersion Simulation',
    description:
      'Computational fluid dynamics simulations model suppression agent transport, mixing, and concentration distribution throughout protected enclosures, accounting for HVAC flows, obstructions, and leakage paths.',
  },
  {
    step: '03',
    title: 'Hydraulic Network Analysis',
    description:
      'Pipe network modelling, pump curve analysis, and hydraulic calculations per AS 2118 to ensure adequate flow rates, pressures, and response times across all sprinkler and deluge system branches.',
  },
  {
    step: '04',
    title: 'Prototype Testing & Validation',
    description:
      'Full-scale suppression agent discharge testing in controlled environments, validating CFD predictions against empirical concentration measurements and extinguishment effectiveness.',
  },
  {
    step: '05',
    title: 'Performance Optimisation & Documentation',
    description:
      'Iterative refinement of nozzle placement, agent quantity, and discharge timing based on test results, with comprehensive engineering documentation for regulatory submission.',
  },
]

const capabilities = [
  {
    title: 'CFD Agent Modelling',
    description:
      'High-fidelity computational fluid dynamics simulations for gaseous and water mist suppression agent dispersion, validated against full-scale test data.',
  },
  {
    title: 'Li-ion Thermal Runaway',
    description:
      'Novel suppression agent research for lithium-ion battery thermal runaway events, addressing the unique challenges of cascading cell failure in energy storage systems.',
  },
  {
    title: 'ESFR Sprinkler Design',
    description:
      'Early Suppression Fast Response sprinkler design optimisation for high-bay warehouse and distribution centre applications with challenging ceiling heights.',
  },
  {
    title: 'Water Mist Dynamics',
    description:
      'High-pressure water mist droplet dynamics research examining spray characterisation, evaporation rates, and flame cooling mechanisms for clean agent alternatives.',
  },
]

const standards = [
  'AS 2118 — Automatic fire sprinkler systems',
  'AS 4587 — Gaseous fire-extinguishing systems',
  'NFPA 13 — Standard for the Installation of Sprinkler Systems',
  'NFPA 2001 — Standard on Clean Agent Fire Extinguishing Systems',
  'FM Global Data Sheets — Property Loss Prevention',
  'ISO 14520 — Gaseous fire-extinguishing systems',
  'EN 12845 — Fixed firefighting systems: automatic sprinkler systems',
]

export default function SuppressionEngineeringPage() {
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
              Suppression System Engineering &amp; R&amp;D
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto max-w-3xl text-lg text-navy-200 leading-relaxed">
              Computational fluid dynamics modelling, novel suppression agent research, and
              hydraulic network optimisation for next-generation fire suppression systems.
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
                  The Suppression System Engineering division advances the science of fire
                  suppression through computational modelling, empirical testing, and novel agent
                  research. Our CFD (Computational Fluid Dynamics) capabilities model suppression
                  agent dispersion for FM-200 (HFC-227ea), Novec 1230, and IG-541 gaseous agents,
                  as well as high-pressure water mist droplet dynamics.
                </p>
                <p>
                  A critical research focus is the development of effective suppression strategies
                  for lithium-ion battery thermal runaway — a rapidly emerging hazard in data
                  centres, electric vehicle facilities, and grid-scale energy storage installations.
                  Conventional suppression approaches are often inadequate for cascading cell
                  failure events that generate extreme temperatures and toxic off-gassing.
                </p>
                <p>
                  Our hydraulic engineering team performs detailed network analysis and pump curve
                  modelling per AS 2118, optimising ESFR (Early Suppression Fast Response)
                  sprinkler designs for high-bay warehouses and pre-action deluge system response
                  times for mission-critical facilities.
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
              From hazard characterisation through performance optimisation.
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
              Core capabilities from our suppression engineering research programme.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.08} direction="up">
                <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm h-full hover:border-orange-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
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
              Design codes and standards governing our suppression engineering research.
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
              Explore Suppression R&amp;D
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              Need CFD modelling for suppression agent dispersion or research into novel
              agents for emerging hazards? Our suppression engineering team can help.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 hover:shadow-orange-400/30"
            >
              Explore Suppression R&amp;D
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
