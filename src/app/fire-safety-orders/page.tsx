'use client'

import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import ScrollReveal from '@/components/effects/ScrollReveal'
import Link from 'next/link'

const orderTypes = [
  {
    title: 'Fire Safety Order — Section 9.34',
    authority: 'Local Council',
    description:
      'Issued by the local council under Section 9.34 of the Environmental Planning & Assessment Act 1979. This order requires the building owner to bring the building into compliance with specific fire safety standards. The order will specify the fire safety measures that must be installed, upgraded, or repaired, and the timeframe for completion.',
    triggers: [
      'Building identified as having inadequate fire safety measures during council inspection',
      'Complaint received regarding fire safety deficiencies in the building',
      'Failure to lodge an Annual Fire Safety Statement (AFSS) within the required timeframe',
      'AFSS lodged with unresolved critical deficiencies or non-compliant essential measures',
      'Change of use or unauthorised building works affecting fire safety compliance',
    ],
  },
  {
    title: 'Fire Safety Order — Section 9.35',
    authority: 'Fire & Rescue NSW',
    description:
      'Issued by the Commissioner of Fire & Rescue NSW under Section 9.35 of the EP&A Act. This order is typically issued following a fire safety inspection by FRNSW officers and requires the building owner to address identified fire safety hazards. FRNSW orders often carry more urgency and may require immediate action for life-safety critical deficiencies.',
    triggers: [
      'Fire & Rescue NSW inspection identifies serious fire safety hazards or life-safety risks',
      'Post-incident inspection reveals fire protection system failures or deficiencies',
      'FRNSW identifies non-compliance during routine station-area familiarisation inspections',
      'Referral from council or other authority regarding fire safety concerns',
      'Building identified as high-risk through FRNSW\'s risk-based inspection program',
    ],
  },
  {
    title: 'Emergency Order — Section 9.36',
    authority: 'Council or Fire & Rescue NSW',
    description:
      'An emergency order under Section 9.36 can be issued when there is an imminent danger to life or property. This order can require immediate evacuation, restriction of use, or emergency rectification works. Emergency orders bypass normal timeframe provisions and require immediate compliance.',
    triggers: [
      'Imminent danger to life from non-functioning fire detection or suppression systems',
      'Complete failure of fire egress pathways (blocked exits, non-functional emergency lighting)',
      'Structural fire damage compromising building stability or compartmentation',
      'Fire safety systems rendered inoperable by water damage, vandalism, or system failure',
      'Overcrowding or use inconsistent with approved fire safety provisions creating immediate risk',
    ],
  },
]

const upgradeServices = [
  {
    title: 'Fire Detection & Alarm Upgrades',
    description:
      'Upgrade from conventional to addressable fire detection systems, install aspirating smoke detection (ASD/VESDA) in sensitive areas, add manual call points to unprotected zones, and integrate with building management systems. Includes fire indicator panel (FIP) replacement and zone reconfiguration.',
    standards: ['AS 1670.1', 'AS 1670.4'],
  },
  {
    title: 'Sprinkler System Installation & Upgrades',
    description:
      'Retrofit sprinkler installations in buildings that were previously unprotected, upgrade existing systems to current AS 2118 requirements, extend coverage to renovated areas, and upgrade pump sets and water supply arrangements to meet current flow and pressure demands.',
    standards: ['AS 2118.1', 'AS 2941'],
  },
  {
    title: 'Emergency & Exit Lighting Upgrades',
    description:
      'Replace ageing fluorescent emergency luminaires with LED systems, install illuminated exit signs where missing, extend emergency lighting to previously uncovered evacuation routes, and install central battery or central monitoring systems for simplified compliance testing.',
    standards: ['AS 2293.1', 'AS 2293.3'],
  },
  {
    title: 'Fire Door Remediation Programs',
    description:
      'Comprehensive fire door survey, replacement of non-compliant or damaged fire doors, installation of self-closing devices, smoke seals, and appropriate hardware. Digital tagging and tracking of every fire door for ongoing maintenance compliance.',
    standards: ['AS 1905.1', 'AS 1530.4'],
  },
  {
    title: 'Passive Fire Protection Remediation',
    description:
      'Survey and rectification of failed or missing penetration seals, installation of fire collars on PVC pipes, fire-rated wrap on combustible services, cavity barrier installation, and fire/smoke damper remediation in HVAC ductwork.',
    standards: ['AS 4072.1', 'AS 1530.4'],
  },
  {
    title: 'Hydrant & Hose Reel Upgrades',
    description:
      'Upgrade hydrant systems to current AS 2419.1 requirements, install booster assemblies, replace non-compliant valves and fittings, extend hose reel coverage, and upgrade signage and block plans to current Fire & Rescue NSW requirements.',
    standards: ['AS 2419.1', 'AS 2441'],
  },
  {
    title: 'Smoke Management & Pressurisation',
    description:
      'Design and installation of stairwell pressurisation systems, zone smoke control modifications, smoke exhaust upgrades, and natural ventilation enhancements. Includes commissioning and air velocity testing to verify performance criteria.',
    standards: ['AS 1668.1', 'BCA E2.2b'],
  },
  {
    title: 'Egress & Signage Improvements',
    description:
      'Assessment and rectification of evacuation pathways including door hardware upgrades, panic bar installation, path-of-travel marking, photoluminescent signage, and egress width compliance. Ensures all exits meet BCA/NCC requirements for the building classification.',
    standards: ['BCA/NCC D1', 'AS 2293.1'],
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Order Review & Interpretation',
    description:
      'We review the Fire Safety Order in detail, interpreting the specific requirements, timeframes, and compliance obligations. We liaise with the issuing authority (council or FRNSW) to clarify any ambiguities and establish the scope of required works.',
  },
  {
    step: '02',
    title: 'Comprehensive Fire Safety Audit',
    description:
      'Our C10-licensed engineers conduct a thorough audit of the building\'s existing fire safety systems to determine the full scope of works required — not just the items specified in the order, but any additional deficiencies that should be addressed concurrently.',
  },
  {
    step: '03',
    title: 'Scope of Works & Cost Estimate',
    description:
      'We prepare a detailed scope of works document with itemised costs, prioritised staging (if applicable), and a proposed program aligned with the order\'s compliance deadline. This document serves as your roadmap and budget reference.',
  },
  {
    step: '04',
    title: 'Authority Liaison & Timeframe Negotiation',
    description:
      'Where necessary, we liaise with council or FRNSW on your behalf to negotiate reasonable timeframes, propose staged compliance programs for extensive works, and provide progress updates to demonstrate good-faith compliance efforts.',
  },
  {
    step: '05',
    title: 'Design, Procurement & Installation',
    description:
      'Our team designs, procures, and installs all required fire safety upgrades using C10-licensed contractors. All works are performed in accordance with the relevant Australian Standards and BCA/NCC requirements.',
  },
  {
    step: '06',
    title: 'Commissioning & Certification',
    description:
      'All upgraded systems are commissioned, tested, and certified. We prepare comprehensive compliance documentation including test certificates, as-built drawings, and a compliance letter addressed to the issuing authority confirming all order requirements have been satisfied.',
  },
  {
    step: '07',
    title: 'Fire Safety Schedule Update',
    description:
      'We update (or create) the building\'s fire safety schedule to reflect all newly installed or upgraded essential fire safety measures, ensuring alignment between the physical systems and the documented schedule for future AFSS compliance.',
  },
  {
    step: '08',
    title: 'Order Closure & Ongoing Compliance',
    description:
      'We submit all compliance documentation to the issuing authority and coordinate the formal closure of the Fire Safety Order. We then transition the building into our ongoing maintenance and AFSS program to ensure sustained compliance.',
  },
]

export default function FireSafetyOrdersPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-smoke-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
              Fire Safety Order Compliance
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-navy-DEFAULT mb-6 leading-tight">
              Fire Safety Order{' '}
              <span className="gradient-text">Upgrades</span>
            </h1>
            <p className="text-xl text-smoke-600 leading-relaxed">
              Received a Fire Safety Order from your local council or Fire &amp; Rescue NSW?
              We provide complete end-to-end compliance — from order interpretation and audit
              through to design, installation, certification, and formal order closure.
            </p>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="relative py-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ember-dark via-fire-700 to-ember-dark" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-heading font-semibold text-sm">
                  Fire Safety Orders Have Strict Compliance Deadlines
                </p>
                <p className="text-white/70 text-xs">
                  Non-compliance can result in fines up to $110,000 (individuals) or $220,000 (corporations), plus ongoing daily penalties.
                </p>
              </div>
            </div>
            <Link href="/contact" className="flex-shrink-0 px-5 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg border border-white/20 transition-colors">
              Get Urgent Assistance
            </Link>
          </div>
        </div>
      </section>

      {/* Types of Fire Safety Orders */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
                Understanding Your Order
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-DEFAULT mb-6">
                Types of Fire Safety{' '}
                <span className="gradient-text">Orders</span>
              </h2>
              <p className="text-lg text-smoke-600">
                Fire Safety Orders are issued under the Environmental Planning &amp; Assessment
                Act 1979. Understanding which type of order you have received is the first step
                toward an effective compliance strategy.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {orderTypes.map((order, index) => (
              <ScrollReveal key={order.title} delay={index * 0.1}>
                <div className="card p-8 md:p-10">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-fire-500/10 text-fire-600 text-xs font-semibold border border-fire-500/15">
                          {order.authority}
                        </span>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy-DEFAULT mb-4">
                        {order.title}
                      </h3>
                      <p className="text-smoke-600 leading-relaxed">
                        {order.description}
                      </p>
                    </div>
                    <div className="lg:w-96 flex-shrink-0">
                      <h4 className="text-sm font-heading font-semibold text-fire-500 uppercase tracking-wider mb-4">
                        Common Triggers
                      </h4>
                      <ul className="space-y-3">
                        {order.triggers.map((trigger, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-smoke-600">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-fire-500 flex-shrink-0 mt-0.5">
                              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                              <path d="M12 9v4"/>
                              <path d="M12 17h.01"/>
                            </svg>
                            {trigger}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our FSO Compliance Process */}
      <section className="py-24 bg-smoke-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
                Our Process
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-DEFAULT mb-6">
                From Order to{' '}
                <span className="gradient-text">Compliance</span>
              </h2>
              <p className="text-lg text-smoke-600">
                Our structured 8-step process takes you from receiving a Fire Safety Order
                to full compliance and formal order closure — with expert guidance at every stage.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 0.08}>
                <div className="card p-8 h-full group">
                  <span className="text-3xl font-heading font-bold text-fire-600/30 group-hover:text-fire-600/50 transition-colors">
                    {item.step}
                  </span>
                  <h3 className="text-base font-heading font-semibold text-navy-DEFAULT mt-3 mb-3 group-hover:text-fire-600 transition-colors">
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

      {/* Upgrade Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
                Upgrade Capabilities
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-DEFAULT mb-6">
                Fire Safety{' '}
                <span className="gradient-text">Upgrade Services</span>
              </h2>
              <p className="text-lg text-smoke-600">
                We deliver the full spectrum of fire safety upgrade works required to satisfy
                Fire Safety Orders — from individual system remediation to complete building-wide
                fire protection overhauls.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {upgradeServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 0.08}>
                <div className="card p-8 h-full group">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-lg font-heading font-semibold text-navy-DEFAULT group-hover:text-fire-600 transition-colors">
                      {service.title}
                    </h3>
                    <div className="flex gap-1 flex-shrink-0">
                      {service.standards.map((std) => (
                        <span
                          key={std}
                          className="text-[10px] px-2 py-0.5 rounded-full bg-fire-500/10 text-fire-600 border border-fire-500/15 font-mono whitespace-nowrap"
                        >
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-smoke-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Penalties Section */}
      <section className="py-24 bg-smoke-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
                  Consequences of Non-Compliance
                </span>
                <h2 className="text-4xl font-heading font-bold text-navy-DEFAULT mb-6">
                  Why You Cannot Ignore a{' '}
                  <span className="gradient-text">Fire Safety Order</span>
                </h2>
                <div className="space-y-4 text-smoke-600 leading-relaxed">
                  <p>
                    Fire Safety Orders are not advisory — they are legally enforceable instruments.
                    Failure to comply within the specified timeframe triggers escalating consequences
                    that can have severe financial, legal, and operational impacts on building owners.
                  </p>
                  <p>
                    Beyond financial penalties, non-compliance significantly increases your personal
                    and corporate liability in the event of a fire incident. If a fire occurs in a
                    building with an outstanding Fire Safety Order, the owner&apos;s duty-of-care
                    obligations are considered to have been clearly breached.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="space-y-4">
                {[
                  {
                    title: 'Monetary Penalties',
                    description: 'Fines of up to $110,000 for individuals and $220,000 for corporations, with additional daily penalties for ongoing non-compliance.',
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                      </svg>
                    ),
                  },
                  {
                    title: 'Prohibition & Closure Orders',
                    description: 'The issuing authority may prohibit use of the building or specific areas until compliance is achieved, directly impacting tenants and revenue.',
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                      </svg>
                    ),
                  },
                  {
                    title: 'Criminal Prosecution',
                    description: 'In serious cases, persistent non-compliance can result in criminal proceedings against building owners, directors, and responsible persons.',
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    ),
                  },
                  {
                    title: 'Insurance Implications',
                    description: 'Outstanding Fire Safety Orders may void or limit building insurance coverage. Insurers can deny claims where known fire safety deficiencies existed at the time of loss.',
                    icon: (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/>
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <div key={item.title} className="card p-6 flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-fire-500/10 flex items-center justify-center text-fire-600 flex-shrink-0 group-hover:bg-fire-500/15 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-heading font-semibold text-navy-DEFAULT mb-1 group-hover:text-fire-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-smoke-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-heading font-bold text-navy-DEFAULT mb-6">
              Received a Fire Safety{' '}
              <span className="gradient-text">Order</span>?
            </h2>
            <p className="text-lg text-smoke-600 mb-8">
              Don&apos;t wait for penalties to escalate. Contact us immediately for expert
              guidance on your compliance obligations and a clear pathway to order closure.
              We respond to urgent Fire Safety Order enquiries within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-fire">
                <span>Get Urgent FSO Assistance</span>
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
