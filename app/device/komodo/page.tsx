import Header from "@/components/Header"
import Footer from "@/components/Footer"
import {
  Cpu,
  MemoryStick,
  HardDrive,
  Hash,
  Hammer,
  Music,
  Folder,
  Layers,
} from "lucide-react"
import { FaGoogle, FaYoutube } from "react-icons/fa"
import { VscTerminalLinux } from "react-icons/vsc"
import { MdOutlineAndroid } from "react-icons/md"
import { LuPackageOpen } from "react-icons/lu"
import { RiTelegram2Fill } from "react-icons/ri"
import Image from "next/image"
import Link from "@/components/objects/Link"

export default function Cheetah() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow px-6 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
            <div className="w-full lg:w-1/3 flex justify-center">
              <Image
                src="/img/komodo.png"
                alt="Google Pixel 9 Pro XL (komodo)"
                width={450}
                height={450}
                className="w-full max-w-md h-auto"
              />
            </div>
            <div className="w-full lg:w-2/3">
              <div className="text-center lg:text-left mb-12">
                <h1 className="text-4xl font-semibold mb-3 text-gray-200 flex items-center justify-center lg:justify-start">
                  <FaGoogle size={30} className="mr-2" />
                  Pixel 9 Pro XL
                </h1>
                <h3 className="text-xl font-semibold mb-8 text-slate-500">komodo</h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                <div className="space-y-8">
                  <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-semibold mb-6 text-gray-200 flex items-center justify-center lg:justify-start">
                      <Cpu className="mr-2" />
                      Specs
                    </h1>
                    <div className="space-y-4">
                      <p className="flex items-center justify-center lg:justify-start">
                        <Cpu className="mr-3" size={20} />
                        <b className="mr-2">CPU:</b> Google Tensor G4
                      </p>
                      <p className="flex items-center justify-center lg:justify-start">
                        <HardDrive className="mr-3" size={20} />
                        <b className="mr-2">Storage:</b> 128GB
                      </p>
                      <p className="flex items-center justify-center lg:justify-start">
                        <MemoryStick className="mr-3" size={20} />
                        <b className="mr-2">RAM:</b> 16GB
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
                        <b className="mr-2">Kernel:</b>
                        <Link
                          className="underline hover:glow transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/WildKernels/GKI_KernelSU_SUSFS"
                        >
                          6.1.134-android14-SUSFS-Wild
                        </Link>
                      </p>
                      <p className="flex items-center justify-center lg:justify-start">
                        <MdOutlineAndroid className="mr-3" size={20} />
                        <b className="mr-2">ROM:</b>
                        <Link
                          className="underline hover:glow transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://developer.android.com/about/versions/16/get#google-pixel-devices"
                        >
                          Android 16 QPR1
                        </Link>
                      </p>
                      <p className="flex items-center justify-center lg:justify-start">
                        <Hammer className="mr-3" size={20} />
                        <b className="mr-2">Root:</b>
                        <Link
                          className="underline hover:glow transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/rifsxd/KernelSU-Next"
                        >
                          KernelSU-Next
                        </Link>
                      </p>
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
                          href="https://tidal.com"
                        >
                          Tidal
                        </Link>
                      </p>
                      <p className="flex items-center justify-center lg:justify-start">
                        <Folder className="mr-3" size={20} />
                        <b className="mr-2">Files:</b>
                        <Link
                          className="underline hover:glow transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://mixplorer.com/"
                        >
                          MiXplorer
                        </Link>
                      </p>
                      <p className="flex items-center justify-center lg:justify-start">
                        <RiTelegram2Fill className="mr-3" size={20} />
                        <b className="mr-2">TG Client:</b>
                        <Link
                          className="underline hover:glow transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://t.me/AyuGramReleases"
                        >
                          AyuGram
                        </Link>
                      </p>
                      <p className="flex items-center justify-center lg:justify-start">
                        <FaYoutube className="mr-3" size={20} />
                        <b className="mr-2">YouTube:</b>
                        <Link
                          className="underline hover:glow transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://revanced.app"
                        >
                          ReVanced
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="text-center lg:text-left">
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
                          href="https://modules.lol/module/kowx712-bindhosts"
                        >
                          bindhosts
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="underline hover:glow transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://github.com/EmojiReplacer/Emoji-Replacer"
                        >
                          Emoji Replacer
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="underline hover:glow transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://modules.lol/module/entr0pia-f-droid-privileged-extension-installer"
                        >
                          F-Droid Privileged Extension
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="underline hover:glow transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://modules.lol/module/sidex15-susfs"
                        >
                          SUSFS-FOR-KERNELSU
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="underline hover:glow transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://modules.lol/module/5ec1cff-tricky-store"
                        >
                          Tricky Store
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="underline hover:glow transition-all"
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://modules.lol/module/dpejoh-and-yuri-yurikey"
                        >
                          Yuri Keybox Manager
                        </Link>
                      </li>
                    </ul>
                  </div>
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

