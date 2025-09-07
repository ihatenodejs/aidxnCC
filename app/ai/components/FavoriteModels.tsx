import { Brain, Star } from 'lucide-react'
import type { FavoriteModel } from '../types'

interface FavoriteModelsProps {
  models: FavoriteModel[]
}

export default function FavoriteModels({ models }: FavoriteModelsProps) {
  return (
    <section className="p-4 sm:p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-semibold mb-6 text-gray-200 flex items-center gap-2">
          <Brain size={24} />
          Favorite Models
        </h2>
        <p className="text-muted-foreground italic text-sm">Based on personal preference</p>
      </div>
      <div className="space-y-4">
        {models.map((model, index) => (
          <div key={index} className="p-4 bg-gray-800/50 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-200">{model.name}</h3>
                <p className="text-sm text-gray-400">{model.provider}</p>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < model.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-300">{model.review}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
