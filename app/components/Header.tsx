import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faHouse, faUser, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto px-4 py-6">
        <ul className="flex space-x-6">
          <li><Link href="/" className="text-gray-300 hover:text-white transition-colors"><FontAwesomeIcon icon={faHouse} className="text-md mr-1" /> Home</Link></li>
          <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors"><FontAwesomeIcon icon={faUser} className="text-md mr-1" /> About</Link></li>
          <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors"><FontAwesomeIcon icon={faPhone} className="text-md mr-1" /> Contact</Link></li>
          <li><Link href="/domains" className="text-gray-300 hover:text-white transition-colors"><FontAwesomeIcon icon={faLink} className="text-md mr-1" /> Domains</Link></li>
        </ul>
      </nav>
    </header>
  )
}
