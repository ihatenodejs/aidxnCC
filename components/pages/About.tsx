"use client"

import { User } from 'lucide-react'
import FeaturedRepos from '../widgets/FeaturedRepos'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import Button from '../objects/Button'

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className='mb-6 flex justify-center'>
        <User size={60} />
      </div>
      <h1 className="text-4xl font-bold my-2 text-center text-gray-200" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
        About Me
      </h1>
      <div className="px-6 pt-6">
        <p className="text-gray-300 mb-4">
          Hey there! I&apos;m Aidan, a web developer and student, and this is my website. I&apos;m passionate about web development (although I&apos;m not great with design), especially with Next.js and APIs! I enjoy working with both backend and frontend.
        </p>
        <h2 className="text-2xl font-semibold mb-4 mt-12 text-gray-200">Projects</h2>
        <p className="text-gray-300 mb-4">
          I have worked on countless projects over the past five years, for the most part. I have been learning to program in Python since I was seven and have evolved from there. I got into web development due to my uncle, who taught my how to write my first lines of HTML.
        </p>
        <p className="text-gray-300 mb-4">
          Recently, I have been involved in developing several projects, especially with Node.js, my new favorite language as of a year ago. My biggest project is <Link href="https://librecloud.cc">LibreCloud</Link>, a free service provider for individuals.
        </p>
        <p className="text-gray-300 mb-4">
          In terms of system administration, I have developed my skills over the past three years of learning Linux for fun. I currently operate three servers running in the cloud, which run out of Germany and the United States.
        </p>
        <h2 className="text-2xl font-semibold mb-4 mt-12 text-gray-200">Hobbies</h2>
        <p className="text-gray-300 mb-4">
          When I&apos;m not programming, I can typically be found installing another Linux distro on my laptop or flashing a new ROM to my phone. I am also a passionate writer and I like to write creatively in my free time.
        </p>
        <p className="text-gray-300 mb-4">
          I consider maintaining my technology as a hobby as well, as I devote a lot of time to it. I currently run Gentoo Linux on my Thinkpad T470s, which does not use a single bin package. I am very proud of this laptop, despite it&apos;s constant need for compiling updates.
        </p>
        <p className="text-gray-300 mb-4">
          I am almost always active on <Link href="https://git.pontusmail.org/" className="text-blue-400 hover:underline">my Gitea instance</Link> and GitHub and make daily contributions to several of my repositories. I am a big fan of open source software and public domain software (which most of my repos are licensed under). In fact, the website you&apos;re currently on is free and open source. It&apos;s even under the public domain!
        </p>
        <p className="text-gray-300 mb-4">
          My Google Pixel 7 Pro (cheetah) runs LineageOS 22.1, and has been one of my favorite additions to my life. It is proudly rooted with KernelSU-Next. It has suffered one drop to it&apos;s back on a tile floor.
        </p>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Devices</h2>
        <p className="text-gray-300 mb-4">You can learn more about the devices I use daily with the pages below:</p>
        <Button
          href="/phone"
          label="My Phone"
        />
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">My Gitea/GitHub Contributions</h2>
        <p className="text-gray-300 mb-4">Most of my repositories have migrated to <Link href="https://git.pontusmail.org/" className="text-blue-400 hover:underline">LibreCloud Git</Link>. My username is <Link href="https://git.pontusmail.org/aidan/" className="text-blue-400 hover:underline">aidan</Link>.</p>
        <p className="text-gray-300 mb-4">You can find me on GitHub as <Link href="https://github.com/ihatenodejs/" className="text-blue-400 hover:underline">ihatenodejs</Link>.</p>
        {!imageError && (
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Image 
              src="https://github-readme-stats.vercel.app/api?username=ihatenodejs&theme=dark&show_icons=true&hide_border=true&count_private=true" 
              alt="ihatenodejs's Stats" 
              width={500} 
              height={200} 
              className="w-full md:w-1/2" 
              onError={() => setImageError(true)}
              loading="eager"
              priority
              unoptimized
            />
            <Image 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=ihatenodejs&theme=dark&show_icons=true&hide_border=true&layout=compact" 
              alt="ihatenodejs's Top Languages" 
              width={500} 
              height={200} 
              className="w-full md:w-1/3" 
              onError={() => setImageError(true)}
              loading="eager"
              priority
              unoptimized
            />
          </div>
        )}
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Featured Projects</h2>
        <p className="text-gray-300 mb-6">Here&apos;s just four of my top projects. Star and fork counts are manually updated and count both Gitea and GitHub.</p>
        <FeaturedRepos />
      </div>
    </div>
  )
}