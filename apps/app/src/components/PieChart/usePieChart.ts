import { scaleLinear } from "@visx/scale";
import { useMemo } from "react";

import { ArchData } from "./MotionPieArch";

export default function usePieChart(
  data: ArchData[],
  size: number,
): {
  outerRadius: number;
  size: number;
  x: (d: ArchData) => string;
  y: (d: ArchData) => number;
  colorScale: any;
  innerRadius: number;
} {
  const outerRadius = size >> 1;
  const innerRadius = outerRadius / 1.2;

  const y = (d: ArchData) => (d.value ? Number(d.value) : 0);
  const x = (d: ArchData) => d.id || "0";

  const colorScale = useMemo(
    () =>
      scaleLinear({
        domain: [0, data.length],
        range: ["#E3E6FE", "#6E7DF8"],
      }),
    [data],
  );

  return {
    size,
    innerRadius,
    outerRadius,
    x,
    y,
    colorScale,
  };
}
