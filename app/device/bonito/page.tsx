import Header from "@/components/Header"
import Footer from "@/components/Footer"
import {
  Cpu,
  MemoryStick,
  HardDrive,
  Hash,
  Music,
} from "lucide-react"
import { FaGoogle } from "react-icons/fa"
import { VscTerminalLinux } from "react-icons/vsc"
import { MdOutlineAndroid } from "react-icons/md"
import { LuPackageOpen } from "react-icons/lu"
import { RiTelegram2Fill } from "react-icons/ri"
import Image from "next/image"
import Link from "@/components/objects/Link"

export default function Bonito() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            <div className="w-full lg:w-1/3 flex justify-center">
              <Image
                src="/img/bonito.png"
                alt="Google Pixel 3a XL (bonito)"
                width={450}
                height={450}
                className="w-full max-w-md h-auto"
              />
            </div>
            <div className="w-full lg:w-2/3">
              <div className="text-center lg:text-left mb-12">
                <h1 className="text-4xl font-semibold mb-3 text-gray-200 flex items-center justify-center lg:justify-start">
                  <FaGoogle size={30} className="mr-2" />
                  Pixel 3a XL
                </h1>
                <h3 className="text-xl font-semibold mb-8 text-slate-500">bonito</h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                <div className="space-y-8">
                  <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-semibold mb-6 text-gray-200 flex items-center justify-center lg:justify-start">
                      <Cpu className="mr-2" />
                      Specs
                    </h1>
                    <div className="space-y-4">
                      <p className="flex items-center justify-center lg:justify-start">
                        <Cpu className="mr-3" size={20} />
                        <b className="mr-2">Chipset:</b> Qualcomm Snapdragon 670
                      </p>
                      <p className="flex items-center justify-center lg:justify-start">
                        <HardDrive className="mr-3" size={20} />
                        <b className="mr-2">Storage:</b> 64GB
                      </p>
                      <p className="flex items-center justify-center lg:justify-start">
                        <MemoryStick className="mr-3" size={20} />
                        <b className="mr-2">RAM:</b> 4GB
                      </p>
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-semibold mb-6 text-gray-200 flex items-center justify-center lg:justify-start">
                      <Hash className="mr-2" />
                      Modifications
                    </h1>
                    <div className="space-y-4">
                      <p className="flex items-center justify-center lg:justify-start">
                        <VscTerminalLinux className="mr-3" size={20} />
                        <b className="mr-2">Kernel Version:</b>
                        4.9.337
                      </p>
                      <p className="flex items-center justify-center lg:justify-start">
                        <MdOutlineAndroid className="mr-3" size={20} />
                        <b className="mr-2">ROM:</b>
                        <Link
                          className="underline hover:glow transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.ubuntu-touch.io"
                        >
                          Ubuntu Touch
                        </Link>
                      </p>
                      {/*<p className="flex items-center justify-center lg:justify-start">
                        <Hammer className="mr-3" size={20} />
                        <b className="mr-2">Root:</b>
                        <Link
                          className="underline hover:glow transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/topjohnwu/Magisk"
                        >
                          Magisk
                        </Link>
                        N/A
                      </p>*/}
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-semibold mb-6 text-gray-200 flex items-center justify-center lg:justify-start">
                      <LuPackageOpen className="mr-2" />
                      Apps
                    </h1>
                    <div className="space-y-4">
                      <p className="flex items-center justify-center lg:justify-start">
                        <Music className="mr-3" size={20} />
                        <b className="mr-2">Music:</b>
                        <Link
                          className="underline hover:glow transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/arubislander/uSonic"
                        >
                          uSonic
                        </Link>
                      </p>
                      {/*<p className="flex items-center justify-center lg:justify-start">
                        <Folder className="mr-3" size={20} />
                        <b className="mr-2">Files:</b>
                        <Link
                          className="underline hover:glow transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://mixplorer.com/"
                        >
                          MiXplorer Beta
                        </Link>
                        N/A
                      </p>*/}
                      <p className="flex items-center justify-center lg:justify-start">
                        <RiTelegram2Fill className="mr-3" size={20} />
                        <b className="mr-2">Telegram Client:</b>
                        <Link
                          className="underline hover:glow transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://open-store.io/app/teleports.ubports"
                        >
                          TELEports
                        </Link>
                      </p>
                      {/*<p className="flex items-center justify-center lg:justify-start">
                        <FaYoutube className="mr-3" size={20} />
                        <b className="mr-2">YouTube:</b>
                        <Link
                          className="underline hover:glow transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/polymorphicshade/Tubular"
                        >
                          Tubular
                        </Link>
                      </p>*/}
                    </div>
                  </div>
                  {/*<div className="text-center lg:text-left">
                    <h1 className="text-3xl font-semibold mb-6 text-gray-200 flex items-center justify-center lg:justify-start">
                      <Layers className="mr-2" />
                      Modules
                    </h1>
                    <ul className="list-disc list-inside space-y-3">
                      <li>
                        <Link
                          className="underline hover:glow transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/bindhosts/bindhosts"
                        >
                          bindhosts
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="underline hover:glow transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/Keinta15/Magisk-iOS-Emoji"
                        >
                          Magisk iOS Emoji
                        </Link>
                      </li>
                    </ul>
                  </div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

