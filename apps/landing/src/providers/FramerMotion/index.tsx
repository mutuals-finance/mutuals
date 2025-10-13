"use client";

import { PropsWithChildren } from "react";
import { MotionConfig } from "framer-motion";

export default function FramerMotionProvider({ children }: PropsWithChildren) {
  return (
    <MotionConfig
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 12,
        mass: 0.8,
      }}
    >
      {children}
    </MotionConfig>
  );
}
