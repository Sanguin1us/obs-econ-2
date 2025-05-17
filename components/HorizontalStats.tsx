"use client"
import React, { useState, useMemo, useEffect, useRef } from "react"
import {
  TrendingUp,
  Users,
  ChevronUp,
  ChevronDown,
  X,
  Pause,
  Play,
  Info,
  Briefcase,
  Tag
} from "lucide-react"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

type HistoricalDataPoint = {
  date: string
  value: number
}

type StatDefinition = {
  id: string
  icon: React.ElementType
  label: string
  fullLabel?: string  // New property for the full label
  baseValue: number
  isPercentage?: boolean // true if we display "%" as the suffix
  isInverted?: boolean  // true if "up" is red and "down" is green
  description?: string  // shown in hover tooltip near "Evolução"
  color?: string
  prefix?: string
  suffix?: string
}

type StatData = StatDefinition & {
  value: number
  change: number // we'll store the absolute difference (lastValue - firstValue)
  historicalData: HistoricalDataPoint[]
}

const ROTATION_INTERVAL = 5000
const BASE_DURATION = 2000
const ANIMATION_MULTIPLIER = 1.75
const FINAL_DURATION = Math.floor(BASE_DURATION * ANIMATION_MULTIPLIER)
const LINE_CHART_ANIMATION_DURATION = FINAL_DURATION // Recharts line animation

type AnimatedCounterProps = {
  end: number
  duration?: number
  isPercentage?: boolean
  prefix?: string
  suffix?: string
  animate?: boolean
}

const AnimatedCounter = ({
  end,
  duration = BASE_DURATION,
  isPercentage = false,
  prefix = "",
  suffix = "",
  animate = false
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (!animate || hasAnimated) return

    const totalDuration = duration * ANIMATION_MULTIPLIER
    let startTimestamp: number

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const rawProgress = (timestamp - startTimestamp) / totalDuration
      const progress = Math.min(rawProgress, 1)

      // Cosine interpolation for a smoother step
      const eased = (1 - Math.cos(Math.PI * progress)) / 2
      setCount(end * eased)

      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setHasAnimated(true)
      }
    }
    window.requestAnimationFrame(step)
  }, [animate, hasAnimated, end, duration])

  const displayNumber = isPercentage
    ? `${count.toFixed(1)}%`
    : `${prefix}${Math.round(count).toLocaleString()}${suffix}`

  return (
    <div className="text-4xl font-bold text-blue-900">
      {displayNumber}
    </div>
  )
}

/**
 * Generate random data for 12 months based on baseValue.
 * Each month fluctuates by up to 'volatility' fraction around baseValue.
 */
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
  isPercentage?: boolean
  prefix?: string
  suffix?: string
  color?: string
}

const StatGraph = ({
  data,
  label,
  isPercentage,
  prefix,
  suffix,
  color = "#2563eb"
}: StatGraphProps) => {
  const formatValue = (value: number) => {
    if (value === undefined || value === null) return ""
    if (isPercentage) {
      return `${value.toFixed(1)}%`
    } else {
      return `${prefix ?? ""}${Math.round(value).toLocaleString()}${suffix ?? ""}`
    }
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
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
        >
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
            isAnimationActive={true}
            animationDuration={LINE_CHART_ANIMATION_DURATION}
            animationEasing="ease-in-out"
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
  change: number
  isPercentage?: boolean
  isInverted?: boolean
  prefix?: string
  suffix?: string
  isSelected: boolean
  onClick: () => void
  animate?: boolean
}

const StatCard = ({
  icon: Icon,
  label,
  value,
  change,
  isPercentage = false,
  isInverted = false,
  prefix = "",
  suffix = "",
  isSelected,
  onClick,
  animate = false
}: StatCardProps) => {
  /**
   * "isInverted" means if "change" is positive => color is RED, negative => color is GREEN
   * Otherwise (typical case), positive => GREEN, negative => RED
   */
  const isPositiveChange = change >= 0
  let arrowColorClass = isPositiveChange ? "text-green-500" : "text-red-500"
  if (isInverted) {
    arrowColorClass = isPositiveChange ? "text-red-500" : "text-green-500"
  }

  // Format the absolute difference
  // If it's percentage => "1.0%", else => "R$400 Bilhões"
  const displayChange = isPercentage
    ? `${Math.abs(change).toFixed(1)}%`
    : `${prefix}${Math.abs(Math.round(change)).toLocaleString()}${suffix}`

  return (
    <button
      type="button"
      className={`flex-1 px-6 py-4 border-r last:border-r-0 border-gray-200 transition-all duration-300
        ${isSelected ? "bg-blue-50" : "hover:bg-gray-50"}`}
      onClick={onClick}
      aria-pressed={isSelected}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-3 p-3 bg-blue-50 rounded-lg">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        <AnimatedCounter
          end={value}
          animate={animate}
          isPercentage={isPercentage}
          prefix={prefix}
          suffix={suffix}
        />
        <div className="mt-2 text-gray-600 font-medium">{label}</div>
        <div className={`mt-2 flex items-center ${arrowColorClass}`}>
          {isPositiveChange ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
          <span className="ml-1 text-sm font-medium">
            {displayChange}
          </span>
        </div>
      </div>
    </button>
  )
}

export default function HorizontalStats() {
  const [selectedStat, setSelectedStat] = useState<string | null>(null)
  const [isAutoRotating, setIsAutoRotating] = useState(true)
  const [animateNumbers, setAnimateNumbers] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  // Observe container for animation trigger
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

  /**
   * Four categories:
   *  1) PIB (12 meses) => display "R$xxx Bilhões" (+ up => green)
   *  2) Novos Empregos (acumulado) => numeric count, up => green
   *  3) Desemprego => % with up => red (inverted)
   *  4) Inflação => % with up => red (inverted)
   */
  const stats: StatData[] = useMemo(() => {
    const statDefinitions: StatDefinition[] = [
      {
        id: "pib",
        icon: TrendingUp,
        label: "PIB",
        fullLabel: "PIB (12 meses)",
        baseValue: 300, // baseline
        isPercentage: false,
        isInverted: false,
        description: "Produto Interno Bruto dos últimos 12 meses, conforme calculado pelo IBGE.",
        color: "#2563eb",
        prefix: "R$ ",
        suffix: "B"
      },
      {
        id: "empregos",
        icon: Users,
        label: "Novos Empregos",
        fullLabel: "Novos Empregos (acumulado)",
        baseValue: 45000,
        isPercentage: false,
        isInverted: false,
        description: "Número acumulado de novos empregos criados no período.",
        color: "#059669"
      },
      {
        id: "desemprego",
        icon: Briefcase,
        label: "Desemprego",
        baseValue: 9,
        isPercentage: true,
        isInverted: true, // up => red
        description: "Taxa de desemprego em porcentagem da força de trabalho.",
        color: "#DC2626"
      },
      {
        id: "inflacao",
        icon: Tag,
        label: "Inflação",
        baseValue: 3,
        isPercentage: true,
        isInverted: true, // up => red
        description: "Variação de preços medida em 12 meses (IPC).",
        color: "#7C3AED"
      }
    ]

    return statDefinitions.map((stat) => {
      const historicalData = generateHistoricalData(12, stat.baseValue, 0.08)
      const lastValue = historicalData[historicalData.length - 1].value
      const firstValue = historicalData[0].value
      const change = lastValue - firstValue // absolute difference

      return {
        ...stat,
        value: lastValue,
        change,
        historicalData
      }
    })
  }, [])

  // Automatically rotate the selectedStat
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
        {/* Stat Cards */}
        <div className="flex flex-wrap md:flex-nowrap divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
              change={stat.change}
              isPercentage={stat.isPercentage}
              isInverted={stat.isInverted}
              prefix={stat.prefix}
              suffix={stat.suffix}
              isSelected={selectedStat === stat.id}
              onClick={() => handleStatClick(stat.id)}
              animate={animateNumbers}
            />
          ))}
        </div>

        {/* Detailed Graph Section */}
        {selectedStat && selectedStatData && (
          <div className="border-t border-gray-200">
            <div className="p-4 bg-gray-50 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold text-gray-700">
                  Evolução: {selectedStatData.fullLabel || selectedStatData.label}
                </h3>
                {/* Info icon (hover tooltip) */}
                <div className="relative group inline-block">
                  <Info className="w-5 h-5 text-gray-500 cursor-pointer" />
                  <div className="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity absolute bg-white border border-gray-200 rounded p-2 text-sm text-gray-700 w-56 z-50 mt-2">
                    {selectedStatData.description || "Sem descrição"}
                  </div>
                </div>
              </div>
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
                isPercentage={selectedStatData.isPercentage}
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
