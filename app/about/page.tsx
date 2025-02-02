import Header from '@/components/Header'
import AboutPg from '@/components/pages/About'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <AboutPg />
      </main>
      <Footer />
    </div>
  )
}
