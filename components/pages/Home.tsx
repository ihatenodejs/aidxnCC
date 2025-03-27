"use client"

import Image from 'next/image'
import Button from '../objects/Button'
import LastPlayed from '@/components/widgets/LastPlayed'
import { useTranslation } from 'react-i18next'
import Link from '@/components/objects/Link'
import { Mail } from 'lucide-react'

export default function Home() {
  const { t } = useTranslation();

  const mainStrings: string[][] = [
    t('home.whoAmI', { returnObjects: true }) as string[],
    t('home.whatIDo', { returnObjects: true }) as string[],
    t('home.whereYouAre', { returnObjects: true }) as string[]
  ];

  const mainSections = [
    t('home.sections.whoIAm'),
    t('home.sections.whatIDo'),
    t('home.sections.whereYouAre')
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-12 text-center">
        <Image
          src="/ihatenodejs.jpg"
          alt="My Profile Picture"
          width={150}
          height={150}
          className="rounded-full mx-auto mb-6 border-4 border-gray-700"
        />
        <h1 className="text-4xl font-bold mb-2 text-gray-100 glow">{t('home.profile.name')}</h1>
        <p className="text-gray-400 text-xl">{t('home.profile.description')}</p>
      </div>

      <LastPlayed />

      {mainSections.map((section, secIndex) => (
        <section key={secIndex} id="about" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">{section}</h2>
          {mainStrings[secIndex].map((text: string, index: number) => (
            <p key={index} className="text-gray-300 leading-relaxed mt-2">
              {text}
              {secIndex === 2 && index === 1 && (
                <>
                  <Link href="https://nvd.nist.gov/vuln/detail/CVE-2025-29927">
                    CVE-2025-29927
                  </Link>
                  .
                </>
              )}
            </p>
          ))}
        </section>
      ))}

      <section id="contact">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">{t('home.contact.title')}</h2>
        <p className="text-gray-300 mb-6">{t('home.contact.description')}</p>
        <Button
          href={'/contact'}
          label={t('home.contact.button')}
          icon={Mail}
        />
      </section>
    </div>
  )
}
