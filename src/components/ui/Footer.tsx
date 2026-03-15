'use client'

import Link from 'next/link'

const services = [
  'Fire Safety Inspections',
  'Annual Fire Safety Statements',
  'Fire Equipment Testing',
  'Emergency Lighting',
  'Fire Door Maintenance',
  'Hydrant & Hose Reel Testing',
  'Fire Safety Audits',
  'Compliance Consulting',
]

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Our Services' },
  { href: '/afss', label: 'AFSS' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Footer() {
  return (
    <footer className="relative bg-navy-DEFAULT border-t border-white/5">
      {/* Gradient overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-fire-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-fire-500 to-ember-DEFAULT flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M12 2C12 2 4 10 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 10 12 2 12 2Z" fill="currentColor" opacity="0.9"/>
                  <path d="M12 8C12 8 8 13 8 16C8 18.2091 9.79086 20 12 20C14.2091 20 16 18.2091 16 16C16 13 12 8 12 8Z" fill="#FDB44B"/>
                </svg>
              </div>
              <div>
                <span className="text-lg font-heading font-bold text-white">Verex</span>
                <span className="block text-[9px] font-heading text-fire-400 tracking-[0.2em] uppercase -mt-0.5">
                  Fire Solutions
                </span>
              </div>
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
              <a href="tel:0405605196" className="flex items-start gap-3 text-sm text-smoke-400 hover:text-fire-400 transition-colors group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-fire-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                0405 605 196
              </a>
              <a href="mailto:info@verexfire.com.au" className="flex items-start gap-3 text-sm text-smoke-400 hover:text-fire-400 transition-colors group">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-fire-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
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
              <a href="tel:0405605196" className="text-lg font-heading font-bold text-white hover:text-fire-400 transition-colors">
                0405 605 196
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5">
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
