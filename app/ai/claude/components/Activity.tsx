"use client"

import { useMemo, useState } from 'react'
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { DailyData } from './types'
import {
  buildDailyTrendData,
  formatCurrency,
  formatTokens,
  getHeatmapColor,
  prepareHeatmapData,
} from './utils'

export default function Activity({ daily }: { daily: DailyData[] }) {
  const [viewMode, setViewMode] = useState<'heatmap' | 'chart'>('heatmap')
  const [selectedMetric, setSelectedMetric] = useState<'cost' | 'tokens'>('cost')

  const dailyTrendData = useMemo(() => buildDailyTrendData(daily), [daily])
  const heatmapWeeks = useMemo(() => prepareHeatmapData(daily), [daily])
  const maxCost = useMemo(
    () => (daily.length ? Math.max(...daily.map(d => d.totalCost)) : 0),
    [daily]
  )

  return (
    <section className="p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300 relative md:col-span-2 lg:col-span-1">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-200">Activity</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">{viewMode === 'heatmap' ? 'Heatmap' : 'Chart'}</span>
          <button
            onClick={() => setViewMode(viewMode === 'heatmap' ? 'chart' : 'heatmap')}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-[#c15f3c] focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            <span className="sr-only">Toggle view mode</span>
            <span
              className={`${viewMode === 'chart' ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-[#c15f3c] transition-transform`}
            />
          </button>
        </div>
      </div>
      {viewMode === 'heatmap' ? (
        <div className="overflow-x-auto pb-6">
          <div className="min-w-[900px]">
            <div className="flex gap-1">
              <div className="flex flex-col gap-1 text-xs text-gray-400 w-10 pr-2">
                <div className="h-4"></div>
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="h-4 flex items-center justify-end text-[10px]">
                    {day}
                  </div>
                ))}
              </div>
              <div className="relative">
                <div className="h-4 mb-1 text-xs text-gray-400">
                  {(() => {
                    const monthLabels: { month: string; position: number }[] = []
                    let lastMonth = -1
                    heatmapWeeks.forEach((week, weekIndex) => {
                      const firstDay = week.find(d => d !== null)
                      if (firstDay) {
                        const date = new Date(firstDay.date + 'T00:00:00Z')
                        const month = date.getUTCMonth()
                        if (month !== lastMonth) {
                          monthLabels.push({
                            month: date.toLocaleDateString('en-US', { month: 'short', timeZone: 'UTC' }),
                            position: weekIndex * 20
                          })
                          lastMonth = month
                        }
                      }
                    })
                    return (
                      <div className="flex relative">
                        {monthLabels.map((label, idx) => (
                          <div key={idx} style={{ position: 'absolute', left: label.position }} className="w-10">
                            {label.month}
                          </div>
                        ))}
                      </div>
                    )
                  })()}
                </div>
                <div className="flex gap-1">
                  {heatmapWeeks.map((week, weekIndex) => (
                    <div key={weekIndex} className="flex flex-col gap-1">
                      {week.map((day, dayIndex) => (
                        <div key={dayIndex} className="relative group">
                          <div
                            className="w-4 h-4 rounded-sm"
                            style={{ backgroundColor: getHeatmapColor(maxCost, day?.value || 0) }}
                          />
                          {day && (
                            <div className="absolute z-10 invisible group-hover:visible -top-2 left-6">
                              <div className="bg-gray-900 border border-gray-700 rounded-lg p-2 shadow-lg whitespace-nowrap">
                                <p className="text-gray-300 text-xs font-medium mb-1">{day.formattedDate}</p>
                                <p className="text-[#c15f3c] font-bold text-sm">Cost: ${day.cost.toFixed(2)}</p>
                                <p className="text-gray-400 text-xs">Tokens: {(day.tokens / 1000000).toFixed(2)}M</p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 text-xs text-gray-400">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#1f2937' }}></div>
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#4a3328' }}></div>
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#6b4530' }}></div>
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#8d5738' }}></div>
                <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#c15f3c' }}></div>
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      ) : (
        <>
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
          <ResponsiveContainer width="100%" height={400}>
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
        </>
      )}
    </section>
  )
}

