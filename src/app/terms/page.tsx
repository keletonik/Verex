import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Verex Fire Solutions terms of service. Read the terms and conditions governing use of our website and services.',
}

export default function TermsOfServicePage() {
  return (
    <section className="bg-white py-32 lg:py-40">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
          Legal
        </p>
        <h1 className="mt-3 font-heading text-4xl font-bold text-navy-900 sm:text-5xl">
          Terms of Service
        </h1>
        <div className="mt-10 space-y-6 text-navy-600 leading-relaxed">
          <p>
            These terms and conditions govern your use of the Verex Fire Solutions website and
            services. By accessing this website, you agree to be bound by these terms.
          </p>
          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">
            Use of Website
          </h2>
          <p>
            The content on this website is provided for general information purposes only. While
            we endeavour to keep information accurate and current, we make no representations or
            warranties of any kind about the completeness, accuracy, or reliability of the
            information.
          </p>
          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">
            Services
          </h2>
          <p>
            All fire safety services provided by Verex Fire Solutions are subject to separate
            service agreements. The scope, terms, and pricing of services are defined in
            individual proposals and contracts agreed upon with each client.
          </p>
          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">
            Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, Verex Fire Solutions shall not be liable for
            any indirect, incidental, or consequential damages arising from the use of this
            website or reliance on information contained herein.
          </p>
          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">
            Contact
          </h2>
          <p>
            For questions about these terms, please{' '}
            <Link href="/contact" className="text-orange-600 underline underline-offset-4 hover:text-orange-700 transition-colors">
              contact us
            </Link>.
          </p>
        </div>
      </div>
    </section>
  )
}
