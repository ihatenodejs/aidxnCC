import {
  SiNextdotjs,
  SiLucide,
  SiVercel,
  SiCloudflarepages,
  SiSimpleicons,
  SiFontawesome,
  SiShadcnui,
  SiTailwindcss
} from "react-icons/si"
import Link from 'next/link'

export const footerMessages = [
  [
    "Built with Next.js",
    "https://nextjs.org",
    <SiNextdotjs key="nextjs" className="text-md mr-2" />
  ],
  [
    "Icons by Lucide",
    "https://lucide.dev/",
    <SiLucide key="lucide" className="text-md mr-2" />
  ],
  [
    "Icons by Simple Icons",
    "https://simpleicons.org/",
    <SiSimpleicons key="simpleicons" className="text-md mr-2" />
  ],
  [
    "Font by Vercel",
    "https://vercel.com/font",
    <SiVercel key="vercel" className="text-md mr-2" />
  ],
  [
    "Hosted by Cloudflare",
    "https://workers.cloudflare.com/",
    <SiCloudflarepages key="cloudflare" className="text-md mr-2" />
  ],
  [
    "Icons by Font Awesome",
    "https://fontawesome.com/",
    <SiFontawesome key="fontawesome" className="text-md mr-2" />
  ],
  [
    "Components by Shadcn",
    "https://ui.shadcn.com/",
    <SiShadcnui key="shadcn" className="text-md mr-2" />
  ],
  [
    "Styled with Tailwind",
    "https://tailwindcss.com/",
    <SiTailwindcss key="tailwind" className="text-md mr-2" />
  ]
]

export default function RandomFooterMsg() {
  const randomIndex = Math.floor(Math.random() * footerMessages.length)
  const [message, url, icon] = footerMessages[randomIndex]

  return (
    <Link href={String(url)} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors mb-2 sm:mb-0" suppressHydrationWarning>
      <div className="flex items-center justify-center">
        {icon}
        {message}
      </div>
    </Link>
  )
}
