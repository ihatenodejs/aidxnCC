import { House, Brain } from "lucide-react"
import { Overview } from "@/components/docs/pages/Overview"
import { MentalHealth } from "@/components/docs/pages/MentalHealth"

export interface Doc {
  title: string
  component: React.ReactNode
  icon: React.ReactNode
}

export const Docs: Record<string, Doc> = {
  Overview: {
    "title": "Overview",
    "component": <Overview />,
    "icon": <House size={16} />
  },
  MentalHealth: {
    "title": "Mental Health",
    "component": <MentalHealth />,
    "icon": <Brain size={16} />
  }
}