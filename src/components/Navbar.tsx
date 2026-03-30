'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    title: 'Compliance & Certification',
    description: 'AFSS management & annual fire safety statements',
    href: '/services/compliance-certification',
  },
  {
    title: 'Inspection, Testing & Maintenance',
    description: 'Routine servicing to AS 1851 standards',
    href: '/services/inspection-testing',
  },
  {
    title: 'System Installation & Upgrades',
    description: 'New fire system design, installation & modernisation',
    href: '/services/installation-upgrades',
  },
  {
    title: 'Repairs & 24/7 Emergency Service',
    description: 'Rapid-response fault rectification around the clock',
    href: '/services/emergency-service',
  },
  {
    title: 'Fire Safety Consulting & Audits',
    description: 'Independent assessments & compliance advisory',
    href: '/services/consulting-audits',
  },
  {
    title: 'Passive Fire Protection',
    description: 'Penetration sealing, fire doors & compartmentation',
    href: '/services/passive-fire-protection',
  },
  {
    title: 'Emergency Planning & Evacuation Diagrams',
    description: 'Tailored plans, diagrams & warden training',
    href: '/services/emergency-planning',
  },
  {
    title: 'Fire Safety Training',
    description: 'Staff awareness, warden & extinguisher training',
    href: '/services/fire-safety-training',
  },
]

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const openDropdown = useCallback(() => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setServicesOpen(true)
  }, [])

  const closeDropdown = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => setServicesOpen(false), 150)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md shadow-lg shadow-navy-950/20'
          : 'bg-navy-900'
      }`}
    >
      {/* Top bar with phone number */}
      <div
        className={`border-b border-white/5 transition-all duration-300 overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-end gap-6 text-sm text-navy-300">
            <a
              href="tel:0405605196"
              className="flex items-center gap-1.5 transition-colors hover:text-cyan-400"
            >
              <PhoneIcon />
              0405 605 196
            </a>
            <a
              href="mailto:info@verexfire.com.au"
              className="hidden items-center gap-1.5 transition-colors hover:text-cyan-400 sm:flex"
            >
              <EmailIcon />
              info@verexfire.com.au
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-[72px]">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-1">
            <span className="text-2xl font-bold tracking-tight text-white font-sans">
              <span className="text-cyan-500">v</span>erex
            </span>
            <span className="ml-1.5 hidden text-[11px] font-medium uppercase tracking-[0.2em] text-navy-400 sm:inline-block">
              Fire Solutions
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-navy-200 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                    <ChevronDownIcon open={servicesOpen} />
                  </Link>

                  {/* Mega menu */}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full pt-2 -translate-x-1/2"
                      >
                        <div className="w-[680px] rounded-xl border border-white/10 bg-navy-900/98 p-6 shadow-2xl shadow-navy-950/50 backdrop-blur-xl">
                          <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-xs font-semibold uppercase tracking-widest text-cyan-500">
                              Our Services
                            </h3>
                            <Link
                              href="/services"
                              className="text-xs font-medium text-navy-400 transition-colors hover:text-cyan-400"
                            >
                              View all &rarr;
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 gap-1">
                            {services.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className="group rounded-lg p-3 transition-colors hover:bg-white/5"
                              >
                                <p className="text-sm font-medium text-white transition-colors group-hover:text-cyan-400">
                                  {service.title}
                                </p>
                                <p className="mt-0.5 text-xs text-navy-400">
                                  {service.description}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-navy-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop right side */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:0405605196"
              className={`flex items-center gap-1.5 text-sm font-medium text-navy-300 transition-colors hover:text-cyan-400 ${
                scrolled ? '' : 'lg:hidden xl:flex'
              }`}
            >
              <PhoneIcon />
              0405 605 196
            </a>
            <Link
              href="/portal"
              className="rounded-lg border border-cyan-500/30 px-4 py-2 text-sm font-medium text-cyan-400 transition-all hover:border-cyan-500 hover:bg-cyan-500/10"
            >
              Client Portal
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="relative z-10 flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            <div className="flex w-5 flex-col items-end gap-[5px]">
              <span
                className={`block h-[2px] bg-white transition-all duration-300 ${
                  mobileOpen ? 'w-5 translate-y-[7px] rotate-45' : 'w-5'
                }`}
              />
              <span
                className={`block h-[2px] bg-white transition-all duration-300 ${
                  mobileOpen ? 'w-0 opacity-0' : 'w-3.5'
                }`}
              />
              <span
                className={`block h-[2px] bg-white transition-all duration-300 ${
                  mobileOpen ? 'w-5 -translate-y-[7px] -rotate-45' : 'w-5'
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 z-40 bg-navy-900 lg:hidden"
          >
            <div className="flex h-full flex-col overflow-y-auto pt-24 pb-8 px-6">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileServicesOpen((v) => !v)}
                        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-lg font-medium text-white transition-colors hover:bg-white/5"
                      >
                        {link.label}
                        <ChevronDownIcon open={mobileServicesOpen} />
                      </button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 border-l border-white/10 pl-4 py-2">
                              {services.map((service) => (
                                <Link
                                  key={service.href}
                                  href={service.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block rounded-lg px-3 py-2.5 text-sm text-navy-300 transition-colors hover:bg-white/5 hover:text-white"
                                >
                                  {service.title}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-lg px-4 py-3 text-lg font-medium text-white transition-colors hover:bg-white/5"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>

              <div className="mt-8 border-t border-white/10 pt-8">
                <Link
                  href="/portal"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center rounded-lg border border-cyan-500/30 px-6 py-3 text-sm font-medium text-cyan-400 transition-all hover:border-cyan-500 hover:bg-cyan-500/10"
                >
                  Client Portal
                </Link>
              </div>

              <div className="mt-6 flex flex-col gap-3 text-sm text-navy-400">
                <a
                  href="tel:0405605196"
                  className="flex items-center gap-2 transition-colors hover:text-cyan-400"
                >
                  <PhoneIcon />
                  0405 605 196
                </a>
                <a
                  href="mailto:info@verexfire.com.au"
                  className="flex items-center gap-2 transition-colors hover:text-cyan-400"
                >
                  <EmailIcon />
                  info@verexfire.com.au
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ------------------------------------------------------------------ */
/* Inline icon components                                              */
/* ------------------------------------------------------------------ */

function PhoneIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg
      className="h-3.5 w-3.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  )
}

function ChevronDownIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  )
}
