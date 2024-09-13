"use client";

import { motion, MotionProps } from "framer-motion";
import { chakra } from "@chakra-ui/react";
import { forwardRef } from "react";

export const MotionBox = motion(
  forwardRef<"div", Omit<MotionProps, "children">>((props, ref) => {
    return <chakra.div ref={ref} {...props} />;
  }),
);
