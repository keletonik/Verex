'use client'

import Link from 'next/link'
import VerexWordmark from './VerexWordmark'

const services = [
  'Fire Safety Inspections',
  'Annual Fire Safety Statements',
  'Fire Equipment Testing',
  'Emergency Lighting',
  'Fire Door Maintenance',
  'Hydrant & Hose Reel Testing',
  'Fire Engineering & Surveying',
  'Construction Fire Services',
  'Fire Safety Order Upgrades',
  'Fire Safety Audits',
  'Compliance Consulting',
]

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/fire-engineering', label: 'Fire Engineering' },
  { href: '/construction', label: 'Construction' },
  { href: '/fire-safety-orders', label: 'FSO Upgrades' },
  { href: '/afss', label: 'AFSS' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Footer() {
  return (
    <footer className="relative bg-navy-DEFAULT text-white">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-ember-DEFAULT via-fire-500 to-fire-400" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <VerexWordmark size="md" variant="light" />
            </Link>
            <p className="text-sm text-smoke-400 leading-relaxed mb-6">
              Protecting lives and property across Sydney with comprehensive fire safety
              services, testing, maintenance, and compliance solutions.
            </p>
            <div className="flex items-center gap-3 text-sm text-smoke-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-fire-500 flex-shrink-0">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Breakfast Point, NSW
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-smoke-400 hover:text-fire-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-fire-500/40" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-smoke-400 hover:text-fire-400 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-fire-500/40" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-6 text-sm uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a href="mailto:info@verexfire.com.au" className="flex items-start gap-3 text-sm text-smoke-400 hover:text-fire-400 transition-colors group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-fire-500 flex-shrink-0 mt-0.5">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="M22 7l-10 7L2 7"/>
                </svg>
                info@verexfire.com.au
              </a>
              <div className="flex items-start gap-3 text-sm text-smoke-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-fire-500 flex-shrink-0 mt-0.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
                Mon - Fri: 7:00 AM - 5:00 PM<br/>
                24/7 Emergency Service
              </div>
            </div>

            {/* Emergency CTA */}
            <div className="mt-6 p-4 rounded-xl bg-ember-dark/20 border border-ember-dark/30">
              <p className="text-xs text-fire-300 font-semibold uppercase tracking-wider mb-1">24/7 Emergency</p>
              <a href="mailto:info@verexfire.com.au" className="text-lg font-heading font-bold text-white hover:text-fire-400 transition-colors">
                info@verexfire.com.au
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-smoke-500">
              &copy; {new Date().getFullYear()} Verex Fire Solutions. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-smoke-500">
                Licensed &amp; Fully Insured | ABN Registered
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
