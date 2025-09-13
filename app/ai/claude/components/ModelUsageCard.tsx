"use client"

import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts'
import { DailyData } from './types'
import { COLORS, buildModelUsageData, formatCurrency } from './utils'

export default function ModelUsageCard({ daily, totalCost }: { daily: DailyData[]; totalCost: number }) {
  const modelUsageData = buildModelUsageData(daily)
  return (
    <section className="p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300 col-span-2 lg:col-span-1">
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
              {modelUsageData.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: '8px' }}
              formatter={(value: number) => formatCurrency(value)}
              labelStyle={{ color: '#fff' }}
              itemStyle={{ color: '#fff' }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="flex flex-col justify-center space-y-3">
          {modelUsageData.map((model, index) => {
            const percentage = ((model.value / Math.max(totalCost, 1)) * 100).toFixed(1)
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
  )
}

