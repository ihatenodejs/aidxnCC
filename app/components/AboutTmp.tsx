import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function About() {
    return (
        <div className="max-w-2xl mx-auto text-center">
            <FontAwesomeIcon icon={faUser} className="text-6xl mb-6" />
            <h1 className="text-4xl font-bold my-2 text-center text-gray-200" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
                About Me
            </h1>
            <div className="p-6">
                <p className="text-gray-300 mb-4">
                    Hey there! I&apos;m Aidan, a web developer and student, and this is my website. I&apos;m passionate about web development (although I&apos;m not great with design) and I love building things with Node.js and Express.
                </p>
                <p className="text-gray-300 mb-4">
                    In terms of my academic background, I am currently pursuing a degree in computer science at SNHU. I really enjoy learning, though it depends on the subject. I am mostly self-taught when it comes to programming. I prefer this style of learning, especially with programming, as it lets me learn faster and apply creativity much more.
                </p>
                <p className="text-gray-300 mb-4">
                    When I&apos;m not programming, I can typically be found installing another Linux distro on my laptop or flashing a new ROM to my phone. I am also a passionate writer and I like to write creatively in my free time.
                </p>
                <p className="text-gray-300">
                    I am almost always active on GitHub and make daily contributions to several of my repositories. I am a big fan of open source software and public domain software (which most of my repos are licensed under). In fact, the website you&apos;re currently on is free and open source. It&apos;s even under the public domain!
                </p>
            </div>
        </div>
    )
}