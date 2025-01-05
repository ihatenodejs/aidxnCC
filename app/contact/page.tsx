import Header from '../components/Header'
import ContactTmp from '../components/ContactTmp'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <ContactTmp />
      </main>
      <Footer />
    </div>
  )
}