import { BookOpen } from 'lucide-react'

export default function About() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className='mb-6 flex justify-center'>
        <BookOpen size={60} />
      </div>
      <h1 className="text-4xl font-bold my-2 text-center text-gray-200" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
        Manifesto
      </h1>
      <div className="px-6 pt-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">
          1. Empathy and Understanding
        </h2>
        <p className="text-gray-300 mb-4">
          We live in a distant world. People I meet are from all over, which can be hard to understand for others. I aim to utilize my ability to connect by understanding and getting interested in people&apos;s lives. I pledge to:
        </p>
        <ul className="list-disc list-inside text-left text-gray-300 mt-8 mb-4">
          <li>Listen deeply and genuinely</li>
          <li>Suspend judgment and seek to understand</li>
          <li>Recognize the humanity in every digital interaction</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4 mt-12 text-gray-200">
          2. Unconditional Sharing!
        </h2>
        <p className="text-gray-300 mb-4">
          Information should be free and accessible to all. I will:
        </p>
        <ul className="list-disc list-inside text-left text-gray-300 mt-8 mb-4">
          <li>Make all of my work free and accessible to all (e.g. public domain Wikipedia contributions)</li>
          <li>Creating and sharing content for others benefit</li>
          <li>Supporting open-source principles</li>
          <li>Creating extensive documentation on all of my projects</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4 mt-12 text-gray-200">
          3. Genuine Human Connection
        </h2>
        <p className="text-gray-300 mb-4">
          I aim to create a genuine human connection with all people I meet, regardless of who or where they are from.
        </p>
        <h2 className="text-2xl font-semibold mb-4 mt-12 text-gray-200">
          4. Privacy & Self-Hosted Services
        </h2>
        <p className="text-gray-300 mb-4">
          In terms of my personal (some public) services, I commit to never selling, viewing or share personal information with third parties or myself. I will:
        </p>
        <ul className="list-disc list-inside text-left text-gray-300 mt-8 mb-4">
          <li>Respect user data as a fundamental human right</li>
          <li>Not implement tracking and/or monetization in my services</li>
          <li>Focus my services to focus on being free and open</li>
          <li>Suggest/support technologies that help privacy</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4 mt-12 text-gray-200">
          I Commit
        </h2>
        <p className="text-gray-300 mb-4">
          I am not perfect, that&apos;s for sure, but I am committed. I promise to continuously learn, grow, and adapt to my environment, goals, purpose, and the people around me.
        </p>
      </div>
    </div>
  )
}