'use client'

import ScrollReveal from '../effects/ScrollReveal'

const reasons = [
  {
    number: '01',
    title: 'Fully Licensed & Certified',
    description:
      'Our technicians hold all required licences and certifications to perform fire safety work across New South Wales. We stay current with all regulatory changes and Australian Standards updates.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Comprehensive Reporting',
    description:
      'Every inspection generates detailed digital reports with photographic evidence, compliance status, and actionable recommendations. Full transparency for building owners and managers.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <path d="M14 2v6h6"/>
        <path d="M9 15l2 2 4-4"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Preventative Approach',
    description:
      'We don\'t just tick boxes. Our proactive maintenance programs identify potential issues before they become critical, saving you time and money while protecting lives.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: '24/7 Emergency Support',
    description:
      'Fire safety doesn\'t operate on business hours. Our team is available around the clock for urgent repairs, fault rectification, and critical system failures.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
]

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <ScrollReveal>
              <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
                Why Verex Fire Solutions
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-DEFAULT mb-6 leading-tight">
                Your Safety Is Our{' '}
                <span className="gradient-text">Priority</span>
              </h2>
              <p className="text-lg text-smoke-600 leading-relaxed mb-8">
                Verex Fire Solutions has built a reputation for reliability, thoroughness,
                and genuine commitment to protecting lives and property across the greater
                Sydney area.
              </p>
            </ScrollReveal>

            {/* Credential badges — only claim what can be verified */}
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap gap-3">
                {['Licensed Contractor', 'Fully Insured'].map((badge) => (
                  <div
                    key={badge}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-smoke-50 border border-smoke-200"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-fire-600">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    <span className="text-sm font-medium text-navy-DEFAULT">{badge}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right - Reasons cards */}
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <ScrollReveal key={reason.number} delay={index * 0.1} direction="left">
                <div className="card p-6 flex gap-5 group bg-white">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-fire-50 border border-fire-100 flex items-center justify-center text-fire-600 group-hover:bg-fire-100 transition-all duration-300">
                      {reason.icon}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-heading font-bold text-fire-400">
                        {reason.number}
                      </span>
                      <h3 className="text-lg font-heading font-semibold text-navy-DEFAULT group-hover:text-fire-600 transition-colors">
                        {reason.title}
                      </h3>
                    </div>
                    <p className="text-sm text-smoke-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
