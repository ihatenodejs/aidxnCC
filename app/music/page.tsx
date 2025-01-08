import Header from '../components/Header'
import MusicWidget from '../components/Music'
import Footer from '../components/Footer'

export default function Music() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <MusicWidget />
      </main>
      <Footer />
    </div>
  )
}