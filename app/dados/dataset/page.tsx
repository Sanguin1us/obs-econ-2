"use client"
import { useParams } from "next/navigation"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useMemo } from "react"

export default function VisualizarDadosPage() {
  const params = useParams()
  const datasetName = decodeURIComponent(params.dataset)
  const data = useMemo(() => {
    return [
      { month: "Jan", value: 10 },
      { month: "Feb", value: 12 },
      { month: "Mar", value: 18 },
      { month: "Apr", value: 9 },
      { month: "May", value: 14 },
      { month: "Jun", value: 16 },
      { month: "Jul", value: 13 },
      { month: "Aug", value: 15 },
      { month: "Sep", value: 20 },
      { month: "Oct", value: 22 },
      { month: "Nov", value: 17 },
      { month: "Dec", value: 25 },
    ]
  }, [])

  const formatMonth = (m: string) => {
    return m
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Visualizando: {datasetName}</h1>
      <div className="w-full h-[400px] md:h-[500px] bg-white rounded-lg p-4 shadow-md">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="month" tick={{ fill: '#4B5563' }} tickFormatter={formatMonth} />
            <YAxis tick={{ fill: '#4B5563' }} />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#2563eb" 
              strokeWidth={3} 
              activeDot={{ r: 6 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}