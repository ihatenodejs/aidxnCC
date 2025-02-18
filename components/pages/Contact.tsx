import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTelegram, faBluesky } from '@fortawesome/free-brands-svg-icons'
import { Phone } from 'lucide-react'
import ContactButton from '../objects/ContactButton'

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className='mb-6 flex justify-center'>
        <Phone size={60} />
      </div>
      <h1 className="text-4xl font-bold my-2 text-center text-gray-200" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
        Contact
      </h1>
      <div className="p-6 space-y-4">
        <ContactButton href="https://github.com/ihatenodejs" icon={faGithub} label="ihatenodejs" className="mr-3" />
        <ContactButton href="https://t.me/p0ntu5" icon={faTelegram} label="@p0ntu5" className="mr-3" />
        <ContactButton href="https://bsky.app/profile/ihatenodejs.bsky.social" icon={faBluesky} label="@ihatenodejs.bsky.social" className="mr-3" />
        <ContactButton href="tel:+18024169516" icon={faPhone} label="(802) 416-9516" className="mr-3" />
        <ContactButton href="mailto:aidan@p0ntus.com" icon={faEnvelope} label="aidan@p0ntus.com" className="" />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">I&apos;m a busy person</h2>
        <p className="text-gray-300 mb-4">
          I do a lot of things during the day and I&apos;m not always able to respond to messages right away. Please be patient and remember not to demand things from me... Somehow this is an issue for people :(
        </p>
        <p className="text-gray-300 mb-10">
          For the best chance of a response, please send me a message on Telegram. If you&apos;ve made a pull request on one of my repos, I will most likely respond by the next day. If you&apos;ve sent me an email, I will most likely respond within three days or less.
        </p>
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">A note about calling and texting</h2>
        <p className="text-gray-300 mb-4">
          I have a phone number listed above. Please do not call or text me unless you absolutely need to. I will likely not respond, or use an automated recording system to handle your call. No, I haven&apos;t provided you my real phone number. I may be able to respond to your call/text, just know this is not checked/used often.
        </p>
        <p className="text-gray-300 mb-4">
          If you need to get in touch with me, please send me a message on Telegram or an email.
        </p>
      </div>
    </div>
  )
}
