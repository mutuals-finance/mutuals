import React from 'react';

import { Group } from '@visx/group';
import { Pie } from '@visx/shape';

import MotionPieArch, { ArchData } from './MotionPieArch';
import usePieChart from './usePieChart';
import { ParentSize } from '@visx/responsive';

interface PieChartProps {
  data: ArchData[];
}

interface PieChartInnerProps extends PieChartProps {
  size: number;
}

function PieChartInner({ size, data }: PieChartInnerProps) {
  const { colorScale, innerRadius, outerRadius, x, y } = usePieChart(
    data,
    size
  );

  function handleMouseOut() {
    console.log('handleMouseOut');
  }

  function handleMouseMove() {
    console.log('handleMouseMove');
  }

  return (
    <svg width={size} height={size} className={'overflow-visible'}>
      <Group left={size >> 1} top={size >> 1}>
        <Pie
          data={data}
          outerRadius={outerRadius}
          innerRadius={innerRadius}
          pieValue={y}
          padAngle={Math.PI / 180}
        >
          {({ arcs, path }) => {
            return (
              <>
                <text
                  x={'50%'}
                  y={'50%'}
                  dx='-50%'
                  dy='-50%'
                  fontSize={'1rem'}
                  className={'fill-current font-semibold'}
                  textAnchor='middle'
                >
                  {arcs.length} Payee{arcs.length > 1 ? 's' : ''}
                </text>

                {arcs.map((arch, i) => {
                  const { data } = arch;

                  return (
                    <MotionPieArch
                      onMouseMove={handleMouseMove}
                      onMouseOut={handleMouseOut}
                      key={x(data)}
                      fill={colorScale(i)}
                      path={path(arch)}
                      {...data}
                    />
                  );
                })}
              </>
            );
          }}
        </Pie>
      </Group>
    </svg>
  );
}

export default function PieChart({ data }: PieChartProps) {
  return (
    <ParentSize className={'w-full'}>
      {({ width }) => width > 0 && <PieChartInner size={width} data={data} />}
    </ParentSize>
  );
}
