import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Verex Fire Solutions privacy policy. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-32 lg:py-40">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
          Legal
        </p>
        <h1 className="mt-3 font-heading text-4xl font-bold text-navy-900 sm:text-5xl">
          Privacy Policy
        </h1>
        <div className="mt-10 space-y-6 text-navy-600 leading-relaxed">
          <p>
            Verex Fire Solutions (&ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;) is
            committed to protecting your personal information in accordance with the Australian
            Privacy Principles under the <em>Privacy Act 1988</em> (Cth).
          </p>
          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">
            Information We Collect
          </h2>
          <p>
            We may collect personal information including your name, email address, phone number,
            company name, and details of your enquiry when you contact us through our website,
            email, or phone.
          </p>
          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">
            How We Use Your Information
          </h2>
          <p>
            Your information is used to respond to your enquiries, provide our fire safety
            services, manage client relationships, and comply with legal obligations. We do not
            sell or share your personal information with third parties for marketing purposes.
          </p>
          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">
            Data Security
          </h2>
          <p>
            We take reasonable steps to protect your personal information from misuse,
            interference, loss, unauthorised access, modification, or disclosure.
          </p>
          <h2 className="font-heading text-xl font-semibold text-navy-900 pt-4">
            Contact Us
          </h2>
          <p>
            If you have questions about this privacy policy or wish to access or correct your
            personal information, please{' '}
            <Link href="/contact" className="text-orange-600 underline underline-offset-4 hover:text-orange-700 transition-colors">
              contact us
            </Link>.
          </p>
        </div>
      </div>
    </section>
  )
}
