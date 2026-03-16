import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <h1 className="text-8xl font-heading font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-heading font-semibold text-navy-DEFAULT mb-4">Page Not Found</h2>
        <p className="text-smoke-600 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn-fire">
            <span>Back to Home</span>
          </Link>
          <Link href="/contact" className="btn-outline-fire">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  )
}
