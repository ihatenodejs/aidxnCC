"use client"

import { ResponsiveContainer, ComposedChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line } from 'recharts'
import { DailyData } from './types'
import { buildDailyTrendData } from './utils'

export default function TokenComposition({ daily }: { daily: DailyData[] }) {
  const dailyTrendData = buildDailyTrendData(daily)
  return (
    <section className="p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300 sm:col-span-2">
      <h2 className="text-2xl font-semibold mb-4 text-gray-200">Token Composition</h2>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={dailyTrendData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="date" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" tickFormatter={(value) => `${value}K`} />
          <Tooltip
            contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
            formatter={(value: number) => `${value.toFixed(1)}K tokens`}
          />
          <Legend />
          <Bar dataKey="inputTokens" stackId="a" fill="#c15f3c" name="Input (K)" />
          <Bar dataKey="outputTokens" stackId="a" fill="#b1ada1" name="Output (K)" />
          <Line type="monotone" dataKey="cacheTokens" stroke="#f4f3ee" name="Cache (M)" strokeWidth={2} />
        </ComposedChart>
      </ResponsiveContainer>
    </section>
  )
}

