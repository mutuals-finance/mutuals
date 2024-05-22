"use client";

import Link, { type LinkProps } from "next/link";
import React from "react";

import { SplitFiLogo } from "@splitfi/ui";

export default function Logo({ href = "/", ...props }: Partial<LinkProps>) {
  return (
    <Link href={href} {...props}>
      <SplitFiLogo />
    </Link>
  );
}
