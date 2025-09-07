import { TbCopyrightOff } from "react-icons/tb"
import { RxDividerVertical } from "react-icons/rx"
import Link from 'next/link'
import RandomFooterMsg from "./objects/RandomFooterMsg"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 py-4">
      <div className="flex flex-col sm:flex-row container mx-auto px-4 text-center items-center justify-center">
        <Link href="https://git.p0ntus.com/aidan/aidxnCC" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors mb-2 sm:mb-0">
          <div className="flex items-center justify-center">
            <TbCopyrightOff className="text-md mr-2" />
            Open Source and Copyright-Free
          </div>
        </Link>
        <RxDividerVertical className="hidden sm:block mx-4"/>
        <RandomFooterMsg />
      </div>
    </footer>
  )
}
