'use client'

import Link from 'next/link'
import ScrollReveal from '../effects/ScrollReveal'

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 bg-navy-DEFAULT overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-fire-500/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-ember-DEFAULT/5 blur-[100px]" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fire-500/10 border border-fire-500/20 mb-8">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-fire-400">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span className="text-sm font-medium text-fire-300">Free Consultation Available</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Don&apos;t Wait for an{' '}
            <br className="hidden md:block" />
            <span className="gradient-text">Emergency</span>
          </h2>

          <p className="text-lg md:text-xl text-smoke-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Every day without proper fire safety measures puts lives and property at risk.
            Contact us today for a comprehensive assessment of your fire safety systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-fire text-lg !py-4 !px-10">
              <span>Get Your Free Quote</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative z-10">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <a href="mailto:info@verexfire.com.au" className="btn-outline-fire text-lg !py-4 !px-10 !text-fire-400 !border-fire-500/30 hover:!bg-fire-500/10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M22 7l-10 7L2 7"/>
              </svg>
              Email Us
            </a>
          </div>

          <p className="mt-8 text-sm text-smoke-500">
            Servicing Breakfast Point, NSW and the greater Sydney metropolitan area
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
