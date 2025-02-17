import Header from '@/components/Header'
import ContactPg from '@/components/pages/Contact'
import Footer from '@/components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow container mx-auto px-4 py-12">
        <ContactPg />
      </main>
      <Footer />
    </div>
  )
}