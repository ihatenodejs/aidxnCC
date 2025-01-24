import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';

interface ContactButtonProps {
  href: string;
  icon: IconDefinition;
  label: string;
  className?: string;
}
  
function ContactButton({ href, icon, label, className }: ContactButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-colors inline-flex items-center ${className}`}
    >
      <FontAwesomeIcon icon={icon} className="text-xl mr-2" />
      {label}
    </Link>
  )
}

export default ContactButton;