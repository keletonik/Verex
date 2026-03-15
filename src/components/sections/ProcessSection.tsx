'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '../effects/ScrollReveal'

const steps = [
  {
    step: 1,
    title: 'Initial Consultation',
    description:
      'We begin with a comprehensive discussion about your property, its fire safety systems, and compliance requirements. Our team assesses your current situation and identifies priorities.',
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
      'Our qualified technicians conduct a thorough on-site inspection of all fire safety measures, documenting existing systems, identifying deficiencies, and assessing compliance status.',
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
      'We perform all required testing and maintenance in accordance with Australian Standards (AS 1851). Every piece of equipment is thoroughly inspected, tested, and serviced.',
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
      'Detailed reports are generated with photographic evidence, compliance assessments, and recommendations. We prepare and lodge all necessary documentation, including AFSS where required.',
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
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-navy-light" />
      <div className="absolute inset-0 grid-pattern" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block text-sm font-heading font-semibold text-fire-400 uppercase tracking-wider mb-4">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              How We Keep You{' '}
              <span className="gradient-text">Compliant</span>
            </h2>
            <p className="text-lg text-smoke-400 leading-relaxed">
              A structured, transparent approach to fire safety that ensures nothing
              is overlooked and your property remains fully compliant.
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-fire-500/50 via-fire-500/20 to-transparent hidden md:block" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <ScrollReveal
                key={step.step}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 0.15}
              >
                <div
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-8 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content card */}
                  <div className="flex-1 lg:w-1/2">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass-card p-8 relative group"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-fire-500/10 flex items-center justify-center text-fire-400 group-hover:bg-fire-500/20 transition-colors">
                          {step.icon}
                        </div>
                        <div>
                          <span className="text-xs font-heading text-fire-500 uppercase tracking-wider">
                            Step {step.step}
                          </span>
                          <h3 className="text-xl font-heading font-semibold text-white">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-sm text-smoke-400 leading-relaxed pl-16">
                        {step.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Centre dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-fire-500 shadow-lg shadow-fire-500/50 z-10">
                    <div className="w-full h-full rounded-full bg-fire-500 animate-ping opacity-20" />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block flex-1 lg:w-1/2" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
