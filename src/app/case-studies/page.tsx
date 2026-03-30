'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

type Industry =
  | 'All'
  | 'Residential Strata'
  | 'Commercial High-Rise'
  | 'Industrial'
  | 'AFSS Rectification'

type ServiceType =
  | 'All'
  | 'AFSS Management'
  | 'Inspection & Testing'
  | 'System Installation'
  | 'Consulting & Audits'

interface CaseStudy {
  id: string
  category: Exclude<Industry, 'All'>
  serviceType: Exclude<ServiceType, 'All'>
  title: string
  description: string
  metrics: string[]
  slug: string
}

const industries: Industry[] = [
  'All',
  'Residential Strata',
  'Commercial High-Rise',
  'Industrial',
  'AFSS Rectification',
]

const serviceTypes: ServiceType[] = [
  'All',
  'AFSS Management',
  'Inspection & Testing',
  'System Installation',
  'Consulting & Audits',
]

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    category: 'AFSS Rectification',
    serviceType: 'AFSS Management',
    title: 'Darling Harbour Tower AFSS Rectification',
    description:
      'A 32-storey mixed-use tower facing council enforcement action required urgent AFSS rectification across fire detection, suppression, and egress systems. Verex delivered a staged remediation plan that restored full compliance without disrupting building operations.',
    metrics: ['100% Compliance Achieved', '12-Week Turnaround', 'Zero Tenant Disruption'],
    slug: 'darling-harbour-tower',
  },
  {
    id: '2',
    category: 'Residential Strata',
    serviceType: 'System Installation',
    title: 'North Sydney Strata Complex Upgrade',
    description:
      'An ageing 120-lot residential strata complex needed a complete fire safety system overhaul to meet current AS 1851-2012 standards. Verex managed the entire project from audit through to certification, coordinating with the strata committee at every stage.',
    metrics: ['45% Cost Reduction', '120 Lots Upgraded', 'Full AS 1851 Compliance'],
    slug: 'north-sydney-strata',
  },
  {
    id: '3',
    category: 'Industrial',
    serviceType: 'Consulting & Audits',
    title: 'Industrial Warehouse Compliance Overhaul',
    description:
      'A large-format warehouse in Western Sydney had outdated fire systems and no current AFSS. Verex conducted a full audit, designed a modern suppression and detection solution, and delivered certification within a demanding three-month window.',
    metrics: ['3-Month Turnaround', '5,000m² Facility', 'AFSS Issued on Schedule'],
    slug: 'industrial-warehouse',
  },
  {
    id: '4',
    category: 'Commercial High-Rise',
    serviceType: 'AFSS Management',
    title: 'CBD Office Tower Annual Compliance Program',
    description:
      'A premium Grade-A office tower in the Sydney CBD engaged Verex for ongoing annual fire safety management. Our digital compliance portal now provides real-time visibility to the building manager and owner, streamlining the entire AFSS process.',
    metrics: ['100% On-Time Reporting', '30% Admin Reduction', 'Real-Time Portal Access'],
    slug: 'cbd-office-tower',
  },
  {
    id: '5',
    category: 'Residential Strata',
    serviceType: 'Inspection & Testing',
    title: 'Parramatta High-Rise Strata Fire Audit',
    description:
      'A newly built 18-storey residential tower in Parramatta discovered deficiencies during its first scheduled fire safety audit. Verex identified and rectified all issues before the AFSS deadline, preventing potential fines and ensuring resident safety.',
    metrics: ['18 Deficiencies Resolved', 'No Council Penalties', 'Ongoing Maintenance Contract'],
    slug: 'parramatta-strata',
  },
  {
    id: '6',
    category: 'AFSS Rectification',
    serviceType: 'System Installation',
    title: 'Heritage Building Fire System Modernisation',
    description:
      'A heritage-listed commercial building in The Rocks required sensitive fire system upgrades that met modern standards without compromising heritage fabric. Verex worked alongside heritage consultants to deliver a compliant, sympathetic solution.',
    metrics: ['Heritage Fabric Preserved', 'Full BCA Compliance', '6-Month Program'],
    slug: 'heritage-building',
  },
]

const categoryColours: Record<Exclude<Industry, 'All'>, string> = {
  'Residential Strata': 'bg-cyan-500/10 text-cyan-400',
  'Commercial High-Rise': 'bg-blue-500/10 text-blue-400',
  Industrial: 'bg-navy-500/10 text-navy-300',
  'AFSS Rectification': 'bg-emerald-500/10 text-emerald-400',
}

export default function CaseStudiesPage() {
  const [industryFilter, setIndustryFilter] = useState<Industry>('All')
  const [serviceFilter, setServiceFilter] = useState<ServiceType>('All')

  const filtered = caseStudies.filter((cs) => {
    const matchesIndustry = industryFilter === 'All' || cs.category === industryFilter
    const matchesService = serviceFilter === 'All' || cs.serviceType === serviceFilter
    return matchesIndustry && matchesService
  })

  return (
    <div className="bg-[#0A1628] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block text-cyan-400 font-sans text-sm font-semibold tracking-widest uppercase mb-4">
              Case Studies
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Proven Results Across Sydney
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              See how Verex Fire Solutions has helped building owners, strata managers, and facility
              operators achieve and maintain full fire safety compliance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 space-y-6">
        <ScrollReveal delay={0.3}>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-3 text-center">Filter by Industry</p>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setIndustryFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    industryFilter === cat
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.35}>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-500 mb-3 text-center">Filter by Service Type</p>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceTypes.map((st) => (
                <button
                  key={st}
                  onClick={() => setServiceFilter(st)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    serviceFilter === st
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Case Study Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((cs) => (
              <motion.article
                key={cs.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/40 transition-colors duration-300"
              >
                <div className="p-8">
                  {/* Category Tag */}
                  <span
                    className={`inline-block text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-5 ${categoryColours[cs.category]}`}
                  >
                    {cs.category}
                  </span>

                  {/* Title */}
                  <h2 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {cs.title}
                  </h2>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {cs.description}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-2 mb-8">
                    {cs.metrics.map((metric) => (
                      <div key={metric} className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-cyan-400 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        <span className="text-sm font-medium text-white">{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/case-studies/${cs.slug}`}
                    className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    Read Case Study
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-slate-500 py-16 text-lg">
            No case studies found for this category.
          </p>
        )}
      </section>

      {/* CTA Banner */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <ScrollReveal>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Achieve Compliance?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8">
              Join the growing number of Sydney building owners who trust Verex Fire Solutions to
              protect their assets and occupants.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-300 shadow-lg shadow-cyan-500/25"
            >
              Request a Free Assessment
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
