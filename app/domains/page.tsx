import Header from '../components/Header'
import DomainTmp from '../components/DomainTmp'
import Footer from '../components/Footer'

export default function Domains() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <DomainTmp />
      </main>
      <Footer />
    </div>
  )
}
