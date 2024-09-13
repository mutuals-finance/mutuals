"use client";

import { motion, MotionProps } from "framer-motion";
import { BoxProps, chakra } from "@chakra-ui/react";
import { forwardRef } from "react";

export const MotionBox = motion(
  forwardRef<
    "div",
    Omit<MotionProps & Omit<BoxProps, "transition">, "children">
  >(({ transition: _, ...props }, ref) => {
    return <chakra.div ref={ref} {...props} />;
  }),
);
