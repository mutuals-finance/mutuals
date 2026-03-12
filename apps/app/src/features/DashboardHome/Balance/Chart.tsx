"use client";

import { Chart, useChart, recharts } from "@mutuals/ui";

const { Area, AreaChart, CartesianGrid, XAxis, YAxis } = recharts;

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
    series: [{ name: "balanceUSD", color: "brand.solid" }],
  });

  return (
    <Chart.Root maxH="xs" chart={chart}>
      <AreaChart data={chart.data} responsive>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke={chart.color("border")}
          vertical={true}
        />

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
          width={40}
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
          stroke={chart.color("brand.solid")}
          fill={chart.color("brand.solid")}
          fillOpacity={0.1}
        />
      </AreaChart>
    </Chart.Root>
  );
}
