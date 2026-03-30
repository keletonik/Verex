'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

/* ------------------------------------------------------------------ */
/*  Reusable inline data                                               */
/* ------------------------------------------------------------------ */

const trustStats = [
  { value: 'FPAS', label: 'Accredited Provider' },
  { value: 'AS 1851', label: 'Certified Compliance' },
  { value: '24/7', label: 'Portal Access' },
]

const servicePillars = [
  {
    title: 'AFSS Management',
    description:
      'End-to-end Annual Fire Safety Statement management — from audit through lodgement — so building owners never miss a deadline.',
    href: '/services/digital-twin-compliance',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'AS 1851 Testing & Maintenance',
    description:
      'Routine and comprehensive testing of every fire safety system in strict accordance with AS 1851 standards.',
    href: '/services/ai-fire-detection',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.58-3.37m0 0L12 8.41l6.16 3.39m-12.32 0v6.16l6.16 3.59 6.16-3.59v-6.16" />
      </svg>
    ),
    span: 'md:col-span-2',
  },
  {
    title: 'Client Compliance Portal',
    description:
      'A real-time digital dashboard giving you 24/7 visibility into every compliance milestone, defect, and report.',
    href: '/services/computational-fire-engineering',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    span: 'md:col-span-2',
  },
]

const certifications = [
  'FPAS Accredited',
  'AS 1851 Certified',
  'Fire Protection Association Australia',
  'NSW Building Commissioner Registered',
  'SafeWork NSW Compliant',
  'ISO 9001 Quality Systems',
]

const differentiators = [
  {
    title: 'Certified Expertise',
    description:
      'Our technicians hold FPAS accreditation and maintain ongoing professional development in every discipline of fire protection.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
  {
    title: 'Digital Compliance Portal',
    description:
      'Track every asset, defect, and report from a single dashboard — accessible anywhere, any time, on any device.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    title: 'Proactive Approach',
    description:
      'We identify and resolve issues before they escalate — reducing risk, avoiding penalties, and keeping occupants safe.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Single Point of Contact',
    description:
      'One dedicated compliance manager owns your portfolio end-to-end — no hand-offs, no confusion, total accountability.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
]

const portalFeatures = [
  { label: 'Real-time Compliance Status', icon: '01' },
  { label: 'Digital Asset Register', icon: '02' },
  { label: 'Historical Reports Archive', icon: '03' },
  { label: 'Defect Tracking & Resolution', icon: '04' },
  { label: 'Direct Messaging & Notifications', icon: '05' },
]


/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  return (
    <>
      {/* ============================== HERO ============================== */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy-900">
        {/* Background gradient + subtle pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(249,115,22,0.4) 1px, transparent 0)',
              backgroundSize: '48px 48px',
            }}
          />
          {/* Decorative gradient orbs */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-orange-500/5 blur-3xl" />
        </div>

        <div className="relative z-10 container-max section-padding w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-orange-400 text-sm font-semibold tracking-widest uppercase mb-6">
                Sydney&apos;s Premier Fire Compliance Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading text-white leading-[1.1] tracking-tight mb-8"
            >
              Unwavering Fire Compliance for Sydney&apos;s Buildings.{' '}
              <span className="gradient-text">Guaranteed.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg sm:text-xl text-navy-300 max-w-2xl mb-10 leading-relaxed"
            >
              From AFSS management to AS&nbsp;1851 testing, we deliver
              end-to-end fire safety compliance for building owners, strata
              managers, and facility managers across Greater Sydney.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Request a Free Compliance Audit
              </Link>
              <Link href="/services" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-navy-900 text-base px-8 py-4">
                Explore Our Services
              </Link>
            </motion.div>
          </div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-20 pt-10 border-t border-white/10"
          >
            <div className="grid grid-cols-3 gap-8 max-w-xl">
              {trustStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl sm:text-4xl font-heading font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-sm text-navy-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================== BENTO GRID SERVICES ===================== */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-navy-900 mt-3 mb-5">
                Core Service Pillars
              </h2>
              <p className="text-navy-500 text-lg leading-relaxed">
                Three integrated disciplines that cover every facet of your
                building&apos;s fire safety compliance.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {servicePillars.map((pillar, i) => (
              <ScrollReveal
                key={pillar.title}
                delay={i * 0.12}
                className={pillar.span}
              >
                <Link href={pillar.href} className="group block h-full">
                  <div
                    className={`card h-full flex flex-col justify-between ${
                      i === 0
                        ? 'bg-navy-900 text-white border-navy-700 hover:border-orange-500/40'
                        : ''
                    }`}
                  >
                    <div>
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-6 ${
                          i === 0
                            ? 'bg-orange-500/10 text-orange-400'
                            : 'bg-navy-50 text-navy-900 group-hover:bg-orange-50 group-hover:text-orange-600'
                        } transition-colors duration-300`}
                      >
                        {pillar.icon}
                      </div>
                      <h3
                        className={`text-xl sm:text-2xl font-heading mb-3 ${
                          i === 0 ? 'text-white' : 'text-navy-900'
                        }`}
                      >
                        {pillar.title}
                      </h3>
                      <p
                        className={`leading-relaxed ${
                          i === 0 ? 'text-navy-300' : 'text-navy-500'
                        }`}
                      >
                        {pillar.description}
                      </p>
                    </div>
                    <div
                      className={`mt-6 inline-flex items-center text-sm font-semibold ${
                        i === 0
                          ? 'text-orange-400 group-hover:text-orange-300'
                          : 'text-orange-600 group-hover:text-orange-700'
                      } transition-colors`}
                    >
                      Learn more
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
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

      {/* =================== TRUST SIGNALS / LOGOS =================== */}
      <section className="py-16 bg-navy-50/60 border-y border-navy-100">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-sm font-semibold text-navy-400 tracking-widest uppercase mb-10">
              Accreditations &amp; Certifications
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert} delay={i * 0.06}>
                <div className="flex items-center justify-center h-20 rounded-xl bg-white border border-navy-100 px-4 hover:border-orange-200 hover:shadow-sm transition-all duration-300">
                  <span className="text-xs sm:text-sm font-semibold text-navy-600 text-center leading-tight">
                    {cert}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =================== WHY CHOOSE VEREX ======================== */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">
                Why Verex
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-navy-900 mt-3 mb-6 leading-tight">
                Built Different. <br />
                Built for Compliance.
              </h2>
              <p className="text-navy-500 text-lg leading-relaxed max-w-lg">
                We are not a generalist contractor. We are fire compliance
                specialists — purpose-built to keep Sydney&apos;s buildings
                safe, lawful, and inspection-ready every single day.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 gap-6">
              {differentiators.map((d, i) => (
                <ScrollReveal key={d.title} delay={i * 0.1} direction="right">
                  <div className="card group">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-orange-50 text-orange-600 mb-5 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                      {d.icon}
                    </div>
                    <h3 className="text-lg font-heading text-navy-900 mb-2">
                      {d.title}
                    </h3>
                    <p className="text-sm text-navy-500 leading-relaxed">
                      {d.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== CLIENT COMPLIANCE PORTAL PROMO =============== */}
      <section className="section-padding bg-navy-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-orange-500/5 blur-3xl" />

        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">
                Digital Platform
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mt-3 mb-6 leading-tight">
                Your Compliance, <br />
                <span className="gradient-text">Always Visible.</span>
              </h2>
              <p className="text-navy-300 text-lg leading-relaxed mb-8 max-w-lg">
                The Verex Client Compliance Portal gives building owners and
                managers unprecedented transparency into their fire safety
                status. No more chasing paperwork — everything you need, in
                one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services/computational-fire-engineering" className="btn-primary">
                  See the Portal in Action
                </Link>
                <Link href="/contact" className="btn-secondary border-white/30 text-white hover:bg-white hover:text-navy-900">
                  Request a Demo
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-4">
                {portalFeatures.map((feature, i) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-center gap-5 rounded-xl bg-white/5 border border-white/10 p-5 hover:border-orange-500/30 transition-colors duration-300"
                  >
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 font-mono text-sm font-bold">
                      {feature.icon}
                    </span>
                    <span className="text-white font-medium">
                      {feature.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============ TOTAL COMPLIANCE SUBSCRIPTION ================== */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 p-10 sm:p-16 lg:p-20">
              {/* Subtle pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, rgba(249,115,22,0.5) 1px, transparent 0)',
                  backgroundSize: '32px 32px',
                }}
              />

              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-orange-400 text-sm font-semibold tracking-widest uppercase">
                    Annual Subscription
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mt-3 mb-6 leading-tight">
                    Total Compliance. <br />
                    One Fixed Fee.
                  </h2>
                  <p className="text-navy-300 text-lg leading-relaxed mb-4">
                    Our all-inclusive annual subscription covers every
                    inspection, test, certification, and AFSS lodgement your
                    building requires — for one predictable annual fee.
                  </p>
                  <p className="text-navy-400 leading-relaxed mb-8">
                    No hidden charges. No surprise invoices. Just complete
                    budget certainty and unwavering compliance,
                    month&nbsp;after&nbsp;month.
                  </p>
                  <Link
                    href="/services"
                    className="btn-primary text-base px-8 py-4"
                  >
                    Learn About Our Subscription Plans
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '100%', label: 'Coverage of all fire systems' },
                    { value: '12-mo', label: 'Fixed annual fee' },
                    { value: '24/7', label: 'Portal access included' },
                    { value: '0', label: 'Hidden charges — ever' },
                  ].map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center"
                    >
                      <p className="text-2xl sm:text-3xl font-heading font-bold text-orange-400">
                        {item.value}
                      </p>
                      <p className="text-sm text-navy-400 mt-2">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ REGULATORY GUIDANCE — AS 1851 2026 ============= */}
      <section className="section-padding bg-gradient-to-b from-orange-50/60 to-white border-y border-orange-100/50">
        <div className="container-max">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                Regulatory Update
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-navy-900 mb-6 leading-tight">
                The 2026 AS&nbsp;1851 Mandate Is Here
              </h2>
              <p className="text-navy-500 text-lg leading-relaxed mb-4">
                New legislation requires all buildings with essential fire
                safety measures to demonstrate compliance with{' '}
                <strong className="text-navy-700">
                  AS&nbsp;1851-2012
                </strong>{' '}
                for routine service and maintenance. Non-compliance now
                carries significantly increased penalties and enforcement
                action.
              </p>
              <p className="text-navy-500 text-lg leading-relaxed mb-10">
                Verex knows the standard inside and out — and we are ready
                to bring your building into full alignment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services/ai-fire-detection"
                  className="btn-primary text-base px-8 py-4"
                >
                  Prepare Your Building for AS&nbsp;1851
                </Link>
                <Link href="/contact" className="btn-secondary text-base px-8 py-4">
                  Speak With an Expert
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ====================== PARTNER WITH US ========================= */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-orange-500 text-sm font-semibold tracking-widest uppercase">
                Partner With Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-navy-900 mt-3 mb-5">
                Ready to Simplify Your Fire Compliance?
              </h2>
              <p className="text-navy-500 text-lg leading-relaxed mb-8">
                We work with strata managers, building owners, and facility
                managers across Sydney to deliver streamlined, transparent fire
                safety compliance. Let&apos;s start a conversation about your
                building.
              </p>
              <Link href="/contact" className="btn-primary text-base px-8 py-4">
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ======================== FINAL CTA =========================== */}
      <section className="relative overflow-hidden bg-navy-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgba(249,115,22,0.5) 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative z-10 container-max section-padding text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-white mb-6 leading-tight max-w-3xl mx-auto">
              Schedule Your Free <br />
              <span className="gradient-text">Compliance Consultation</span>
            </h2>
            <p className="text-navy-300 text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Let our experts assess your building&apos;s fire safety posture
              and show you exactly where you stand — at no cost or obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn-primary text-base px-10 py-4"
              >
                Book Your Free Consultation
              </Link>
              <a
                href="tel:0405605196"
                className="btn-secondary border-white/30 text-white hover:bg-white hover:text-navy-900 text-base px-10 py-4"
              >
                Call 0405 605 196
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
