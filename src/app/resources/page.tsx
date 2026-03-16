'use client'

import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import EmberParticles from '@/components/effects/EmberParticles'
import ScrollReveal from '@/components/effects/ScrollReveal'
import { motion } from 'framer-motion'
import Link from 'next/link'

const articles = [
  {
    category: 'Compliance Guide',
    title: 'The Complete Guide to AFSS for Sydney Building Owners',
    excerpt:
      'Everything you need to know about Annual Fire Safety Statements in NSW — from understanding your obligations under the EP&A Regulation 2021 to the step-by-step process of preparing and lodging your AFSS with council and Fire & Rescue NSW.',
    readTime: '12 min read',
    date: '10 March 2026',
    featured: true,
  },
  {
    category: 'Regulatory Update',
    title: 'AS 1851-2012 is Mandatory in NSW: A 5-Step Preparation Plan',
    excerpt:
      'The NSW Government is adopting AS 1851-2012 as the mandatory standard for routine service of fire protection systems. Here\'s what building owners need to do now to ensure their properties are compliant before the deadline.',
    readTime: '8 min read',
    date: '5 March 2026',
    featured: true,
  },
  {
    category: 'Fire Safety Tips',
    title: 'Top 5 Fire Safety Risks in Commercial Kitchens',
    excerpt:
      'Commercial kitchens present unique fire safety challenges. From grease buildup to electrical hazards, learn about the most common risks and the preventative measures every restaurant and cafe owner should implement.',
    readTime: '6 min read',
    date: '28 February 2026',
    featured: false,
  },
  {
    category: 'Strata Management',
    title: 'Fire Safety Compliance for Strata Buildings: A Manager\'s Guide',
    excerpt:
      'Managing fire safety compliance across a strata scheme can be complex. This guide covers the key responsibilities of strata committees, common compliance pitfalls, and how to streamline your fire safety management.',
    readTime: '10 min read',
    date: '20 February 2026',
    featured: false,
  },
  {
    category: 'Emerging Risks',
    title: 'Lithium-Ion Battery Fire Safety in Strata Car Parks',
    excerpt:
      'With the rise of electric vehicles and e-bikes, lithium-ion battery fires are becoming an increasing concern for strata buildings. Learn about the risks, prevention strategies, and the latest safety recommendations for managing this emerging hazard.',
    readTime: '7 min read',
    date: '15 February 2026',
    featured: false,
  },
  {
    category: 'Maintenance Tips',
    title: 'Why Regular Fire Door Maintenance Saves Lives and Money',
    excerpt:
      'Fire doors are your building\'s silent protectors, but only when properly maintained. Discover the most common fire door deficiencies, the regulatory requirements, and why a proactive maintenance program is essential.',
    readTime: '5 min read',
    date: '8 February 2026',
    featured: false,
  },
  {
    category: 'Technology',
    title: 'How Digital Compliance Portals Are Transforming Fire Safety Management',
    excerpt:
      'The days of paper-based fire safety records are numbered. Explore how digital compliance platforms are giving building owners and managers unprecedented visibility, control, and peace of mind over their fire safety obligations.',
    readTime: '6 min read',
    date: '1 February 2026',
    featured: false,
  },
  {
    category: 'Building Safety',
    title: 'Emergency Lighting: LED Upgrades That Pay for Themselves',
    excerpt:
      'Still running fluorescent emergency lighting? LED upgrades offer significant energy savings, improved reliability, and reduced maintenance costs. Here\'s how to calculate the ROI and plan your upgrade.',
    readTime: '5 min read',
    date: '25 January 2026',
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
              Insights &amp; Resources
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              Fire Safety{' '}
              <span className="gradient-text">Knowledge Hub</span>
            </h1>
            <p className="text-xl text-smoke-300 leading-relaxed">
              Expert guides, regulatory updates, and practical resources to help you understand
              and manage your fire safety obligations with confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-light" />
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block text-sm font-heading font-semibold text-fire-400 uppercase tracking-wider mb-8">
              Featured Articles
            </span>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {articles.filter(a => a.featured).map((article, i) => (
              <ScrollReveal key={article.title} delay={i * 0.1}>
                <Link
                  href="/contact"
                  className="glass-card p-8 h-full group border-fire-500/10 hover:border-fire-500/30 block"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-fire-500/10 text-fire-400 font-medium">
                      {article.category}
                    </span>
                    <span className="text-xs text-smoke-500">{article.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-heading font-bold text-white mb-4 group-hover:text-fire-400 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-smoke-400 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-smoke-500">{article.date}</span>
                    <span className="inline-flex items-center gap-1 text-sm text-fire-400 font-medium group-hover:gap-2 transition-all">
                      Enquire About This Topic
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* All Articles */}
          <ScrollReveal>
            <h2 className="text-2xl font-heading font-bold text-white mb-8">
              All Articles
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.filter(a => !a.featured).map((article, i) => (
              <ScrollReveal key={article.title} delay={i * 0.05}>
                <Link href="/contact" className="glass-card p-6 h-full group block">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-fire-500/10 text-fire-400 font-medium">
                      {article.category}
                    </span>
                    <span className="text-xs text-smoke-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-white mb-2 group-hover:text-fire-400 transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-smoke-400 leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs text-smoke-500">{article.date}</span>
                    <span className="text-sm text-fire-400 font-medium">Enquire &rarr;</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-DEFAULT" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-fire-500/5 blur-[150px]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block text-sm font-heading font-semibold text-fire-400 uppercase tracking-wider mb-4">
                Free Downloads
              </span>
              <h2 className="text-4xl font-heading font-bold text-white mb-6">
                Practical{' '}
                <span className="gradient-text">Resources</span>
              </h2>
              <p className="text-lg text-smoke-400">
                Request our free checklists, templates, and guides to help you manage your
                fire safety compliance more effectively.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {downloadableResources.map((resource, i) => (
              <ScrollReveal key={resource.title} delay={i * 0.1}>
                <Link href="/contact" className="glass-card p-8 flex items-start gap-6 group block">
                  <div className="w-14 h-14 rounded-xl bg-fire-500/10 flex items-center justify-center text-fire-400 flex-shrink-0 group-hover:bg-fire-500/20 group-hover:scale-110 transition-all">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-heading font-semibold text-white group-hover:text-fire-400 transition-colors">
                        {resource.title}
                      </h3>
                    </div>
                    <p className="text-sm text-smoke-400 leading-relaxed mb-3">
                      {resource.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-fire-400 px-3 py-1 rounded-full bg-fire-500/10">
                      Request {resource.type}
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-center text-sm text-smoke-500 mt-8">
              Resources are provided for general guidance purposes. Always consult with a
              qualified fire safety practitioner for advice specific to your property.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-navy-light" />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-heading font-bold text-white mb-6">
              Stay Informed on{' '}
              <span className="gradient-text">Regulatory Changes</span>
            </h2>
            <p className="text-lg text-smoke-300 mb-8">
              Fire safety regulations are constantly evolving. Need expert guidance for your
              specific situation? Our team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-fire">
                <span>Speak to a Fire Safety Expert</span>
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
