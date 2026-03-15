'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import FireGrid from '../effects/FireGrid'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-navy-DEFAULT" />
      <FireGrid />
      <div className="absolute inset-0 mesh-gradient" />

      {/* Radial glow from centre */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-fire-500/5 blur-[120px]" />

      {/* Animated fire orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-20 w-64 h-64 rounded-full bg-ember-DEFAULT/10 blur-[80px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 left-10 w-48 h-48 rounded-full bg-fire-500/10 blur-[60px]"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fire-500/10 border border-fire-500/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-fire-500 animate-pulse" />
            <span className="text-sm font-medium text-fire-400">
              Sydney&apos;s Trusted Fire Safety Experts
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] mb-6"
          >
            Protecting What{' '}
            <span className="gradient-text">Matters Most</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-smoke-300 leading-relaxed mb-10 max-w-2xl"
          >
            Comprehensive fire safety testing, maintenance, and compliance services
            for commercial and residential properties across Sydney. Fully licensed,
            insured, and dedicated to keeping your people safe.
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

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-white/5"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '15+', label: 'Years Experience' },
                { value: '2,500+', label: 'Properties Serviced' },
                { value: '100%', label: 'Compliance Rate' },
                { value: '24/7', label: 'Emergency Response' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div className="text-3xl md:text-4xl font-heading font-bold gradient-text stat-glow mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-smoke-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-smoke-500 uppercase tracking-wider">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-smoke-600 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-fire-500"
          />
        </div>
      </motion.div>
    </section>
  )
}
