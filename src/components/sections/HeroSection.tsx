'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 mesh-gradient" />

      {/* Compliance scanline — signature interaction */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2 }}
            className="absolute top-0 bottom-0 w-px"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(230, 57, 70, 0.3) 30%, rgba(249, 115, 22, 0.4) 50%, rgba(230, 57, 70, 0.3) 70%, transparent 100%)',
              boxShadow: '0 0 30px rgba(249, 115, 22, 0.15)',
            }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fire-50 border border-fire-200 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-ember-DEFAULT" />
            <span className="text-sm font-medium text-fire-700">
              Sydney&apos;s Fire Safety Specialists
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-navy-DEFAULT leading-[1.1] mb-6"
          >
            Fire Safety You Can{' '}
            <span className="gradient-text">Verify</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-smoke-600 leading-relaxed mb-10 max-w-2xl"
          >
            Comprehensive testing, maintenance, and compliance services
            for commercial and residential properties across Sydney. Licensed,
            insured, and available around the clock.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/contact" className="btn-fire text-base">
              <span>Request a Free Quote</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative z-10">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="/services" className="btn-outline-fire text-base">
              Explore Our Services
            </Link>
          </motion.div>

          {/* Service highlights — honest, no fake numbers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-smoke-200"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: '🔧', label: 'Licensed & Insured' },
                { icon: '📋', label: 'Full AFSS Management' },
                { icon: '⚡', label: '24/7 Emergency Response' },
                { icon: '📍', label: 'All of Greater Sydney' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 text-sm text-smoke-600"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      {!shouldReduceMotion && (
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-smoke-400 uppercase tracking-wider">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-smoke-300 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 rounded-full bg-fire-500"
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}
