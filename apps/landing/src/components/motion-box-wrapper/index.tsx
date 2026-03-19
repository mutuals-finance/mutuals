"use client";

import { MotionBox, type MotionBoxProps } from "@mutuals/ui";

export type MotionBoxWrapperProps = MotionBoxProps;

export const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
  },
};
export const wrapperVariants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function MotionBoxWrapper({
  children,
  ...props
}: MotionBoxWrapperProps) {
  return (
    <MotionBox
      initial="hidden"
      variants={wrapperVariants}
      viewport={{ once: true, amount: 0.4 }}
      whileInView="show"
      {...props}
    >
      {children}
    </MotionBox>
  );
}
