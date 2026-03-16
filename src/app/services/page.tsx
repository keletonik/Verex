'use client'

import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import EmberParticles from '@/components/effects/EmberParticles'
import ScrollReveal from '@/components/effects/ScrollReveal'
import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    id: 'inspections',
    title: 'Fire Safety Inspections',
    subtitle: 'AS 1851 Compliance Testing',
    description:
      'Our qualified technicians perform comprehensive inspections of all fire safety measures in accordance with Australian Standard AS 1851. We methodically assess every component of your fire protection systems to ensure full regulatory compliance.',
    details: [
      'Complete fire safety system audits covering all essential safety measures',
      'Compliance assessment against AS 1851-2012 and the Environmental Planning & Assessment Regulation 2021',
      'Detailed photographic documentation of all fire safety equipment and their condition',
      'Identification of deficiencies with prioritised rectification recommendations',
      'Digital reporting with real-time access through our client compliance portal',
    ],
    standards: ['AS 1851-2012', 'EP&A Act 1979', 'BCA/NCC'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8"/>
        <path d="M21 21l-4.35-4.35"/>
        <path d="M11 8v6"/>
        <path d="M8 11h6"/>
      </svg>
    ),
  },
  {
    id: 'maintenance',
    title: 'Essential Fire Safety Maintenance',
    subtitle: 'Scheduled Testing & Servicing Programs',
    description:
      'We deliver comprehensive routine maintenance programs tailored to your property\'s specific fire safety systems. Our preventative approach ensures your equipment is always operational and compliant, minimising risk and avoiding costly emergency repairs.',
    details: [
      'Fire alarm and detection system testing, including smoke detectors, heat detectors, and manual call points',
      'Sprinkler system inspection, flow testing, and maintenance',
      'Fire extinguisher inspection, testing, pressure verification, and replacement scheduling',
      'Fire hydrant and hose reel pressure testing and maintenance',
      'Mechanical ventilation and smoke management system testing',
      'Fire pump inspection and performance testing',
    ],
    standards: ['AS 1851-2012', 'AS 2444', 'AS 1841'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    id: 'afss',
    title: 'Annual Fire Safety Statements (AFSS)',
    subtitle: 'Full Compliance & Council Lodgement',
    description:
      'We manage the entire AFSS process from inspection through to council lodgement. Our team ensures that every essential fire safety measure listed on your fire safety schedule has been assessed, maintained, and is performing to the required standard.',
    details: [
      'Comprehensive assessment of all essential fire safety measures listed on the fire safety schedule',
      'Coordination of all required testing and inspections across multiple disciplines',
      'Preparation of the Annual Fire Safety Statement in accordance with the EP&A Regulation 2021',
      'Lodgement with the relevant council and Fire & Rescue NSW on your behalf',
      'Ongoing record-keeping and compliance tracking through our digital portal',
      'Proactive reminders and scheduling to ensure you never miss a deadline',
    ],
    standards: ['EP&A Regulation 2021', 'Clause 177', 'Schedule 5'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <path d="M14 2v6h6"/>
        <path d="M9 15l2 2 4-4"/>
      </svg>
    ),
  },
  {
    id: 'emergency-lighting',
    title: 'Emergency & Exit Lighting',
    subtitle: 'Installation, Testing & Maintenance',
    description:
      'Our emergency lighting services ensure your building\'s emergency and exit lighting systems meet all requirements under AS 2293. We perform regular testing, maintenance, and LED upgrade programs to keep your evacuation pathways safely illuminated.',
    details: [
      'Six-monthly discharge testing as required by AS 2293.2',
      'Annual inspection and compliance verification',
      'LED upgrade programs to reduce energy costs and improve reliability',
      'Battery replacement and charging system maintenance',
      'Emergency luminaire cleaning and lamp replacement',
      'Exit sign inspection, illumination testing, and replacement',
    ],
    standards: ['AS 2293.1', 'AS 2293.2', 'AS 2293.3'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 18h6"/>
        <path d="M10 22h4"/>
        <path d="M12 2v1"/>
        <path d="M12 7a4 4 0 014 4v3a1 1 0 01-1 1H9a1 1 0 01-1-1v-3a4 4 0 014-4z"/>
        <path d="M20 12h1"/>
        <path d="M3 12h1"/>
        <path d="M18.36 5.64l.71-.71"/>
        <path d="M4.93 5.64l-.71-.71"/>
      </svg>
    ),
  },
  {
    id: 'fire-doors',
    title: 'Fire Door Inspection & Maintenance',
    subtitle: 'AS 1905.1 Compliance Programs',
    description:
      'Fire doors are critical passive fire safety measures that compartmentalise your building to prevent the spread of fire and smoke. Our technicians conduct thorough inspections and maintenance programs to ensure every fire door maintains its rated fire resistance level.',
    details: [
      'Comprehensive fire door surveys and condition assessments',
      'Gap and seal integrity testing to ensure smoke and fire containment',
      'Hardware inspection including closers, latches, hinges, and signage',
      'Frame and leaf inspection for damage, warping, or deterioration',
      'Remediation and repair of identified deficiencies',
      'Digital tagging and tracking of every fire door in your building',
    ],
    standards: ['AS 1905.1', 'AS 1530.4', 'BCA/NCC'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
      </svg>
    ),
  },
  {
    id: 'hydrants',
    title: 'Hydrant & Hose Reel Testing',
    subtitle: 'Pressure Testing & Flow Verification',
    description:
      'Fire hydrants and hose reels are your building\'s first line of defence for occupants and responding fire crews. We conduct thorough pressure testing and flow verification to ensure these critical systems perform when needed most.',
    details: [
      'Static and dynamic pressure testing of fire hydrant systems',
      'Hose reel flow rate testing and nozzle verification',
      'Hydrant valve operation and condition assessment',
      'Booster assembly inspection and testing',
      'Hose condition inspection and replacement scheduling',
      'Block plan and signage verification',
    ],
    standards: ['AS 2419.1', 'AS 2441', 'AS 1851'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C12 2 4 10 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 10 12 2 12 2Z"/>
      </svg>
    ),
  },
  {
    id: 'consulting',
    title: 'Fire Safety Consulting & Audits',
    subtitle: 'Expert Risk Assessment & Strategy',
    description:
      'Our consulting services provide building owners and managers with expert guidance on fire safety strategy, risk management, and regulatory compliance. We help you understand your obligations and develop practical, cost-effective solutions.',
    details: [
      'Comprehensive fire safety audits and risk assessments',
      'Fire safety strategy development for new and existing buildings',
      'Regulatory compliance gap analysis and remediation planning',
      'Expert advice on the upcoming mandatory AS 1851-2012 adoption in NSW',
      'Fire safety upgrade feasibility studies and cost-benefit analysis',
      'Liaison with councils, certifiers, and Fire & Rescue NSW on your behalf',
    ],
    standards: ['EP&A Act 1979', 'BCA/NCC', 'AS 1851-2012'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    id: 'passive-fire',
    title: 'Passive Fire Protection',
    subtitle: 'Penetration Sealing & Compartmentalisation',
    description:
      'Passive fire protection systems are the silent guardians of your building — they work without activation to contain fire and smoke within compartments. Our services ensure these critical barriers maintain their integrity and fire resistance ratings.',
    details: [
      'Fire-rated wall and floor penetration sealing inspection and remediation',
      'Fire collar and wrap installation and inspection',
      'Fire-rated construction integrity surveys',
      'Damper inspection and testing',
      'Cavity barrier assessment',
      'Compliance certification and documentation',
    ],
    standards: ['AS 1530.4', 'AS 4072.1', 'BCA/NCC'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>
    ),
  },
]

export default function ServicesPage() {
  return (
    <main className="relative">
      <EmberParticles />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy-DEFAULT mesh-gradient" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-heading font-semibold text-fire-400 uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Comprehensive Fire Safety{' '}
              <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-xl text-smoke-300 leading-relaxed">
              From routine inspections to complex compliance programs, Verex Fire Solutions
              delivers end-to-end fire safety services that protect lives, safeguard property,
              and ensure your building meets every regulatory requirement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AS 1851 Alert Banner */}
      <section className="relative py-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ember-dark via-fire-700 to-ember-dark" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                  <path d="M12 9v4"/>
                  <path d="M12 17h.01"/>
                </svg>
              </div>
              <div>
                <p className="text-white font-heading font-semibold text-sm">
                  Important: AS 1851-2012 Mandatory Adoption in NSW
                </p>
                <p className="text-white/70 text-xs">
                  New regulations require compliance with AS 1851-2012 for all NSW buildings. Is your property prepared?
                </p>
              </div>
            </div>
            <Link href="/contact" className="flex-shrink-0 px-5 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-lg border border-white/20 transition-colors">
              Book a Compliance Review
            </Link>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-light" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <ScrollReveal key={service.id} delay={0.1}>
                <div
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-start ${
                    index % 2 === 1 ? 'lg:direction-rtl' : ''
                  }`}
                >
                  {/* Content side */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-fire-500/10 flex items-center justify-center text-fire-400">
                        {service.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-heading font-bold text-white">
                          {service.title}
                        </h2>
                        <p className="text-sm text-fire-400 font-medium">{service.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-smoke-300 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Standards tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.standards.map((standard) => (
                        <span
                          key={standard}
                          className="text-xs px-3 py-1 rounded-full bg-fire-500/10 text-fire-300 border border-fire-500/10 font-mono"
                        >
                          {standard}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium text-fire-400 hover:text-fire-300 transition-colors"
                    >
                      Request a Quote for {service.title}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </div>

                  {/* Details card */}
                  <div className={`glass-card p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-sm font-heading font-semibold text-fire-400 uppercase tracking-wider mb-4">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-3">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-smoke-300">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-fire-500 flex-shrink-0 mt-0.5">
                            <path d="M20 6L9 17l-5-5"/>
                          </svg>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Divider */}
                {index < services.length - 1 && (
                  <div className="mt-20 border-t border-white/5" />
                )}
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Portal Teaser */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-DEFAULT" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-fire-500/5 blur-[150px]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="glass-card p-10 md:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fire-500/10 border border-fire-500/20 text-xs font-medium text-fire-400 mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-fire-500 animate-pulse" />
                    Coming Soon
                  </span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                    Digital Client{' '}
                    <span className="gradient-text">Compliance Portal</span>
                  </h2>
                  <p className="text-smoke-300 leading-relaxed mb-6">
                    We&apos;re building a secure, cloud-based compliance platform that will give you
                    unprecedented transparency and control over your fire safety assets. Track
                    compliance status, access reports, and manage your fire safety schedule — all
                    from one dashboard.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Real-time compliance status for each property',
                      'Digital asset register of all fire safety measures',
                      'Historical service reports and certificates',
                      'Defect tracking and upcoming service schedules',
                      'Secure messaging with your account manager',
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-smoke-300">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-fire-500 flex-shrink-0">
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-fire">
                    <span>Register Your Interest</span>
                  </Link>
                </div>

                {/* Portal mockup */}
                <div className="relative">
                  <div className="glass-card p-6 border-fire-500/20">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-500/60" />
                      <span className="text-xs text-smoke-500 ml-2">portal.verexfire.com.au</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                        <span className="text-sm text-green-400">Compliance Status</span>
                        <span className="text-sm font-bold text-green-400">100% Compliant</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-lg bg-white/5">
                          <span className="text-xs text-smoke-500">Next Inspection</span>
                          <p className="text-sm font-semibold text-white">15 Apr 2026</p>
                        </div>
                        <div className="p-3 rounded-lg bg-white/5">
                          <span className="text-xs text-smoke-500">AFSS Due</span>
                          <p className="text-sm font-semibold text-white">30 Jun 2026</p>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5">
                        <span className="text-xs text-smoke-500">Equipment Tracked</span>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                            <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-fire-500 to-green-500" />
                          </div>
                          <span className="text-xs text-smoke-400">147/160</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-light" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Need a Tailored Fire Safety{' '}
              <span className="gradient-text">Solution</span>?
            </h2>
            <p className="text-lg text-smoke-300 mb-8">
              Every building is different. Contact us for a customised fire safety program
              designed specifically for your property&apos;s needs and compliance requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-fire">
                <span>Request a Free Quote</span>
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
