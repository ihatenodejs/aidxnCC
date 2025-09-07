import {
  SiClaude,
  SiGithubcopilot,
  SiGooglegemini,
  SiPerplexity
} from 'react-icons/si'
import type { AITool, FavoriteModel, AIReview } from './types'

export const aiTools: AITool[] = [
  {
    name: "Claude Max 5x",
    icon: SiClaude,
    description: "My favorite model provider for general use and coding",
    status: "primary",
    usage: "/ai/claude",
    link: "https://claude.ai/"
  },
  {
    name: "GitHub Copilot Pro",
    icon: SiGithubcopilot,
    description: "Random edits when I don't want to start a Claude session",
    status: "active",
    link: "https://github.com/features/copilot"
  },
  {
    name: "Gemini Pro",
    icon: SiGooglegemini,
    description: "Chatting, asking questions, and image generation",
    status: "occasional",
    link: "https://gemini.google.com/"
  },
  {
    name: "v0 Free",
    svg: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>v0</title><path d="M14.066 6.028v2.22h5.729q.075-.001.148.005l-5.853 5.752a2 2 0 0 1-.024-.309V8.247h-2.353v5.45c0 2.322 1.935 4.222 4.258 4.222h5.675v-2.22h-5.675q-.03 0-.059-.003l5.729-5.629q.006.082.006.166v5.465H24v-5.465a4.204 4.204 0 0 0-4.205-4.205zM0 8.245l8.28 9.266c.839.94 2.396.346 2.396-.914V8.245H8.19v5.44l-4.86-5.44Z"/></svg>,
    description: "Generating boilerplate UIs",
    status: "occasional",
    link: "https://v0.dev/"
  },
  {
    name: "Qwen",
    svg: (
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-8">
        <path d="M174.82 108.75L155.38 75L165.64 57.75C166.46 56.31 166.46 54.53 165.64 53.09L155.38 35.84C154.86 34.91 153.87 34.33 152.78 34.33H114.88L106.14 19.03C105.62 18.1 104.63 17.52 103.54 17.52H83.3C82.21 17.52 81.22 18.1 80.7 19.03L61.26 52.77H41.02C39.93 52.77 38.94 53.35 38.42 54.28L28.16 71.53C27.34 72.97 27.34 74.75 28.16 76.19L45.52 107.5L36.78 122.8C35.96 124.24 35.96 126.02 36.78 127.46L47.04 144.71C47.56 145.64 48.55 146.22 49.64 146.22H87.54L96.28 161.52C96.8 162.45 97.79 163.03 98.88 163.03H119.12C120.21 163.03 121.2 162.45 121.72 161.52L141.16 127.78H158.52C159.61 127.78 160.6 127.2 161.12 126.27L171.38 109.02C172.2 107.58 172.2 105.8 171.38 104.36L174.82 108.75Z" fill="url(#paint0_radial)"/>
        <path d="M119.12 163.03H98.88L87.54 144.71H49.64L61.26 126.39H80.7L38.42 55.29H61.26L83.3 19.03L93.56 37.35L83.3 55.29H161.58L151.32 72.54L170.76 106.28H151.32L141.16 88.34L101.18 163.03H119.12Z" fill="white"/>
        <path d="M127.86 79.83H76.14L101.18 122.11L127.86 79.83Z" fill="url(#paint1_radial)"/>
        <defs>
          <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(100)">
            <stop stopColor="#665CEE"/>
            <stop offset="1" stopColor="#332E91"/>
          </radialGradient>
          <radialGradient id="paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(100)">
            <stop stopColor="#665CEE"/>
            <stop offset="1" stopColor="#332E91"/>
          </radialGradient>
        </defs>
      </svg>
    ),
    description: "My favorite open source LLM for chatting",
    status: "occasional",
    link: "https://chat.qwen.ai/"
  },
  {
    "name": "Perplexity",
    icon: SiPerplexity,
    description: "Reliable for more in-depth searching",
    status: "occasional",
    link: "https://perplexity.ai/"
  }
]

export const favoriteModels: FavoriteModel[] = [
  {
    name: "Claude 4 Sonnet",
    provider: "Anthropic",
    review: "The perfect balance of capability, speed, and price. Perfect for development with React.",
    rating: 5
  },
  {
    name: "Claude 4.1 Opus",
    provider: "Anthropic",
    review: "Amazing planner, useful for Plan Mode in Claude Code. Useful in code generation, albeit at a higher cost.",
    rating: 5
  },
  {
    name: "Qwen3-Max-Preview",
    provider: "Alibaba",
    review: "A new personality for Qwen3 at a larger size, amazing for use in chats. I'm not so happy that it's closed source (for now).",
    rating: 5
  },
  {
    name: "Qwen3-235B-A22B",
    provider: "Alibaba",
    review: "The OG thinking model. Amazing, funny, and smart for chats. Surprisingly good at coding too.",
    rating: 5
  },
  {
    name: "Gemini 2.5 Pro",
    provider: "Google",
    review: "Amazing for Deep Research and reasoning tasks. I hate it for coding.",
    rating: 4
  },
  {
    name: "gemma3 27B",
    provider: "Google",
    review: "My favorite for playing around with AI or creating a project. Easy to run locally and open weight!",
    rating: 4
  },
]

export const aiReviews: AIReview[] = [
  {
    tool: "Claude Code",
    rating: 5,
    pros: ["Flagship models", "High usage limits", "Exceptional Claude integration"],
    cons: ["Can be slow", "High investment cost to get value"],
    verdict: "Best overall for Claude lovers"
  },
  {
    tool: "Cursor",
    rating: 4,
    pros: ["Works like magic", "Lots of model support", "Huge ecosystem and community"],
    cons: ["Expensive", "Hype around it is dying", "Unclear/manipulative pricing"],
    verdict: "Great all-rounder, slowly dying"
  },
  {
    tool: "Trae",
    rating: 4,
    pros: ["Good UI/UX", "Very budget-friendly", "Fantastic premium usage limits"],
    cons: ["No thinking", "Occasional parsing issues"],
    verdict: "Essential for productivity"
  },
  {
    tool: "GitHub Copilot",
    rating: 3,
    pros: ["Latest models", "Great autocomplete", "Budget-friendly subscription price"],
    cons: ["No thinking", "Low quality output", "Bad support for other IDEs"],
    verdict: "Good for casual use"
  },
]