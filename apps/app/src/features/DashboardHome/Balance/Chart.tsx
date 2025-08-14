"use client";

import { Chart, useChart, recharts } from "@mutuals/ui";

const { Area, AreaChart, CartesianGrid, XAxis, YAxis } = recharts;

const data = [
  { month: "January", balanceUSD: 0 },
  { month: "February", balanceUSD: 0 },
  { month: "March", balanceUSD: 0 },
  { month: "April", balanceUSD: 0 },
  { month: "May", balanceUSD: 0 },
  { month: "June", balanceUSD: 0 },
  { month: "July", balanceUSD: 0 },
  { month: "August", balanceUSD: 0 },
  { month: "September", balanceUSD: 0 },
  { month: "October", balanceUSD: 0 },
  { month: "November", balanceUSD: 0 },
  { month: "December", balanceUSD: 0 },
];

export default function DashboardBalanceChart() {
  const chart = useChart({
    data,
    series: [{ name: "balanceUSD", color: "teal.solid" }],
  });

  return (
    <Chart.Root maxH="2xs" chart={chart}>
      <AreaChart data={chart.data}>
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={chart.key("month")}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          orientation={"right"}
          domain={[0, 100000]}
          axisLine={false}
          tickLine={false}
          tickFormatter={chart.formatNumber({
            style: "currency",
            currency: "USD",
            currencyDisplay: "narrowSymbol",
            notation: "compact",
          })}
        />
        <Area
          type="monotone"
          isAnimationActive={true}
          dataKey={chart.key("balanceUSD")}
          stroke={chart.color("gray.solid")}
        />
      </AreaChart>
    </Chart.Root>
  );
}
