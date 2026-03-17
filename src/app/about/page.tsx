'use client'

import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import ScrollReveal from '@/components/effects/ScrollReveal'
import { motion } from 'framer-motion'
import Link from 'next/link'

const values = [
  {
    title: 'Safety First',
    description: 'Every decision we make is guided by our unwavering commitment to protecting lives. Safety is not just our business — it\'s our purpose.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    title: 'Integrity',
    description: 'We operate with complete transparency and honesty. Our reports reflect the true condition of your fire safety systems — no shortcuts, no compromises.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 6L9 17l-5-5"/>
      </svg>
    ),
  },
  {
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards in everything we do. Our technicians are continuously trained, and our processes are constantly refined.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    title: 'Reliability',
    description: 'When we commit to a schedule, we deliver. Our clients trust us because we consistently show up, perform, and follow through on every promise.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
]

const capabilities = [
  {
    title: 'Fire Safety Inspections',
    description: 'Comprehensive inspection of all essential fire safety measures including alarms, sprinklers, hydrants, extinguishers, and emergency lighting.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
      </svg>
    ),
  },
  {
    title: 'AFSS Preparation & Lodgement',
    description: 'Full management of your Annual Fire Safety Statement — from coordinating inspections to preparing and lodging the certified statement with council.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    title: 'System Testing & Maintenance',
    description: 'Routine and preventative maintenance of fire protection systems to ensure they perform reliably when it matters most.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    title: 'Defect Rectification',
    description: 'Identification, reporting, and rectification of fire safety defects to bring your building back into full compliance promptly.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/>
      </svg>
    ),
  },
  {
    title: 'Emergency & Exit Lighting',
    description: 'Testing, maintenance, and replacement of emergency and exit lighting to meet Australian Standard AS 2293 requirements.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    title: 'Compliance Consulting',
    description: 'Expert guidance on fire safety regulations, helping property owners and managers understand their obligations and achieve compliance.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
]

export default function AboutPage() {
  return (
    <main className="relative bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-navy-DEFAULT mb-6 leading-tight">
              Dedicated to{' '}
              <span className="gradient-text">Fire Safety Excellence</span>
            </h1>
            <p className="text-xl text-smoke-600 leading-relaxed">
              Verex Fire Solutions is a Sydney-based fire safety company committed to
              protecting lives and property. We combine deep technical expertise with genuine
              care for the communities we serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-24 bg-smoke-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
                  Our Story
                </span>
                <h2 className="text-4xl font-heading font-bold text-navy-DEFAULT mb-6">
                  Built on a Foundation of{' '}
                  <span className="gradient-text">Trust</span>
                </h2>
                <div className="space-y-4 text-smoke-600 leading-relaxed">
                  <p>
                    Verex Fire Solutions was founded with a clear vision: to provide fire safety
                    services that genuinely protect people and property, not just satisfy regulatory
                    checkboxes. Based in Breakfast Point, NSW, we&apos;ve grown from a small local
                    operation into a trusted fire safety provider serving the greater Sydney area.
                  </p>
                  <p>
                    Our founder recognised that too many fire safety companies were cutting corners,
                    delivering inadequate inspections, and leaving building owners exposed to
                    significant risk. Verex was created to be different — a company where
                    thoroughness, integrity, and genuine expertise drive every interaction.
                  </p>
                  <p>
                    Our team of qualified technicians works with strata managers,
                    building owners, facilities managers, and property developers to ensure
                    complete fire safety compliance and peace of mind.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="card p-8 bg-white space-y-6">
                <h3 className="text-2xl font-heading font-semibold text-navy-DEFAULT mb-2">
                  Credentials
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-smoke-50 border border-smoke-200">
                    <div className="w-12 h-12 rounded-xl bg-fire-600/10 flex items-center justify-center text-fire-600 flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-navy-DEFAULT">Licensed Contractor</p>
                      <p className="text-sm text-smoke-600">Licensed to perform fire safety work across NSW</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-smoke-50 border border-smoke-200">
                    <div className="w-12 h-12 rounded-xl bg-fire-600/10 flex items-center justify-center text-fire-600 flex-shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20 6L9 17l-5-5"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-navy-DEFAULT">Fully Insured</p>
                      <p className="text-sm text-smoke-600">Comprehensive public liability and professional indemnity insurance</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
                Our Values
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-DEFAULT mb-6">
                What Drives{' '}
                <span className="gradient-text">Us</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="card p-8 bg-white text-center h-full group">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-fire-600/10 flex items-center justify-center text-fire-600 mb-6 group-hover:bg-fire-600/20 group-hover:scale-110 transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-navy-DEFAULT mb-3 group-hover:text-fire-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-smoke-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Capabilities */}
      <section className="relative py-24 bg-smoke-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
                What We Do
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-DEFAULT mb-6">
                Our{' '}
                <span className="gradient-text">Service Capabilities</span>
              </h2>
              <p className="text-lg text-smoke-600">
                We provide end-to-end fire safety services for commercial, residential, and strata properties across greater Sydney.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={cap.title} delay={i * 0.1}>
                <div className="card p-8 bg-white h-full group">
                  <div className="w-12 h-12 rounded-xl bg-fire-600/10 flex items-center justify-center text-fire-600 mb-5 group-hover:bg-fire-600/20 group-hover:scale-110 transition-all duration-300">
                    {cap.icon}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-navy-DEFAULT mb-2 group-hover:text-fire-600 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-smoke-600 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-heading font-bold text-navy-DEFAULT mb-6">
              Ready to Work with a Team That{' '}
              <span className="gradient-text">Truly Cares</span>?
            </h2>
            <p className="text-lg text-smoke-600 mb-8">
              Get in touch today to discuss your fire safety needs. We&apos;re here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-fire">
                <span>Contact Us Today</span>
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
