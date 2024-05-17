import { Group } from "@visx/group";
import { ParentSize } from "@visx/responsive";
import { Pie } from "@visx/shape";
import React from "react";

import MotionPieArch, { ArchData } from "./MotionPieArch";
import usePieChart from "./usePieChart";

interface PieChartProps {
  data: ArchData[];
  onMouseMove?: (data: ArchData, index: number) => void;
  onMouseOut?: (data: ArchData, index: number) => void;
}

interface PieChartInnerProps extends PieChartProps {
  size: number;
}

function PieChartInner({
  size,
  data,
  onMouseOut,
  onMouseMove,
}: PieChartInnerProps) {
  const { colorScale, innerRadius, outerRadius, x, y } = usePieChart(
    data,
    size,
  );

  return (
    <svg width={size} height={size}>
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
                  x={"50%"}
                  y={"50%"}
                  dx="-50%"
                  dy="-50%"
                  fontSize={"1rem"}
                  textAnchor="middle"
                  fill={"currentColor"}
                >
                  {arcs.length} Payee{arcs.length > 1 ? "s" : ""}
                </text>

                {arcs.map((arch, i) => {
                  const { data } = arch;

                  return (
                    <MotionPieArch
                      onMouseMove={() => onMouseMove?.(arch.data, i)}
                      onMouseOut={() => onMouseOut?.(arch.data, i)}
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

export default function PieChart({ data, ...props }: PieChartProps) {
  return (
    <ParentSize>
      {({ width }) =>
        width > 0 && <PieChartInner size={width} data={data} {...props} />
      }
    </ParentSize>
  );
}
