"use client";

import { isValidMotionProp, motion } from "framer-motion";
import { chakra, shouldForwardProp } from "@chakra-ui/react";

export const MotionBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});
