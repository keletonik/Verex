'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const divisions = [
  {
    title: 'AI Fire Detection & Predictive Analytics',
    slug: 'ai-fire-detection',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    description:
      'Machine learning models for fire signature classification, convolutional neural networks for video-based flame detection, and sensor fusion algorithms combining optical, thermal, and gas sensor data. Trained on 2M+ fire scenarios from controlled burn laboratories.',
    cta: 'Explore Our AI Research',
  },
  {
    title: 'Fire Panel Systems Engineering & Firmware R&D',
    slug: 'fire-panel-engineering',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
      </svg>
    ),
    description:
      'Custom firmware development for addressable fire indicator panels, AS 7240-compliant embedded systems, loop card architecture design, and real-time operating system development for next-generation fire controllers.',
    cta: 'Learn About Our Panel R&D',
  },
  {
    title: 'BMS & IoT Systems Integration Research',
    slug: 'bms-iot-integration',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    description:
      'BACnet/IP and Modbus TCP protocol stack development, IoT mesh sensor networks using LoRaWAN and Zigbee, cloud-based SCADA dashboards, and edge computing nodes for latency-critical fire detection responses.',
    cta: 'View Integration Research',
  },
  {
    title: 'Suppression System Engineering & R&D',
    slug: 'suppression-engineering',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    description:
      'Computational fluid dynamics modelling for suppression agent dispersion, novel suppression agents for lithium-ion battery thermal runaway, and hydraulic network analysis per AS 2118.',
    cta: 'Explore Suppression R&D',
  },
  {
    title: 'Computational Fire Engineering & Modelling',
    slug: 'computational-fire-engineering',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
    description:
      'Fire Dynamics Simulator (FDS) and PyroSim modelling, performance-based fire engineering solutions, egress modelling with Pathfinder, and structural fire analysis with thermal FEA coupling.',
    cta: 'Commission a Fire Model',
  },
  {
    title: 'EWIS Design & Acoustic Engineering',
    slug: 'ewis-engineering',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
    description:
      'AS 1670.4 compliant Emergency Warning & Intercommunication Systems, acoustic modelling for speech intelligibility, staged evacuation algorithm development, and audio DSP firmware engineering.',
    cta: 'Discuss EWIS Engineering',
  },
  {
    title: 'Cyber-Physical Security for Fire Infrastructure',
    slug: 'cyber-physical-security',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    description:
      'Network security architecture for IP-connected fire panels, BACnet Secure Connect protocol hardening, penetration testing methodologies, and zero-trust architecture for fire system command channels.',
    cta: 'Request a Security Assessment',
  },
  {
    title: 'Digital Twin Technology & Advanced Compliance',
    slug: 'digital-twin-compliance',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
    description:
      'Real-time digital twin representations of building fire systems, AR-assisted field inspection, automated AS 1851 compliance scheduling with ML-optimised routing, and BIM integration for fire system lifecycle management.',
    cta: 'Explore Digital Twin R&D',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-orange-400 font-semibold tracking-wide uppercase text-sm mb-4">
              Our Divisions
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Research &amp; Development Divisions
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto max-w-3xl text-lg text-navy-200 leading-relaxed">
              Verex Fire Solutions operates eight specialised R&amp;D divisions, each advancing the
              frontier of fire science, AI-driven detection, computational engineering, and
              cyber-physical security. We are a scientific research firm — not a maintenance
              company.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Divisions Grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Eight Disciplines. One Mission.
              </h2>
              <p className="text-navy-600 max-w-2xl mx-auto text-lg">
                Each division operates at the intersection of scientific research, advanced
                engineering, and real-world fire safety challenges.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {divisions.map((division, i) => (
              <ScrollReveal key={division.slug} delay={i * 0.05} direction="up">
                <div className="group relative flex flex-col h-full rounded-2xl border border-navy-100 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-orange-300">
                  {/* Icon */}
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition-colors group-hover:bg-orange-500 group-hover:text-white">
                    {division.icon}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-semibold text-navy-900 mb-3">
                    {division.title}
                  </h3>

                  {/* Description */}
                  <p className="text-navy-600 text-sm leading-relaxed mb-6 flex-1">
                    {division.description}
                  </p>

                  {/* CTA Link */}
                  <Link
                    href={`/services/${division.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                  >
                    {division.cta}
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Partner With Our Research Team
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              Whether you need computational fire modelling, AI detection research, or
              cyber-security assessment for critical fire infrastructure — our scientists
              and engineers are ready to collaborate.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 hover:shadow-orange-400/30"
            >
              Discuss a Research Partnership
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
