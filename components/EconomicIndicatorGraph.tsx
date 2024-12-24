"use client"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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

  return (
    <div className="w-full h-64">
      <h3 className="text-lg font-semibold mb-2">{indicator.name}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={indicator.data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <CartesianGrid stroke="#f0f0f0" vertical={false} />
          <XAxis 
            dataKey="month" 
            tick={{ fill: '#6B7280' }}
            axisLine={{ stroke: '#E5E7EB' }}
            tickFormatter={formatMonth}
            interval={1}
          />
          <YAxis 
            tick={{ fill: '#6B7280' }}
            axisLine={{ stroke: '#E5E7EB' }}
            tickFormatter={formatValue}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#ffffff',
              border: '1px solid #E5E7EB',
              borderRadius: '6px'
            }}
            labelFormatter={formatMonth}
            formatter={(value) => [formatValue(Number(value)), indicator.name]}
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#2563eb" 
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

