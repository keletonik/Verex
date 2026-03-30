'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const methodology = [
  {
    step: '01',
    title: 'Acoustic Environment Survey',
    description:
      'Detailed measurement of ambient noise levels, room acoustics (reverberation time, absorption coefficients), and spatial geometry to establish baseline conditions for speech intelligibility modelling.',
  },
  {
    step: '02',
    title: 'STI Prediction & Speaker Layout Design',
    description:
      'Computational acoustic modelling to predict Speech Transmission Index (STI) across all occupied spaces, optimising speaker type, placement, orientation, and power to achieve STI > 0.5 compliance per AS 1670.4.',
  },
  {
    step: '03',
    title: 'Staged Evacuation Algorithm Development',
    description:
      'Programming of staged evacuation sequences coordinated with fire panel cause-and-effect matrices, ensuring alert and evacuation tones are delivered to correct zones in the correct sequence and timing.',
  },
  {
    step: '04',
    title: 'Audio DSP Firmware Engineering',
    description:
      'Development of digital signal processing firmware for noise-cancelling emergency announcements, adaptive gain control, and real-time audio routing across warden intercom network topologies.',
  },
  {
    step: '05',
    title: 'Commissioning & STI Verification',
    description:
      'On-site STI measurement using STIPA test signals and calibrated analysers, verifying that installed systems meet or exceed the predicted speech intelligibility performance at every measurement location.',
  },
]

const capabilities = [
  {
    title: 'Acoustic Modelling',
    description:
      'Ray-tracing and image-source method acoustic simulations predicting speech intelligibility across complex architectural spaces with validated accuracy.',
  },
  {
    title: 'Staged Evacuation Logic',
    description:
      'Algorithm development for multi-phase evacuation sequences integrating with fire panel zones, smoke detection inputs, and manual warden override protocols.',
  },
  {
    title: 'Audio DSP Firmware',
    description:
      'Embedded digital signal processing for noise-cancelling announcements, adaptive equalisation, and multi-channel audio routing across distributed speaker networks.',
  },
  {
    title: 'Campus-Wide EWIS',
    description:
      'Multi-building EWIS networking solutions enabling coordinated emergency communication across entire campus, precinct, or high-rise complex installations.',
  },
]

const standards = [
  'AS 1670.4 — Fire detection, warning, control and intercom systems: sound systems and intercom systems for emergency purposes',
  'AS 7240.2 — Fire detection and alarm systems: control and indicating equipment',
  'AS 2220 — Emergency warning and intercommunication systems in buildings',
  'IEC 60268-16 — Sound system equipment: objective rating of speech intelligibility by STI',
  'NFPA 72 — National Fire Alarm and Signaling Code (Chapter 18: Notification Appliances)',
  'BS 5839-8 — Fire detection and fire alarm systems: voice alarm systems',
]

export default function EWISEngineeringPage() {
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
              EWIS Design &amp; Acoustic Engineering
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto max-w-3xl text-lg text-navy-200 leading-relaxed">
              Acoustic modelling for speech intelligibility, staged evacuation algorithm
              development, and audio DSP firmware engineering for AS 1670.4 compliant
              Emergency Warning &amp; Intercommunication Systems.
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
                  The EWIS Design &amp; Acoustic Engineering division develops Emergency Warning
                  and Intercommunication Systems that ensure clear, intelligible emergency
                  communication in the most acoustically challenging environments. Our research
                  spans computational acoustic modelling for Speech Transmission Index (STI)
                  prediction, achieving the AS 1670.4 requirement of STI &gt; 0.5 across all
                  occupied spaces.
                </p>
                <p>
                  Staged evacuation algorithm development is a core focus — programming the
                  complex sequencing logic that coordinates alert tones, evacuation signals,
                  and voice announcements across multi-zone buildings in precise synchronisation
                  with fire panel cause-and-effect matrices and warden intercom protocols.
                </p>
                <p>
                  Our audio DSP firmware team develops embedded signal processing solutions for
                  noise-cancelling emergency announcements, adaptive gain control in
                  high-ambient-noise environments, and real-time audio routing across warden
                  intercom network topologies. Multi-building campus-wide EWIS networking
                  enables coordinated emergency communication across entire precincts.
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
              From acoustic survey through commissioning and verification.
            </p>
          </ScrollReveal>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-orange-200 hidden md:block" />
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
              Core capabilities from our EWIS and acoustic engineering programme.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.08} direction="up">
                <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm h-full">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51" />
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
              Acoustic and fire safety standards guiding our EWIS engineering research.
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
              Discuss EWIS Engineering
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              Need acoustic modelling for speech intelligibility or staged evacuation
              system design? Our EWIS engineering team is ready to collaborate.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 hover:shadow-orange-400/30"
            >
              Discuss EWIS Engineering
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
