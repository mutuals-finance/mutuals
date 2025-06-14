"use client";

import { AvatarFallback, type AvatarProps, AvatarRoot } from "@mutuals/ui";
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
  size = "xs",
  ...props
}: WalletAvatarProps) {
  return (
    <AvatarRoot size={size} {...props}>
      <AvatarFallback>
        <JazzIcon address={address} />
      </AvatarFallback>
    </AvatarRoot>
  );
}
