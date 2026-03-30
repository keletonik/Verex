'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const services = [
  {
    title: 'AI Fire Detection & Analytics',
    description: 'Machine learning anomaly detection & predictive fire panel intelligence',
    href: '/services/ai-fire-detection',
  },
  {
    title: 'Fire Panel Systems Engineering',
    description: 'Addressable FIP programming, loop configuration & multi-panel networking',
    href: '/services/fire-panel-engineering',
  },
  {
    title: 'BMS & IoT Integration',
    description: 'BACnet/Modbus integration, IoT sensor networks & cloud SCADA',
    href: '/services/bms-iot-integration',
  },
  {
    title: 'Suppression System Engineering',
    description: 'Gas suppression design, water mist & hydraulic calculation R&D',
    href: '/services/suppression-engineering',
  },
  {
    title: 'Computational Fire Engineering',
    description: 'FDS modelling, performance-based engineering & smoke simulation',
    href: '/services/computational-fire-engineering',
  },
  {
    title: 'EWIS Design & Engineering',
    description: 'AS 1670.4 emergency warning & intercommunication systems',
    href: '/services/ewis-engineering',
  },
  {
    title: 'Cyber-Physical Fire Security',
    description: 'Network security for IP-connected fire infrastructure',
    href: '/services/cyber-physical-security',
  },
  {
    title: 'Digital Twin & Compliance R&D',
    description: 'Digital twin fire systems, AR inspection & automated compliance',
    href: '/services/digital-twin-compliance',
  },
]

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Research & Development', href: '/services', hasDropdown: true },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-navy-900 ${
        scrolled ? 'shadow-lg shadow-navy-950/40' : ''
      }`}
    >
      {/* Main navigation */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-[72px]">
          {/* Logo — restored original Verex wordmark */}
          <Link href="/" className="relative z-10 flex flex-col">
            <div className="flex items-baseline">
              <span className="text-2xl font-bold tracking-tight font-heading text-orange-500 leading-none">v</span>
              <span className="text-2xl font-bold tracking-tight font-heading text-white leading-none">erex</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500 ml-1 self-end mb-[0.25em] animate-pulse-slow" />
            </div>
            <span className="text-[9px] font-heading font-medium text-orange-400/80 tracking-[0.2em] uppercase -mt-0.5 leading-tight">
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

                  {/* Mega menu — solid opaque background */}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full pt-2 -translate-x-1/2"
                        style={{ zIndex: 100 }}
                      >
                        <div className="w-[720px] rounded-xl border border-white/10 bg-navy-900 p-6 shadow-2xl shadow-black/50">
                          <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-xs font-semibold uppercase tracking-widest text-orange-500 font-heading">
                              Research & Development
                            </h3>
                            <Link
                              href="/services"
                              className="text-xs font-medium text-navy-400 transition-colors hover:text-orange-400"
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
                                <p className="text-sm font-medium text-white transition-colors group-hover:text-orange-400">
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
            <Link
              href="/portal"
              className="rounded-lg border border-orange-500/30 px-4 py-2 text-sm font-medium text-orange-400 transition-all hover:border-orange-500 hover:bg-orange-500/10"
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
              <span className={`block h-[2px] bg-white transition-all duration-300 ${mobileOpen ? 'w-5 translate-y-[7px] rotate-45' : 'w-5'}`} />
              <span className={`block h-[2px] bg-white transition-all duration-300 ${mobileOpen ? 'w-0 opacity-0' : 'w-3.5'}`} />
              <span className={`block h-[2px] bg-white transition-all duration-300 ${mobileOpen ? 'w-5 -translate-y-[7px] -rotate-45' : 'w-5'}`} />
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
                  className="flex w-full items-center justify-center rounded-lg border border-orange-500/30 px-6 py-3 text-sm font-medium text-orange-400 transition-all hover:border-orange-500 hover:bg-orange-500/10"
                >
                  Client Portal
                </Link>
              </div>

              <div className="mt-6 flex flex-col gap-3 text-sm text-navy-400">
                <a href="mailto:info@verexfire.com.au" className="flex items-center gap-2 transition-colors hover:text-orange-400">
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

function PhoneIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function ChevronDownIcon({ open }: { open: boolean }) {
  return (
    <svg className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  )
}
