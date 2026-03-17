'use client'

import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import ScrollReveal from '@/components/effects/ScrollReveal'
import Link from 'next/link'

const resources = [
  {
    category: 'Compliance Guide',
    title: 'The Complete Guide to AFSS for Sydney Building Owners',
    excerpt:
      'Everything you need to know about Annual Fire Safety Statements in NSW — from understanding your obligations under the EP&A Regulation 2021 to the step-by-step process of preparing and lodging your AFSS with council and Fire & Rescue NSW.',
    featured: true,
  },
  {
    category: 'Regulatory Update',
    title: 'AS 1851-2012 is Mandatory in NSW: A 5-Step Preparation Plan',
    excerpt:
      'The NSW Government is adopting AS 1851-2012 as the mandatory standard for routine service of fire protection systems. Here\'s what building owners need to do now to ensure their properties are compliant before the deadline.',
    featured: true,
  },
  {
    category: 'Fire Safety Tips',
    title: 'Top 5 Fire Safety Risks in Commercial Kitchens',
    excerpt:
      'Commercial kitchens present unique fire safety challenges. From grease buildup to electrical hazards, learn about the most common risks and the preventative measures every restaurant and cafe owner should implement.',
    featured: false,
  },
  {
    category: 'Strata Management',
    title: 'Fire Safety Compliance for Strata Buildings: A Manager\'s Guide',
    excerpt:
      'Managing fire safety compliance across a strata scheme can be complex. This guide covers the key responsibilities of strata committees, common compliance pitfalls, and how to streamline your fire safety management.',
    featured: false,
  },
  {
    category: 'Emerging Risks',
    title: 'Lithium-Ion Battery Fire Safety in Strata Car Parks',
    excerpt:
      'With the rise of electric vehicles and e-bikes, lithium-ion battery fires are becoming an increasing concern for strata buildings. Learn about the risks, prevention strategies, and the latest safety recommendations for managing this emerging hazard.',
    featured: false,
  },
  {
    category: 'Maintenance Tips',
    title: 'Why Regular Fire Door Maintenance Saves Lives and Money',
    excerpt:
      'Fire doors are your building\'s silent protectors, but only when properly maintained. Discover the most common fire door deficiencies, the regulatory requirements, and why a proactive maintenance program is essential.',
    featured: false,
  },
  {
    category: 'Technology',
    title: 'How Digital Compliance Portals Are Transforming Fire Safety Management',
    excerpt:
      'The days of paper-based fire safety records are numbered. Explore how digital compliance platforms are giving building owners and managers unprecedented visibility, control, and peace of mind over their fire safety obligations.',
    featured: false,
  },
  {
    category: 'Building Safety',
    title: 'Emergency Lighting: LED Upgrades That Pay for Themselves',
    excerpt:
      'Still running fluorescent emergency lighting? LED upgrades offer significant energy savings, improved reliability, and reduced maintenance costs. Here\'s how to calculate the ROI and plan your upgrade.',
    featured: false,
  },
]

const downloadableResources = [
  {
    title: 'Pre-Audit Checklist for Building Owners',
    description: 'A comprehensive checklist to help you prepare for your next fire safety inspection. Covers all essential fire safety measures.',
    type: 'PDF Checklist',
  },
  {
    title: 'Annual Fire Safety Planning Calendar',
    description: 'A 12-month planning calendar with key dates, inspection schedules, and compliance milestones for NSW building owners.',
    type: 'PDF Calendar',
  },
  {
    title: 'AFSS Compliance Quick Reference Card',
    description: 'A pocket-sized reference card summarising the key requirements, deadlines, and contacts for AFSS compliance in NSW.',
    type: 'PDF Reference',
  },
  {
    title: 'Fire Safety Equipment Maintenance Schedule Template',
    description: 'A customisable template for tracking the maintenance schedule of all fire safety equipment in your building.',
    type: 'Excel Template',
  },
]

export default function ResourcesPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-smoke-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
              Resource Centre
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-navy-DEFAULT mb-6 leading-tight">
              Fire Safety{' '}
              <span className="gradient-text">Resource Centre</span>
            </h1>
            <p className="text-xl text-smoke-600 leading-relaxed">
              Expert guides, regulatory insights, and practical resources on fire safety
              compliance. Request any guide below and our team will send it through or
              discuss the topic with you directly.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-8">
              Featured Guides
            </span>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {resources.filter(a => a.featured).map((resource, i) => (
              <ScrollReveal key={resource.title} delay={i * 0.1}>
                <Link
                  href="/contact"
                  className="card p-8 h-full group block"
                >
                  <div className="mb-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-fire-600/10 text-fire-600 font-medium">
                      {resource.category}
                    </span>
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-navy-DEFAULT mb-4 group-hover:text-fire-600 transition-colors">
                    {resource.title}
                  </h2>
                  <p className="text-sm text-smoke-600 leading-relaxed mb-6">
                    {resource.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-fire-600 font-medium group-hover:gap-2 transition-all">
                    Request This Guide
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* All Resources */}
          <ScrollReveal>
            <h2 className="text-2xl font-heading font-bold text-navy-DEFAULT mb-8">
              All Available Guides
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.filter(a => !a.featured).map((resource, i) => (
              <ScrollReveal key={resource.title} delay={i * 0.05}>
                <Link href="/contact" className="card p-6 h-full group block">
                  <div className="mb-3">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-fire-600/10 text-fire-600 font-medium">
                      {resource.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-navy-DEFAULT mb-2 group-hover:text-fire-600 transition-colors leading-snug">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-smoke-600 leading-relaxed mb-4 line-clamp-3">
                    {resource.excerpt}
                  </p>
                  <span className="text-sm text-fire-600 font-medium">
                    Enquire About This Guide &rarr;
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-24 bg-smoke-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
                Request Resources
              </span>
              <h2 className="text-4xl font-heading font-bold text-navy-DEFAULT mb-6">
                Practical{' '}
                <span className="gradient-text">Resources</span>
              </h2>
              <p className="text-lg text-smoke-600">
                Request our checklists, templates, and guides to help you manage your
                fire safety compliance more effectively. Get in touch and we will send
                them through.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {downloadableResources.map((resource, i) => (
              <ScrollReveal key={resource.title} delay={i * 0.1}>
                <Link href="/contact" className="card p-8 flex items-start gap-6 group block">
                  <div className="w-14 h-14 rounded-xl bg-fire-600/10 flex items-center justify-center text-fire-600 flex-shrink-0 group-hover:bg-fire-600/20 group-hover:scale-110 transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                      <polyline points="10 9 9 9 8 9"/>
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-heading font-semibold text-navy-DEFAULT group-hover:text-fire-600 transition-colors">
                        {resource.title}
                      </h3>
                    </div>
                    <p className="text-sm text-smoke-600 leading-relaxed mb-3">
                      {resource.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-fire-600 px-3 py-1 rounded-full bg-fire-600/10">
                      Request {resource.type}
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-center text-sm text-smoke-600 mt-8">
              Resources are provided for general guidance purposes. Always consult with a
              qualified fire safety practitioner for advice specific to your property.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-heading font-bold text-navy-DEFAULT mb-6">
              Need Expert{' '}
              <span className="gradient-text">Guidance</span>?
            </h2>
            <p className="text-lg text-smoke-600 mb-8">
              Fire safety regulations are constantly evolving. Need expert guidance for your
              specific situation? Our team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-fire">
                <span>Speak to a Fire Safety Expert</span>
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
