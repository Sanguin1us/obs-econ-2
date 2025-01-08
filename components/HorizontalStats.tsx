"use client"
import React, { useState, useMemo, useEffect, useRef } from "react"
import { TrendingUp, Users, Building, BadgeDollarSign, ChevronUp, ChevronDown, X, Pause, Play } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

type HistoricalDataPoint = {
  date: string
  value: number
}

type StatDefinition = {
  id: string
  icon: React.ElementType
  label: string
  baseValue: number
  prefix?: string
  suffix?: string
  volatility?: number
  color?: string
}

type StatData = StatDefinition & {
  value: number
  change: string
  historicalData: HistoricalDataPoint[]
}

const ROTATION_INTERVAL = 5000

type AnimatedCounterProps = {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  animate?: boolean
}

const AnimatedCounter = ({
  end,
  duration = 3200,
  prefix = "",
  suffix = "",
  animate = false
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!animate || hasAnimated) return

    let startTimestamp: number
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setHasAnimated(true)
      }
    }
    window.requestAnimationFrame(step)
  }, [animate, hasAnimated, end, duration])

  return (
    <div className="text-4xl font-bold text-blue-900">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  )
}

function generateHistoricalData(
  months = 12,
  baseValue: number,
  volatility = 0.1
): HistoricalDataPoint[] {
  const data: HistoricalDataPoint[] = []
  let currentValue = baseValue

  for (let i = months; i >= 0; i--) {
    const date = new Date()
    date.setMonth(date.getMonth() - i)
    const change = (Math.random() - 0.5) * 2 * volatility
    currentValue = currentValue * (1 + change)

    const isJanuary = date.getMonth() === 0
    const isFirstOrLast = i === months || i === 0
    const dateLabel = isJanuary || isFirstOrLast
      ? date.toLocaleString("pt-BR", { month: "short", year: "2-digit" })
      : date.toLocaleString("pt-BR", { month: "short" })

    data.push({
      date: dateLabel,
      value: Math.round(currentValue * 100) / 100
    })
  }

  return data
}

type StatGraphProps = {
  data: HistoricalDataPoint[]
  label: string
  prefix?: string
  suffix?: string
  color?: string
}

const StatGraph = ({
  data,
  label,
  prefix = "",
  suffix = "",
  color = "#2563eb"
}: StatGraphProps) => {
  const formatValue = (value: number) => {
    if (value === undefined || value === null) return ""
    const formatted = value.toLocaleString("pt-BR", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 0
    })
    return `${prefix}${formatted}${suffix}`
  }

  const CustomTooltip = ({
    active,
    payload,
    label: tooltipLabel
  }: {
    active?: boolean
    payload?: any[]
    label?: string
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-100">
          <p className="text-sm font-medium text-gray-600 mb-1">{tooltipLabel}</p>
          <p className="text-lg font-bold text-blue-600">
            {formatValue(payload[0].value)}
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="w-full h-96">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 30 }}>
          <XAxis
            dataKey="date"
            tick={{ fill: "#6B7280", fontSize: 12 }}
            axisLine={{ stroke: "#E5E7EB" }}
            tickLine={false}
            dy={10}
            interval="preserveStartEnd"
            minTickGap={40}
          />
          <YAxis
            tick={{ fill: "#6B7280", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={formatValue}
            dx={-10}
            domain={["auto", "auto"]}
            padding={{ top: 20, bottom: 20 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6, fill: color, stroke: "#fff", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

type StatCardProps = {
  icon: React.ElementType
  label: string
  value: number
  prefix?: string
  suffix?: string
  change?: number | string | null
  isSelected: boolean
  onClick: () => void
  animate?: boolean
}

const StatCard = ({
  icon: Icon,
  label,
  value,
  prefix = "",
  suffix = "",
  change = null,
  isSelected,
  onClick,
  animate = false
}: StatCardProps) => {
  const isPositive = Number(change) >= 0

  return (
    <div
      className={`flex-1 px-6 py-4 border-r last:border-r-0 border-gray-200 cursor-pointer transition-all duration-300 
        ${isSelected ? "bg-blue-50" : "hover:bg-gray-50"}`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-3 p-3 bg-blue-50 rounded-lg">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        <AnimatedCounter end={value} prefix={prefix} suffix={suffix} animate={animate} />
        <div className="mt-2 text-gray-600 font-medium">{label}</div>
        {change !== null && (
          <div className={`mt-2 flex items-center ${isPositive ? "text-green-500" : "text-red-500"}`}>
            {isPositive ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            <span className="ml-1 text-sm font-medium">
              {Math.abs(Number(change)).toFixed(1)}%
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default function HorizontalStats() {
  const [selectedStat, setSelectedStat] = useState<string | null>(null)
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const [animateNumbers, setAnimateNumbers] = useState(false)

  const containerRef = useRef<HTMLDivElement | null>(null)

  // Observe when the container scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimateNumbers(true)
      },
      { threshold: 0.2 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current)
    }
  }, [])

  const stats: StatData[] = useMemo(() => {
    const statDefinitions: StatDefinition[] = [
      {
        id: "pib",
        icon: TrendingUp,
        label: "PIB Anual",
        baseValue: 324,
        prefix: "R$",
        suffix: "B",
        volatility: 0.03,
        color: "#2563eb"
      },
      {
        id: "empregos",
        icon: Users,
        label: "Novos Empregos",
        baseValue: 45892,
        prefix: "+",
        volatility: 0.08,
        color: "#059669"
      },
      {
        id: "empresas",
        icon: Building,
        label: "Empresas Abertas",
        baseValue: 1247,
        volatility: 0.05,
        color: "#7C3AED"
      },
      {
        id: "investimentos",
        icon: BadgeDollarSign,
        label: "Investimentos",
        baseValue: 2.8,
        prefix: "R$",
        suffix: "B",
        volatility: 0.06,
        color: "#DC2626"
      }
    ]
    return statDefinitions.map((stat) => {
      const historicalData = generateHistoricalData(12, stat.baseValue, stat.volatility)
      const lastValue = historicalData[historicalData.length - 1].value
      const firstValue = historicalData[0].value
      const change = firstValue !== 0 ? ((lastValue - firstValue) / firstValue) * 100 : 0
      return {
        ...stat,
        value: lastValue,
        change: change.toFixed(1),
        historicalData
      }
    })
  }, [])

  // Automatically rotate selectedStat
  useEffect(() => {
    if (!isAutoRotating) return
    const rotateStats = () => {
      setSelectedStat((current) => {
        if (!current) return stats[0].id
        const currentIndex = stats.findIndex((s) => s.id === current)
        return stats[(currentIndex + 1) % stats.length].id
      })
    }
    if (!selectedStat) {
      rotateStats()
    }
    const interval = setInterval(rotateStats, ROTATION_INTERVAL)
    return () => clearInterval(interval)
  }, [isAutoRotating, stats, selectedStat])

  const selectedStatData = selectedStat ? stats.find((s) => s.id === selectedStat) : null

  const handleStatClick = (statId: string) => {
    setSelectedStat(statId)
    setIsAutoRotating(false)
  }

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg">
        <div className="flex flex-wrap md:flex-nowrap divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              change={stat.change}
              isSelected={selectedStat === stat.id}
              onClick={() => handleStatClick(stat.id)}
              animate={animateNumbers}
            />
          ))}
        </div>
        {selectedStat && selectedStatData && (
          <div className="border-t border-gray-200">
            <div className="p-4 bg-gray-50 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-700">
                Evolução: {selectedStatData.label}
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsAutoRotating(!isAutoRotating)}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  {isAutoRotating ? (
                    <Pause className="w-5 h-5 text-gray-500" />
                  ) : (
                    <Play className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                <button
                  onClick={() => {
                    setSelectedStat(null)
                    setIsAutoRotating(true)
                  }}
                  className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <StatGraph
                data={selectedStatData.historicalData}
                label={selectedStatData.label}
                prefix={selectedStatData.prefix}
                suffix={selectedStatData.suffix}
                color={selectedStatData.color}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
