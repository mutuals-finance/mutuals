import { motion } from "framer-motion";
import React, { useCallback } from "react";
import { DeepPartial } from "#/partial";

export type ArchData = {
  id?: string;
  value?: DeepPartial<bigint>;
  isActive?: boolean;
};

export interface MotionPieArchProps extends ArchData {
  fill: string;
  path: string | null;
  isActive?: boolean;
  onMouseMove?: (
    e: React.MouseEvent<SVGPathElement, MouseEvent>,
    data: ArchData,
  ) => void;
  onMouseOut?: (e: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
}

export default function MotionPieArch({
  fill,
  path,
  id,
  value,
  onMouseMove,
  onMouseOut,
}: MotionPieArchProps) {
  const handleOnHover = useCallback(
    (e: React.MouseEvent<SVGPathElement, MouseEvent>) => {
      if (onMouseMove) {
        onMouseMove(e, {
          id,
          value,
        });
      }
    },
    [onMouseMove, id, value],
  );

  return (
    <motion.path
      onMouseMove={handleOnHover}
      onMouseOut={onMouseOut}
      d={path || ""}
      fill={fill}
    />
  );
}
