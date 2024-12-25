"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Dot } from 'recharts';
import { EconomicIndicator } from '@/lib/economicData';

interface EconomicIndicatorGraphProps {
  indicator: EconomicIndicator;
}

export default function EconomicIndicatorGraph({ indicator }: EconomicIndicatorGraphProps) {
  const formatMonth = (month: string) => {
    const date = new Date(`2024-${month}-01`);
    return date.toLocaleString('pt-BR', { month: 'short' });
  };

  const formatValue = (value: number) => {
    if (value === 0) return '0%';
    return `${value.toFixed(2).replace(/\.?0+$/, '')}%`;
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-100">
          <p className="text-sm text-gray-600">{formatMonth(label)}</p>
          <p className="text-lg font-semibold text-blue-600">
            {formatValue(payload[0].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomDot = ({ cx, cy, payload }: any) => {
    return (
      <Dot
        cx={cx}
        cy={cy}
        r={4}
        fill="#fff"
        stroke="#2563eb"
        strokeWidth={2}
      />
    );
  };

  return (
    <div className="w-full h-[400px] md:h-[500px] p-4 bg-white rounded-xl shadow-sm">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{indicator.name}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={indicator.data}
          margin={{ top: 20, right: 30, bottom: 20, left: 20 }}
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
            tick={{ fill: '#6B7280' }}
            axisLine={{ stroke: '#E5E7EB' }}
            tickFormatter={formatMonth}
            interval={1}
            padding={{ left: 20, right: 20 }}
          />
          <YAxis 
            tick={{ fill: '#6B7280' }}
            axisLine={{ stroke: '#E5E7EB' }}
            tickFormatter={formatValue}
            width={60}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#2563eb" 
            strokeWidth={2.5}
            dot={<CustomDot />}
            activeDot={{ r: 8, fill: "#2563eb" }}
            animationDuration={1500}
            fill="url(#colorValue)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

