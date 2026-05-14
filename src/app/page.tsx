'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import FluidCanvas from '@/components/FluidCanvas'
import GridPattern from '@/components/GridPattern'
import GradientOrbs from '@/components/GradientOrbs'
import SplitHeading from '@/components/SplitHeading'
import MagneticLink from '@/components/MagneticLink'
import Marquee from '@/components/Marquee'
import PerspectiveCard from '@/components/PerspectiveCard'
import ScrollVelocity from '@/components/ScrollVelocity'

/* ─── Data ────────────────────────────────────────────────────────────── */

const divisions = [
  {
    name: 'AI Fire Detection',
    descriptor: 'CNN architectures for real-time fire signature classification',
    href: '/services/ai-fire-detection',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.4}>
        <circle cx="14" cy="14" r="4" />
        <path d="M14 2v4M14 22v4M2 14h4M22 14h4M5.1 5.1l2.83 2.83M20.07 20.07l2.83 2.83M5.1 22.9l2.83-2.83M20.07 7.93l2.83-2.83" />
        <circle cx="14" cy="14" r="10" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    name: 'Fire Panel Engineering',
    descriptor: 'AS 7240 firmware and addressable loop circuit design',
    href: '/services/fire-panel-engineering',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.4}>
        <rect x="3" y="4" width="22" height="20" rx="2" />
        <line x1="3" y1="10" x2="25" y2="10" />
        <circle cx="7" cy="7" r="1" fill="currentColor" />
        <circle cx="11" cy="7" r="1" fill="currentColor" />
        <rect x="6" y="13" width="16" height="2" rx="1" />
        <rect x="6" y="18" width="10" height="2" rx="1" />
      </svg>
    ),
  },
  {
    name: 'BMS & IoT',
    descriptor: 'BACnet/Modbus integration and cloud SCADA telemetry',
    href: '/services/bms-iot-integration',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.4}>
        <circle cx="14" cy="6" r="3" />
        <circle cx="6" cy="22" r="3" />
        <circle cx="22" cy="22" r="3" />
        <circle cx="22" cy="12" r="2" />
        <circle cx="6" cy="12" r="2" />
        <line x1="14" y1="9" x2="6" y2="19" />
        <line x1="14" y1="9" x2="22" y2="19" />
        <line x1="8" y1="12" x2="20" y2="12" />
      </svg>
    ),
  },
  {
    name: 'Suppression Engineering',
    descriptor: 'Multi-agent suppression orchestration and gas system design',
    href: '/services/suppression-engineering',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.4}>
        <path d="M14 3c0 6-8 10-8 17a8 8 0 0016 0c0-7-8-11-8-17z" />
        <path d="M14 12c0 3-4 5-4 8.5a4 4 0 008 0c0-3.5-4-5.5-4-8.5z" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    name: 'Computational Fire Engineering',
    descriptor: 'FDS/PyroSim CFD modelling and tenability analysis',
    href: '/services/computational-fire-engineering',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.4}>
        <rect x="2" y="4" width="24" height="18" rx="2" />
        <path d="M7 15l3-4 3 2 4-5 4 3" />
        <line x1="2" y1="22" x2="26" y2="22" />
        <line x1="6" y1="22" x2="6" y2="25" />
        <line x1="22" y1="22" x2="22" y2="25" />
      </svg>
    ),
  },
  {
    name: 'EWIS Engineering',
    descriptor: 'Emergency warning and speech intelligibility optimisation',
    href: '/services/ewis-engineering',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.4}>
        <path d="M6 12v4a8 8 0 0016 0v-4" />
        <rect x="10" y="3" width="8" height="14" rx="4" />
        <line x1="14" y1="24" x2="14" y2="27" />
        <line x1="10" y1="27" x2="18" y2="27" />
        <path d="M20 8c1.5 1 2.5 3 2.5 5" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    name: 'Cyber-Physical Security',
    descriptor: 'Protocol-level vulnerability analysis for fire networks',
    href: '/services/cyber-physical-security',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.4}>
        <path d="M14 2L4 7v6c0 7.2 4.3 13.2 10 15 5.7-1.8 10-7.8 10-15V7L14 2z" />
        <rect x="11" y="12" width="6" height="5" rx="1" />
        <circle cx="14" cy="10" r="2" />
        <line x1="14" y1="14" x2="14" y2="15.5" strokeWidth={2} />
      </svg>
    ),
  },
  {
    name: 'Digital Twin',
    descriptor: 'Real-time digital replicas of building fire infrastructure',
    href: '/services/digital-twin-compliance',
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth={1.4}>
        <path d="M4 8l10-5 10 5v2L14 15 4 10V8z" />
        <path d="M4 14l10 5 10-5" />
        <path d="M4 19l10 5 10-5" />
        <line x1="14" y1="15" x2="14" y2="25" strokeDasharray="2 2" />
      </svg>
    ),
  },
]

const activeResearch = [
  {
    title: 'PINNs for Structural Fire Response',
    description: 'Embedding Navier-Stokes and thermal PDEs directly into neural network loss functions for real-time structural integrity prediction during active fire events.',
    phase: 'Phase II',
    status: 'active' as const,
  },
  {
    title: 'Neuromorphic Detection on Intel Loihi 2',
    description: 'Spiking neural networks on neuromorphic hardware achieving sub-millisecond fire signature classification with 100x lower power consumption.',
    phase: 'Field Trial',
    status: 'active' as const,
  },
  {
    title: 'Federated Learning Fire Risk Models',
    description: 'Privacy-preserving ML across building portfolios using federated aggregation of fire incident and sensor telemetry data.',
    phase: 'Active',
    status: 'active' as const,
  },
  {
    title: 'Autonomous Multi-Agent Suppression',
    description: 'Distributed AI coordination of suppression nodes via mesh networks for optimal agent deployment without centralised control.',
    phase: 'Proof of Concept',
    status: 'amber' as const,
  },
]

const techStack = [
  'FDS',
  'TensorFlow / PyTorch',
  'BACnet / Modbus',
  'Federated ML / PySyft',
  'AS 7240 Firmware',
  'Intel Loihi 2',
]

const publications = [
  {
    title: 'CNN Architectures for Real-Time Fire Signature Classification',
    date: '5 March 2026',
    readTime: '12 min',
    slug: 'machine-learning-fire-detection',
  },
  {
    title: 'Thermal Runaway Propagation in Li-Ion Battery Storage',
    date: '14 February 2026',
    readTime: '12 min',
    slug: 'lithium-ion-thermal-runaway',
  },
  {
    title: 'BACnet Protocol Vulnerability Analysis in Networked FIPs',
    date: '28 January 2026',
    readTime: '10 min',
    slug: 'bacnet-fire-system-security',
  },
]

const differentiators = [
  {
    title: 'Published Research',
    description: 'Our work is peer-reviewed and published in leading fire engineering journals, contributing to the global body of fire science knowledge.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: 'Engineering Excellence',
    description: 'Our engineers hold advanced degrees in fire engineering, computational physics, and machine learning \u2014 backed by deep domain expertise.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
  {
    title: 'Industry Partnerships',
    description: 'We collaborate with university fire laboratories, standards bodies, and engineering firms to translate research into deployed systems.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0Zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0Z" />
      </svg>
    ),
  },
  {
    title: 'Standards Leadership',
    description: 'Active contributors to Australian Standards development (AS 7240, AS 1851, AS 1670.4), shaping the regulatory frameworks our systems must meet.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]

/* ─── Blinking cursor component ───────────────────────────────────────── */

function BlinkingCursor() {
  return (
    <motion.span
      className="inline-block w-[10px] h-[1.1em] bg-orange-400 ml-1 align-middle"
      animate={{ opacity: [1, 0] }}
      transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
    />
  )
}

/* ─── Page ─────────────────────────────────────────────────────────────── */

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] flex items-center overflow-hidden bg-navy-950 grain"
      >
        <div className="absolute inset-0">
          <FluidCanvas className="absolute inset-0 w-full h-full" density={1.2} />
          <GradientOrbs variant="default" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/30 via-navy-950/40 to-navy-950" />
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="layer-content container-max section-padding w-full pt-32 pb-20"
        >
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="label-mono mb-8"
            >
              <span className="text-orange-400">{'>'}</span>{' '}
              initialising fire.intelligence.systems_
              <BlinkingCursor />
            </motion.p>

            <SplitHeading
              text="We engineer the intelligence inside fire safety systems."
              as="h1"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight text-balance"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-lg sm:text-xl text-navy-300 font-sans max-w-2xl mt-10 mb-12 leading-relaxed"
            >
              Computational fire dynamics. Neuromorphic detection. Physics-informed
              neural networks. From first principles to deployed firmware.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticLink href="/services" className="btn-primary text-base">
                View Research Divisions
              </MagneticLink>
              <MagneticLink href="/insights" className="btn-secondary">
                Read Our Publications
              </MagneticLink>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl"
          >
            {[
              { label: '8 Research Divisions' },
              { label: 'FDS  |  PyTorch  |  BACnet' },
              { label: 'AS 7240  |  AS 1851  |  NCC' },
            ].map((card) => (
              <div
                key={card.label}
                className="glass-card px-6 py-5 text-center"
              >
                <span className="text-sm font-mono text-navy-200 tracking-wide">{card.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="layer-content absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-navy-300">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em]">Scroll</span>
            <motion.div
              className="h-10 w-px bg-gradient-to-b from-orange-400 to-transparent"
              animate={{ scaleY: [0.4, 1, 0.4], originY: 0 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── 1b. VELOCITY MARQUEE ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-950 py-10">
        <ScrollVelocity className="font-heading text-7xl font-bold tracking-tight text-stroke sm:text-8xl lg:text-9xl">
          {'  fire.dynamics  ·  ai.detection  ·  digital.twin  '}
        </ScrollVelocity>
      </section>

      {/* ── 2. RESEARCH DIVISIONS ────────────────────────────────────── */}
      <section className="py-32 bg-white">
        <div className="container-max section-padding">
          <ScrollReveal>
            <p className="font-mono text-sm text-orange-400 mb-3 tracking-wide">{`> research.divisions`}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-navy-900 mb-16 leading-tight">
              Where We Push Boundaries
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {divisions.map((div, i) => (
              <ScrollReveal key={div.name} delay={i * 0.06}>
                <Link href={div.href} className="group block h-full">
                  <div className="h-full bg-white border border-navy-100 rounded-xl p-6 transition-all duration-300 hover:border-orange-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-900/5 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-navy-50 text-navy-700 mb-5 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors duration-300">
                        {div.icon}
                      </div>
                      <h3 className="text-lg font-heading text-navy-900 mb-2">{div.name}</h3>
                      <p className="text-sm text-navy-500 font-sans leading-relaxed">{div.descriptor}</p>
                    </div>
                    <div className="mt-5 flex items-center text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. LIVE RESEARCH DASHBOARD ───────────────────────────────── */}
      <section className="py-32 bg-navy-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-orange-500/5 blur-3xl" />

        <div className="container-max section-padding relative z-10">
          <ScrollReveal>
            <p className="font-mono text-sm text-orange-400 mb-3 tracking-wide">{`> active.programmes`}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-6 leading-tight">
              Current Research
            </h2>
            <p className="text-navy-300 text-lg leading-relaxed max-w-2xl mb-16">
              Active programmes across our eight research divisions.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {activeResearch.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.1}>
                <div className="bg-white/[0.03] border border-white/10 border-l-2 border-l-orange-500 rounded-xl p-8 hover:bg-white/[0.06] transition-colors duration-300">
                  {/* Header row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2 h-2 rounded-full ${project.status === 'active' ? 'bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.6)]' : 'bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.6)]'}`}>
                        <motion.span
                          className={`block w-2 h-2 rounded-full ${project.status === 'active' ? 'bg-green-400' : 'bg-amber-400'}`}
                          animate={{ opacity: [1, 0.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        />
                      </span>
                      <span className="font-mono text-xs text-navy-400 uppercase tracking-wider">{project.phase}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-heading text-white mb-3">{project.title}</h3>
                  <p className="text-navy-300 font-sans leading-relaxed text-sm">{project.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TECHNOLOGY STACK ───────────────────────────────────────── */}
      <section className="py-32 bg-white relative overflow-hidden">
        <GridPattern className="opacity-40" />
        <div className="container-max section-padding relative z-10">
          <ScrollReveal>
            <p className="font-mono text-sm text-orange-400 mb-3 tracking-wide">{`> tech.stack`}</p>
            <h2 className="text-3xl sm:text-4xl font-heading text-navy-900 mb-16 leading-tight">
              Core Technologies
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech, i) => (
              <ScrollReveal key={tech} delay={i * 0.06}>
                <div className="flex items-center justify-center h-16 rounded-lg bg-navy-900 border border-navy-700 px-4 hover:border-orange-500/40 transition-colors duration-300">
                  <span className="font-mono text-sm text-navy-200 text-center leading-tight">{tech}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PUBLICATIONS PREVIEW ──────────────────────────────────── */}
      <section className="py-32 bg-navy-50/40 relative overflow-hidden">
        <GridPattern className="opacity-30" />
        <div className="container-max section-padding relative z-10">
          <ScrollReveal>
            <p className="font-mono text-sm text-orange-400 mb-3 tracking-wide">{`> recent.publications`}</p>
            <h2 className="text-3xl sm:text-4xl font-heading text-navy-900 mb-16 leading-tight">
              Latest Research
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {publications.map((pub, i) => (
              <ScrollReveal key={pub.slug} delay={i * 0.1}>
                <Link href={`/insights/${pub.slug}`} className="group block h-full">
                  <div className="h-full bg-white border border-navy-100 rounded-xl p-7 transition-all duration-300 hover:border-orange-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-900/5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-navy-400 font-mono mb-4">
                        <span>{pub.date}</span>
                        <span className="w-1 h-1 rounded-full bg-navy-300" />
                        <span>{pub.readTime}</span>
                      </div>
                      <h3 className="text-lg font-heading text-navy-900 mb-4 leading-snug group-hover:text-orange-600 transition-colors">
                        {pub.title}
                      </h3>
                    </div>
                    <span className="inline-flex items-center text-sm font-semibold text-orange-600 group-hover:text-orange-700 transition-colors">
                      Read Paper
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. WHY VEREX ──────────────────────────────────────────────── */}
      <section className="py-32 bg-white relative overflow-hidden">
        <GridPattern className="opacity-30" />
        <div className="container-max section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <p className="font-mono text-sm text-orange-400 mb-3 tracking-wide">{`> why.verex`}</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-navy-900 mb-6 leading-tight">
                Where Science Meets<br />Fire Engineering.
              </h2>
              <p className="text-navy-500 font-sans text-lg leading-relaxed max-w-lg">
                We are not a conventional fire safety firm. We are researchers, engineers, and scientists &mdash; purpose-built to develop the technologies and methodologies that advance fire safety globally.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-5">
              {differentiators.map((d, i) => (
                <ScrollReveal key={d.title} delay={i * 0.1} direction="right">
                  <div className="bg-white border border-navy-100 rounded-xl p-6 group hover:border-orange-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-navy-900/5 transition-all duration-300">
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-navy-50 text-navy-700 mb-5 group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors duration-300">
                      {d.icon}
                    </div>
                    <h3 className="text-base font-heading text-navy-900 mb-2">{d.title}</h3>
                    <p className="text-sm text-navy-500 font-sans leading-relaxed">{d.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FINAL CTA ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-900 py-32">
        <div className="absolute inset-0 opacity-40">
          <FluidCanvas className="absolute inset-0 w-full h-full" density={0.6} interactive={false} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-navy-900/40" />

        <div className="relative z-10 container-max section-padding text-center">
          <ScrollReveal>
            <p className="font-mono text-sm text-orange-400 mb-3 tracking-wide">{`> collaborate`}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-6 leading-tight max-w-3xl mx-auto">
              Build the Future of Fire Safety With Us
            </h2>
            <p className="text-navy-300 font-sans text-lg leading-relaxed max-w-xl mx-auto mb-12">
              Whether you need a research partner, a fire engineering consultation, or access to our AI-driven analytics platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base px-10 py-4">
                Start a Research Partnership
              </Link>
              <Link href="/services" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-navy-900 text-base px-10 py-4">
                Explore All Divisions
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
