"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/objects/Button'
import Link from '@/components/objects/Link'
import LastPlayed from '@/components/widgets/NowPlaying'
import Image from 'next/image'
import { CreditCard, Mail, PillBottle, Scale } from 'lucide-react'
import { FaHandcuffs } from "react-icons/fa6"
import { useTranslation } from 'react-i18next'
import { SiGithubsponsors } from 'react-icons/si'

export default function Home() {
  const { t } = useTranslation()

  const mainStrings: string[][] = [
    t('home.whoAmI', { returnObjects: true }) as string[],
    t('home.whatIDo', { returnObjects: true }) as string[],
    t('home.whereYouAre', { returnObjects: true }) as string[]
  ]

  const mainSections = [
    t('home.sections.whoIAm'),
    t('home.sections.whatIDo'),
    t('home.sections.whereYouAre')
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="w-full">
        <div className="my-12 text-center">
          <Image
            src="/ihatenodejs.jpg"
            alt="My Profile Picture"
            width={150}
            height={150}
            className="rounded-full mx-auto mb-6 border-4 border-gray-700 hover:border-gray-600 transition-colors duration-300"
          />
          <h1 className="text-4xl font-bold mb-2 text-gray-100 glow">{t('home.profile.name')}</h1>
          <p className="text-gray-400 text-xl">{t('home.profile.description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <div className="p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
            <LastPlayed />
          </div>

          {mainSections.map((section, secIndex) => (
            <section key={secIndex} className="p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-200">{section}</h2>
              {mainStrings[secIndex].map((text: string, index: number) => (
                <p key={index} className="text-gray-300 leading-relaxed mt-2">
                  {text}
                  {secIndex === 2 && index === 2 && (
                    <>
                      {' '}
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

          <section id="contact" className="p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">{t('home.contact.title')}</h2>
            <p className="text-gray-300 mb-6">{t('home.contact.description')}</p>
            <Button
              href={'/contact'}
              label={t('home.contact.button')}
              icon={Mail}
            />
          </section>

          <section id="donation" className="p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">{t('home.donation.title')}</h2>
            <p className="text-gray-300 mb-6">{t('home.donation.description')}</p>
            
            <h4 className="text-lg font-semibold mb-2 text-gray-200">{t('home.donation.charities.title')}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 md:text-sm gap-3">
              <Button
                href={'https://unsilenced.org'}
                label={t('home.donation.charities.unsilenced')}
                icon={FaHandcuffs}
                target="_blank"
              />
              <Button
                href={'https://drugpolicy.org'}
                label={t('home.donation.charities.drugpolicy')}
                icon={PillBottle}
                target="_blank"
              />
              <Button
                href={'https://www.aclu.org'}
                label={t('home.donation.charities.aclu')}
                icon={Scale}
                target="_blank"
              />
            </div>

            <h4 className="text-lg font-semibold mt-5 mb-2 text-gray-200">{t('home.donation.donate.title')}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 md:text-sm gap-3">
              <Button
                href={'https://donate.stripe.com/6oEeWVcXs9L9ctW4gj'}
                label={t('home.donation.donate.stripe')}
                icon={CreditCard}
                target="_blank"
              />
              <Button
                href={'https://github.com/sponsors/ihatenodejs'}
                label={t('home.donation.donate.github')}
                icon={SiGithubsponsors}
                target="_blank"
              />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}