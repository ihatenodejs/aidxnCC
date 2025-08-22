"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState, useEffect } from 'react'
import { SiClaude } from 'react-icons/si'
import {
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
  ComposedChart,
} from 'recharts'

interface ModelBreakdown {
  modelName: string
  inputTokens: number
  outputTokens: number
  cacheCreationTokens: number
  cacheReadTokens: number
  cost: number
}

interface DailyData {
  date: string
  inputTokens: number
  outputTokens: number
  cacheCreationTokens: number
  cacheReadTokens: number
  totalTokens: number
  totalCost: number
  modelsUsed: string[]
  modelBreakdowns: ModelBreakdown[]
}

interface CCData {
  daily: DailyData[]
  totals: {
    inputTokens: number
    outputTokens: number
    cacheCreationTokens: number
    cacheReadTokens: number
    totalCost: number
    totalTokens: number
  }
}

const COLORS = ['#c15f3c', '#b1ada1', '#f4f3ee', '#c15f3c', '#b1ada1', '#f4f3ee']

export default function AI() {
  const [data, setData] = useState<CCData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedMetric, setSelectedMetric] = useState<'cost' | 'tokens'>('cost')

  useEffect(() => {
    fetch('/data/cc.json')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch data')
        return res.json()
      })
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-gray-300">Loading Claude metrics...</div>
        </main>
        <Footer />
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-red-400">Error loading data: {error}</div>
        </main>
        <Footer />
      </div>
    )
  }

  const modelUsageData = data.daily.reduce((acc, day) => {
    day.modelBreakdowns.forEach(model => {
      const existing = acc.find(m => m.name === model.modelName)
      if (existing) {
        existing.value += model.cost
      } else {
        acc.push({ name: model.modelName, value: model.cost })
      }
    })
    return acc
  }, [] as { name: string; value: number }[])

  const tokenTypeData = [
    { name: 'Input', value: data.totals.inputTokens },
    { name: 'Output', value: data.totals.outputTokens },
    { name: 'Cache Creation', value: data.totals.cacheCreationTokens },
    { name: 'Cache Read', value: data.totals.cacheReadTokens },
  ]

  const dailyTrendData = data.daily.map(day => ({
    date: new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    cost: day.totalCost,
    tokens: day.totalTokens / 1000000,
    inputTokens: day.inputTokens / 1000,
    outputTokens: day.outputTokens / 1000,
    cacheTokens: (day.cacheCreationTokens + day.cacheReadTokens) / 1000000,
  }))

  const formatCurrency = (value: number) => `$${value.toFixed(2)}`
  const formatTokens = (value: number) => `${value.toFixed(1)}M`

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="w-full">
        <div className="my-12 text-center">
          <div className="flex justify-center mb-6">
            <SiClaude size={60} />
          </div>
          <h1 className="text-4xl font-bold mb-2 text-gray-100 glow">Claude Code Usage</h1>
          <p className="text-gray-400">How much I use Claude Code!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
          <div className="p-6 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Total Cost</h3>
            <p className="text-3xl font-bold text-[#c15f3c]">${data.totals.totalCost.toFixed(2)}</p>
          </div>
          <div className="p-6 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Total Tokens</h3>
            <p className="text-3xl font-bold text-[#c15f3c]">{(data.totals.totalTokens / 1000000).toFixed(1)}M</p>
          </div>
          <div className="p-6 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Days Active</h3>
            <p className="text-3xl font-bold text-[#c15f3c]">{data.daily.length}</p>
          </div>
          <div className="p-6 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
            <h3 className="text-sm font-medium text-gray-400 mb-2">Avg Daily Cost</h3>
            <p className="text-3xl font-bold text-[#c15f3c]">${(data.totals.totalCost / data.daily.length).toFixed(2)}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
          <section className="p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">Daily Usage Trend</h2>
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setSelectedMetric('cost')}
                className={`px-3 py-1 rounded ${selectedMetric === 'cost' ? 'bg-[#c15f3c] text-white' : 'bg-gray-700 text-gray-300'}`}
              >
                Cost
              </button>
              <button
                onClick={() => setSelectedMetric('tokens')}
                className={`px-3 py-1 rounded ${selectedMetric === 'tokens' ? 'bg-[#c15f3c] text-white' : 'bg-gray-700 text-gray-300'}`}
              >
                Tokens
              </button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={dailyTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9ca3af" />
                <YAxis
                  stroke="#9ca3af"
                  tickFormatter={selectedMetric === 'cost' ? formatCurrency : formatTokens}
                />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
                  formatter={(value: number) => selectedMetric === 'cost' ? formatCurrency(value) : formatTokens(value)}
                />
                <Area
                  type="monotone"
                  dataKey={selectedMetric === 'cost' ? 'cost' : 'tokens'}
                  stroke="#c15f3c"
                  fill="#c15f3c"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </section>

          <section className="p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">Model Usage Distribution</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={modelUsageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {modelUsageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
                    formatter={(value: number) => formatCurrency(value)}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-col justify-center space-y-3">
                {modelUsageData.map((model, index) => {
                  const percentage = ((model.value / data.totals.totalCost) * 100).toFixed(1)
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        />
                        <span className="text-gray-300 font-medium text-xs">{model.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-400 text-sm">{percentage}%</span>
                        <span className="text-gray-200 font-semibold">${model.value.toFixed(2)}</span>
                      </div>
                    </div>
                  )
                })}
                <div className="pt-3 mt-3 border-t border-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Total Models Used</span>
                    <span className="text-gray-200 font-bold">{modelUsageData.length}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-400">Most Used</span>
                    <span className="text-gray-200 font-bold text-xs">
                      {modelUsageData[0]?.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">Token Type Breakdown</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={tokenTypeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
                  formatter={(value: number) => `${(value / 1000000).toFixed(2)}M tokens`}
                />
                <Bar dataKey="value" fill="#b1ada1" />
              </BarChart>
            </ResponsiveContainer>
          </section>

          <section className="p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">Daily Token Composition</h2>
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
        </div>

        <div className="px-4 pb-4">
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
                  {data.daily.slice(-5).reverse().map((day, index) => (
                    <tr key={index} className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="py-2 px-4 text-gray-300">{new Date(day.date).toLocaleDateString()}</td>
                      <td className="py-2 px-4 text-gray-300">
                        {day.modelsUsed.join(', ')}
                      </td>
                      <td className="py-2 px-4 text-gray-300">{(day.totalTokens / 1000000).toFixed(2)}M</td>
                      <td className="py-2 px-4 text-[#c15f3c] font-semibold">${day.totalCost.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}