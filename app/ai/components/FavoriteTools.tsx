import { Star } from 'lucide-react'
import { TbTool } from 'react-icons/tb'
import type { AIReview } from '../types'

interface FavoriteToolsProps {
  reviews: AIReview[]
}

export default function FavoriteTools({ reviews }: FavoriteToolsProps) {
  return (
    <section className="p-4 sm:p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-semibold mb-6 text-gray-200 flex items-center gap-2">
          <TbTool size={24} />
          Favorite Tools
        </h2>
        <p className="text-muted-foreground italic text-sm">Based on personal preference</p>
      </div>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="p-4 bg-gray-800/50 rounded-lg">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-gray-200">{review.tool}</h3>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2 text-sm">
              <div>
                <p className="text-green-400 font-medium mb-1">Pros:</p>
                <ul className="text-gray-300 space-y-1">
                  {review.pros.map((pro, i) => (
                    <li key={i} className="text-xs">• {pro}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-red-400 font-medium mb-1">Cons:</p>
                <ul className="text-gray-300 space-y-1">
                  {review.cons.map((con, i) => (
                    <li key={i} className="text-xs">• {con}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-sm text-blue-400 font-medium">{review.verdict}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
