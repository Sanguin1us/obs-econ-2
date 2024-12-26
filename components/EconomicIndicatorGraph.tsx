"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Dot } from 'recharts';
import { EconomicIndicator } from '@/lib/economicData';

interface EconomicIndicatorGraphProps {
  indicator: EconomicIndicator;
}

export default function EconomicIndicatorGraph({ indicator }: EconomicIndicatorGraphProps) {
  const formatMonth = (month: string) => {
    const date = new Date(`2024-${month}-01`);
    return date.toLocaleString('pt-BR', { month: 'long' }).replace(/^\w/, c => c.toUpperCase());
  };

  const formatValue = (value: number) => {
    const absValue = Math.abs(value);
    if (absValue === 0) return '0%';
    if (absValue >= 100) return `${value.toFixed(0)}%`;
    if (absValue < 0.1) return `${value.toFixed(3)}%`;
    return `${value.toFixed(2)}%`;
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-100">
          <p className="text-sm font-medium text-gray-500 mb-1">{formatMonth(label)}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-lg font-bold text-blue-600">
              {formatValue(payload[0].value)}
            </span>
            <span className="text-xs text-gray-500">variação</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[400px] md:h-[500px] p-4 pb-16 bg-white rounded-xl shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{indicator.name}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={indicator.data}
          margin={{ top: 20, right: 30, bottom: 40, left: 20 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid 
            strokeDasharray="3 3" 
            vertical={false} 
            stroke="#f0f0f0"
          />
          <XAxis 
            dataKey="month" 
            tick={{ 
              fill: '#6B7280',
              fontSize: 12,
              fontWeight: 500,
              dy: 10
            }}
            axisLine={{ stroke: '#E5E7EB' }}
            tickFormatter={formatMonth}
            interval="preserveStartEnd"
            angle={-45}
            textAnchor="end"
            height={60}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis 
            tick={{ 
              fill: '#6B7280',
              fontSize: 12,
              fontWeight: 500
            }}
            axisLine={{ stroke: '#E5E7EB' }}
            tickFormatter={formatValue}
            width={65}
            domain={['auto', 'auto']}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#2563eb" 
            strokeWidth={2.5}
            dot={{ 
              r: 2.5,
              fill: "#2563eb",
              strokeWidth: 0
            }}
            activeDot={{ 
              r: 6, 
              fill: "#2563eb",
              stroke: "#fff",
              strokeWidth: 2
            }}
            animationDuration={1500}
            fill="url(#colorValue)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

