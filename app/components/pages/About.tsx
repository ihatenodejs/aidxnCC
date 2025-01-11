"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import GitHubFeatured from '../widgets/GitHubFeatured'
import { useState } from 'react'

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="max-w-2xl mx-auto text-center">
      <FontAwesomeIcon icon={faUser} className="text-6xl mb-6" />
      <h1 className="text-4xl font-bold my-2 text-center text-gray-200" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>
        About Me
      </h1>
      <div className="px-6 pt-6">
        <p className="text-gray-300 mb-4">
          Hey there! I&apos;m Aidan, a web developer and student, and this is my website. I&apos;m passionate about web development (although I&apos;m not great with design) and I love building things with Node.js and Express.
        </p>
        <h2 className="text-2xl font-semibold mb-4 mt-12 text-gray-200">Academics</h2>
        <p className="text-gray-300 mb-4">
          In terms of my academic background, I am currently pursuing a degree in computer science at SNHU. I really enjoy learning, though it depends on the subject. I am mostly self-taught when it comes to programming. I prefer this style of learning, especially with programming, as it lets me learn faster and apply creativity much more.
        </p>
        <h2 className="text-2xl font-semibold mb-4 mt-12 text-gray-200">Hobbies</h2>
        <p className="text-gray-300 mb-4">
          When I&apos;m not programming, I can typically be found installing another Linux distro on my laptop or flashing a new ROM to my phone. I am also a passionate writer and I like to write creatively in my free time.
        </p>
        <p className="text-gray-300">
          I am almost always active on GitHub and make daily contributions to several of my repositories. I am a big fan of open source software and public domain software (which most of my repos are licensed under). In fact, the website you&apos;re currently on is free and open source. It&apos;s even under the public domain!
        </p>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">My GitHub Contributions</h2>
        <p className="text-gray-300 mb-4">You can find me on GitHub as <a href="https://github.com/ihatenodejs/" className="text-blue-400 hover:underline">ihatenodejs</a>.</p>
        {!imageError && (
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <img 
              src="https://github-readme-stats.vercel.app/api?username=ihatenodejs&theme=dark&show_icons=true&hide_border=true&count_private=true" 
              alt="ihatenodejs's Stats" 
              width={500} 
              height={200} 
              className="w-full md:w-1/2" 
              onError={() => setImageError(true)}
              loading="eager"
            />
            <img 
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=ihatenodejs&theme=dark&show_icons=true&hide_border=true&layout=compact" 
              alt="ihatenodejs's Top Languages" 
              width={500} 
              height={200} 
              className="w-full md:w-1/3" 
              onError={() => setImageError(true)}
              loading="eager"
            />
          </div>
        )}
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">Featured Projects</h2>
        <p className="text-gray-300 mb-6">Here&apos;s just four of my top projects.</p>
        <GitHubFeatured />
      </div>
    </div>
  )
}