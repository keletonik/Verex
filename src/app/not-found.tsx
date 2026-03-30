import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-white px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-xl text-center">
        {/* 404 Badge */}
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
          Error 404
        </p>

        {/* Large 404 */}
        <h1 className="mt-4 font-heading text-7xl font-bold text-navy-900 sm:text-8xl lg:text-9xl">
          404
        </h1>

        {/* Message */}
        <h2 className="mt-6 font-heading text-2xl font-bold text-navy-900 sm:text-3xl">
          Page Not Found
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>

        {/* Navigation Links */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
          >
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
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-navy-900 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
          >
            Our Services
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-navy-900 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
          >
            Contact Us
          </Link>
        </div>

        {/* Divider + helpful hint */}
        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-500">
            If you believe this is an error, please{' '}
            <Link
              href="/contact"
              className="font-medium text-orange-600 underline underline-offset-4 transition hover:text-orange-700"
            >
              contact our team
            </Link>{' '}
            and we&apos;ll resolve it promptly.
          </p>
        </div>
      </div>
    </section>
  )
}
