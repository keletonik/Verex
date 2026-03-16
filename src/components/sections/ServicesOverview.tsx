'use client'

import Link from 'next/link'
import ScrollReveal from '../effects/ScrollReveal'

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
        <path d="M16 17l5-5-5-5"/>
        <path d="M21 12H9"/>
      </svg>
    ),
    title: 'Fire Safety Inspections',
    description:
      'Thorough inspections of all fire safety measures to ensure compliance with Australian Standards and the Environmental Planning & Assessment Act 1979.',
    features: ['AS 1851 Compliance', 'Detailed Reports', 'Risk Assessment'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: 'Essential Fire Safety Maintenance',
    description:
      'Regular testing and maintenance of all essential fire safety measures including fire alarms, sprinklers, extinguishers, hydrants, and emergency systems.',
    features: ['Scheduled Programs', 'All Equipment Types', 'Certified Technicians'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <path d="M14 2v6h6"/>
        <path d="M16 13H8"/>
        <path d="M16 17H8"/>
        <path d="M10 9H8"/>
      </svg>
    ),
    title: 'Annual Fire Safety Statements',
    description:
      'Preparation and submission of Annual Fire Safety Statements (AFSS) as required under the Environmental Planning & Assessment Regulation 2021.',
    features: ['Full Compliance', 'Council Lodgement', 'Record Keeping'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: 'Emergency & Exit Lighting',
    description:
      'Installation, testing, and maintenance of emergency and exit lighting systems to AS 2293. Six-monthly discharge testing and annual compliance inspections.',
    features: ['AS 2293 Compliant', 'Discharge Testing', 'LED Upgrades'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
      </svg>
    ),
    title: 'Fire Door Inspection & Maintenance',
    description:
      'Comprehensive fire door surveys, inspections, and maintenance programs. Ensuring all fire doors meet AS 1905.1 and maintain their fire resistance levels.',
    features: ['AS 1905.1 Compliance', 'Gap & Seal Checks', 'Hardware Testing'],
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Fire Safety Audits & Consulting',
    description:
      'Expert fire safety audits and consulting services to identify risks, develop fire safety strategies, and implement comprehensive protection plans for your property.',
    features: ['Risk Analysis', 'Strategy Development', 'Ongoing Support'],
  },
]

export default function ServicesOverview() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-navy-light" />
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-heading font-semibold text-fire-400 uppercase tracking-wider mb-4">
              What We Do
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Comprehensive Fire Safety{' '}
              <span className="gradient-text">Services</span>
            </h2>
            <p className="text-lg text-smoke-400 leading-relaxed">
              From routine inspections to emergency response, we deliver end-to-end fire safety
              solutions that keep your property compliant and your people protected.
            </p>
          </div>
        </ScrollReveal>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <div className="glass-card p-8 h-full group">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-fire-500/20 to-ember-DEFAULT/10 flex items-center justify-center text-fire-400 mb-6 group-hover:scale-110 group-hover:from-fire-500/30 group-hover:to-ember-DEFAULT/20 transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-fire-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-smoke-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-3 py-1 rounded-full bg-fire-500/10 text-fire-300 border border-fire-500/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-medium text-fire-400 hover:text-fire-300 transition-colors group/link"
                >
                  Learn More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="group-hover/link:translate-x-1 transition-transform"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline-fire">
              View All Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
