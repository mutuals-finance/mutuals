"use client";

import { motion, MotionProps } from "framer-motion";
import { chakra, ChakraProps, forwardRef } from "@chakra-ui/react";

export const MotionBox = motion(
  forwardRef<MotionProps & ChakraProps, "div">(({ layoutId, ...rest }, ref) => (
    <chakra.div ref={ref} {...(rest as ChakraProps)} />
  )),
);
