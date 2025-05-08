"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from '@/components/objects/Link'
import Button from '@/components/objects/Button'
import FeaturedRepos from '@/components/widgets/FeaturedRepos'
import Image from 'next/image'
import { useState } from 'react'
import { User, Smartphone } from 'lucide-react'
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
      <main className="text-center py-12">
        <div className='mb-6 flex justify-center'>
          <User size={60} />
        </div>
        <h1 className="text-4xl font-bold my-2 text-center text-gray-200" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
          {t('about.title')}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {mainStrings.map((section, index) => {
            if (mainSections[index] === t('about.sections.featuredProjects')) {
              return (
                <section key={index} className="p-8 border-2 border-gray-700 rounded-lg col-span-2 hover:border-gray-600 transition-colors duration-300">
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
                <section key={index} className="p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-200">{mainSections[index]}</h2>
                  {section.map((text, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed mt-2">
                      {text.split(/(ihatenodejs|LibreCloud Git|aidan)/).map((part, i) => {
                        if (part === 'ihatenodejs') {
                          return <Link key={i} href="https://github.com/ihatenodejs/">GitHub</Link>
                        }
                        if (part === 'LibreCloud Git') {
                          return <Link key={i} href="https://git.pontusmail.org/">LibreCloud Git</Link>
                        }
                        if (part === 'aidan') {
                          return <Link key={i} href="https://git.pontusmail.org/aidan/">aidan</Link>
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
                      />
                    </div>
                  )}
                </section>
              )
            } else if (mainSections[index] === t('about.sections.devices')) {
              return (
                <section key={index} className="p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-200">{mainSections[index]}</h2>
                  {Object.entries(section).map(([key, value], index) => (
                    <div key={index}>
                      <h3 className={cn("text-xl font-semibold mb-2 text-gray-200", key === "Laptop" && "mt-4")}>{key}</h3>
                      {(value as unknown as string[]).map((text: string, index: number) => (
                        <p key={index} className="text-gray-300 leading-relaxed mt-2">
                          {text.split(/(KernelSU-Next|LineageOS microG)/).map((part, i) => {
                            if (part === 'KernelSU-Next') {
                              return <Link key={i} href="https://github.com/KernelSU-Next/KernelSU-Next">KernelSU-Next</Link>
                            }
                            if (part === 'LineageOS microG') {
                              return <Link key={i} href="https://lineage.microg.org/">LineageOS microG</Link>
                            }
                            return part
                          })}
                        </p>
                      ))}
                      {key === "Phone" && (
                        <Button
                          href="/phone"
                          label="My Phone"
                          icon={Smartphone}
                          className="mt-4"
                        />
                      )}
                    </div>
                  ))}
                </section>
              )
            } else if (mainSections[index] === t('about.sections.hobbies')) {
              return (
                <section key={index} className="p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-200">{mainSections[index]}</h2>
                  {section.map((text, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed mt-2">
                      {text.split(/(my Gitea instance|my phone)/).map((part, i) => {
                        if (part === 'my Gitea instance') {
                          return <Link key={i} href="https://git.pontusmail.org/">my Gitea instance</Link>
                        }
                        if (part === 'my phone') {
                          return <Link key={i} href="/phone">my phone</Link>
                        }
                        return part
                      })}
                    </p>
                  ))}
                </section>
              )
            } else if (mainSections[index] === t('about.sections.projects')) {
              return (
                <section key={index} className="p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-200">{mainSections[index]}</h2>
                  {section.map((text, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed mt-2">
                      {text.split(/(LibreCloud)/).map((part, i) => {
                        if (part === 'LibreCloud') {
                          return <Link key={i} href="https://librecloud.cc/">LibreCloud</Link>
                        }
                        return part
                      })}
                    </p>
                  ))}
                </section>
              )
            } else {
              return (
                <section key={index} className="p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
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
