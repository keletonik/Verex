'use client'

import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import EmberParticles from '@/components/effects/EmberParticles'
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

const milestones = [
  { year: '2009', title: 'Company Founded', description: 'Verex Fire Solutions established in Sydney with a mission to raise fire safety standards across NSW.' },
  { year: '2012', title: 'Expanded Services', description: 'Grew our service offerings to include comprehensive AFSS preparation and lodgement across greater Sydney.' },
  { year: '2015', title: 'Team Growth', description: 'Expanded our team of certified technicians and invested in state-of-the-art testing equipment.' },
  { year: '2018', title: '1,000 Properties Milestone', description: 'Reached the milestone of servicing over 1,000 commercial and residential properties.' },
  { year: '2021', title: 'Digital Transformation', description: 'Launched our digital reporting platform, providing clients with real-time access to inspection data and compliance status.' },
  { year: '2024', title: '2,500+ Properties', description: 'Now servicing over 2,500 properties across the Sydney metropolitan area with a team of 20+ specialists.' },
]

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Dedicated to{' '}
              <span className="gradient-text">Fire Safety Excellence</span>
            </h1>
            <p className="text-xl text-smoke-300 leading-relaxed">
              For over 15 years, Verex Fire Solutions has been at the forefront of fire safety
              services in Sydney. We combine deep technical expertise with genuine care for
              the communities we protect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-light" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="inline-block text-sm font-heading font-semibold text-fire-400 uppercase tracking-wider mb-4">
                  Our Story
                </span>
                <h2 className="text-4xl font-heading font-bold text-white mb-6">
                  Built on a Foundation of{' '}
                  <span className="gradient-text">Trust</span>
                </h2>
                <div className="space-y-4 text-smoke-300 leading-relaxed">
                  <p>
                    Verex Fire Solutions was founded with a clear vision: to provide fire safety
                    services that genuinely protect people and property, not just satisfy regulatory
                    checkboxes. Based in Breakfast Point, NSW, we&apos;ve grown from a small local
                    operation into one of Sydney&apos;s most trusted fire safety providers.
                  </p>
                  <p>
                    Our founder recognised that too many fire safety companies were cutting corners,
                    delivering inadequate inspections, and leaving building owners exposed to
                    significant risk. Verex was created to be different — a company where
                    thoroughness, integrity, and genuine expertise drive every interaction.
                  </p>
                  <p>
                    Today, our team of over 20 qualified technicians services more than 2,500
                    properties across the Sydney metropolitan area. We work with strata managers,
                    building owners, facilities managers, and property developers to ensure
                    complete fire safety compliance and peace of mind.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="glass-card p-8 space-y-6">
                <h3 className="text-2xl font-heading font-semibold text-white mb-6">
                  By the Numbers
                </h3>
                {[
                  { value: '15+', label: 'Years of Experience' },
                  { value: '2,500+', label: 'Properties Serviced' },
                  { value: '20+', label: 'Qualified Technicians' },
                  { value: '100%', label: 'Compliance Success Rate' },
                  { value: '10,000+', label: 'Inspections Completed' },
                  { value: '<1hr', label: 'Average Emergency Response' },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between py-3 border-b border-white/5 last:border-0">
                    <span className="text-smoke-400">{stat.label}</span>
                    <span className="text-2xl font-heading font-bold gradient-text">{stat.value}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-DEFAULT" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-heading font-semibold text-fire-400 uppercase tracking-wider mb-4">
                Our Values
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                What Drives{' '}
                <span className="gradient-text">Us</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="glass-card p-8 text-center h-full group">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-fire-500/10 flex items-center justify-center text-fire-400 mb-6 group-hover:bg-fire-500/20 group-hover:scale-110 transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-fire-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-smoke-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-light" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-heading font-semibold text-fire-400 uppercase tracking-wider mb-4">
                Our Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
                Key{' '}
                <span className="gradient-text">Milestones</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-fire-500/50 via-fire-500/20 to-transparent" />

            <div className="space-y-12">
              {milestones.map((milestone, i) => (
                <ScrollReveal key={milestone.year} delay={i * 0.1} direction={i % 2 === 0 ? 'right' : 'left'}>
                  <div className={`relative flex items-start gap-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-1 pl-16 md:pl-0">
                      <div className="glass-card p-6">
                        <span className="text-sm font-heading font-bold text-fire-500">{milestone.year}</span>
                        <h3 className="text-lg font-heading font-semibold text-white mt-1 mb-2">{milestone.title}</h3>
                        <p className="text-sm text-smoke-400 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-fire-500 mt-8 shadow-lg shadow-fire-500/50" />
                    <div className="hidden md:block flex-1" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-DEFAULT" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-fire-500/5 blur-[150px]" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Ready to Work with a Team That{' '}
              <span className="gradient-text">Truly Cares</span>?
            </h2>
            <p className="text-lg text-smoke-300 mb-8">
              Get in touch today to discuss your fire safety needs. We&apos;re here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-fire">
                <span>Contact Us Today</span>
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
