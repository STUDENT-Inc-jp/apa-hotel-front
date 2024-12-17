'use client';

import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface ChartProps {
  data: Array<{ rating: number; count: number }>;
}

export function BarChart({ data }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="rating" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="count" fill="hsl(var(--primary))" />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
}