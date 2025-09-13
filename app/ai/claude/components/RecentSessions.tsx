"use client"

import { DailyData } from './types'
import { getModelLabel } from './utils'

export default function RecentSessions({ daily }: { daily: DailyData[] }) {
  return (
    <section className="p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
      <h2 className="text-2xl font-semibold mb-4 text-gray-200">Recent Sessions</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="py-2 px-4 text-gray-400">Date</th>
              <th className="py-2 px-4 text-gray-400">Models Used</th>
              <th className="py-2 px-4 text-gray-400">Total Tokens</th>
              <th className="py-2 px-4 text-gray-400">Cost</th>
            </tr>
          </thead>
          <tbody>
            {daily.slice(-5).reverse().map((day, index) => (
              <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50">
                <td className="py-2 px-4 text-gray-300">{new Date(day.date + 'T00:00:00').toLocaleDateString()}</td>
                <td className="py-2 px-4 text-gray-300">
                  {day.modelsUsed.map(getModelLabel).join(', ')}
                </td>
                <td className="py-2 px-4 text-gray-300">{(day.totalTokens / 1000000).toFixed(2)}M</td>
                <td className="py-2 px-4 text-[#c15f3c] font-semibold">${day.totalCost.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

