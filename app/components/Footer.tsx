import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-4 text-center">
        <a href="https://github.com/ihatenodejs/aidxnCC" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faGithub} className="text-md mr-1" /> This website is free, open source and in the public domain.
        </a>
      </div>
    </footer>
  )
}
