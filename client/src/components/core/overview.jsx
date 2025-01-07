"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  { name: "Jan", total: 1500 },
  { name: "Feb", total: 2800 },
  { name: "Mar", total: 1800 },
  { name: "Apr", total: 3500 },
  { name: "May", total: 1900 },
  { name: "Jun", total: 2500 },
  { name: "Jul", total: 2200 },
  { name: "Aug", total: 4800 },
  { name: "Sep", total: 3800 },
  { name: "Oct", total: 2800 },
  { name: "Nov", total: 4800 },
  { name: "Dec", total: 4300 },
]

export function Overview({
  data,
  tickFormatter
}) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => tickFormatter ?? `${value}`}
        />
        <Bar
          dataKey="total"
          fill="var(--chart-1)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}