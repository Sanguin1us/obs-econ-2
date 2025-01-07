"use client"
import { useParams } from "next/navigation"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useMemo } from "react"
import { datasetData } from "@/lib/datasetData"
import { Download } from "lucide-react"

export default function VisualizarDadosPage() {
  const params = useParams()
  const datasetParam = Array.isArray(params.dataset) ? params.dataset[0] : params.dataset || ""
  const datasetName = decodeURIComponent(datasetParam)

  // Retrieve the data from datasetData
  const data = useMemo(() => {
    return datasetData[datasetName] || []
  }, [datasetName])

  const formatMonth = (m: string) => {
    return m
  }

  // Function to handle CSV download
  const handleDownload = () => {
    if (!data.length) return

    // Build CSV content
    const headers = ["month,value"]
    const rows = data.map(item => `${item.month},${item.value}`)
    const csvContent = [headers.join(","), ...rows].join("\n")

    // Create a Blob from the CSV string
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)

    // Create a temporary link to trigger the download
    const link = document.createElement("a")
    link.href = url
    link.setAttribute("download", `${datasetName}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Release the object URL
    URL.revokeObjectURL(url)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header with Title and Download Button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">{datasetName}</h1>
        <button
          onClick={handleDownload}
          className="flex items-center space-x-1 px-3 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
          aria-label={`Download ${datasetName} CSV`}
        >
          <Download size={16} />
          <span className="text-sm">Download CSV</span>
        </button>
      </div>

      {/* Chart Container */}
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
