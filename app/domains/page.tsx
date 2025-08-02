import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Link } from "lucide-react"
import { TbCurrencyDollarOff } from "react-icons/tb";
import domains from "@/public/data/domains.json"

export default function Domains() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          <div className="flex flex-col gap-4">
            <div className="flex justify-center">
              <Link size={60} />
            </div>
            <h1 className="text-4xl font-bold mt-2 text-center text-gray-200" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
              My Domains
            </h1>
          </div>
          <div className="mb-4 p-4 pt-8 flex flex-col items-center space-y-2">
            <TbCurrencyDollarOff size={26} className="text-red-500" />
            <span className="text-red-500 font-medium text-center mt-1 mb-0">
              These domains are not for sale.
            </span>
            <span className="text-red-500 font-medium text-center">
              All requests to buy them will be declined.
            </span>
          </div>
          <div className="p-6 pt-0 w-full">
            {domains.map(domain => (
              <div key={domain.id} className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-200">
                  {domain.domain}
                </h2>
                <p className="text-gray-300">{domain.usage}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
