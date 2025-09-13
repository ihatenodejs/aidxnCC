"use client"

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'
import LoadingSkeleton from './components/LoadingSkeleton'
import PageHeader from './components/PageHeader'
import StatsGrid from './components/StatsGrid'
import Activity from './components/Activity'
import ModelUsageCard from './components/ModelUsageCard'
import TokenTypeBreakdown from './components/TokenTypeBreakdown'
import TokenComposition from './components/TokenComposition'
import RecentSessions from './components/RecentSessions'
import { CCData } from './components/types'

export default function AI() {
  const [data, setData] = useState<CCData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
        <LoadingSkeleton />
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="w-full relative">
        <PageHeader />

        <StatsGrid totals={data.totals} daily={data.daily} />

        <div className="p-4 pb-0">
          <Activity daily={data.daily} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
          <ModelUsageCard daily={data.daily} totalCost={data.totals.totalCost} />
          <TokenTypeBreakdown totals={data.totals} />
          <TokenComposition daily={data.daily} />
        </div>

        <div className="px-4 pb-4">
          <RecentSessions daily={data.daily} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

