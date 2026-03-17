'use client'

import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import ScrollReveal from '@/components/effects/ScrollReveal'
import Link from 'next/link'

const certifierCategories = [
  {
    category: 'C10 Fire Protection',
    subtitle: 'Licensed Contractor — NSW Fair Trading',
    description:
      'A C10 licence authorises the holder to carry out fire protection work including the design, installation, commissioning, maintenance, and certification of fire protection systems. Verex holds the C10 licence and deploys qualified fire engineers who understand the full spectrum of active and passive fire protection under the Building Code of Australia and relevant Australian Standards.',
    capabilities: [
      'Design and specification of fire detection, alarm, and suppression systems in accordance with AS 1670.1, AS 1670.4, AS 2118, and AS 1668.1',
      'Installation and commissioning of fire sprinkler, hydrant, hose reel, and gaseous suppression systems',
      'Fire engineered and deemed-to-satisfy (DtS) alternative solution assessments under BCA/NCC Volume One',
      'Performance-based fire engineering reports (PBFE) for complex, non-standard, or heritage buildings',
      'Fire safety system design review and compliance verification for development applications (DA) and construction certificates (CC)',
      'Commissioning witness testing and integrated systems testing (IST) coordination',
      'Fire engineering peer review and third-party design audit services',
    ],
    standards: ['AS 1670.1', 'AS 2118', 'AS 1668.1', 'BCA/NCC', 'NSW Fair Trading'],
  },
  {
    category: 'A1 Accredited Certifier',
    subtitle: 'Building Surveyor — All Building Classes',
    description:
      'An A1 Accredited Certifier is authorised to issue complying development certificates, construction certificates, compliance certificates, and occupation certificates for all classes of buildings under the Environmental Planning & Assessment Act 1979. Our A1 certifiers bring extensive fire safety knowledge to the certification process, ensuring fire safety schedules are accurate, comprehensive, and aligned with the building\'s actual installed fire protection systems.',
    capabilities: [
      'Preparation and issuance of fire safety schedules for new buildings, change-of-use applications, and major refurbishments',
      'Review of fire engineering reports and alternative solution proposals for consistency with BCA/NCC performance requirements',
      'Issuance of construction certificates (CC) with fire safety conditions and critical stage inspection schedules',
      'Final inspection and issuance of occupation certificates (OC) with verification of all fire safety installations',
      'Assessment of essential fire safety measures against the building\'s approved plans and BCA/NCC classifications',
      'Compliance certificates for fire safety upgrade works and fire safety order rectifications',
      'Determination of building classifications (Class 2–9) and applicable fire safety provisions under BCA Volume One',
    ],
    standards: ['EP&A Act 1979', 'EP&A Reg 2021', 'BCA/NCC Vol 1', 'Building Professionals Act'],
  },
  {
    category: 'A2 Accredited Certifier',
    subtitle: 'Building Surveyor — Class 1 & 10 Buildings',
    description:
      'An A2 Accredited Certifier is authorised to certify Class 1 (houses, townhouses) and Class 10 (non-habitable structures such as sheds, carports, and swimming pools) buildings. While these building classes have fewer mandatory fire safety measures, our A2 certifiers ensure that smoke alarm requirements under BCA Volume Two, bushfire protection measures under AS 3959, and any additional council conditions are fully addressed.',
    capabilities: [
      'Fire safety schedule preparation for Class 1 and Class 10 buildings where applicable',
      'Smoke alarm compliance verification under BCA Volume Two and AS 3786',
      'Bushfire Attack Level (BAL) assessment coordination and AS 3959 construction compliance verification',
      'Assessment of fire separation requirements between Class 1 buildings and boundaries',
      'Verification of non-combustible cladding requirements and compliance with recent legislative amendments',
      'Compliance certificates for residential fire safety upgrade works',
      'Coordination with Fire & Rescue NSW on bushfire-prone land development requirements',
    ],
    standards: ['BCA/NCC Vol 2', 'AS 3786', 'AS 3959', 'EP&A Reg 2021'],
  },
]

const fireScheduleProcess = [
  {
    step: '01',
    title: 'Building Classification & BCA Analysis',
    description:
      'We determine the correct building classification under BCA/NCC and identify all applicable deemed-to-satisfy (DtS) fire safety provisions. For buildings using alternative solutions, we review the fire engineering report to establish the performance requirements baseline.',
  },
  {
    step: '02',
    title: 'As-Built Documentation Review',
    description:
      'We review all available documentation including development consent conditions, construction certificate fire safety conditions, as-built drawings, commissioning certificates, and any existing fire safety schedules to establish a comprehensive picture of the building\'s fire safety systems.',
  },
  {
    step: '03',
    title: 'Physical Site Survey & Verification',
    description:
      'Our C10-licensed technicians and A1/A2 certifiers conduct a detailed on-site survey to verify the type, location, extent, and condition of all installed fire safety measures. Every system is cross-referenced against approved plans and BCA requirements.',
  },
  {
    step: '04',
    title: 'Essential Measures Identification',
    description:
      'We compile a definitive register of all essential fire safety measures present in the building, including active systems (detection, suppression, warning), passive systems (fire-rated construction, doors, penetration seals), and ancillary measures (signage, egress paths, emergency lighting).',
  },
  {
    step: '05',
    title: 'Performance Standards Determination',
    description:
      'For each identified essential fire safety measure, we determine the applicable minimum standard of performance. This references the specific Australian Standard, BCA clause, or fire engineering performance criterion that the measure must satisfy.',
  },
  {
    step: '06',
    title: 'Fire Safety Schedule Issuance',
    description:
      'The completed fire safety schedule is issued as a formal instrument listing every essential fire safety measure, its required standard of performance, and the frequency of critical assessment. This document becomes the basis for all future AFSS inspections and council lodgements.',
  },
]

export default function FireEngineeringPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-smoke-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
              Fire Engineering & Building Surveying
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-navy-DEFAULT mb-6 leading-tight">
              C10 Fire Engineers &{' '}
              <span className="gradient-text">Accredited Certifiers</span>
            </h1>
            <p className="text-xl text-smoke-600 leading-relaxed">
              Expert fire protection engineering and building certification services underpinned
              by C10 licensing, A1 and A2 accreditation, and deep technical knowledge of the
              Building Code of Australia, Australian Standards, and NSW regulatory framework.
            </p>
          </div>
        </div>
      </section>

      {/* Licence & Accreditation Explainer */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
                Our Credentials
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-DEFAULT mb-6">
                Licensed, Accredited &{' '}
                <span className="gradient-text">Qualified</span>
              </h2>
              <p className="text-lg text-smoke-600">
                Understanding the distinction between C10 fire protection licensing and A1/A2
                building surveyor accreditation is critical to ensuring your building receives
                the correct level of expertise at every stage of its lifecycle.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-16">
            {certifierCategories.map((cat, index) => (
              <ScrollReveal key={cat.category} delay={0.1}>
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-fire-500/10 flex items-center justify-center text-fire-500">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                          <path d="M9 12l2 2 4-4"/>
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-2xl font-heading font-bold text-navy-DEFAULT">
                          {cat.category}
                        </h2>
                        <p className="text-sm text-fire-500 font-medium">{cat.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-smoke-600 leading-relaxed mb-6">
                      {cat.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {cat.standards.map((standard) => (
                        <span
                          key={standard}
                          className="text-xs px-3 py-1 rounded-full bg-fire-500/10 text-fire-600 border border-fire-500/15 font-mono"
                        >
                          {standard}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-fire-500 hover:text-fire-600 transition-colors"
                    >
                      Enquire About {cat.category} Services
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>

                  {/* Capabilities card */}
                  <div className={`card p-8 bg-white ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-sm font-heading font-semibold text-fire-500 uppercase tracking-wider mb-4">
                      Capabilities
                    </h3>
                    <ul className="space-y-3">
                      {cat.capabilities.map((cap, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-smoke-600">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-fire-500 flex-shrink-0 mt-0.5">
                            <path d="M20 6L9 17l-5-5"/>
                          </svg>
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {index < certifierCategories.length - 1 && (
                  <div className="mt-16 border-t border-smoke-200" />
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Fire Safety Schedule Preparation */}
      <section className="py-24 bg-smoke-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
                Fire Safety Schedules
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-DEFAULT mb-6">
                Expert Schedule{' '}
                <span className="gradient-text">Preparation</span>
              </h2>
              <p className="text-lg text-smoke-600">
                A fire safety schedule is the foundational document that defines every essential
                fire safety measure in your building and the standard to which each must perform.
                Our C10 engineers and A1/A2 certifiers prepare schedules that are accurate,
                comprehensive, and fully aligned with BCA/NCC requirements.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fireScheduleProcess.map((item, index) => (
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

      {/* When You Need a Fire Schedule */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
                  Key Scenarios
                </span>
                <h2 className="text-4xl font-heading font-bold text-navy-DEFAULT mb-6">
                  When You Need a Fire Safety{' '}
                  <span className="gradient-text">Schedule</span>
                </h2>
                <div className="space-y-4 text-smoke-600 leading-relaxed">
                  <p>
                    A fire safety schedule is required whenever a building obtains a construction
                    certificate, complying development certificate, or occupation certificate that
                    includes essential fire safety measures. It is also required when a Fire Safety
                    Order is issued by council or Fire &amp; Rescue NSW.
                  </p>
                  <p>
                    Many existing buildings have incomplete, inaccurate, or missing fire safety
                    schedules — a situation that creates significant compliance risk and can
                    invalidate your Annual Fire Safety Statement. Our team can audit, update,
                    or create fire safety schedules from scratch.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="card p-8">
                <h3 className="text-xl font-heading font-semibold text-navy-DEFAULT mb-6">
                  Common Triggers
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'New Construction',
                      description: 'Construction certificate or CDC issued for a new Class 2–9 building requiring fire safety measures.',
                    },
                    {
                      title: 'Change of Building Use',
                      description: 'Reclassification of building use (e.g., warehouse to office) triggering new BCA fire safety requirements.',
                    },
                    {
                      title: 'Major Renovation or Fitout',
                      description: 'Significant alterations that affect fire compartmentation, egress, or installed fire protection systems.',
                    },
                    {
                      title: 'Fire Safety Order Compliance',
                      description: 'Council or Fire & Rescue NSW issues an order requiring the building to establish or update its fire safety schedule.',
                    },
                    {
                      title: 'Missing or Inaccurate Schedule',
                      description: 'Existing schedule does not reflect the actual installed fire safety systems, creating AFSS compliance risk.',
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

      {/* CTA */}
      <section className="py-24 bg-smoke-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-heading font-bold text-navy-DEFAULT mb-6">
              Need a C10 Fire Engineer or{' '}
              <span className="gradient-text">Accredited Certifier</span>?
            </h2>
            <p className="text-lg text-smoke-600 mb-8">
              Whether you need a fire safety schedule prepared, a performance-based fire
              engineering report, or certification for a complex development — our licensed
              and accredited team is ready to assist.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-fire">
                <span>Request a Consultation</span>
              </Link>
              <a href="tel:0405605196" className="btn-outline-fire">
                Call 0405 605 196
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
