import { TbCopyrightOff } from "react-icons/tb"
import { RxDividerVertical } from "react-icons/rx"
import { SiNextdotjs } from "react-icons/si"
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-4">
      <div className="flex flex-col sm:flex-row container mx-auto px-4 text-center items-center justify-center">
        <Link href="https://git.pontusmail.org/aidan/aidxnCC" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors mb-2 sm:mb-0">
          <div className="flex items-center justify-center">
            <TbCopyrightOff className="text-md mr-2" />
            Open Source and Copyright-Free
          </div>
        </Link>
        <RxDividerVertical className="hidden sm:block mx-4"/>
        <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors mb-2 sm:mb-0">
          <div className="flex items-center justify-center">
            <SiNextdotjs className="text-md mr-2" />
            Built with Next.js
          </div>
        </Link>
      </div>
    </footer>
  )
}
