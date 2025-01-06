import Image from 'next/image'

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
        <h1 className="text-4xl font-bold mb-2">Aidan</h1>
        <p className="text-gray-400 text-xl">Web Developer & Student</p>
      </div>
      
      <section id="about" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Who I am</h2>
        <p className="text-gray-300 leading-relaxed">
          Hey there! I&apos;m Aidan, a web developer and student from the US.
        </p>
        <p className="text-gray-300 leading-relaxed mt-2">
          I am most interested in backend development and have experience with Node.js, Express, and Tailwind CSS.
        </p>
        <p className="text-gray-300 leading-relaxed mt-2">
          When I&apos;m not programming, I can be found re-flashing my phone with a new custom ROM and telling everyone I use Arch.
        </p>
      </section>
      
      <section id="contact">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Send me a message</h2>
        <p className="text-gray-300 mb-6">Feel free to reach out for collaborations or just a hello :)</p>
        <a href="/contact" className="bg-gray-700 text-white px-8 py-3 rounded-full hover:bg-gray-600 transition-colors text-lg font-medium">
          Contact Me
        </a>
      </section>
    </div>
  )
}
