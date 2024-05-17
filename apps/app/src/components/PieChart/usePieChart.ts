import { scaleLinear } from '@visx/scale';
import { useMemo } from 'react';

import { ArchData } from './MotionPieArch';

export default function usePieChart(data: ArchData[], size: number) {
  const outerRadius = size >> 1;
  const innerRadius = outerRadius / 1.2;

  const y = (d: ArchData) => d.value;
  const x = (d: ArchData) => d.id;

  const colorScale = useMemo(
    () =>
      scaleLinear({
        domain: [0, data.length],
        range: ['#E3E6FE', '#6E7DF8'],
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
