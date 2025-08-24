"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from '@/components/objects/Link'
import Button from '@/components/objects/Button'
import FeaturedRepos from '@/components/widgets/FeaturedRepos'
import Image from 'next/image'
import { useState } from 'react'
import { User } from 'lucide-react'
import { SiGoogle } from 'react-icons/si'
import { useTranslation } from 'react-i18next'
import { cn } from '@/lib/utils'

export default function About() {
  const { t } = useTranslation()
  const [imageError, setImageError] = useState(false)
  const mainStrings: string[][] = [
    t('about.projects', { returnObjects: true }) as string[],
    t('about.hobbies', { returnObjects: true }) as string[],
    t('about.devices', { returnObjects: true }) as string[],
    t('about.contributions', { returnObjects: true }) as string[],
    t('about.featuredProjects', { returnObjects: true }) as string[]
  ]

  const mainSections = [
    t('about.sections.projects'),
    t('about.sections.hobbies'),
    t('about.sections.devices'),
    t('about.sections.contributions'),
    t('about.sections.featuredProjects')
  ]
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="w-full">
        <div className="my-12 text-center">
          <div className="flex justify-center mb-6">
            <User size={60} />
          </div>
          <h1 className="text-4xl font-bold mb-2 text-gray-100 glow">{t('about.title')}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {mainStrings.map((section, index) => {
            if (mainSections[index] === t('about.sections.featuredProjects')) {
              return (
                <section key={index} className="p-4 sm:p-8 border-2 border-gray-700 rounded-lg lg:col-span-2 hover:border-gray-600 transition-colors duration-300">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-200">{mainSections[index]}</h2>
                  {section.map((text, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed mt-2">
                      {text}
                    </p>
                  ))}
                  <FeaturedRepos className="mt-4" />
                </section>
              )
            } else if (mainSections[index] === t('about.sections.contributions')) {
              return (
                <section key={index} className="p-4 sm:p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-200">{mainSections[index]}</h2>
                  {section.map((text, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed mt-2">
                      {text.split(/(ihatenodejs|p0ntus git|aidan)/).map((part, i) => {
                        if (part === 'ihatenodejs') {
                          return <Link key={i} href="https://github.com/ihatenodejs/">ihatenodejs</Link>
                        }
                        if (part === 'p0ntus git') {
                          return <Link key={i} href="https://git.p0ntus.com/">p0ntus git</Link>
                        }
                        if (part === 'aidan') {
                          return <Link key={i} href="https://git.p0ntus.com/aidan/">aidan</Link>
                        }
                        return part
                      })}
                    </p>
                  ))}
                  {!imageError && (
                    <div className="flex flex-col justify-center items-center w-full mt-4 gap-4">
                      <Image
                        src="https://github-readme-stats.vercel.app/api?username=ihatenodejs&theme=dark&show_icons=true&hide_border=true&count_private=true"
                        alt="ihatenodejs's Stats"
                        width={420}
                        height={200}
                        onError={() => setImageError(true)}
                        loading="eager"
                        priority
                        unoptimized
                        className="max-w-full h-auto"
                      />
                      <Image
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=ihatenodejs&theme=dark&show_icons=true&hide_border=true&layout=compact"
                        alt="ihatenodejs's Top Languages"
                        width={300}
                        height={200}
                        onError={() => setImageError(true)}
                        loading="eager"
                        priority
                        unoptimized
                        className="max-w-full h-auto"
                      />
                    </div>
                  )}
                </section>
              )
            } else if (mainSections[index] === t('about.sections.devices')) {
              return (
                <section key={index} className="p-4 sm:p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-200">{mainSections[index]}</h2>
                  {Object.entries(section).map(([key, value], index) => (
                    <div key={index}>
                      <h3 className={cn("text-xl font-semibold mb-2 text-gray-200", key === "Laptops" && "mt-4")}>{key}</h3>
                      {(value as unknown as string[]).map((text: string, index: number) => (
                        <p key={index} className="text-gray-300 leading-relaxed mt-2">
                          {text.split(/(KernelSU-Next|LineageOS 22.2|Android 16|Xubuntu)/).map((part, i) => {
                            if (part === 'KernelSU-Next') {
                              return <Link key={i} href="https://github.com/KernelSU-Next/KernelSU-Next">KernelSU-Next</Link>
                            }
                            if (part === 'LineageOS 22.2') {
                              return <Link key={i} href="https://wiki.lineageos.org/devices/bonito/">LineageOS 22.2</Link>
                            }
                            if (part === 'Android 16') {
                              return <Link key={i} href="https://developer.android.com/about/versions/16/get">Android 16</Link>
                            }
                            if (part === 'OpenCore') {
                              return <Link key={i} href="https://github.com/acidanthera/OpenCorePkg">OpenCore</Link>
                            }
                            if (part === 'Xubuntu') {
                              return <Link key={i} href="https://xubuntu.org/">Xubuntu</Link>
                            }
                            return part
                          })}
                        </p>
                      ))}
                      {key === "Mobile Devices" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                          <Button
                            href="/device/cheetah"
                            icon={<SiGoogle />}
                          >
                            Pixel 9 Pro XL
                          </Button>
                          <Button
                            href="/device/cheetah"
                            icon={<SiGoogle />}
                          >
                            Pixel 7 Pro
                          </Button>
                          <Button
                            href="/device/bonito"
                            icon={<SiGoogle />}
                          >
                            Pixel 3a XL
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </section>
              )
            } else if (mainSections[index] === t('about.sections.hobbies')) {
              return (
                <section key={index} className="p-4 sm:p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-200">{mainSections[index]}</h2>
                  {section.map((text, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed mt-2">
                      {text.split(/(my Forgejo server|my phone|AfC|OnlyNano)/).map((part, i) => {
                        if (part === 'my Forgejo server') {
                          return <Link key={i} href="https://git.p0ntus.com/">my Forgejo server</Link>
                        }
                        if (part === 'my phone') {
                          return <Link key={i} href="/device/cheetah">my phone</Link>
                        }
                        if (part === 'AfC') {
                          return <Link key={i} href="https://en.wikipedia.org/wiki/Wikipedia:WikiProject_Articles_for_creation">AfC</Link>
                        }
                        if (part === 'OnlyNano') {
                          return <Link key={i} href="https://en.wikipedia.org/wiki/User:OnlyNano">OnlyNano</Link>
                        }
                        return part
                      })}
                    </p>
                  ))}
                </section>
              )
            } else if (mainSections[index] === t('about.sections.projects')) {
              return (
                <section key={index} className="p-4 sm:p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-200">{mainSections[index]}</h2>
                  {section.map((text, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed mt-2">
                      {text.split(/(p0ntus|PontusHub|ABOCN|Kowalski|@KowalskiNodeBot)/).map((part, i) => {
                        if (part === 'p0ntus') {
                          return <Link key={i} href="https://p0ntus.com/">p0ntus</Link>
                        }
                        if (part === 'PontusHub') {
                          return <Link key={i} href="https://t.me/PontusHub">PontusHub</Link>
                        }
                        if (part === 'ABOCN') {
                          return <Link key={i} href="https://github.com/abocn">ABOCN</Link>
                        }
                        if (part === 'Kowalski') {
                          return <Link key={i} href="https://github.com/abocn/TelegramBot">Kowalski</Link>
                        }
                        if (part === '@KowalskiNodeBot') {
                          return <Link key={i} href="https://t.me/KowalskiNodeBot">@KowalskiNodeBot</Link>
                        }
                        return part
                      })}
                    </p>
                  ))}
                </section>
              )
            } else {
              return (
                <section key={index} className="p-4 sm:p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-200">{mainSections[index]}</h2>
                  {section.map((text, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed mt-2">
                      {text}
                    </p>
                  ))}
                </section>
              )
            }
          })}
        </div>
      </main>
      <Footer />
    </div>
  )
}
