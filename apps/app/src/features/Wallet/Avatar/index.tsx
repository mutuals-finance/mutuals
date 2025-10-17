"use client";

import { AvatarRoot, AvatarFallback, type AvatarProps } from "@mutuals/ui";
import React from "react";
import dynamic from "next/dynamic";

const JazzIcon = dynamic(
  () => import("@ukstv/jazzicon-react").then((mod) => mod.Jazzicon),
  { ssr: false },
);

interface WalletAvatarProps extends AvatarProps {
  address?: string;
}

export default function WalletAvatar({
  address = "",
  size = "2xs",
  variant = "subtle",
  ...props
}: WalletAvatarProps) {
  return (
    <AvatarRoot size={size} shape="rounded" variant={variant} {...props}>
      <AvatarFallback
        css={{
          "& > *": {
            width: "var(--avatar-size)",
            height: "var(--avatar-size)",
          },
        }}
      >
        <JazzIcon address={address} />
      </AvatarFallback>
    </AvatarRoot>
  );
}
