'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const serviceOptions = [
  'AI Fire Detection & Analytics',
  'Fire Panel Systems Engineering',
  'BMS & IoT Integration',
  'Suppression System Engineering',
  'Computational Fire Engineering',
  'EWIS Design & Engineering',
  'Cyber-Physical Fire Security',
  'Digital Twin & Compliance R&D',
  'Other',
]

const certifications = [
  'FPAA Accredited',
  'Licensed & Fully Insured',
  'AS 1851 Certified',
  'ISO 9001 Quality Systems',
]

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission — replace with actual endpoint
    await new Promise((resolve) => setTimeout(resolve, 1200))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative bg-navy-900 py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-900/95 to-orange-900/20" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
              Get in Touch
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="mt-4 font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
              Ready to strengthen your building&apos;s fire safety compliance?
              Our team is here to help. Reach out for a no-obligation consultation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Form + Sidebar ───────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-3">
            {/* ── Left: Form (2 cols) ────────────────────────────── */}
            <ScrollReveal className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg sm:p-10">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                      <svg
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                    </div>
                    <h2 className="mt-6 font-heading text-2xl font-bold text-navy-900">
                      Thank You
                    </h2>
                    <p className="mt-3 max-w-md text-slate-600">
                      Your enquiry has been received. A member of our team will be
                      in touch within one business day.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-heading text-2xl font-bold text-navy-900 sm:text-3xl">
                      Request a Consultation
                    </h2>
                    <p className="mt-2 text-slate-600">
                      Fill in the details below and we&apos;ll get back to you
                      within one business day.
                    </p>

                    <form
                      onSubmit={handleSubmit}
                      className="mt-8 grid gap-6 sm:grid-cols-2"
                    >
                      {/* Name */}
                      <div className="sm:col-span-1">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-navy-900"
                        >
                          Name <span className="text-orange-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-navy-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition"
                          placeholder="John Smith"
                        />
                      </div>

                      {/* Company */}
                      <div className="sm:col-span-1">
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-navy-900"
                        >
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-navy-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition"
                          placeholder="Your company (optional)"
                        />
                      </div>

                      {/* Email */}
                      <div className="sm:col-span-1">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-navy-900"
                        >
                          Email <span className="text-orange-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-navy-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition"
                          placeholder="john@example.com"
                        />
                      </div>

                      {/* Phone */}
                      <div className="sm:col-span-1">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-navy-900"
                        >
                          Phone <span className="text-orange-500">*</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-navy-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition"
                          placeholder="0400 000 000"
                        />
                      </div>

                      {/* Service Interest */}
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="service"
                          className="block text-sm font-medium text-navy-900"
                        >
                          Service Interest
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-navy-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition"
                        >
                          <option value="">Select a service...</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-navy-900"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-navy-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition resize-none"
                          placeholder="Tell us about your fire safety needs (optional)"
                        />
                      </div>

                      {/* Submit */}
                      <div className="sm:col-span-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50 disabled:opacity-60 disabled:cursor-not-allowed sm:w-auto"
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className="h-4 w-4 animate-spin"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                />
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                />
                              </svg>
                              Sending...
                            </>
                          ) : (
                            'Request a Consultation'
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </ScrollReveal>

            {/* ── Right: Contact Info ────────────────────────────── */}
            <ScrollReveal delay={0.2} className="lg:col-span-1">
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">Phone</p>
                    <a
                      href="tel:0405605196"
                      className="mt-1 block text-lg font-medium text-orange-600 transition hover:text-orange-700"
                    >
                      0405 605 196
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">Email</p>
                    <a
                      href="mailto:info@verexfire.com.au"
                      className="mt-1 block text-lg font-medium text-orange-600 transition hover:text-orange-700"
                    >
                      info@verexfire.com.au
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">Location</p>
                    <p className="mt-1 text-slate-600">
                      Breakfast Point, NSW
                    </p>
                    <p className="text-sm text-slate-500">
                      Serving Greater Sydney
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">
                      Business Hours
                    </p>
                    <p className="mt-1 text-slate-600">
                      Mon&ndash;Fri: 7:00am &ndash; 5:00pm
                    </p>
                    <p className="text-sm text-slate-500">
                      Saturday &amp; Sunday: Closed
                    </p>
                  </div>
                </div>

                {/* Emergency Callout */}
                <div className="rounded-xl border border-orange-200 bg-gradient-to-br from-orange-50 to-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                        />
                      </svg>
                    </div>
                    <h3 className="font-heading text-lg font-bold text-navy-900">
                      24/7 Emergency Service
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    Fire safety emergencies don&apos;t wait for business hours.
                    Our emergency response team is available around the clock for
                    urgent callouts across Greater Sydney.
                  </p>
                  <a
                    href="tel:0405605196"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 transition hover:text-orange-700"
                  >
                    Call Now: 0405 605 196
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Appointment Scheduling ────────────────────────────────── */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
                Schedule a Meeting
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
                Book a 15-Minute Introductory Call
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                Prefer to schedule a time that suits you? Choose a slot below and
                we&apos;ll call you to discuss your fire safety requirements.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mx-auto mt-12 max-w-3xl">
              <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-white p-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                </div>
                <p className="mt-6 font-heading text-xl font-semibold text-navy-900">
                  Meeting scheduler loading...
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Calendly integration placeholder &mdash; embed will appear here.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Trust Signals ─────────────────────────────────────────── */}
      <section className="bg-navy-900 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                Trusted Across Greater Sydney
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                Backed by industry certifications and a commitment to rapid
                response, we deliver confidence in every engagement.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, i) => (
              <ScrollReveal key={cert} delay={i * 0.1}>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-white">{cert}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-12 flex flex-col items-center justify-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 text-center sm:flex-row sm:text-left">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-white">
                  Our Response Commitment
                </h3>
                <p className="mt-1 text-slate-400">
                  All enquiries receive a response within one business day.
                  Emergency callouts are dispatched within 2 hours, 24/7.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
