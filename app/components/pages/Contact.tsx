import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export default function Contact() {
    return (
        <div className="max-w-2xl mx-auto text-center">
            <FontAwesomeIcon icon={faPhone} className="text-6xl mb-6" />
            <h1 className="text-4xl font-bold my-2 text-center text-gray-200" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
                Contact
            </h1>
            <div className="p-6 space-y-4">
                <ContactButton href="https://github.com/ihatenodejs" icon={faGithub} label="ihatenodejs" className="mr-3" />
                <ContactButton href="https://t.me/p0ntu5" icon={faTelegram} label="@p0ntu5" className="mr-3" />
                <ContactButton href="mailto:aidan@p0ntus.com" icon={faEnvelope} label="aidan@p0ntus.com" className="" />
            </div>
            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-200">I&apos;m a busy person</h2>
                <p className="text-gray-300 mb-4">
                    I do a lot of things during the day and I&apos;m not always able to respond to messages right away. Please be patient and remember not to demand things from me... Somehow this is an issue for people :(
                </p>
                <p className="text-gray-300 mb-4">
                    For the best chance of a response, please send me a message on Telegram. If you&apos;ve made a pull request on one of my repos, I will most likely respond by the next day. If you&apos;ve sent me an email, I will most likely respond within three days or less.
                </p>
            </div>
        </div>
    )
}

interface ContactButtonProps {
    href: string;
    icon: IconDefinition;
    label: string;
    className?: string;
}

function ContactButton({ href, icon, label, className }: ContactButtonProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-gray-700 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition-colors inline-flex items-center ${className}`}
        >
            <FontAwesomeIcon icon={icon} className="text-xl mr-2" />
            {label}
        </a>
    )
}