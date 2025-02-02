import Image from 'next/image'
import Button from '../objects/Button'
import LastPlayed from '@/components/widgets/LastPlayed';

export default function Home() {
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
        <h1 className="text-4xl font-bold mb-2 text-gray-100 glow">Aidan</h1>
        <p className="text-gray-400 text-xl">SysAdmin, Developer, and Student</p>
      </div>

      <LastPlayed />
      
      <section id="about" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Who I am</h2>
        <p className="text-gray-300 leading-relaxed">
          Hey there! I&apos;m Aidan, a systems administrator, web developer, and student from the United States. I primarily work with Node.js and Linux.
        </p>
        <p className="text-gray-300 leading-relaxed mt-2">
          I am most interested in backend development and have experience with Node.js, Express, and Tailwind CSS. Despite my best efforts, I am no designer
        </p>
        <p className="text-gray-300 leading-relaxed mt-2">
          When I&apos;m not programming, I can be found re-flashing my phone with a new custom ROM and telling everyone I use Arch.
        </p>
      </section>

      <section id="about" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">What I do</h2>
        <p className="text-gray-300 leading-relaxed">
          I am at my best when I am doing system administration, but I also enjoy working on web development projects. I enjoy contributing under open licenses more than anything. I have never felt much of a draw to profiting off my work.
        </p>
        <p className="text-gray-300 leading-relaxed mt-2">
          I host a few public services and websites on my VPS, most of which can be found on the &quot;Domains&quot; page with a short description.
        </p>
        <p className="text-gray-300 leading-relaxed mt-2">
          I&apos;m most proud of LibreCloud/p0ntus mail, which is a cloud services provider that I self-host and maintain, free of charge.
        </p>
        <p className="text-gray-300 leading-relaxed mt-2">
          I frequently write and work on a website hosted on a public Linux server, known as a &quot;tilde.&quot; You can check it out by clicking the link &quot;Tilde&quot; in the header, or &quot;what?&quot; if you are still confused!
        </p>
      </section>

      <section id="about" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Where you are</h2>
        <p className="text-gray-300 leading-relaxed">
          My website is my home, not my business. I am not here to brag about my accomplishments or plug my cool SaaS product. That&apos;s why I&apos;ve made every effort to make this website as personal and fun as possible.
        </p>
        <p className="text-gray-300 leading-relaxed mt-2">
          From a technical perspective, you&apos;re being served this website by Vercel.
        </p>
      </section>
      
      <section id="contact">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Send me a message</h2>
        <p className="text-gray-300 mb-6">Feel free to reach out for collaborations or just a hello :)</p>
        <Button 
          href={'/contact'}
          label="Contact Me"
        />
      </section>
    </div>
  )
}
