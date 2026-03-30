'use client'

import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Training Needs Assessment',
    description:
      'We assess your building, occupancy, and existing warden structure to determine the right training program and scope.',
  },
  {
    number: '02',
    title: 'Customised Program Design',
    description:
      'Training content is tailored to your building — covering its specific fire systems, evacuation procedures, assembly points, and risk profile.',
  },
  {
    number: '03',
    title: 'On-Site Delivery',
    description:
      'Interactive sessions are delivered on-site by experienced trainers. We cover theory, practical scenarios, and hands-on equipment familiarisation.',
  },
  {
    number: '04',
    title: 'Drill & Debrief',
    description:
      'A live evacuation drill tests the plan in practice. We observe, record, and debrief with wardens and management to identify improvements.',
  },
  {
    number: '05',
    title: 'Certification & Records',
    description:
      'All attendees receive training certificates. Attendance records and drill reports are provided for your compliance files.',
  },
]

const benefits = [
  {
    title: 'AS 3745 Compliant',
    description:
      'Our training programs satisfy the warden training requirements of AS 3745 and support your emergency planning obligations.',
  },
  {
    title: 'Building-Specific Content',
    description:
      'Training is not generic. Every session is built around your building\'s actual systems, procedures, and emergency plan.',
  },
  {
    title: 'Practical & Engaging',
    description:
      'Interactive sessions with real-world scenarios keep participants engaged and ensure the training translates into genuine preparedness.',
  },
  {
    title: 'Compliance Documentation',
    description:
      'Training certificates, attendance records, and drill reports provide the evidence you need for audits and regulatory enquiries.',
  },
]

const faqs = [
  {
    question: 'Who needs fire warden training?',
    answer:
      'Under AS 3745, every facility must have a sufficient number of trained wardens to manage an emergency evacuation. The number of wardens depends on the building\'s occupancy and layout. Chief wardens, deputy chief wardens, floor wardens, and area wardens all require training appropriate to their role.',
  },
  {
    question: 'How often should training be conducted?',
    answer:
      'Warden training should be conducted at least annually, with refresher sessions whenever there are significant changes to the building, the emergency plan, or the warden team. New wardens should be trained before they assume their role. Evacuation drills should also be conducted at least annually.',
  },
  {
    question: 'Do you provide general staff fire awareness training?',
    answer:
      'Yes. In addition to warden-specific training, we provide general fire awareness sessions for all building occupants and staff. These sessions cover fire prevention, what to do when the alarm sounds, evacuation procedures, and how to use fire safety equipment such as extinguishers and fire blankets.',
  },
]

export default function FireSafetyTrainingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy-900 text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-950" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-cyan-400 text-sm font-medium mb-8 hover:text-cyan-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              All Services
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-4xl">
              Fire Safety Training
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="max-w-2xl text-lg text-navy-200 leading-relaxed">
              Warden training, general staff fire awareness sessions, and live evacuation
              drills that meet AS 3745 requirements and build genuine preparedness.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Training That Builds Real Preparedness
              </h2>
              <div className="space-y-4 text-navy-700 leading-relaxed">
                <p>
                  Fire safety systems protect buildings. Training protects people. The most
                  sophisticated fire detection and suppression systems are only as effective as the
                  emergency response they support. When occupants and wardens know exactly what to
                  do, evacuations are faster, calmer, and safer.
                </p>
                <p>
                  Verex Fire Solutions delivers fire safety training programs that are tailored to
                  your building and compliant with AS 3745. Our experienced trainers deliver
                  engaging, practical sessions that cover emergency procedures, warden roles and
                  responsibilities, equipment familiarisation, and evacuation coordination.
                </p>
                <p>
                  Every training program culminates in a live evacuation drill that tests the
                  emergency plan under realistic conditions. The drill is observed, timed, and
                  debriefed — providing actionable insights to improve future emergency responses.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15} direction="right">
              <div className="rounded-2xl bg-navy-50 border border-navy-100 p-8">
                <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">
                  Training Programs
                </h3>
                <ul className="space-y-3 text-navy-700 text-sm">
                  {[
                    'Chief warden training',
                    'Floor and area warden training',
                    'General staff fire awareness',
                    'Fire extinguisher practical training',
                    'Evacuation drill planning and execution',
                    'Emergency control organisation (ECO) setup',
                    'Warden refresher sessions',
                    'Post-drill debrief and improvement planning',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-cyan-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-cyan-600 font-semibold tracking-wide uppercase text-sm mb-3">
                Our Process
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900">
                From Assessment to Certification
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1}>
                <div className="relative">
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-cyan-200 -translate-x-4" />
                  )}
                  <div className="relative bg-white rounded-2xl p-6 shadow-sm border border-navy-100 h-full">
                    <span className="text-4xl font-bold text-cyan-500/20 font-serif">
                      {step.number}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-navy-900 mt-2 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-navy-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-cyan-600 font-semibold tracking-wide uppercase text-sm mb-3">
                Why Verex
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900">
                Key Benefits
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={benefit.title} delay={i * 0.08}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-navy-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-50 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 text-center mb-12">
              Common Questions
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-navy-100">
                  <h3 className="font-serif text-lg font-semibold text-navy-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-navy-600 leading-relaxed">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-900 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Equip Your Team to Respond With Confidence
            </h2>
            <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
              Trained wardens and informed occupants are the foundation of an effective
              emergency response. Book a training session with Verex today.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 hover:shadow-cyan-400/30"
            >
              Book a Training Session
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
