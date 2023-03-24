import { motion } from 'framer-motion';
import React, { useCallback } from 'react';

export type ArchData = {
  id: string;
  value: number;
};

export interface MotionPieArchProps extends ArchData {
  fill: string;
  path: string | null;
  onMouseMove?: (
    e: React.MouseEvent<SVGPathElement, MouseEvent>,
    data: ArchData
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
    [onMouseMove, id, value]
  );

  return (
    <motion.path
      className={
        'cursor-pointer stroke-0 duration-200 ease-in-out hover:stroke-[2%]'
      }
      stroke={fill}
      onMouseMove={handleOnHover}
      onMouseOut={onMouseOut}
      d={path || ''}
      fill={fill}
    />
  );
}
