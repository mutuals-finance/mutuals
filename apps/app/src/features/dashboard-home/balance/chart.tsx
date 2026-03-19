"use client";

import { Chart, recharts, useChart } from "@mutuals/ui";

const { Area, AreaChart, CartesianGrid, XAxis, YAxis } = recharts;

const generateData = () => {
  const data: {
    date: Date;
    balanceUSD: number;
  }[] = [];
  const today = new Date();

  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    data.push({
      date,
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
    <Chart.Root chart={chart} maxH="xs">
      <AreaChart data={chart.data} responsive>
        <CartesianGrid
          stroke={chart.color("border")}
          strokeDasharray="3 3"
          vertical={true}
        />

        <XAxis
          axisLine={false}
          dataKey={chart.key("date")}
          tickFormatter={chart.formatDate({ month: "short", day: "2-digit" })}
          tickLine={false}
        />
        <YAxis
          axisLine={false}
          domain={[0, 100_000]}
          orientation={"right"}
          tickFormatter={chart.formatNumber({
            style: "currency",
            currency: "USD",
            currencyDisplay: "narrowSymbol",
            notation: "compact",
          })}
          tickLine={false}
          width={40}
        />
        <Area
          dataKey={chart.key("balanceUSD")}
          fill={chart.color("brand.solid")}
          fillOpacity={0.1}
          isAnimationActive={true}
          stroke={chart.color("brand.solid")}
          type="monotone"
        />
      </AreaChart>
    </Chart.Root>
  );
}
