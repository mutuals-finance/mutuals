"use client";

import { type MotionBoxProps, MotionBox } from "@mutuals/ui";

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
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={wrapperVariants}
      {...props}
    >
      {children}
    </MotionBox>
  );
}
