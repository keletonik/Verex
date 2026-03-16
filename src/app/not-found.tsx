import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-navy-DEFAULT">
      <div className="text-center px-6">
        <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-fire-500 to-ember-DEFAULT flex items-center justify-center mb-8">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M12 2C12 2 4 10 4 15C4 19.4183 7.58172 23 12 23C16.4183 23 20 19.4183 20 15C20 10 12 2 12 2Z" fill="currentColor" opacity="0.9"/>
            <path d="M12 8C12 8 8 13 8 16C8 18.2091 9.79086 20 12 20C14.2091 20 16 18.2091 16 16C16 13 12 8 12 8Z" fill="#FDB44B"/>
          </svg>
        </div>
        <h1 className="text-7xl font-heading font-bold gradient-text mb-4">404</h1>
        <h2 className="text-2xl font-heading font-semibold text-white mb-4">Page Not Found</h2>
        <p className="text-smoke-400 mb-8 max-w-md mx-auto">
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
