"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Brain } from 'lucide-react'
import TopPick from './components/TopPick'
import AIStack from './components/AIStack'
import FavoriteModels from './components/FavoriteModels'
import ToolReviews from './components/ToolReviews'
import { aiTools, favoriteModels, aiReviews } from './data'

export default function AI() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="w-full px-2 sm:px-6">
        <div className="my-12 text-center">
          <div className="flex justify-center mb-6">
            <Brain size={60} />
          </div>
          <h1 className="text-4xl font-bold mb-2 text-gray-100 glow">AI</h1>
          <p className="text-gray-400">My journey with using LLMs</p>
        </div>

        <TopPick />

        <div className="p-4">
          <AIStack tools={aiTools} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
          <FavoriteModels models={favoriteModels} />
          <ToolReviews reviews={aiReviews} />
        </div>
      </main>
      <Footer />
    </div>
  )
}