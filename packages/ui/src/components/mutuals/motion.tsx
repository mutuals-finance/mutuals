"use client";

import { motion, MotionProps } from "framer-motion";
import { BoxProps, chakra } from "@chakra-ui/react";
import { forwardRef } from "react";

export type MotionBoxProps = MotionProps & Omit<BoxProps, "transition">;

const ChakraMotionBox = forwardRef<"div", MotionBoxProps>(
  ({ transition: _, ...props }, ref) => {
    return <chakra.div ref={ref} {...props} />;
  },
);

ChakraMotionBox.displayName = "MotionBox";

export const MotionBox = motion.create(ChakraMotionBox);
