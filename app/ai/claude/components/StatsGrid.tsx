"use client"

import { CCData, DailyData } from './types'
import { formatStreakCompact, computeStreak } from './utils'

export default function StatsGrid({ totals, daily }: { totals: CCData['totals']; daily: DailyData[] }) {
  const streak = computeStreak(daily)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
      <div className="p-6 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
        <h3 className="text-sm font-medium text-gray-400 mb-2">Total Cost</h3>
        <p className="text-3xl font-bold text-[#c15f3c]">${totals.totalCost.toFixed(2)}</p>
      </div>
      <div className="p-6 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
        <h3 className="text-sm font-medium text-gray-400 mb-2">Total Tokens</h3>
        <p className="text-3xl font-bold text-[#c15f3c]">{(totals.totalTokens / 1000000).toFixed(1)}M</p>
      </div>
      <div className="p-6 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
        <h3 className="text-sm font-medium text-gray-400 mb-2">Days Active</h3>
        <p className="text-3xl font-bold text-[#c15f3c] flex items-center">
          {daily.length}
          <span className="ml-3 text-xs font-semibold text-gray-300 bg-gray-800 px-2 py-0.5 rounded-full">
            🔥 {formatStreakCompact(streak)}
          </span>
        </p>
      </div>
      <div className="p-6 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
        <h3 className="text-sm font-medium text-gray-400 mb-2">Avg Daily Cost</h3>
        <p className="text-3xl font-bold text-[#c15f3c]">${(totals.totalCost / Math.max(daily.length, 1)).toFixed(2)}</p>
      </div>
    </div>
  )
}

