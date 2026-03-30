'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const methodology = [
  {
    step: '01',
    title: 'Network Architecture Assessment',
    description:
      'Comprehensive mapping of fire system network topology, identifying IP-connected panels, BACnet gateways, cloud monitoring endpoints, and all network boundaries between fire infrastructure and IT/OT networks.',
  },
  {
    step: '02',
    title: 'Threat Modelling & Vulnerability Research',
    description:
      'Systematic threat modelling using STRIDE methodology applied to fire system attack surfaces, combined with vulnerability research on legacy fire panel communication protocols (e.g., unencrypted SLC, Modbus).',
  },
  {
    step: '03',
    title: 'Penetration Testing & Red Team Exercises',
    description:
      'Controlled penetration testing of fire system networks including protocol fuzzing, credential attacks, and man-in-the-middle scenarios — validating the security posture of both modern and legacy infrastructure.',
  },
  {
    step: '04',
    title: 'Zero-Trust Architecture Design',
    description:
      'Implementation of zero-trust security architecture for fire system command channels, including mutual TLS authentication, microsegmentation, and least-privilege access policies for all system interactions.',
  },
  {
    step: '05',
    title: 'Hardening & Continuous Monitoring',
    description:
      'Protocol hardening (BACnet Secure Connect), encrypted telemetry deployment, and continuous security monitoring with anomaly detection tuned for fire system operational patterns.',
  },
]

const capabilities = [
  {
    title: 'BACnet/SC Hardening',
    description:
      'BACnet Secure Connect protocol implementation providing TLS-encrypted, certificate-authenticated communication for IP-connected fire and building management systems.',
  },
  {
    title: 'Penetration Testing',
    description:
      'Specialised penetration testing methodologies designed for fire system networks, accounting for the unique safety constraints of testing life-safety critical infrastructure.',
  },
  {
    title: 'Zero-Trust Architecture',
    description:
      'Zero-trust security frameworks ensuring every fire system command is authenticated, authorised, and encrypted — eliminating implicit trust based on network location.',
  },
  {
    title: 'Legacy Protocol Research',
    description:
      'Vulnerability research on legacy fire panel communication protocols, developing mitigation strategies for systems that cannot be upgraded to modern secure alternatives.',
  },
]

const standards = [
  'NIST Cybersecurity Framework (CSF) v2.0',
  'IEC 62443 — Industrial Communication Networks: Network and System Security',
  'ASHRAE/BACnet Addendum BJ — BACnet Secure Connect (BACnet/SC)',
  'NIST SP 800-82 — Guide to Operational Technology (OT) Security',
  'ISO 27001 — Information Security Management Systems',
  'CISA — Cross-Sector Cybersecurity Performance Goals (CPGs)',
  'AS ISO/IEC 27002 — Code of practice for information security controls',
]

export default function CyberPhysicalSecurityPage() {
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
              Cyber-Physical Security for Fire Infrastructure
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto max-w-3xl text-lg text-navy-200 leading-relaxed">
              Network security architecture, protocol hardening, penetration testing, and
              zero-trust frameworks for protecting IP-connected fire systems against
              cyber threats targeting critical infrastructure.
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
                  The Cyber-Physical Security division addresses the growing convergence of IT
                  and OT (Operational Technology) security risks in modern fire infrastructure.
                  As fire panels become IP-connected, integrated with BMS platforms, and monitored
                  via cloud services, the attack surface for critical life-safety systems expands
                  dramatically.
                </p>
                <p>
                  Our research covers network security architecture for IP-connected fire panels,
                  protocol hardening through BACnet Secure Connect (BACnet/SC), and specialised
                  penetration testing methodologies designed for fire system networks. We develop
                  zero-trust architecture frameworks that ensure every command to fire system
                  infrastructure is authenticated, authorised, and encrypted.
                </p>
                <p>
                  Legacy fire panel communication protocols present particular challenges — many
                  deployed systems use unencrypted serial protocols designed decades before
                  cybersecurity was a concern. Our vulnerability research identifies exploitable
                  weaknesses in these protocols and develops practical mitigation strategies,
                  including encrypted telemetry overlays for cloud-connected fire monitoring.
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
              Our security assessment pipeline from network mapping through continuous monitoring.
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
              Core capabilities from our cyber-physical security research programme.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.08} direction="up">
                <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm h-full">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
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
              Cybersecurity frameworks and standards governing our fire infrastructure security research.
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
              Request a Security Assessment
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              Concerned about the cybersecurity posture of your fire infrastructure? Our
              security research team can assess, test, and harden your systems.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:bg-orange-400 hover:shadow-orange-400/30"
            >
              Request a Security Assessment
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
