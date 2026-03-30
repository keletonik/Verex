import Link from 'next/link'

const serviceLinks = [
  { label: 'AI Fire Detection & Analytics', href: '/services/ai-fire-detection' },
  { label: 'Fire Panel Systems Engineering', href: '/services/fire-panel-engineering' },
  { label: 'BMS & IoT Integration', href: '/services/bms-iot-integration' },
  { label: 'Suppression System Engineering', href: '/services/suppression-engineering' },
  { label: 'Computational Fire Engineering', href: '/services/computational-fire-engineering' },
  { label: 'EWIS Design & Engineering', href: '/services/ewis-engineering' },
  { label: 'Cyber-Physical Fire Security', href: '/services/cyber-physical-security' },
  { label: 'Digital Twin & Compliance R&D', href: '/services/digital-twin-compliance' },
]

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Insights', href: '/insights' },
  { label: 'Careers', href: '/careers' },
  { label: 'Client Portal', href: '/portal' },
  { label: 'Contact', href: '/contact' },
]

const industryLinks = [
  { label: 'Strata Managers', href: '/industries/strata-managers' },
  { label: 'Commercial Property', href: '/industries/commercial-property' },
  { label: 'Facility Managers', href: '/industries/facility-managers' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 border-t border-white/5">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Company info */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-1">
              <span className="text-2xl font-bold tracking-tight text-white font-heading">
                <span className="text-orange-500">v</span>erex
              </span>
              <span className="ml-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-navy-400">
                Fire Solutions
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-400">
              Advancing the science of fire safety through AI-driven research, computational fire dynamics, and next-generation engineering solutions.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="tel:0405605196"
                className="flex items-center gap-2.5 text-sm text-navy-300 transition-colors hover:text-orange-400"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                0405 605 196
              </a>
              <a
                href="mailto:info@verexfire.com.au"
                className="flex items-center gap-2.5 text-sm text-navy-300 transition-colors hover:text-orange-400"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                info@verexfire.com.au
              </a>
              <div className="flex items-center gap-2.5 text-sm text-navy-300">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                Breakfast Point, NSW
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-orange-500">
              Research & Development
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-orange-500">
              Quick Links
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-orange-500">
              Industries We Serve
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {industryLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-navy-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="mt-8 text-xs font-semibold uppercase tracking-widest text-orange-500">
              Service Area
            </h4>
            <p className="mt-3 text-sm text-navy-400">
              Greater Sydney &mdash; from the Northern Beaches to the
              Sutherland Shire, and everywhere in between.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-navy-500">
            &copy; {currentYear} Verex Fire Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-navy-500">
            <Link href="/privacy" className="transition-colors hover:text-navy-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-navy-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
