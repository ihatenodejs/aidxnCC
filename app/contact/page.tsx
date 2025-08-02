"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Button from '@/components/objects/Button'
import { Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { SiGithub, SiForgejo, SiTelegram } from 'react-icons/si'
import { Mail, Smartphone } from 'lucide-react'

export default function Contact() {
  const { t } = useTranslation();

  const sections = [
    {
      title: t('contact.sections.busyPerson.title'),
      texts: t('contact.sections.busyPerson.texts', { returnObjects: true }) as string[]
    },
    {
      title: t('contact.sections.callingNote.title'),
      texts: t('contact.sections.callingNote.texts', { returnObjects: true }) as string[]
    }
  ];

  const contactButtonLabels = [
    "ihatenodejs",
    "aidan",
    "p0ntu5",
    "+1 802-416-9516",
    "aidan@p0ntus.com",
  ];
  
  const contactButtonHrefs = [
    "https://github.com/ihatenodejs",
    "https://git.p0ntus.com/aidan",
    "https://t.me/p0ntu5",
    "tel:+18024169516",
    "mailto:aidan@p0ntus.com"
  ];
  
  const contactButtonIcons = [
    <SiGithub key="github" />,
    <SiForgejo key="forgejo" />,
    <SiTelegram key="telegram" />,
    <Smartphone key="smartphone" />,
    <Mail key="mail" />
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex flex-col gap-4">
            <div className="flex justify-center">
              <Phone size={60} />
            </div>
            <h1 className="text-4xl font-bold mt-2 text-center text-gray-200" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
              {t('contact.title')}
            </h1>
          </div>
          <div className="flex flex-col gap-8 mt-8">
            <div className="flex flex-wrap justify-center gap-3">
              {contactButtonLabels.map((label, index) => (
                <Button
                  key={index}
                  href={contactButtonHrefs[index]}
                  target="_blank"
                  variant="rounded"
                  icon={contactButtonIcons[index]}
                >
                  {label}
                </Button> 
              ))}
            </div>
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold text-gray-200">{section.title}</h2>
                {section.texts.map((text, index) => (
                  <p key={index} className="text-gray-300">{text}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}