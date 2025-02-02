import Header from '@/components/Header'
import DomainsPg from '@/components/pages/Domains'
import Footer from '@/components/Footer'

export default function Domains() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <DomainsPg />
      </main>
      <Footer />
    </div>
  )
}
