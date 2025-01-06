import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWordpressSimple } from '@fortawesome/free-brands-svg-icons'
import { faLink, faHouse, faUser, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto px-4 py-6">
        <ul className="flex space-x-12">
          <li><Link href="/" className="flex flex-col sm:flex-row items-center text-gray-300 hover:text-white transition-colors"><FontAwesomeIcon icon={faHouse} className="text-md mr-2" /> Home</Link></li>
          <li><Link href="/about" className="flex flex-col sm:flex-row items-center text-gray-300 hover:text-white transition-colors"><FontAwesomeIcon icon={faUser} className="text-md mr-2" /> About</Link></li>
          <li><Link href="/contact" className="flex flex-col sm:flex-row items-center text-gray-300 hover:text-white transition-colors"><FontAwesomeIcon icon={faPhone} className="text-md mr-2" /> Contact</Link></li>
          <li><Link href="/domains" className="flex flex-col sm:flex-row items-center text-gray-300 hover:text-white transition-colors"><FontAwesomeIcon icon={faLink} className="text-md mr-2" /> Domains</Link></li>
          <li><Link href="https://blog.aidxn.fun/" className="flex flex-col sm:flex-row items-center text-gray-300 hover:text-white transition-colors"><FontAwesomeIcon icon={faWordpressSimple} className="text-md mr-2" /> Blog</Link></li>
        </ul>
      </nav>
    </header>
  )
}
