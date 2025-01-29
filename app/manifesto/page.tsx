import Header from '../components/Header'
import ManifestoPg from '../components/pages/Manifesto'
import Footer from '../components/Footer'

export default function Manifesto() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <ManifestoPg />
      </main>
      <Footer />
    </div>
  )
}
