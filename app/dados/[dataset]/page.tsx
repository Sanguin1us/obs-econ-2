"use client"
import { useParams } from "next/navigation"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useMemo } from "react"
import { datasetData } from "@/lib/datasetData"

export default function VisualizarDadosPage() {
  const params = useParams()
  const datasetParam = Array.isArray(params.dataset) ? params.dataset[0] : params.dataset || ""
  const datasetName = decodeURIComponent(datasetParam)

  // Pull the array of data from /lib/datasetData.ts
  // Fallback to an empty array if not found
  const data = useMemo(() => {
    return datasetData[datasetName] || []
  }, [datasetName])

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
