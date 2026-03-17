'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import VerexWordmark from './VerexWordmark'

const serviceDropdownItems = [
  { href: '/services', label: 'All Services', description: 'Overview of all fire safety services' },
  { href: '/fire-engineering', label: 'Fire Engineering', description: 'C10 engineers & A1/A2 certifiers' },
  { href: '/construction', label: 'Construction', description: 'Wet & dry fire systems for builds' },
  { href: '/fire-safety-orders', label: 'FSO Upgrades', description: 'Fire Safety Order compliance' },
  { href: '/afss', label: 'AFSS', description: 'Annual Fire Safety Statements' },
]

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsServicesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsServicesOpen(false), 150)
  }

  // All mobile links including services sub-items
  const mobileLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-smoke-200'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <VerexWordmark size="sm" variant="dark" animated />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Home & About */}
              {mobileLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-smoke-600 hover:text-navy-DEFAULT transition-colors duration-300 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 rounded-lg bg-smoke-100/0 group-hover:bg-smoke-100 transition-all duration-300" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fire-500 to-ember-DEFAULT group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </Link>
              ))}

              {/* Services Dropdown */}
              <div
                ref={servicesRef}
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="relative px-4 py-2 text-sm font-medium text-smoke-600 hover:text-navy-DEFAULT transition-colors duration-300 group flex items-center gap-1"
                >
                  <span className="relative z-10">Services</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`relative z-10 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                  <span className="absolute inset-0 rounded-lg bg-smoke-100/0 group-hover:bg-smoke-100 transition-all duration-300" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fire-500 to-ember-DEFAULT group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-smoke-200 overflow-hidden"
                    >
                      <div className="p-2">
                        {serviceDropdownItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsServicesOpen(false)}
                            className="flex flex-col px-4 py-3 rounded-lg hover:bg-smoke-50 transition-colors group/item"
                          >
                            <span className="text-sm font-medium text-navy-DEFAULT group-hover/item:text-fire-600 transition-colors">
                              {item.label}
                            </span>
                            <span className="text-xs text-smoke-500">
                              {item.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Remaining nav links */}
              {navLinks.filter(l => l.href !== '/' && l.href !== '/about').map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-smoke-600 hover:text-navy-DEFAULT transition-colors duration-300 group"
                >
                  <span className="relative z-10">{link.label}</span>
                  <span className="absolute inset-0 rounded-lg bg-smoke-100/0 group-hover:bg-smoke-100 transition-all duration-300" />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-fire-500 to-ember-DEFAULT group-hover:w-3/4 transition-all duration-300 rounded-full" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:0405605196"
                className="flex items-center gap-2 text-sm text-smoke-600 hover:text-fire-600 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                0405 605 196
              </a>
              <Link
                href="/contact"
                className="btn-fire text-sm !py-2.5 !px-6"
              >
                <span>Get a Quote</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-smoke-100 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`block w-6 h-0.5 bg-navy-DEFAULT transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-navy-DEFAULT transition-all duration-300 ${isMobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-navy-DEFAULT transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-white/98 backdrop-blur-xl" />
            <div className="relative pt-24 px-6 max-h-screen overflow-y-auto pb-8">
              <div className="flex flex-col gap-2">
                {/* Home */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0 }}
                >
                  <Link
                    href="/"
                    onClick={() => setIsMobileOpen(false)}
                    className="block px-4 py-3 text-lg font-heading text-navy-DEFAULT hover:text-fire-600 hover:bg-smoke-50 rounded-lg transition-all"
                  >
                    Home
                  </Link>
                </motion.div>

                {/* About */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  <Link
                    href="/about"
                    onClick={() => setIsMobileOpen(false)}
                    className="block px-4 py-3 text-lg font-heading text-navy-DEFAULT hover:text-fire-600 hover:bg-smoke-50 rounded-lg transition-all"
                  >
                    About Us
                  </Link>
                </motion.div>

                {/* Services Accordion */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-lg font-heading text-navy-DEFAULT hover:text-fire-600 hover:bg-smoke-50 rounded-lg transition-all"
                  >
                    Services
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                    >
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 py-1 space-y-1">
                          {serviceDropdownItems.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsMobileOpen(false)}
                              className="block px-4 py-2.5 rounded-lg hover:bg-smoke-50 transition-colors"
                            >
                              <span className="text-base font-heading text-navy-DEFAULT">
                                {item.label}
                              </span>
                              <span className="block text-xs text-smoke-500 mt-0.5">
                                {item.description}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Resources */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <Link
                    href="/resources"
                    onClick={() => setIsMobileOpen(false)}
                    className="block px-4 py-3 text-lg font-heading text-navy-DEFAULT hover:text-fire-600 hover:bg-smoke-50 rounded-lg transition-all"
                  >
                    Resources
                  </Link>
                </motion.div>

                {/* Contact */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileOpen(false)}
                    className="block px-4 py-3 text-lg font-heading text-navy-DEFAULT hover:text-fire-600 hover:bg-smoke-50 rounded-lg transition-all"
                  >
                    Contact
                  </Link>
                </motion.div>

                {/* Phone & CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mt-4 pt-4 border-t border-smoke-200"
                >
                  <a href="tel:0405605196" className="flex items-center gap-3 px-4 py-3 text-fire-600">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                    0405 605 196
                  </a>
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileOpen(false)}
                    className="btn-fire text-center w-full mt-3 block"
                  >
                    <span>Get a Quote</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
