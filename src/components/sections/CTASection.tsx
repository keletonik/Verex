'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import ScrollReveal from '../effects/ScrollReveal'

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ember-dark via-navy-DEFAULT to-navy-light" />

      {/* Animated background orbs */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 right-20 w-96 h-96 rounded-full bg-fire-500/10 blur-[100px]"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.05, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-ember-DEFAULT/10 blur-[80px]"
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fire-500/15 border border-fire-500/25 mb-8">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-fire-400">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span className="text-sm font-medium text-fire-300">Free Consultation Available</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Don&apos;t Wait for a{' '}
            <span className="gradient-text">Fire Emergency</span>
            <br />
            to Think About Safety
          </h2>

          <p className="text-lg md:text-xl text-smoke-300 leading-relaxed mb-10 max-w-2xl mx-auto">
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
            <a href="tel:0405605196" className="btn-outline-fire text-lg !py-4 !px-10">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Call 0405 605 196
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
