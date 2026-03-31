'use client'

import { useState } from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

type ArticleCategory = 'Research' | 'Regulation' | 'Guide' | 'Industry Update'

interface Article {
  id: string
  category: ArticleCategory
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
  featured?: boolean
}

const articles: Article[] = [
  {
    id: '7',
    category: 'Research',
    title: 'Federated Learning Architectures for Cross-Organisational Fire Risk Intelligence: Reconciling Data Privacy with Predictive Power in Australian Building Portfolios',
    excerpt:
      'A federated learning architecture enabling cross-organisational fire risk model training without centralising raw data, achieving AUROC of 0.847 with formal differential privacy guarantees.',
    date: '1 March 2026',
    readTime: '17 min read',
    slug: 'federated-fire-risk-intelligence',
  },
  {
    id: '1',
    category: 'Research',
    title: 'Convolutional Neural Network Architectures for Real-Time Fire Signature Classification in Addressable Detection Networks',
    excerpt:
      'An investigation into CNN model architectures tested against smoke and fire patterns from addressable detection networks, with analysis of multi-modal sensor fusion for false alarm reduction.',
    date: '5 March 2026',
    readTime: '12 min read',
    slug: 'machine-learning-fire-detection',
    featured: true,
  },
  {
    id: '2',
    category: 'Research',
    title: 'Thermal Runaway Propagation Modelling in Lithium-Ion Battery Storage: Implications for Strata Car Park Fire Engineering',
    excerpt:
      'CFD analysis of thermal runaway propagation in underground car parks, examining heat release rate curves for NMC and LFP cell chemistries and sprinkler activation timing.',
    date: '14 February 2026',
    readTime: '12 min read',
    slug: 'lithium-ion-thermal-runaway',
  },
  {
    id: '3',
    category: 'Research',
    title: 'Vulnerability Analysis of BACnet Protocol Implementations in Networked Fire Indicator Panel Deployments',
    excerpt:
      'Protocol-level security analysis of BACnet/IP and BACnet/SC in fire system networks, examining common attack vectors and mitigation strategies for critical infrastructure.',
    date: '28 January 2026',
    readTime: '10 min read',
    slug: 'bacnet-fire-system-security',
  },
  {
    id: '4',
    category: 'Research',
    title: 'Comparative Analysis of Zone Model and CFD Approaches to Smoke Management System Design in Australian High-Rise Buildings',
    excerpt:
      'CFAST zone model vs FDS CFD comparison for tenability analysis in a hypothetical 30-storey Sydney CBD commercial building, examining mesh sensitivity and computational trade-offs.',
    date: '5 March 2026',
    readTime: '14 min read',
    slug: 'smoke-management-cfd',
  },
  {
    id: '5',
    category: 'Research',
    title: 'Optimising Speech Transmission Index in Emergency Warning Systems: An Acoustic Modelling Study',
    excerpt:
      'Acoustic modelling study of STI performance in open-plan commercial environments, examining speaker placement optimisation and DSP techniques for AS 1670.4 compliance.',
    date: '19 November 2025',
    readTime: '11 min read',
    slug: 'ewis-speech-intelligibility',
  },
  {
    id: '6',
    category: 'Research',
    title: 'Digital Twin Frameworks for Predictive Maintenance of Fire Protection Systems',
    excerpt:
      'A machine learning approach to AS 1851 compliance optimisation using digital twin architecture, gradient boosted decision trees, and BIM integration.',
    date: '3 December 2025',
    readTime: '13 min read',
    slug: 'digital-twin-fire-maintenance',
  },
]

const categoryColours: Record<ArticleCategory, string> = {
  Research: 'bg-orange-500/10 text-orange-400',
  Regulation: 'bg-rose-500/10 text-rose-400',
  Guide: 'bg-emerald-500/10 text-emerald-400',
  'Industry Update': 'bg-amber-500/10 text-amber-400',
}

const featuredArticle = articles.find((a) => a.featured)!
const gridArticles = articles.filter((a) => !a.featured)

export default function InsightsPage() {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production this would post to an API endpoint
    setSubmitted(true)
  }

  return (
    <div className="bg-[#0A1628] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block text-orange-400 font-sans text-sm font-semibold tracking-widest uppercase mb-4">
              Insights &amp; Resources
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Fire Safety Insights &amp; Resources
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Peer-reviewed research and technical analysis from our fire engineering laboratories
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Article */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ScrollReveal>
          <Link href={`/insights/${featuredArticle.slug}`} className="group block">
            <article className="relative bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20 rounded-2xl p-8 md:p-12 hover:border-orange-500/40 transition-colors duration-300">
              <div className="absolute top-6 right-6 md:top-8 md:right-8">
                <span className="inline-block bg-orange-500 text-white text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full">
                  Featured
                </span>
              </div>
              <span
                className={`inline-block text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-4 ${categoryColours[featuredArticle.category]}`}
              >
                {featuredArticle.category}
              </span>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors max-w-3xl">
                {featuredArticle.title}
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-6">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-400">
                <span>{featuredArticle.date}</span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span>{featuredArticle.readTime}</span>
              </div>
            </article>
          </Link>
        </ScrollReveal>
      </section>

      {/* Article Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <ScrollReveal>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-10">
            Recent Publications
          </h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridArticles.map((article, index) => (
            <ScrollReveal key={article.id} delay={index * 0.1}>
              <Link href={`/insights/${article.slug}`} className="group block h-full">
                <article className="h-full bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-orange-500/40 transition-colors duration-300 flex flex-col">
                  {/* Category Tag */}
                  <span
                    className={`inline-block self-start text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-4 ${categoryColours[article.category]}`}
                  >
                    {article.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span>{article.readTime}</span>
                  </div>
                </article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Lead Magnet / Download Section */}
      <section className="border-t border-white/10 bg-gradient-to-b from-[#0A1628] to-[#0F1D32]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <span className="inline-block text-orange-400 font-sans text-sm font-semibold tracking-widest uppercase mb-4">
                  Free Resources
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                  Download Our Free Fire Safety Resources
                </h2>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                  Practical tools to help you stay ahead of compliance obligations and prepare for
                  fire safety audits with confidence.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <ScrollReveal delay={0.1}>
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-5">
                    <svg
                      className="w-6 h-6 text-orange-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    Pre-Audit Checklist for Building Owners
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    A comprehensive room-by-room checklist covering every fire safety element
                    auditors look for. Identify and resolve issues before your next inspection.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center mb-5">
                    <svg
                      className="w-6 h-6 text-orange-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      />
                    </svg>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">
                    Annual Fire Safety Planning Calendar
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    A month-by-month calendar mapping every inspection, test, and filing deadline
                    you need to meet throughout the year. Never miss a due date again.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Email Capture Form */}
            <ScrollReveal delay={0.3}>
              <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 md:p-10">
                {submitted ? (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <svg
                        className="w-8 h-8 text-orange-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-2">
                      Thank You!
                    </h3>
                    <p className="text-slate-300">
                      Your free resources are on the way. Check your inbox shortly.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-heading text-xl font-bold text-white mb-2 text-center">
                      Get Your Free Resources
                    </h3>
                    <p className="text-slate-400 text-sm text-center mb-8">
                      Enter your details below and we will send both resources straight to your
                      inbox.
                    </p>
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
                    >
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, name: e.target.value }))
                        }
                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-colors"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, email: e.target.value }))
                        }
                        className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-colors"
                      />
                      <button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 shadow-lg shadow-orange-500/25 whitespace-nowrap"
                      >
                        Download Free Resource
                      </button>
                    </form>
                  </>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}
