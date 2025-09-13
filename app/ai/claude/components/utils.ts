import { CCData, DailyData, HeatmapDay } from './types'

export const COLORS = ['#c15f3c', '#b1ada1', '#f4f3ee', '#c15f3c', '#b1ada1', '#f4f3ee']

export const MODEL_LABELS: Record<string, string> = {
  'claude-sonnet-4-20250514': 'Sonnet 4',
  'claude-opus-4-1-20250805': 'Opus 4.1',
}

export const getModelLabel = (modelName: string): string => {
  return MODEL_LABELS[modelName] || modelName
}

export const formatCurrency = (value: number) => `$${value.toFixed(2)}`
export const formatTokens = (value: number) => `${value.toFixed(1)}M`

export const computeStreak = (daily: DailyData[]): number => {
  if (!daily.length) return 0
  const datesSet = new Set(daily.map(d => d.date))
  const latest = daily
    .map(d => new Date(d.date + 'T00:00:00Z'))
    .reduce((a, b) => (a > b ? a : b))

  const toKey = (d: Date) => {
    const y = d.getUTCFullYear()
    const m = (d.getUTCMonth() + 1).toString().padStart(2, '0')
    const day = d.getUTCDate().toString().padStart(2, '0')
    return `${y}-${m}-${day}`
  }

  let count = 0
  for (
    let d = new Date(latest.getTime());
    ;
    d = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() - 1))
  ) {
    const key = toKey(d)
    if (datesSet.has(key)) count++
    else break
  }
  return count
}

export const formatStreakCompact = (days: number) => {
  if (days >= 365) return `${Math.floor(days / 365)}y`
  if (days >= 30) return `${Math.floor(days / 30)}mo`
  if (days >= 7) return `${Math.floor(days / 7)}w`
  return `${days}d`
}

export const computeFilledDailyRange = (daily: DailyData[]): DailyData[] => {
  if (!daily.length) return []

  const dates = daily.map(d => new Date(d.date + 'T00:00:00Z'))
  const start = dates.reduce((a, b) => (a < b ? a : b))
  const end = dates.reduce((a, b) => (a > b ? a : b))

  const byDate = new Map<string, DailyData>(
    daily.map(d => [d.date, d] as const)
  )

  const result: DailyData[] = []
  for (
    let d = new Date(start.getTime());
    d <= end;
    d = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1))
  ) {
    const y = d.getUTCFullYear()
    const m = (d.getUTCMonth() + 1).toString().padStart(2, '0')
    const day = d.getUTCDate().toString().padStart(2, '0')
    const key = `${y}-${m}-${day}`

    if (byDate.has(key)) {
      result.push(byDate.get(key)!)
    } else {
      result.push({
        date: key,
        inputTokens: 0,
        outputTokens: 0,
        cacheCreationTokens: 0,
        cacheReadTokens: 0,
        totalTokens: 0,
        totalCost: 0,
        modelsUsed: [],
        modelBreakdowns: [],
      })
    }
  }
  return result
}

export const buildDailyTrendData = (daily: DailyData[]) => {
  const filled = computeFilledDailyRange(daily)
  return filled.map(day => ({
    date: new Date(day.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
    cost: day.totalCost,
    tokens: day.totalTokens / 1000000,
    inputTokens: day.inputTokens / 1000,
    outputTokens: day.outputTokens / 1000,
    cacheTokens: (day.cacheCreationTokens + day.cacheReadTokens) / 1000000,
  }))
}

export const prepareHeatmapData = (daily: DailyData[]): (HeatmapDay | null)[][] => {
  const dayMap = new Map<string, DailyData>()
  daily.forEach(day => {
    dayMap.set(day.date, day)
  })

  const today = new Date()
  const startOfYear = new Date(Date.UTC(today.getUTCFullYear(), 0, 1))
  const endDate = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()))

  const weeks: (HeatmapDay | null)[][] = []
  let currentWeek: (HeatmapDay | null)[] = []

  const firstDay = startOfYear.getUTCDay()
  const startDate = new Date(startOfYear)
  startDate.setUTCDate(startDate.getUTCDate() - firstDay)

  for (
    let d = new Date(startDate);
    d <= endDate;
    d = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1))
  ) {
    if (d < startOfYear) {
      currentWeek.push(null)
      if (d.getUTCDay() === 6) {
        weeks.push(currentWeek)
        currentWeek = []
      }
      continue
    }
    const dateStr = `${d.getUTCFullYear()}-${(d.getUTCMonth() + 1).toString().padStart(2, '0')}-${d.getUTCDate().toString().padStart(2, '0')}`
    const dayData = dayMap.get(dateStr)

    currentWeek.push({
      date: dateStr,
      value: dayData ? dayData.totalCost : 0,
      tokens: dayData ? dayData.totalTokens : 0,
      cost: dayData ? dayData.totalCost : 0,
      day: d.getUTCDay(),
      formattedDate: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
    })

    if (d.getUTCDay() === 6 || d.getTime() === endDate.getTime()) {
      while (currentWeek.length < 7) {
        currentWeek.push(null)
      }
      weeks.push(currentWeek)
      currentWeek = []
    }
  }

  return weeks
}

export const getHeatmapColor = (maxCost: number, value: number) => {
  if (value === 0) return '#1f2937'
  const denominator = maxCost === 0 ? 1 : maxCost
  const intensity = value / denominator

  if (intensity < 0.25) return '#4a3328'
  if (intensity < 0.5) return '#6b4530'
  if (intensity < 0.75) return '#8d5738'
  return '#c15f3c'
}

export const buildModelUsageData = (daily: DailyData[]) => {
  const raw = daily.reduce((acc, day) => {
    day.modelBreakdowns.forEach(model => {
      const label = getModelLabel(model.modelName)
      const existing = acc.find(m => m.name === label)
      if (existing) {
        existing.value += model.cost
      } else {
        acc.push({ name: label, value: model.cost })
      }
    })
    return acc
  }, [] as { name: string; value: number }[])
  return raw.sort((a, b) => b.value - a.value)
}

export const buildTokenTypeData = (totals: CCData['totals']) => ([
  { name: 'Input', value: totals.inputTokens },
  { name: 'Output', value: totals.outputTokens },
  { name: 'Cache Creation', value: totals.cacheCreationTokens },
  { name: 'Cache Read', value: totals.cacheReadTokens },
])

