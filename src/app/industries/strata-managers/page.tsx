'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const painPoints = [
  {
    title: 'Coordination Overload',
    description:
      'Managing multiple contractors across dozens of units creates scheduling conflicts, missed inspections, and communication breakdowns.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: 'AFSS Deadline Pressure',
    description:
      'Missing your Annual Fire Safety Statement deadline means council fines, potential enforcement action, and personal liability exposure.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Resident Access Challenges',
    description:
      'Gaining access to individual apartments for inspections is one of the biggest logistical hurdles in strata fire compliance.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    title: 'Budget Uncertainty',
    description:
      'Unexpected repair costs and opaque quoting make it difficult to forecast fire safety expenditure for owners corporation budgets.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
]

const benefits = [
  {
    title: 'Simplified Compliance',
    description: 'One provider manages every fire safety measure in your building, from inspection through to AFSS lodgement.',
  },
  {
    title: 'Reduced Risk',
    description: 'Proactive scheduling and thorough documentation protect you from fines, enforcement orders, and liability.',
  },
  {
    title: 'Cost Certainty',
    description: 'Transparent fixed-fee agreements mean no surprise invoices and straightforward budget forecasting.',
  },
  {
    title: 'Digital Portal Access',
    description: 'Real-time visibility into inspection status, compliance certificates, and upcoming due dates from any device.',
  },
]

const services = [
  'AFSS Management & Lodgement',
  'AS 1851 Inspection & Testing',
  'Fire Door & Passive Fire Inspections',
  'Smoke Alarm Compliance Programs',
  'Emergency Evacuation Plans & Diagrams',
  'Fire Safety Training for Building Wardens',
]

export default function StrataManagersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-cyan-400 font-semibold tracking-wide uppercase text-sm mb-4">
              For Strata Managers
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Effortless Strata Fire Compliance is Here
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto max-w-2xl text-lg text-navy-200 leading-relaxed mb-10">
              One dedicated team handles every aspect of your building&apos;s fire safety
              compliance &mdash; so you can focus on managing your portfolio, not chasing
              contractors.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <a
              href="tel:0405605196"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30"
            >
              Schedule a Hassle-Free Strata Assessment
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-cyan-600 font-semibold tracking-wide uppercase text-sm mb-3">
                The Challenge
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Strata Fire Compliance Shouldn&apos;t Be This Hard
              </h2>
              <p className="mx-auto max-w-2xl text-navy-600 text-lg leading-relaxed">
                Managing fire safety across a strata scheme means juggling deadlines,
                contractors, and resident access &mdash; all while staying on the right
                side of legislation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {painPoints.map((point, i) => (
              <ScrollReveal key={point.title} delay={i * 0.08} direction="up">
                <div className="rounded-2xl border border-navy-100 bg-navy-50/50 p-8 h-full">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-cyan-400">
                    {point.icon}
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-navy-900 mb-3">
                    {point.title}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-cyan-600 font-semibold tracking-wide uppercase text-sm mb-3">
                  The Verex Approach
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                  Your Single Point of Contact for Strata Fire Safety
                </h2>
                <p className="text-navy-600 text-lg leading-relaxed mb-6">
                  Verex Fire Solutions assigns a dedicated compliance manager to each
                  strata scheme. They coordinate every inspection, manage resident
                  access logistics, handle all contractor scheduling, and ensure
                  your AFSS is lodged on time &mdash; every year.
                </p>
                <p className="text-navy-600 text-lg leading-relaxed">
                  No more chasing multiple vendors. No more missed deadlines.
                  Just one trusted partner who understands strata and delivers
                  complete peace of mind.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit, i) => (
                  <div
                    key={benefit.title}
                    className="rounded-xl bg-white border border-navy-100 p-6 shadow-sm"
                  >
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500 text-white text-sm font-bold">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h3 className="font-serif text-base font-semibold text-navy-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-navy-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Relevant Services */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-cyan-600 font-semibold tracking-wide uppercase text-sm mb-3">
                What We Deliver
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-4">
                Strata Fire Safety Services
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {services.map((service, i) => (
              <ScrollReveal key={service} delay={i * 0.06} direction="up">
                <div className="flex items-center gap-3 rounded-xl bg-navy-50 p-5">
                  <svg className="w-5 h-5 text-cyan-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-navy-900 font-medium text-sm">{service}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <svg className="mx-auto mb-8 w-12 h-12 text-cyan-500/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
            </svg>
            <blockquote className="font-serif text-2xl md:text-3xl text-navy-900 font-medium leading-relaxed mb-8">
              &ldquo;Verex completely transformed how we manage fire compliance across
              our 14-building portfolio. One phone call, one point of contact, and
              every AFSS lodged on time. It has taken an enormous weight off our
              team.&rdquo;
            </blockquote>
            <div>
              <p className="text-navy-900 font-semibold">Sarah Mitchell</p>
              <p className="text-navy-500 text-sm">Senior Strata Manager, Horizon Property Group</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Schedule a Hassle-Free Strata Assessment
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              Let us review your strata scheme&apos;s fire safety obligations and
              show you how a single-provider approach simplifies everything.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0405605196"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30"
              >
                Call 0405 605 196
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                Request a Quote Online
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
