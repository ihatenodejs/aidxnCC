import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Smartphone, Cpu, MemoryStick, HardDrive, Hash, Hammer, Music, Folder, Layers, SquarePen } from "lucide-react"
import { FaGoogle, FaYoutube } from "react-icons/fa"
import { VscTerminalLinux } from "react-icons/vsc"
import { MdOutlineAndroid } from "react-icons/md"
import { LuPackageOpen } from "react-icons/lu"
import { RiTelegram2Fill } from "react-icons/ri"
import Image from "next/image"
import Link from "next/link"
import { FaStarHalfStroke, FaStar } from "react-icons/fa6"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <Smartphone size={60} />
          </div>
          <h1
            className="text-4xl font-bold my-2 text-center text-gray-200"
            style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}
          >
            My Phone
          </h1>
        </div>
        <div className="px-6 pt-6">
          <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8">
            <div className="w-full max-w-sm mx-auto justify-start lg:justify-center lg:mx-0">
              <Image
                src="/img/cheetah.png"
                alt="Google Pixel 7 Pro (cheetah)"
                width={450}
                height={450}
                className="w-full h-auto"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="w-full text-center lg:text-left">
                <h1 className="text-4xl font-semibold mt-3 text-gray-200 flex items-center justify-center lg:justify-start">
                  <FaGoogle size={30} className="mr-2" />
                  Pixel 7 Pro
                </h1>
                <h3 className="text-xl font-semibold mb-4 text-slate-500">cheetah</h3>
                <hr className="mb-6 lg:mb-0"/>
                <h1 className="text-3xl font-semibold my-3 text-gray-200 flex items-center justify-center lg:justify-start">
                  <Cpu className="mr-2" />
                  Specifications
                </h1>
                <p className="mb-1 flex items-center justify-center lg:justify-start">
                  <Cpu className="mr-2" size={20} />
                  <b className="mr-1">CPU:</b> Google Tensor G2
                </p>
                <p className="mb-1 flex items-center justify-center lg:justify-start">
                  <HardDrive className="mr-2" size={20} />
                  <b className="mr-1">Storage:</b> 128GB
                </p>
                <p className="mb-1 flex items-center justify-center lg:justify-start">
                  <MemoryStick className="mr-2" size={20} />
                  <b className="mr-1">RAM:</b> 12GB
                </p>
                <hr className="my-6 lg:mt-4 lg:mb-0" />
                <h1 className="text-3xl font-semibold my-3 text-gray-200 flex items-center justify-center lg:justify-start">
                  <Hash className="mr-2" />
                  Modifications
                </h1>
                <p className="mb-1 flex items-center justify-center lg:justify-start">
                  <VscTerminalLinux className="mr-2" size={20} />
                  <b className="mr-1">Kernel:</b>
                  <Link
                    className="underline hover:glow transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/WildPlusKernel/GKI_KernelSU_SUSFS/"
                  >
                    android13-5.10.WILD
                  </Link>
                </p>
                <p className="mb-1 flex items-center justify-center lg:justify-start">
                  <MdOutlineAndroid className="mr-2" size={20} />
                  <b className="mr-1">ROM:</b>
                  <Link
                    className="underline hover:glow transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://axionaosp.github.io"
                  >
                    AxionAOSP v1.1
                  </Link>
                </p>
                <p className="mb-1 flex items-center justify-center lg:justify-start">
                  <Hammer className="mr-2" size={20} />
                  <b className="mr-1">Root:</b>
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
              <hr className="lg:hidden" />
              <div className="w-full text-center lg:text-left lg:ml-8">
                <h1 className="text-3xl font-semibold mb-3 text-gray-200 flex items-center justify-center lg:justify-start">
                  <LuPackageOpen className="mr-2" />
                  Apps
                </h1>
                <p className="mb-1 flex items-center justify-center lg:justify-start">
                  <Music className="mr-2" size={20} />
                  <b className="mr-1">Music:</b>
                  <Link
                    className="underline hover:glow transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://qobuz.com"
                  >
                    Qobuz
                  </Link>
                </p>
                <p className="mb-1 flex items-center justify-center lg:justify-start">
                  <Folder className="mr-2" size={20} />
                  <b className="mr-1">Files:</b>
                  <Link
                    className="underline hover:glow transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mixplorer.com/"
                  >
                    MiXplorer Beta
                  </Link>
                </p>
                <p className="mb-1 flex items-center justify-center lg:justify-start">
                  <RiTelegram2Fill className="mr-2" size={20} />
                  <b className="mr-1">Telegram:</b>
                  <Link
                    className="underline hover:glow transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/arslan4k1390/Cherrygram"
                  >
                    Cherrygram
                  </Link>
                </p>
                <p className="mb-1 flex items-center justify-center lg:justify-start">
                  <FaYoutube className="mr-2" size={20} />
                  <b className="mr-1">YouTube:</b>
                  <Link
                    className="underline hover:glow transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/NoName-exe/revanced-extended"
                  >
                    ReVanced Extended
                  </Link>
                </p>
                <hr className="mt-8 mb-6 lg:my-4" />
                <h1 className="text-3xl font-semibold mb-3 text-gray-200 flex items-center justify-center lg:justify-start">
                  <Layers className="mr-2" />
                  Modules
                </h1>
                <ul className="list-disc list-inside space-y-1">
                  <li className="mb-0.5">
                    <Link
                      className="underline hover:glow transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/chiteroman/PlayIntegrityFix"
                    >
                      Play Integrity Fix
                    </Link>
                  </li>
                  <li className="mb-0.5">
                    <Link
                      className="underline hover:glow transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/5ec1cff/TrickyStore"
                    >
                      Tricky Store
                    </Link>
                  </li>
                  <li className="mb-0.5">
                    <Link
                      className="underline hover:glow transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/LSPosed/LSPosed.github.io/releases"
                    >
                      Shamiko
                    </Link>
                  </li>
                  <li className="mb-0.5">
                    <Link
                      className="underline hover:glow transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/mywalkb/LSPosed_mod/releases"
                    >
                      LSPosed_mod
                    </Link>
                  </li>
                  <li className="mb-0.5">
                    <Link
                      className="underline hover:glow transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Dr-TSNG/ZygiskNext"
                    >
                      Zygisk Next
                    </Link>
                  </li>
                  <li className="mb-0.5">
                    <Link
                      className="underline hover:glow transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/sidex15/susfs4ksu-module"
                    >
                      SUSFS for KernelSU
                    </Link>
                  </li>
                </ul>
              </div>
              <hr className="mt-2 lg:mt-0 lg:hidden" />
              <div className="w-full lg:mt-0 text-center lg:text-left lg:ml-8">
                <h1 className="text-3xl font-semibold mb-3 text-gray-200 flex items-center justify-center lg:justify-start">
                  <SquarePen className="mr-2" />
                  Review
                </h1>
                <p className="mb-1 flex items-center justify-center lg:justify-start">
                  <b className="mr-1">Rating:</b>
                  <FaStar size={15} /> <FaStar size={15} /> <FaStar size={15} /> <FaStar size={15} />{" "}
                  <FaStarHalfStroke size={15} />
                </p>
                <p className="max-w-sm mt-4 lg:text-sm">
                  Coming from a Galaxy A32 5G, the Pixel 7 Pro is a massive upgrade. The Tensor chip is highly performant, and with 12GB of RAM, the device is extremely snappy.
                </p>
                <p className="max-w-sm mt-4 lg:text-sm">
                  I have had some issues with battery, although this may be due to Play Integrity Fix, which is known to consume battery. However, the camera has been a massive improvement, and the photos it is capable of taking are amazing.
                </p>
                <p className="max-w-sm mt-4 lg:text-sm">
                  While the volume buttons did fall off, I do not discredit them for this, as Android makes it easy to have customizable on-screen volume buttons, something iPhones do not have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

