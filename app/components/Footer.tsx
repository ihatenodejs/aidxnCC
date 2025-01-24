import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-4 text-center">
        <a href="https://git.pontusmail.org/aidan/aidxnCC" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faHeart} className="text-md mr-1" /> This website is free, open source and in the public domain.
        </a>
      </div>
    </footer>
  )
}
