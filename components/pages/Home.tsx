import Image from 'next/image'
import Button from '../objects/Button'
import LastPlayed from '@/components/widgets/LastPlayed';

export default function Home() {
  const whoAmIStrings = ["Hey there! I'm Aidan, a systems administrator, web developer, and student from the United States. I primarily work with Node.js and Linux.", "I am most interested in backend development and have experience with Node.js, Express, and Tailwind CSS. Despite my best efforts, I am no designer", "When I'm not programming, I can be found re-flashing my phone with a new custom ROM and telling everyone I use Arch."]
  const whatIDoStrings = ["I am at my best when I am doing system administration, but I also enjoy working on web development projects. I enjoy contributing under open licenses more than anything. I have never felt much of a draw to profiting off my work.", "I host a few public services and websites on my VPS, most of which can be found on the \"Domains\" page with a short description.", "I'm most proud of LibreCloud/p0ntus mail, which is a cloud services provider that I self-host and maintain, free of charge.", "I frequently write and work on a website hosted on a public Linux server, known as a \"tilde\" You can check it out by clicking the link \"Tilde\" in the header, or \"what\" if you are still confused!"]
  const whereYouAreStrings = ["My website is my home, not my business. I am not here to brag about my accomplishments or plug my cool SaaS product. That's why I've made every effort to make this website as personal and fun as possible.", "From a technical perspective, you're being served this website by Vercel."]
  const mainStrings = [whoAmIStrings, whatIDoStrings, whereYouAreStrings]
  const contactString = "Feel free to reach out for collaborations or just a hello :)"
  const mainSections = ["Who I am", "What I do", "Where you are"]
  const sendMessage = "Send me a message"
  const myName = "Aidan"
  const myDescription = "SysAdmin, Developer, and Student"

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
        <h1 className="text-4xl font-bold mb-2 text-gray-100 glow">{myName}</h1>
        <p className="text-gray-400 text-xl">{myDescription}</p>
      </div>

      <LastPlayed />

      {mainSections.map((section, secIndex) => (
        <section key={secIndex} id="about" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">{section}</h2>
          {mainStrings[secIndex].map((text, index) => (
            <p key={index} className="text-gray-300 leading-relaxed mt-2">
              {text}
            </p>
          ))}
        </section>
      ))}

      <section id="contact">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">{sendMessage}</h2>
        <p className="text-gray-300 mb-6">{contactString}</p>
        <Button
          href={'/contact'}
          label="Contact Me"
        />
      </section>
    </div>
  )
}
