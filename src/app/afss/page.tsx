'use client'

import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import ScrollReveal from '@/components/effects/ScrollReveal'
import Link from 'next/link'

const faqItems = [
  {
    question: 'What is an Annual Fire Safety Statement (AFSS)?',
    answer:
      'An Annual Fire Safety Statement is a legal document that confirms essential fire safety measures in a building have been assessed and are performing to the required standard. It is required under the Environmental Planning & Assessment Regulation 2021 (Clause 177) for buildings that have a fire safety schedule.',
  },
  {
    question: 'Who is responsible for lodging the AFSS?',
    answer:
      'The building owner is legally responsible for ensuring the AFSS is prepared, signed, and lodged annually with both the local council and Fire & Rescue NSW. Failure to do so can result in significant fines and legal liability. Verex Fire Solutions can manage this entire process on your behalf.',
  },
  {
    question: 'What happens if I don\'t lodge my AFSS on time?',
    answer:
      'Failure to lodge an AFSS is an offence under NSW legislation. Councils can issue penalty infringement notices, and building owners may face fines of up to $110,000 for individuals or $220,000 for corporations. Beyond financial penalties, you may also face increased legal liability in the event of a fire incident.',
  },
  {
    question: 'How often does an AFSS need to be lodged?',
    answer:
      'An AFSS must be lodged annually, within 12 months of the previous statement (or within 12 months of the initial fire safety certificate for new buildings). The due date is determined by the anniversary of your first AFSS or fire safety certificate.',
  },
  {
    question: 'What essential fire safety measures are covered?',
    answer:
      'Essential fire safety measures typically include fire detection and alarm systems, sprinkler systems, fire hydrants, fire hose reels, portable fire extinguishers, emergency lighting, exit signs, fire doors, mechanical ventilation, smoke management systems, fire-rated construction elements, and other measures specified on your building\'s fire safety schedule.',
  },
  {
    question: 'Can Verex handle the entire AFSS process for me?',
    answer:
      'Absolutely. We provide a complete end-to-end AFSS management service. This includes conducting all required inspections, coordinating specialist testing, preparing the statement, obtaining the necessary accredited practitioner sign-off, and lodging the completed AFSS with your local council and Fire & Rescue NSW. We also maintain all records and proactively remind you of upcoming deadlines.',
  },
]

export default function AFSSPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-smoke-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
              AFSS Management
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-navy-DEFAULT mb-6 leading-tight">
              Annual Fire Safety{' '}
              <span className="gradient-text">Statements</span>
            </h1>
            <p className="text-xl text-smoke-600 leading-relaxed">
              Complete AFSS management from inspection to council lodgement. We take the
              complexity out of compliance so you can focus on managing your property with
              complete peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* What is AFSS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
                  Understanding AFSS
                </span>
                <h2 className="text-4xl font-heading font-bold text-navy-DEFAULT mb-6">
                  What is an Annual Fire Safety{' '}
                  <span className="gradient-text">Statement</span>?
                </h2>
                <div className="space-y-4 text-smoke-600 leading-relaxed">
                  <p>
                    Under the Environmental Planning & Assessment Regulation 2021, building
                    owners in New South Wales are legally required to submit an Annual Fire Safety
                    Statement (AFSS) confirming that all essential fire safety measures in their
                    building have been assessed by a competent fire safety practitioner and are
                    performing to the required standard.
                  </p>
                  <p>
                    The AFSS must be lodged annually with both the local council and Fire &amp;
                    Rescue NSW. It covers every essential fire safety measure listed on the
                    building&apos;s fire safety schedule — from fire alarms and sprinklers to emergency
                    lighting and fire doors.
                  </p>
                  <p>
                    Failure to lodge an AFSS can result in substantial penalties, increased legal
                    liability, and potential closure orders. More importantly, it puts the safety of
                    building occupants at serious risk.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="card p-8">
                <h3 className="text-xl font-heading font-semibold text-navy-DEFAULT mb-6">
                  Key Legislation
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'Environmental Planning & Assessment Act 1979',
                      description: 'The primary legislation governing building compliance in NSW, including fire safety certification requirements.',
                    },
                    {
                      title: 'EP&A Regulation 2021 — Clause 177',
                      description: 'Specifies the requirement for building owners to provide an annual fire safety statement for buildings with a fire safety schedule.',
                    },
                    {
                      title: 'EP&A Regulation 2021 — Schedule 5',
                      description: 'Defines the essential fire safety measures that must be assessed and maintained as part of the AFSS process.',
                    },
                    {
                      title: 'AS 1851-2012',
                      description: 'The Australian Standard for routine service of fire protection systems and equipment — now being adopted as mandatory in NSW.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="p-4 rounded-xl bg-smoke-50 border border-smoke-50">
                      <h4 className="text-sm font-heading font-semibold text-fire-600 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-smoke-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our AFSS Process */}
      <section className="py-24 bg-smoke-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
                Our Process
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-DEFAULT mb-6">
                Effortless AFSS{' '}
                <span className="gradient-text">Compliance</span>
              </h2>
              <p className="text-lg text-smoke-600">
                We handle every step of the AFSS process, ensuring your building remains
                compliant year after year without the stress.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Review Fire Safety Schedule',
                description: 'We obtain and review your building\'s fire safety schedule to identify every essential fire safety measure that requires assessment.',
              },
              {
                step: '02',
                title: 'Comprehensive Inspections',
                description: 'Our qualified technicians inspect, test, and assess every listed fire safety measure against the relevant Australian Standards.',
              },
              {
                step: '03',
                title: 'Deficiency Identification',
                description: 'Any deficiencies or non-compliant items are documented with photographic evidence and prioritised rectification recommendations.',
              },
              {
                step: '04',
                title: 'Rectification Support',
                description: 'We can perform or coordinate the rectification of identified deficiencies to bring all systems back to full compliance.',
              },
              {
                step: '05',
                title: 'Statement Preparation',
                description: 'The AFSS is prepared in the prescribed form, confirming all essential fire safety measures have been assessed and are performing to standard.',
              },
              {
                step: '06',
                title: 'Lodgement & Record-Keeping',
                description: 'We lodge the completed AFSS with your local council and Fire & Rescue NSW, and maintain comprehensive records for your reference.',
              },
            ].map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.1}>
                <div className="card p-8 h-full group">
                  <span className="text-3xl font-heading font-bold text-fire-600/30 group-hover:text-fire-600/50 transition-colors">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-heading font-semibold text-navy-DEFAULT mt-3 mb-3 group-hover:text-fire-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-smoke-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Measures Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
                What We Assess
              </span>
              <h2 className="text-4xl font-heading font-bold text-navy-DEFAULT mb-6">
                Essential Fire Safety{' '}
                <span className="gradient-text">Measures</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                'Fire Detection & Alarm Systems',
                'Automatic Sprinkler Systems',
                'Fire Hydrant Systems',
                'Fire Hose Reels',
                'Portable Fire Extinguishers',
                'Emergency Lighting',
                'Exit Signs',
                'Fire Doors',
                'Fire-Rated Construction',
                'Smoke Management Systems',
                'Mechanical Ventilation',
                'Fire Control Rooms/Panels',
                'Emergency Warning Systems (EWIS)',
                'Stairwell Pressurisation',
                'Fire Shutters & Curtains',
                'Smoke Detectors & Alarms',
              ].map((measure) => (
                <div
                  key={measure}
                  className="flex items-center gap-3 p-4 rounded-xl bg-smoke-50 border border-smoke-50 hover:border-fire-600/20 hover:bg-fire-600/5 transition-all group"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-fire-600 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <span className="text-sm text-smoke-600 group-hover:text-navy-DEFAULT transition-colors">
                    {measure}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-smoke-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
                Frequently Asked Questions
              </span>
              <h2 className="text-4xl font-heading font-bold text-navy-DEFAULT">
                AFSS{' '}
                <span className="gradient-text">FAQs</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <details className="card group" open={i === 0}>
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-heading font-semibold text-navy-DEFAULT pr-8 group-hover:text-fire-600 transition-colors">
                      {faq.question}
                    </h3>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-fire-600 flex-shrink-0 group-open:rotate-180 transition-transform duration-300"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-sm text-smoke-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-heading font-bold text-navy-DEFAULT mb-6">
              Is Your AFSS{' '}
              <span className="gradient-text">Up to Date</span>?
            </h2>
            <p className="text-lg text-smoke-600 mb-8">
              Don&apos;t risk penalties or — worse — the safety of your building occupants.
              Contact us today for a hassle-free AFSS assessment and lodgement service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-fire">
                <span>Schedule Your AFSS Assessment</span>
              </Link>
              <Link href="/contact" className="btn-outline-fire">
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
