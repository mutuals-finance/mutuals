"use client";

import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { useLayout } from "@/features/Layout/Provider";
import { Box, MotionBox, Stack, StackProps } from "@mutuals/ui";

export default function NavContainer({ children, ...props }: StackProps) {
  const { activeRef, hoveredRef } = useLayout();
  const containerRef = useRef<HTMLDivElement>(null);
  const [backgroundProps, setBackgroundProps] = useState({
    x: 0,
    width: 0,
    opacity: 0,
  });
  const prevXRef = useRef(0);

  useEffect(() => {
    const targetRef = hoveredRef || activeRef;

    if (targetRef?.current && containerRef.current) {
      const targetRect = targetRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const newX = targetRect.left - containerRect.left;

      setBackgroundProps({
        x: newX,
        width: targetRect.width,
        opacity: 1,
      });

      prevXRef.current = newX;
    } else {
      setBackgroundProps((prev) => ({
        ...prev,
        opacity: 0,
      }));
    }
  }, [activeRef, hoveredRef]);

  // Determine direction for animation
  const isMovingRight = backgroundProps.x > prevXRef.current;

  return (
    <Stack ref={containerRef} position="relative" direction={"row"} {...props}>
      <MotionBox
        position="absolute"
        height="100%"
        bg="gray.subtle"
        borderRadius="lg"
        pointerEvents="none"
        zIndex="0"
        animate={{
          x: backgroundProps.x,
          width: backgroundProps.width,
          opacity: backgroundProps.opacity,
        }}
        initial={false}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
          mass: 0.8,
        }}
        style={{
          originX: isMovingRight ? 0 : 1,
        }}
      />
      {children}
    </Stack>
  );
}
