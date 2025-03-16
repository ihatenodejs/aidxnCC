import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTelegram, faBluesky } from '@fortawesome/free-brands-svg-icons'
import { Phone } from 'lucide-react'
import ContactButton from '../objects/ContactButton'

export default function Contact() {
  const firstSectionStrings = ["I do a lot of things during the day and I'm not always able to respond to messages right away. Please be patient and remember not to demand things from me... Somehow this is an issue for people :(", "For the best chance of a response, please send me a message on Telegram. If you've made a pull request on one of my repos, I will most likely respond by the next day. If you've sent me an email, I will most likely respond within three days or less."]
  const secondSectionStrings = ["I have a phone number listed above. Please do not call or text me unless you absolutely need to. I will likely not respond, or use an automated recording system to handle your call. No, I haven't provided you my real phone number. I may be able to respond to your call/text, just know this is not checked/used often.", "If you need to get in touch with me, please send me a message on Telegram or an email."]
  const sections = [
    { title: "I'm a busy person", texts: firstSectionStrings },
    { title: "A note about calling and texting", texts: secondSectionStrings },
  ]
  const contactButtonLabels = ["ihatenodejs", "@p0ntu5", "@aidxn.cc", "(802) 416-9516", "aidan@p0ntus.com"]
  const contactButtonHrefs = ["https://github.com/ihatenodejs", "https://t.me/p0ntu5", "https://bsky.app/profile/aidxn.cc", "tel:+18024169516", "mailto:aidan@p0ntus.com"]
  const contactButtonIcons = [faGithub, faTelegram, faBluesky, faPhone, faEnvelope]
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className='mb-6 flex justify-center'>
        <Phone size={60} />
      </div>
      <h1 className="text-4xl font-bold my-2 text-center text-gray-200" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
        Contact
      </h1>
      <div className="p-6 space-y-4">
        {contactButtonLabels.map((label, index) => (
          <ContactButton key={index} label={label} href={contactButtonHrefs[index]} icon={contactButtonIcons[index]} className='mr-3'></ContactButton>
        ))
        }
      </div>

      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex}>
          <h2 className="text-2xl font-semibold mb-4 text-gray-200 mt-10">{section.title}</h2>
          {section.texts.map((text, index) => (
            <p key={index} className="text-gray-300 mb-4">{text}</p>
          ))}
        </div>
      ))
    }
    </div>
  )
}
