'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '../effects/ScrollReveal'

const testimonials = [
  {
    name: 'David Chen',
    role: 'Strata Manager',
    company: 'Metro Strata Management',
    quote:
      'Verex Fire Solutions has been managing the fire safety compliance for our portfolio of 45 strata buildings for over three years. Their attention to detail, comprehensive reporting, and proactive approach to maintenance has been outstanding. They make compliance effortless.',
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'Facilities Director',
    company: 'Harbour Commercial Properties',
    quote:
      'We switched to Verex after experiencing inconsistent service from our previous provider. The difference has been remarkable. Their technicians are professional, thorough, and always on time. The digital reports are incredibly detailed and make our job so much easier.',
    rating: 5,
  },
  {
    name: 'James Patterson',
    role: 'Building Owner',
    company: 'Patterson Holdings',
    quote:
      'As a property owner, fire safety compliance can be overwhelming. Verex took the stress away completely. They handle everything from inspections to AFSS lodgement, and I have complete peace of mind knowing my tenants are protected and my buildings are fully compliant.',
    rating: 5,
  },
  {
    name: 'Lisa Nguyen',
    role: 'Operations Manager',
    company: 'Sydney Health Group',
    quote:
      'In healthcare, fire safety is absolutely critical. Verex understands our unique requirements and works around our schedules to minimise disruption. Their emergency response time is incredible — they had a technician on-site within the hour when we had an alarm fault.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-navy-DEFAULT" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-fire-500/5 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-heading font-semibold text-fire-400 uppercase tracking-wider mb-4">
              Client Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Trusted by Property{' '}
              <span className="gradient-text">Professionals</span>
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            {/* Main testimonial */}
            <div className="glass-card p-8 md:p-12 mb-8 relative overflow-hidden">
              {/* Quote mark */}
              <div className="absolute top-6 right-8 text-8xl font-serif text-fire-500/10 leading-none">
                &ldquo;
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[active].rating)].map((_, i) => (
                      <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-fire-400">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>

                  <blockquote className="text-lg md:text-xl text-smoke-200 leading-relaxed mb-8 italic">
                    &ldquo;{testimonials[active].quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fire-500 to-ember-DEFAULT flex items-center justify-center text-white font-heading font-bold text-lg">
                      {testimonials[active].name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-white">
                        {testimonials[active].name}
                      </div>
                      <div className="text-sm text-smoke-400">
                        {testimonials[active].role}, {testimonials[active].company}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === active
                      ? 'bg-fire-500 w-8'
                      : 'bg-smoke-600 hover:bg-smoke-500'
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
