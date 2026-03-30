'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

const researchPillars = [
  {
    title: 'AI & Machine Learning for Fire Detection',
    description:
      'Developing convolutional neural network architectures for real-time fire signature classification, multi-sensor fusion algorithms, and predictive failure analytics for detection circuit networks.',
    href: '/services/ai-fire-detection',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Computational Fire Dynamics',
    description:
      'FDS and PyroSim modelling for performance-based fire engineering, tenability analysis, and smoke management system design.',
    href: '/services/computational-fire-engineering',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    span: 'md:col-span-2',
  },
  {
    title: 'Digital Twin & IoT Systems',
    description:
      'Real-time digital replicas of building fire infrastructure, BACnet/Modbus integration, and cloud SCADA telemetry platforms.',
    href: '/services/digital-twin-compliance',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0L12 17.25 6.429 14.25m11.142 0l4.179 2.25L12 21.75l-9.75-5.25 4.179-2.25" />
      </svg>
    ),
    span: 'md:col-span-2',
  },
]

const technologyStack = [
  { name: 'Fire Dynamics Simulator', desc: 'NIST-developed CFD engine for fire behaviour modelling' },
  { name: 'TensorFlow & PyTorch', desc: 'Deep learning frameworks for fire detection ML models' },
  { name: 'BACnet / Modbus', desc: 'Building automation protocol integration and development' },
  { name: 'Federated ML / PySyft', desc: 'Privacy-preserving distributed model training across organisations' },
  { name: 'AS 7240 Firmware', desc: 'Embedded systems development for compliant fire panels' },
  { name: 'Intel Loihi 2 / Neuromorphic', desc: 'Spiking neural network hardware for ultra-low-latency inference' },
]

const activeResearch = [
  { title: 'Physics-Informed Neural Networks for Structural Fire Response', description: 'PINNs embedding Navier-Stokes and thermal PDEs directly into neural network loss functions for real-time structural integrity prediction during active fire events, ingesting live thermocouple and strain gauge telemetry.' },
  { title: 'Neuromorphic Fire Detection on Intel Loihi 2', description: 'Spiking neural networks deployed on neuromorphic hardware achieving sub-millisecond fire signature classification with 100x lower power consumption than conventional detector polling architectures.' },
  { title: 'Federated Learning for Cross-Organisational Fire Risk Modelling', description: 'Privacy-preserving machine learning across building portfolios using federated aggregation of fire incident and sensor telemetry data, enabling superior risk models without exposing raw organisational data.' },
  { title: 'Autonomous Multi-Agent Suppression Orchestration', description: 'Distributed AI coordination of individual suppression nodes — sprinklers, gaseous agents, water mist — via mesh networks for optimal agent deployment without centralised control.' },
]

const differentiators = [
  { title: 'Published Research', description: 'Our work is peer-reviewed and published in leading fire engineering journals, contributing to the global body of fire science knowledge.', icon: (<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>) },
  { title: 'Engineering Excellence', description: 'Our engineers hold advanced degrees in fire engineering, computational physics, and machine learning \u2014 backed by deep domain expertise.', icon: (<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" /></svg>) },
  { title: 'Industry Partnerships', description: 'We collaborate with university fire laboratories, standards bodies, and engineering firms to translate research into deployed systems.', icon: (<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0Zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0Z" /></svg>) },
  { title: 'Standards Leadership', description: 'Active contributors to Australian Standards development (AS 7240, AS 1851, AS 1670.4), shaping the regulatory frameworks our systems must meet.', icon: (<svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>) },
]

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(249,115,22,0.4) 1px, transparent 0)', backgroundSize: '48px 48px' }} />
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-orange-500/5 blur-3xl" />
        </div>
        <div className="relative z-10 container-max section-padding w-full">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block text-orange-400 text-sm font-semibold tracking-widest uppercase mb-6">Fire Engineering Research &amp; Development</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading text-white leading-[1.1] tracking-tight mb-8">
              Advancing the Science of Fire Safety Through <span className="gradient-text">AI &amp; Engineering.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="text-lg sm:text-xl text-navy-300 max-w-2xl mb-10 leading-relaxed">
              Pioneering computational fire dynamics, AI-driven detection systems, and next-generation fire panel engineering. We don&apos;t just meet standards &mdash; we develop the technologies that define them.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }} className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="btn-primary text-base px-8 py-4">Explore Our Research</Link>
              <Link href="/contact" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-navy-900 text-base px-8 py-4">Partner With Us</Link>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.7 }} className="mt-20 pt-10 border-t border-white/10">
            <div className="grid grid-cols-3 gap-8 max-w-xl">
              <div><p className="text-3xl sm:text-4xl font-heading font-bold text-white">8</p><p className="text-sm text-navy-400 mt-1">R&amp;D Divisions</p></div>
              <div><p className="text-3xl sm:text-4xl font-heading font-bold text-white">AI</p><p className="text-sm text-navy-400 mt-1">Driven Detection</p></div>
              <div><p className="text-3xl sm:text-4xl font-heading font-bold text-white">CFD</p><p className="text-sm text-navy-400 mt-1">Fire Simulation</p></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">Core Research Areas</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-navy-900 mt-3 mb-5">Research Pillars</h2>
              <p className="text-navy-500 text-lg leading-relaxed">Three interconnected research programmes driving the next generation of fire safety technology.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {researchPillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 0.12} className={pillar.span}>
                <Link href={pillar.href} className="group block h-full">
                  <div className={`card h-full flex flex-col justify-between ${i === 0 ? 'bg-navy-900 text-white border-navy-700 hover:border-orange-500/40' : ''}`}>
                    <div>
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${i === 0 ? 'bg-orange-500/10 text-orange-400' : 'bg-navy-50 text-navy-900 group-hover:bg-orange-50 group-hover:text-orange-600'} transition-colors duration-300`}>{pillar.icon}</div>
                      <h3 className={`text-xl sm:text-2xl font-heading mb-3 ${i === 0 ? 'text-white' : 'text-navy-900'}`}>{pillar.title}</h3>
                      <p className={`leading-relaxed ${i === 0 ? 'text-navy-300' : 'text-navy-500'}`}>{pillar.description}</p>
                    </div>
                    <div className={`mt-6 inline-flex items-center text-sm font-semibold ${i === 0 ? 'text-orange-400 group-hover:text-orange-300' : 'text-orange-600 group-hover:text-orange-700'} transition-colors`}>
                      View research
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-50/60 border-y border-navy-100">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <ScrollReveal><p className="text-center text-sm font-semibold text-navy-400 tracking-widest uppercase mb-10">Our Technology Stack</p></ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologyStack.map((tech, i) => (
              <ScrollReveal key={tech.name} delay={i * 0.06}>
                <div className="flex flex-col items-center justify-center h-28 rounded-xl bg-white border border-navy-100 px-4 hover:border-orange-200 hover:shadow-sm transition-all duration-300 text-center">
                  <span className="text-sm font-semibold text-navy-800 leading-tight">{tech.name}</span>
                  <span className="text-xs text-navy-400 mt-1 leading-tight">{tech.desc}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">Why Verex</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-navy-900 mt-3 mb-6 leading-tight">Where Science Meets<br />Fire Engineering.</h2>
              <p className="text-navy-500 text-lg leading-relaxed max-w-lg">We are not a conventional fire safety firm. We are researchers, engineers, and scientists &mdash; purpose-built to develop the technologies and methodologies that advance fire safety globally.</p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-6">
              {differentiators.map((d, i) => (
                <ScrollReveal key={d.title} delay={i * 0.1} direction="right">
                  <div className="card group">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-50 text-orange-600 mb-5 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">{d.icon}</div>
                    <h3 className="text-lg font-heading text-navy-900 mb-2">{d.title}</h3>
                    <p className="text-sm text-navy-500 leading-relaxed">{d.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-orange-500/5 blur-3xl" />
        <div className="container-max relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">Current Programmes</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mt-3 mb-5">Active Research</h2>
              <p className="text-navy-300 text-lg leading-relaxed">Our research divisions are currently advancing these critical areas of fire science and technology.</p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {activeResearch.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="rounded-xl bg-white/5 border border-white/10 p-8 hover:border-orange-500/30 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 font-heading font-bold text-sm">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="text-xl font-heading text-white mb-3">{item.title}</h3>
                      <p className="text-navy-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">Partnerships &amp; Standards</span>
              <h2 className="text-3xl sm:text-4xl font-heading text-navy-900 mt-3 mb-5">Trusted by Australia&apos;s Leading Institutions</h2>
              <p className="text-navy-500 text-lg leading-relaxed">We collaborate with university research centres, standards bodies, and engineering consultancies to advance fire safety science.</p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {['Fire Protection Association Australia', 'Standards Australia', 'ABCB / NCC', 'University Research Partners'].map((name, i) => (
              <ScrollReveal key={name} delay={i * 0.08}>
                <div className="flex items-center justify-center h-24 rounded-xl bg-navy-50 border border-navy-100 px-6 hover:border-orange-200 transition-colors">
                  <span className="text-sm font-semibold text-navy-600 text-center">{name}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(249,115,22,0.5) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="relative z-10 container-max section-padding text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-6 leading-tight max-w-3xl mx-auto">Collaborate With Australia&apos;s Leading <span className="gradient-text">Fire Research Lab</span></h2>
            <p className="text-navy-300 text-lg leading-relaxed max-w-xl mx-auto mb-10">Whether you need a research partner, a fire engineering consultation, or access to our AI-driven analytics platform &mdash; we&apos;re ready to work with you.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary text-base px-10 py-4">Start a Research Partnership</Link>
              <Link href="/services" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-navy-900 text-base px-10 py-4">View All R&amp;D Divisions</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
