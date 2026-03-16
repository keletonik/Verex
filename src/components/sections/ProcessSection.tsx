'use client'

import ScrollReveal from '../effects/ScrollReveal'

const steps = [
  {
    step: 1,
    title: 'Initial Consultation',
    description:
      'We discuss your property, its fire safety systems, and compliance requirements. Our team assesses your current situation and identifies priorities.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    step: 2,
    title: 'Site Assessment',
    description:
      'Our qualified technicians conduct a thorough on-site inspection of all fire safety measures, documenting existing systems and assessing compliance status.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8"/>
        <path d="M21 21l-4.35-4.35"/>
      </svg>
    ),
  },
  {
    step: 3,
    title: 'Testing & Maintenance',
    description:
      'We perform all required testing and maintenance in accordance with Australian Standards. Every piece of equipment is thoroughly inspected, tested, and serviced.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    step: 4,
    title: 'Reporting & Certification',
    description:
      'Detailed reports are generated with photographic evidence and compliance assessments. We prepare and lodge all necessary documentation, including AFSS where required.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4"/>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

export default function ProcessSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-smoke-50">
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-DEFAULT mb-6">
              How We Keep You{' '}
              <span className="gradient-text">Compliant</span>
            </h2>
            <p className="text-lg text-smoke-600 leading-relaxed">
              A structured, transparent approach to fire safety that ensures nothing
              is overlooked and your property remains fully compliant.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <ScrollReveal key={step.step} delay={index * 0.1}>
              <div className="card p-8 bg-white h-full group relative">
                {/* Step number */}
                <div className="absolute top-6 right-6 text-5xl font-heading font-bold text-smoke-100 group-hover:text-fire-50 transition-colors">
                  {step.step}
                </div>

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-fire-50 border border-fire-100 flex items-center justify-center text-fire-600 mb-6 group-hover:bg-fire-100 transition-colors">
                    {step.icon}
                  </div>

                  <span className="text-xs font-heading text-fire-600 uppercase tracking-wider">
                    Step {step.step}
                  </span>
                  <h3 className="text-lg font-heading font-semibold text-navy-DEFAULT mt-1 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-smoke-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector arrow (not on last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-fire-300">
                      <path d="M9 18l6-6-6-6"/>
                    </svg>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
