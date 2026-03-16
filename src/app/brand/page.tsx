'use client'

import Navbar from '@/components/ui/Navbar'
import Footer from '@/components/ui/Footer'
import BrandGuidelines from '@/components/ui/BrandGuidelines'

export default function BrandPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <BrandGuidelines />
      </main>
      <Footer />
    </>
  )
}
