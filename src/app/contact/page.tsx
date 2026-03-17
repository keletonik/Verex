'use client'

import { useState } from 'react'
import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import ScrollReveal from '@/components/effects/ScrollReveal'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-smoke-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-heading font-semibold text-fire-600 uppercase tracking-wider mb-4">
              Contact Us
            </span>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-navy-DEFAULT mb-6 leading-tight">
              Let&apos;s Discuss Your{' '}
              <span className="gradient-text">Fire Safety Needs</span>
            </h1>
            <p className="text-xl text-smoke-600 leading-relaxed">
              Whether you need a routine inspection, a comprehensive compliance program, or
              emergency support — we&apos;re here to help. Reach out today for a free, no-obligation
              consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="card p-8 md:p-10">
                  {submitted ? (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 mx-auto rounded-full bg-green-50 flex items-center justify-center mb-6">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-navy-DEFAULT mb-3">
                        Thank You!
                      </h3>
                      <p className="text-smoke-600 mb-6">
                        Your enquiry has been received. One of our fire safety specialists will be in
                        touch within 24 hours to discuss your requirements.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false)
                          setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
                        }}
                        className="text-fire-600 hover:text-fire-700 text-sm font-medium transition-colors"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-heading font-bold text-navy-DEFAULT mb-2">
                        Request a Free Quote
                      </h2>
                      <p className="text-sm text-smoke-600 mb-8">
                        Fill out the form below and we&apos;ll get back to you within 24 hours.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-navy-DEFAULT mb-2">
                              Full Name *
                            </label>
                            <input
                              id="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                              className="w-full px-4 py-3 rounded-xl bg-smoke-50 border border-smoke-50 text-navy-DEFAULT placeholder-smoke-600/50 focus:outline-none focus:border-fire-600/50 focus:ring-1 focus:ring-fire-600/25 transition-all"
                              placeholder="Your full name"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-navy-DEFAULT mb-2">
                              Email Address *
                            </label>
                            <input
                              id="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              className="w-full px-4 py-3 rounded-xl bg-smoke-50 border border-smoke-50 text-navy-DEFAULT placeholder-smoke-600/50 focus:outline-none focus:border-fire-600/50 focus:ring-1 focus:ring-fire-600/25 transition-all"
                              placeholder="you@example.com"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-navy-DEFAULT mb-2">
                              Phone Number *
                            </label>
                            <input
                              id="phone"
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              className="w-full px-4 py-3 rounded-xl bg-smoke-50 border border-smoke-50 text-navy-DEFAULT placeholder-smoke-600/50 focus:outline-none focus:border-fire-600/50 focus:ring-1 focus:ring-fire-600/25 transition-all"
                              placeholder="0400 000 000"
                            />
                          </div>
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium text-navy-DEFAULT mb-2">
                              Company / Building Name
                            </label>
                            <input
                              id="company"
                              type="text"
                              value={formData.company}
                              onChange={(e) => setFormData({...formData, company: e.target.value})}
                              className="w-full px-4 py-3 rounded-xl bg-smoke-50 border border-smoke-50 text-navy-DEFAULT placeholder-smoke-600/50 focus:outline-none focus:border-fire-600/50 focus:ring-1 focus:ring-fire-600/25 transition-all"
                              placeholder="Your company or building"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="service" className="block text-sm font-medium text-navy-DEFAULT mb-2">
                            Service Required *
                          </label>
                          <div className="relative">
                          <select
                            id="service"
                            required
                            value={formData.service}
                            onChange={(e) => setFormData({...formData, service: e.target.value})}
                            className="w-full px-4 py-3 pr-10 rounded-xl bg-smoke-50 border border-smoke-50 text-navy-DEFAULT focus:outline-none focus:border-fire-600/50 focus:ring-1 focus:ring-fire-600/25 transition-all appearance-none"
                          >
                            <option value="">Select a service...</option>
                            <option value="inspection">Fire Safety Inspection</option>
                            <option value="maintenance">Essential Fire Safety Maintenance</option>
                            <option value="afss">Annual Fire Safety Statement (AFSS)</option>
                            <option value="emergency-lighting">Emergency &amp; Exit Lighting</option>
                            <option value="fire-doors">Fire Door Inspection &amp; Maintenance</option>
                            <option value="hydrants">Hydrant &amp; Hose Reel Testing</option>
                            <option value="consulting">Fire Safety Consulting &amp; Audit</option>
                            <option value="passive-fire">Passive Fire Protection</option>
                            <option value="comprehensive">Comprehensive Compliance Program</option>
                            <option value="other">Other / Not Sure</option>
                          </select>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute right-4 top-1/2 -translate-y-1/2 text-smoke-600 pointer-events-none">
                            <path d="M6 9l6 6 6-6"/>
                          </svg>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-navy-DEFAULT mb-2">
                            Tell Us About Your Needs
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl bg-smoke-50 border border-smoke-50 text-navy-DEFAULT placeholder-smoke-600/50 focus:outline-none focus:border-fire-600/50 focus:ring-1 focus:ring-fire-600/25 transition-all resize-none"
                            placeholder="Please describe your property, current fire safety setup, and any specific concerns or requirements..."
                          />
                        </div>

                        <button type="submit" className="btn-fire w-full justify-center text-base">
                          <span>Submit Enquiry</span>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative z-10">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </button>

                        <p className="text-xs text-smoke-600 text-center">
                          By submitting this form, you agree to be contacted by Verex Fire Solutions
                          regarding your enquiry. We respect your privacy and will never share your
                          information with third parties.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal direction="left">
                <div className="card p-8">
                  <h3 className="text-xl font-heading font-semibold text-navy-DEFAULT mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <a href="mailto:info@verexfire.com.au" className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-fire-600/10 flex items-center justify-center text-fire-600 flex-shrink-0 group-hover:bg-fire-600/20 transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="4" width="20" height="16" rx="2"/>
                          <path d="M22 7l-10 7L2 7"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-smoke-600">Email</p>
                        <p className="text-lg font-heading font-semibold text-navy-DEFAULT group-hover:text-fire-600 transition-colors">
                          info@verexfire.com.au
                        </p>
                        <p className="text-xs text-smoke-600 mt-1">We respond within 24 hours</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-fire-600/10 flex items-center justify-center text-fire-600 flex-shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-smoke-600">Location</p>
                        <p className="text-lg font-heading font-semibold text-navy-DEFAULT">
                          Breakfast Point, NSW
                        </p>
                        <p className="text-xs text-smoke-600 mt-1">Servicing all of greater Sydney</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-fire-600/10 flex items-center justify-center text-fire-600 flex-shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 6v6l4 2"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-smoke-600">Business Hours</p>
                        <p className="text-sm font-semibold text-navy-DEFAULT">
                          Monday – Friday: 7:00 AM – 5:00 PM
                        </p>
                        <p className="text-xs text-smoke-600 mt-1">
                          24/7 emergency service available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.1}>
                <div className="card p-8 border-fire-600/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-fire-600/10 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-fire-600">
                        <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                        <path d="M12 9v4"/>
                        <path d="M12 17h.01"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-navy-DEFAULT">
                      24/7 Emergency
                    </h3>
                  </div>
                  <p className="text-sm text-smoke-600 mb-4">
                    For urgent fire safety system failures, fault rectification, or emergency
                    repairs, email us and we&apos;ll respond immediately.
                  </p>
                  <a
                    href="mailto:info@verexfire.com.au"
                    className="btn-fire w-full justify-center"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative z-10">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="M22 7l-10 7L2 7"/>
                    </svg>
                    <span>Email Us</span>
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="left" delay={0.2}>
                <div className="card p-8">
                  <h3 className="text-lg font-heading font-semibold text-navy-DEFAULT mb-4">
                    Service Areas
                  </h3>
                  <p className="text-sm text-smoke-600 mb-4">
                    Based in Breakfast Point, we service the entire Sydney metropolitan area, including:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Sydney CBD',
                      'Inner West',
                      'Eastern Suburbs',
                      'North Shore',
                      'Northern Beaches',
                      'Western Sydney',
                      'South Sydney',
                      'Parramatta',
                      'Hills District',
                      'Sutherland Shire',
                      'Canterbury-Bankstown',
                      'Greater Sydney',
                    ].map((area) => (
                      <div key={area} className="flex items-center gap-2 text-xs text-smoke-600">
                        <span className="w-1 h-1 rounded-full bg-fire-600/40 flex-shrink-0" />
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
