"use client";

import { Chart, useChart, recharts } from "@mutuals/ui";

const { Area, AreaChart, CartesianGrid, XAxis, YAxis } = recharts;

// Generate the last 7 days as Date objects
const generateData = () => {
  const data = [];
  const today = new Date();

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    data.push({
      date: date,
      balanceUSD: 0,
    });
  }

  return data;
};

const data = generateData();

export default function DashboardBalanceChart() {
  const chart = useChart({
    data,
    series: [{ name: "balanceUSD", color: "teal.solid" }],
  });

  return (
    <Chart.Root maxH="2xs" chart={chart}>
      <AreaChart data={chart.data}>
        <CartesianGrid strokeDasharray="3 3" stroke={chart.color("border")} />

        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey={chart.key("date")}
          tickFormatter={chart.formatDate({ month: "short", day: "2-digit" })}
        />
        <YAxis
          orientation={"right"}
          domain={[0, 100000]}
          axisLine={false}
          tickLine={false}
          width={20}
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
