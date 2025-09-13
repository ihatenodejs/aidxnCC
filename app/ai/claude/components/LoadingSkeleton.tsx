"use client"

import PageHeader from './PageHeader'

export default function LoadingSkeleton() {
  return (
    <main className="w-full relative">
      <PageHeader />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
        <div className="p-6 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
          <h3 className="text-sm font-medium text-gray-400 mb-2">Total Cost</h3>
          <div className="h-9 w-32 bg-gray-800 rounded animate-pulse" />
        </div>
        <div className="p-6 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
          <h3 className="text-sm font-medium text-gray-400 mb-2">Total Tokens</h3>
          <div className="h-9 w-32 bg-gray-800 rounded animate-pulse" />
        </div>
        <div className="p-6 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
          <h3 className="text-sm font-medium text-gray-400 mb-2">Days Active</h3>
          <div className="flex items-center">
            <div className="h-9 w-16 bg-gray-800 rounded animate-pulse" />
            <div className="ml-3 h-5 w-12 bg-gray-800 rounded-full animate-pulse" />
          </div>
        </div>
        <div className="p-6 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300">
          <h3 className="text-sm font-medium text-gray-400 mb-2">Avg Daily Cost</h3>
          <div className="h-9 w-32 bg-gray-800 rounded animate-pulse" />
        </div>
      </div>

      <div className="p-4 pb-0">
        <section className="p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300 relative md:col-span-2 lg:col-span-1">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-200">Activity</h2>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400">Heatmap</span>
              <div className="h-6 w-11 bg-gray-700 rounded-full animate-pulse" />
            </div>
          </div>
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
                    <div className="flex gap-16">
                      {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map((month) => (
                        <div key={month} className="w-12 h-3 bg-gray-800 rounded animate-pulse" />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {(() => {
                      const today = new Date()
                      const startOfYear = new Date(Date.UTC(today.getUTCFullYear(), 0, 1))
                      const endDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()))

                      const firstDay = startOfYear.getUTCDay()
                      const startDate = new Date(startOfYear)
                      startDate.setUTCDate(startDate.getUTCDate() - firstDay)

                      const msPerWeek = 7 * 24 * 60 * 60 * 1000
                      const weekCount = Math.ceil((endDate.getTime() - startDate.getTime()) / msPerWeek)

                      return [...Array(weekCount)].map((_, weekIndex) => (
                        <div key={weekIndex} className="flex flex-col gap-1">
                          {[...Array(7)].map((_, dayIndex) => (
                            <div key={dayIndex} className="w-4 h-4 bg-gray-800 rounded-sm animate-pulse" />
                          ))}
                        </div>
                      ))
                    })()}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 text-xs text-gray-400">
                <span>Less</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-gray-800 rounded-sm animate-pulse" />
                  ))}
                </div>
                <span>More</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        <section className="p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300 col-span-2 lg:col-span-1">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Model Usage Distribution</h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="h-[300px] bg-gray-800 rounded animate-pulse" />
            <div className="flex flex-col justify-center space-y-3">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-800 rounded-full animate-pulse" />
                    <div className="h-4 w-20 bg-gray-800 rounded animate-pulse" />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-10 bg-gray-800 rounded animate-pulse" />
                    <div className="h-4 w-16 bg-gray-800 rounded animate-pulse" />
                  </div>
                </div>
              ))}
              <div className="pt-3 mt-3 border-t border-gray-700">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Models Used</span>
                  <div className="h-5 w-8 bg-gray-800 rounded animate-pulse" />
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-400">Most Used</span>
                  <div className="h-4 w-20 bg-gray-800 rounded animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300 col-span-2 lg:col-span-1">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Token Type Breakdown</h2>
          <div className="h-[300px] bg-gray-800 rounded animate-pulse" />
        </section>
        <section className="p-8 border-2 border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-300 sm:col-span-2">
          <h2 className="text-2xl font-semibold mb-4 text-gray-200">Token Composition</h2>
          <div className="h-[300px] bg-gray-800 rounded animate-pulse" />
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
                {[...Array(5)].map((_, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="py-2 px-4">
                      <div className="h-5 w-24 bg-gray-800 rounded animate-pulse" />
                    </td>
                    <td className="py-2 px-4">
                      <div className="h-5 w-96 bg-gray-800 rounded animate-pulse" />
                    </td>
                    <td className="py-2 px-4">
                      <div className="h-5 w-16 bg-gray-800 rounded animate-pulse" />
                    </td>
                    <td className="py-2 px-4">
                      <div className="h-5 w-20 bg-gray-800 rounded animate-pulse" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}

