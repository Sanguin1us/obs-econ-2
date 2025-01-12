"use client"
import { useParams } from "next/navigation"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { useMemo, useState } from "react"
import { datasetData } from "@/lib/datasetData"
import { Download } from "lucide-react"

export default function VisualizarDadosPage() {
  const params = useParams()
  const datasetParam = Array.isArray(params.dataset) ? params.dataset[0] : params.dataset || ""
  const datasetName = decodeURIComponent(datasetParam)

  // Example series map: certain datasets have multiple time series, others just one
  const datasetTimeSeriesMap: Record<string, string[]> = {
    "Contas Regionais - Município do Rio de Janeiro": [
      "Valores Correntes",
      "Valores Deflacionados",
      "Variação",
      "Participação"
    ],
    "Contas Regionais - Estado do Rio de Janeiro": [
      "Valores Correntes",
      "Valores Deflacionados",
      "Variação",
      "Participação"
    ],
    // For all others, just single series named "Principal"
  }

  // The array of series for this dataset, or ["Principal"] if none is found
  const availableSeries = datasetTimeSeriesMap[datasetName] || ["Principal"]
  const [selectedSeries, setSelectedSeries] = useState(availableSeries[0])

  // We still store our "placeholder" data in datasetData for simplicity.
  // If you want different data per series, you can store them separately.
  const data = useMemo(() => {
    // For now, we’re using the same data array for each series as a placeholder
    return datasetData[datasetName] || []
  }, [datasetName, selectedSeries])

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
    link.setAttribute("download", `${datasetName}_${selectedSeries}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Release the object URL
    URL.revokeObjectURL(url)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header with Title, Series Dropdown (if multiple) and Download Button */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 space-y-4 md:space-y-0">
        <h1 className="text-3xl font-bold">{datasetName}</h1>
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-4 space-y-4 sm:space-y-0">
          {availableSeries.length > 1 && (
            <select
              value={selectedSeries}
              onChange={(e) => setSelectedSeries(e.target.value)}
              className="px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-700"
              aria-label="Selecione a série de dados"
            >
              {availableSeries.map((seriesName) => (
                <option key={seriesName} value={seriesName}>
                  {seriesName}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleDownload}
            className="flex items-center space-x-1 px-3 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
            aria-label={`Download ${datasetName} CSV`}
          >
            <Download size={16} />
            <span className="text-sm">Download CSV</span>
          </button>
        </div>
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
