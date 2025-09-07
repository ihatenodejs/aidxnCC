"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/objects/Button'
import LastPlayed from '@/components/widgets/NowPlaying'
import LiveIndicator from '@/components/widgets/LiveIndicator'

import Image from 'next/image'

import {CreditCard, Mail, PillBottle, Scale, UserCircle} from 'lucide-react'
import { BsArrowClockwise } from "react-icons/bs";
import { FaHandcuffs } from "react-icons/fa6"
import {
  SiGithubsponsors,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiLinux,
  SiTypescript,
  SiClaude,
  SiPostgresql
} from 'react-icons/si'

import { useTranslation } from 'react-i18next'
import {TbHeartHandshake, TbUserHeart, TbMessage} from "react-icons/tb";
import {BiDonateHeart} from "react-icons/bi";

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
          <div className="relative border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300 p-4">
            <div className="absolute top-2 right-2">
              <LiveIndicator />
            </div>
            <div className="flex justify-center items-center h-full">
              <LastPlayed />
            </div>
          </div>

          {mainSections.map((section, secIndex) => (
            <section key={secIndex} className="p-4 sm:p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-200">{section === t('home.sections.whereYouAre') ? (
                <div className="flex flex-row items-center gap-2">
                  <TbHeartHandshake />
                  <span className="align-middle">{section}</span>
                </div>
              ) : section === t('home.sections.whoIAm') ? (
                <div className="flex flex-row items-center gap-2">
                  <UserCircle />
                  <span className="align-middle">{section}</span>
                </div>
              ) : section === t('home.sections.whatIDo') ? (
                <div className="flex flex-row items-center gap-2">
                  <TbUserHeart />
                  <span className="align-middle">{section}</span>
                </div>
              ) : (section)}</h2>
              {section === t('home.sections.whatIDo') && (
                <div className="flex flex-row items-center justify-center gap-4 my-8">
                  <SiNextdotjs size={38} />
                  <SiTypescript size={38} />
                  <SiTailwindcss size={38} />
                  <SiPostgresql size={38} />
                  <SiDocker size={38} />
                  <SiLinux size={38} />
                  <SiClaude size={38} />
                </div>
              )}
              {mainStrings[secIndex].map((text: string, index: number) => (
                <p key={index} className="text-gray-300 leading-relaxed mt-2">
                  {text}
                </p>
              ))}
            </section>
          ))}

          <section id="contact" className="p-4 sm:p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
            <h2 className="flex flex-row items-center gap-2 text-2xl font-semibold mb-4 text-gray-200">
              <TbMessage />
              {t('home.contact.title')}
            </h2>
            <p className="text-gray-300 mb-6">{t('home.contact.description')}</p>
            <Button
              href={'/contact'}
              icon={<Mail size={16} />}
            >
              {t('home.contact.button')}
            </Button>
          </section>

          <section id="donation" className="p-4 sm:p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
            <h2 className="flex flex-row items-center gap-2 text-2xl font-semibold mb-4 text-gray-200">
              <BiDonateHeart />
              {t('home.donation.title')}
            </h2>
            <p className="text-gray-300 mb-6">{t('home.donation.description')}</p>
            <h4 className="text-lg font-semibold mb-2 text-gray-200">{t('home.donation.charities.title')}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 md:text-sm gap-3">
              <Button
                href="https://unsilenced.org"
                icon={<FaHandcuffs />}
                target="_blank"
              >
                {t('home.donation.charities.unsilenced')}
              </Button>
              <Button
                href="https://drugpolicy.org"
                icon={<PillBottle size={16} />}
                target="_blank"
              >
                {t('home.donation.charities.drugpolicy')}
              </Button>
              <Button
                href="https://www.aclu.org"
                icon={<Scale size={16} />}
                target="_blank"
              >
                {t('home.donation.charities.aclu')}
              </Button>
              <Button
                href="https://www.epicrestartfoundation.org"
                icon={<BsArrowClockwise size={16} />}
                target="_blank"
              >
                {t('home.donation.charities.epic-restart')}
              </Button>
            </div>

            <h4 className="text-lg font-semibold mt-5 mb-2 text-gray-200">{t('home.donation.donate.title')}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 md:text-sm gap-3">
              <Button
                href="https://donate.stripe.com/6oEeWVcXs9L9ctW4gj"
                icon={<CreditCard size={16} />}
                target="_blank"
              >
                {t('home.donation.donate.stripe')}
              </Button>
              <Button
                href="https://github.com/sponsors/ihatenodejs"
                icon={<SiGithubsponsors size={16} />}
                target="_blank"
              >
                {t('home.donation.donate.github')}
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
