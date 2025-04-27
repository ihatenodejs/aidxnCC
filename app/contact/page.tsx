"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactButton from '@/components/objects/ContactButton'
import { Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTelegram, faBluesky, faXTwitter } from '@fortawesome/free-brands-svg-icons'

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
    t('contact.buttons.github'),
    t('contact.buttons.telegram'),
    t('contact.buttons.bluesky'),
    t('contact.buttons.x'),
    t('contact.buttons.phone'),
    t('contact.buttons.email')
  ];
  
  const contactButtonHrefs = [
    "https://github.com/ihatenodejs",
    "https://t.me/p0ntu5",
    "https://bsky.app/profile/aidxn.cc",
    "https://x.com/ihatenodejs",
    "tel:+18024169516",
    "mailto:aidan@p0ntus.com"
  ];
  
  const contactButtonIcons = [faGithub, faTelegram, faBluesky, faXTwitter, faPhone, faEnvelope];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <div className='mb-6 flex justify-center'>
            <Phone size={60} />
          </div>
          <h1 className="text-4xl font-bold my-2 text-center text-gray-200" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
            {t('contact.title')}
          </h1>
          <div className="p-6 space-y-4">
            {contactButtonLabels.map((label, index) => (
              <ContactButton 
                key={index} 
                label={label} 
                href={contactButtonHrefs[index]} 
                icon={contactButtonIcons[index]} 
                className='mr-3'
              />
            ))}
          </div>

          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h2 className="text-2xl font-semibold mb-4 text-gray-200 mt-10">{section.title}</h2>
              {section.texts.map((text, index) => (
                <p key={index} className="text-gray-300 mb-4">{text}</p>
              ))}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}