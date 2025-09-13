"use client"

import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar } from 'recharts'
import { CCData } from './types'
import { buildTokenTypeData } from './utils'

export default function TokenTypeBreakdown({ totals }: { totals: CCData['totals'] }) {
  const tokenTypeData = buildTokenTypeData(totals)
  return (
    <section className="p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300 col-span-2 lg:col-span-1">
      <h2 className="text-2xl font-semibold mb-4 text-gray-200">Token Type Breakdown</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={tokenTypeData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`} />
          <Tooltip
            contentStyle={{ backgroundColor: 'rgba(31, 41, 55)', border: '1px solid #374151' }}
            formatter={(value: number) => `${(value / 1000000).toFixed(2)}M tokens`}
          />
          <Bar dataKey="value" fill="#b1ada1" />
        </BarChart>
      </ResponsiveContainer>
    </section>
  )
}

