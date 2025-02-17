import Header from '@/components/Header'
import WhatWasGoingOn from '@/components/pages/time-periods/early-summer-2024/WhatWasGoingOn'
import Footer from '@/components/Footer'

export default function EarlySummer2024() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow container mx-auto px-4 py-12">
        <WhatWasGoingOn />
      </main>
      <Footer />
    </div>
  )
}