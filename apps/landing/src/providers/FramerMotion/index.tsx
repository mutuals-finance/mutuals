"use client";

import { PropsWithChildren } from "react";
import { MotionConfig } from "framer-motion";

export default function FramerMotionProvider({ children }: PropsWithChildren) {
  return (
    <MotionConfig
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 12,
        mass: 0.6,
      }}
    >
      {children}
    </MotionConfig>
  );
}
