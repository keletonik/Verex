'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const divisions = [
  {
    number: '01',
    title: 'AI Fire Detection & Predictive Analytics',
    slug: 'ai-fire-detection',
    brief:
      'Machine learning models for fire signature classification, sensor fusion algorithms, and CNN-based video flame detection.',
  },
  {
    number: '02',
    title: 'Fire Panel Systems Engineering & Firmware R&D',
    slug: 'fire-panel-engineering',
    brief:
      'Custom firmware for addressable FIPs, AS 7240-compliant embedded systems, and RTOS development for next-gen controllers.',
  },
  {
    number: '03',
    title: 'BMS & IoT Systems Integration Research',
    slug: 'bms-iot-integration',
    brief:
      'BACnet/IP and Modbus TCP protocol stacks, LoRaWAN mesh sensor networks, and edge computing for latency-critical response.',
  },
  {
    number: '04',
    title: 'Suppression System Engineering & R&D',
    slug: 'suppression-engineering',
    brief:
      'CFD modelling for agent dispersion, novel Li-ion thermal runaway suppression, and hydraulic analysis per AS 2118.',
  },
  {
    number: '05',
    title: 'Computational Fire Engineering & Modelling',
    slug: 'computational-fire-engineering',
    brief:
      'FDS and PyroSim modelling, performance-based fire engineering, egress simulation, and structural thermal FEA coupling.',
  },
  {
    number: '06',
    title: 'EWIS Design & Acoustic Engineering',
    slug: 'ewis-engineering',
    brief:
      'AS 1670.4 compliant EWIS, acoustic modelling for speech intelligibility, and audio DSP firmware engineering.',
  },
  {
    number: '07',
    title: 'Cyber-Physical Security for Fire Infrastructure',
    slug: 'cyber-physical-security',
    brief:
      'Network security for IP-connected panels, BACnet Secure Connect hardening, and zero-trust architecture design.',
  },
  {
    number: '08',
    title: 'Digital Twin Technology & Advanced Compliance',
    slug: 'digital-twin-compliance',
    brief:
      'Real-time digital twins of building fire systems, AR-assisted inspection, and ML-optimised AS 1851 compliance scheduling.',
  },
]

const researchProgrammes = [
  {
    title: 'Stochastic Fire Growth Modelling Using Bayesian Neural Networks',
    status: 'Phase II',
    statusClass: 'phase-ii',
    description:
      'Probabilistic fire spread prediction combining Monte Carlo sampling with deep learning, applied to compartment fire dynamics under uncertain ventilation conditions. Our Bayesian neural network architecture quantifies epistemic uncertainty in heat release rate predictions, enabling probabilistic tenability envelopes that far surpass deterministic FDS outputs.',
  },
  {
    title: 'Autonomous Multi-Agent Suppression Orchestration',
    status: 'Proof of Concept',
    statusClass: 'trial',
    description:
      'Distributed AI systems where individual suppression nodes communicate via low-latency mesh networks to coordinate optimal suppression response without centralised control. Each node runs a lightweight reinforcement learning policy trained on thousands of FDS-simulated fire scenarios.',
  },
  {
    title: 'Quantum-Resistant Cryptography for Fire-Life-Safety Networks',
    status: 'Phase I',
    statusClass: 'active',
    description:
      'Post-quantum lattice-based encryption schemes for BACnet Secure Connect, protecting critical fire-life-safety infrastructure from future quantum computing threats. Implementing CRYSTALS-Kyber key encapsulation and CRYSTALS-Dilithium digital signatures within constrained embedded fire panel environments.',
  },
  {
    title: 'Neuromorphic Sensor Arrays for Sub-Second Fire Detection',
    status: 'Field Trial',
    statusClass: 'trial',
    description:
      'Spiking neural network hardware deployed on Intel Loihi 2 neuromorphic chips for microsecond-latency fire signature recognition in high-risk industrial environments. Event-driven computation eliminates the polling overhead of conventional detectors, achieving sub-millisecond classification at under 1 mW power draw.',
  },
  {
    title: 'Physics-Informed Neural Networks for Real-Time Structural Fire Response',
    status: 'Phase II',
    statusClass: 'phase-ii',
    description:
      'PINNs that embed Navier-Stokes and heat transfer PDEs directly into neural network loss functions, enabling real-time structural integrity prediction during active fire events. The model ingests live thermocouple and strain gauge telemetry to forecast steel yield and concrete spalling thresholds.',
  },
  {
    title: 'Federated Learning for Privacy-Preserving Fire Risk Intelligence',
    status: 'Proof of Concept',
    statusClass: 'trial',
    description:
      'Cross-organisational fire incident data sharing using federated ML that keeps raw data on-premise while aggregating encrypted model updates via secure aggregation protocols. Building owners and fire brigades contribute to a superior risk prediction model without exposing sensitive tenancy or incident data.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 noise-overlay text-white py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        {/* Grid lines decoration */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <p className="label-mono mb-6">
              <span className="text-white/40 mr-1">&gt;</span> research.divisions
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Research &amp; Development{' '}
              <span className="gradient-text">Divisions</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="max-w-3xl text-lg text-navy-300 leading-relaxed">
              Verex operates eight core R&amp;D programmes spanning AI-driven detection,
              computational fire engineering, cyber-physical security, and autonomous suppression.
              Each division advances the frontier of fire science with rigorous, peer-reviewed research.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="mt-8 flex items-center gap-3 text-sm font-mono text-navy-400">
              <span className="status-dot active" />
              <span>8 active divisions</span>
              <span className="text-navy-600 mx-2">|</span>
              <span>6 research programmes in progress</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Divisions Grid */}
      <section className="bg-navy-950 py-20 lg:py-28 noise-overlay">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16">
              <p className="label-mono mb-4">
                <span className="text-white/40 mr-1">&gt;</span> ls --divisions
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Eight Disciplines. One Mission.
              </h2>
              <p className="text-navy-400 max-w-2xl text-lg">
                Each division operates at the intersection of scientific research, advanced
                engineering, and real-world fire safety challenges.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {divisions.map((division, i) => (
              <ScrollReveal key={division.slug} delay={i * 0.05} direction="up">
                <Link
                  href={`/services/${division.slug}`}
                  className="group relative flex flex-col h-full border-l-2 border-orange-500/40 bg-white/[0.02] backdrop-blur-sm rounded-r-xl p-6 transition-all duration-500 hover:bg-white/[0.05] hover:border-orange-500 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.15)] hover:-translate-y-0.5"
                >
                  {/* Division number */}
                  <span className="font-mono text-xs text-navy-500 mb-3 tracking-wider">
                    {division.number}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading text-base font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {division.title}
                  </h3>

                  {/* Brief description */}
                  <p className="text-navy-400 text-sm leading-relaxed mb-5 flex-1">
                    {division.brief}
                  </p>

                  {/* Explore link */}
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-orange-400/70 group-hover:text-orange-400 transition-colors duration-300">
                    Explore
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Active Research Programmes */}
      <section className="bg-navy-900 py-20 lg:py-28 noise-overlay border-t border-white/5">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16">
              <p className="label-mono mb-4">
                <span className="text-white/40 mr-1">&gt;</span> cat active_programmes.log
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Active Research Programmes
              </h2>
              <p className="text-navy-400 max-w-2xl text-lg">
                Our laboratories are currently advancing these frontier research initiatives,
                spanning probabilistic modelling, neuromorphic hardware, autonomous systems,
                and privacy-preserving machine learning.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {researchProgrammes.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.05} direction="up">
                <div className="group glass-card flex flex-col h-full p-6">
                  {/* Status row */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`status-dot ${project.statusClass}`} />
                    <span className="tech-badge">
                      {project.status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-base font-semibold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-navy-400 text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative bg-navy-950 py-20 lg:py-24 noise-overlay border-t border-white/5">
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="label-mono mb-6">
              <span className="text-white/40 mr-1">&gt;</span> init --collaboration
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              Collaborate With Our Research Team
            </h2>
            <p className="text-navy-400 text-lg mb-10 max-w-2xl mx-auto">
              Whether you need computational fire modelling, AI detection research, or
              cyber-security assessment for critical fire infrastructure — our scientists
              and engineers are ready to collaborate.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:bg-orange-400 hover:shadow-orange-400/25 hover:-translate-y-0.5"
            >
              Initiate Research Partnership
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
